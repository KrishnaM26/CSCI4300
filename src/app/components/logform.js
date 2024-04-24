import { useRef, useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import AuthContext, { AuthProvider } from '../../context/AuthProvider';
import axios from 'axios';
import "../styles/logform.css";

const LOGIN_URL = 'http://localhost:8085/api/kwye/';


const Login = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async(e) =>{
        e.preventDefault();

        console.log(user, pwd);
         setSuccess(true);
         setUser('');
         setPwd('');
    
        /*try {
            const response = await axios.get(LOGIN_URL,
                JSON.stringify({ users: { username: user, password: pwd }}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const mealplans = response?.data?.mealplans;
            setAuth({ user, pwd, mealplans, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();

        
        }

        */
    }
    


    return (
       
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <Link href="/welcome">Go To Home</Link>
                </p>
            </section>
        ) : (
   
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit = {handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        
                        <Link href={'/registration'}>Sign Up</Link>
                    </span>
                </p>
            </section>

        )}


        </>
    
   
    );
}

export default Login;