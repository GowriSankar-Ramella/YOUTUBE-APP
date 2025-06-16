import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./appSlice"
import VideoReducer from "./videoSlice"
import ChatReducer from "./chatSlice"


const store = configureStore({
    reducer: {
        app: AppReducer,
        video: VideoReducer,
        chat: ChatReducer
    }
})

export default store