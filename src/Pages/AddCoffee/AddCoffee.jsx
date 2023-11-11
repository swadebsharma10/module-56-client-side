import swal from "sweetalert";


const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee ={name,chef,supplier,taste,category,details,photo};
        console.log(coffee);
        fetch('http://localhost:5000/coffees', {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                swal("Good job!", "Coffee added successfully", "success");
            }
        })

    }

    return (
        <section>
            <h2 className="text-center text-4xl font-bold underline my-4">Add A Coffee</h2>
           <div>
           <form onSubmit={handleAddCoffee} className="card-body">
             <div className="md:flex gap-6">
             <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">NAME</span>
             </label>
             <input type="text" name="name" placeholder="coffee name" className="input input-bordered" required />
           </div>
           <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Chef</span>
             </label>
             <input type="text" name="chef" placeholder="Chef" className="input input-bordered" required />
           </div>
             </div>
             <div className="md:flex gap-6">
             <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Supplier</span>
             </label>
             <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered" required />
           </div>
           <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Taste</span>
             </label>
             <input type="text" name="taste" placeholder="Taste" className="input input-bordered" required />
           </div>
             </div>
             <div className="md:flex gap-6">
             <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Category</span>
             </label>
             <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
           </div>
           <div className="form-control md:w-1/2 w-full">
             <label className="label">
               <span className="label-text">Details</span>
             </label>
             <input type="text" name="details" placeholder="Details" className="input input-bordered" required />
           </div>
             </div>
           <div className="form-control w-full">
           <label className="label">
             <span className="label-text">Photo</span>
           </label>
           <input type="text" name="photo" placeholder="photo Url" className="input input-bordered" required />
         </div>
           <div className="form-control mt-6">
             <button type="submit" className="btn btn-primary">Add Coffee</button>
           </div>
         </form>
            </div>
        </section>
    );
};

export default AddCoffee;