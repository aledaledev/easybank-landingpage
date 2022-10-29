import React from 'react'
import Card from '../components/Card'

const Latest = () => {
  return (
    <section className='py-16 bg-very-light-gray'>
        <h2 className='h2 my-5'>Latest Article</h2>
        <div className='sm:grid-cols-1'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
  )
}

export default Latest