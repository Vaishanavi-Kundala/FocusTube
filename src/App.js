import React, {useState} from 'react'

import SearchBar from './Components/SearchBar';
import ListVids from './Components/listVids';
import SelectedVid from './Components/SelectedVid';
import youtube from './api/youtube';
import './App.css';




function App (){

    const [vids, setVids] = useState([]);
    const [selectedVid, setSelectedVid] = useState(null);
    const [notify, setNotify] = useState (false);


    return (
        <div>
            <div className = "SearchBar">
                <SearchBar submit = {handleSubmit}/>
                {notify && <p>Stay Focused!</p>}
                {selectedVid== null && <ListVids vids = {vids} setSelectedVid = {setSelectedVid}/>}
                {selectedVid!= null && <SelectedVid video = {selectedVid}/>}

            </div>
        </div>
        
    );

    async function getcategoryID (video){
        let vidID = video.id.videoId
        let categoryID;
    
        let res = await youtube.get("videos", {
          params: {
            part: "snippet",
            id: vidID,
            key: 'AIzaSyAk380ZGYhkBsETGDGnXtrnOKGJ5AlpH3k'
          }
        })
    
    
        categoryID = res.data.items[0].snippet.categoryId;
        return categoryID;
      }
    
    
      async function filterVids (videos){
    
          let result= [];
          for(let i=0; i < videos.length; i++){
              let video = videos[i];
              let categoryID = await getcategoryID(video);
    
              if((categoryID == 27 || categoryID == 28)){
                result.push(video);
              }
          }
    
          return result;
      }
    
      async function handleSubmit(searchTerm) {
        
        //reset the values;
        setSelectedVid(null);
        setNotify(false);
        let { data: { items: videos } } = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: 10,
            key: process.env.REACT_APP_API_KEY,
            q: searchTerm,
          }
        });

        console.log(videos);
 
    
        let result = await filterVids(videos);
  //      console.log(result);

        if(result.length === 0){
          setNotify(true);
        }

        setVids(result);
      }



}

export default App;

