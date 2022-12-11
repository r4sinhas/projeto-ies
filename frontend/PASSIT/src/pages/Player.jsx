import "./Landing.css";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { transparent } from "daisyui/src/colors";


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
                <div className="bg-secondary-content bg-opacity-90 rounded-lg grid overflow-hidden grid-cols-3 grid-rows-2 gap-1 shadow-2xl" style={{ height: "800px", width: "1330px" }}>
                    <div class="box row-span-2 align-middle mt-0">
                        <div className=" card w-10/12 h-full bg-base-100 shadow-xl mx-auto bg-opacity-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-auto">
                            <img className="rounded-lg max-w-lg scale-75" src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" />
                            <div className="card-body pt-12 mb-24 absolute top-80 ">
                                <h2 className="card-title text-4xl">Lionel Pessi</h2>
                                <div className="stats stats-vertical shadow bg-opacity-60 ml-1">

                                    <div className="stat flex mx-auto">
                                        <div className="stat">
                                            <div className="stat-title">Age</div>
                                            <div className="stat-value text-primary">35y</div>
                                        </div>

                                        <div className="stat pl-0">
                                            <div className="stat-title">Height</div>
                                            <div className="stat-value text-secondary">1.69m</div>                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title">Position</div>
                                        <div className="stat-value">Forward</div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title">Team</div>
                                        <div className="stat-value"> P$G</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box col-start-2 col-end-auto">
                        <h1 className="z-10 mt-10 text-2xl font-semibold">ECG</h1>
                        <LineChart width={390} height={330} data={data}>
                            <Line type="monotone" dataKey="player" stroke="#1fd65f" strokeWidth="2" />
                            <Line type="monotone" dataKey="average" stroke="#fff" strokeWidth="2" />
                            <YAxis type="number" label={{ value: '(merdas/shit)', angle: -90, position: 'insideLeft' }} domain={['auto', 'auto']} padding={{ top: 20, bottom: 20 }} tickLine={false} axisLine={false} />
                            <Tooltip cursor={false} contentStyle={{ backgroundColor: 'rgba(0,0,0,0.5)', border: 'rgba(0,0,0,0)', fontWeight: 'bold' }} wrapperStyle={{ color: '#1fd65f', outline: 'none', border: '10px solid rgba(0,0,0,0.5)', borderRadius: 10, lineHeight: '40px' }} />
                        </LineChart>
                    </div>
                    <div className="box col-start-2 col-end-auto">
                        <h1 className="z-10 mt-3 text-2xl font-semibold">BPM</h1>
                        <LineChart width={390} height={330} data={data}>
                            <Line type="monotone" dataKey="player" stroke="#1fd65f" strokeWidth="2" />
                            <Line type="monotone" dataKey="average" stroke="#fff" strokeWidth="2" />
                            <YAxis type="number" label={{ value: '(merdas/shit)', angle: -90, position: 'insideLeft' }} domain={['auto', 'auto']} padding={{ top: 20, bottom: 20 }} tickLine={false} axisLine={false} />
                            <Tooltip cursor={false} contentStyle={{ backgroundColor: 'rgba(0,0,0,0.5)', border: 'rgba(0,0,0,0)', fontWeight: 'bold' }} wrapperStyle={{ color: '#1fd65f', outline: 'none', border: '10px solid rgba(0,0,0,0.5)', borderRadius: 10, lineHeight: '40px' }} />
                        </LineChart>
                    </div>
                    <div className="box">
                        <h1 className="z-10 mt-3 text-2xl font-semibold">Speed</h1>
                        <LineChart width={390} height={330} data={data}>
                            <Line type="monotone" dataKey="player" stroke="#1fd65f" strokeWidth="2" />
                            <Line type="monotone" dataKey="average" stroke="#fff" strokeWidth="2" />
                            <YAxis type="number" label={{ value: '(merdas/shit)', angle: -90, position: 'insideLeft' }} domain={['auto', 'auto']} padding={{ top: 20, bottom: 20 }} tickLine={false} axisLine={false} />
                            <Tooltip cursor={false} contentStyle={{ backgroundColor: 'rgba(0,0,0,0.5)', border: 'rgba(0,0,0,0)', fontWeight: 'bold' }} wrapperStyle={{ color: '#1fd65f', outline: 'none', border: '10px solid rgba(0,0,0,0.5)', borderRadius: 10, lineHeight: '40px' }} />
                        </LineChart>
                    </div>
                    <div className="box row-start-1 row-end-auto col-start-3">
                        <h1 className="z-10 mt-10 text-2xl font-semibold">Breathing Rythm</h1>
                        <LineChart width={390} height={330} data={data}>
                            <Line type="monotone" dataKey="player" stroke="#1fd65f" strokeWidth="2" />
                            <Line type="monotone" dataKey="average" stroke="#fff" strokeWidth="2" />
                            <YAxis type="number" label={{ value: '(merdas/shit)', angle: -90, position: 'insideLeft' }} domain={['auto', 'auto']} padding={{ top: 20, bottom: 20 }} tickLine={false} axisLine={false} />
                            <Tooltip cursor={false} contentStyle={{ backgroundColor: 'rgba(0,0,0,0.5)', border: 'rgba(0,0,0,0)', fontWeight: 'bold' }} wrapperStyle={{ color: '#1fd65f', outline: 'none', border: '10px solid rgba(0,0,0,0.5)', borderRadius: 10, lineHeight: '40px' }} />
                        </LineChart>
                    </div>
                </div>
            </div>
        </div >
    );
};