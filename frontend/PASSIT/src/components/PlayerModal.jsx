import "../pages/Landing.css";
import React from "react";

export function PlayerModal(props) {
  console.log("props: ", props);
  const URL_PLAYER =
    "http://localhost:5173/player/" + props.id + "/" + props.gameID;
  return (
    <div
      className="flex select-none mt-[3.4rem]"
      style={{
        fontFamily:
          'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <div
        className="bg-secondary-content bg-opacity-90 rounded-lg grid overflow-hidden grid-cols-3 grid-rows-4 gap-1 shadow-2xl"
        style={{ height: "800px", width: "1330px" }}
      >
        <div class="box col-start-1 row-span-2 mt-0">
          <div className=" card w-10/12 h-8/12 bg-base-100 shadow-xl mx-auto bg-opacity-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-auto">
            <img
              className="object-cover rounded-lg"
              src={props.img}
              alt="Shoes"
            />
            <div className="card-body pt-12 mb-24 absolute top-80 ">
              <h2 className="card-title text-4xl text-secondary-content font-bold">
                {props.name}
              </h2>
              <div className="stats stats-vertical shadow bg-opacity-60 ml-1">
                <div className="stat flex mx-auto">
                  <div className="stat">
                    <div className="stat-title">Age</div>
                    <div className="stat-value text-primary">{props.age}</div>
                  </div>

                  <div className="stat pl-0">
                    <div className="stat-title">Height</div>
                    <div className="stat-value text-secondary">
                      {props.height}cm
                    </div>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Position</div>
                  <div className="stat-value">{props.position}</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Team</div>
                  <div className="stat-value">{props.team}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats stats-vertical shadow h-[40rem] overflow-hidden mt-16 mx-auto col-start-2 col-span-2">
          <div className="stat">
            <div className="stat-title">Avg Speed</div>
            <div className="stat-value text-primary text-5xl mb-0 h-12 ">
              Avg Value m/s
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Avg BPM</div>
            <div className="stat-value text-primary text-5xl mb-0 h-12 ">
              Lionel Pessi bpm/min
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Avg Breathing Rhythm</div>
            <div className="stat-value text-primary text-5xl mb-0 h-12 ">
              Lionel Pessi breaths/min
            </div>
          </div>
          <div className="stat">
            <a href={URL_PLAYER}>
              <button className="btn bg-primary w-24 mx-auto">Details</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
