import React from "react";

export default class ChatBox extends React.Component{
  render(){
    return(
      <div className='ChatBox'>
        <div>
          <button type='button' name='enterChatRoom' onClick={this.props.onButtonClick}>入室</button>
          <button type='button' name='quitChatRoom' onClick={this.props.onButtonClick}>退室</button>
        </div>
        <input type='text' name='inputChat' onChange={this.props.onTextChange} className='' placeholder='チャット入力'/>
        <button type='button' name='sendChatLog' className='' onClick={this.props.onButtonClick}>送信</button>
      </div>
    )
  }
}
