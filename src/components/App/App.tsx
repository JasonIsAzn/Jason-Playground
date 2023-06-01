import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Landing/LandingPage"


// Routers not really nessesary for this project, but I wanted to try out different routing methods
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
