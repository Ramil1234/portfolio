import "../contacts/contacts.sass";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram} from "@fortawesome/free-brands-svg-icons";
function Contacts() {
  return (
    <div className="contacts">
      <h4 className="projects-title">Contacts</h4>
      <div className="contacts-wrapper">
        <div className="contacts-text">
          <p className="title-undertitle">
          Меня интересуют различные проекты. Если у вас есть какие-либо вопросы, пожалуйста, не стесняйтесь связываться со мной.
          </p>
        </div>
        <div className="contacts-message">
          <h4>Message me here</h4>
          <ul className="contacts-message-list">
          <li className="contacts-message-li">
              <FontAwesomeIcon icon={faTelegram} className="contact-margin" />
              @yusupovvv
            </li>
            <li className="contacts-message-li">
              <FontAwesomeIcon icon={faMessage} className="contact-margin" />
              yusupov1929@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
