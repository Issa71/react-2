import ShowMovie from './ShowMovie';

function ListMovies({ data }) {
  return (
    
    <ul>
      {data.map(({
        imdbID, Title, Rated, Year,
      }) => (
        <DisplayMovie
          key={imdbID}
          id={imdbID}
          title={Title}
          rated={Rated}
          year={Year}
        />
      ))}
    </ul>
  );
}

export default ListMovies;