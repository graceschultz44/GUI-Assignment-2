import { useState } from "react";
import { TextField, SelectField, TextAreaField } from "../common";
import { ProductReview } from "../../models";
import { Rating } from "../common";

export const ReviewForm = ({ onReviewAdded }) => {
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [ratingOptions] = useState([
        { value: 1, label: '1 stars' },
        { value: 2, label: '2 stars' },
        { value: 3, label: '3 stars' },
        { value: 4, label: '4 stars' },
        { value: 5, label: '5 stars' }
    ]);

    return (
        <>
            <div className = "card">
                <h2 className = "card-header">
                    Add Review
                </h2>
                <div className = "card-body">
                    <form>
                        <div className = "row justify-content-between">
                            <div className = "col-6">
                                <TextField
                                    label = "Name"
                                    value = { userName }
                                    setValue = { setUserName }
                                />
                            </div>
                            <div className = "col-2">
                                <SelectField
                                    label = "Rating"
                                    value = { rating }
                                    setValue = { setRating }
                                    options = { ratingOptions }
                                    optionValueKey = "value"
                                    optionLabelKey = "label"
                                />
                                
                            </div>
                            <div className = "col-4 align-self-center">
                                <Rating 
                                    value = { rating }
                                /> 
                            </div>
                        </div>
                        
                        <TextAreaField
                            label = "Comment"
                            value = { comment }
                            setValue = { setComment }
                        />
                        <button 
                            type = "button"
                            className = "btn btn-primary"
                            onClick = {() => {
                                onReviewAdded(new ProductReview(userName, rating, comment, new Date().toDateString()));
                                setUserName("");
                                setRating("");
                                setComment("");
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
