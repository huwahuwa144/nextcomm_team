import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

export default class CallBox extends React.Component {
  render() {
    return (
      <div>
        <div className="VideoCallBox">
          <video src="http://pa102d6c1d7.dmc.nico/vod/ht2_nicovideo/nicovideo-so33582734_22273dca019169fa7a6d8e57f4380ba0c5769bc89e68e25580f68c7bcd3b6562?ht2_nicovideo=14495028.c9vvg8_pcm97g_z1p1b7n497s3" className="screenSharingCanvasMe" autoPlay><track kind="captions" /></video>
          <video src="http://pa102d6c1d7.dmc.nico/vod/ht2_nicovideo/nicovideo-so33582734_22273dca019169fa7a6d8e57f4380ba0c5769bc89e68e25580f68c7bcd3b6562?ht2_nicovideo=14495028.c9vvg8_pcm97g_z1p1b7n497s3" className="screenSharingCanvasYou" autoPlay><track kind="captions" /></video>
        </div>
      </div>
    );
  }
}
