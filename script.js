const egg = document.getElementById('egg');
const music = document.getElementById('music');
const congrats = document.getElementById('congrats');
const flying = document.getElementById('flying-container');

let clickCount = 0;

egg.addEventListener('click', () => {
  clickCount++;

  // Rung trứng
  egg.classList.add('shake');
  setTimeout(() => egg.classList.remove('shake'), 200);

  if (clickCount === 3) {
    egg.src = 'images/egg-crack1.png';
  } else if (clickCount === 5) {
    egg.src = 'images/egg-crack2.png';
  } else if (clickCount === 7) {
    egg.src = 'images/egg-broken.png';
    setTimeout(showSurprise, 500);
  }
});

function showSurprise() {
  egg.style.display = 'none';
  congrats.style.display = 'inline';
  flying.style.display = 'block';
  music.play();

  // Random bay ảnh
document.querySelectorAll('.float').forEach(el => {
  const isUp = el.classList.contains('up');

  el.style.left = Math.random() * window.innerWidth + 'px';
  el.style.top = isUp ? '100vh' : '-200px';
  el.style.animationName = isUp ? 'float-up' : 'float-down';
  el.style.animationDuration = (4 + Math.random() * 3) + 's';
  el.style.animationDelay = Math.random() + 's';
});
}