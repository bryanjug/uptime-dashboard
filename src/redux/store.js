import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
	LOG_IN,
	LOADING,
	LOADING_STYLE,
    USERNAME,
    STYLE_LOGIN,
    STYLE_LOGOUT,
	USER_ID,
	CONNECTED,
	FAVORITE_LOADING_STYLE,
} from "./actions";

const initialState = {
	count: 0,
	isLoggedIn: false,
	isLoading: true,
    loadingStyle: "loadingContainer displayInline",
    username: "",
    accessToken: "",
    styleLogin: "googleBtn displayInline",
    styleLogout: "googleBtn displayNone",
	userId: "",
	favorite1: "",
	favorite2: "",
	favorite3: "",
	favorite4: "",
	favoriteStyle: "displayInline",
	favoriteChartStyle: "displayNone",
	connected: false,
	favoriteLoadingStyle: "favoriteLoading",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case LOG_IN:
			return {
				...state,
				isLoggedIn: action.payload,
			};
		case LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case LOADING_STYLE:
			return {
				...state,
				loadingStyle: action.payload,
			};
		case USERNAME:
			return {
				...state,
				username: action.payload,
            };
        case STYLE_LOGIN:
            return {
                ...state,
                styleLogin: action.payload,
            };
        case STYLE_LOGOUT:
            return {
                ...state,
                styleLogout: action.payload,
            };
        case USER_ID:
            return {
                ...state,
                userId: action.payload,
			};
		case CONNECTED:
			return {
				...state,
				connected: action.payload,
			}
		case FAVORITE_LOADING_STYLE:
			return {
				...state,
				favoriteLoadingStyle: action.payload,
			}
	}
};

export default createStore(rootReducer, applyMiddleware(thunk));
