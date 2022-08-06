import React from 'react';
import { BsEnvelope } from 'react-icons/bs';

const PersonalizeType = () => {
    return (
        <div className='email__wizard flex items-center'>
            <div className="container mx-auto">
                <h1 className='py-16 text-3xl font-bold'>New Email Wizard</h1>
                <div className="card bg-base-100 drop-shadow-md">
                    <div className="card-body py-16">
                        <div class="form-control">
                            <label class="label justify-center">
                                <span class="label-text mb-6">Enter your recipient's LinkedIn profile username or switch to website</span>
                            </label>
                            <label class="input-group  justify-center">
                                <span>linkedin.com/in/</span>
                                <input type="text" placeholder="johnDoe" class="input input-bordered w-1/3" />
                                <button class="btn btn-primary">Write My Email</button>
                            </label>
                            
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalizeType;