import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    const openSidebar = () => {
        document.getElementById('sidebar').style.display = 'block'
        document.getElementById('sidebarOpenbtn').style.display = 'none'
    }
    const closeSidebar = () => {
        document.getElementById('sidebar').style.display = 'none'
        document.getElementById('sidebarOpenbtn').style.display = 'block'
    }
    
    return (
        <div className='sidebar-container'>
            <span id='sidebarOpenbtn' onClick={()=> openSidebar()}><i className="fa-solid fa-bars"></i></span>
            <div id='sidebar'>
               <div className='sidebar-content'>
                    <div className='d-flex jc-sb ai-c'>
                        <span className='title'>Insomnia</span>
                        <span id='sidebarClosebtn' onClick={() => closeSidebar()}><i className="fa-solid fa-x"></i></span>
                    </div>
                    <div className='divider'></div>
                    <div className='link-container '>
                        <Link className='react-link' to='/'>
                            <span className='sidebarLink'><i className="fa-solid fa-house"></i> Home</span>
                        </Link>
                        <Link className='react-link' to='/cocktails'>
                            <span className='sidebarLink'><i className="fa-solid fa-martini-glass"></i> Cocktails</span>
                        </Link>
                        <span className='sidebarLink'><i className="fa-regular fa-address-card"></i> About</span>
                        <span className='sidebarLink'><i className="fa-regular fa-question"></i> FAQ</span>
                    </div>
                    <div className='divider'></div>
                    <div className='d-flex fd-col jc-end h-100'>
                        <span className='sidebarLink'>Login</span>
                        <div className='divider'></div>
                        <div className='d-flex ai-c' style={{margin:'1rem 0rem'}}>
                            <img className='userAvatar' src='https://www.pngitem.com/pimgs/m/411-4118225_freetoedit-cute-kawaii-fox-dog-food-butter-sprinkles.png' alt='some'/>
                            <div className='dflex fd-col'>
                                <span>User Name</span>
                                <div className='divider'></div>
                                <span>User Email</span>
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
        </div>
    )
}

export default Sidebar