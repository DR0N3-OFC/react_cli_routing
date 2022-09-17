import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { SignUp } from "./pages/signup";
import { AuthContextProvider } from "./context/auth";

function App() {
    return (
        <div className="App">
            <Router>
                <AuthContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<SignUp />} /> 
                        <Route path="/login" element={<Login />} />
                        <Route path="/feed" element={<Feed />} />
                    </Routes>
                </AuthContextProvider>
            </Router>
        </div>
    );
}

export default App;
