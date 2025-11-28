import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Trainer from "../pages/trainer/Trainer";

function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="matches" element={<Login />} />
          <Route path="trainer" element={<Trainer />} />
        </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
