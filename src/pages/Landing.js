import React from 'react'
import './Styles/landing.css'


const landing = () => {
    return (
        <div id='landing'>
            <div class="navbar">
                <div id='logo-box'>
                    <span id='logo-img'><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.324599 10.54C-0.108214 10.3389 -0.108195 9.6555 0.324629 9.45446C3.46223 7.9971 5.99767 5.46194 7.4554 2.32455C7.65647 1.89181 8.33969 1.89182 8.54075 2.32456C9.99839 5.46185 12.5337 7.99696 15.6711 9.45439C16.1039 9.65545 16.1039 10.3388 15.6711 10.5399C12.5334 11.9974 9.99804 14.5328 8.54045 17.6703C8.3394 18.1031 7.65606 18.1031 7.45501 17.6703C5.99745 14.5328 3.46213 11.9975 0.324599 10.54Z" fill="#0C0012" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4029 3.24414C12.1484 3.10842 12.1484 2.67985 12.403 2.54415C13.402 2.0116 14.2236 1.19008 14.7562 0.191154C14.8919 -0.0633524 15.3204 -0.0633514 15.4561 0.191155C15.9887 1.19001 16.8102 2.01149 17.8091 2.54404C18.0636 2.67976 18.0636 3.10832 17.8091 3.24403C16.8101 3.77664 15.9885 4.59823 15.4559 5.59722C15.3202 5.85177 14.8916 5.85177 14.7559 5.59722C14.2233 4.5983 13.4018 3.77675 12.4029 3.24414Z" fill="#0C0012" />
                    </svg>
                    </span>
                    <h1 id='logo'>Eclipse</h1>
                </div>
            </div>
            <div class="header">
                We help people from going broke.<br />
                <span id='serious'>Yes Seriously!</span>
                <div id='sign-up'>Sign Up</div>
            </div>
            <div class="marquee">
                <span>
                    WHY PAY FOR UNUSED SUBSCRIPTIONS? TRACK MANAGE AND CANCEL IT ANYTIME
                    WHY PAY FOR UNUSED SUBSCRIPTIONS? TRACK MANAGE AND CANCEL IT ANYTIME
                    WHY PAY FOR UNUSED SUBSCRIPTIONS? TRACK MANAGE AND CANCEL IT ANYTIME
                    WHY PAY FOR UNUSED SUBSCRIPTIONS? TRACK MANAGE AND CANCEL IT ANYTIME
                </ span>
            </div>
            <section>
                <img src='https://cdn3d.iconscout.com/3d/free/thumb/netflix-2950136-2447898.png' data-speed="-10" className='layer netflix' />
                <img src='https://clouddevs.com/3dbay/files/preview/960x960/11653407779f7hrmbpckskwtmizpwffnsxehxfwhd5hvlrpyxagqeddhv3hgj249h0iamgayaqhkqpim3cbhp4iepg5ktskbgvi8r8bxffih6lg.png' data-speed="8" className='layer adobe' />
                <img src='https://cdn3d.iconscout.com/3d/free/thumb/tinder-2950146-2447907.png' data-speed="5" className='layer tinder' />
                <img src='https://cdn3d.iconscout.com/3d/free/thumb/youtube-2950143-2447893.png?f=webp' data-speed="-7" className='layer youtube' />
            </section>
        </div>
    )
}

export default landing