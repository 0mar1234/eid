let recieve = "";
let msg = "";
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const data = params.get('n');
  const reset = params.has('r');

const message = params.get('m');

  if (reset) {
    localStorage.removeItem('code');
    localStorage.removeItem('msg');
  }


  
  
  const stored = localStorage.getItem('code');
  const storedMsg = localStorage.getItem('msg');

  if (stored) {
  msg = decodeURIComponent(escape(atob(storedMsg))); 
  }

   if (storedMsg) {
msg = decodeURIComponent(escape(atob(storedMsg)));
  }
  
  
  if (data) {
      const decoded = decodeURIComponent(escape(atob(data)));
      recieve = decoded;
      localStorage.setItem('code', data);
  }


  if (message) {
      const decoded = decodeURIComponent(escape(atob(message)));
      msg = decoded;
      localStorage.setItem('msg', message);
  }

  if(!data){
    recieve = "اخي العزيز"
  }
if(!message){
    msg = "كل عام و انت بخير"
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
