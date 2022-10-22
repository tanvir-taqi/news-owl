import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category/Category";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import News from "../components/News/News";
import Profile from "../components/Profile/Profile";
import Registration from "../components/Registration/Registration";
import TermsAndCondition from "../components/Terms/TermsAndCondition";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/news')
            },
           {
            path:'/category/:id',
            element: <Category></Category>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
           },
           {
            path:'/news/:id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
           },
           {
            path:'/login',
            element: <Login></Login>,
            
           },
           {
            path:'/register',
            element: <Registration></Registration>,
            
           },
           {
            path:'/terms',
            element: <TermsAndCondition></TermsAndCondition>, 
           },
           {
            path:'/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
           },
        ]
    }
])