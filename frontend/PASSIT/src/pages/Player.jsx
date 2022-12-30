import "./Landing.css";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { PlayerInfo } from "../components/PlayerInfo";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Loading from "../components/Loading";

var name = "Cristiano Ronaldo";
var age = "36";
var height = "185";
var weight = "80";
var position = "Forward";
var team = "Juventus";

export function Player() {
  const navigate = useNavigate();
  const API = "http://localhost:8080/api/v1/player/";
  const [player, setPlayers] = useState([]);

  /* FIX THIS useParams()  */
  const playerId = 7;
  const { id } = useParams();
  // console.log("turururur", id);

  useEffect(() => {
    fetch(API + playerId)
      .then((res) => res.json())
      .then((result) => {
        setPlayers(result);
      });
  }, []);
  console.log("player: ", player);
  if (player.length === 0)
    return (
      <div>
        {" "}
        <Loading></Loading>{" "}
      </div>
    );

  return (
    <div
      className="flex select-none"
      style={{
        fontFamily:
          'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <Sidebar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")`,
        }}
      >
        <PlayerInfo
          img={
            player.img_url ? player.img_url : "https://i.imgur.com/5uGqXtG.png"
          }
          name={player.name}
          age={player.age}
          height={player.height}
          weight={player.weight}
          position={player.position}
          team={player.team_id.team_name}
        />
      </div>
    </div>
  );
}
