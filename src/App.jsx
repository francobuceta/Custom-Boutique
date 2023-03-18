import Instagram from './pages/Instagram';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
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
      <Promotions />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
