import './Contact.css';
import { FaUser, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container container py-5" data-aos="fade-up">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 contact-card-bg">
            <div className="contact-header text-center mb-4 mb-md-5">
              <h1 className="h1-heading display-5 fw-bold mb-3 gradient-text">
                GET IN TOUCH
              </h1>
              <p
                className="contact-para fs-5 mb-1 mx-auto"
                style={{ maxWidth: '600px' }}
              >
                Reach out for inquiries or clarifications by leaving your details below.
              </p>
            </div>

            <form className="contact-form" action="#">
              <div className="form-container mx-auto" style={{ maxWidth: '600px' }}>
                <div className="input-wrapper mb-4 position-relative">
                  <FaUser className="input-icon position-absolute top-50 translate-middle-y ms-3" size={20} />
                  <input
                    type="text"
                    id="fullName"
                    className="inputBoxes form-control ps-5 py-3 rounded-3 shadow-sm"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="input-wrapper mb-4 position-relative">
                  <FaEnvelope className="input-icon position-absolute top-50 translate-middle-y ms-3" size={20} />
                  <input
                    type="email"
                    id="email"
                    className="inputBoxes form-control ps-5 py-3 rounded-3 shadow-sm"
                    placeholder="Email"
                    required
                  />
                </div>

                <textarea
                  name="textarea"
                  id="msgBox"
                  className="form-control mb-4 py-3 rounded-3 shadow-sm"
                  rows={7}
                  placeholder="Type your message here..."
                  required
                  style={{ resize: 'vertical', minHeight: '120px' }}
                ></textarea>

                <div className="btn-wrapper d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    name="button"
                    id="submitBtn"
                    className="btn btn-gradient px-5 py-3 rounded-3 fw-semibold shadow-sm"
                  >
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
