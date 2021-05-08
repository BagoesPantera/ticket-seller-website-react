import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Booking, Home, Login, News, Register, Schedule } from '../../Pages'
import Navbar from '../../Navbar'
import Navbarbl from '../../Navbar-before-login'
import fire from '../../fire';
import firebase from 'firebase';


const Routes = () => {
    const [user,setUser] = useState('');
    const [username, setUname] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
  
    const clearInputs = () => {
      setEmail('');
      setPassword('');
    }
    const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
    }
    const handleLogin = () => {
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            if (user) {
                <Redirect to="/"></Redirect>
            } else {
              
            }
          })
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        })
    }
    const handleRegister = () => {
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
            <Redirect to="/"></Redirect>
            submitUser()
        } else {
          handleLogin()
        }
      })
      .catch(err => {
          switch(err.code){
              case "auth/email-already-in-use":
              case "auth/invalid-email":
                  setEmailError(err.message);
                  break;
              case "auth/weak-password":
                  setPasswordError(err.message);
                  break;
          }
      })
    }
    const submitUser = () => {
        const dataRef = firebase.database().ref('userData');
        const data = {
            username,
            email,
        }
        dataRef.push(data);
    }
    const handleLogout = () => {
      fire.auth().signOut();
      <Redirect to="/login"></Redirect>
    }
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if(user) {
          clearInputs();
          setUser(user);
        }else{
          setUser('');
        }
      });
    }
  
    useEffect(() => {
      authListener();
    }, []);

    return (
        <Router>
            {(user) ? (
                <Navbar handleLogout={handleLogout}/>
            ):(
                <Navbarbl />
            )}

            <Switch>
                <Route exact path="/">
                    <Home user={user} />
                </Route>
                <Route exact path="/berita">
                    <News />
                </Route>
                <Route exact path="/jadwal">
                    <Schedule />
                </Route>
                <Route exact path="/login">
                    <Login user={user} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
                </Route>
                <Route exact path="/daftar">
                    <Register email={email} setEmail={setEmail} username={username} setUname={setUname} password={password} setPassword={setPassword} user={user} setUser={setUser}  handleRegister={handleRegister} submitUser={submitUser} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError}/>
                </Route>
                <Route exact path="/booking">
                    <Booking user={user} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
