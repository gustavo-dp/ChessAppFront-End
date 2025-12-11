import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Trainer from "../pages/trainer/Trainer";
import Matches from "../pages/matches/Matches";
import User from "../pages/user/User";
import { SecondLayout } from "../layouts/SecondLayout";

function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<Login />} />
          <Route element={<SecondLayout />}>
            <Route index element={<Home />} />
            <Route path="matches" element={<Matches />} />
            <Route path="trainer" element={<Trainer />} />
            <Route path="user" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
