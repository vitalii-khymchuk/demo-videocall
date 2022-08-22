callFrame = window.DailyIframe.createFrame({
  iframeStyle: {
    position: 'fixed',
    // border: '1px solid black',
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
  lang: 'user',
});
callFrame.join({ url: 'https://super-company.daily.co/super-company' });

const openCallBtn = document.querySelector('.openVideoChat');
const iframeRefs = document.querySelectorAll('iframe');
const videoChatRef = iframeRefs[iframeRefs.length - 1];

videoChatRef.classList.add('is-hidden');

openCallBtn.addEventListener('click', () =>
  videoChatRef.classList.toggle('is-hidden')
);
