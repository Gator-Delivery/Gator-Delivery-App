import React from 'react';

const Post = (props) => {
    
    const currDate = new Date(props.post.date);
   
    const displayDate = () => {
        var d = "";
        var year = currDate.getFullYear();
        var day = currDate.getDate();
        var month = currDate.getMonth() + 1;
        var hour = currDate.getHours();
        var min = currDate.getMinutes();
        var ampm = "";

        if (hour > 12) {
            hour -= 12;
            ampm += "PM";
        } else {
            ampm += "AM";
        }

        d = d + month + "/" + day + "/" + year + "    " + hour + ":" + min + " " + ampm;
        return d;
    }

    const open = () => {


    }

    return (
        <div className="card post-editor">
            <div className="card-header">
                {displayDate()}
               
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.post.text}</h5>
                <p> </p>
                <a href="#" className="btn btn-link" >See More </a>
            </div>
        </div>
    );
};
export default Post;