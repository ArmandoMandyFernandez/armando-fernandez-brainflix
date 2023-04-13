import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Upload from "./pages/Upload/Upload";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="upload" element={<Upload to="upload" />} />
                <Route path="upload/:id" element={<Main to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App;
