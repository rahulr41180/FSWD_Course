
import Pages from "./Pages/export.js";
import Component from "./Components/export.js";

export const routes = [
    { path: "/", element: <Pages.HomePage /> },
    { path: "/create", element: <Pages.CreateCommentPage /> },
    { path: "/logIn", element: <Pages.LoginPage /> },
    { path: "/signUp", element: <Pages.SignUpPage /> },
    { path: "/profile", element: <Pages.ProfilePage /> },
]