import React from 'react'
import Card from '../components/Card'
import getArticlesData from '../helpers/getArticlesData.js'

const articles = await getArticlesData();

const Latest = () => {
  return (
    <section className='py-16 px-8 bg-very-light-gray'>
        <h2 className='h2 mt-5 mb-7 mx-auto md:max-w-2xl md:text-left lg:max-w-5xl'>Latest Articles</h2>
        <div className='grid grid-cols-1 gap-6 max-w-2xl sm:mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-5xl'>
          {articles.map(article => <Card key={article.title} article={article}/>)}
        </div>
    </section>
  )
}

export default Latest