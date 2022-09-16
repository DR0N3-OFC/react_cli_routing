import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { SignUp } from "./pages/signup";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} /> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/feed" element={<Feed />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
