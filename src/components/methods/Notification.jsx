// Notification出す用
// link: 通知をクリックしたときに飛ばす先, duration: 通知を表示する時間
export const displayNotif = (theBody, theIcon, theTitle, link = null, duration = 5000) => {
  const options = {
    body: theBody,
    icon: theIcon,
  };
  const n = new window.Notification(theTitle, options);
  if (link) {
    n.onClick = () => {
      window.open(link);
    };
  }
  setTimeout(n.close.bind(n), duration);
};
