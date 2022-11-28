let htmlTemplates = `
    <div class="color-extension">
      <button type="button" class="btnGrey" data-color="#22272e" >Change</button>
      <button type="button" class="btnDefault" data-color="#fff" >Reset</button>
    </div>
`;

window.onload = function () {
  const wrapperObject = document.querySelector('body>div');

  if (wrapperObject !== null) {
    wrapperObject.innerHTML += htmlTemplates;
  }

  const buttonObject = document.querySelectorAll('.color-extension button');
  const getBody = document.getElementsByTagName('body')[0];
  
  if (buttonObject !== null) {
    buttonObject.forEach((item) => {
      item.onclick = () => {
        let buttonObjectActive = document.querySelector('.color-extension button.active');
        if (buttonObjectActive !== null) {
          buttonObjectActive.classList.remove('active');
        }
        item.classList.add('active');

        let color = item.getAttribute('data-color');
        if (color !== null) {
          if (color === '#22272e') {
            getBody.style.backgroundColor = color;
            getBody.style.fontWeight = 'bold';
            getBody.style.color = 'rgb(89, 170, 89)';
          } else {
            getBody.style.backgroundColor = color;
            getBody.style.fontWeight = 'normal';
            getBody.style.color = '#000';
          }
        }
      };
    });
  }
}