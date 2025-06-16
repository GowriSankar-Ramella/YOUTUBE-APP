// Sidebar.jsx
import {
    Home,
    Compass,
    Clock,
    ThumbsUp,
    ListVideo,
    PlayCircle,
} from "lucide-react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const items = [
        { icon: <Home />, label: "Home" },
        { icon: <Compass />, label: "Explore" },
        { icon: <PlayCircle />, label: "Subscriptions" },
        { icon: <ListVideo />, label: "Library" },
        { icon: <Clock />, label: "History" },
        { icon: <ThumbsUp />, label: "Liked Videos" },
    ];

    const show = useSelector(store => store.app.isMenuOpen)

    return show ? (
        <aside className="w-60 h-full p-4 border-r bg-white hidden sm:block">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                </div>
            ))}
        </aside>
    ) : null
};

export default Sidebar;
