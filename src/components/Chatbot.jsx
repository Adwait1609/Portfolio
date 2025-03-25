import React, { useState } from 'react';

function Chatbot() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_LLM_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY',
        },
        body: JSON.stringify({
          prompt: `My résumé info: [paste structured info here]. User asked: "${query}"`,
        }),
      });
      const data = await response.json();
      setAnswer(data.answer || 'No answer received.');
    } catch (err) {
      setAnswer('Error connecting to chatbot.');
    }
  };

  return (
    <div className="p-4 rounded bg-gray-200 text-gray-800 max-w-md">
      <h2 className="text-lg font-bold mb-2">Chatbot</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
        <input
          className="flex-grow border border-gray-400 p-2 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something about my résumé…"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
      {answer && (
        <div className="bg-white p-2 rounded border border-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Chatbot;