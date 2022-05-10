import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UX Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile First and Responsive Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>UI and Interaction Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Rapid and Interactive Protoptyping</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-end design and development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Back-end development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Continuous support and evolution</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Help desk</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Game Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Game Software Development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Game Animation Software Solutions</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>2D & 3D Gaming Software Solutions</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>2D Illustrations & Animations</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services