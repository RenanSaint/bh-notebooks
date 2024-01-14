import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Chamados from './routes/chamados.jsx'
import Contratos from './routes/Contratos.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "contratos",
        element: <Contratos/>, 
        loader: function(){return "None"},
        children:[
          {
            path: "ativos",
            element:<Contratos/>,
            loader: function(){return "Ativos"}
          },
          {
            path: "pendentes",
            element:<Contratos/>,
            loader: function(){return "Pendentes"}
          },
          {
            path: "finalizados",
            element:<Contratos/>,
            loader: function(){return "Finalizados"}
          },
          {
            path: "arquivados",
            element:<Contratos/>,
            loader: function(){return "Arquivados"}
          }
        ]
      },
      {
        path: "chamados",
        element: <Chamados/>,
        loader: function(){return "None"},
        children:[
          {
            path: "iniciados",
            element:<Chamados/>,
            loader: function(){return "Iniciados"}
          },
          {
            path: "espera",
            element:<Chamados/>,
            loader: function(){return "Em espera"}
          },
          {
            path: "finalizados",
            element:<Chamados/>,
            loader: function(){return "Finalizados"}
          },
          {
            path: "arquivados",
            element:<Chamados/>,
            loader: function(){return "Arquivados"}
          },
        ]
      }
    ]
  }
])

/* const router = createBrowserRouter([
  {
    path: "chamados",
    element: <Chamados/>
  },
  {
    path: "contratos",
    element: <Contratos/>
  }
]) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
