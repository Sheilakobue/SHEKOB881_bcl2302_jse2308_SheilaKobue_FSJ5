// Importing necessary React components and styles.
import { useEffect, useState } from "react";
import CommentList from "./comment-list"; 
import NewComment from "./new-comment"; 
import classes from "./comments.module.css"; 

// Defining the Comments component that takes an 'eventId' prop.
function Comments(props) {
  const { eventId } = props; 

  // Using state to manage whether comments should be shown or hidden and to store the comments.
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  // Effect hook that fetches comments from the server when 'showComments' is true.
  useEffect(() => {
    if (showComments) {
      fetch("/api/comments/" + eventId) 
        .then((response) => response.json()) 
        .then((data) => {
          setComments(data.comments); // Updating the 'comments' state with fetched comments.
        });
    }
  }, [showComments]); // This effect runs whenever 'showComments' changes.

  // Function to toggle the display of comments (show/hide).
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus); 
  }

  // Function to add a new comment to the server.
  function addCommentHandler(commentData) {
    fetch("/api/comments/" + eventId, {
      method: "POST", // Making a POST request to add a new comment.
      body: JSON.stringify(commentData), 
      headers: {
        "Content-Type": "application/json", // Specifying the content type as JSON.
      },
    })
      .then((response) => response.json()) 
      .then((data) => console.log(data)); 
  }

  // Rendering the Comments component.
  return (
    <section className={classes.comments}>
    
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {/* Rendering the NewComment component only when 'showComments' is true */}
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {/* Rendering the CommentList component with the fetched comments */}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
