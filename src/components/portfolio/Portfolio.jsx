import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/galaxy.png'
import IMG2 from '../../assets/game-of-life.png'
import IMG3 from '../../assets/tower-of-hanoi.png'
import IMG4 from '../../assets/airline-booking-system.png'
import IMG5 from '../../assets/cinema-admin.png'
import IMG6 from '../../assets/react-portfolio.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article  className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Galaxy</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/EduardScobioala/Galaxy" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/EduardScobioala/Galaxy" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>
        
        <article  className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Game of Life</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/EduardScobioala/Conways-Game-of-Life" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/EduardScobioala/Conways-Game-of-Life" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article  className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Towers of Hanoi</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/EduardScobioala/Towers-of-Hanoi" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/EduardScobioala/Towers-of-Hanoi" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article  className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Airline Ticket Booking System</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/EduardScobioala/Sistem-rezervare-bilete-avion" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/EduardScobioala/Sistem-rezervare-bilete-avion" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article  className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Cinema Business Application</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/EduardScobioala/cinema-admin" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/EduardScobioala/cinema-admin" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article  className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>React Portfolio Website</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/EduardScobioala/react-portfolio-website" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/EduardScobioala/react-portfolio-website" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}
// transform the data to an array and iterate trought it
export default Portfolio