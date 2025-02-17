import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Blog } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            {/* <Experience /> */}
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;