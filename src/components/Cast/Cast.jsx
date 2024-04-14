import { getMovieCast } from 'components/Services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastItem from 'components/CastItem/CastItem';
import './CastStyle.css';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castList = await getMovieCast(movieId);
        setCast(castList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);
  console.log(casts);

  return (
    <div className="CastContainer">
      {casts.length !== 0 && (
        <ul className="CastList">
          {casts.map(actor => (
            <CastItem key={actor.id} castItem={actor} />
          ))}
        </ul>
      )}
      {casts.length === 0 && <div>We dont have any cast for this movie</div>}
    </div>
  );
};
export default Cast;
