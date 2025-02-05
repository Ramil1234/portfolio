import "../contacts2/contacts2.sass";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faTelegram} from "@fortawesome/free-brands-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";

function Contacts2() {
  return (
    <div className="contacts">
      <h4 className="projects-title contacts2-title">Contacts</h4>
      <div className="contacts-wrapper mb-25">
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
      <div className="media">
      <h4 className="projects-title contacts2-title">all-media</h4>
        <ul className="media-ul">
            <li className="media-li"> <a href="https://vk.com/yuusuppov"><FontAwesomeIcon icon={faVk} /><span>@yuusuppov</span></a></li>
            <li className="media-li"><a href="https://t.me/yusupovvv"><FontAwesomeIcon icon={faTelegram} /><span>@yusupovvv</span></a></li>
            <li className="media-li"><a href="tel:79393895625"><FontAwesomeIcon icon={faPhone}/><span>79393895625</span></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts2;