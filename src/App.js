
//import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About";
import Frinddatils from "./Frinddtails/Frinddatils";

import Home from "./Home/Home";
import Main from "./Layouts/Main";
import Post from "./post/Post";
import Products from "./Products/Products";
import Uniqpost from "./uniqpost/Uniqpost";
import './App.css'

function App() {
  const router=createBrowserRouter([
   
      {path:'/',element:<Main></Main>,children:[
         {path:'/home',element:<Home></Home>},
        {path:'/products',
        loader: async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        element:<Products></Products>},

        {
                 path:'/frind/:frindId',
                
                 loader:async({params})=>{
                  //console.log(params.frindId)
                 return fetch(`https://jsonplaceholder.typicode.com/users/${params.frindId}`)
                 },
                 element:<Frinddatils></Frinddatils>
        },
        {path:'/about', element:<About></About>},
       
        {path:'/post',
        
        loader:async()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element:<Post></Post>},
        {path:'/post/:postId',
          loader:async({params})=>{
            //console.log(params.postId)
           return  fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },

        element:<Uniqpost></Uniqpost>
      }
      ]
    },
       
     {path:'*',element:<h1>Not fonnd</h1>}
  ])
  return (
    <div className="App">
     <h1>Thsi is a hearder</h1>
     <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
