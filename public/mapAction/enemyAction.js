class EnemyObj {
  constructor(classList, id, background, firstPosition, left, top, moveArrPosition){
    this.classList = classList;
    this.id = id;
    this.background = background;
    this.firstPosition = firstPosition;
    this.left = left;
    this.top = top;
    this.moveArrPosition = moveArrPosition;
  }
}

const enemyAgr = (moveArrPosition, left, top, background, div) => {
  let repeatLeft = true;
  let checkPositionInterval = setInterval(() => {
    let enemyPHAmount = localStorage.getItem(`blood_forestEnemyHPNow${div.id}`);
    if ((enemyPHAmount <= 0) && (enemyPHAmount !== null)) {
      clearTimeout(checkPositionInterval);
      setTimeout(() => {
        div.style.background = `url(${background[2]})`;
        div.style.backgroundPosition = moveArrPosition[2][0];
      }, 1100)
      setTimeout(() => {
        div.style.backgroundPosition = moveArrPosition[2][1];
      }, 1200)
      setTimeout(() => {
        div.style.backgroundPosition = moveArrPosition[2][2];
      }, 1300)
      setTimeout(() => {
        div.style.backgroundPosition = moveArrPosition[2][3];
      }, 1400)
      setTimeout(() => {
        div.style.backgroundPosition = moveArrPosition[2][4];
      }, 1500)
      setTimeout(() => {
        div.style.backgroundPosition = moveArrPosition[2][5];
      }, 1600)
      setTimeout(() => {
        div.style.backgroundPosition = moveArrPosition[2][6];
        localStorage.removeItem(`blood_forestEnemyHPNow${div.id}`);
        localStorage.setItem(`blood_forestLeftPosition${div.id}`, 1500);
        localStorage.setItem(`blood_forestTopPosition${div.id}`, 600);
      }, 1700)
    }
    let heroPositionLeft = -(+localStorage.getItem('blood_forestLeftPosition') - 725);
    let heroPositionTop = -(+localStorage.getItem('blood_forestTopPosition') - 425);
    let agrRadiusLeft = left - heroPositionLeft;
    let agrRadiusTop = top - heroPositionTop;

    if ((agrRadiusLeft < 200) && (agrRadiusTop < 200) && (agrRadiusLeft > -380) && (agrRadiusTop > -360)) {
      if (heroPositionLeft < left) {
        left = left - 2;
        div.style.left = `${left}px`;
        localStorage.setItem(`blood_forestLeftPosition${div.id}`, left);
        if (repeatLeft) {
          repeatLeft = false;
        setTimeout(() => {
            div.style.transform = 'scale(-1, 1)';
            div.style.background = `url(${background[0]})`;
            div.style.backgroundPosition = moveArrPosition[0][0];
          }, 100)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][1];
          }, 200)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][2];
          }, 300)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][3];
          }, 400)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][4];
          }, 500)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][5];
          }, 600)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][6];
            repeatLeft = true;
          }, 700)
        }
      }
      if (heroPositionTop < (top + 30)) {
        top = top - 2;
        div.style.top = `${top}px`;
        localStorage.setItem(`blood_forestTopPosition${div.id}`, top);
      }
      if (heroPositionLeft > (left + 180)) {
        left = left + 2;
        div.style.left = `${left}px`;
        localStorage.setItem(`blood_forestLeftPosition${div.id}`, left);
        if (repeatLeft) {
          repeatLeft = false;
          setTimeout(() => {
            div.style.transform = 'scale(1, 1)';
            div.style.background = `url(${background[0]})`;
            div.style.backgroundPosition = moveArrPosition[0][0];
          }, 100)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][1];
          }, 200)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][2];
          }, 300)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][3];
          }, 400)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][4];
          }, 500)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][5];
          }, 600)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[0][6];
            repeatLeft = true;
          }, 700)
        }
      }
      if (heroPositionTop > (top + 160)) {
        top = top + 2;
        div.style.top = `${top}px`;
        localStorage.setItem(`blood_forestTopPosition${div.id}`, top);
      }
      if ((heroPositionLeft >= left) && (heroPositionTop >= (top + 30)) && (heroPositionLeft <= (left + 90)) && (heroPositionTop <= (top + 160))) {
        if (repeatLeft) {
          repeatLeft = false;
          setTimeout(() => {
            div.style.transform = 'scale(-1, 1)';
            div.style.background = `url(${background[1]})`;
            div.style.backgroundPosition = moveArrPosition[1][0];
          }, 1100)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][1];
          }, 1200)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][2];
          }, 1300)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][3];
          }, 1400)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][4];
          }, 1500)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][5];
          }, 1600)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][6];
            takeDamage(10);
            repeatLeft = true;
          }, 1700)
        }
      }
      if ((heroPositionLeft >= (left + 90)) && (heroPositionTop >= (top + 30)) && (heroPositionLeft <= (left + 180)) && (heroPositionTop <= (top + 160))) {

        if (repeatLeft) {
          repeatLeft = false;
          setTimeout(() => {
            div.style.transform = 'scale(1, 1)';
            div.style.background = `url(${background[1]})`;
            div.style.backgroundPosition = moveArrPosition[1][0];
          }, 1100)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][1];
          }, 1200)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][2];
          }, 1300)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][3];
          }, 1400)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][4];
          }, 1500)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][5];
          }, 1600)
          setTimeout(() => {
            div.style.backgroundPosition = moveArrPosition[1][6];
            takeDamage(10);
            repeatLeft = true;
          }, 1700)
        }
      }
    }
  }, 30)

}
const startSkelet = new EnemyObj(
  'enemySkelet',
  'startSkelet',
  ['./img/enemySkelet/skeletWalk.png', './img/enemySkelet/SkeletAttack.png', './img/enemySkelet/skeletDeath.png'],
  '-15px 10px',
  1500,
  600,
  [
    ['-10px -186px', '-10px -382px', '-10px -578px', '-10px -774px', '-10px -970', '-10px -1166px', '-10px -1362px'],
    ['-10px -186px', '-10px -382px', '-10px -578px', '-10px -774px', '-10px -970', '-10px -1166px', '-10px 10px'],
    ['-10px -186px', '-10px -382px', '-10px -578px', '-10px -774px', '-10px -970', '-10px -1166px', '-10px -1362px'],
  ],
)
const startSkelet1 = new EnemyObj(
  'enemySkelet',
  'startSkelet1',
  ['./img/enemySkelet/skeletWalk.png', './img/enemySkelet/skeletAttack.png',],
  '-15px 10px',
  1900,
  600,
  [
    ['-10px -186px', '-10px -382px', '-10px -578px', '-10px -774px', '-10px -970', '-10px -1166px', '-10px -1362px'],
    ['-10px -186px', '-10px -382px', '-10px -578px', '-10px -774px', '-10px -970', '-10px -1166px', '-10px 10px']
  ],
)
const createEnemy = (enemyObject) => {
  let left, top;
  let div = document.createElement('div');
  div.classList = enemyObject.classList;
  div.id = enemyObject.id;
  let enemyHPMax = 200;
  div.style.background = `url(${enemyObject.background[0]})`;
  div.style.backgroundPosition = enemyObject.firstPosition;
  let leftFromLS = localStorage.getItem(`blood_forestLeftPosition${div.id}`);
  let topFromLS = localStorage.getItem(`blood_forestTopPosition${div.id}`);
  if ((leftFromLS !== null) && (topFromLS !== null)) {
    left = +leftFromLS;
    top = +topFromLS;
  } else {
    left = enemyObject.left;
    top = enemyObject.top
  }
  enemyAgr(enemyObject.moveArrPosition, left, top,  enemyObject.background,  div);
  div.style.left = `${left}px`;
  div.style.top = `${top}px`;





  div.innerHTML = `
    <div class="enemyHP" id="enemyHP${enemyObject.id}" >
      <div class="enemyHPNow" style="width: 100px" id="enemyHPNow${enemyObject.id}">
    </div>
  `
  div.addEventListener('click', function () {
    this.children[0].style.display = 'block';
    takeDamageEnemy(this, enemyHPMax);
  })

  return div
}

const loadEnemy = () => {
  let mainMap = document.getElementById('mainMap');
  mainMap.appendChild(createEnemy(startSkelet));
}
window.addEventListener('load', loadEnemy())
