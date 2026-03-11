const recieve = " ماما";

document.getElementById('nameMessage').textContent = `,${recieve}`;


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
}, { once: true });

const hint = document.getElementById('hint');
