import React from "react";
// dependency
//import { useEffect } from "react";
import { createContext, useEffect, useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// react bootstrap
 import { Container } from "react-bootstrap";

// styles
//import "../assets/styles/scss/global.css";

// pages
import Home from "./Home";
import Compare from "./Compare";
import CollegeRowList from "./CollegeRowList";
import CollegeDetail from "./CollegeDetail";
import AboutUs from "./AboutUs";
import CourseDetail from "./CourseDetail";
import ContactUs from "./ContactUs";
import ApplyNow from "./ApplyNow";
import BookAppointment from "./BookAppointment";

// Context
import { reducer } from "../Context/Reducer";
import { initialState } from "../Context/InitialState";
import URLMapping from "../Context/URLs";
import Footer from "../Components/_Footer";

//  Context
export const DATA_LAYER = createContext();

function App() {
	// context
	const [state, dispatch] = useReducer(reducer, initialState);

	function addCompare(data) {
		return dispatch({
			type: "ADD_COMPARE",
			payload: data,
		});
	}

	function removeCompare(data) {
		return dispatch({
			type: "REMOVE_COMPARE",
			payload: data,
		});
	}

	function addAllCollege(data) {
		return dispatch({
			type: "ADD_ALL_COLLEGE",
			payload: data,
		});
	}

	function addFilter(data) {
		return dispatch({
			type: "ADD_FILTER_LIST",
			payload: data,
		});
	}

	function setActiveFilter(data) {
		return dispatch({
			type: "SET_ACTIVE_FILTER",
			payload: data,
		});
	}

	function reInitState() {
		return dispatch({
			type: "REINIT_STATE",
		});
	}

	function triggerSearch() {
		return dispatch({
			type: "TRIGGER_SEARCH",
		});
	}

	useEffect(() => {
		reInitState();
	}, []);

	return (
		<>
			{state.isStateInitiated && (
				<DATA_LAYER.Provider value={{ ...state, addCompare, removeCompare, addAllCollege, addFilter, setActiveFilter, triggerSearch }}>
					<Switch>
						<Route path={URLMapping.home.label} component={Home} exact />
						<Route path={URLMapping.compare.label} component={Compare} exact />
						<Route path={URLMapping.collegeDetail.label} component={CollegeDetail} />
						<Route path={URLMapping.courseDetail.label} component={CourseDetail} />
						<Route path={URLMapping.aboutUs.label} component={AboutUs} />
						<Route path={URLMapping.contactUs.label} component={ContactUs} />
						<Route path={URLMapping.courseList.label} component={CollegeRowList} />
						<Route path={URLMapping.applyNow.label} component={ApplyNow} />
						<Route path={URLMapping.coursesPG.label} component={CollegeRowList} />
						<Route path={URLMapping.coursesUG.label} component={CollegeRowList} />
						<Route path={URLMapping.bookAppointment.label} component={BookAppointment} />
						<Route path={"/"} component={Home} />
						<Route path={"/userHome"} component={Footer} />
						<Route path="*" component={Home} />
					</Switch>
				</DATA_LAYER.Provider>
			)}
		</>
	);
}

export default App;
