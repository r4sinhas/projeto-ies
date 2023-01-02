import "../pages/Landing.css";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";

export function PlayerInfo(props) {
  const navigate = useNavigate();

  let bpm = [];
  let br = [];
  let speed = [];
  let ecg = [];

  const updateArray = (array, value) => {
    array.push(value);
    return array;
  };

  if (props.flag_live === true) {
    //console.log("live");

    const [stats, setStats] = useState([]);
    let ecg_start = -1;
    const fetchData = async (bpm, br, speed, ecg) => {
      const response = await fetch(
        "http://localhost:8080/api/v1/statsbygame/live/getstats/" +
          props.id +
          "/" +
          props.gameId
      );
      const stats = await response.json();
      setStats(stats);

      console.log("stats inside: ", stats);
      if (stats.length !== 0) {
        let v1 = stats.bpm[0][1];
        let v2 = stats.breathing_rate[0][1];
        let v3 = stats.speed[0][1];
        // update array
        bpm.push({ name: "bpm", value: v1 });
        br.push({ name: "br", value: v2 });
        speed.push({ name: "speed", value: v3 });

        console.log("bpm: ", bpm);
        console.log("br: ", br);

        if (ecg_start < 0) {
          ecg_start = stats.ecg[0][0];
        }

        for (let i = 0; i < stats.ecg.length; i++) {
          ecg = ecg.concat({
            name: "ecg",
            key: stats.ecg[i][0],
            value: stats.ecg[i][1],
          });
        }
      }
    };

    useEffect(() => {
      fetchData(bpm, br, speed, ecg);
      const interval = setInterval(() => fetchData(bpm, br, speed, ecg), 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div
        className="flex select-none mt-[3.4rem]"
        style={{
          fontFamily:
            'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        <div
          className="bg-secondary-content bg-opacity-90 rounded-lg grid overflow-hidden grid-cols-3 grid-rows-2 gap-1 shadow-2xl"
          style={{ height: "800px", width: "1330px" }}
        >
          <div class="box row-span-2 mt-0">
            <div className=" card w-10/12 h-full bg-base-100 shadow-xl mx-auto bg-opacity-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-auto">
              <img
                className="rounded-lg max-w-lg scale-75"
                src={props.img}
                alt="Shoes"
              />
              <div className="card-body pt-12 mb-24 absolute top-80 ">
                <h2 className="card-title text-4xl text-black">{props.name}</h2>
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
                    <div className="stat-value">{props.team} </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box col-start-2 col-end-auto">
            <h1 className="z-10 mt-10 text-2xl font-semibold">ECG</h1>
            <LineChart width={390} height={330} data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <YAxis
                type="number"
                label={{
                  value: "(merdas/shit)",
                  angle: -90,
                  position: "insideLeft",
                }}
                domain={["auto", "auto"]}
                padding={{ top: 20, bottom: 20 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "rgba(0,0,0,0)",
                  fontWeight: "bold",
                }}
                wrapperStyle={{
                  color: "#1fd65f",
                  outline: "none",
                  border: "10px solid rgba(0,0,0,0.5)",
                  borderRadius: 10,
                  lineHeight: "40px",
                }}
              />
            </LineChart>
          </div>
          <div className="box col-start-2 col-end-auto">
            <h1 className="z-10 mt-3 text-2xl font-semibold">BPM</h1>
            <LineChart width={390} height={330} data={bpm}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#fff"
                strokeWidth="2"
              />
              <YAxis
                type="number"
                label={{
                  value: "(merdas/shit)",
                  angle: -90,
                  position: "insideLeft",
                }}
                domain={["auto", "auto"]}
                padding={{ top: 20, bottom: 20 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "rgba(0,0,0,0)",
                  fontWeight: "bold",
                }}
                wrapperStyle={{
                  color: "#1fd65f",
                  outline: "none",
                  border: "10px solid rgba(0,0,0,0.5)",
                  borderRadius: 10,
                  lineHeight: "40px",
                }}
              />
            </LineChart>
          </div>
          <div className="box">
            <h1 className="z-10 mt-3 text-2xl font-semibold">Speed</h1>
            <LineChart width={390} height={330} data={speed}>
              {" "}
              {/*  data={props.speed} */}
              <Line
                type="monotone"
                dataKey="player"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#fff"
                strokeWidth="2"
              />
              <YAxis
                type="number"
                label={{
                  value: "(merdas/shit)",
                  angle: -90,
                  position: "insideLeft",
                }}
                domain={["auto", "auto"]}
                padding={{ top: 20, bottom: 20 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "rgba(0,0,0,0)",
                  fontWeight: "bold",
                }}
                wrapperStyle={{
                  color: "#1fd65f",
                  outline: "none",
                  border: "10px solid rgba(0,0,0,0.5)",
                  borderRadius: 10,
                  lineHeight: "40px",
                }}
              />
            </LineChart>
          </div>
          <div className="box row-start-1 row-end-auto col-start-3">
            <h1 className="z-10 mt-10 text-2xl font-semibold">
              Breathing Rythm
            </h1>
            <LineChart width={390} height={330} data={br}>
              {/* data={props.br_rate} */}
              <Line
                type="monotone"
                dataKey="player"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#fff"
                strokeWidth="2"
              />
              <YAxis
                type="number"
                label={{
                  value: "(merdas/shit)",
                  angle: -90,
                  position: "insideLeft",
                }}
                domain={["auto", "auto"]}
                padding={{ top: 20, bottom: 20 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "rgba(0,0,0,0)",
                  fontWeight: "bold",
                }}
                wrapperStyle={{
                  color: "#1fd65f",
                  outline: "none",
                  border: "10px solid rgba(0,0,0,0.5)",
                  borderRadius: 10,
                  lineHeight: "40px",
                }}
              />
            </LineChart>
          </div>
        </div>
      </div>
    );
  } else if (props.flag_live === false) {
    {
      /*const data = [
      { name: "Page A", value: 100 },
      { name: "Page B", value: 200 },
      { name: "Page C", value: 300 },
      { name: "Page D", value: 400 },
      { name: "Page E", value: 500 },
      { name: "Page F", value: 600 },
    ];*/
    }
    const [bpm, setBpm] = useState([]);
    const [br, setBr] = useState([]);
    const [speed, setSpeed] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "http://localhost:8080/api/v1/statsbygame/getstats/" +
            props.id +
            "/" +
            props.gameId
        );
        const newStats = await response.json();

        Object.keys(newStats).forEach((k) => {
          setBpm((bpm) => [
            ...bpm,
            { key: k, player: newStats[k][0][0], average: newStats[k][0][1] },
          ]);
          setBr((br) => [
            ...br,
            { key: k, player: newStats[k][1][0], average: newStats[k][1][1] },
          ]);

          setSpeed((speed) => [
            ...speed,
            { key: k, player: newStats[k][2][0], average: newStats[k][2][1] },
          ]);
        });
      };

      fetchData();
    }, []);

    return (
      <div
        className="flex select-none mt-[3.4rem]"
        style={{
          fontFamily:
            'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        <div
          className="bg-secondary-content bg-opacity-90 rounded-lg grid overflow-hidden grid-cols-3 grid-rows-2 gap-1 shadow-2xl"
          style={{ height: "800px", width: "1330px" }}
        >
          <div class="box row-span-2 mt-0">
            <div className=" card w-10/12 h-full bg-base-100 shadow-xl mx-auto bg-opacity-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-auto">
              <img
                className="rounded-lg max-w-lg scale-75"
                src={props.img}
                alt="Shoes"
              />
              <div className="card-body pt-12 mb-24 absolute top-80 ">
                <h2 className="card-title text-4xl text-black">{props.name}</h2>
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
                    <div className="stat-value">{props.team} </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box col-start-2 col-end-auto">
            <h1 className="z-10 mt-3 text-2xl font-semibold">BPM</h1>
            {console.log("as", bpm)}
            <LineChart width={390} height={330} data={bpm}>
              <Line
                type="monotone"
                dataKey="player"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#fff"
                strokeWidth="2"
              />
              <YAxis
                type="number"
                label={{
                  value: "(merdas/shit)",
                  angle: -90,
                  position: "insideLeft",
                }}
                domain={["auto", "auto"]}
                padding={{ top: 20, bottom: 20 }}
                tickLine={false}
                axisLine={false}
              />
              <XAxis
                type="number"
                dataKey="key"
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "rgba(0,0,0,0)",
                  fontWeight: "bold",
                }}
                wrapperStyle={{
                  color: "#1fd65f",
                  outline: "none",
                  border: "10px solid rgba(0,0,0,0.5)",
                  borderRadius: 10,
                  lineHeight: "40px",
                }}
              />
            </LineChart>
          </div>
          <div className="box">
            <h1 className="z-10 mt-3 text-2xl font-semibold">Speed</h1>
            <LineChart width={390} height={330} data={speed}>
              {/*  data={props.speed} */}
              <Line
                type="monotone"
                dataKey="player"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#fff"
                strokeWidth="2"
              />
              <YAxis
                type="number"
                label={{
                  value: "(merdas/shit)",
                  angle: -90,
                  position: "insideLeft",
                }}
                domain={["auto", "auto"]}
                padding={{ top: 20, bottom: 20 }}
                tickLine={false}
                axisLine={false}
              />
              <XAxis
                type="number"
                dataKey="key"
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "rgba(0,0,0,0)",
                  fontWeight: "bold",
                }}
                wrapperStyle={{
                  color: "#1fd65f",
                  outline: "none",
                  border: "10px solid rgba(0,0,0,0.5)",
                  borderRadius: 10,
                  lineHeight: "40px",
                }}
              />
            </LineChart>
          </div>
          <div className="box row-start-1 row-end-auto col-start-3">
            <h1 className="z-10 mt-10 text-2xl font-semibold">
              Breathing Rythm
            </h1>
            <LineChart width={390} height={330} data={br}>
              {/* data={props.br_rate} */}
              <Line
                type="monotone"
                dataKey="player"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#fff"
                strokeWidth="2"
                x="key"
                y="average"
              />
              <YAxis
                type="number"
                label={{
                  value: "(merdas/shit)",
                  angle: -90,
                  position: "insideLeft",
                }}
                domain={["auto", "auto"]}
                padding={{ top: 20, bottom: 20 }}
                tickLine={false}
                axisLine={false}
              />
              <XAxis
                type="number"
                dataKey="key"
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "rgba(0,0,0,0)",
                  fontWeight: "bold",
                }}
                wrapperStyle={{
                  color: "#1fd65f",
                  outline: "none",
                  border: "10px solid rgba(0,0,0,0.5)",
                  borderRadius: 10,
                  lineHeight: "40px",
                }}
              />
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
}
