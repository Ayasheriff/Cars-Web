import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./Users/userSlice";

const store = configureStore({
    
    //   localStorage.setItem('user', JSON.stringify(store.userinfo()))
    
    reducer: {
        user: userReducer,
        // devTools: true,
        
    },
    // (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose
})
// localStorage.setItem('user', JSON.stringify(userInfo));

export default store;
