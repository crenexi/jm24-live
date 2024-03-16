import ReactDOM from 'react-dom/client';
import App from './core/components/App';

// Render application
const elRoot = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(elRoot);

root.render(<App />);
