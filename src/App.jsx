import './App.css'
import Banner from './component/Banner'
import { createBrowserRouter, RouterProvider   } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthContextProvider } from './context/AuthContext';
import Header from './component/Header';
import Register from './pages/Register';
import DesignIdeas from './component/DesignIdeas';
import Footer from './component/Footer';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/",
        element: <DesignIdeas />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ],
  },
]);
function App() {

  return (
    <>
    <AuthContextProvider>
     <RouterProvider router={routes} />
     <Footer />
     </AuthContextProvider>
    </>
  )
}

export default App
