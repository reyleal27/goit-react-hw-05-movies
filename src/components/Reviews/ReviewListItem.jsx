export const ReviewItem = ({ reviews }) => {
    
    return (
        <li className="ReviewItem">
            <h3>Author: <span className="ReviewAuthor">{reviews.author}</span></h3>
            <p className="ReviewContent">{reviews.content}</p>
        </li>
    )
};