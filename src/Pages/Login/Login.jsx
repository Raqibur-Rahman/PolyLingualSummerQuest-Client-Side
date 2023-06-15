import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log("error :", error.message);
            });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const LoggedInUser = result.user;
                console.log(LoggedInUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Welcome back! <br /> Enter your credentials below to securely log
                            in and gain access to your account. We are excited to have you
                            back on board! <br /> Your security is important to us. Stay
                            connected and enjoy a seamless login experience. Let us get
                            started!
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    <label className="label">
                                        <a
                                            href="#"
                                            className="label-text-alt link link-hover"
                                        >
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-primary"
                                        type="submit"
                                        value="Login"
                                    />
                                </div>
                            </form>
                            <button onClick={handleGoogleSignIn} className="btn btn-block">Sign in with Google</button>
                            <p className="my-5 text-center">
                                New to IntellectoToys?
                                <Link className="text-orange-700 font-bold" to="/signup">
                                    {" "}
                                    Sign Up
                                </Link>
                            </p>
                            {error && (
                                <p className="text-red-950 bg-orange-300 font-bold text-xl p-1 rounded">
                                    Error Message:{" "}
                                    <span className="text-red-700 font-bold">{error}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;









