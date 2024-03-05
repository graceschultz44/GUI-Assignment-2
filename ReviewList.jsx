import { Rating } from "../common";

export const ReviewList = (reviews) => {

    return (
        <>
            <h2>
                Product Reviews ({ reviews.reviews.length })
            </h2>

            {
                (reviews.reviews.length === 0) && 
                <p>
                    Be the first to add a review!
                </p>
            }
            <section>
                {
                    reviews.reviews.map((review, index) => {
                        return (
                            <>
                                <div key = { index } className = "card">
                                    <div className = "card-header">
                                        <Rating
                                            value = { review.rating }
                                        />
                                    </div>
                                    <div className = "card-body">
                                        <div className = "row justify-content-between text-secondary">
                                            <div className = "col-2">{ review.userName }</div>
                                            <div className = "col-2">{ review.date }</div>
                                        </div>
                                        <p className = "card-text">{ review.comment }</p>
                                    </div>
                                </div>
                                <br/>
                            </>
                            
                        )
                    })
                }
            </section>
        </>
    );
}
