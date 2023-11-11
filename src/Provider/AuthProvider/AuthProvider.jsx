import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import auth from '../../components/Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);


    // create user
    const createUser = (email, password)=>{
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }


    const userInfo ={
       
        loading,
        createUser,
        signInUser,
    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}

