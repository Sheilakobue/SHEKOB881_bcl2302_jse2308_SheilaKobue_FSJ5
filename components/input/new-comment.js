// Importing necessary React hooks and CSS module.
import { useRef, useState } from "react";
import classes from "./new-comment.module.css";


function NewComment(props) {
  // Using the 'useState' hook to manage the state of 'isInvalid'.
  const [isInvalid, setIsInvalid] = useState(false);

  // Creating three 'ref' objects to access input fields in the form.
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  // Handler function to submit a new comment.
  function sendCommentHandler(event) {
    event.preventDefault(); 

    // Retrieving values from the input fields using 'ref'.
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    // Validating the input fields.
    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      // If any validation fails, set 'isInvalid' to 'true'.
      setIsInvalid(true);
      return;
    }

    // If all validation passes, call the 'onAddComment' function from props
    // and pass the comment data as an object.
    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  // Rendering the component.
  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows="5" ref={commentInputRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className={classes.btn}>Submit</button>
    </form>
  );
}
export default NewComment;
