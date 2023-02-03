import ListUsers from "./ListUsers";
import EditUser from "./EditUser";
import CreateUser from "./CreateUser";

export const routes = [
  {
    path: "/users",
    exact: true,
    element: ListUsers
  },
  {
    path: "/edit/:id",
    exact: true,
    element: EditUser
  },
  {
    path: "/create",
    exact: true,
    element: CreateUser
  }
];