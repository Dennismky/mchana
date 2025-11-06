import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index";
import LoginCard from "./components/LoginCard";
import SignupCard from "./components/SignupCard";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen pt-24 bg-[hsl(0,0%,98%)] dark:bg-[hsl(0,0%,10%)] transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignupCard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
