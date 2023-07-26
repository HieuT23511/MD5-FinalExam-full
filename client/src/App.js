import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home";
import AddTour from "./pages/Tour/add";
import EditTour from "./pages/Tour/edit";
import DetailTour from "./pages/Tour/detail";


function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/add" element={<AddTour />}></Route>
            <Route path="/tuors/:id" element={<EditTour />}></Route>
            <Route path="/detail/:id" element={<DetailTour />}></Route>
        </Routes>
    </>
  );
}

export default App;
