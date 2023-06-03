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
    const count = 999;
    return <span>♥ {count}</span>;
}
