
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Adjust the path as needed
import './index.css'

// Initialize the React app
const container = document.getElementById('app'); // The div where your app will render
const root = ReactDOM.createRoot(container);
root.render(<App />);
