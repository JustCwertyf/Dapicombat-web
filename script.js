  const clickerButton = document.querySelector('.clicker-button');
  const scoreElement = document.getElementById('score');
  let score = parseInt(getCookie('score')) || 0; 

  function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].trim();
      if (cookiePair.startsWith(name + '=')) {
        return cookiePair.substring(name.length + 1);
      }
    }
    return null;
  }

  function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
  }

  scoreElement.textContent = score;

  clickerButton.addEventListener('click', () => {
    score++;
    setCookie('score', score); 
    scoreElement.textContent = score;
  });
