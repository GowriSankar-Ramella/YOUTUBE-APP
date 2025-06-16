import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helpers";

const LiveChat = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    text: generateRandomMessage(),
                })
            );
        }, 2000);
        return () => clearInterval(interval);
    }, [dispatch]);


    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        dispatch(addMessage({ name: "You", text: input }));
        setInput("");
    };

    return (
        <div className="flex flex-col h-[500px] border rounded bg-white p-3 overflow-hidden">
            <h2 className="font-bold text-lg mb-2">Live Chat</h2>

            {/* Fix here: limit scroll area height */}
            <div className="flex-1 overflow-y-auto space-y-1 mb-2 pr-2 text-sm">
                {messages.map((msg, i) => (
                    <div key={i} className="flex gap-1">
                        <span className="font-semibold text-blue-600">{msg.name}:</span>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSend} className="flex gap-2">
                <input
                    type="text"
                    className="flex-1 border px-2 py-1 rounded text-sm"
                    placeholder="Say something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                    Send
                </button>
            </form>
        </div>
    );
};

export default LiveChat