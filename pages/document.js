// Import the necessary components from Next.js
import Document, { Html, Head, Main, NextScript } from "next/document";

// Define a custom document component by extending the base Document class
class MyDocument extends Document {
  render() {
    return (
      <Html>
        {/* The <Head/> component is used to specify the document's <head> section */}
        <Head />
        <body>
          {/* This div with id="overlays" seems to be a placeholder for overlay components */}
          <div id="overlays" />

          {/* The <Main/> component represents the main content of the page */}
          <Main />

          {/* The <NextScript/> component includes scripts necessary for Next.js functionality */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Export the custom document component as the default export
export default MyDocument;
