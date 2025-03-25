import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { About, Blog, Contact, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";
import ChatbotWidget from './components/ChatbotWidget';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Tech />
              <Works />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
              {/* Floating chatbot always in bottom-right corner */}
              <ChatbotWidget />
            </div>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;