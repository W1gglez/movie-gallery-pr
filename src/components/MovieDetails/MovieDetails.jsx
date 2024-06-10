import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
export default function MovieDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const specificMovie = useSelector((store) => store.specificMovie);
  useEffect(() => {
    dispatch({
      type: "FETCH_SPECIFIC_MOVIE",
      payload: params.id,
    });
  }, []);
  return (
    <>
      <img src={specificMovie.poster}></img>
      <p>{specificMovie.title}</p>
      <p>{specificMovie.genres}</p>
      <p>{specificMovie.description}</p>
      <button onClick={() => (history.push('/'))}>Back To Movies</button>
    </>
  );
}
