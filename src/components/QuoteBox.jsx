import React from 'react'

const QuoteBox = ({randomQuoter, randomColors, getRandomAll}) => {

  const objectStyle = {
    color: randomColors
  }

  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
      <div className='card__container'>
        <div className='img_quote'>
            <i className="fa-solid fa-quote-left quotes-icon"></i>
        </div>
        <p id='p' className='card__quote'>{`${randomQuoter.quote}`}</p>
      </div>
      <p className='card__author'>{randomQuoter.author}</p>
      <div className='alling_button'>
        <button onClick={getRandomAll} className='card__btn' style={objectBgStyle}>&#62;</button>
      </div>
    </article>
  )
}

export default QuoteBox