// To display single card

import classes from "./comment-list.module.css";

// this function takes a 'props' object as an argument.
function CommentList(props) {
  // Destructuring the 'items' prop from the 'props' object.
  const { items } = props;

  // Rendering the component.
  return (
    
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default CommentList;
