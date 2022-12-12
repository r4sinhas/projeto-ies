import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing} from "./pages/Landing";
import {Login} from "./pages/Login";
import {Player} from "./pages/Player";
import {Coach} from "./pages/Coach";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing/>}/>
                <Route path={"*"} element={<Landing/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/player"} element={<Player/>}/>
                <Route path={"/coach"} element={<Coach/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App