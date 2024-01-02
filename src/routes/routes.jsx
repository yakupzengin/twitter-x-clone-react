import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home';
import Explore from '../pages/explore';
import Notifications from '../pages/notifications';
import NotFound from '../pages/not-found';
import MainLayout from '../layouts/main';
import Profile from '../pages/profile';
import Messages from '../pages/messages';
import List from '../pages/list';
import Bookmarks from '../pages/bookmarks';
import Communities from '../pages/communities';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // this is a speacial case . 
            {
                index:true,
                element : <Home/>
            },
            // --- 
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path:"messages",
                element: <Messages/>
            },
            {
                path:"lists",
                element: <List/>
            },
            {
                path:"bookmarks",
                element: <Bookmarks/>
            },
            {
                path: ":slug",
                element: <Profile/>
            },
            {
                path:"communities",
                element: <Communities/>
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }

])
export default routes;