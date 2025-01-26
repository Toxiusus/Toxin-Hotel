import "./RoomDetails.scss";

import firstphoto from "../../assets/img/det-1.jpeg";
import secondphoto from "../../assets/img/det-2.jpeg";
import thirdthphoto from "../../assets/img/det-3.jpeg";
import dignities1 from "../../assets/img/dignities-1.svg";
import dignities2 from "../../assets/img/dignities-2.svg";
import dignities3 from "../../assets/img/dignities-3.svg";

function RoomDetails() {
  return (
    <div className="room-details">
      <div className="room-details__photo container">
        <div className="room-details__photo-main">
          <img src={firstphoto} alt="large-photo" />
        </div>
        <div className="room-details__photo-aside">
          <div className="room-details__photo-top">
            <img src={secondphoto} alt="small-photo" />
          </div>
          <div className="room-details__photo-bottom">
            <img src={thirdthphoto} alt="small-photo" />
          </div>
        </div>
      </div>
      <div className="room-details__container container">
        <div className="room-details__content">
          <div className="room-details__information">
            <section className="room-details__dignities">
              <div className="heading">
                <h2 className="heading__title">Сведения о номере</h2>
              </div>
              <div className="dignities">
                <div className="dignities__item">
                  <div>
                    <img src={dignities1} alt="degnities-1" />
                  </div>
                  <div className="dignities__description">
                    <span className="dignities__description-title">
                      Комфорт
                    </span>
                    <span className="dignities__description-subtitle">
                      Шумопоглощающие стены
                    </span>
                  </div>
                </div>
                <div className="dignities__border"></div>
              </div>
              <div className="dignities">
                <div className="dignities__item">
                  <div>
                    <img src={dignities2} alt="degnities-1" />
                  </div>
                  <div className="dignities__description">
                    <span className="dignities__description-title">
                      Удобство
                    </span>
                    <span className="dignities__description-subtitle">
                      Окно в каждой из спален
                    </span>
                  </div>
                </div>
                <div className="dignities__border"></div>
              </div>
              <div className="dignities">
                <div className="dignities__item">
                  <div>
                    <img src={dignities3} alt="degnities-1" />
                  </div>
                  <div className="dignities__description">
                    <span className="dignities__description-title">Уют</span>
                    <span className="dignities__description-subtitle">
                      Номер оснащён камином
                    </span>
                  </div>
                </div>
                <div className="dignities__border"></div>
              </div>
            </section>
            <section className="room-details__impressions">
              <div className="heading">
                <h2 className="heading__title">Впечатления от номера</h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
