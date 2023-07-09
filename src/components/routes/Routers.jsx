import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Banner from '../banner/Banner'
import Layout from '../../Layout'

import App from '../../App'
const Routers = () => {
    return <Routes>

        <Route path='/portforl/' element={<App />} />


    </Routes>
}

export default Routers