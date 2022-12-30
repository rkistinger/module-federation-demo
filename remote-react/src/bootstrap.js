import '@carvana/showroom-css-theme/Theme.css';
import '@carvana/showroom-css-theme/Reset.css';
import '@carvana/showroom-css-theme/Font.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root')).render(<App />);
