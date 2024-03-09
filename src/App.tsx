import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/framer-animation-tests" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
