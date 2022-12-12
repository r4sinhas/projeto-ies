import "./Coach.css";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


export function Coach() {
    const navigate = useNavigate();
    const data = [{ name: 'Page A', player: 10, average: 40, amt: 40 }, { name: 'Page A', player: 20, average: 43, amt: 40 }, { name: 'Page A', player: 30, average: 39, amt: 40 }, { name: 'Page A', player: 40, average: 35, amt: 40 }, { name: 'Page A', player: 100, average: 30, amt: 40 }, { name: 'Page A', player: 60, average: 42, amt: 40 }, { name: 'Page A', player: 70, average: 45, amt: 40 }];
    const coursesPage = () => {
        navigate("./Login");
    }
    return (
        <div className="flex select-none" style={{ fontFamily: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
            <Sidebar />
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")`, backgroundPosition: '20%' }}>
                <div className="bg-secondary-content bg-opacity-[97%] rounded-lg grid overflow-hidden grid-cols-3 grid-rows-2 gap-1 shadow-2xl" style={{ height: "800px", width: "1330px" }}>

                    <div className="container ml-[9.5rem] mt-20 w-[1330px] ml-0">
                        <div className="flex space-x-40 mx-auto w-full mb-10 justify-center">
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex space-x-40 mx-auto w-full mb-10 justify-center">
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions justify-end">
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex space-x-40 mx-auto w-full  mb-10 justify-center">
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions justify-end">
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="flex space-x-40 mx-auto w-full justify-center">
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions justify-end">
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="card w-12 aspect-[7/5] bg-opacity-0 shadow-xl image-full transition ease-in-out delay-150 border-0 hover:-translate-y-1 hover:scale-110 bg-opacity-80 duration-300 hover:opacity-90 cursor-pointer">
                                    <figure><img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Lionel Pessi</h2>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="ml-[14rem] mb-[20rem]" style={{ zIndex: '-5' }}>
                            <div className="bg-white half-circle  ml-[3rem] ">
                                <div className="half-circle-smol bg-white ml-[13.5rem] mt-[3rem]" style={{ zIndex: '10' }}>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};