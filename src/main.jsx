// import React & React Router
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";



// import pages
import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume'

// Build Route object
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: '/Portfolio',
          element: <Portfolio />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/Resume',
          element: <Resume />,
        },
      ],
    },
  ]);
  
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );