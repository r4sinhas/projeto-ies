import "./Landing.css";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function Player() {
    const navigate = useNavigate();

    const coursesPage = () => {
        navigate("./Login");
    }
    return (
        <div className="flex select-none ">
            <Sidebar />
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")` }}>
                <div className="bg-secondary-content bg-opacity-90 rounded-lg grid overflow-hidden grid-cols-3 grid-rows-2 gap-1 shadow-2xl" style={{ height: "800px", width: "1400px" }}>
                    <div class="box row-span-2 align-middle mt-0">
                        <div className=" card w-10/12 h-full bg-base-100 shadow-xl mx-auto bg-opacity-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-auto">
                            <img className="rounded-lg max-w-lg scale-75" src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" />
                            <div className="card-body pt-12 mb-24 absolute top-80 align ">
                                <h2 className="card-title text-4xl">Lionel Pessi</h2>
                                <div className="stats stats-vertical shadow bg-opacity-60 ml-3">

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
                    <div class="box col-start-2 col-end-auto">2</div>
                    <div class="box col-start-2 col-end-auto">3</div>
                    <div class="box">4</div>
                    <div class="box row-start-1 row-end-auto col-start-3">5</div>
                </div>
            </div>
        </div >
    );
};