import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing} from "./pages/Landing";
import {Login} from "./pages/Login";
import {Player} from "./pages/Player";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Landing/>}/>
                <Route path={"*"} element={<Landing/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/player"} element={<Player/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App