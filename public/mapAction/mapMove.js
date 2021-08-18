
const movement = (mainMap, left, top, hero, heroId) => {
  let repeat = true;
  let repeatMove = true;
  let start = 10;
  let topPosition = 0;
  let leftPosition = 0;
  let leftChanck
  let rightChanck
  let topChanck
  let bottomChanck
  addEventListener('keypress', (event) => {
     if (event.code == 'KeyA') {
       if (repeatMove) {
         repeatMove = false;
         let stepMove = setInterval(() => {
         let leftChanckCoord = Math.floor((topPosition - top + 440)/50) * 50 + Math.floor((leftPosition - left + 710)/50);
           leftChanck = document.getElementById(leftChanckCoord);
           if (leftChanck.lastChild.innerText == 'true') {
           } else {
             left = left + 5;
             mainMap.style.left = `${left}px`;
             localStorage.setItem('blood_forestLeftPosition', left);
           }
         }, 10)
         addEventListener('keyup', (event) => {
           if (event.code == 'KeyA') {
             clearTimeout(stepMove);
             repeatMove = true;
           }
         })
       }
       if (repeat) {
         repeat = false;
         let firstPhase = setTimeout(() => {
           hero.style.backgroundPosition = '-100px -50px';
         }, start);
         let secondPhase = setTimeout(() => {
           hero.style.backgroundPosition = '0px -50px';
           repeat = true;
           start = 500;
         }, (start + 500));
         addEventListener('keyup', (event) => {
           if (event.code == 'KeyA') {
             clearTimeout(firstPhase);
             clearTimeout(secondPhase);
             hero.style.backgroundPosition = '-50px -50px';
             repeat = true;
             start = 10;
           }
         })
       }
     }
     if (event.code == 'KeyW') {
       if (repeatMove) {
         repeatMove = false;
         let stepMove = setInterval(() => {
           let topChanckCoord = Math.floor((topPosition - top + 420)/50) * 50 + Math.floor((leftPosition - left + 725)/50);
             topChanck = document.getElementById(topChanckCoord);
             if (topChanck.lastChild.innerText == 'true') {
             } else {
               top = top + 5;
               mainMap.style.top = `${top}px`;
               localStorage.setItem('blood_forestTopPosition', top);
             }
         }, 10)
         addEventListener('keyup', (event) => {
           if (event.code == 'KeyW') {
             clearTimeout(stepMove);
             repeatMove = true;
           }
         })
       }
       if (repeat) {
         repeat = false;
         let firstPhase = setTimeout(() => {
           hero.style.backgroundPosition = '-100px -150px';
         }, start);
         let secondPhase = setTimeout(() => {
           hero.style.backgroundPosition = '0px -150px';
           repeat = true;
           start = 500;
         }, (start + 500));
         addEventListener('keyup', (event) => {
           if (event.code == 'KeyW') {
             clearTimeout(firstPhase);
             clearTimeout(secondPhase);
             hero.style.backgroundPosition = '-50px -150px';
             repeat = true;
             start = 10;
           }
         })
       }
     }
     if (event.code == 'KeyD') {
       if (repeatMove) {
         repeatMove = false;
         let stepMove = setInterval(() => {
           let rightChanckCoord = Math.floor((topPosition - top + 440)/50) * 50 + Math.floor((leftPosition - left + 740)/50);
             rightChanck = document.getElementById(rightChanckCoord);
             if (rightChanck.lastChild.innerText == 'true') {
             } else {
               left = left - 5;
               mainMap.style.left = `${left}px`;
               localStorage.setItem('blood_forestLeftPosition', left);
             }

         }, 10)
         addEventListener('keyup', (event) => {
           if (event.code == 'KeyD') {
             clearTimeout(stepMove);
             repeatMove = true;
           }
         })
       }
       if (repeat) {
         repeat = false;
         let firstPhase = setTimeout(() => {
           hero.style.backgroundPosition = '-100px -100px';
         }, start);
         let secondPhase = setTimeout(() => {
           start = 500;
           hero.style.backgroundPosition = '0px -100px';
           repeat = true;
         }, (start + 500));
         addEventListener('keyup', (event) => {
           if (event.code == 'KeyD') {
             clearTimeout(firstPhase);
             clearTimeout(secondPhase);
             hero.style.backgroundPosition = '-50px -100px';
             repeat = true;
             start = 10;
           }
         })
       }

     }
     if (event.code == 'KeyS') {
       if (repeatMove) {
         repeatMove = false;
         let stepMove = setInterval(() => {
           let bottomChanckCoord = Math.floor((topPosition - top + 450)/50) * 50 + Math.floor((leftPosition - left + 725)/50);
             bottomChanck = document.getElementById(bottomChanckCoord);
             if (bottomChanck.lastChild.innerText == 'true') {
             } else {
               top = top - 5;
               mainMap.style.top = `${top}px`;
               localStorage.setItem('blood_forestTopPosition', top);
             }
         }, 10)
         addEventListener('keyup', (event) => {
           if (event.code == 'KeyS') {
             clearTimeout(stepMove);
             repeatMove = true;
           }
         })
       }
       if (repeat) {
         repeat = false;
         let firstPhase = setTimeout(() => {
           hero.style.backgroundPosition = '-100px 0px';
         }, start);
         let secondPhase = setTimeout(() => {
           hero.style.backgroundPosition = '0px 0px';
           repeat = true;
           start = 500;
         }, (start + 500));
         addEventListener('keyup', (event) => {
           if (event.code == 'KeyS') {
             clearTimeout(firstPhase);
             clearTimeout(secondPhase);
             hero.style.backgroundPosition = '-50px 0px';
             repeat = true;
             start = 10;
           }
         })
       }
     }
  })
  setInterval(async () => {
    let position = {
      leftPosition: localStorage.getItem('blood_forestLeftPosition'),
      topPosition: localStorage.getItem('blood_forestTopPosition'),
      heroId: heroId
    }
    let response = await fetch('/savePosition', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(position)
    })
    let result = await response.json();
  }, 1000)
}


window.onload = async () => {
  let mainMap = document.getElementById('mainMap');
  let heroId = localStorage.getItem('blood_forestHeroId');
  let heroInfo = {
    id: heroId
  }
  let response = await fetch('/loadPosition', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(heroInfo)
  });
  let result = await response.json();
  let left = result.leftPosition;
  let top = result.topPosition;
  let nameOfHero = localStorage.getItem('blood_forestHeroName');
  let hero = document.createElement('div');
  hero.id = 'hero';
  hero.classList = 'hero';
  hero.innerHTML = `
  <div class="plaseForName">
    <p class="heroesName">
      ${nameOfHero}
    </p>
  </div>
  `
  console.log();
  document.body.appendChild(hero);
  hero.style.left = `700px`;
  hero.style.top = `400px`;
  movement(mainMap, left, top, hero, heroId);
}
