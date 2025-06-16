// components/CategoryBar.jsx
import { useState } from "react";

const categories = [
    "All",
    "Trending",
    "Music",
    "Gaming",
    "News",
    "Sports",
    "Education",
    "Comedy",
    "Technology",
];

const CategoryBar = ({ selected, setSelected }) => {
    return (
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelected(category)}
                    className={`whitespace-nowrap px-4 py-1.5 text-sm rounded-full border ${selected === category
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryBar;
