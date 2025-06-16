import { Link } from "react-router-dom";

// components/VideoCard.jsx
const VideoCard = ({ video }) => {
    const { snippet, statistics } = video;
    const { thumbnails, title, channelTitle, publishedAt } = snippet;

    return (
        <Link to={`/watch/${video.id}`}>
            <div className="w-full cursor-pointer">
                {/* Thumbnail */}
                <img
                    src={thumbnails?.high?.url}
                    alt="thumbnail"
                    className="w-full rounded-lg mb-2 aspect-video object-cover"
                />

                {/* Video Info */}
                <div className="flex gap-3">
                    {/* You can later add a channel icon here */}
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-600">{channelTitle}</p>
                        <p className="text-xs text-gray-500">
                            {Number(statistics?.viewCount).toLocaleString()} views •{" "}
                            {new Date(publishedAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
