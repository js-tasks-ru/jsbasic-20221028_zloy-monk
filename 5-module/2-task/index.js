function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  button.addEventListener('click', () => {
    if (text.hidden === true) {
      text.hidden = false;
    } else if (text.hidden === false) {
      text.hidden = true;
    }
  })
}
