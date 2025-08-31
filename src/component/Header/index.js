import { useState } from 'react'
import './index.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className='header-container'>
      <div className='header-responsive-container'>
        <h1 className='nav-heading'>Which Manuka is for me?</h1>
        <button type="button" className='hamburger-button' onClick={() => setOpen(!open)}>
          <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756543616/SVG_yorjj4.png" 
            alt='menu bar' 
            className='menu-icon' />
        </button>
        <ul className='nav-menu-list'>
          <li className='nav-item'>Shop</li>
          <li className='nav-item'>Explore</li>
        </ul>
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756546667/Link_website_icon_kazddn.png" alt="website icon" className='website-icon' />
        <ul className='nav-menu-list'>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Rewards</li>
          <li className='nav-item'>Contact</li>
        </ul>
        <ul className='nav-icons-list'>
          <li>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756546917/profile_ebwobn.png" alt="profile" className='interactive-icon'/>
          </li>
          <li>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756546935/SVG_search_dqvzul.png" alt='search' className='interactive-icon'/>
          </li>
          <li>
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756546947/SVG_cart_l8ezzy.png" alt='cart' className='interactive-icon'/>
          </li>
        </ul>
      </div>
    </div>
    { open && (
    <ul className='mobile-nav-menu'>
      <li className='nav-item'>Shop</li>
      <li className='nav-item'>Explore</li>
      <li className='nav-item'>About</li>
      <li className='nav-item'>Rewards</li>
      <li className='nav-item'>Contact</li>
    </ul>
    )
}
    </>
)
}
export default Header