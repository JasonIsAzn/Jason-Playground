import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../../Landing/LandingPage"
import Test from "../Test"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

  },
  {
    path: "/test",
    element: <Test />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
