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
const iframeRef = document.querySelectorAll('iframe')[length - 1];

iframeRef.classList.add('is-hidden');

openCallBtn.addEventListener('click', () =>
  iframeRef.classList.toggle('is-hidden')
);
