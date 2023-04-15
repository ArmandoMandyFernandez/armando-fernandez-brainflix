import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Upload from "./pages/Upload/Upload";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route} from "react-router-dom";


function App() {
    
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/videos/:idFromParams' element={<Main />}/>
                <Route path="/upload" element={<Upload to="upload" />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
    );
}

export default App;
