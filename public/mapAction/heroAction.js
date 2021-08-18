let hpMax, hpNow;
const hpDecrease =  (amount) => {
  hpNow = hpNow - amount
  if (hpNow <= 0) {
    localStorage.setItem('blood_forestHeroHP', 100);
    localStorage.setItem('blood_forestTopPosition', -200);
    localStorage.setItem('blood_forestLeftPosition', -200);
    let darkness = document.getElementById('darkness');
    darkness.style.display = 'block';
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  } else {
    localStorage.setItem('blood_forestHeroHP', hpNow);
    let heroHP = document.getElementById('hpNow');
    heroHP.style.width = `${(hpNow / hpMax) * 100}px`;
  }

}
const makeDMG = (enemyHPNow) =>{
  let enemyHPAfter = enemyHPNow - 20;
  return enemyHPAfter
}
window.addEventListener('load', async () => {
  let heroId = {
    id: localStorage.getItem('blood_forestHeroId')
  }
  const response = await requestPOST(`${url}/loadHeroStat`, heroId);
  hpMax = response.hpMax;
  hpNow = response.hpNow;
  localStorage.setItem('blood_forestHeroHP', hpNow)
  let heroHP = document.createElement('div');
  heroHP.classList = 'heroHP';
  heroHP.innerHTML = `
  <div class="hpNow" id="hpNow" style="width: ${(hpNow / hpMax) * 100}px">
  </div>
  `
  let hero
  setTimeout(() => {
    hero = document.getElementById('hero');
    hero.appendChild(heroHP);
  }, 1000)
  setInterval( async () => {
    let response = await requestPOST('/saveHP', {
      hpNow: localStorage.getItem('blood_forestHeroHP'),
      heroId: localStorage.getItem('blood_forestHeroId')
    })
  }, 500)
})
