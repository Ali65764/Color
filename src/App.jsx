import { ROUTER } from "./constant/router"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Color from "./components/Color";
import GoDetailsPage from "./components/GoDetailsPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.Color} element={<Color />} />
        <Route path={ROUTER.GoDetailsPage} element={<GoDetailsPage/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
