import React, { useEffect, useState } from 'react';
import NavBar from '../pages/NavBar';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ROUTER } from "../constant/router";

export default function Home() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    setColors(savedColors);
  }, []);

  return (
    <div>
      <NavBar />
      <div className='mx-20'>
        <h1 className='text-4xl font-semibold mt-5'>Home Page</h1>
        <div className='flex flex-wrap mt-10'>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color.color }}
              className='w-52 h-24 rounded border-[1px] border-black mb-4'
            >
              <div className='flex mt-5 ml-6'>
                <p className='text-2xl text-white font-semibold'>{color.name}</p>
                <Link to={`/GoDetailsPage/${index}`}><FaEye className='text-white text-[42px] ml-10 mt-4' /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
