import { useEffect, useState } from "react";
import { YT_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import CategoryBar from "./CategoryBar";
import { useDispatch } from "react-redux";
import { addVideo } from "../utils/videoSlice";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchVideos = async () => {
            const raw = await fetch(YT_URL);
            const json = await raw.json();
            setVideos(json.items);
            dispatch(addVideo(json.items))
        };
        fetchVideos();
    }, []);

    // Optionally filter based on category
    const filteredVideos = videos.filter((video) =>
        selectedCategory === "All"
            ? true
            : video.snippet.title
                .toLowerCase()
                .includes(selectedCategory.toLowerCase())
    );

    return (
        <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <CategoryBar
                selected={selectedCategory}
                setSelected={setSelectedCategory}
            />

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </main>
    );
};

export default VideoContainer;
