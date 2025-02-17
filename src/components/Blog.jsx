import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      {/* ...existing nav links... */}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
);

const Blog = () => {
  const sections = [
    {
      title: 'Writing & Projects',
      items: ['Computer Science', 'Chemistry Book', 'Book Reviews', 'Puzzles']
    },
    {
      title: 'Creative Pursuits',
      items: ['Modular Origami', 'Love Poetry', 'Tabla', 'Photography']
    },
    {
      title: 'Outdoor Activities',
      items: ['Bay Area Hikes', 'Backpacking', 'Biking', 'Travel Guides']
    },
    {
      title: 'Wellness',
      items: ['Yoga Practices', 'Meditation', 'Plant-Based Recipes', 'Mindfulness']
    },
    {
      title: 'Entertainment',
      items: ['Film Reviews', 'Music Recommendations', 'Documentaries', 'Podcasts']
    },
    {
      title: 'Inspiration',
      items: ['Philosophy', 'Life Lessons', 'Career Insights', 'Personal Growth']
    }
  ];

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Gateways To Joy</h1>
        <p className="text-lg opacity-75">Exploring life through technology, nature, and creativity</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="black-gradient rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex}
                  className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer className="mt-12 text-center text-sm opacity-50">
        <p className="mb-2">© Copyright 2008—2023, Journey Explorer</p>
        <p className="hover:opacity-75 transition-opacity">
          contact@example.com
        </p>
      </footer>
    </div>
  );
};

export default Blog;
