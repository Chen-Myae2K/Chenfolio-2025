import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectDetailSection from "./components/ProjectDetailSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/project-detail/:id",
    element: <ProjectDetailSection />,
  },
]);
