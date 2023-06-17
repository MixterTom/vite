import './contact.scss';
function Contact() {
    return(
        <>
        <div className='contact'>
            <div className="contact-social">

            </div>
            <div className="contact-mail">
                <div className="contact-mail-log">
                     <div className="contact-mail-form">
                        <span>Contact Us</span>
                        <p>Use the form below to contact us</p>
                        <div className="contact-mail-form-input">

                        </div>
                     </div>
                     <i className="bi bi-envelope-fill"></i>
                </div>
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