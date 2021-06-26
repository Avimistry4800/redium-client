
import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { SignInUserWithEmailAndPassword, initializeLogIn as initializeLogIn, }  from './LoginManager';
import { UserContext } from '../../App';
 


const Login = () => {
    
    initializeLogIn();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignIn: false,
        email: '',
        password: '',
        error: '',
        success: false
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) =>
    {
        setUser(res)
        setLoggedInUser(res)
        if (redirect)
        {
            history.replace(from);
        }
    }

    

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }

      const handleSubmit = (event) =>
      {
         
        //   if ( user.email && user.password)
        //   {
              SignInUserWithEmailAndPassword(user.email, user.password)
                  .then(res =>
                  {
                     
                      handleResponse(res, true);
                      setLoggedInUser(res);
                      
                  })
                  .catch(err =>
                    console.log(err))
        //   }
          console.log("clicked");
          event.preventDefault();
      }

  

      const handleBlur = (event) =>
    {
        
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        
    }


       
    

    return (
        
        <section className="container ">
            <div className='row login'>
            <div className="form-signin mt-5 pt-3 col-md-6">
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                <input type="email" onBlur={handleBlur} name="email" className="form-control" placeholder="Email address" required autoFocus />
                <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                <input type="password" onBlur={handleBlur}  name="password" className="form-control" placeholder="Min 8 caractor with text and number" required />
                
                <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">Signin'</button>
               
                
            </form>
            
            <p >{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>User Logged In successfully</p>
            }
        </div>
        </div>
        
        </section>
        
    );
};

export default Login;
