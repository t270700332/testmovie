import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

export const routes = [
  {
    path: "/",
    component: Home
  },
  { path: "/login", name: "loginLink", component: LoginPage },
  { path: "/register", name: "registerLink", component: RegisterPage },
  { path: "*", redirect: "/" }
];
