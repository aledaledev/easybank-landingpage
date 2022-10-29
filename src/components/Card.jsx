import React from 'react'

const Card = () => {
  return (
    <article className='w-11/12 mx-auto my-7 rounded-md overflow-hidden bg-white'>
      <div className='h-52 overflow-hidden'>
        <img className='relative bottom-6' src="./assets/images/image-currency.jpg" alt="currency" />
      </div>
      <div className='pt-5 pb-12 px-8'>
        <p className='text-xs text-grayish-blue '>By Claire Robinson</p>
        <h3 className='text-base mr-2 text-dark-blue my-2 leading-5'>Receive money in any current with no fees</h3>
        <p className='text-sm text-grayish-blue card-p leading-4'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</p>
      </div>
    </article>
  )
}

export default Card