import { useState } from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <LikeButton />
            </header>
        </div>
    );
}

export default App;

function LikeButton() {
    const [count, setCount] = useState(999);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <span className="likeButton" onClick={handleClick}>
            ♥ {count}
        </span>
    );
}
