import React, { useEffect, useState } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import Loading from '../Loading/Loading';

const PersonalizeType = () => {
    // const [linkedInProfile, setLinkedInProfile] = useState([]);
    const [phone, setPhone] = useState([]);
    console.log(phone);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setPhone(data))
    },[])
    // const handleLinkIn = (e) => {
    //      e.preventDefault();
    //     const linkedInUsername = e.target.linkedInUsername.value;
    //     console.log(linkedInUsername);    
    // }
  
    
    return (
        <div className='email__wizard flex items-center'>
            <div className="container mx-auto">
                <h1 className='py-16 text-3xl font-bold'>New Email Wizard</h1>
                <div className="card bg-base-100 drop-shadow-md">
                    <div className="card-body py-16">
                        <div className="form-control">
                            <label className="label justify-center">
                                <span className="label-text mb-6">Enter your recipient's LinkedIn profile username or switch to website</span>
                            </label>
                            <form >
                                <label className="input-group  justify-center">
                                    <span>linkedin.com/in/</span>
                                    <input type="text" placeholder="johnDoe" className="input input-bordered w-1/3" name='linkedInUsername' />
                                    <button  className="btn btn-primary">Write My Email</button>
                                </label>
                            </form>
                        </div>
                        {/* onClick={handleProfile(_id)} */
                        // console.log(linkedInProfile.public_identifier)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalizeType;