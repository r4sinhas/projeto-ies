import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing} from "./pages/Landing";
import {Login} from "./pages/Login";
import {Player} from "./pages/Player";
import {Coach} from "./pages/Coach";
import {CoachReview} from "./pages/CoachReview";
import {Fan} from "./pages/Fan";  

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing/>}/>
                <Route path={"*"} element={<Landing/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/player"} element={<Player/>}/>
                <Route path={"/coach"} element={<Coach/>}/>
                <Route path={"/coachreview"} element={<CoachReview/>}/>
                <Route path={"/fan"} element={<Fan/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App