import React from 'react'
import { useGetUsers } from "../useGetUsers";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibitdtyIcon from "@mui/icons-material/Visibility";
import styles from "./table.module.css";

export const TableSection = () => {
    const { data, loading } = useGetUsers(
        "https://api-spartan-143a3bbd2958.herokuapp.com/users"
      );
      console.log(data);
  return ( 
     <>
    <div className='div-titulo'>
    <h1 className={styles.title}> Crud Titanes de Acero</h1>
     </div>
     
    <div className={styles.container} >
<table className={styles.table}>
<thead>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>City</th>
    <th>Username</th>
    <th>Website</th> 
    <th>Action</th>
  </tr>
</thead>
<tbody>
{data &&
        data?.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.city}</td>
            <td>{item.username}</td>
            <td>{item.website}</td>
            <td> 
            <AddIcon />
            <DeleteIcon />
            <VisibitdtyIcon />
            </td> 
          </tr>
        ))}
  
</tbody>
</table>

    </div>
    </>
  )
}

