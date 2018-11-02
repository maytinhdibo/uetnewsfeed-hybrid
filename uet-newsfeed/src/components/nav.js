import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
class Nav extends Component {
    componentDidUpdate() {
        for (let i = 0; i < 3; i++)
            document.querySelectorAll("#nav span")[i].style.color = "#aaa";
        if (location.pathname.indexOf("/setting")==0) {
            document.querySelectorAll("#nav span")[2].style.color = "#0288D1";
        } else if (location.pathname.indexOf("/event")==0) {
            document.querySelectorAll("#nav span")[1].style.color = "#0288D1";
        } else
            document.querySelectorAll("#nav span")[0].style.color = "#0288D1";
    }
    render() {
        return (
            <div id="nav">
                <Link to="/home">
                    <span style={{color:"#0288D1"}}>
                        <i> <FontAwesomeIcon icon={faHome} /></i>
                        <b>Tin tức</b>
                    </span>
                </Link>
                <Link to="/event">
                    <span>
                        <i> <FontAwesomeIcon icon={faCalendar} /></i>
                        <b>Sự kiện</b>
                    </span>
                </Link>
                <Link to="/setting">
                    <span>
                        <i>   <FontAwesomeIcon icon={faUser} /></i>
                        <b> Cá nhân</b>
                    </span>
                </Link>
            </div>
        )
    }
}
export default Nav;