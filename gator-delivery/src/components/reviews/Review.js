import React from "react";

const Review = (props) => {
  return (
    <div className="card post-editor">
      <div className="card-body">{props.review.mes}</div>
    </div>
  );
};
export default Review;
