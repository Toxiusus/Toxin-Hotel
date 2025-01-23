import "./RoomDetails.scss";

import firstphoto from "../../assets/img/det-1.jpeg";
import secondphoto from "../../assets/img/det-2.jpeg";
import thirdthphoto from "../../assets/img/det-3.jpeg";

function RoomDetails() {
  return (
    <section className="room-details">
      <div className="room-details__container container">
        <div className="room-details__photo">
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
      </div>
    </section>
  );
}

export default RoomDetails;
