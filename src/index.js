import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import App from './App';

export const items = [
  {
    name: "John Doe",
    picUrl: "https://picsum.photos/200/300"
  },
  {
    name: "Jane Smith",
    picUrl: "https://picsum.photos/id/237/200/300"
  },
  {
    name: "Alice Johnson",
    picUrl: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    name: "Bob Brown",
    picUrl: "https://picsum.photos/200/300?grayscale"
  },
  {
    name: "Charlie Davis",
    picUrl: "https://picsum.photos/200/300/?blur"
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


