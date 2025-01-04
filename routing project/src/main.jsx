import React from 'react'
import { createRoot } from 'react-dom/client'  // for creating a root
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' // for routing
import Layout from './Layout'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',    //mainly do hi object honge path and eliment and uske under fir unke child or child me sare path jo ki outlet me render kareane he pehle layout render hogi uske andar outlet ke andar ye sare child components honge 
//     element: <Layout />,   // '/' is the main path and layout is the main component
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    
    <Route path ='/' element ={<Layout/>}>   {/* yaha pe ye opening tag hai  */}
    <Route path ='' element ={<Home/>}/>
    <Route path ='contact' element ={<Contact/>}/> {/* or ye sare nested wale closing tags hai   */}
    <Route path = 'about' element ={<About/>}/>
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
