import { BrowserRouter} from 'react-router-dom'
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Retrieve values from local storage
    const iconUrl = localStorage.getItem('favicon') || '/vite.svg';
    const title = localStorage.getItem('title') || 'TITLE';

    // Update the favicon dynamically
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute('href', iconUrl);
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = iconUrl;
      document.head.appendChild(newFavicon);
    }

    // Update the document title dynamically
    document.title = title;
  }, []);
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App
