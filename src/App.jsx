import Instagram from './pages/Instagram';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <section className="bg-alternative font-lato">
      <Navbar />
      <Home />
      <Instagram />
      <Footer />
    </section>
  );
}

export default App;
