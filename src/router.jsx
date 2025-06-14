import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/project-detail/:slug",
    element: <ProjectDetailPage />,
  },
]);
