import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import AddCoffee from './Pages/AddCoffee/AddCoffee';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import Register from './Pages/Register/Register';
import Update from './Pages/Update/Update';
import Users from './Pages/Users/Users';
import AuthProvider from './Provider/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('http://localhost:5000/coffees')
      },
      {
        path: '/add',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/users',
        element:<Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

