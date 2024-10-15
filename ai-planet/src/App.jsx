import React, { useState } from 'react';
import Canvas from './components/Canvas';
import './App.css';

function App() {
    const [nodes, setNodes] = useState([]);

    const addNode = (type) => {
        const id = `${type}-${nodes.length + 1}`;
        setNodes([...nodes, { id, type }]);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <h2>Components</h2>
                <div className="component-list">
                    <button onClick={() => addNode('Input')}>Input</button>
                    <button onClick={() => addNode('LLM Engine')}>LLM Engine</button>
                    <button onClick={() => addNode('Output')}>Output</button>
                </div>
            </div>
            <div className="canvas-container">
                <Canvas nodes={nodes} />
            </div>
        </div>
    );
}

export default App;
