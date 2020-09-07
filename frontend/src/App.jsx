import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import "./App.css";

// Components {{{
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
// }}}

// Pages {{{
import Home from "./pages/Home";
import Football from "./pages/Football";
import Cricket from "./pages/Cricket";
import Basketball from "./pages/Basketball";
import Badminton from "./pages/Badminton";
import Pool from "./pages/Pool";
// }}}

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

export function App() {
    const bounceTransition = {
        // start in a transparent, upscaled state
        atEnter: {
            opacity: 0,
            scale: 1.2,
        },
        // leave in a transparent, downscaled state
        atLeave: {
            opacity: bounce(0),
            scale: bounce(0.8),
        },
        // and rest at an opaque, normally-scaled state
        atActive: {
            opacity: bounce(1),
            scale: bounce(1),
        },
    };
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Switch>
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="switch-wrapper"
                >
                    <Route exact path="/" component={Home} />

                    <Route exact path="/football" component={Football} />
                    <Route exact path="/cricket" component={Cricket} />
                    <Route exact path="/Basketball" component={Basketball} />
                    <Route exact path="/Badminton" component={Badminton} />
                    <Route exact path="/pool" component={Pool} />

                    {/* <Route exact path="/404" component={Error404} /> */}
                    <Redirect to="/404" />
                </AnimatedSwitch>
            </Switch>
        </>
    );
}

export default App;

