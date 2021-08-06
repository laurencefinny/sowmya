import "./App.css";
// import { axios } from "axios";
import Header from "./components/header/header.js";
import Posts from "./components/Posts/posts";
import Works from "./components/Works/works";
import Potraits from "./components/Potraits/potraits";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Componentleft from "./components/left/componentleft";
import Awards from "./pages/Awards/awards";
function App() {
  return (
    <div className="App">
      <div className="headerMain">
        <Header />
      </div>
      <Router>
        <div className="container">
          <div className="leftbox">
            <Componentleft />
          </div>
          <div className="posts">
            <div>
              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >
                <Route path="/works" component={Works} />
                <Route path="/potraits" component={Potraits} />
                <Route path="/awards" component={Awards} />
                <Route path="/" component={() => <Posts />} exact />
              </AnimatedSwitch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
