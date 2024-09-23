import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Let's connect!</p>
        <p>I'm always excited to take on new challenges, collaborate on innovative projects, or discuss opportunities.</p>
        <p>If you're looking for someone with a strong passion for problem-solving, creativity, and adaptability, feel free to reach out.</p>
        <p>Whether you have a job offer, a partnership idea, or just want to say hello, I'm ready to hear from you!</p>
      </header>

      <div className="contacts">
        <div>
          <a href="mailto:AvishkaChanaka@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:AvishkaChanaka@gmail.com">AvishkaChanaka@gmail.com</a>
        </div>
        <div>
          <a href="tel:+94715515546">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+94715515546">(+94) 715515546</a>
        </div>
      </div>

      <Form />
    </Container>
  );
}
