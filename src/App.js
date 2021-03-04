import { __RouterContext } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useTransition, animated } from "react-spring";
import React, { useContext } from "react";
import Navbar from './Components/Navbar/Navbar';
import About from "./Components/About/About";
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Work from './Components/Work/Work';
function App() {

  // console.log(__RouterContext);
  const { location } = useContext(__RouterContext);
  // console.log(location)


  const transitions = useTransition(location,location=>location.pathname,{
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(-100%, 0)' }
  });
  console.log(process.env.NODE_ENV, process.env.PUBLIC_URL)
  return (
    <div className="App">
      
      <Navbar />
      {
        transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/">
                <Redirect to="/about" />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/projects">
                <Project />
              </Route>
              <Route path="/experience">
                <Work />
              </Route>
            </Switch>
          </animated.div>
        ))
      }


    </div>
  );
}

export default App;
