import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Booking, Home, Login, News, Register, Schedule } from '../../Pages'
import Navbar from '../../Navbar'
import Navbarbl from '../../Navbar-before-login'
import fire from '../../fire';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import ForgotPassword from '../../Pages/ForgotPassword'


const Routes = () => {
    const [user,setUser] = useState('');
    const [username, setUname] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [rememberMe, setRM] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [ForgotpassError, setForgotpassError] = useState('');
  
    const clearInputs = () => {
        setUname('');
        setEmail('');
        setPassword('');
        setConfirmpass('');
    }
    const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
      setForgotpassError('');
    }
    const handleLogin = () => {
        firebase.auth().setPersistence(rememberMe ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                if (user) {
                    <Redirect to="/"></Redirect>
                } else {
                  
                }
              });
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
    const handleconfirmPassword = () =>{
        if(password == confirmpass){
            handleRegister();
        }else{
            setPasswordError('PASSWORD DOESNT MATCH')
        }
    }
    const handleRegister = () => {
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
            <Redirect to="/"></Redirect>
            submitUser()
            handleDisplayName()
            handleEMailVerif()
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
    const handleDisplayName = () => {
        var dnAuth = fire.auth().currentUser;
        dnAuth.updateProfile({
            displayName : username
        })
    }
    const handleEMailVerif = () => {
        var Everifauth = fire.auth().currentUser;
        Everifauth.sendEmailVerification()
    }
    const submitUser = () => {
        const dataRef = firebase.database().ref('userData');
        const data = {
            username,
            email,
        }
        dataRef.push(data);
    }
    const handleForgotPass= () => {
        fire.auth().sendPasswordResetEmail(email).then(function() {
            setForgotpassError("Reset Password telah di kirim via email")
          }).catch(function(error) {
            setForgotpassError(error.message)
          });
    }
    const handleLogout = () => {
      fire.auth().signOut();
      <Redirect to="/login"></Redirect>
    }
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if(user) {
          clearInputs();
          clearErrors();
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
                    <Login user={user} email={email} setEmail={setEmail} password={password} setPassword={setPassword} rememberMe={rememberMe} setRM={setRM} handleLogin={handleLogin} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError}/>
                </Route>
                <Route exact path="/forgot-password">
                    <ForgotPassword email={email} setEmail={setEmail} ForgotpassError={ForgotpassError} handleForgotPass={handleForgotPass}/>
                </Route>
                <Route exact path="/daftar">
                    <Register email={email} setEmail={setEmail} username={username} setUname={setUname} password={password} setPassword={setPassword} user={user} setUser={setUser}  handleRegister={handleRegister} submitUser={submitUser} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} handleconfirmPassword={handleconfirmPassword} confirmpass={confirmpass} setConfirmpass={setConfirmpass}/>
                </Route>
                <Route exact path="/booking">
                    <Booking user={user} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
