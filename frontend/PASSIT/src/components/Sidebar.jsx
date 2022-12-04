import { useState } from "react";


export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Settings", src: "Setting" },
    ];

    return (
        <div className="flex select-none ">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-secondary-content h-screen p-4  pt-8 relative duration-300`}
            >
                <img
                    src="./src/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-10 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center ">
                    <img
                        src="./src/assets/logo-no-background.png"
                        className={`w-10 cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`pb-2  select-none text-white font-light origin-left invisible sm:visible text-4xl duration-200 ${!open && "scale-0"
                            }`}
                    > PASSIT
                    </h1>
                </div>
                <ul className="pt-6 ">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex md:justify-between justify-center rounded-md p-2 cursor-pointer transition ease-in-out delay-0 bg-secondary-content hover:-translate-y-1 hover:scale-105 hover:bg-secondary-focus duration-100 text-gray-300 text-md font-bold items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <img src={`./src/assets/${Menu.src}.png`} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
