'use strict';

let localStream = null;
let peer = null;
let existingCall = null;


navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(function (stream) {
        // Success
        document.getElementById('screenSharingCanvasMe').srcObject = stream;
        localStream = stream;
    }).catch(function (error) {
    // Error
    console.error('mediaDevice.getUserMedia() error:', error);
    return;
});


peer = new Peer({
    key: 'e649cb29-32c4-4274-bbe6-c12e414791dd',
    debug: 3
});

peer.on('open', function(){
  document.getElementById('my-id').textContent=peer.id;
});

peer.on('error', function(err){
    alert(err.message);
});

peer.on('close', function(){
});

peer.on('disconnected', function(){
});

document.getElementById('make-call').submit(function(e){
    e.preventDefault();
    const call = peer.call(document.getElementById('callto-id').value(),localStream);
    setupCallEventHandlers(call);
});

document.getElementById('end-call').click(function(){
    existingCall.close();
});

peer.on('call', function(call){
    call.answer(localStream);
    setupCallEventHandlers(call);
});

function setupCallEventHandlers(call){
    if (existingCall) {
        existingCall.close();
    };

    existingCall = call;

    call.on('stream', function(stream){
        addVideo(call,stream);
        setupEndCallUI();
        document.getElementById('their-id').textContent=call.remoteId;
    });
    call.on('close', function(){
        removeVideo(call.remoteId);
        setupMakeCallUI();
    });
}

function addVideo(call,stream){
    document.getElementById('screenSharingCanvasYou').srcObject = stream;
}

function removeVideo(peerId){
  document.getElementById('peerId').remove();
}

function setupMakeCallUI(){
  document.getElementById('make-call').show();
  document.getElementById('end-call').hide();
}

function setupEndCallUI() {
  document.getElementById('make-call').hide();
  document.getElementById('end-call').show();
}
