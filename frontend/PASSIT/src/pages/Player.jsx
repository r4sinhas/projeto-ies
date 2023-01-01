import "./Landing.css";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { PlayerInfo } from "../components/PlayerInfo";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export function Player() {
  const { id, gameId } = useParams();
  console.log("id: ", id);
  console.log("gameId: ", gameId);
  const API = "http://localhost:8080/api/v1/player/";
  const [player, setPlayers] = useState([]);
  const API2 =
    "http://localhost:8080/api/v1/player/stats_user_game/" + id + "/" + gameId;

  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch(API + id)
      .then((res) => res.json())
      .then((result) => {
        setPlayers(result);
      });
  }, []);
  console.log("player: ", player);
  useEffect(() => {
    fetch(API2)
      .then((res) => res.json())
      .then((result) => {
        setStats(result);
      });
  }, []);
  console.log("stats: ", stats);
  const br_rate = stats.breathing_rate;
  const bpm_rate = stats.bpm;
  const speed = stats.speed;
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
          id={player.id}
          gameId={1}
          img={
            player.img_url ? player.img_url : "https://i.imgur.com/5uGqXtG.png"
          }
          name={player.name}
          age={player.age}
          height={player.height}
          weight={player.weight}
          position={player.position}
          team={player.team_id.team_name}
          br_rate={br_rate}
          bpm_rate={bpm_rate}
          speed={speed}
        />
      </div>
    </div>
  );
}
