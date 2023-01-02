import "../pages/Landing.css";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";

export function PlayerInfo(props) {
  const navigate = useNavigate();

  const [bpmlive, setBpmlive] = useState([]);
  const [brlive, setBrlive] = useState([]);
  const [speedlive, setSpeedlive] = useState([]);
  const [ecglive, setEcglive] = useState([]);

  let ecg_start = -1;

  if (props.flag_live === true) {

    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/v1/statsbygame/live/getstats/" +
        props.id +
        "/" +
        props.gameId
      );
      const stats = await response.json();

      if (stats.length !== 0) {

        bpmlive.push({
          key: stats.bpm[0][0],
          value: stats.bpm[0][1],
        });
        setBpmlive([...bpmlive]);
        brlive.push({
          key: stats.breathing_rate[0][0],
          value: stats.breathing_rate[0][1],
        });
        setBrlive([...brlive]);
        speedlive.push({
          key: stats.speed[0][0],
          value: stats.speed[0][1],
        });
        setSpeedlive([...speedlive]);

        let newecg = [];
        ecg_start = stats.ecg[0][0];
        for (let i = 0; i < stats.ecg.length; i++) {
          newecg.push({
            key: stats.ecg[i][0] - ecg_start,
            value: stats.ecg[i][1],
          });
        }
        setEcglive([...newecg]);
      }
    };

    useEffect(() => {
      const interval = setInterval(fetchData, 1000);
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
            <LineChart width={390} height={330} data={ecglive}>
              <Line
                type="monotone"
                data={ecglive}
                dataKey="value"
                stroke="#1fd65f"
                strokeWidth="2"
                dot={false}
              />
              <XAxis
                type="number"
                dataKey="key"
                tickLine={false}
                axisLine={false}
                domain={["dataMin", "dataMax"]}
              />
              <YAxis
                type="number"
                dataKey="value"
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

            </LineChart>
          </div>
          <div className="box col-start-2 col-end-auto">
            <h1 className="z-10 mt-3 text-2xl font-semibold">BPM</h1>
            <LineChart width={390} height={330} data={bpmlive}>
              <Line
                type="monotone"
                data={bpmlive}
                dataKey="value"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <XAxis
                type="number"
                dataKey="key"
                tickLine={false}
                axisLine={false}
                domain={['dataMin', "dataMax"]}
              />
              <YAxis
                type="number"
                dataKey="value"
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
            <LineChart width={390} height={330} data={speedlive}>
              {/*  data={props.speed} */}
              <Line
                type="monotone"
                data={speedlive}
                dataKey="value"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <XAxis
                type="number"
                dataKey="key"
                tickLine={false}
                axisLine={false}
                domain={['dataMin', "dataMax"]}
              />
              <YAxis
                type="number"
                dataKey="value"
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
            <h1 className="z-10 mt-10 text-2xl font-semibold">Breathing Rythm</h1>
            <LineChart width={390} height={330} data={brlive}>
              <Line
                type="monotone"
                data={brlive}
                dataKey="value"
                stroke="#1fd65f"
                strokeWidth="2"
              />
              <XAxis
                type="number"
                dataKey="key"
                tickLine={false}
                axisLine={false}
                domain={['dataMin', "dataMax"]}
              />
              <YAxis
                type="number"
                dataKey="value"
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
  } else {
    const [bpm, setBpm] = useState([]);
    const [br, setBr] = useState([]);
    const [speed, setSpeed] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "http://localhost:8080/api/v1/statsbygame/getstats/" +
          props.id
        );
        const newStats = await response.json();

        setBpm(
          Object.keys(newStats).map((k) => ({
            key: k,
            player: newStats[k][0][0],
            average: newStats[k][0][1],
          }))
        );
        setSpeed(
          Object.keys(newStats).map((k) => ({
            key: k,
            player: newStats[k][1][0],
            average: newStats[k][1][1],
          }))
        );
        setBr(
          Object.keys(newStats).map((k) => ({
            key: k,
            player: newStats[k][2][0],
            average: newStats[k][2][1],
          }))
        );
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
                domain={["dataMin", "dataMax"]}
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
                domain={["dataMin", "dataMax"]}
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
                domain={["dataMin", "dataMax"]}
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
