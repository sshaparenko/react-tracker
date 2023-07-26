import Timer from "./pages/Timer/Timer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="app h-screen">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/timer" element={<Timer />}/>
      </Routes>
    </div>
  );
}

export default App
