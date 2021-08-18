const takeDamage = (dmg) => {
  hpDecrease(dmg)
}
let cooldown = true;
const takeDamageEnemy = (div, enemyHPMax) =>{
  if (div !== undefined) {
    let enemyHPNow = enemyHPMax;

    let enemyHPNowDiv = div.children[0].children[0];
    let enemyHPNowWidthFromLS = localStorage.getItem(`blood_forestEnemyHPNow${div.id}`);
    if (enemyHPNowWidthFromLS !== null) {
      enemyHPNowDiv.style.width = `${enemyHPNowWidthFromLS / (enemyHPMax / 100)}px`
    }
    addEventListener('keydown', (event) => {
      let enemyHPNowFromLS = localStorage.getItem(`blood_forestEnemyHPNow${div.id}`);
      if (enemyHPNowFromLS !== null) {
        enemyHPNow = enemyHPNowFromLS;
      }
      if (event.code == 'KeyE') {
        if (cooldown) {
          cooldown = false;
          let enemyHPAfter = makeDMG(enemyHPNow);
          enemyHPNowDiv.style.width = `${enemyHPAfter / (enemyHPMax / 100)}px`
          localStorage.setItem(`blood_forestEnemyHPNow${div.id}`, enemyHPAfter);
          setTimeout(() => {
            cooldown = true;
          }, 1000)
        }

      }
    })
  }
}
