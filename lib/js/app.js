/* eslint-disable require-jsdoc */
/**
 * SkyWay Screenshare Sample App
 * @author NTT Communications(skyway@ntt.com)
 * @link https://github.com/nttcom/ECLRTC-ScreenShare
 * @license MIT License
 */

(function() {
    // API key (bc26d227-0bf2-460a-b2cb-129a0dfafdc2 can only be used on localhost)
    const APIKEY = '5bea388b-3f95-4e1e-acb5-a34efdd0c480';

    // Call object
    let existingCall = null;

    // localStream
    let localStream = null;

    // Create Peer object
    const peer = new Peer({key: APIKEY, debug: 3});

    // Prepare screen share object
    const ss = ScreenShare.create({debug: true});

    // Get peer id from server
    peer.on('open', () => {
      document.getElementById('my-id').textContent(peer.id);
      // $('#my-id').text(peer.id);
    });

    // Set your own stream and answer if you get a call
    peer.on('call', call => {
      call.answer(localStream);
      step3(call);
      console.log('event:recall');
    });

    // Error handler
    peer.on('error', err => {
      alert(err.message);
      step2();
    });

  // Call peer

    // $('#make-call').on('click', () => {
  document.getElementById('make-call').onclick = function(){
    const call = peer.call(document.getElementById('otherpeerid').val(), localStream);
    step3(call);
  };

  // Finish call
  $('#end-call').on('click', () => {
    existingCall.close();
    step2();
  });

  // Get media stream again
  document.getElementById('step1-retry').onclick = function(){
    document.getElementById('step1-error').hide();
    step1();
  };

  // Start screenshare
  document.getElementById('start-screen').onclick = function(){
    if (ss.isScreenShareAvailable() === false) {
      alert('Screen Share cannot be used. Please install the Chrome extension.');
      return;
    }
  };

    ss.start({
      width:     document.getElementById('Width').val(),
      height:    document.getElementById('Height').val(),
      frameRate: document.getElementById('FrameRate').val(),
    })
      .then(stream => {
        document.getElementById('my-video')[0].srcObject = stream;

        if (existingCall !== null) {
          const peerid = existingCall.peer;
          existingCall.close();
          const call = peer.call(peerid, stream);
          step3(call);
        }
        localStream = stream;
      })
      .catch(error => {
          console.log(error);
      });
  });

  // End screenshare
  document.getElementById('stop-screen').onclick = function(){
    ss.stop();
    localStream.getTracks().forEach(track => track.stop());
  };

  // Camera
  document.getElementById('start-camera').onclick = function(){
    navigator.mediaDevices.getUserMedia({audio: true, video: true})
      .then(stream => {
        document.getElementById('my-video')[0].srcObject = stream;

        if (existingCall !== null) {
          const peerid = existingCall.peer;
          existingCall.close();
          const call = peer.call(peerid, stream);
          step3(call);
        }
        localStream = stream;
      })
      .catch(err => {
        document.getElementById('step1-error').show();
      });
  };

  // Start step 1
  step1();

  function step1() {
    navigator.mediaDevices.getUserMedia({audio: true, video: true})
      .then(stream => {
        document.getElementById('my-video')[0].srcObject = stream;
        localStream = stream;
        step2();
      })
      .catch(err => {
        document.getElementById('step1-error').show();
      });
  }

  function step2() {
    // Update UI
    // JQueryだとID二つ取得できるが生JSだと無理なので分けてます
    document.getElementById('step1').hide();
    document.getElementById('step3').hide();
    document.getElementById('step2').show();
  }

  function step3(call) {
    // Close any existing calls
    if (existingCall) {
      existingCall.close();
    }

    // Wait for peer's media stream
    call.on('stream', stream => {
      document.getElementById('their-video')[0].srcObject = stream;
      document.getElementById('step1').hide();
      document.getElementById('step2').hide();
      document.getElementById('step3').show();
    });

    // If the peer closes their connection
    call.on('close', step2);

    // Save call object
    existingCall = call;

    // Update UI
    document.getElementById('their-id').text(call.peer);
    document.getElementById('step1').hide();
    document.getElementById('step2').hide();
    document.getElementById('step3').show();
  }
});
