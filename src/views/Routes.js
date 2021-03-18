import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Routes = () => {

    return (
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/search/:query"} component={Search}/>
        </Switch>
    )
}

export default Routes;