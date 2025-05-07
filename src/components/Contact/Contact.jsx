import React from 'react'
import '../Contact/Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  return (
    <div className='contact' id="contact"> 
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" className='msg-icon' /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima ipsum voluptatibus pariatur voluptatum est quam commodi adipisci exercitationem placeat facilis omnis id asperiores, mollitia neque similique rerum dicta optio.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact @GreatStack.dev</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="" />77 Massacheuts Ave , Cambridge <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label> Your Name </label>
            <input type="text" name='name' placeholder='Enter your name ' required />
          
          <label> Phone Number </label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />

            <label>Write Your Messages Here</label>
            <textarea name="message" id=""  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
      </div>
    </div>
  )
}

export default Contact