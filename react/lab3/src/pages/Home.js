import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import db from '../db.json';
const Home = () => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    setActors(db.artists);
  }, []);
  return actors.map(actor => (
    <div key={actor.id}>
      <img height={200} src={`/images/covers/${actor.cover}.jpg`} alt="actor image" />
      <Link to={`/${actor.id}`}><h3>{actor.name}</h3></Link>
    </div>
  ));
}
export default Home;
