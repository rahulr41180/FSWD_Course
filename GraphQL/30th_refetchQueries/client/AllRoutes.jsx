
import Pages from "./Pages/export";
import Component from "./Components/export";

export const routes = [
    { path: "/", element: <Pages.HomePage /> },
    { path: "/create-comment", element: <Pages.CreateCommentPage /> },
    { path: "/login", element: <Pages.LoginPage /> },
    { path: "/signup", element: <Pages.SignUpPage /> },
    { path: "/profile", element: <Pages.ProfilePage /> },
]