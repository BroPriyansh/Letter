
import React, { useState } from 'react';
import Pic from './assets/bbgg.jpg';
import Swal from 'sweetalert2';


function Sell() {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleMouseEnter = () => {
    setIsSwapped(prevState => !prevState);
  };

  const alert = () => {
    Swal.fire({
        title: "I always knew it",
        text: "I love you toooo",
        imageUrl: "https://cdn.wallpapersafari.com/10/31/GdsJek.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: ""
      });


}

  return (
    <div className='h-screen flex flex-col items-center bg-cover' style={{ backgroundImage: `url(${Pic})` }}>
      <div className='bg-gray-50 bg-opacity-50 mx-auto flex flex-col mt-10 items-center min-[430px]:p-10 rounded-3xl'>
        <h1 className='font-bold text-[40px] min-[430px]:text-[50px] mb-24 min-[430px]:mb-32'>
          I love you <span className='text-[50px] text-red-600'>&#9829;</span>
        </h1>
        <h1 className='font-bold text-[35px] min-[430px]:text-[40px]'>Will you be my girlfriend?</h1>
        <div className='flex flex-row space-x-10 min-[430px]:space-x-20 my-10 mb-20'>
          {isSwapped ? (
            <>
              <button
                className='no bg-red-600 text-white min-[430px]:w-32 min-[430px]:h-12 w-24 h-10 rounded-full text-[20px] min-[430px]:text-[30px] font-semibold text-center'
                onMouseEnter={handleMouseEnter}
              >
                NO
              </button>
              <button className='yes bg-green-400 text-white min-[430px]:w-32 min-[430px]:h-12 w-24 h-10 rounded-full text-[25px] min-[430px]:text-[30px] font-semibold text-center ' onClick={alert}>
                YES
              </button>
            </>
          ) : (
            <>
              <button className='yes bg-green-400 text-white min-[430px]:w-32 min-[430px]:h-12 w-24 h-10 rounded-full text-[25px] min-[430px]:text-[30px] font-semibold text-center' onClick={alert}>
                YES
              </button>
              <button
                className='no bg-red-600 text-white min-[430px]:w-32 min-[430px]:h-12 w-24 h-10 rounded-full text-[20px] min-[430px]:text-[30px] font-semibold text-center'
                onMouseEnter={handleMouseEnter}
              >
                NO
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sell;
