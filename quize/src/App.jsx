import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Add from './Pages/Add';
import View from './Pages/View';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Play from './Pages/Play';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCybKqzLM1n1Kmoy9PWVL6tpZQLb38fqAg",
  authDomain: "quize-01app.firebaseapp.com",
  projectId: "quize-01app",
  storageBucket: "quize-01app.appspot.com",
  messagingSenderId: "500501451932",
  appId: "1:500501451932:web:64ebc99144ba2a7fd94959",
  measurementId: "G-5JN4HCZGJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  const routes=createBrowserRouter(
    [
      {
        path: "/",
        element:<Layout/>,
        children:[
          {
            path:"/",
            element:<View/>
          },
          {
            path: "/add",
            element:<Add/>
          },
          {
            path: "/login",
            element:<Login/>
          },
          {
            path: "/signup",
            element:<Signup/>
          },
          {
            path:"/play",
            element:<Play/>
          },
          

        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
