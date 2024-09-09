import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../pages/NavBar';
import { toast } from 'react-toastify';

const GoDetailsPage = () => {
  const { index } = useParams();
  const [color, setColor] = useState(null);

  useEffect(() => {
      const savedColors = JSON.parse(localStorage.getItem('savedColors')) || [];
      setColor(savedColors[index]);
  }, [index]);

 const copyClipboard=()=>{
    if(color){
      navigator.clipboard.writeText(color.color)
      .then(()=>{
        toast.success("Color Code Copied to Clipboard!",{
          autoClose:1500,
        })
      })
    }
  }
  return (
    <>
      <NavBar />
        {color ? (
          <div className='h-screen' style={{backgroundColor:color.color}}>
            <div
              style={{ backgroundColor: color.color }}
              className=' '
            >
              <div className='flex flex-col align-center h-[95vh] justify-center items-center '>
                <p className='text-4xl text-white font-semibold'>Color Name: {color.name}</p>
                <p className='text-4xl text-white font-semibold'>Copy Color Code: <button onClick={copyClipboard}>{color.color}</button></p>
              </div>
            </div>
          </div>
        ) : (
          <p>No color details found</p>
        )}
      
    </>
  );
}

export default GoDetailsPage;
