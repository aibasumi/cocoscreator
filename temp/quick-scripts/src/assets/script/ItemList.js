"use strict";
cc._RF.push(module, '49a0eGIyWhIQJtCIpf3NXuJ', 'ItemList');
// script/ItemList.js

"use strict";

var Item = cc.Class({
  name: 'Item',
  properties: {
    id: 0,
    itemName: '',
    itemPrice: 0,
    iconSF: cc.SpriteFrame
  }
});
var gameCardData = [{
  id: 1,
  itemName: "遊戲1",
  itemPrice: '',
  iconSF: "image/cards/cardA"
}, {
  id: 2,
  itemName: "遊戲2",
  itemPrice: '',
  iconSF: "image/cards/cardB"
}, {
  id: 3,
  itemName: "遊戲3",
  itemPrice: '',
  iconSF: "image/cards/cardC"
}, {
  id: 4,
  itemName: "遊戲4",
  itemPrice: '',
  iconSF: "image/cards/cardD"
}, {
  id: 5,
  itemName: "遊戲5",
  itemPrice: '',
  iconSF: "image/cards/cardE"
}];
cc.Class({
  "extends": cc.Component,
  properties: {
    // items: {
    //     default: [],
    //     type: Item
    // },
    Count: 0,
    Item: cc.Prefab
  },
  onLoad: function onLoad() {
    //我們先動態取得Canvas
    var CanvasNode = cc.find('scrollview/view/content');

    if (!CanvasNode) {
      cc.log('找不到Canvas畫布，請確認你的場景裡有Canvas');
      return;
    }

    var prefabPath = 'Item'; //這邊先將 this 指標存到另一個變數, 在別的方法裡this是會被改變的

    var root = this;
    gameCardData.forEach(function (item) {
      cc.loader.loadRes("Item", function (errorMessage, prefab) {
        if (errorMessage) {
          cc.log('載入Prefab失敗, 原因:' + errorMessage);
          return;
        }

        if (!(prefab instanceof cc.Prefab)) {
          cc.log('你載入的不是Prefab, 你做了什麼事?');
          return;
        } //這個是型別的檢查


        root.Count++; //接著，我們就可以進行實例化了

        var newMyPrefab = cc.instantiate(prefab); //我們先將這個建立出來的Prefab加入畫布裡

        CanvasNode.addChild(newMyPrefab); //我們要開始設定位置，因為當時在Prefab我們沒有指定最外層的大小
        //所以這邊我們要取得在MyPrefab中，我們加入的 "SplitButtons_01" 這張圖片的高度

        var buttonBG = newMyPrefab.getChildByName('bg');

        if (!buttonBG) {
          cc.log('找不到指定名稱的Node, 是不是哪裡搞錯了？');
          return;
        } //所以，y軸就是利用計數器乘上圖片的高度，再加上10額外邊界後，再減去場景的高度除以二


        var newX = buttonBG.width * 0.5 * root.Count - CanvasNode.width / 2 - 60; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

        console.log('buttonBG.width', buttonBG.width); //newMyPrefab.setContentSize(200);
        //設定位置，這邊x軸不變

        newMyPrefab.setPosition(newX, -130);
        newMyPrefab.getComponent('ItemTemplate').init({
          id: item.id,
          itemName: item.itemName,
          itemPrice: item.itemPrice,
          iconSF: item.iconSF
        });
      });
    });
  }
});

cc._RF.pop();