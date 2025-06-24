import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {loader as productsLoader} from "./views/Products";
import NewProduct, {action as NewProductAction} from "./views/NewProduct";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <Products />,
                index: true,
                loader: productsLoader
            },
            {
                path: "/products/new",
                element: <NewProduct/>, 
                action: NewProductAction
            }
        ]
    }
])