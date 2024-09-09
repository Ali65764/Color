import React, { useState, useEffect } from 'react';
import NavBar from '../pages/NavBar';
import { useGlobalContext } from '../stores/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Color() {
  const {
    handleAddColor,
    handleRemoveColor,
    bgColor,
    setBgColor,
    addColors,
    colorName,
    setColorName,
    setAddColors
  } = useGlobalContext();
  const navigate = useNavigate();

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  const handleInputColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const handleSave = () => {
    toast.success("Colors Saved Successfully", {
      autoClose: 1500,
    });
    const existingColors = JSON.parse(localStorage.getItem("savedColors")) || []
    const updatedColors = [...existingColors, ...addColors];
    localStorage.setItem("savedColors", JSON.stringify(updatedColors));
    setAddColors([]);
    setTimeout(() => {
      navigate("/", { state: { colors: addColors } });
    }, 1500);

  };



  const isSaveDisabled = addColors.length < 6;
  const isAddDisabled = addColors.length >= 6;

  return (
    <>
      <NavBar />
      <div className='mainbutton'>
        <button className='button-1' onClick={() => handleColorChange('blue')}>Blue</button>
        <button className='button button-2' onClick={() => handleColorChange('red')}>Red</button>
        <button className='button button-3' onClick={() => handleColorChange('green')}>Green</button>
        <button className='button button-4' onClick={() => handleColorChange('yellow')}>Yellow</button>
        <button className='button button-5' onClick={() => handleColorChange('purple')}>Purple</button>
        <button className='button button-6' onClick={() => handleColorChange('orange')}>Orange</button>
        <button className='button button-7' onClick={() => handleColorChange('cyan')}>Cyan</button>
        <button className='button button-8' onClick={() => handleColorChange('pink')}>Pink</button>
        <button className='button button-9' onClick={() => handleColorChange('lime')}>Lime</button>
        <button className='button button-10' onClick={() => handleColorChange('brown')}>Brown</button>
        <button className='button button-11' onClick={() => handleColorChange('teal')}>Teal</button>
        <button className='button button-12' onClick={() => handleColorChange('magenta')}>Magenta</button>
      </div>

      <div className='maindiv ml-32 mt-12'>
        <div className='leftpart '>
          <p className='text-4xl font-semibold '>Setting Page</p>
          <div className='inputs'>
            <input type="text" placeholder='Color Name' className='input1' value={colorName} onChange={(e) => setColorName(e.target.value)} />
            <input type="text" placeholder='Color Code' className='input2' onChange={handleInputColorChange} style={{ backgroundColor: bgColor }} />
            <input type="color" className='choosecolor ' value={bgColor} onChange={handleInputColorChange} />
          </div>
          <div className='text-center '>
            <button className='bg-red-600 text-white rounded py-2 px-12 mt-6 addbutton' onClick={handleAddColor} disabled={isAddDisabled}>Add Color</button>
          </div>
        </div>

        <div className='rightpart mt-20 ml-32'>
          <div className='flex flex-wrap '>
            {addColors.map((color, index) => (
              <div className='border' key={index}>
                <div className='w-[290px] h-36 border-[1px] border-black' style={{ backgroundColor: color.color }}>
                  <p className='mt-4 text-2xl font-semibold ml-6 text-white'>{color.name}</p>
                  <button className='bg-black text-white ml-5 mt-6 px-3 py-2 rounded' onClick={() => handleRemoveColor(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <button className='savebutton' onClick={handleSave} disabled={isSaveDisabled}>Save</button>
        </div>
      </div>
    </>
  );
}
