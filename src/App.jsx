import { Routes, Route } from "react-router-dom"
import Header from "./compnents/Header"
import VideoContainer from "./compnents/VideoContainer"
import Layout from "./compnents/Layout"
import WatchPage from "./compnents/WatchPage"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<VideoContainer />} />
          <Route path="/watch/:videoId" element={<WatchPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
