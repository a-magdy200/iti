import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import db from '../db.json';
const SingleActor = () => {
  const params = useParams();
  const id = params?.id || '';
  const [actor, setActor] = useState({});
  useEffect(() => {
    console.log(db.artists, id);
    setActor(db.artists.find((a) => a.id.toString() === id.toString()) || {});
  }, []);
  if (actor.id) {
    return (
      <div>
        <Link to={"/"}><h2>Music DB</h2></Link>
        <img height={200} src={`/images/covers/${actor.cover}.jpg`} />
        <h1>{actor.name}</h1>
        <p>{actor.bio}</p>
        <div>
          {actor.albums.map((album) => (
            <img height={100} key={album.albumId} src={`/images/albums/${album.cover}.jpg`} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
export default SingleActor;
