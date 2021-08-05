// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>
    
const Review = ({headline, byline, link, summary_short}) => {
    return (
        <div key={headline} className="review">
            <header>
                <a className="review-link" href={link.url}>{headline}</a>
                <span className="author">{byline}</span>
            </header>
            <p>{summary_short}</p>
        </div>
    )
}

export default MovieReviews