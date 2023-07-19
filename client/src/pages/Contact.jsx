import { useNavigate } from "react-router";
import "./contact.css";

function Contact() {
  
  const navHandler = () =>{
    window.location.replace(' https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0822507,72.8811862,11z/data=!3m1!4b1!4m6!3m5!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559!16zL20vMDR2bXA?entry=ttu');
  }
  return (
    <div>
      <header className="contact">
        <div className="contact-head-text">
          <h1>
            Located in center of <br />
            Mumbai
          </h1>
          <p>
            Unwind the clock of modern life. Unlock the door to a wonder of the
            world.
          </p>
        </div>
        <div>
          <button className="contact-head-btn" onClick={navHandler}>GET DIRECTION {"  >"}</button>
        </div>
      </header>
      <section className="contact-map">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687517248764!5m2!1sen!2sin"
            width="100%"
            height="550"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="contact-2">
        <div className="contact-card">
          <h2>Our Address</h2>
          <p>45 CSMT Station, Navi Mumbai 150-0002 IN in@hotel's.com</p>
        </div>
        <div className="contact-card">
          <h2>By Car</h2>
          <p>
            Approximately 5 minutes from CSMT Station, or 10 minutes from Navi
            Mumbai station
          </p>
        </div>
        <div className="contact-card">
          <h2>By Train</h2>
          <p>
            7 minutes walk from CSMT Station, or 15 minutes walk from Navi
            Mumbai Station.
          </p>
        </div>
      </section>
      <section className="form-section">
        <div className="contact-3">
          <div className="contact-3-div">
            <h1 className="contact-3-h1">
              Do you have any wishes or questions?
            </h1>
            <form action="">
              <label htmlFor="">Name (*)</label>
              <input type="text" />
              <label htmlFor="">Email (*)</label>
              <input type="email" />
              <label htmlFor="">Phone</label>
              <input type="text" />
              <label htmlFor="">Your Message</label>
              <textarea name="" id="" cols="10" rows="8"></textarea>
            </form>
            <button className="form-btn">Send</button>
          </div>
          <div>
            <img className="img" src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80" width={400} height={600} alt="" style={{marginRight:"10vh", marginTop:"10vh", borderRadius:"2px"}} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
