import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MarketingSection from './components/pages/Marketing/index.jsx';
import BusinessSection from './components/pages/Business/index.jsx';
import BrandingSection from './components/pages/Branding/index.jsx';
import DevelopmentSection from './components/pages/Development/index.jsx';
import BundleSection from './components/pages/Bundle/index.jsx';
import Consulting from './components/pages/Consulting/index.jsx';
import About from './components/pages/About/index.jsx';
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/branding',
    element: <BrandingSection />
  },
  {
    path: '/business',
    element: <BusinessSection />
  },
  {
    path: '/development',
    element: <DevelopmentSection />
  },
  {
    path: '/bundle',
    element: <BundleSection />
  },
  {
    path: '/marketing',
    element: <MarketingSection />
  },
  {
    path: '/consulting',
    element: <Consulting />
  },
  {
    path: '/about',
    element: <About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);