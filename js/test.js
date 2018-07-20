//ページ遷移アクション
window.addEventListener('DOMContentLoaded', function() {
  new LookForward(".js-lookforward")
})
var lookforward = new LookForward('.js-lookforward');
lookforward.on('open', function(e) {
  console.log('open');
});
lookforward.on('close', function(e) {
  console.log('close');
});
lookforward.on('closeAll', function(e) {
  console.log('closeAll');
});
