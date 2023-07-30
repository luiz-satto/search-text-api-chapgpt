import React, { useState } from 'react';
import axios from 'axios';

interface ChatGPTProps {
    apiKey: string;
}

const ChatGPT: React.FC<ChatGPTProps> = ({ apiKey }) => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleSearch = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            };

            const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

            const requestBody = {
                prompt: query,
                max_tokens: 100,
            };

            const { data } = await axios.post(apiUrl, requestBody, { headers });

            setResponse(data.choices[0].text);
        } catch (error) {
            console.error('Error fetching response from ChatGPT API:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default ChatGPT;