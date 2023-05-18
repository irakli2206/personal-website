import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Resume from './pages/Resume.tsx';
import Root from './layouts/Root.tsx';


const router = createBrowserRouter([
  {

    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/resume",
        element: <Resume />,

      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
