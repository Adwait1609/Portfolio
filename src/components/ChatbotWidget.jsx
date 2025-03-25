import React, { useState } from 'react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! I can answer questions about my resume and projects. What would you like to know?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Add user message to chat
    setMessages(prev => [...prev, { sender: 'user', text: query }]);

    // Save query and clear input
    const userQuery = query;
    setQuery('');
    setIsLoading(true);

    try {
      // Here we'd normally make a real API call to Groq or Together.ai
      // This is a placeholder to simulate response
      setTimeout(() => {
        const botResponse = getBotResponse(userQuery);
        setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
        setIsLoading(false);
      }, 1000);

      // Uncomment and update this when you have a real API endpoint
      /*
      const response = await fetch('YOUR_LLM_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY',
        },
        body: JSON.stringify({
          prompt: `You are an AI assistant for my portfolio website. Answer questions about my experience, skills, and projects.
                  My resume info:
                  - Web Developer at Shopify (Jan 2022 - Jan 2023)
                  - Full stack Developer at Meta (Jan 2023 - Present)
                  - Skills include React.js and related technologies
                  
                  User asked: "${userQuery}"`,
        }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.answer || 'No answer received.' }]);
      */
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I had trouble connecting. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Temporary function to simulate responses until you integrate a real LLM
  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
      return "I've worked as a Web Developer at Shopify (2022-2023) and currently I'm a Full Stack Developer at Meta (2023-present).";
    } else if (lowerQuery.includes('skills') || lowerQuery.includes('technologies')) {
      return "I'm proficient in React.js, responsive design, and cross-browser compatibility. I also collaborate with cross-functional teams on development projects.";
    } else if (lowerQuery.includes('education') || lowerQuery.includes('study')) {
      return "I have advanced education in Computer Science with a focus on web development technologies.";
    } else {
      return "I'm happy to answer questions about my work experience, projects, and skills. What specific information would you like to know?";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center"
      >
        <span className="mr-2">Chatbot</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
          {/* Chat header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Portfolio Assistant</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg max-w-xs ${msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-2 flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask me something..."
              className="flex-1 p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
              disabled={isLoading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;