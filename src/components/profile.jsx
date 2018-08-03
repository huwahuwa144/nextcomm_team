import React from 'react';
import '../css/profile.css';
import defaulticon from '../images/default_icon.png';
import phoneButton from '../images/phone.jpg';
import dmButton from '../images/dm.jpg';
import taskButton from '../images/task.png';


class ProfileAppearance extends React.Component {
  render() {
    return (
      <div className="profilecard">
        <table className="p-cardtable">
          <tr className="p-title">
            <td colSpan="2">プロフィール</td>
          </tr>
          <tr>
            <td colSpan="2"><hr /></td>
          </tr>
          <tr className="user-name-icon">
            <td><img src={defaulticon} className="profileicon" alt="icon" /></td>
            <td className="username">ユーザ名</td>
          </tr>
          <tr>
            <td colSpan="2"><hr /></td>
          </tr>
          <tr>
            <td>貢献度 :</td>
            <td>まだまだだな！</td>
          </tr>
          <tr>
            <td>得意言語 :</td>
            <td>Javaだお</td>
          </tr>
          <tr>
            <td>趣味 :</td>
            <td>セミの抜け殻拾い</td>
          </tr>
          <tr className="bottom-menu">
            <td colSpan="2">
              <center>
                <button type="button" className="buttom-menu-button"><img src={phoneButton} className="phone-button" alt="call" /></button>
                <button type="button" className="buttom-menu-button"><img src={dmButton} className="dm-button" alt="DM" /></button>
                <button type="button" className="buttom-menu-button"><img src={taskButton} className="task-button" alt="task" /></button>
              </center>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ProfileAppearance;
