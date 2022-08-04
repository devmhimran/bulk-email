import React from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { RiNumber1 } from 'react-icons/ri';

const EmailWizard = () => {
    return (
        <div className='email__wizard flex items-center'>
            <div className="container mx-auto">
                <h1 className='py-16 text-3xl font-bold'>New Email Wizard</h1>
                <div className="card bg-base-100 drop-shadow-md">
                    <div className="card-body">
                        <div className="wizard__info flex items-center">
                            <div className="wizard__serial w-10">
                                <span className='p-3 border rounded-full border-blue-700'>
                                    1
                                </span>
                            </div>
                            <div className="wizard__info__main ml-3">
                                <h2 className='font-medium text-blue-700'>Who we are</h2>
                                <p className='text-sm'>What are we pitching?</p>
                            </div>
                        </div>
                        <div className="card border hover:border-cyan-500 my-1">
                            <div className="card-body">
                                <div className='flex item-center'>
                                    <div className='inline-block align-middle text-3xl bg-teal-200 text-teal-700 p-3 rounded-full mr-4'><HiUserGroup></HiUserGroup></div>
                                    <div className="email__wizard__info">
                                        <p className='font-medium text-lg'>Find Tools</p>
                                        <p className='text-inherit'>Find the right tools</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border hover:border-cyan-500 my-1">
                            <div className="card-body">
                                <div className='flex item-center'>
                                    <div className='inline-block align-middle text-3xl bg-blue-300 text-blue-700 p-3 rounded-full mr-4'><BsEnvelopeOpen></BsEnvelopeOpen></div>
                                    <div className="email__wizard__info">
                                        <p className='font-medium text-lg'>Personalizations only</p>
                                        <p className='text-inherit'>Write just the first line personalizations, I don't need the whole email written</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailWizard;