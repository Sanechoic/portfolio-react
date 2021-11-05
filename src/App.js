import React, { Suspense, lazy } from 'react';
// Styles
import './css/App.css';
import './css/bootstrap.min.css';
import "animate.css/animate.min.css";

// Installed
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

// Created
const Home = lazy(() => import('./components/Home.js'));
const Projects = lazy(() => import('./components/Projects.js'));
const About = lazy(() => import('./components/About.js'));
const Nav = lazy(() => import('./components/NewNav.js'));


//Projects
const BlueNote = lazy(() => import('./components/projects/blueNote.js'));
const Embla = lazy(() => import('./components/projects/embla.js'));
const JoyStory = lazy(() => import('./components/projects/joyStory.js'));
const Panaseer = lazy(() => import('./components/projects/panaseer.js'));
const Pause = lazy(() => import('./components/projects/pause.js'));
const Spiro = lazy(() => import('./components/projects/spiro.js'));

const NoMatchPage = lazy(() => import('./components/noMatch.js'));



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Route render={({ location }) => (
          <div className="App">
            <Nav/>
            <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  timeout={800}
                  classNames='page'
                  >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/blueNote" component={BlueNote} />
                    <Route exact path="/embla" component={Embla} />
                    <Route exact path="/joyStory" component={JoyStory} />
                    <Route exact path="/panaseer" component={Panaseer} />
                    <Route exact path="/pause" component={Pause} />
                    <Route exact path="/spiro" component={Spiro} />
                    <Route component={NoMatchPage} />
                  </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
