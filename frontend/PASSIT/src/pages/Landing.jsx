import { useState } from "react";
import "./Landing.css";
import { Sidebar } from "../components/Sidebar";

export function Landing () { 

  return (
    <div className="flex select-none "> 
      <Sidebar />
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="card-swiper absolute top-44">
          <div className="card-group w-96">
            <div className="little-card card bg-primary text-accent-content font-light justify-center text-2xl">
              <p>For Coaches</p>
            </div>
            <div className="big-card card m-0">
            </div>
            <div className="little-card card bg-primary text-accent-content font-light justify-center text-3xl">
              <p>Easter Egg</p>
            </div>
            <div className="big-card card m-0">

            </div>
            <div className="little-card card bg-primary text-accent-content font-light justify-center text-2xl">
              <p>For Players</p>
            </div>
            <div className="big-card card m-0">

            </div>
            <div className="little-card card bg-primary text-accent-content font-light justify-center text-3xl">
              <p>For Fans</p>
            </div>
            <div className="big-card card m-0 bg-secondary-content text-primary-content bg-opacity-90">
              <div className="card-body text-center">
                <h2 className="card-title text-2xl">Is <span className="text-secondary">PASSIT</span> for you?</h2>
                <p className="text-xl"></p>

                <p className="text-xl">PASSIT comes to up the ante, by providing a platform for coaches, players, and fans to deepen their analysis of the game.</p>
                <p className="text-xl"> We make fans <span className="text-accent">learn</span>, coaches <span className="text-accent">strive</span>, players <span className="text-accent">grow</span>.</p>
                <div className="card-actions justify-end">
                  <button className="btn hover:bg-primary-focus">get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};