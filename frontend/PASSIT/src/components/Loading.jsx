import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")`,
      }}
    >
      <ReactLoading type="cylon" color="#1fd65f" height={"13%"} width={"13%"} />
    </div>
  );
}
