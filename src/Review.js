import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text} = people[index];
  const checkNumber = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    if(number < 0){
      return people.length - 1; 
    }
    return number;
  }
  const prevClick = () => {
    setindex((index) => {
      let newindex = index -1;
      return checkNumber(newindex)
    })
  }
  const nextClick = () => {
    setindex((index)=>{
      let newindex =index + 1
      return checkNumber(newindex)
    })
  }

    return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt ={name} className='person-img'/>
        <span className='quote-icon'>
        <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4> 
      <p className='job'>{job}</p>
      <p className= 'info'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={prevClick}><FaChevronLeft/></button>
        <button className='next-btn' onClick={nextClick}><FaChevronRight/></button>
      </div>
      <button className='random-btn'>Suriprise me</button>
    </article>
  );
};

export default Review;
