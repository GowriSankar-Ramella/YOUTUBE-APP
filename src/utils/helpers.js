// utils/helpers.js
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const messages = [
    "Hello!",
    "Cool video 🎥",
    "🔥🔥🔥",
    "What a moment!",
    "Nice explanation!",
    "😂😂😂",
];

export const generateRandomName = () =>
    names[Math.floor(Math.random() * names.length)];

export const generateRandomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
