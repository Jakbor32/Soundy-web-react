import favicon16x16 from "./assets/favicon-16x16.png";
import faviconICO from "./assets/favicon.ico";

import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
        <link rel="icon" type="image/x-icon" href={faviconICO} />
      </Helmet>
      <div className="text-2xl">Hello world!</div>
    </>
  );
}

export default App;
