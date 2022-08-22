callFrame = window.DailyIframe.createFrame({
  iframeStyle: {
    position: 'fixed',
    border: '1px solid black',
    width: '375px',
    height: '450px',
    right: '1em',
    bottom: '1em',
  },
  dailyConfig: {
    micAudioMode: 'music',
  },
  showLeaveButton: true,
  showFullscreenButton: true,
});
callFrame.join({ url: 'https://super-company.daily.co/super-company' });
