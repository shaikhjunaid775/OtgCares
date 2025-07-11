import './App.css'
import { createBrowserRouter, RouterProvider   } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthContextProvider } from './context/AuthContext';
import Layout from './component/Layout';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';

const routes = createBrowserRouter([
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
]);
function App() {

  return (
    <>
    <AuthContextProvider>
     <RouterProvider router={routes} />
     </AuthContextProvider>
    </>
  )
}

export default App
