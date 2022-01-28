import './AppMain.scss'
import * as React from "react";
import { Routes, Route, } from "react-router-dom";
import Home from '../views/Home';
import User from '../views/User'
import SongList from '../views/SongList';
import Singer from '../views/Singer'
const AppMain = () => {
    return (
        <div className="app-main">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/songlist" element={<SongList />} />
                <Route path="/singer" element={<Singer />} />
            </Routes>
        </div>
    )
}
export default AppMain