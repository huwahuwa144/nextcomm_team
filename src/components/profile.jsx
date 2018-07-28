import React from 'react';
import ReactDOM from 'react-dom'
import '../css/profile.css';
// import React, { Component } from 'react';


class ProfileAppearance extends React.Component {
  // document.getElementByClassName('appear').onclick = function(){

  render() {
    return (

    // <div id="profile"></div>
    // <button type="button" class="appear" onClick>Profile</button>

    <div class="profileCard">
      <table class="pCardTable">
        <tr class="p_title">
          <td colSpan="2">プロフィール</td>
        </tr>
        <tr>
          <td colSpan="2"><hr/></td>
        </tr>
        <tr class="userNameAndIcon">
          <td><img class="profileIcon"/></td>
          <td class="userName">ユーザ名</td>
        </tr>
        <tr>
          <td colSpan="2"><hr/></td>
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
        <tr class="bottomMenu">
          <td colSpan="2">
            <center>
            <button type="button" class="buttomMenuButton"><img class="phoneButton"/></button>
            <button type="button" class="buttomMenuButton"><img class="dmButton"/></button>
            <button type="button" class="buttomMenuButton"><img class="taskButton"/></button>
            </center>
          </td>
        </tr>
      </table>

    </div>);
  }

  // }

}

export default ProfileAppearance;
