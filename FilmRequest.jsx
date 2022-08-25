import {useState} from 'react';
import axios from 'axios';

const FilmRequest = () => {
  const [data,setData]= useState([]);
  const [filmTitle, setFilmTitle] = useState("");


  const updateTitle = (e) => {
      e.preventDefault(); 
      setFilmTitle(e.target.value);
  }

  const makeRequest =(e) => {
      axios.get(`http://www.omdbapi.com/?apikey=bdb14741&t=${filmTitle}`)
      .then(response => {
          console.log(response.data);
          setData(response.data);
      });
  };

  return (
  <>
      <div>
      <h2>FilmRequest.js</h2>
      <input type="text"  placeholder= "search movie"onChange={(e)=>updateTitle(e)} />
      <button onClick={(e) => makeRequest(e)}>Click me</button>

      <h4>{data.Title}</h4>
      <h4>{data.Year}</h4>
      <h4>{data.Rated}</h4>
      <h4>{data.Genre}</h4>
      <h4>{data.Plot}</h4>
      </div>
  </>
  );
}

export default FilmRequest; 