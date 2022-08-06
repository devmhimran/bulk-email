import React from 'react';
import { RotatingLines, Puff } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='absolute left-1/2 top-1/2 preloader'>
            <Puff
                height="80"
                width="80"
                radisu={1}
                color="#5617F8"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
            />
        </div>
    );
};

export default Loading;