import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };
  SetProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    this.pageSize = 5;

    return (
      <div>
        <Router>
          <Navbar />
          <div>
            <LoadingBar color="#f11946" progress={this.state.progress} />
            <Routes>
              <Route
                path="/"
                element={
                  <News
                    SetProgress={this.SetProgress}
                    key="Entertainment"
                    country={"in"}
                    pageSize={this.pageSize}
                    category={"Entertainment"}
                  />
                }
              />
              <Route
                path="sports"
                element={
                  <News
                    SetProgress={this.SetProgress}
                    key="Sports"
                    country={"in"}
                    pageSize={this.pageSize}
                    category={"Sports"}
                  />
                }
              />
              <Route
                path="General"
                element={
                  <News
                    SetProgress={this.SetProgress}
                    key="General"
                    country={"in"}
                    pageSize={this.pageSize}
                    category={"General"}
                  />
                }
              />
              <Route
                path="Health"
                element={
                  <News
                    SetProgress={this.SetProgress}
                    key="Health"
                    country={"in"}
                    pageSize={this.pageSize}
                    category={"Health"}
                  />
                }
              />
              <Route
                path="Science"
                element={
                  <News
                    SetProgress={this.SetProgress}
                    key="Science"
                    country={"in"}
                    pageSize={this.pageSize}
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
  }
}

export default App;

// return <div className="App">28cff8f54a0345dbac5f05909f0961e9</div>;
