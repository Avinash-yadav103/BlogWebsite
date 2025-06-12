import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import '@fontsource/playfair-display/400.css';
// import '@fontsource/playfair-display/700.css';
// import '@fontsource/lora/400.css';
// import '@fontsource/lora/500.css';
// import '@fontsource/lora/600.css';
// import '@fontsource/libre-baskerville/400.css';
// import '@fontsource/libre-baskerville/700.css';
// import '@fontsource/courier-prime/400.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
