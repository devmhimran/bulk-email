import React from 'react';

const SignUp = () => {
    return (
        <div className='container mx-auto flex justify-center items-center w-full h-screen'>
            <div className="sign_up__main">
            <div className="signUp__heading">
                    <h1 className='text-4xl font-bold text-center mb-6'>Sign Up Bulk Email</h1>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form className='w-full'>
                            <div className="input__field my-6">
                                <p className='font-semibold mb-2'>Your Name</p>
                                <input type="text" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="input__field my-6">
                                <p className='font-semibold mb-2'>Email Address</p>
                                <input type="text" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="input__field my-6">
                                <p className='font-semibold mb-2'>Password</p>
                                <input type="password" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="input__field my-6">
                                <button className="btn btn-wide btn-primary w-full">Sign in</button>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <button className="btn btn-wide btn-ghost border border-slate-400 w-full">Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;