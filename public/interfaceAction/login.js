
const loginPageBackEvent = () => {
  back.addEventListener('click', () => {
    let prevMessage = document.getElementById('loadMessage');
    if (prevMessage !== null) {
      prevMessage.parentNode.removeChild(prevMessage);
    }
    loadMenu.innerHTML = `
      <p class="loadMenuP" id="login">Login</p>
      <p class="loadMenuP" id= "register">Register</p>
    `;
    loginClickEvent();
  })
}

const loadMessage = (message) => {
  let div = document.createElement('div');
  div.classList = 'loadMessage';
  div.innerHTML = `
    <p class="mainText">
      ${message}
    </p>
  `;
  div.id = 'loadMessage';
  let prevMessage = document.getElementById('loadMessage');
  if (prevMessage == null) {
    document.body.appendChild(div);
  } else {
    prevMessage.parentNode.removeChild(prevMessage);
    document.body.appendChild(div);
  }
}
const loginInputReader = () => {
  let userName = document.getElementById('nickname');
  let password = document.getElementById('password');
  let userInformation = new UserData(nickname.value, password.value);
  return userInformation;
}
const loginPageEnter =  (firstParam, uri) => {
  firstParam.addEventListener('click', async () => {
    let user = loginInputReader();
    response = await requestPOST(uri, user);
    if (response.answer === false) {
      if (firstParam.value === 'Login') {
        loadMessage('Wrong login or password');
      }
      if (firstParam.value === 'Register') {
        loadMessage('This name has already been used');
      }
    }
    if (response.answer === true) {
      localStorage.setItem('blood_forestUserName', user.userName);
      localStorage.setItem('blood_forestPassword', user.password);
      localStorage.setItem('blood_forestId', response.id);
      window.location.href = `http://bloodforest.social-server.online/ChooseHero`;
    }
  })
}
const loginPageEvent = (buttonValue, buttonId) => {
  loadMenu.innerHTML = `
    <p class="mainText">
      Login
    </p>
    <input type="text" maxlength="10" class="enterInputs" id="nickname">
    <p class="mainText">
      password
    </p>
    <input type="password" maxlength="10" class="enterInputs" id="password">
    <input type="button" class="enterButton" id="${buttonId}" value="${buttonValue}">
    <input type="button" class="enterButton" id="back" value="Back">
  `;
}
const loginClickEvent = () => {
  let loadMenu = document.getElementById('loadMenu');
  login.addEventListener('click', () => {
    loginPageEvent('Login', 'enter');
    let enter = document.getElementById('enter');
    let back = document.getElementById('back');
    loginPageEnter(enter, '/login');
    loginPageBackEvent();
  });
  register.addEventListener('click', () => {
    loginPageEvent('Register', 'register');
    let register = document.getElementById('register');
    let back = document.getElementById('back');
    loginPageEnter(register, '/register');
    loginPageBackEvent();
  })
};
(() => {
  let login = document.getElementById('login');
  let register = document.getElementById('register');
  loginClickEvent();
})()
