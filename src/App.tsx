import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Mine from "./components/Mine";
import Friends from "./components/Friends";
import Earn from "./components/Earn";
import Settings from "./components/Settings";
import Task from "./components/Task";
import RedeemHistory from "./components/RedeemHistory";

import AdminAuth from "./Admin/Auth";
import AdminHome from "./Admin/Home";
import AdminRedeemAdd from "./Admin/Pages/Redeem/Add";
import AdminRedeemSee from "./Admin/Pages/Redeem/See";
import AdminRedeemUpdate from "./Admin/Pages/Redeem/Update";
import AdminUserSee from "./Admin/Pages/Users/See";
import AdminUserUpdate from "./Admin/Pages/Users/Update";
import AdminMineCardAdd from "./Admin/Pages/MineCard/Add";
import AdminMineCardSee from "./Admin/Pages/MineCard/See";
import AdminYoutubeAdd from "./Admin/Pages/Youtube/Add";
import AdminYoutubeSee from "./Admin/Pages/Youtube/See";
import AdminOrdersee from "./Admin/Pages/Order/See";
import AdminOrderupdate from "./Admin/Pages/Order/Update";

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
        {
          path: "/RedeemHistory",
          element: <RedeemHistory />,
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
          path: "Youtube/Add",
          element: <AdminYoutubeAdd />,
        },

        {
          path: "Redeem",
          element: <AdminRedeemSee />,
        },
        {
          path: "Redeem/Add",
          element: <AdminRedeemAdd />,
        },
        {
          path: "Redeem/update/:slug",
          element: <AdminRedeemUpdate />,
        },
        {
          path: "Cards",
          element: <AdminMineCardSee />,
        },
        {
          path: "Cards/Add",
          element: <AdminMineCardAdd />,
        },

        {
          path: "Users",
          element: <AdminUserSee />,
        },
        {
          path: "User/update/:slug",
          element: <AdminUserUpdate />,
        },
        {
          path: "Order",
          element: <AdminOrdersee />,
        },
        {
          path: "Order/update/:slug",
          element: <AdminOrderupdate />,
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
