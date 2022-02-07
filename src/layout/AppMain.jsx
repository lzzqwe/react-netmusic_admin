
import * as React from "react";

import { Routes, Route } from "react-router-dom";
import { Spin } from 'antd';
import './AppMain.scss'
// import MyErrorBoundary from '../views/MyErrorBoundary'
const Home = React.lazy(() => import('../views/Home'))
const User = React.lazy(() => import('../views/User'))
const SelectedDisk = React.lazy(() => import('../views/SelectedDisk'))
const HighQualitySonglist = React.lazy(() => import('../views/HighQualitySonglist'))
const Singer = React.lazy(() => import('../views/Singer'))

const AppMain = () => {
    return (
        <div className="app-main">
            <React.Suspense fallback={<div className="app-main-loading">
                <Spin />
            </div>}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/selectedDisk" element={<SelectedDisk />} />
                    <Route path="/highQualitySonglist" element={<HighQualitySonglist />} />
                    <Route path="/singer" element={<Singer />} />
                </Routes>
            </React.Suspense>
            {/* <MyErrorBoundary>
                
            </MyErrorBoundary> */}
        </div>
    )
}
export default AppMain