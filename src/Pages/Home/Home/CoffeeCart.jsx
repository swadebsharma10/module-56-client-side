import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCart = ({coffee,coffees, setCoffees}) => {
    const {_id, name, photo, details, chef } = coffee;

    const handleDelete = id=>{
        // console.log('Delete', Id);
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

            fetch(`http://localhost:5000/coffees/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                 });
               const remaining = coffees.filter(coff=> coff._id !== id);
               setCoffees(remaining)  
            }
            })
            
            }
          });
    }


    return (
        <div className='m-4'>
        <div className=" card card-side bg-base-100 shadow-xl border-purple-700 border p-6">
        <figure><img src={photo} alt="Movie"/></figure>
        <div className="flex justify-between items-center w-full ">
           <div className='p-4'>
           <h2 className="card-title"> Name:{name}</h2>
           <h5 className='font-bold'>Details: {details}</h5>
           <h5 className='font-bold'>Chef: {chef}</h5>
           </div>
          <div className="">
          <div className="btn-group space-y-4 btn-group-vertical">
          <button className="btn btn-sm btn-primary">View</button>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-sm btn-secondary">Edit</button>
          </Link>
          <button onClick={()=> handleDelete(_id)} className="btn btn-sm btn-error">Delete</button>
        </div>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default CoffeeCart;

CoffeeCart.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.node,
    
}