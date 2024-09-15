import { navData } from "../../data/nav"
import './SideBar.css'
import ScheduleBtn from "../ScheduleBtn/ScheduleBtn"
import { infoData, infoIcon } from "../../data/info"
import { Link } from "react-router-dom"
export default function SideBar({ isOpen, toggleSidebar }) {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div>
        <div className="nav-head head-side">
            <h3>VILLA</h3>
            <Link to=""  onClick={(e) => { e.preventDefault(); toggleSidebar(); }}><img className="close" src="./imag/NavIcon/xmark-solid.svg" alt="close" /></Link>
        </div>
         <ul className=' ul-side'>
            {navData.map(index =>
                {
                    return(
                        <li className=' li-side' key={index.id}>
                            <Link className='nav-link' to={index.link}>{index.title}</Link>
                        </li>
                    )
                }
            )}
            <ScheduleBtn/>
         </ul>
        </div>
        <div>
        <div className='div-1'>
            <div className='info info-side'>
                {infoData.map(i=>{
                    return(
                        <Link to={i.href} key={i.id} className='info-link'>
                            <img src={i.icon} alt={i.infoTitle} className='info-icon' />
                            <span>{i.infoTitle}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
        <div className='icons side-icons'>
            {infoIcon.map(j=>
                {
                    return(
                        <div className='social-icon'  key={j.id}>
                            <Link to={j.href} className='link'>
                                <img src={j.icon} alt={j.socIcon} />
                            </Link>
                        </div>
                    )
                }
            )}
        </div>
        </div>
    </nav>
  )
}
