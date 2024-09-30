import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./components/Home";
import Mine from "./components/Mine";
import Friends from "./components/Friends";
import Earn from "./components/Earn";
import Settings from "./components/Settings";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Mine",
          element: <Mine />,
        },
        {
          path: "/Friends",
          element: <Friends />,
        },
        {
          path: "/Settings",
          element: <Settings />,
        },
        {
          path: "/Earn",
          element: <Earn />,
        },
      ],
    },
    {
      path: "*",
      element: <Earn />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
