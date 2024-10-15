import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Mine from "./components/Mine";
import Friends from "./components/Friends";
import Earn from "./components/Earn";
import Settings from "./components/Settings";
import Task from "./components/Task";

import AdminAuth from "./Admin/Auth";
import AdminHome from "./Admin/Home";
import AdminRedeemAdd from "./Admin/Pages/Redeem/Add";
import AdminRedeemSee from "./Admin/Pages/Redeem/See";
import AdminUserSee from "./Admin/Pages/Users/See";
import AdminUserUpdate from "./Admin/Pages/Users/Update";
import AdminUserBan from "./Admin/Pages/Users/Ban";
import AdminMineCardAdd from "./Admin/Pages/MineCard/Add";
import AdminMineCardSee from "./Admin/Pages/MineCard/See";
import AdminYoutubeAdd from "./Admin/Pages/Youtube/Add";
import AdminYoutubeSee from "./Admin/Pages/Youtube/See";

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
          path: "/Task",
          element: <Task />,
        },
        {
          path: "/Earn",
          element: <Earn />,
        },
      ],
    },
    {
      path: "/Admin",
      element: <AdminAuth />,
      children: [
        {
          path: "",
          element: <AdminHome />,
        },
        {
          path: "Youtube",
          element: <AdminYoutubeSee />,
        },
        {
          path: "Redeem",
          element: <AdminRedeemSee />,
        },
        {
          path: "Cards",
          element: <AdminMineCardSee />,
        },
        {
          path: "Users",
          element: <AdminUserSee />,
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
