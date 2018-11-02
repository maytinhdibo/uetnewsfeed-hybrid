import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';

class EventItem extends Component {

    render() {
        return (
            <div className="news">
                <div className="news-img">
                </div>
                <div className="description">
                <h3>Đạt giải bạn đẹp trai nhất UET</h3>
                <p>Vừa qua bạn Trần Mạnh Cường K62-C-CLC nhận được giải thưởng nam thần UET</p>
                </div>
                <div className="event-action">
                <button>
                <i> <FontAwesomeIcon icon={faCheck} /></i>
                  Tham gia
                  </button>
                <button>
                <i> <FontAwesomeIcon icon={faStar} /></i>
                  Quan tâm
                  </button>

                </div>
            </div>
        )
    }
}
export default EventItem;