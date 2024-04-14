import noPoster from 'image/no-poster.jpg';

const CastItem = ({ castItem }) => {
  const { name, profile_path,character } = castItem;
  return (
    <li className='CastItem'>
          <img width='200px'
              height='300px'
          
              
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w300${profile_path}`
            : noPoster
        }
        alt={name}
      />
          <h4>Name: <span className='CastItemName'>{name}</span></h4>
          <h4>Character: <span className='CastItemName'>{character}</span></h4>
    </li>
  );
};

export default CastItem;
