import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

// Components {{{
import Navbar from "./components/Navbar";
// }}}

// Pages {{{
import Home from "./pages/Home";
import Football from "./pages/Football";
import Cricket from "./pages/Cricket";
import Basketball from "./pages/Basketball";
import Badminton from "./pages/Badminton";
import Pool from "./pages/Pool";
// }}}

export function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/football" component={Football} />
                <Route exact path="/cricket" component={Cricket} />
                <Route exact path="/Basketball" component={Basketball} />
                <Route exact path="/Badminton" component={Badminton} />
                <Route exact path="/pool" component={Pool} />

                {/* <Route exact path="/404" component={Error404} /> */}
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
