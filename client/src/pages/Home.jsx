import { useNavigate } from "react-router";
import "./home.css";
import Destination from "../components/Destination";
import Search from "../components/Search";

function Home() {

  const navigate = useNavigate();
  const roomHandler = () => {
    navigate('/rooms')
  }
  const contactHandler = () => {
    navigate('/contact')
  }

  
    return (
      <div>
        <header>
          <h1 className="head-h1">The Hotel's Luxury
            <br /> Indian Apartment
          </h1>
          <p className="head-p">
            Unwind the clock of modern life. Unlock the door to a wonder of the
            world.
          </p>
        </header>
        <Search/>
       <Destination/>
        <section className="font">
          <h1 style={{fontSize:"2.2rem"}}>Why choose our apartment?</h1>
          <div className="home-three">
            <div className="home-three-div">
              <div>
                <img
                  src="https://hotellerv1.b-cdn.net/apartment/wp-content/uploads/sites/5/2018/07/interior_icon.png"
                  alt=""
                />
              </div>
              <div className="home-card-text">
                <h2>Stunning Interior Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel molestie nisl. Duis ac mi leo.
                </p>
              </div>
            </div>
            <div className="home-three-div">
              <div>
                <img src="https://hotellerv1.b-cdn.net/apartment/wp-content/uploads/sites/5/2018/07/location_icon.png" alt="" />
              </div>
              <div className="home-card-text">
              <h2>Convenience Location</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel molestie nisl. Duis ac mi leo.
              </p>
              </div>
            </div>
            <div className="home-three-div">
              <div>
                <img src="https://hotellerv1.b-cdn.net/apartment/wp-content/uploads/sites/5/2018/07/yoga_icon.png" alt="" />
              </div>
              <div className="home-card-text">
                <h2>Yoga & Gymn</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel molestie nisl. Duis ac mi leo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-id">
          <div className="home-id-text">
            <h1 className="home-id-h">Interior Design</h1>
            <p className="home-id-p">Every apartment is air-conditioned and soundproofed, has a fully equipped kitchen, dining room, bathroom with separate bath and shower, Wi-Fi, LED TV .</p>
            <button className="home-id-btn" onClick={roomHandler}>View Our Rooms</button>
          </div>
          <div className="home-id-img">
          </div>
        </section>
        <section className="map">
          <div className="map-design">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571267494!2d72.71637465584017!3d19.08217751385281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687149234430!5m2!1sen!2sin" width="775" height="700" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="1"></iframe>
          </div>
          <div className="home-id-text">
            <h1 className="home-id-h">Our Location</h1>
            <p className="home-id-p">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan.</p>
            <button className="home-id-btn" onClick={contactHandler}>Get Direction</button>
          </div>
        </section>

      </div>
    );
}

export default Home;
