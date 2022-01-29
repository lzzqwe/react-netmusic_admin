import './AppMain.scss'
import * as React from "react";
import { Routes, Route, } from "react-router-dom";
import Home from '../views/Home';
import User from '../views/User'
import SelectedDisk from '../views/SelectedDisk';
import HighQualitySonglist from '../views/HighQualitySonglist'
import Singer from '../views/Singer'
const AppMain = () => {
    return (
        <div className="app-main">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/selectedDisk" element={<SelectedDisk />} />
                <Route path="/highQualitySonglist" element={<HighQualitySonglist />} />
                <Route path="/singer" element={<Singer />} />
            </Routes>
        </div>
    )
}
export default AppMain