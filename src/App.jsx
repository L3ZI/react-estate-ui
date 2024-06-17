import './routes/layout/layout.scss'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./routes/layout/layout.jsx";
import HomePage from "./routes/homepage/homePage.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import SinglePage from "./components/singlePage/singlePage.jsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children:[
                {
                    path:"/",
                    element:<HomePage/>
                },
                {
                    path:"/list",
                    element:<ListPage/>
                },
                {
                    path:"/:id",
                    element:<SinglePage/>
                }
            ]
        },
    ]);

  return (
      <RouterProvider router={router}/>
  )
}

export default App