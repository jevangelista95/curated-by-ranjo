import React from 'react'

function Header() {
  return (
    <header className="nav">
      <nav>
        <ul>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Socials</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
      </nav>

      <div>
        <h1 className="title">Curated by Ranjo</h1>
      </div>
      <img src="http://images.squarespace-cdn.com/content/v1/570c98f8c2ea513f7d9dc6d0/1609655832081-H59KCHDCHAYZ9RG5O1GR/IMG_3162.JPG?format=750w"/>
    </header>
  )
}

export default Header