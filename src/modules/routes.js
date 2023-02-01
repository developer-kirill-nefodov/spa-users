import ListUsers from "./ListUsers";
import EditUser from "./EditUser";

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
  }
];