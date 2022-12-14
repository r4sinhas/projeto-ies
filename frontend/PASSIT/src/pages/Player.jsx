import "./Landing.css";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { transparent } from "daisyui/src/colors";
import { PlayerInfo } from "../components/PlayerInfo";

export function Player() {
    const navigate = useNavigate();
    const data = [{ name: 'Page A', player: 10, average: 40, amt: 40 }, { name: 'Page A', player: 20, average: 43, amt: 40 }, { name: 'Page A', player: 30, average: 39, amt: 40 }, { name: 'Page A', player: 40, average: 35, amt: 40 }, { name: 'Page A', player: 100, average: 30, amt: 40 }, { name: 'Page A', player: 60, average: 42, amt: 40 }, { name: 'Page A', player: 70, average: 45, amt: 40 }];
    const coursesPage = () => {
        navigate("./Login");
    }
    return (
        <div className="flex select-none" style={{ fontFamily: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
            <Sidebar />
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")` }}>
                <PlayerInfo />
            </div>
        </div >
    );
};