
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ItemList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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


        var newX = buttonBG.width * root.Count + 1 - CanvasNode.width / 2; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生
        //newMyPrefab.setContentSize(200);
        //設定位置，這邊x軸不變

        newMyPrefab.setPosition(newX, -150);
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImdhbWVDYXJkRGF0YSIsIkNvbXBvbmVudCIsIkNvdW50IiwiUHJlZmFiIiwib25Mb2FkIiwiQ2FudmFzTm9kZSIsImZpbmQiLCJsb2ciLCJwcmVmYWJQYXRoIiwicm9vdCIsImZvckVhY2giLCJpdGVtIiwibG9hZGVyIiwibG9hZFJlcyIsImVycm9yTWVzc2FnZSIsInByZWZhYiIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImJ1dHRvbkJHIiwiZ2V0Q2hpbGRCeU5hbWUiLCJuZXdYIiwid2lkdGgiLCJzZXRQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFU7QUFFaEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxFQUFFLEVBQUUsQ0FESTtBQUVSQyxJQUFBQSxRQUFRLEVBQUUsRUFGRjtBQUdSQyxJQUFBQSxTQUFTLEVBQUUsQ0FISDtBQUlSQyxJQUFBQSxNQUFNLEVBQUVQLEVBQUUsQ0FBQ1E7QUFKSDtBQUZJLENBQVQsQ0FBWDtBQVVBLElBQUlDLFlBQVksR0FBRyxDQUNmO0FBQ0lMLEVBQUFBLEVBQUUsRUFBQyxDQURQO0FBRUlDLEVBQUFBLFFBQVEsRUFBRSxLQUZkO0FBR0lDLEVBQUFBLFNBQVMsRUFBRSxFQUhmO0FBSUlDLEVBQUFBLE1BQU0sRUFBRTtBQUpaLENBRGUsRUFPZjtBQUNJSCxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxRQUFRLEVBQUUsS0FGZDtBQUdJQyxFQUFBQSxT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QUFDZixRQUYyQjtBQUcxQ0MsVUFBQUEsU0FBUyxFQUFFYyxJQUFJLENBQUNkLFNBSDBCO0FBSTFDQyxVQUFBQSxNQUFNLEVBQUVhLElBQUksQ0FBQ2I7QUFKNkIsU0FBOUM7QUFNSCxPQWxDRDtBQW9DSCxLQXJDRDtBQXNDSDtBQTNESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnSXRlbScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICBpdGVtUHJpY2U6IDAsXG4gICAgICAgIGljb25TRjogY2MuU3ByaXRlRnJhbWVcbiAgICB9XG59KTtcblxudmFyIGdhbWVDYXJkRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOjEsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjFcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRBXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjIsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjJcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRCXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjMsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjNcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRDXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjQsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjRcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmREXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjUsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjVcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRFXCIsXG4gICAgfSxcbiAgICBcbiAgXTtcblxuXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBpdGVtczoge1xuICAgICAgICAvLyAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIC8vICAgICB0eXBlOiBJdGVtXG4gICAgICAgIC8vIH0sXG4gICAgICAgIENvdW50OiAwLFxuICAgICAgICBJdGVtOiBjYy5QcmVmYWJcbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICAgICAgLy/miJHlgJHlhYjli5XmhYvlj5blvpdDYW52YXNcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCAnc2Nyb2xsdmlldy92aWV3L2NvbnRlbnQnICk7XG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MubG9nKCAn5om+5LiN5YiwQ2FudmFz55Wr5biD77yM6KuL56K66KqN5L2g55qE5aC05pmv6KOh5pyJQ2FudmFzJyApOyByZXR1cm47IH0gXG5cbiAgICAgICAgdmFyIHByZWZhYlBhdGggPSAnSXRlbSc7XG5cbiAgICAgICAgLy/pgJnpgorlhYjlsIcgdGhpcyDmjIfmqJnlrZjliLDlj6bkuIDlgIvorormlbgsIOWcqOWIpeeahOaWueazleijoXRoaXPmmK/mnIPooqvmlLnorornmoRcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzOyBcbiAgICAgICAgICAgIFxuICAgICAgICBnYW1lQ2FyZERhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiSXRlbVwiLCBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlLCBwcmVmYWIpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNjLmxvZyggJ+i8ieWFpVByZWZhYuWkseaVlywg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYoICEoIHByZWZhYiBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjYy5sb2coICfkvaDovInlhaXnmoTkuI3mmK9QcmVmYWIsIOS9oOWBmuS6huS7gOm6vOS6iz8nICk7IHJldHVybjsgfSAvL+mAmeWAi+aYr+Wei+WIpeeahOaqouafpVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJvb3QuQ291bnQrKztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL+aOpeiRl++8jOaIkeWAkeWwseWPr+S7pemAsuihjOWvpuS+i+WMluS6hlxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBwcmVmYWIgKTtcblxuICAgICAgICAgICAgICAgIC8v5oiR5YCR5YWI5bCH6YCZ5YCL5bu656uL5Ye65L6G55qEUHJlZmFi5Yqg5YWl55Wr5biD6KOhXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcblxuICAgICAgICAgICAgICAgIC8v5oiR5YCR6KaB6ZaL5aeL6Kit5a6a5L2N572u77yM5Zug54K655W25pmC5ZyoUHJlZmFi5oiR5YCR5rKS5pyJ5oyH5a6a5pyA5aSW5bGk55qE5aSn5bCPXG4gICAgICAgICAgICAgICAgLy/miYDku6XpgJnpgormiJHlgJHopoHlj5blvpflnKhNeVByZWZhYuS4re+8jOaIkeWAkeWKoOWFpeeahCBcIlNwbGl0QnV0dG9uc18wMVwiIOmAmeW8teWclueJh+eahOmrmOW6plxuICAgICAgICAgICAgICAgIHZhciBidXR0b25CRyA9IG5ld015UHJlZmFiLmdldENoaWxkQnlOYW1lKCAnYmcnICk7XG4gICAgICAgICAgICAgICAgaWYoICFidXR0b25CRyApIHsgY2MubG9nKCfmib7kuI3liLDmjIflrprlkI3nqLHnmoROb2RlLCDmmK/kuI3mmK/lk6roo6HmkJ7pjK/kuobvvJ8nKTsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgICAvL+aJgOS7pe+8jHnou7jlsLHmmK/liKnnlKjoqIjmlbjlmajkuZjkuIrlnJbniYfnmoTpq5jluqbvvIzlho3liqDkuIoxMOmhjeWklumCiueVjOW+jO+8jOWGjea4m+WOu+WgtOaZr+eahOmrmOW6pumZpOS7peS6jFxuICAgICAgICAgICAgICAgIHZhciBuZXdYID0gKCAgYnV0dG9uQkcud2lkdGgqcm9vdC5Db3VudCApICsgMSAtIChDYW52YXNOb2RlLndpZHRoIC8gMikgO1xuICAgICAgICAgICAgICAgIC8v5rib5Y675aC05pmv6auY5bqm6YCZ5YCL5YuV5L2c77yM5piv54K65LqG6K6T5q+P6bue5pOK5LiA5qyh5oyJ6YiV77yM5oiR5YCR55qEUHJlZmFi5bCx5LiA55u05b6A5LiK55Si55SfXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvL25ld015UHJlZmFiLnNldENvbnRlbnRTaXplKDIwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/oqK3lrprkvY3nva7vvIzpgJnpgop46Lu45LiN6K6KXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuc2V0UG9zaXRpb24oIG5ld1gsIC0xNTAgKTtcblxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmdldENvbXBvbmVudCgnSXRlbVRlbXBsYXRlJykuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZTogaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVByaWNlOiBpdGVtLml0ZW1QcmljZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNGOiBpdGVtLmljb25TRixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59KTsiXX0=