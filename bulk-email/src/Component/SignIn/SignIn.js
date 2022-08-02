import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='container mx-auto flex justify-center items-center w-full h-screen'>
            <div className="sign_in__form__main">
                <div className="signIn__heading">
                    <h1 className='text-4xl font-bold text-center mb-6'>Login Bulk Email</h1>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center">
                        <form className='w-full'>
                            <div className='input__field w-full my-6'>
                                <p className='font-semibold mb-2'>Email Address</p>
                                <input type="text" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='input__field w-full my-6'>
                                <p className='font-semibold mb-2'>Password</p>
                                <input type="password" className="input input-bordered w-full max-w-xs" />
                                <div className='mt-2 text-end'>
                                    <Link class="link link-primary text-sm" to='/'>Forget your password?</Link>
                                </div>
                            </div>
                            <div className='input__field w-full mt-6'>
                                <button class="btn btn-wide btn-primary w-full">Sign in</button>
                            </div>
                        </form>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                            <button class="btn btn-wide btn-ghost border border-slate-400 w-full">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;