import './contact.scss';
import { useState } from "react";
function Contact() {
    
    const [show, setShow] = useState(false);
  function inputShow() {
    const option = document.querySelector(".contact-mail-form");
    setShow(!show);
    if (show) {
      option.classList.add("offshow");
    } else {
      option.classList.remove("offshow");
    }
  }
  function inputShow2() {
    const option2 = document.querySelector(".contact-mail-form")
    setShow(!show);
    if (show) {
      option2.classList.add("offshow");
    } else {
      option2.classList.remove("offshow");
    }
  }
  function inputShow3(){
    const option3 = document.querySelector(".chaty")
    setShow(!show);
    if(show){
        option3.classList.add("offshow");
    }else{
        option3.classList.remove("offshow");
    }
  }
    return(
        <>
        <div className='contact'>
            <div className="contact-social">      
                <div className="chaty">
                    <div className="chatywhatapp">
                        <span> WhatsApp</span>
                       <i className="chatyapp bi bi-whatsapp"></i>
                    </div>
                    <div className="chatytextfb">
                        <span>Facebook Messenger</span>
                         <i className="chatymess bi bi-messenger"></i>
                    </div>
                </div>
                <i className="socialmain bi bi-chat-dots-fill" onClick={()=>{inputShow3()}}></i>
            </div>
            <div className="contact-mail">
                <div className="contact-mail-log">
                     <div className="contact-mail-form">
                     <i className="outicon bi bi-x-square" onClick={()=>{inputShow2()}}></i>
                        <span>Contact Us</span>
                        <p>Use the form below to contact us!</p>
                        <div className="contact-mail-form-input">
                                <input type="text" className="name" placeholder='Your Name'/>
                                <input type="mail" className="mail" placeholder='Your Mail'/>
                                <input type="phone" className="phone" placeholder='Your Phone'/>
                                <textarea type="text" className="mess"  placeholder='Type your message...'/>
                                <button className="btn">Send</button>
                        </div>
                     </div>
                </div>
                <i className="iconmail bi bi-envelope-fill" onClick={()=>{inputShow()}}></i>
                <div className="contact-mail-back">
                    
                    <a href="">
                      <i className="bi bi-chevron-compact-up"></i>
                    </a>
                </div>

            </div>
        </div>
        </>
    );
}
export default Contact;