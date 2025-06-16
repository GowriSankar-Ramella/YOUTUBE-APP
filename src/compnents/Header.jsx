// Header.jsx
import { Menu, Search, Bell, Video, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
    const [input, setInput] = useState("")
    const [completions, setCompletions] = useState([])
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(toggle())
    }

    useEffect(() => {

        const fetchResults = async () => {
            const raw = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${input}`)
            const json = await raw.json()
            setCompletions(json[1])
        }

        const timer = setTimeout(() =>
            fetchResults(), 250)

        return () => {
            clearTimeout(timer)
        }
    }, [input])

    return (
        <header className="w-full flex items-center justify-between px-4  shadow-md sticky top-0 bg-white z-50">
            {/* Left: Hamburger + Logo */}
            <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full hover:bg-black-200" onClick={handleClick}>
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
                <Link to="/">
                    <div className="flex items-center ">
                        <img
                            src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
                            alt="YouTube Logo"
                            className="h-18 w-auto"
                        />
                    </div>
                </Link>
            </div>

            {/* Center: Search Bar */}
            <div className="flex flex-col flex-1 max-w-xl mx-4 relative">
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-grow px-4 py-1 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="px-4 py-1 bg-gray-200 border-t border-b border-r border-gray-300 rounded-r-full hover:bg-gray-300">
                        <Search className="w-4 h-4" />
                    </button>
                </div>

                {/* Search Suggestions */}
                {completions.length > 0 && (
                    <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                        {completions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                                onClick={() => setInput(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>


            {/* Right: Icons */}
            <div className="flex items-center space-x-4">
                <Video className="w-5 h-5 text-gray-700 cursor-pointer hidden sm:inline" />
                <Bell className="w-5 h-5 text-gray-700 cursor-pointer hidden sm:inline" />
                <User className="w-6 h-6 text-gray-700 cursor-pointer" />
            </div>
        </header>
    );
};

export default Header