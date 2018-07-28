import React from 'react';
import ReactDOM from 'react-dom'

class ProfileAppearance extends React.Component{
  render(){
    return(
      <div class="profileCard">
        <table class="pCardTable">
          <tr class="p_title">
            <td colSpan="2">プロフィール</td>
          </tr>
          <tr>

          </tr>
          <tr class="userNameAndIcon">
            <td><img class="profileIcon"/></td>
            <td class="userName">ユーザ名</td>
          </tr>
          <tr>
            <td colSpan="2"><hr/></td>
          </tr>
          <tr class="content1">
            <td>貢献度 :</td>
            <td>まだまだだな！</td>
          </tr>
          <tr class="content1">
            <td>得意言語 :</td>
            <td>Javaだお</td>
          </tr>
          <tr class="content1">
            <td>趣味 :</td>
            <td>セミの抜け殻拾い</td>
          </tr>
          <tr>
            <td colSpan="2"><hr/></td>
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

      </div>

    )
  }
}

ReactDOM.render(
  <ProfileAppearance/>,
  document.getElementById('profile')
);
