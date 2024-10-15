import React from 'react';
import InputNode from './InputNode';
import LLMNode from './LLMNode';
import OutputNode from './OutputNode';

function Canvas({ nodes }) {
    return (
        <div className="canvas">
            {nodes.map((node) => {
                switch (node.type) {
                    case 'Input':
                        return <InputNode key={node.id} />;
                    case 'LLM Engine':
                        return <LLMNode key={node.id} />;
                    case 'Output':
                        return <OutputNode key={node.id} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}

export default Canvas;
