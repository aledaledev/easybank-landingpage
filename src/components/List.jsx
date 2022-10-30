import React from 'react'

const List = ({feature}) => {
  const {title,url,description} = feature
  return (
    <article className='max-w-xs mx-auto'>
        <img className='block mx-auto my-5 sm:mr-auto sm:ml-0' src={url} alt='img'/>
        <h1 className='text-center text-lg text-dark-blue sm:text-left'>{title}</h1>
        <p className='p sm:text-left'>{description}</p>
    </article>
  )
}

export default List