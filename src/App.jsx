import './App.css'
import { createBrowserRouter, RouterProvider   } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthContextProvider } from './context/AuthContext';
import Layout from './component/Layout';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import OTGTv from './pages/OTGTv';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/admin/Dashboard';
import { MenuContextProvider } from './context/MenuContext';

const routes = createBrowserRouter([
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
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
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/otgTv',
        element: <OTGTv />
      },
      {
        path: '/admin/dashboard',
        element: <Dashboard />
      }
    ],
  },
]);
function App() {

  return (
    <>
    <AuthContextProvider>
      <MenuContextProvider>
     <RouterProvider router={routes} />
     </MenuContextProvider>
     </AuthContextProvider>
    </>
  )
}

export default App
