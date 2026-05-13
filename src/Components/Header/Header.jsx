import { useEffect, useState } from 'react'
import logo from './../../assets/image/logo.png'

import { Link} from 'react-router-dom'
import { Search, Bell, User, ChevronDown } from 'lucide-react'
import style from './Header.module.css'

function Header() {
    const [issearchopen, setIsseachopen] = useState(false);
    const [isprofileopen, setisprofileopen] = useState(false);
    //    for blur effect
    const [isscrolled, setisscrolled] = useState(false);
    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 50) {
                setisscrolled(true)
            }
            else {
                setisscrolled(false) 
            }
        }
        window.addEventListener('scroll', handlescroll);
        return ()=>window.removeEventListener('scroll',handlescroll)
        
    },[])




  return (
      <header className={`${style.header} ${isscrolled ?style.scrolled:""}`}>
          <div className={style.container} >
              
              {/* log  section*/}
         <img className={style.logos} src={logo} alt="" />


              {/* nav bar */}

              <nav className={style.nav}>
                  <Link className={style.navlink} href="">Movies</Link>
                  <Link className={style.navlink} href="">News& popular</Link>
                  <Link className={style.navlink} href="">My list</Link>
                  <Link className={style.navlink} href="">Browse by language</Link>
                  <Link className={style.navlink} href="">Tv show</Link>
              </nav>
              {/* profile right side */}
              <div className={style.rightside}>
                  {/* search-icon */}
                  <div className={style.searchcontainer}>
                      <button
                          onClick={()=>setIsseachopen(!issearchopen)}
                          className={style.searchbutton}>
                          {/* search has a proprety of un input when it clicked as a button  */}
                          <Search size={20} />
                      </button>

                      {
                          issearchopen && (
                              <input type="text" placeholder='Movie title' className={ style.searchinput} />
                          )
                      }
                  </div>
                  {/* Notification */}

                  <button className={style.iconbutton}>
                      {/* use span to show the number of notification */}
                      <Bell size={20}/>
                      <span className={style.notificationiconbadge}>4</span> 
                     
                  </button>
                  {/* profile -icon */
                  }
                  <div  className={style.profilecontainer}>
                      <button onClick={()=>setisprofileopen(!isprofileopen)}
                          className={style.profilebutton}>
                      <div className={style.profileavatar}>
                            {/* user icon */}
                          <User size={20}/>
                      </div>
                    
                      
                      {/* drop ddown */}
                      <ChevronDown size={20}/>
                  </button>
                      {
                          isprofileopen && (
                              <div className={style.profilemenu}>
                                  <Link className={style.profilemenuitem}>Account</Link>
                                  <Link className={style.profilemenuitem }>Help Center</Link>
                                  <hr className={style.profilemenudivider} />
                                  <button className={style.profilemenuitem}>Sign Out</button>
                          </div>
                          )
                       }
                </div>
              </div>
          </div>
   </header>
  )
}

export default Header
