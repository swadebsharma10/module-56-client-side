import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Login = () => {
    const {signInUser} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log('logged', loggedUser)
            // user updated For DATA-BASE
            const lastLogged = loggedUser?.metadata?.lastSignInTime;
            const user ={
                email,
                lastLogged
            }

            fetch(`http://localhost:5000/users`,{
                method: 'PATCH',
                headers:{
                   'content-type': 'application/json' 
                },
                body: JSON.stringify(user)
            })
            .then(res =>res.json())
            .then(data =>{
                // console.log(data);
                if(data.modifiedCount > 0){
                    swal("Good job!", "Your updated successfully!", "success");
                }
            })

        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div className="hero h-[700px] bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;