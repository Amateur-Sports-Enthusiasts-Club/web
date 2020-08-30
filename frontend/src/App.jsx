import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

// Pages {{{
import Home from "./pages/Home";
// }}}

export function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />

                {/* <Route exact path="/404" component={Error404} /> */}
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
