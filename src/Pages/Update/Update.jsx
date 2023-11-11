import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Update = () => {
    const coffee = useLoaderData();
    const {_id,name,chef,supplier,taste,category,details,photo} = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee ={name,chef,supplier,taste,category,details,photo};
        console.log(updateCoffee)
        // 
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                swal("Good job!", "Coffee updated successfully", "success");
            }
        })
    }


    return (
        <section>
            <h3 className="text-3xl font-bold text-center my-5">Update A Coffee: {coffee.name}</h3>

            <div>
           <form onSubmit={handleUpdateCoffee} className="card-body">
             <div className="md:flex gap-6">
             <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">NAME</span>
             </label>
             <input type="text" name="name" defaultValue={name} placeholder="coffee name" className="input input-bordered" required />
           </div>
           <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Chef</span>
             </label>
             <input type="text" name="chef" defaultValue={chef} placeholder="Chef" className="input input-bordered" required />
           </div>
             </div>
             <div className="md:flex gap-6">
             <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Supplier</span>
             </label>
             <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered" required />
           </div>
           <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Taste</span>
             </label>
             <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered" required />
           </div>
             </div>
             <div className="md:flex gap-6">
             <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Category</span>
             </label>
             <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered" required />
           </div>
           <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Details</span>
             </label>
             <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered" required />
           </div>
             </div>
           <div className="form-control w-full">
           <label className="label">
             <span className="label-text">Photo</span>
           </label>
           <input type="text" name="photo" defaultValue={photo} placeholder="photo Url" className="input input-bordered" required />
         </div>
           <div className="form-control mt-6">
             <button type="submit" className="btn btn-warning">Update Coffee</button>
           </div>
         </form>
            </div>
        </section>
    );
};

export default Update;