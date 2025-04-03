import React from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/index.css";


const App = () => {
    return ( 
        <div className="p-10 bg-red-500 text-white text-2xl">
        If this text is red, Tailwind is working.
      </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);