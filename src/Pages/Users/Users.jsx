import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData();

    const[users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = id =>{
      console.log('Delete user', id)
      // 
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
               Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success"
          });

          const remaining = users.filter(user => user._id !== id);
          setUsers(remaining)


            }
          })
         
        }
      });
    }

    return (
        <section>
            <h3 className="text-2xl font-bold text-center my-4">Register Users: {users.length}</h3>

         <div>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user, idx )=> <tr key={user._id}>
            <th>{idx+1}</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLogged}</td>
            <td>
              <button
               onClick={()=>handleDeleteUser(user._id)} className="btn btn-accent">X</button>  
            </td>
            </tr>)
    }
    
    </tbody>
  </table>
</div>
           
         </div>
          
        </section>
    );
};

export default Users;