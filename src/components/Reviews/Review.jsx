import { getMovieReviews } from 'components/Services/api';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from './ReviewListItem';
import './ReviewStyle.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const review = await getMovieReviews(movieId);
        setReviews(review);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReview();
  }, [movieId]);

  return (
    <div className="ReviewContainer">
      {reviews.length !== 0 && (
        <ul className="ReviewList">
          {reviews.map((review, index) => (
            <ReviewItem key={index} reviews={review} />
          ))}
        </ul>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </div>
  );
};
