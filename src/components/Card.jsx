import React from 'react'

const Card = ({article}) => {
  const {title, author, description, url} = article
  return (
    <article className='max-w-xs mx-auto rounded-md overflow-hidden bg-white duration-200 hover:shadow-lg hover:cursor-pointer'>
      <div className='overflow-hidden h-52 lg:h-44'>
        <img className='md:not-sr-only w-full h-full lg:h-full' src={url} alt="currency" />
      </div>
      <div className='pt-5 pb-12 px-6 lg:px-4 lg:pb-5 lg:pt-7'>
        <p className='text-xs text-grayish-blue'>By {author}</p>
        <h3 className='text-base mr-2 text-dark-blue my-2 leading-5 duration-200 hover:text-lime-green'>{title}</h3>
        <p className='text-sm text-grayish-blue card-p leading-4'>{description}</p>
      </div>
    </article>
  )
}

export default Card