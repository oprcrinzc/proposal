"use client"
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboard.css"
export default function Dashboard() {

    const Lists = ["home", "setting"]

  return (
    <div className='dashboard'>
        <div className='sideBar'>
            <div className='header'><p>Dashboard</p></div>
            <div className='lists'>
                {Lists.map((e, i)=>{
                    return <div key={i}><p >{e}</p><hr />
                    </div>
                    
                })}
            </div>
        </div>
        <div className='data'>
            <div className='row'>
                <div className='item'>
                    <p>ยอด</p>
                </div>
                {/* <div className='item'>
                    <p></p>
                </div> */}
                <div className='item'>
                    <p></p>
                </div>
            </div>
            <div className='row'>
                <div className='item'>
                    <p>เป้าหมาย</p>
                </div>
                <div className='item'>
                    <p></p>
                </div>
                <div className='item'>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  );
}
