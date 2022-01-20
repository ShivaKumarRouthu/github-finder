import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Home from "./components/Pages/Home";
import User from "./components/Pages/User";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Footer from "./components/layout/Footer";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <div>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              <main className="container mx-auto px-3 pb-12">
                <Alert />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}
