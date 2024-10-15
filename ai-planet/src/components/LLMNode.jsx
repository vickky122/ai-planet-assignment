import React from 'react';

function LLMNode() {
    return (
        <div className="node llm-node">
            <h3>LLM Engine</h3>
            <label>Model Name</label>
            <select>
                <option>gpt-3.5</option>
                <option>gpt-4</option>
            </select>
            <label>API Key</label>
            <input type="text" placeholder="Enter API key" />
            <label>Max Tokens</label>
            <input type="number" placeholder="e.g., 1000" />
            <label>Temperature</label>
            <input type="number" placeholder="e.g., 0.5" />
        </div>
    );
}

export default LLMNode;
