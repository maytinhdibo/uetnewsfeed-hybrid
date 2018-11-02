import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faPencilAlt, faCalendarAlt, faQrcode, faInfoCircle, faBell, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Setting extends Component {
  componentWillMount() {
    console.log("update");
    try {
      StatusBar.backgroundColorByHexString("#FFFFFF");
    } catch (err) { }
  }
  render() {
    return (
      // <BrowserRouter>
      //   <Route path="/setting/pages" component={SettingPage} />
      // </BrowserRouter>

      <div id="setting">
        <b> <h2>Cá nhân</h2></b>
        <br />

        <div className="set-item">
          <span><FontAwesomeIcon icon={faGraduationCap} /></span> Điểm rèn luyện
         </div>

        <div className="set-item">
          <span><FontAwesomeIcon icon={faPencilAlt} /></span>  Điểm thi
        </div>

        <div className="set-item">
          <span><FontAwesomeIcon icon={faCalendarAlt} /></span>  Lịch thi
         </div>

        <br />
        <Link to="/setting/1">
          <div className="set-item">
            <span> <FontAwesomeIcon icon={faUser} /></span>  Thông tin cá nhân
         </div>
        </Link>
        <div className="set-item">
          <span> <FontAwesomeIcon icon={faQrcode} /></span> QR Code của bạn
        </div>
        <br />
        <div className="set-item">
          <span>  <FontAwesomeIcon icon={faBell} /></span> Thông báo
        </div>

        <Link to="/setting/0">
          <div className="set-item">
            <span>  <FontAwesomeIcon icon={faInfoCircle} /></span> Giới thiệu
        </div>
        </Link>
      </div>
    )
  }
}
class SettingPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    const list = [
      {
        title: "Thông tin",
        render: <Info />
      },
      {
        title: "Thông tin cá nhân",
        render: <ProfileInfo />
      }
    ]
    this.state = {
      list: list
    }

    try {
      StatusBar.backgroundColorByHexString("#C0C0C0");
    } catch (err) { }
  }
  back() {
    history.back();
  }
  render() {
    return (
      <div id="setting-page">
        <div className="header-page">
          <span onClick={this.back}><FontAwesomeIcon icon={faArrowLeft} /></span>
          {this.state.list[this.props.match.params.id].title}
      </div>
        <div id="setting-content">
          {this.state.list[this.props.match.params.id].render}
        </div>
      </div>
    )
  }
}
class Info extends Component {
  render() {
    return (
      <div className="info">
        <div id="team-logo"></div>
        <h2>ComRangUET Team</h2>
        <table>
          <tr>
            <td>Mobile developer</td>
            <td>Trần Mạnh Cường</td>
          </tr>
          <tr>
            <td>Frontend developer</td>
            <td>Ngô Minh Phương</td>
          </tr>
          <tr>
            <td>Backend developer</td>
            <td>Đỗ Văn Sĩ<br />Hạp Tiến Quân</td>
          </tr>
        </table>
      </div>
    )
  }
}
class ProfileInfo extends Component {
  changeMail(){
    var email = prompt("Nhập email của bạn:", "vidu@tenmien.com");
  }
  render() {
    return (
      <div>
        <br/>
        <table>
          <tr>
            <td>Họ và tên:</td>
            <td>Trần Mạnh Cường</td>
          </tr>
          <tr>
            <td>MSSV:</td>
            <td>17020076</td>
          </tr>
          <tr>
            <td>Ngày sinh:</td>
            <td>14/10/1999</td>
          </tr>
          <tr>
            <td>Lớp:</td>
            <td>K62-C-CLC <br />Công Nghệ Thông Tin</td>
          </tr>
          <tr>
            <td>Số điện thoại:</td>
            <td>0961538337</td>
          </tr>
          <tr>
            <td>Thư điện tử:</td>
            <td>iammaytinhdibo@gmail.com</td>
          </tr>
        </table>
        <br/>
        <button onClick={this.changeMail}>Sửa thư điện tử</button>
        <button>Sửa số điện thoại</button>
      </div>
    )
  }
}

export { Setting, Info, SettingPage };