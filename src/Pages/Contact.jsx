import {FiPhoneCall} from 'react-icons/fi'
import {FaRegEnvelope,FaInstagram } from 'react-icons/fa'
import { BsFacebook} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Contact() {
  return (
      <div>
            <div className="contant-1">
                <div className="contant-2">
                    <div className="contant-3">
                        <div className="contant">
                            <div className="feedback">
                                <h1>Give Us Feedbacks</h1>
                                <textarea type="text" name="" id="" placeholder="Leave us a message........" />
                                <div className="sendme">
                                    <button>Send</button>
                                </div>
                            </div>
                            <div className="us">
                                <div className="more">
                                    <h1>Contact Us</h1>
                                    <Link to={`https://api.whatsapp.com/send?phone=09162484365&text=YOURMESSAGE`} className="link">
                                        <div className="phone">
                                            <div className="icons"><FiPhoneCall /></div> {/* Use the WhatsApp icon */}
                                            <p>09162484365</p>
                                        </div>
                                    </Link>
                                    <Link to="mailTo:afolabibolu15@gmail.com" className='link'>
                                        <div className="phone">
                                            <div className="icons"><FaRegEnvelope/></div>
                                            <p>afolabibolu15@gmail.com</p>
                                        </div>
                                    </Link>
                                    <div className="phone">
                                        <div className="icons">< BsFacebook/></div>
                                        <p>propertypro</p>
                                    </div>
                                    <div className="phone">
                                        <div className="icons"><FaInstagram/></div>
                                        <p>@propertypro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Contact;
