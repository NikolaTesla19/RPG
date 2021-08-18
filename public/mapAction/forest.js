"use strict";
const house1Obj = {
  houseChanck1: '-600px -1150px',
  houseChanck2: '-900px -1150px',
  houseChanck3: '-650px -1150px',
  houseChanck4: '-750px -1150px',
  houseChanck5: '-750px -1150px',
  houseChanck6: '-850px -1150px',
  houseChanck7: '-600px -1100px',
  houseChanck8: '-900px -1100px',
  houseChanck9: '-750px -1100px',
  houseChanck10: '-800px -1100px',
  houseChanck11: '-750px -1100px',
  houseChanck12: '-850px -1100px',
  houseChanck13: '-600px -950px',
  houseChanck14: '-650px -950px',
  houseChanck15: '-700px -950px',
  houseChanck16: '-750px -950px',
  houseChanck17: '-800px -950px',
  houseChanck18: '-850px -950px',
  houseChanck19: '-600px -900px',
  houseChanck20: '-650px -900px',
  houseChanck21: '-700px -900px',
  houseChanck22: '-750px -900px',
  houseChanck23: '-800px -900px',
  houseChanck24: '-850px -900px',
  houseChanck25: '-600px -850px',
  houseChanck26: '-650px -850px',
  houseChanck27: '-700px -850px',
  houseChanck28: '-750px -850px',
  houseChanck29: '-800px -850px',
  houseChanck30: '-850px -850px',
  houseChanck31: '-600px -800px',
  houseChanck32: '-650px -800px',
  houseChanck33: '-700px -800px',
  houseChanck34: '-750px -800px',
  houseChanck35: '-800px -800px',
  houseChanck36: '-850px -800px',
  houseChanck37: '-600px -750px',
  houseChanck38: '-650px -750px',
  houseChanck39: '-700px -750px',
  houseChanck40: '-750px -750px',
  houseChanck41: '-800px -750px',
  houseChanck42: '-850px -750px',
  houseChanck43: '-650px -700px',
  houseChanck44: '-700px -700px',
  houseChanck45: '-750px -700px',
  houseChanck46: '-800px -700px',
  houseChanck47: '-700px -650px',
  houseChanck48: '-750px -650px',
}
const createMoveValue = (value) => {
  let div = document.createElement('div');
  div.innerText = value
  div.style.display = 'none';
  return div
}
const bridge1Obj = {
  chank1: '0px 0px',
  chank2: '-50px 0px',
  chank3: '-100px 0px',
  chank4: '0px -50px',
  chank5: '-50px -50px',
  chank6: '-100px -50px',
  chank7: '0px -100px',
  chank8: '-50px -100px',
  chank9: '-100px -100px',
  chank10: '0px -150px',
  chank11: '-50px -150px',
  chank12: '-100px -150px'

}
const createBbridge1 = (i, chank, bridge1Obj, ...coords) => {
  switch (i) {
    case coords[0]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank1, 'url(../img/bridge.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[1]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank2, 'url(../img/bridge.png)'));
      chank.appendChild(createMoveValue('true'))
      break
    case coords[2]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank3, 'url(../img/bridge.png)'));
      chank.appendChild(createMoveValue('true'))
      break
    case coords[3]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank4, 'url(../img/bridge.png)'));
      break
    case coords[4]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank5, 'url(../img/bridge.png)'));
      break
    case coords[5]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank6, 'url(../img/bridge.png)'));
      chank.appendChild(createMoveValue('true'))
      break
    case coords[6]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank7, 'url(../img/bridge.png)'));
      break
    case coords[7]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank8, 'url(../img/bridge.png)'));
      break
    case coords[8]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank9, 'url(../img/bridge.png)'));
      chank.appendChild(createMoveValue('true'))
      break
    case coords[9]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank10, 'url(../img/bridge.png)'));
      chank.appendChild(createMoveValue('true'))
      break
    case coords[10]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank11, 'url(../img/bridge.png)'));
      chank.appendChild(createMoveValue('true'))
      break
    case coords[11]:
      chank.appendChild(objectsFunction('house', bridge1Obj.chank12, 'url(../img/bridge.png)'));
      chank.appendChild(createMoveValue('true'))
      break

  }
}
const createHouse1 = (i, chank, house1Obj, ...coords) => {
  switch (i) {
    case coords[0]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck1, 'url(../img/houses.png)'));
      break;
    case coords[1]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck2, 'url(../img/houses.png)'));
      break;
    case coords[2]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck3, 'url(../img/houses.png)'));
      break;
    case coords[3]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck4, 'url(../img/houses.png)'));
      break;
    case coords[4]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck5, 'url(../img/houses.png)'));
      break;
    case coords[5]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck6, 'url(../img/houses.png)'));
      break;
    case coords[6]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck7, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[7]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck8, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[8]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck9, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[9]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck10, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[10]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck11, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[11]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck12, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[12]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck13, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[13]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck14, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[14]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck15, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[15]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck16, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[16]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck17, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[17]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck18, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[18]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck19, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[19]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck20, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[20]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck21, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[21]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck22, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[22]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck23, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[23]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck24, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[24]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck25, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[25]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck26, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[26]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck27, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[27]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck28, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[28]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck29, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[29]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck30, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[30]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck31, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[31]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck32, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[32]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck33, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[33]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck34, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[34]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck35, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[35]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck36, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[36]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck37, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[37]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck38, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[38]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck39, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[39]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck40, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[40]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck41, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[41]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck42, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[42]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck43, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[43]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck44, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[44]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck45, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[45]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck46, 'url(../img/houses.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[46]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck47, 'url(../img/houses.png)'));
      break;
    case coords[47]:
      chank.appendChild(objectsFunction('house', house1Obj.houseChanck48, 'url(../img/houses.png)'));
      break;
  }
}
const objectsFunction = (classList, backgroundPosition, backgroundUrl) => {
  let div = document.createElement('div');
  div.classList = classList;
  div.style.background = backgroundUrl;
  div.style.backgroundPosition = backgroundPosition;
  return div
}
class CreateObjTree {
  constructor (sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7, sprite8) {
    this.sprite1 = sprite1;
    this.sprite2 = sprite2;
    this.sprite3 = sprite3;
    this.sprite4 = sprite4;
    this.sprite5 = sprite5;
    this.sprite6 = sprite6;
    this.sprite7 = sprite7;
    this.sprite8 = sprite8;
  }
}
const createTreeFunc = (i, chank, rightHandEmptyTree, coord1, coord2, coord3, coord4, coord5, coord6, coord7, coord8, eve) => {
  switch (i) {
    case coord1:
      chank.appendChild(objectsFunction('tree', rightHandEmptyTree.sprite1, 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coord2:
      chank.appendChild(objectsFunction('tree', rightHandEmptyTree.sprite2, 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coord3:
      chank.appendChild(objectsFunction('tree', rightHandEmptyTree.sprite3, 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coord4:
      chank.appendChild(objectsFunction('tree', rightHandEmptyTree.sprite4, 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coord5:
      chank.appendChild(objectsFunction('tree', rightHandEmptyTree.sprite5, 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coord6:
      chank.appendChild(objectsFunction('tree', rightHandEmptyTree.sprite6, 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coord7:
      chank.appendChild(objectsFunction('tree', rightHandEmptyTree.sprite7, 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coord8:
      chank.appendChild(objectsFunction('tree', rightHandEmptyTree.sprite8, 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
  }
}
const fance1Obj = {
  sprite1: '-500px -400px',
  sprite2: '-350px -400px',
  sprite3: '-350px -400px'
}
const fance2Obj = {
  sprite1: '-350px -400px',
  sprite2: '-350px -400px',
  sprite3: '-450px -453px'
}
const createFance = (i, chank, fance1Obj, ...coords) => {
  switch (i) {
    case coords[0]:
      chank.appendChild(objectsFunction('fence', fance1Obj.sprite1, 'url(../img/fence.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[1]:
      chank.appendChild(objectsFunction('fence', fance1Obj.sprite2, 'url(../img/fence.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[2]:
      chank.appendChild(objectsFunction('fence', fance1Obj.sprite3, 'url(../img/fence.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[3]:
      chank.appendChild(objectsFunction('fence', fance1Obj.sprite4, 'url(../img/fence.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[4]:
      chank.appendChild(objectsFunction('fence', fance1Obj.sprite5, 'url(../img/fence.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[5]:
      chank.appendChild(objectsFunction('fence', fance1Obj.sprite6, 'url(../img/fence.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[6]:
      chank.appendChild(objectsFunction('fence', fance1Obj.sprite7, 'url(../img/fence.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
    case coords[7]:
      chank.appendChild(objectsFunction('fence', fance1Obj.sprite8, 'url(../img/fence.png)'));
      chank.appendChild(createMoveValue('true'))
      break;
  }
}
const waterArr = [
  [
    45, 46, 47, 48, 49, 50,
    95, 96, 97, 98, 99, 100,
    145, 146, 147, 148, 149, 150,
    195, 196, 197, 198, 199, 200,
    245, 246, 247, 248, 249, 250,
    295, 296, 297, 298, 299, 300,
    345, 346, 347, 348, 349, 350,
    395, 396, 397, 398, 399, 400,
    445, 446, 447, 448, 449, 450,
    495, 496, 497, 498, 499, 500,
    545, 546, 547, 548, 549, 550,
    595, 596, 597, 598, 599, 600,
    645, 646, 647, 648, 649, 650,
    695, 696, 697, 698, 699, 700,
    745, 746, 747, 748, 749, 750,
    795, 796, 797, 798, 799, 800,
    845, 846, 847, 848, 849, 850,
    895, 896, 897, 898, 899, 900,
    945, 946, 947, 948, 949, 950,
    995, 996, 997, 998, 999, 1000,
    1045, 1046, 1047, 1048, 1049, 1050,
    1095, 1096, 1097, 1098, 1099, 1100,
    1145, 1146, 1147, 1148, 1149, 1150,
    1195, 1196, 1197, 1198, 1199, 1200,
    1245, 1246, 1247, 1248, 1249, 1250,
    1295, 1296, 1297, 1298, 1299, 1300,
    1345, 1346, 1347, 1348, 1349, 1350,
    1395, 1396, 1397, 1398, 1399, 1300,

  ],
  [],
  [],
  [],
  [44, 94, 144, 194, 244, 294, 344, 394, 444, 494, 544, 594, 644, 694, 744, 794, 844, 894, 944, 994, 1044, 1094, 1144, 1194, 1244, 1294, 1344, 1394]
];
const createWater = (i, chank, waterArr) => {
  switch (true) {
    case waterArr[0].includes(i):
      chank.appendChild(objectsFunction('water', '-50px -800px', 'url(../img/forest1.png)'));
      chank.appendChild(createMoveValue('true'));
      break;
    case waterArr[4].includes(i):
      chank.appendChild(objectsFunction('water', '0px -800px', 'url(../img/forest1.png)'));
      break;
    default:

  }
}
const objOfRoad = [
  [568, 618, 668, 669, 670, 671, 672, 673, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 687, 688,
  638, 639, 640, 641, 642, 643, 689, 690, 691, 692, 693],

  [769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 739, 740, 741, 742, 743],
  [567, 617, 667],
  [620, 621, 622, 623, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 588, 589, 590, 591, 592, 593],
  [569],

  [718],
  [686, 637],
  [619, 674],
  [738],

  [624],
  [788],
  [717, 768],
  [636, 587]
]
const createGrassRandom = (max, min, i, objOfRoad) => {
  let n = Math.floor( Math.random() * (max - min) + min);
  switch (true) {
    case objOfRoad[0].includes(i):
      return '-350px -800px'
      break;
    case objOfRoad[1].includes(i):
      return '-600px -750px'
      break;
    case objOfRoad[2].includes(i):
      return '-650px -800px'
      break;
    case objOfRoad[3].includes(i):
      return '-600px -850px'
      break;
    case objOfRoad[4].includes(i):
      return '-550px -800px'
      break;
    case objOfRoad[5].includes(i):
      return '-650px -750px'
      break;
    case objOfRoad[6].includes(i):
      return '-650px -850px'
      break;
    case objOfRoad[7].includes(i):
      return '-550px -850px'
      break;
    case objOfRoad[8].includes(i):
      return '-550px -750px'
      break;
    case objOfRoad[9].includes(i):
      return '-750px -750px'
      break;
    case objOfRoad[10].includes(i):
      return '-750px -800px'
      break;
    case objOfRoad[11].includes(i):
      return '-700px -800px'
      break;
    case objOfRoad[12].includes(i):
      return '-700px -750px'
      break;

    default:
      switch (n) {
        case 1:
          return '-350px -850px'
          break;
        case 2:
          return '-400px -850px'
          break;
        case 3:
          return '-450px -850px'
          break;
        case 4:
          return '-500px -850px'
          break;
      }
  }

}
let fullTree1 = new CreateObjTree('-200px 0px', '-250px 0px', '-200px -50px', '-250px -50px', '-250px 0px', '-200px 0px', '-250px -150px', '-200px -150px');

let rightHandEmptyTree1 = new CreateObjTree('-200px 0px', '-250px 0px', '-200px -50px', '-400px -250px', '-250px 0px', '-350px -200px', '-400px -250px', '-350px -250px');
let rightHandEmptyTree2 = new CreateObjTree('-200px 0px', '-350px 0px', '-200px -50px', '-350px -50px', '-250px 0px', '-350px -200px', '-400px -250px', '-350px -250px');
let rightHandEmptyTree3 = new CreateObjTree('-200px 0px', '-350px 0px', '-200px -50px', '-350px -50px', '-250px 0px', '-200px 0px', '-250px -150px', '-200px -50px');
let rightHandEmptyTree4 = new CreateObjTree('-200px 0px', '-250px 0px', '-450px -250px', '-400px -250px', '-200px -200px', '-350px -200px', '-200px -250px', '-350px -250px')
let topHandEmptyTree1 = new CreateObjTree('-300px 0px', '-350px 0px', '-300px -50px', '-350px -50px', '-250px 0px', '-200px 0px', '-250px -150px', '-200px -50px');
let leftHandEmptyTree1 = new CreateObjTree('-200px 0px', '-250px 0px', '-450px -250px', '-400px -250px', '-300px -200px', '-200px 0px', '-300px -250px', '-450px -250px');
let leftHandEmptyTree2 = new CreateObjTree('-300px 0px', '-250px 0px', '-300px -50px', '-250px -50px', '-300px -200px', '-200px 0px', '-300px -250px', '-450px -250px');
let leftHandEmptyTree3 = new CreateObjTree('-200px 0px', '-250px 0px', '-450px -250px', '-400px -250px', '-200px -200px', '-250px -200px', '-200px -250px', '-250px -250px');
let leftHandEmptyTree4 = new CreateObjTree('-200px 0px', '-250px 0px', '-450px -250px', '-400px -250px', '-300px -200px', '-250px -200px', '-300px -250px', '-250px -250px');

let fullTree1HalfBottom = new CreateObjTree('-250px -200px', '-200px -200px', '-250px -250px', '-200px -250px');
let rightHandEmptyTreeHalf1 = new CreateObjTree('-350px -200px', '-350px -250px', '-350px 0px', '-350px -50px');

let onlyRightHandEmptyTreeHalf1 = new CreateObjTree('-350px -200px', '-350px -250px');
let onlyRightHandEmptyTreeHalf2 = new CreateObjTree('-350px 0px', '-350px -50px');
let onlyLeftHandEmptyTreeHalf1 = new CreateObjTree('-300px -200px', '-300px -250px');


let rightHandEmptyTree1Half = new CreateObjTree('-350px -200px', '-350px -250px', '-350px 0px', '-350px -50px');
window.addEventListener('load', async () => {
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
  mainMap.style.left = `${left}px`;
  mainMap.style.top = `${top}px`;

  for (let i = 0; i < 1400; i++) {
    let chank = document.createElement('div');
    chank.classList = 'chanck';
    chank.appendChild(objectsFunction('grass', createGrassRandom(4, 1, i, objOfRoad), 'url(../img/forest1.png)'));
    chank.id = `${i}`;

    createWater(i, chank, waterArr);
    createHouse1(i, chank, house1Obj, 567, 568, 569, 570, 571, 572, 517, 518, 519, 520, 521, 522, 467, 468, 469, 470, 471, 472, 417, 418, 419, 420, 421, 422, 367, 368, 369, 370, 371, 372, 317, 318, 319, 320, 321, 322, 267, 268, 269, 270, 271, 272, 218, 219, 220, 221, 169, 170);
    createFance(i, chank, fance1Obj, 514, 515, 516);
    createFance(i, chank, fance2Obj, 523, 524, 525);
    createBbridge1(i, chank, bridge1Obj, 593, 594, 595, 643, 644, 645, 693, 694, 695, 743, 744, 745);

    createTreeFunc(i, chank, fullTree1, 0, 1, 50, 51, 100, 101, 150, 151);
    createTreeFunc(i, chank, fullTree1, 2, 3, 52, 53, 102, 103, 152, 153);
    createTreeFunc(i, chank, fullTree1, 4, 5, 54, 55, 104, 105, 154, 155);
    createTreeFunc(i, chank, fullTree1, 6, 7, 56, 57, 106, 107, 156, 157);
    createTreeFunc(i, chank, fullTree1, 8, 9, 58, 59, 108, 109, 158, 159);
    createTreeFunc(i, chank, fullTree1, 10, 11, 60, 61, 110, 111, 160, 161);
    createTreeFunc(i, chank, fullTree1, 12, 13, 62, 63, 112, 113, 162, 163);
    createTreeFunc(i, chank, rightHandEmptyTree1, 14, 15, 64, 65, 114, 115, 164, 165);
    createTreeFunc(i, chank, fullTree1HalfBottom, 16, 17, 66, 67, 116, 117, 166, 167);
    createTreeFunc(i, chank, fullTree1HalfBottom, 18, 19, 68, 69, 118, 119, 168, 169);
    createTreeFunc(i, chank, fullTree1HalfBottom, 20, 21, 70, 71, 120, 121, 170, 171);
    createTreeFunc(i, chank, fullTree1HalfBottom, 22, 23, 72, 73, 122, 123, 172, 173);
    createTreeFunc(i, chank, leftHandEmptyTree1, 24, 25, 74, 75, 124, 125, 174, 175);
    createTreeFunc(i, chank, fullTree1, 26, 27, 76, 77, 126, 127, 176, 177);
    createTreeFunc(i, chank, fullTree1, 28, 29, 78, 79, 128, 129, 178, 179);
    createTreeFunc(i, chank, fullTree1, 30, 31, 80, 81, 130, 131, 180, 181);
    createTreeFunc(i, chank, fullTree1, 32, 33, 82, 83, 132, 133, 182, 183);
    createTreeFunc(i, chank, rightHandEmptyTree3, 34, 35, 84, 85, 134, 135, 184, 185);
    createTreeFunc(i, chank, onlyRightHandEmptyTreeHalf2, 136,186);

    createTreeFunc(i, chank, fullTree1, 200, 201, 250, 251, 300, 301, 350, 351);
    createTreeFunc(i, chank, fullTree1, 202, 203, 252, 253, 302, 303, 352, 353);
    createTreeFunc(i, chank, fullTree1, 204, 205, 254, 255, 304, 305, 354, 355);
    createTreeFunc(i, chank, fullTree1, 206, 207, 256, 257, 306, 307, 356, 357);
    createTreeFunc(i, chank, fullTree1, 208, 209, 258, 259, 308, 309, 358, 359);
    createTreeFunc(i, chank, fullTree1, 210, 211, 260, 261, 310, 311, 360, 361);
    createTreeFunc(i, chank, fullTree1, 212, 213, 262, 263, 312, 313, 362, 363);
    createTreeFunc(i, chank, rightHandEmptyTree2, 214, 215, 264, 265, 314, 315, 364, 365);
    createTreeFunc(i, chank, leftHandEmptyTree2, 224, 225, 274, 275, 324, 325, 374, 375);
    createTreeFunc(i, chank, fullTree1, 226, 227, 276, 277, 326, 327, 376, 377);
    createTreeFunc(i, chank, fullTree1, 228, 229, 278, 279, 328, 329, 378, 379);
    createTreeFunc(i, chank, fullTree1, 230, 231, 280, 281, 330, 331, 380, 381);
    createTreeFunc(i, chank, fullTree1, 232, 233, 282, 283, 332, 333, 382, 383);
    createTreeFunc(i, chank, fullTree1, 234, 235, 284, 285, 334, 335, 384, 385);
    createTreeFunc(i, chank, rightHandEmptyTree2, 236, 237, 286, 287, 336, 337, 386, 387);



    createTreeFunc(i, chank, fullTree1, 400, 401, 450, 451, 500, 501, 550, 551);
    createTreeFunc(i, chank, fullTree1, 402, 403, 452, 453, 502, 503, 552, 553);
    createTreeFunc(i, chank, fullTree1, 404, 405, 454, 455, 504, 505, 554, 555);
    createTreeFunc(i, chank, fullTree1, 406, 407, 456, 457, 506, 507, 556, 557);
    createTreeFunc(i, chank, fullTree1, 408, 409, 458, 459, 508, 509, 558, 559);
    createTreeFunc(i, chank, fullTree1, 410, 411, 460, 461, 510, 511, 560, 561);
    createTreeFunc(i, chank, rightHandEmptyTree1, 412, 413, 462, 463, 512, 513, 562, 563);
    createTreeFunc(i, chank, onlyRightHandEmptyTreeHalf1, 414, 464);
    createTreeFunc(i, chank, onlyLeftHandEmptyTreeHalf1, 425, 475);
    createTreeFunc(i, chank, leftHandEmptyTree4, 426, 427, 476, 477, 526, 527, 576, 577);
    createTreeFunc(i, chank, leftHandEmptyTree3, 428, 429, 478, 479, 528, 529, 578, 579);
    createTreeFunc(i, chank, leftHandEmptyTree3, 430, 431, 480, 481, 530, 531, 580, 581);
    createTreeFunc(i, chank, leftHandEmptyTree3, 432, 433, 482, 483, 532, 533, 582, 583);
    createTreeFunc(i, chank, rightHandEmptyTree4, 434, 435, 484, 485, 534, 535, 584, 585);
    createTreeFunc(i, chank, onlyRightHandEmptyTreeHalf1, 436, 486);


    createTreeFunc(i, chank, fullTree1, 600, 601, 650, 651, 700, 701, 750, 751);
    createTreeFunc(i, chank, fullTree1, 602, 603, 652, 653, 702, 703, 752, 753);
    createTreeFunc(i, chank, fullTree1, 604, 605, 654, 655, 704, 705, 754, 755);
    createTreeFunc(i, chank, fullTree1, 606, 607, 656, 657, 706, 707, 756, 757);
    createTreeFunc(i, chank, fullTree1, 608, 609, 658, 659, 708, 709, 758, 759);
    createTreeFunc(i, chank, fullTree1, 610, 611, 660, 661, 710, 711, 760, 761);
    createTreeFunc(i, chank, rightHandEmptyTree3, 612, 613, 662, 663, 712, 713, 762, 763);
    createTreeFunc(i, chank, onlyRightHandEmptyTreeHalf2, 714, 764);

    createTreeFunc(i, chank, fullTree1, 800, 801, 850, 851, 900, 901, 950, 951);
    createTreeFunc(i, chank, fullTree1, 802, 803, 852, 853, 902, 903, 952, 953);
    createTreeFunc(i, chank, fullTree1, 804, 805, 854, 855, 904, 905, 954, 955);
    createTreeFunc(i, chank, fullTree1, 806, 807, 856, 857, 906, 907, 956, 957);
    createTreeFunc(i, chank, fullTree1, 808, 809, 858, 859, 908, 909, 958, 959);
    createTreeFunc(i, chank, fullTree1, 810, 811, 860, 861, 910, 911, 960, 961);
    createTreeFunc(i, chank, fullTree1, 812, 813, 862, 863, 912, 913, 962, 963);
    createTreeFunc(i, chank, rightHandEmptyTree3, 814, 815, 864, 865, 914, 915, 964, 965);
    createTreeFunc(i, chank, topHandEmptyTree1, 816, 817, 866, 867, 916, 917, 966, 967);
    createTreeFunc(i, chank, topHandEmptyTree1, 818, 819, 868, 869, 918, 919, 968, 969);
    createTreeFunc(i, chank, topHandEmptyTree1, 820, 821, 870, 871, 920, 921, 970, 971);
    createTreeFunc(i, chank, topHandEmptyTree1, 822, 823, 872, 873, 922, 923, 972, 973);
    createTreeFunc(i, chank, topHandEmptyTree1, 824, 825, 874, 875, 924, 925, 974, 975);
    createTreeFunc(i, chank, topHandEmptyTree1, 826, 827, 876, 877, 926, 927, 976, 977);
    createTreeFunc(i, chank, topHandEmptyTree1, 828, 829, 878, 879, 928, 929, 978, 979);
    createTreeFunc(i, chank, topHandEmptyTree1, 830, 831, 880, 881, 930, 931, 980, 981);
    createTreeFunc(i, chank, topHandEmptyTree1, 832, 833, 882, 883, 932, 933, 982, 983);
    createTreeFunc(i, chank, topHandEmptyTree1, 834, 835, 884, 885, 934, 935, 984, 985);
    createTreeFunc(i, chank, topHandEmptyTree1, 836, 837, 886, 887, 936, 937, 986, 987);
    createTreeFunc(i, chank, topHandEmptyTree1, 838, 839, 888, 889, 938, 939, 988, 989);
    createTreeFunc(i, chank, topHandEmptyTree1, 840, 841, 890, 891, 940, 941, 990, 991);
    createTreeFunc(i, chank, topHandEmptyTree1, 842, 843, 892, 893, 942, 943, 992, 993);
    createTreeFunc(i, chank, onlyRightHandEmptyTreeHalf2, 944, 994);


    createTreeFunc(i, chank, fullTree1, 1000, 1001, 1050, 1051, 1100, 1101, 1150, 1151);
    createTreeFunc(i, chank, fullTree1, 1002, 1003, 1052, 1053, 1102, 1103, 1152, 1153);
    createTreeFunc(i, chank, fullTree1, 1004, 1005, 1054, 1055, 1104, 1105, 1154, 1155);
    createTreeFunc(i, chank, fullTree1, 1006, 1007, 1056, 1057, 1106, 1107, 1156, 1157);
    createTreeFunc(i, chank, fullTree1, 1008, 1009, 1058, 1059, 1108, 1109, 1158, 1159);
    createTreeFunc(i, chank, fullTree1, 1010, 1011, 1060, 1061, 1110, 1111, 1160, 1161);
    createTreeFunc(i, chank, fullTree1, 1012, 1013, 1062, 1063, 1112, 1113, 1162, 1163);
    createTreeFunc(i, chank, fullTree1, 1014, 1015, 1064, 1065, 1114, 1115, 1164, 1165);
    createTreeFunc(i, chank, fullTree1, 1016, 1017, 1066, 1067, 1116, 1117, 1166, 1167);
    createTreeFunc(i, chank, fullTree1, 1018, 1019, 1068, 1069, 1118, 1119, 1168, 1169);
    createTreeFunc(i, chank, fullTree1, 1020, 1021, 1070, 1071, 1120, 1121, 1170, 1171);
    createTreeFunc(i, chank, fullTree1, 1022, 1023, 1072, 1073, 1122, 1123, 1172, 1173);
    createTreeFunc(i, chank, fullTree1, 1024, 1025, 1074, 1075, 1124, 1125, 1174, 1175);
    createTreeFunc(i, chank, fullTree1, 1026, 1027, 1076, 1077, 1126, 1127, 1176, 1177);
    createTreeFunc(i, chank, fullTree1, 1028, 1029, 1078, 1079, 1128, 1129, 1178, 1179);
    createTreeFunc(i, chank, fullTree1, 1030, 1031, 1080, 1081, 1130, 1131, 1180, 1181);
    createTreeFunc(i, chank, fullTree1, 1032, 1033, 1082, 1083, 1132, 1133, 1182, 1183);
    createTreeFunc(i, chank, fullTree1, 1034, 1035, 1084, 1085, 1134, 1135, 1184, 1185);
    createTreeFunc(i, chank, fullTree1, 1036, 1037, 1086, 1087, 1136, 1137, 1186, 1187);
    createTreeFunc(i, chank, fullTree1, 1038, 1039, 1088, 1089, 1138, 1139, 1188, 1189);
    createTreeFunc(i, chank, fullTree1, 1040, 1041, 1090, 1091, 1140, 1141, 1190, 1191);
    createTreeFunc(i, chank, fullTree1, 1042, 1043, 1092, 1093, 1142, 1143, 1192, 1193);
    createTreeFunc(i, chank, rightHandEmptyTreeHalf1, 1044, 1094, 1144, 1194);



    createTreeFunc(i, chank, fullTree1, 1200, 1201, 1250, 1251, 1300, 1301, 1350, 1351);
    createTreeFunc(i, chank, fullTree1, 1202, 1203, 1252, 1253, 1302, 1303, 1352, 1353);
    createTreeFunc(i, chank, fullTree1, 1204, 1205, 1254, 1255, 1304, 1305, 1354, 1355);
    createTreeFunc(i, chank, fullTree1, 1206, 1207, 1256, 1257, 1306, 1307, 1356, 1357);
    createTreeFunc(i, chank, fullTree1, 1208, 1209, 1258, 1259, 1308, 1309, 1358, 1359);
    createTreeFunc(i, chank, fullTree1, 1210, 1211, 1260, 1261, 1310, 1311, 1360, 1361);
    createTreeFunc(i, chank, fullTree1, 1212, 1213, 1262, 1263, 1312, 1313, 1362, 1363);
    createTreeFunc(i, chank, fullTree1, 1214, 1215, 1264, 1265, 1314, 1315, 1364, 1365);
    createTreeFunc(i, chank, fullTree1, 1216, 1217, 1266, 1267, 1316, 1317, 1366, 1367);
    createTreeFunc(i, chank, fullTree1, 1218, 1219, 1268, 1269, 1318, 1319, 1368, 1369);
    createTreeFunc(i, chank, fullTree1, 1220, 1221, 1270, 1271, 1320, 1321, 1370, 1371);
    createTreeFunc(i, chank, fullTree1, 1222, 1223, 1272, 1273, 1322, 1323, 1372, 1373);
    createTreeFunc(i, chank, fullTree1, 1224, 1225, 1274, 1275, 1324, 1325, 1374, 1375);
    createTreeFunc(i, chank, fullTree1, 1226, 1227, 1276, 1277, 1326, 1327, 1376, 1377);
    createTreeFunc(i, chank, fullTree1, 1228, 1229, 1278, 1279, 1328, 1329, 1378, 1379);
    createTreeFunc(i, chank, fullTree1, 1230, 1231, 1280, 1281, 1330, 1331, 1380, 1381);
    createTreeFunc(i, chank, fullTree1, 1232, 1233, 1282, 1283, 1332, 1333, 1382, 1383);
    createTreeFunc(i, chank, fullTree1, 1234, 1235, 1284, 1285, 1334, 1335, 1384, 1385);
    createTreeFunc(i, chank, fullTree1, 1236, 1237, 1286, 1287, 1336, 1337, 1386, 1387);
    createTreeFunc(i, chank, fullTree1, 1238, 1239, 1288, 1289, 1338, 1339, 1388, 1389);
    createTreeFunc(i, chank, fullTree1, 1240, 1241, 1290, 1291, 1340, 1341, 1390, 1391);
    createTreeFunc(i, chank, fullTree1, 1242, 1243, 1292, 1293, 1342, 1343, 1392, 1393);
    createTreeFunc(i, chank, rightHandEmptyTreeHalf1, 1244, 1294, 1344, 1394);


    mainMap.appendChild(chank);
  }
})
