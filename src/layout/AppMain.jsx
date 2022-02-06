import './AppMain.scss'
import React, {Suspense, lazy} from "react";
import {Routes, Route,} from "react-router-dom";
import {Spin} from 'antd'

const Home = lazy(() => import('../views/Home'))
const User = lazy(() => import('../views/User'))
const SelectedDisk = lazy(() => import('../views/SelectedDisk'))
const HighQualitySonglist = lazy(() => import('../views/HighQualitySonglist'))
const Singer = lazy(() => import('../views/Singer'))
const AppMain = () => {
    return (
        <div className="app-main">
            <Suspense fallback={<div className='app-main-loading'>
                <Spin></Spin>
            </div>}>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/user" element={<User/>}/>
                    <Route path="/selectedDisk" element={<SelectedDisk/>}/>
                    <Route path="/highQualitySonglist" element={<HighQualitySonglist/>}/>
                    <Route path="/singer" element={<Singer/>}/>
                </Routes>
            </Suspense>

        </div>
    )
}
export default AppMain
