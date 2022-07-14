import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
/*
ReactDOM.hydrate(
	<BrowserRouter>
	<Switch>
		<App />
	</Switch>	
	</BrowserRouter>,
//	document.getElementById("root")
);*/

function MyApp() {
    return (
        <>
	<BrowserRouter>
		<App />	
	</BrowserRouter>,
            </>
        
    );
}
	
export default MyApp;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
