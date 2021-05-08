import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Booking, Home, Login, News, Register, Schedule } from '../../Pages'
import Navbar from '../../Navbar'


const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/berita">
                    <News />
                </Route>
                <Route exact path="/jadwal">
                    <Schedule />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/daftar">
                    <Register />
                </Route>
                <Route exact path="/booking">
                    <Booking />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
