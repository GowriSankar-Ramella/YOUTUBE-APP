import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        popularVideos: []
    },
    reducers: {
        addVideo: (state, action) => {
            state.popularVideos = action.payload
        }
    }
})

export const { addVideo } = videoSlice.actions

export default videoSlice.reducer