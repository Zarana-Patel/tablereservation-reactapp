import { Routes, Route, Outlet } from "react-router-dom"

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from "./pages/Home/Home"
import Reservation from "./pages/Reservation/Reservation"
import Confirm from "./pages/Confirm/Confirm"

import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="reserve" element={<Reservation />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="login" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}