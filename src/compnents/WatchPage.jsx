// pages/WatchPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import LiveChat from "./LiveChat";


const WatchPage = () => {
    const { videoId } = useParams();
    const [videoData, setVideoData] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchVideo = async () => {
            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=AIzaSyCqdb1hC2kEzc2v9KrWs_g699vS6gXs5O8`
            );
            const json = await res.json();
            setVideoData(json.items[0]);
        };

        fetchVideo();
        dispatch(closeMenu());
    }, [videoId, dispatch]);

    if (!videoData) return <div className="p-4">Loading...</div>;

    const { snippet, statistics } = videoData;

    return (
        <div className="flex flex-col lg:flex-row p-4 gap-6">
            {/* Left: Video Player & Info */}
            <div className="flex-1">
                <div className="aspect-video w-full">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={snippet.title}
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>

                <h2 className="mt-4 text-xl font-bold">{snippet.title}</h2>
                <p className="text-sm text-gray-600">
                    {Number(statistics.viewCount).toLocaleString()} views •{" "}
                    {new Date(snippet.publishedAt).toDateString()}
                </p>

                <div className="mt-2">
                    <p className="font-semibold text-gray-800">{snippet.channelTitle}</p>
                    <p className="text-gray-700 mt-1 whitespace-pre-line">
                        {snippet.description}
                    </p>
                </div>
            </div>

            {/* Right: Live Chat */}
            <div className="w-full lg:w-[350px]">
                <LiveChat />
            </div>
        </div>
    );
};

export default WatchPage;
