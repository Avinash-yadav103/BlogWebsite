import React from 'react';
import "./css/rightpanel.css";

function RightPanel(props) {
    return (
        <div className='right_panel'>
            <div className="author_intro">
                <p>Hello, <br /> <h3>I'm {props.author} </h3></p>
                <img src="https://t4.ftcdn.net/jpg/05/29/87/37/360_F_529873767_FMwTX8twWRwAI4xtk2X65THeflD7Fp9s.jpg" alt="" />
            </div>
            <div className="about_author">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur pariatur deserunt reicie
                    ndis eligendi minima fugiat in sunt inventore, veniam totam ipsam illum veritatis quasi, sed aperiam harum. At inventore
                     delectus illo ab neque suscipit? Quas placeat officia aliquam delectus!
                </p>

            </div>
            <div className="social_handles">
                <p>Let's Connect</p>
                
            </div>

            <div className="ads_section">
                Any add
            </div>

            
        </div>
    )
}

export default RightPanel
