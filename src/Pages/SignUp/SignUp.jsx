import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password should be at least 6 characters long.");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError("Password should have at least one capital letter.");
            return;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            setError("Password should have at least one special character.");
            return;
        }

        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const image = form.image.PhotoURL;

        createUser(email, password, image)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setSuccess("User has been created.");
                navigate(from, { replace: true });
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Sign Up now!</h1>
                        <p className="py-3">
                            Join us! Create your secure account by filling in the required information below. Your privacy and security are our top priorities. Get started on this exciting journey!
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="Email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Photo URL" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" onChange={handlePasswordChange} />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" onChange={handleConfirmPasswordChange} />
                                </div>

                                <div className="form-control mt-3">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="my-3 text-center">
                                Already have an account? <Link className="text-orange-700 font-bold" to="/login">Sign in</Link>
                            </p>
                            {error && (
                                <p className="text-red-950 bg-orange-300 font-bold text-xl p-1 rounded">
                                    Error Message: <span className="text-red-700 font-bold">{error}</span>
                                </p>
                            )}
                            {success && (
                                <p className="text-green-950 bg-green-300 font-bold text-xl p-1 rounded">{success}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
