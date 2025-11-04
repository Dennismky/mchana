import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen pt-24">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
