import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
