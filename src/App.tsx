import React from 'react';
import ChatGPT from './ChatGPT';

const API_KEY = 'YOUR_CHATGPT_API_KEY_HERE';

const App: React.FC = () => {
  return (
    <div>
      <h1>ChatGPT Search Text</h1>
      <ChatGPT apiKey={API_KEY} />
    </div>
  );
};

export default App;