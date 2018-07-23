export default class ChatLog extends React.Component{
  render(){
    return(
      <ul className='ChatLog'>
        <li className=''>{this.props.message.chat}</li>
      </ul>
    )
  }
}
