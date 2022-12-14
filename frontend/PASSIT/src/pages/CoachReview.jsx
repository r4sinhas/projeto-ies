import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";


export function CoachReview() {
    return (
        <div className="flex select-none" style={{ fontFamily: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
            <Sidebar />
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/soccer-field-center-ball-top-view-background-sport-athletic-concept-3d-illustration-rendering_10307-2012.jpg?w=2000")`, backgroundPosition: '20%' }}>
                <div className="bg-secondary-content bg-opacity-[97%] rounded-lg overflow-hidden flex gap-1 shadow-2xl" style={{ height: "800px", width: "1330px" }}>
                    <div className="overflow-x-auto w-2/3 mt-5 mb-5 ml-5">
                        <table className="table w-full text-secondary">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Brice Swyre</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Carroll Group
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                    </td>
                                    <td>Red</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>

                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Yancy Tear</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Wyman-Ledner
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                    </td>
                                    <td>Indigo</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://www.biography.com/.image/t_share/MTc5OTcxMjMwMjM1ODk0OTA2/gettyimages-972635212.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button className="btn btn-ghost btn-s rounded-lg">details</button>
                                    </th>
                                </tr>
                            </tbody>


                        </table>

                    </div>
                    <div className="stats stats-vertical shadow w-1/4 my-5 ml-16">

                        <div className="stat">
                            <div className="stat-title">Fastest Player</div>
                            <div className="stat-value text-primary text-5xl mb-0 h-12 ">Lionel Pessi</div>
                            <div className="stat-value text-3xl ">3.3 m/s</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Fastest Player</div>
                            <div className="stat-value text-primary text-5xl h-12">Lionel Pessi</div>
                            <div className="stat-value text-3xl ">3.3 m/s</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Fastest Player</div>
                            <div className="stat-value text-primary text-5xl h-12">Lionel Pessi</div>
                            <div className="stat-value text-3xl ">3.3 m/s</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
