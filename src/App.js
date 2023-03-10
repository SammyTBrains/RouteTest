import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";

//Relative path just appends to end of currently active path, no slash in front

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
