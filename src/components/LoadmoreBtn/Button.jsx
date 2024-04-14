import './ButtonStyle.css';

const Button = ({ onClick }) => {
  return (
    <div className="LoadMoreContainer">
      <button className="LoadMoreButton" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default Button;
