import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userRole = form.role.value;

        const signUser = {
            name,
            email,
            userRole,
            isVerified: false
        }

        setSignUpError('');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Sign Up successfully')
                form.reset();
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        
                    })
                    .catch(er => console.error(er));

                navigate('/')

            })
            .catch(error => {
                setSignUpError(error.message)
            });
    }



    

    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select types of user</span>
                            </label>
                            <select name='role' className="select select-bordered w-full max-w-xs">
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type='submit' value="Sign Up" />
                        </div>
                    </form>
                    {/* <button onClick={handleGoogleSignIn} className='btn bg-base-300 text-black mx-8'>Sign In with Google</button> */}
                    <p className='text-center my-5 font-semibold'>Already have an account? <Link className='text-violet-700 font-bold' to="/login"> Log in</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;