import React from 'react'
import PRJ1 from '../../assets/proj1.jpg';
import PRJ2 from '../../assets/proj2.jpg';
import PRJ3 from '../../assets/proj3.jpg';

import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="IMG" />
          </div>
          
          <div className="portfolio__item-cta">
            <a href= "https://github.com/anshulsingh80/reacttask2" className='btn' target='_blank' rel="noreferrer">Calculator</a>
            <a href="https://vercel.com/anshul-s-projects/reacttask2" className='btn btn-primary' target='_blank' rel="noreferrer">Link for project</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ2} alt="IMG" />
          </div>
         
          <div className="portfolio__item-cta">
            <a href="https://github.com/anshulsingh80/reacttask3" className='btn' target='_blank' rel="noreferrer">colour picker</a>
            <a href="https://vercel.com/anshul-s-projects/reacttask3" className='btn btn-primary' target='_blank' rel="noreferrer">Link fot project</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ3} alt="IMG" />
          </div>
          
          <div className="portfolio__item-cta">
            <a href="https://github.com/anshulsingh80/reacttask4" className='btn' target='_blank' rel="noreferrer">user records</a>
            <a href="https://vercel.com/anshul-s-projects/reacttask4" className='btn btn-primary' target='_blank' rel="noreferrer">Link for project</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio