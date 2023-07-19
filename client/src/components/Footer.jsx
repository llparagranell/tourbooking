import "./footer.css";
import logo from "../Logo.png";

function Footer() {
  return (
    <div>
      <div>
        <footer>
          <div className="footer-1">
            <p className="footer-p">ABOUT HOTEL'S</p>
            <ul className="footer-ul">
              
                <img src={logo} alt="" width={170} />
              
              <li className="footer-li footer-h">
                “We work with organisations to craft immersive customer
                experiences.”
              </li>
            </ul>
          </div>
          <div className="footer-2">
            <p className="footer-p">BOOK APARTMENT</p>
            <ul className="footer-ul">
              <li className="footer-li text">
                Meh synth Schlitz, tempor duis single-origin coffee ea next
                level ethnic fingerstache fanny pack nostrud. Photo booth anim
                8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil,
                flexitarian Truffaut synth art party deep v chillwave.
              </li>
            </ul>
            {/* <button className="footer-btn">Book Now</button> */}
          </div>
        </footer>
        <div className="last">
        <ul className="last-ul">
            <li className="last-li left">© Copyright Hotel's (School Project) - llparagranell</li>
          {/* <ul className="right">
          <li className="last-li">Home</li>
            <li className="last-li">Our Rooms</li>
            <li className="last-li">About Us</li>
            <li className="last-li">Contact</li>
            <li className="last-li">Terms And Conditions</li>
          </ul> */}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
