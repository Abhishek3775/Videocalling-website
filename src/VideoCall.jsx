import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len = 5) {
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  let result = '';
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  const query = url.split('?')[1];
  return new URLSearchParams(query);
}

 function VideoCall() {
  const roomID = getUrlParams().get('roomID') || randomID(6);
  const meetingRef = useRef(null);

  useEffect(() => {
    const appID = 2092148167;
    const serverSecret = "60ab4cb204d2ba757f9af6149692186c";
    const userID = randomID(5);
    const userName = `User-${userID}`;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingRef.current,
      sharedLinks: [
        {
          name: 'Personal Link',
          url: `${window.location.origin}${window.location.pathname}?roomID=${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      ref={meetingRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

export default VideoCall
