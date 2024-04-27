import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, SetProgress] = useState(0);

  let pageSize = 5;

  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  SetProgress={SetProgress}
                  key="Entertainment"
                  country={"in"}
                  pageSize={pageSize}
                  category={"Entertainment"}
                />
              }
            />
            <Route
              path="sports"
              element={
                <News
                  SetProgress={SetProgress}
                  key="Sports"
                  country={"in"}
                  pageSize={pageSize}
                  category={"Sports"}
                />
              }
            />
            <Route
              path="General"
              element={
                <News
                  SetProgress={SetProgress}
                  key="General"
                  country={"in"}
                  pageSize={pageSize}
                  category={"General"}
                />
              }
            />
            <Route
              path="Health"
              element={
                <News
                  SetProgress={SetProgress}
                  key="Health"
                  country={"in"}
                  pageSize={pageSize}
                  category={"Health"}
                />
              }
            />
            <Route
              path="Science"
              element={
                <News
                  SetProgress={SetProgress}
                  key="Science"
                  country={"in"}
                  pageSize={pageSize}
                  category={"Science"}
                />
              }
            />
            {/* Define other routes here */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

// return <div className="App">28cff8f54a0345dbac5f05909f0961e9</div>;
