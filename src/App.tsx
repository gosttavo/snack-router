import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./routes/Home";
import RootLayout from "./layout/RootLayout";
import PerfilRestaurante from "./routes/PerfilRestaurante";
import Restaurantes from "./routes/Restaurantes";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/restaurantes',
          element: <Restaurantes />
        },
        {
          path: '/restaurantes/:id',
          element: <PerfilRestaurante />
        }
        ,
        {
          path: '/cidades',
          element: <PerfilRestaurante />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
