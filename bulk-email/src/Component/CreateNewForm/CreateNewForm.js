import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CreateNewForm = () => {
    return (
        <div className="container mx-auto ">
            <h1 className='py-16 text-3xl font-bold'>Dashboard</h1>
            <div className="create__email flex justify-center my-10">
                <div className="create__email__card">
                    <div className="card w-96 bg-base-100 drop-shadow-md">
                        <div className="card-body">
                            <div className='p-2 rounded-full text-center mx-auto text-2xl text-green-700 bg-green-400 my-6'>
                                <BsEnvelope></BsEnvelope>
                            </div>
                            <div className="content text-center">
                                <h2 className='text-2xl font-medium mb-2.5'>Create New Email</h2>
                                <p className='text-inherit'>Let's help you build a high-converting email using 1-1 personalized info</p>
                                <Link to='/dashboard/new' className="btn btn-wide btn-primary mt-6">Create New Email</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewForm;