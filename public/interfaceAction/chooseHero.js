const localStorageInfo = () => {
  let userInformation = new UserData(localStorage.getItem('blood_forestUserName'), localStorage.getItem('blood_forestPassword'), localStorage.getItem('blood_forestId'));
  return userInformation;
}
const loadMessage = (message) => {
  let div = document.createElement('div');
  div.classList = 'createHeroMessage';
  div.innerHTML = `
    <p class="mainText">
      ${message}
    </p>
  `;
  div.id = 'createHeroMessage';
  let prevMessage = document.getElementById('createHeroMessage');
  if (prevMessage == null) {
    document.body.appendChild(div);
  } else {
    prevMessage.parentNode.removeChild(prevMessage);
    document.body.appendChild(div);
  }
}
const createHeroButtonClick = (userInfo) => {
  let createHeroButton = document.getElementById('createHeroButton');
  createHeroButton.onclick = async () => {
    let nameOfHero = document.getElementById('nameOfHero');
    let createHero = {
      nameOfHero: nameOfHero.value,
      userId: userInfo.userId,
      mapNumber: 1,
      left: -200,
      top: -200
    }
    let response = await requestPOST(`${url}/createHero`, createHero)
    if (response.answer) {
      window.location.reload()
    } else {
      loadMessage('This name is already taken');
    }
  }
}
const cancelButtonClick = () => {
  let cancel = document.getElementById('cancelButton');
  cancel.onclick = () => {
    let prevMessage = document.getElementById('createHeroMessage');
    if (prevMessage) {
      prevMessage.parentNode.removeChild(prevMessage);
    }
    createMenuChooseHero();
  }
}
const createHeroDiv = (mainWindow, userInfo) => {
  mainWindow.innerHTML = `
    <div class="createHeroDiv">
      <div class="createHeroModel">
        <img src="../img/previewHero.png">
      </div>
      <p class="nameOfHeroText">Enter name</p>
      <input type="text" maxlength="10" class="nameHeroInput" id="nameOfHero">

      <input type="button" class="createHeroButton" id="createHeroButton" value="Create Hero">
      <input type="button" class="createHeroButton" id="cancelButton" value="Cancel">
    </div>
  `
  cancelButtonClick();
  createHeroButtonClick(userInfo);
}

const createChooseButton = (id, value) => {
  let button = document.createElement('input');
  button.classList = 'chooseButtons';
  button.id = id;
  button.value = value;
  button.type = 'button';
  return button
}
const listOfHeroesClick = (heroDiv, listOfHeroes) => {
  heroDiv.addEventListener('click', () => {
    let otherDiv = document.getElementsByClassName('selectHeroDiv');
    for (let i = 0; i < otherDiv.length; i++) {
      otherDiv[i].classList.remove('selectHeroDiv');
    }
    heroDiv.classList.add('selectHeroDiv');
    let chooseButtonsDiv = document.getElementById('chooseButtons');
    let chooseButton = createChooseButton('selectHero', 'Choose');
    let deleteButton = createChooseButton('removeHero', 'Delete');
    chooseButton.addEventListener('click', () => {
      localStorage.setItem('blood_forestHeroName', listOfHeroes.nameOfHero);
      localStorage.setItem('blood_forestHeroId', listOfHeroes.Id);
      window.location.href = `${url}/forest`;
    });
    deleteButton.addEventListener('click', async () => {
      let response = await requestPOST(`${url}/removeHero`, listOfHeroes);
      if (response.answer) {
        window.location.reload();
      }
    });
    chooseButtonsDiv.innerHTML = '';
    chooseButtonsDiv.appendChild(chooseButton);
    chooseButtonsDiv.appendChild(deleteButton);
  })
}
const createListOfHeroes = (listOfHeroes, listOfHeroesDiv) => {
  let heroDiv = document.createElement('div');
  heroDiv.id = listOfHeroes.Id;
  heroDiv.classList = 'heroDiv';
  heroDiv.innerHTML = `
    <div class="prewPhoto">
      <img src="../img/previewHero.png">
    </div>
    <div class="heroInfo">
      <p class="mainText">${listOfHeroes.nameOfHero}</p>

    </div>
  `
  listOfHeroesClick(heroDiv, listOfHeroes);

  listOfHeroesDiv.appendChild(heroDiv);
}
const createMenuChooseHero = async () => {
  let mainWindow = document.getElementById('mainWindow');
  let userInfo = localStorageInfo();
  mainWindow.innerHTML = `
    <div class="chooseHeroDiv" id="chooseHeroDiv">
      <div id="userName">
      <p class="mainText">
        ${userInfo.userName}
      </p>
      </div>
      <div class="listOfHeroes" id="listOfHeroes">
      </div>
      <div id="chooseButtons">
      </div>
      <input type="button" class="createHeroButton" id="createHeroButton" value="Create Hero">
      <input type="button" class="ExitButton" id="Exit" value="Exit">
    </div>
  `
  let listOfHeroesDiv = document.getElementById('listOfHeroes');
  let listOfHeroes = await requestPOST(`${url}/loadHeroes`, userInfo);
  for (let i = 0; i < listOfHeroes.length; i++) {
    createListOfHeroes(listOfHeroes[i], listOfHeroesDiv);
  }
  let createHeroButton = document.getElementById('createHeroButton');
  createHeroButton.onclick = () => {
    createHeroDiv(mainWindow, userInfo);
  }
  let exit = document.getElementById('Exit');
  exit.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = url;
  })
}
window.onload = async () => {
  let user = localStorageInfo();
  let response = await requestPOST(`${url}/login`, user);
  if (response.answer) {
    createMenuChooseHero()
  } else {
    window.location.href = url;
  }
};
