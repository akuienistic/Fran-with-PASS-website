import './Contact.css';
import { FaUser, FaEnvelope} from 'react-icons/fa';

function Contact(){
        return(
<div className="contact-container container p-4 py-md-5" data-aos="fade-up">
  <div className="contact-header text-center mb-4 mb-md-5">
    <h1 className="h1-heading display-5 fw-bold display-md-4 mb-3">GET IN TOUCH</h1>
    <p className="contact-para lead mb-5 mx-auto" style={{maxWidth: "600px"}}>
      Reach out for inquiries or clarifications by leaving your details below.
    </p>
  </div>

  <form className="contact-form" action="#">
    <div className="form-container mx-auto" style={{maxWidth: "600px"}}>
      <div className="input-wrapper mb-4 position-relative">
        <FaUser className="input-icon position-absolute top-50 translate-middle-y ms-3"/>
        <input type="text" id="fullName" className="inputBoxes form-control ps-5 py-3" placeholder="Full Name" required/>
      </div>
      
      <div className="input-wrapper mb-4 position-relative">
        <FaEnvelope className="input-icon position-absolute top-50 translate-middle-y ms-3"/>
        <input type="text" id="email" className="inputBoxes form-control ps-5 py-3" placeholder="Email" required/>
      </div>
      
      <textarea name="textarea" id="msgBox" className="form-control mb-4 py-3" 
                rows={8} placeholder="Type your message here..." required></textarea>

      <div className="btn-wrapper d-flex justify-content-center align-items-center">
        <button type='submit' name='button' id='submitBtn' className='btn btn-primary w-40 py-3'>
          Submit Message
        </button>
      </div>
    </div>
  </form>
</div>
        );
}
export default Contact;