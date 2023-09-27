// Imports
import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";

// Define the 'HomePage' component as a functional component that takes 'props' as its argument.
function HomePage(props) {
  return (
    <div>
      {/* Set the HTML head of the page using the 'Head' component. */}
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>

      {/* Render the 'NewsletterRegistration' component */}
      <NewsletterRegistration />

      {/* Render the 'EventList' component and pass it the 'props.events' data as 'items'. */}
      <EventList items={props.events} />
    </div>
  );
}

// This function is a special Next.js function that is used to fetch data for the page at build time.
export async function getStaticProps() {
  // Fetch a list of featured events using the 'getFeaturedEvents' function.
  const featuredEvents = await getFeaturedEvents();

  // Return an object with 'props' and 'revalidate' properties.
  return {
    props: {
      events: featuredEvents,
    },
    // 'revalidate' specifies the number of seconds after which the page should be revalidated.
    revalidate: 1800, 
  };
}


export default HomePage;
