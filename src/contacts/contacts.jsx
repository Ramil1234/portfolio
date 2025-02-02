import "../contacts/contacts.sass";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contacts() {
  return (
    <div className="contacts">
      <h4 className="projects-title">Contacts</h4>
      <div className="contacts-wrapper">
        <div className="contacts-text">
          <p className="title-undertitle">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="contacts-message">
          <h4>Message me here</h4>
          <ul className="contacts-message-list">
            <li className="contacts-message-li">
              <FontAwesomeIcon icon={faDiscord} className="contact-margin" />
              !Elias#3519
            </li>
            <li className="contacts-message-li">
              <FontAwesomeIcon icon={faMessage} className="contact-margin" />
              elias@elias.me
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
