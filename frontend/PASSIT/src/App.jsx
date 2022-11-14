import { useState } from 'react'
import './App.css'
import {

  BrowserRouter as Router,

  Routes,

  Route

} from "react-router-dom";

function App() {

  var visible = true;

  return (
    <div className="App">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="card bg-base-100">
              <div className="stack">
                <div className="card shadow-md bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">Putas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                </div>
                <div className="card shadow bg-primary text-primary-content {this.state.visible?'fadeIn':'fadeOut'}">
                  <div className="card-body">
                    <h2 className="card-title">Notification 2</h2>
                    <p>You have 3 unread messages. Tap here to see.</p>
                  </div>
                </div>
                <div className="card shadow-sm bg-primary text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">Notification 3</h2>
                    <p>You have 3 unread messages. Tap here to see.</p>
                  </div>
                </div>
              </div>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary animate-pulse " onClick={() => {document.getElementsByClassName("card shadow-md bg-primary text-primary-content")[0].classList.add("invisible")}}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}



      export default App
