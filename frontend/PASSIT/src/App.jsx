import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Player } from "./pages/Player";
import { Coach } from "./pages/Coach";
import { CoachReview } from "./pages/CoachReview";
import { TeamAvg } from "./pages/Team";
import { Fan } from "./pages/Fan";
import { Games } from "./pages/Games";
import { Playerlst } from "./components/Playerlst";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<Landing />} />
        <Route path={"/"} element={<Landing />} />
        <Route path={"player/:id/:gameId"} element={<Player />} />
        <Route path={"player/:id/:gameId"} element={<Player />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/coach/:gameId"} element={<Coach />} />
        <Route path={"/coachreview"} element={<CoachReview />} />
        <Route path={"/team"} element={<TeamAvg />} />
        <Route path={"/fan/:id/favPlayers"} element={<Fan />} />
        <Route path={"/fan/:id/players"} element={<Playerlst />} />
        <Route path={"/games"} element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
