import classes from "./event-content.module.css";

// this functional component takes 'props' as its argument.
function EventContent(props) {
  return (
 
    <section className={classes.content}>
      {/* Render the child components that are passed as props to this component. */}
      {props.children}
    </section>
  );
}

export default EventContent;
