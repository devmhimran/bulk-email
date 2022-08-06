import React from 'react';
import { HiUserGroup, HiOutlineCursorClick, HiQuestionMarkCircle } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Goal = () => {
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
                        <Link to='/dashboard/personalize-type'>
                            <div className="card border hover:border-cyan-500 my-1">
                                <div className="card-body">
                                    <div className='flex item-center'>
                                        <div className='inline-block align-middle text-3xl bg-teal-200 text-teal-700 p-3 rounded-full mr-4'><HiUserGroup></HiUserGroup></div>
                                        <div className="email__wizard__info">
                                            <p className='font-medium text-lg'>Book a meeting</p>
                                            <p className='text-inherit'>I want to arrange a call with this person</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/dashboard/personalize-type'>
                            <div className="card border hover:border-cyan-500 my-1">
                                <div className="card-body">
                                    <div className='flex item-center'>
                                        <div className='inline-block align-middle text-3xl bg-teal-200 text-teal-700 p-3 rounded-full mr-4'><HiOutlineCursorClick></HiOutlineCursorClick></div>
                                        <div className="email__wizard__info">
                                            <p className='font-medium text-lg'>Click a link</p>
                                            <p className='text-inherit'>I'm trying to get the person to click a website link</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/dashboard/personalize-type'>
                            <div className="card border hover:border-cyan-500 my-1">
                                <div className="card-body">
                                    <div className='flex item-center'>
                                        <div className='inline-block align-middle text-3xl bg-teal-200 text-teal-700 p-3 rounded-full mr-4'><HiQuestionMarkCircle></HiQuestionMarkCircle></div>
                                        <div className="email__wizard__info">
                                            <p className='font-medium text-lg'>Ask a question</p>
                                            <p className='text-inherit'>I Ask a question</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/dashboard/personalize-type'>
                            <div className="card border hover:border-cyan-500 my-1">
                                <div className="card-body">
                                    <div className='flex item-center'>
                                        <div className='inline-block align-middle text-3xl bg-teal-200 text-teal-700 p-3 rounded-full mr-4'><HiUserGroup></HiUserGroup></div>
                                        <div className="email__wizard__info">
                                            <p className='font-medium text-lg'>Book a meeting</p>
                                            <p className='text-inherit'>I want to arrange a call with this person</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/dashboard/personalize-type'>
                            <div className="card border hover:border-cyan-500 my-1">
                                <div className="card-body">
                                    <div className='flex item-center'>
                                        <div className='inline-block align-middle text-3xl bg-teal-200 text-teal-700 p-3 rounded-full mr-4'><AiFillMessage></AiFillMessage></div>
                                        <div className="email__wizard__info">
                                            <p className='font-medium text-lg'>Gauge interest</p>
                                            <p className='text-inherit'>I'm trying to assess if this is something the person is interested in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;