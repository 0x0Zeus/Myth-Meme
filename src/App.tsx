import { FC } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { setAuthToken } from "./Middlewares/setAuthTokens";
import { Layout } from "./Layout";
import HomePage from "./page/HomePage";
import ArticleDetail from "./page/ArticleDetail";
import ContactUs from "./page/ContactUs";
import AboutUs from "./page/AboutUs";
import CharacterDetail from "./page/CharacterDetail";
import BlogLayout from "./Layout/BlogLayout";
import BlogsPage1 from "./components/Blogs/BlogsPage1";
import Poems from "./page/Poems";
import Tokenomics from "./page/Tokenomics";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/articles/:id',
        element: <ArticleDetail />
      },
      {
        path: '/contactus',
        element: <ContactUs />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/character/:id',
        element: <CharacterDetail />
      },
      {
        path: '/poetry',
        element: <Poems />
      },
      {
        path: '/tokenomics',
        element: <Tokenomics />
      },
      {
        path: "*",
        element: <HomePage/>
      },
      {
        path: "/blogs",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/blogs/page1" replace />
          },
          {
            path: '/blogs/page1',
            element: <BlogsPage1 />,
          },
          
          
        ]
      },
    ]
  }
])

const App: FC = () => {
  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App