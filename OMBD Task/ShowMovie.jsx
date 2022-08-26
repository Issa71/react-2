import { useNavigate } from 'react-router-dom';

function ShowMovie({
  id, title, rated, year,
}) {
  const navigate = useNavigate();
  return (
    <li>
      {title},
      {rated},
      {year},
      <button   type="button" onClick={() => navigate(`/movie_request/${id}`)}>Details</button>
    </li>
  );
}

export default ShowMovie;