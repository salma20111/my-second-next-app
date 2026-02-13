import classes from "./FirstSection.module.css";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FirstSection() {
  return (
    <section className={classes.main}>
      
      <div className={classes.card}>


           <div className={classes.text}>
          <h3>Bring your business to life with our help❤️</h3>

          <ul className={classes.list}>
            <li>I am Salma</li>
            <li>I have learnt to make a professional website using HTML, CSS, JavaScript and  Node JS</li>
            <li>I am in grade 8</li>
            <li>I can talk 2 languages English and Arabic</li>
            <li>I know a little  Italy and French</li>
            <li>I am a taekwondo player</li>
            <li>I received many scholarships such as Buds and Digital Cubs</li>
            <li>I am 15 years old </li>
            <li>And she played a memorable championship</li>
            <li>I can make you professional webstie , logo, social media posts, stories and reel, posters, flyers, Business cards, brochures, Presentations and infographics</li>
          </ul>
          </div>
          <div className={classes.image}>
          <img src="/images/salma.jpg" alt="My Photo" />
          </div>

        <div className={classes.contact}>
              
              <p>
              for more....
              </p>

              <div style={{ fontSize: "30px" }}>
                <a href="https://facebook.com" target="_blank">
                <FaFacebook color="#1877F2" />
                </a>

                <a href="https://wa.me/1234567890" target="_blank">
                <FaWhatsapp color="#25D366" />
                </a>

                <a href="https://instagram.com" target="_blank">
                <FaInstagram color="#E4405F" />
                </a>
              </div>
              
      </div>
     </div>
    </section>
  );
}

