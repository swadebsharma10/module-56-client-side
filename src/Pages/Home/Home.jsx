import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCart from "./Home/CoffeeCart";


const Home = () => {
  const loadedCoffees = useLoaderData();

  const[coffees, setCoffees] = useState(loadedCoffees)

    return (
        <div>
          <h2 className="text-2xl text-center font-bold my-6">Number of coffee: {coffees.length}</h2>  

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            coffees.map(coffee => <CoffeeCart
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
              ></CoffeeCart>)
          }
          </div>
        </div>
    );
};

export default Home;