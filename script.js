let recieve = "";
let msg = "";
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const data = params.get('n');
  const message = params.get('m');
  const reset = params.has('r');

  if (reset) {
    localStorage.removeItem('code');
    localStorage.removeItem('msg');
  }

  const storedCode = localStorage.getItem('code');
  const storedMsg = localStorage.getItem('msg');

  if (storedCode) {
    try { recieve = decodeURIComponent(atob(storedCode)); } catch {}
  } else if (data) {
    try { 
      recieve = decodeURIComponent(atob(data));
      localStorage.setItem('code', data);
    } catch {}
  } else {
    recieve = "أخي العزيز";
  }

  if (storedMsg) {
    try { msg = decodeURIComponent(atob(storedMsg)); } catch {}
  } else if (message) {
    try { 
      msg = decodeURIComponent(atob(message));
      localStorage.setItem('msg', message);
    } catch {}
  } else {
    msg = "كل عام و انت بخير";
  }
});

const scrollT = function (elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: 'smooth' });
};
const pre = document.getElementById('pre');
for(let i=0; i<200; i++){
  const star = document.createElement('div');
  star.className = 'star';
  
  star.style.position = 'absolute';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 2 + 's';
  star.style.width = star.style.height = (Math.random()*2+1) + 'px';
  pre.appendChild(star);
}

const typewrite = function (text, output, speed = 100) {
  const content = document.getElementById(output);
  let i = 0;
  const interval = setInterval(() => {
    content.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, speed);
}

const moon = document.getElementById('moon');
const preContainer = document.getElementById('pre');
const content = document.getElementById('content');
const arrow = document.getElementById('arrow_down');
moon.addEventListener('click', function() {
  // preContainer.style.display = 'none';
  moon.classList.remove('pulse');
  preContainer.classList.add('slideDown');
setTimeout(() => {
  const audio = new Audio('aud.mp3');
  audio.play();
  
}, 250);

  
arrow.classList.add('fade');
arrow.addEventListener('animationend', function() {
  arrow.classList.remove('fade');
  arrow.classList.add('arrow_down');
  })



  preContainer.addEventListener('animationend', function() {
    preContainer.style.display = 'none';
    moon.classList.add('float')
    document.body.style.overflowY = 'scroll';
    typewrite(recieve, 'name', 100);
    setTimeout(() => {
  typewrite('عيد مبارك', 'sub', 150);
}, 1500);
  })

  content.style.display = 'block';

  setTimeout(() => {
    document.getElementById('fact').style.display = 'block';
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').textContent = msg;

  }, 5000);
}, { once: true });

document.addEventListener("contextmenu", e => e.preventDefault());
