import React from "react";
import { Form } from "./components/form/Form";
import { useGetUsers } from "./components/useGetUsers";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const App = () => {
  const { data, loading } = useGetUsers(
    "https://api-spartan-143a3bbd2958.herokuapp.com/users"
  );
  console.log(data);
  return (
    <>
      <Form />

      {data &&
        data?.map((item) => (
          <>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.city}</li>
            <li>{item.username}</li>
            <li>{item.website}</li>
            <AddIcon />
            <DeleteIcon />
            <VisibilityIcon />
          </>
        ))}
    </>
  );
};
