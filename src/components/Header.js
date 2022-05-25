import React from 'react'
import self from '../assets/self.jpeg'

function Header() {
    return (
        <section className='header'>
            <img src={self} alt="Chirag Mehta" />
            <div className='header__content'>
                <h1>Hi, I'm Chirag Mehta</h1>
                <p>Blockchain Developer</p>
                <a href='mailto:chiragmmehta16@gmail.com' className='button'>Get In Touch</a>
            </div>
        </section>
    )
}

export default Header