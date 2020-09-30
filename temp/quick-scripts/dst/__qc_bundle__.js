
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/IndexScript');
require('./assets/script/ItemList');
require('./assets/script/ItemTemplate');
require('./assets/script/LeftMenu/ItemList - 001');
require('./assets/script/LeftMenu/ItemTemplate - 001');
require('./assets/script/LeftMenu/ScrollView');
require('./assets/script/MyPrefabScript');
require('./assets/script/gameCardConfig');
require('./assets/script/lobby');
require('./assets/script/login');
require('./assets/script/scrollview');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/LeftMenu/ItemTemplate - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7914aq2h91G4LGMnjbNBbmS', 'ItemTemplate - 001');
// script/LeftMenu/ItemTemplate - 001.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    id: 0,
    itemName: cc.Label
  },
  init: function init(data) {
    this.id = data.id;
    this.itemName.string = data.itemName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTGVmdE1lbnUvSXRlbVRlbXBsYXRlIC0gMDAxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaWQiLCJpdGVtTmFtZSIsIkxhYmVsIiwiaW5pdCIsImRhdGEiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxFQUFFLEVBQUUsQ0FESTtBQUVSQyxJQUFBQSxRQUFRLEVBQUVMLEVBQUUsQ0FBQ007QUFGTCxHQUZQO0FBTUxDLEVBQUFBLElBQUksRUFBRSxjQUFVQyxJQUFWLEVBQWdCO0FBQ2xCLFNBQUtKLEVBQUwsR0FBVUksSUFBSSxDQUFDSixFQUFmO0FBQ0EsU0FBS0MsUUFBTCxDQUFjSSxNQUFkLEdBQXVCRCxJQUFJLENBQUNILFFBQTVCO0FBQ0g7QUFUSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGl0ZW1OYW1lOiBjYy5MYWJlbCxcbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLml0ZW1OYW1lLnN0cmluZyA9IGRhdGEuaXRlbU5hbWU7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
  iconSF: "image/cards/cardA"
}, {
  id: 4,
  itemName: "遊戲4",
  itemPrice: '',
  iconSF: "image/cards/cardB"
}, {
  id: 5,
  itemName: "遊戲5",
  itemPrice: '',
  iconSF: "image/cards/cardA"
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


        var newX = buttonBG.width + root.Count * 100 - 750; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

        console.log(CanvasNode.height); //設定位置，這邊x軸不變

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImdhbWVDYXJkRGF0YSIsIkNvbXBvbmVudCIsIkNvdW50IiwiUHJlZmFiIiwib25Mb2FkIiwiQ2FudmFzTm9kZSIsImZpbmQiLCJsb2ciLCJwcmVmYWJQYXRoIiwicm9vdCIsImZvckVhY2giLCJpdGVtIiwibG9hZGVyIiwibG9hZFJlcyIsImVycm9yTWVzc2FnZSIsInByZWZhYiIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImJ1dHRvbkJHIiwiZ2V0Q2hpbGRCeU5hbWUiLCJuZXdYIiwid2lkdGgiLCJjb25zb2xlIiwiaGVpZ2h0Iiwic2V0UG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxNQURVO0FBRWhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLEVBRkY7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLENBSEg7QUFJUkMsSUFBQUEsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0FBSkg7QUFGSSxDQUFULENBQVg7QUFVQSxJQUFJQyxZQUFZLEdBQUcsQ0FDZjtBQUNJTCxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxRQUFRLEVBQUUsS0FGZDtBQUdJQyxFQUFBQSxTQUFTLEVBQUUsRUFIZjtBQUlJQyxFQUFBQSxNQUFNLEVBQUU7QUFKWixDQURlLEVBT2Y7QUFDSUgsRUFBQUEsRUFBRSxFQUFDLENBRFA7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLEtBRmQ7QUFHSUMsRUFBQUEsU0FBUyxFQUFFLEVBSGY7QUFJSUMsRUFBQUEsTUFBTSxFQUFFO0FBSlosQ0FQZSxFQWFmO0FBQ0lILEVBQUFBLEVBQUUsRUFBQyxDQURQO0FBRUlDLEVBQUFBLFFBQVEsRUFBRSxLQUZkO0FBR0lDLEVBQUFBLFNBQVMsRUFBRSxFQUhmO0FBSUlDLEVBQUFBLE1BQU0sRUFBRTtBQUpaLENBYmUsRUFtQmY7QUFDSUgsRUFBQUEsRUFBRSxFQUFDLENBRFA7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLEtBRmQ7QUFHSUMsRUFBQUEsU0FBUyxFQUFFLEVBSGY7QUFJSUMsRUFBQUEsTUFBTSxFQUFFO0FBSlosQ0FuQmUsRUF5QmY7QUFDSUgsRUFBQUEsRUFBRSxFQUFDLENBRFA7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLEtBRmQ7QUFHSUMsRUFBQUEsU0FBUyxFQUFFLEVBSGY7QUFJSUMsRUFBQUEsTUFBTSxFQUFFO0FBSlosQ0F6QmUsQ0FBbkI7QUFvQ0FQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDVSxTQURQO0FBRUxQLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FRLElBQUFBLEtBQUssRUFBRSxDQUxDO0FBTVJaLElBQUFBLElBQUksRUFBRUMsRUFBRSxDQUFDWTtBQU5ELEdBRlA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSztBQUVOO0FBQ0EsUUFBSUMsVUFBVSxHQUFHZCxFQUFFLENBQUNlLElBQUgsQ0FBUyx5QkFBVCxDQUFqQjs7QUFDQSxRQUFJLENBQUNELFVBQUwsRUFBa0I7QUFBRWQsTUFBQUEsRUFBRSxDQUFDZ0IsR0FBSCxDQUFRLDZCQUFSO0FBQXlDO0FBQVM7O0FBRXRFLFFBQUlDLFVBQVUsR0FBRyxNQUFqQixDQU5NLENBUU47O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFFQVQsSUFBQUEsWUFBWSxDQUFDVSxPQUFiLENBQXFCLFVBQUFDLElBQUksRUFBSTtBQUN6QnBCLE1BQUFBLEVBQUUsQ0FBQ3FCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixNQUFsQixFQUEwQixVQUFVQyxZQUFWLEVBQXdCQyxNQUF4QixFQUFnQztBQUV0RCxZQUFJRCxZQUFKLEVBQW1CO0FBQUV2QixVQUFBQSxFQUFFLENBQUNnQixHQUFILENBQVEsb0JBQW9CTyxZQUE1QjtBQUE0QztBQUFTOztBQUMxRSxZQUFJLEVBQUdDLE1BQU0sWUFBWXhCLEVBQUUsQ0FBQ1ksTUFBeEIsQ0FBSixFQUF1QztBQUFFWixVQUFBQSxFQUFFLENBQUNnQixHQUFILENBQVEsdUJBQVI7QUFBbUM7QUFBUyxTQUgvQixDQUdnQzs7O0FBRXRGRSxRQUFBQSxJQUFJLENBQUNQLEtBQUwsR0FMc0QsQ0FPdEQ7O0FBQ0EsWUFBSWMsV0FBVyxHQUFHekIsRUFBRSxDQUFDMEIsV0FBSCxDQUFnQkYsTUFBaEIsQ0FBbEIsQ0FSc0QsQ0FVdEQ7O0FBQ0FWLFFBQUFBLFVBQVUsQ0FBQ2EsUUFBWCxDQUFxQkYsV0FBckIsRUFYc0QsQ0FhdEQ7QUFDQTs7QUFDQSxZQUFJRyxRQUFRLEdBQUdILFdBQVcsQ0FBQ0ksY0FBWixDQUE0QixJQUE1QixDQUFmOztBQUNBLFlBQUksQ0FBQ0QsUUFBTCxFQUFnQjtBQUFFNUIsVUFBQUEsRUFBRSxDQUFDZ0IsR0FBSCxDQUFPLHlCQUFQO0FBQW1DO0FBQVMsU0FoQlIsQ0FrQnREOzs7QUFDQSxZQUFJYyxJQUFJLEdBQU1GLFFBQVEsQ0FBQ0csS0FBWixHQUF1QmIsSUFBSSxDQUFDUCxLQUFMLEdBQVcsR0FBbEMsR0FBeUMsR0FBcEQsQ0FuQnNELENBb0J0RDs7QUFHQXFCLFFBQUFBLE9BQU8sQ0FBQ2hCLEdBQVIsQ0FBWUYsVUFBVSxDQUFDbUIsTUFBdkIsRUF2QnNELENBd0J0RDs7QUFDQVIsUUFBQUEsV0FBVyxDQUFDUyxXQUFaLENBQXlCSixJQUF6QixFQUErQixDQUFDLEdBQWhDO0FBRUFMLFFBQUFBLFdBQVcsQ0FBQ1UsWUFBWixDQUF5QixjQUF6QixFQUF5Q0MsSUFBekMsQ0FBOEM7QUFDMUNoQyxVQUFBQSxFQUFFLEVBQUVnQixJQUFJLENBQUNoQixFQURpQztBQUUxQ0MsVUFBQUEsUUFBUSxFQUFFZSxJQUFJLENBQUNmLFFBRjJCO0FBRzFDQyxVQUFBQSxTQUFTLEVBQUVjLElBQUksQ0FBQ2QsU0FIMEI7QUFJMUNDLFVBQUFBLE1BQU0sRUFBRWEsSUFBSSxDQUFDYjtBQUo2QixTQUE5QztBQU1ILE9BakNEO0FBbUNILEtBcENEO0FBcUNIO0FBMURJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdJdGVtJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBpdGVtTmFtZTogJycsXG4gICAgICAgIGl0ZW1QcmljZTogMCxcbiAgICAgICAgaWNvblNGOiBjYy5TcHJpdGVGcmFtZVxuICAgIH1cbn0pO1xuXG52YXIgZ2FtZUNhcmREYXRhID0gW1xuICAgIHtcbiAgICAgICAgaWQ6MSxcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyMVwiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZEFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6MixcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyMlwiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZEJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6MyxcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyM1wiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZEFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6NCxcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyNFwiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZEJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6NSxcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyNVwiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZEFcIixcbiAgICB9LFxuICAgIFxuICBdO1xuXG5cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGl0ZW1zOiB7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgLy8gICAgIHR5cGU6IEl0ZW1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgQ291bnQ6IDAsXG4gICAgICAgIEl0ZW06IGNjLlByZWZhYlxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcblxuICAgICAgICAvL+aIkeWAkeWFiOWLleaFi+WPluW+l0NhbnZhc1xuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoICdzY3JvbGx2aWV3L3ZpZXcvY29udGVudCcgKTtcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5sb2coICfmib7kuI3liLBDYW52YXPnlavluIPvvIzoq4vnorroqo3kvaDnmoTloLTmma/oo6HmnIlDYW52YXMnICk7IHJldHVybjsgfSBcblxuICAgICAgICB2YXIgcHJlZmFiUGF0aCA9ICdJdGVtJztcblxuICAgICAgICAvL+mAmemCiuWFiOWwhyB0aGlzIOaMh+aomeWtmOWIsOWPpuS4gOWAi+iuiuaVuCwg5Zyo5Yil55qE5pa55rOV6KOhdGhpc+aYr+acg+iiq+aUueiuiueahFxuICAgICAgICB2YXIgcm9vdCA9IHRoaXM7IFxuICAgICAgICAgICAgXG4gICAgICAgIGdhbWVDYXJkRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJJdGVtXCIsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIHByZWZhYikge1xuXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY2MubG9nKCAn6LyJ5YWlUHJlZmFi5aSx5pWXLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiggISggcHJlZmFiIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi8ieWFpeeahOS4jeaYr1ByZWZhYiwg5L2g5YGa5LqG5LuA6bq85LqLPycgKTsgcmV0dXJuOyB9IC8v6YCZ5YCL5piv5Z6L5Yil55qE5qqi5p+lXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcm9vdC5Db3VudCsrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5bCx5Y+v5Lul6YCy6KGM5a+m5L6L5YyW5LqGXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIHByZWZhYiApO1xuXG4gICAgICAgICAgICAgICAgLy/miJHlgJHlhYjlsIfpgJnlgIvlu7rnq4vlh7rkvobnmoRQcmVmYWLliqDlhaXnlavluIPoo6FcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xuXG4gICAgICAgICAgICAgICAgLy/miJHlgJHopoHplovlp4voqK3lrprkvY3nva7vvIzlm6DngrrnlbbmmYLlnKhQcmVmYWLmiJHlgJHmspLmnInmjIflrprmnIDlpJblsaTnmoTlpKflsI9cbiAgICAgICAgICAgICAgICAvL+aJgOS7pemAmemCiuaIkeWAkeimgeWPluW+l+WcqE15UHJlZmFi5Lit77yM5oiR5YCR5Yqg5YWl55qEIFwiU3BsaXRCdXR0b25zXzAxXCIg6YCZ5by15ZyW54mH55qE6auY5bqmXG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbkJHID0gbmV3TXlQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoICdiZycgKTtcbiAgICAgICAgICAgICAgICBpZiggIWJ1dHRvbkJHICkgeyBjYy5sb2coJ+aJvuS4jeWIsOaMh+WumuWQjeeoseeahE5vZGUsIOaYr+S4jeaYr+WTquijoeaQnumMr+S6hu+8nycpOyByZXR1cm47IH1cblxuICAgICAgICAgICAgICAgIC8v5omA5Lul77yMeei7uOWwseaYr+WIqeeUqOioiOaVuOWZqOS5mOS4iuWclueJh+eahOmrmOW6pu+8jOWGjeWKoOS4ijEw6aGN5aSW6YKK55WM5b6M77yM5YaN5rib5Y675aC05pmv55qE6auY5bqm6Zmk5Lul5LqMXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ggPSAoICBidXR0b25CRy53aWR0aCApICsgKHJvb3QuQ291bnQqMTAwKSAtIDc1MDtcbiAgICAgICAgICAgICAgICAvL+a4m+WOu+WgtOaZr+mrmOW6pumAmeWAi+WLleS9nO+8jOaYr+eCuuS6huiuk+avj+m7nuaTiuS4gOasoeaMiemIle+8jOaIkeWAkeeahFByZWZhYuWwseS4gOebtOW+gOS4iueUoueUn1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coQ2FudmFzTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8v6Kit5a6a5L2N572u77yM6YCZ6YKKeOi7uOS4jeiuilxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnNldFBvc2l0aW9uKCBuZXdYLCAtMTUwICk7XG5cbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5nZXRDb21wb25lbnQoJ0l0ZW1UZW1wbGF0ZScpLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWU6IGl0ZW0uaXRlbU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QcmljZTogaXRlbS5pdGVtUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIGljb25TRjogaXRlbS5pY29uU0YsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gameCardConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3af2aJJOutElLnwkyFhKENo', 'gameCardConfig');
// script/gameCardConfig.js

"use strict";

var cfg = {
  list: [{
    gameId: 'GTSLOT0149',
    gamePlatformId: 'SLOTCNJP',
    name: '發發發'
  }, {
    gameId: 'GTSLOT0139',
    gamePlatformId: 'GTSLTHB',
    name: '金鼠迎財神'
  }]
};
module.exports = cfg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUNhcmRDb25maWcuanMiXSwibmFtZXMiOlsiY2ZnIiwibGlzdCIsImdhbWVJZCIsImdhbWVQbGF0Zm9ybUlkIiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsR0FBRyxHQUFFO0FBQ0xDLEVBQUFBLElBQUksRUFBRSxDQUVGO0FBQ0lDLElBQUFBLE1BQU0sRUFBQyxZQURYO0FBRUlDLElBQUFBLGNBQWMsRUFBQyxVQUZuQjtBQUdJQyxJQUFBQSxJQUFJLEVBQUM7QUFIVCxHQUZFLEVBT0Y7QUFDSUYsSUFBQUEsTUFBTSxFQUFDLFlBRFg7QUFFSUMsSUFBQUEsY0FBYyxFQUFDLFNBRm5CO0FBR0lDLElBQUFBLElBQUksRUFBQztBQUhULEdBUEU7QUFERCxDQUFUO0FBa0JBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLEdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2ZnID17XG4gICAgbGlzdDogW1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdhbWVJZDonR1RTTE9UMDE0OScsXG4gICAgICAgICAgICBnYW1lUGxhdGZvcm1JZDonU0xPVENOSlAnLFxuICAgICAgICAgICAgbmFtZTon55m855m855m8JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZ2FtZUlkOidHVFNMT1QwMTM5JyxcbiAgICAgICAgICAgIGdhbWVQbGF0Zm9ybUlkOidHVFNMVEhCJyxcbiAgICAgICAgICAgIG5hbWU6J+mHkem8oOi/juiyoeelnicsXG4gICAgICAgIH0sXG5cbiAgICBdXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gY2ZnO1xuXG5cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scrollview.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91658lh2tpDarYaVOk74K0I', 'scrollview');
// script/scrollview.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  } // LIFE-CYCLE CALLBACKS:
  // onLoad () (
  // ),
  // start () {
  // },
  // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2Nyb2xsdmlldy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlEsR0FIUCxDQXFCTDtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIChcbiAgICAgICAgXG4gICAgLy8gKSxcblxuICAgIC8vIHN0YXJ0ICgpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7426ogdsdIy5TFpUortkCy', 'lobby');
// script/lobby.js

"use strict";

//include gamelist
var gamelist = require("gameCardConfig");

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    // label: {
    //     type: cc.Label,
    //     default: null,
    // }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // this.label.string= this.ddd;
    // 取得遊戲列表
    console.log(gamelist.list);
  },
  // init: function (data) {
  //     this.id = data.id;
  //     this.icon.spriteFrame = data.iconSF;
  //     this.itemName.string = data.itemName;
  //     this.itemPrice.string = data.itemPrice;
  // }
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbG9iYnkuanMiXSwibmFtZXMiOlsiZ2FtZWxpc3QiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0EsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBdEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBcEJRLEdBSFA7QUEwQkw7QUFFQUMsRUFBQUEsTUE1Qkssb0JBNEJLO0FBRU47QUFFQTtBQUVBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBUSxDQUFDUyxJQUFyQjtBQUNILEdBbkNJO0FBcUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxFQUFBQSxLQTVDSyxtQkE0Q0ksQ0FFUixDQTlDSSxDQWdETDs7QUFoREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy9pbmNsdWRlIGdhbWVsaXN0XG52YXIgZ2FtZWxpc3QgPSByZXF1aXJlKFwiZ2FtZUNhcmRDb25maWdcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgLy8gbGFiZWw6IHtcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgXG4gICAgICAgIC8vIHRoaXMubGFiZWwuc3RyaW5nPSB0aGlzLmRkZDtcblxuICAgICAgICAvLyDlj5blvpfpgYrmiLLliJfooahcblxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lbGlzdC5saXN0KTtcbiAgICB9LFxuXG4gICAgLy8gaW5pdDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgLy8gICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IGRhdGEuaWNvblNGO1xuICAgIC8vICAgICB0aGlzLml0ZW1OYW1lLnN0cmluZyA9IGRhdGEuaXRlbU5hbWU7XG4gICAgLy8gICAgIHRoaXMuaXRlbVByaWNlLnN0cmluZyA9IGRhdGEuaXRlbVByaWNlO1xuICAgIC8vIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/LeftMenu/ItemList - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58d28f/4JxMaKEfNOeSOXLx', 'ItemList - 001');
// script/LeftMenu/ItemList - 001.js

"use strict";

var Item = cc.Class({
  name: 'ItemType',
  properties: {
    id: 0,
    itemName: 0
  }
});
var nameData = ["選單 1", "選單 2", "選單 3", "選單 4", "選單 5", "選單 6", "選單 7", "選單 8", "選單 11", "選單 10"];
cc.Class({
  "extends": cc.Component,
  properties: {
    itemPrefab: cc.Prefab
  },
  onLoad: function onLoad() {
    for (var i = 0; i < nameData.length; i++) {
      var item = cc.instantiate(this.itemPrefab);
      this.node.addChild(item);
      item.getComponent('ItemTemplate - 001').init({
        itemName: nameData[i]
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTGVmdE1lbnUvSXRlbUxpc3QgLSAwMDEuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJuYW1lRGF0YSIsIkNvbXBvbmVudCIsIml0ZW1QcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJpIiwibGVuZ3RoIiwiaXRlbSIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ2hCQyxFQUFBQSxJQUFJLEVBQUUsVUFEVTtBQUVoQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRSxDQURJO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUZGO0FBRkksQ0FBVCxDQUFYO0FBUUEsSUFBSUMsUUFBUSxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsTUFBekMsRUFBaUQsTUFBakQsRUFBeUQsTUFBekQsRUFBaUUsT0FBakUsRUFBMEUsT0FBMUUsQ0FBZjtBQUVBTixFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ08sU0FEUDtBQUVMSixFQUFBQSxVQUFVLEVBQUU7QUFDUkssSUFBQUEsVUFBVSxFQUFFUixFQUFFLENBQUNTO0FBRFAsR0FGUDtBQUtMQyxFQUFBQSxNQUxLLG9CQUtLO0FBQ04sU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxRQUFRLENBQUNNLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFVBQUlFLElBQUksR0FBR2IsRUFBRSxDQUFDYyxXQUFILENBQWUsS0FBS04sVUFBcEIsQ0FBWDtBQUNBLFdBQUtPLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxDQUFDSSxZQUFMLENBQWtCLG9CQUFsQixFQUF3Q0MsSUFBeEMsQ0FBNkM7QUFDekNiLFFBQUFBLFFBQVEsRUFBRUMsUUFBUSxDQUFDSyxDQUFEO0FBRHVCLE9BQTdDO0FBR0g7QUFFSjtBQWRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdJdGVtVHlwZScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaXRlbU5hbWU6IDAsXG4gICAgfVxufSk7XG5cbnZhciBuYW1lRGF0YSA9IFtcIumBuOWWriAxXCIsIFwi6YG45ZauIDJcIiwgXCLpgbjllq4gM1wiLCBcIumBuOWWriA0XCIsIFwi6YG45ZauIDVcIiwgXCLpgbjllq4gNlwiLCBcIumBuOWWriA3XCIsIFwi6YG45ZauIDhcIiwgXCLpgbjllq4gMTFcIiwgXCLpgbjllq4gMTBcIl1cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYlxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ0l0ZW1UZW1wbGF0ZSAtIDAwMScpLmluaXQoe1xuICAgICAgICAgICAgICAgIGl0ZW1OYW1lOiBuYW1lRGF0YVtpXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/LeftMenu/ScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1414x0o29EhqS4bojtMK33', 'ScrollView');
// script/LeftMenu/ScrollView.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scrollView: cc.ScrollView
  },
  onArrowClick: function onArrowClick(event) {
    var node = event.target; // var button = node.getComponent(cc.Button);

    if (node.name === "UP") {
      // console.log(this.scrollView)
      this.scrollView.scrollToOffset(cc.v2(0, this.scrollView.getScrollOffset().y - 120), 1);
    } else if (node.name === "DOWN") {
      this.scrollView.scrollToOffset(cc.v2(0, this.scrollView.getScrollOffset().y + 120), 1);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTGVmdE1lbnUvU2Nyb2xsVmlldy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjcm9sbFZpZXciLCJTY3JvbGxWaWV3Iiwib25BcnJvd0NsaWNrIiwiZXZlbnQiLCJub2RlIiwidGFyZ2V0IiwibmFtZSIsInNjcm9sbFRvT2Zmc2V0IiwidjIiLCJnZXRTY3JvbGxPZmZzZXQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLO0FBRFAsR0FIUDtBQU9MQyxFQUFBQSxZQUFZLEVBQUUsc0JBQVNDLEtBQVQsRUFBZ0I7QUFDMUIsUUFBSUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLE1BQWpCLENBRDBCLENBRTFCOztBQUVBLFFBQUlELElBQUksQ0FBQ0UsSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3BCO0FBQ0EsV0FBS04sVUFBTCxDQUFnQk8sY0FBaEIsQ0FBK0JYLEVBQUUsQ0FBQ1ksRUFBSCxDQUFNLENBQU4sRUFBUyxLQUFLUixVQUFMLENBQWdCUyxlQUFoQixHQUFrQ0MsQ0FBbEMsR0FBc0MsR0FBL0MsQ0FBL0IsRUFBb0YsQ0FBcEY7QUFDSCxLQUhELE1BSUssSUFBSU4sSUFBSSxDQUFDRSxJQUFMLEtBQWMsTUFBbEIsRUFBMEI7QUFDM0IsV0FBS04sVUFBTCxDQUFnQk8sY0FBaEIsQ0FBK0JYLEVBQUUsQ0FBQ1ksRUFBSCxDQUFNLENBQU4sRUFBUyxLQUFLUixVQUFMLENBQWdCUyxlQUFoQixHQUFrQ0MsQ0FBbEMsR0FBc0MsR0FBL0MsQ0FBL0IsRUFBb0YsQ0FBcEY7QUFDSDtBQUNKO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcsXG4gICAgfSxcblxuICAgIG9uQXJyb3dDbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIC8vIHZhciBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gXCJVUFwiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbFZpZXcpXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpLnkgLSAxMjApLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLm5hbWUgPT09IFwiRE9XTlwiKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpLnkgKyAxMjApLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MyPrefabScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58080e6Tj1PoaGECZ+RYUS4', 'MyPrefabScript');
// script/MyPrefabScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Color: cc.Node,
    Text: {
      "default": null,
      type: cc.Label
    }
  },
  setNumberBy: function setNumberBy(number) {
    //這邊直接將我們的Label字串設定為 No.#
    this.Text.string = 'No.' + number;
  },
  Run: function Run() {
    //這邊建立一個永遠不停止的repeat，動作是每1秒轉360度
    var action = cc.repeatForever(cc.rotateBy(1, 360)); //讓我們的彩球旋轉吧!

    this.Color.node.runAction(action);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTXlQcmVmYWJTY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJDb2xvciIsIk5vZGUiLCJUZXh0IiwidHlwZSIsIkxhYmVsIiwic2V0TnVtYmVyQnkiLCJudW1iZXIiLCJzdHJpbmciLCJSdW4iLCJhY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwicm90YXRlQnkiLCJub2RlIiwicnVuQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FDSTtBQUNJLGFBQVNELEVBQUUsQ0FBQ0UsU0FEaEI7QUFFSUMsRUFBQUEsVUFBVSxFQUNWO0FBQ0lDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxJQURkO0FBRUlDLElBQUFBLElBQUksRUFBRTtBQUFFLGlCQUFTLElBQVg7QUFBaUJDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUExQjtBQUZWLEdBSEo7QUFRSUMsRUFBQUEsV0FBVyxFQUFFLHFCQUFVQyxNQUFWLEVBQ2I7QUFDSTtBQUNBLFNBQUtKLElBQUwsQ0FBVUssTUFBVixHQUFxQixRQUFRRCxNQUE3QjtBQUNILEdBWkw7QUFjSUUsRUFBQUEsR0FBRyxFQUFFLGVBQ0w7QUFDSTtBQUNBLFFBQUlDLE1BQU0sR0FBR2IsRUFBRSxDQUFDYyxhQUFILENBQWtCZCxFQUFFLENBQUNlLFFBQUgsQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLENBQWxCLENBQWIsQ0FGSixDQUdJOztBQUNBLFNBQUtYLEtBQUwsQ0FBV1ksSUFBWCxDQUFnQkMsU0FBaEIsQ0FBMkJKLE1BQTNCO0FBQ0g7QUFwQkwsQ0FESiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3MoXG4gICAge1xuICAgICAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgICAgIHByb3BlcnRpZXM6IFxuICAgICAgICB7XG4gICAgICAgICAgICBDb2xvcjogY2MuTm9kZSxcbiAgICAgICAgICAgIFRleHQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuTGFiZWwgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgc2V0TnVtYmVyQnk6IGZ1bmN0aW9uKCBudW1iZXIgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mAmemCiuebtOaOpeWwh+aIkeWAkeeahExhYmVs5a2X5Liy6Kit5a6a54K6IE5vLiNcbiAgICAgICAgICAgIHRoaXMuVGV4dC5zdHJpbmcgPSAoICdOby4nICsgbnVtYmVyICk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBSdW46IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/pgJnpgorlu7rnq4vkuIDlgIvmsLjpgaDkuI3lgZzmraLnmoRyZXBlYXTvvIzli5XkvZzmmK/mr48x56eS6L2JMzYw5bqmXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlciggY2Mucm90YXRlQnkoIDEsIDM2MCApICk7XG4gICAgICAgICAgICAvL+iuk+aIkeWAkeeahOW9qeeQg+aXi+i9ieWQpyFcbiAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5ydW5BY3Rpb24oIGFjdGlvbiApO1xuICAgICAgICB9XG4gICAgfSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1a31Jx8jtHILW/vAZRr6S+', 'login');
// script/login.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  toLobby: function toLobby() {
    cc.director.loadScene('lobby');
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbG9naW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInRvTG9iYnkiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlEsR0FIUDtBQXFCTDtBQUVBO0FBRUFDLEVBQUFBLEtBekJLLG1CQXlCSSxDQUVSLENBM0JJO0FBNkJMQyxFQUFBQSxPQTdCSyxxQkE2Qkk7QUFDTEwsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsT0FBdEI7QUFDSCxHQS9CSSxDQWlDTDs7QUFqQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdG9Mb2JieSgpe1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2xvYmJ5Jyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/IndexScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99d3eLg9mBN7I5aBj3JHfdS', 'IndexScript');
// script/IndexScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    ClickCount: 0 //除了計數器外，這邊我故意留空，我準備全部使用代碼來控制

  },
  onLoad: function onLoad() {
    //首先，我們先找到我們剛剛新增的按鈕
    var NodeBtnAdd = cc.find('Canvas/BtnAdd'); //cc.find回傳的是Node
    //然後，記得養成時時檢查變數是否存在、並且寫Log的習慣，
    //上面的參數如果打錯，這邊就會印出Log，並且也不會再往下執行

    if (!NodeBtnAdd) {
      cc.log('找不到Button, 請確認find的參數正確');
      return;
    } //接著，我們將監聽按鈕的點擊事件，關聯至下方的onBtnAddClicked方法


    NodeBtnAdd.on(cc.Node.EventType.TOUCH_END, this.onBtnAddClicked.bind(this));
  },
  //由於我們打算動態新增Prefab來進行使用，所以我們在這個點擊事件中進行載入
  onBtnAddClicked: function onBtnAddClicked() {
    //我們先動態取得Canvas
    var CanvasNode = cc.find('Canvas');

    if (!CanvasNode) {
      cc.log('找不到Canvas畫布，請確認你的場景裡有Canvas');
      return;
    } //這邊先將 this 指標存到另一個變數, 在別的方法裡this是會被改變的


    var root = this; //Prefab的路徑
    //不過因為我們的MyPrefab直接就放在 /assets/resources/ 下，就直接寫

    var prefabPath = 'MyPrefab'; //Ps. 假設你是放在在resources下的prefabs資料夾中，你就得寫 'prefabs/MyPrefab'
    //這邊我們新增一個私有方法，來做為載入Prefab時的方法
    //(當然你也可以直接寫在loadRes參數上，我只是覺得這樣比較容易看清楚)

    var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
      //一樣，養成檢查的好習慣
      if (errorMessage) {
        cc.log('載入Prefab失敗, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        cc.log('你載入的不是Prefab, 你做了什麼事?');
        return;
      } //這個是型別的檢查
      //我們將root裡的計數器加1


      root.ClickCount++; //接著，我們就可以進行實例化了

      var newMyPrefab = cc.instantiate(loadedResource); //我們先將這個建立出來的Prefab加入畫布裡

      CanvasNode.addChild(newMyPrefab); //我們要開始設定位置，因為當時在Prefab我們沒有指定最外層的大小
      //所以這邊我們要取得在MyPrefab中，我們加入的 "SplitButtons_01" 這張圖片的高度

      var buttonBG = newMyPrefab.getChildByName('SplitButtons_01');

      if (!buttonBG) {
        cc.log('找不到指定名稱的Node, 是不是哪裡搞錯了？');
        return;
      } //所以，y軸就是利用計數器乘上圖片的高度，再加上10額外邊界後，再減去場景的高度除以二


      var newY = root.ClickCount * buttonBG.height + 1 - CanvasNode.height / 2 - 400; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

      console.log(newY); //設定位置，這邊x軸不變

      newMyPrefab.setPosition(0, newY); //接著，我們取得MyPrefab裡的Script，這個就是我們當時定的名稱
      //var newMyPrefabScript = newMyPrefab.getComponent( 'script/MyPrefabScript' );
      //然後，我們就可以呼叫我們寫在該腳本中的方法了
      //這邊我直接將計數器的值傳進去了
      //newMyPrefabScript.setNumberBy( root.ClickCount );
      //然後，我新增了一個CallBack事件，使用計時器機制，讓它在1秒之後再執行
      //var startRun = function(){ newMyPrefabScript.Run(); };
      //呼叫計時器
      //newMyPrefabScript.scheduleOnce( startRun, 1 );
    }; //這邊才是真的使用cc.loader進行載入，並且呼叫我們上面寫的方法


    cc.loader.loadRes(prefabPath, onResourceLoaded);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSW5kZXhTY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJDbGlja0NvdW50Iiwib25Mb2FkIiwiTm9kZUJ0bkFkZCIsImZpbmQiLCJsb2ciLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvbkJ0bkFkZENsaWNrZWQiLCJiaW5kIiwiQ2FudmFzTm9kZSIsInJvb3QiLCJwcmVmYWJQYXRoIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwiUHJlZmFiIiwibmV3TXlQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwiYnV0dG9uQkciLCJnZXRDaGlsZEJ5TmFtZSIsIm5ld1kiLCJoZWlnaHQiLCJjb25zb2xlIiwic2V0UG9zaXRpb24iLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FDSTtBQUNJLGFBQVNELEVBQUUsQ0FBQ0UsU0FEaEI7QUFFSUMsRUFBQUEsVUFBVSxFQUNWO0FBQ0lDLElBQUFBLFVBQVUsRUFBRSxDQURoQixDQUVJOztBQUZKLEdBSEo7QUFRSUMsRUFBQUEsTUFBTSxFQUFFLGtCQUNSO0FBQ0k7QUFDQSxRQUFJQyxVQUFVLEdBQUdOLEVBQUUsQ0FBQ08sSUFBSCxDQUFTLGVBQVQsQ0FBakIsQ0FGSixDQUVpRDtBQUU3QztBQUNBOztBQUNBLFFBQUksQ0FBQ0QsVUFBTCxFQUFrQjtBQUFFTixNQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBTyx5QkFBUDtBQUFtQztBQUFTLEtBTnBFLENBUUk7OztBQUNBRixJQUFBQSxVQUFVLENBQUNHLEVBQVgsQ0FBZVQsRUFBRSxDQUFDVSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQWpDLEVBQTRDLEtBQUtDLGVBQUwsQ0FBcUJDLElBQXJCLENBQTJCLElBQTNCLENBQTVDO0FBQ0gsR0FuQkw7QUFxQkk7QUFDQUQsRUFBQUEsZUFBZSxFQUFFLDJCQUNqQjtBQUNJO0FBQ0EsUUFBSUUsVUFBVSxHQUFHZixFQUFFLENBQUNPLElBQUgsQ0FBUyxRQUFULENBQWpCOztBQUNBLFFBQUksQ0FBQ1EsVUFBTCxFQUFrQjtBQUFFZixNQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBUSw2QkFBUjtBQUF5QztBQUFTLEtBSDFFLENBS0k7OztBQUNBLFFBQUlRLElBQUksR0FBRyxJQUFYLENBTkosQ0FRSTtBQUNBOztBQUNBLFFBQUlDLFVBQVUsR0FBRyxVQUFqQixDQVZKLENBV0k7QUFHQTtBQUNBOztBQUNBLFFBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsWUFBVixFQUF3QkMsY0FBeEIsRUFDdkI7QUFDSTtBQUNBLFVBQUlELFlBQUosRUFBbUI7QUFBRW5CLFFBQUFBLEVBQUUsQ0FBQ1EsR0FBSCxDQUFRLG9CQUFvQlcsWUFBNUI7QUFBNEM7QUFBUzs7QUFDMUUsVUFBSSxFQUFHQyxjQUFjLFlBQVlwQixFQUFFLENBQUNxQixNQUFoQyxDQUFKLEVBQStDO0FBQUVyQixRQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBUSx1QkFBUjtBQUFtQztBQUFTLE9BSGpHLENBR2tHO0FBRTlGOzs7QUFDQVEsTUFBQUEsSUFBSSxDQUFDWixVQUFMLEdBTkosQ0FRSTs7QUFDQSxVQUFJa0IsV0FBVyxHQUFHdEIsRUFBRSxDQUFDdUIsV0FBSCxDQUFnQkgsY0FBaEIsQ0FBbEIsQ0FUSixDQVdJOztBQUNBTCxNQUFBQSxVQUFVLENBQUNTLFFBQVgsQ0FBcUJGLFdBQXJCLEVBWkosQ0FjSTtBQUNBOztBQUNBLFVBQUlHLFFBQVEsR0FBR0gsV0FBVyxDQUFDSSxjQUFaLENBQTRCLGlCQUE1QixDQUFmOztBQUNBLFVBQUksQ0FBQ0QsUUFBTCxFQUFnQjtBQUFFekIsUUFBQUEsRUFBRSxDQUFDUSxHQUFILENBQU8seUJBQVA7QUFBbUM7QUFBUyxPQWpCbEUsQ0FtQkk7OztBQUNBLFVBQUltQixJQUFJLEdBQUtYLElBQUksQ0FBQ1osVUFBTCxHQUFrQnFCLFFBQVEsQ0FBQ0csTUFBN0IsR0FBd0MsQ0FBeEMsR0FBOENiLFVBQVUsQ0FBQ2EsTUFBWCxHQUFvQixDQUFsRSxHQUFzRSxHQUFqRixDQXBCSixDQXFCSTs7QUFHQUMsTUFBQUEsT0FBTyxDQUFDckIsR0FBUixDQUFZbUIsSUFBWixFQXhCSixDQXlCSTs7QUFDQUwsTUFBQUEsV0FBVyxDQUFDUSxXQUFaLENBQXlCLENBQXpCLEVBQTRCSCxJQUE1QixFQTFCSixDQTRCSTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDSCxLQTFDRCxDQWhCSixDQTRESTs7O0FBQ0EzQixJQUFBQSxFQUFFLENBQUMrQixNQUFILENBQVVDLE9BQVYsQ0FBbUJmLFVBQW5CLEVBQStCQyxnQkFBL0I7QUFDSDtBQXJGTCxDQURKIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyhcbiAgICB7XG4gICAgICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICAgICAgcHJvcGVydGllczogXG4gICAgICAgIHtcbiAgICAgICAgICAgIENsaWNrQ291bnQ6IDAsXG4gICAgICAgICAgICAvL+mZpOS6huioiOaVuOWZqOWklu+8jOmAmemCiuaIkeaVheaEj+eVmeepuu+8jOaIkea6luWCmeWFqOmDqOS9v+eUqOS7o+eivOS+huaOp+WItlxuICAgICAgICB9LFxuICAgIFxuICAgICAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6aaW5YWI77yM5oiR5YCR5YWI5om+5Yiw5oiR5YCR5Ymb5Ymb5paw5aKe55qE5oyJ6YiVXG4gICAgICAgICAgICB2YXIgTm9kZUJ0bkFkZCA9IGNjLmZpbmQoICdDYW52YXMvQnRuQWRkJyApOyAvL2NjLmZpbmTlm57lgrPnmoTmmK9Ob2RlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8v54S25b6M77yM6KiY5b6X6aSK5oiQ5pmC5pmC5qqi5p+l6K6K5pW45piv5ZCm5a2Y5Zyo44CB5Lim5LiU5a+rTG9n55qE57+S5oWj77yMXG4gICAgICAgICAgICAvL+S4iumdoueahOWPg+aVuOWmguaenOaJk+mMr++8jOmAmemCiuWwseacg+WNsOWHukxvZ++8jOS4puS4lOS5n+S4jeacg+WGjeW+gOS4i+Wft+ihjFxuICAgICAgICAgICAgaWYoICFOb2RlQnRuQWRkICkgeyBjYy5sb2coJ+aJvuS4jeWIsEJ1dHRvbiwg6KuL56K66KqNZmluZOeahOWPg+aVuOato+eiuicpOyByZXR1cm47IH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy/mjqXokZfvvIzmiJHlgJHlsIfnm6Pogb3mjInpiJXnmoTpu57mk4rkuovku7bvvIzpl5zoga/oh7PkuIvmlrnnmoRvbkJ0bkFkZENsaWNrZWTmlrnms5VcbiAgICAgICAgICAgIE5vZGVCdG5BZGQub24oIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0bkFkZENsaWNrZWQuYmluZCggdGhpcyApICk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8v55Sx5pa85oiR5YCR5omT566X5YuV5oWL5paw5aKeUHJlZmFi5L6G6YCy6KGM5L2/55So77yM5omA5Lul5oiR5YCR5Zyo6YCZ5YCL6bue5pOK5LqL5Lu25Lit6YCy6KGM6LyJ5YWlXG4gICAgICAgIG9uQnRuQWRkQ2xpY2tlZDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+aIkeWAkeWFiOWLleaFi+WPluW+l0NhbnZhc1xuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCAnQ2FudmFzJyApO1xuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5sb2coICfmib7kuI3liLBDYW52YXPnlavluIPvvIzoq4vnorroqo3kvaDnmoTloLTmma/oo6HmnIlDYW52YXMnICk7IHJldHVybjsgfSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy/pgJnpgorlhYjlsIcgdGhpcyDmjIfmqJnlrZjliLDlj6bkuIDlgIvorormlbgsIOWcqOWIpeeahOaWueazleijoXRoaXPmmK/mnIPooqvmlLnorornmoRcbiAgICAgICAgICAgIHZhciByb290ID0gdGhpczsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vUHJlZmFi55qE6Lev5b6RXG4gICAgICAgICAgICAvL+S4jemBjuWboOeCuuaIkeWAkeeahE15UHJlZmFi55u05o6l5bCx5pS+5ZyoIC9hc3NldHMvcmVzb3VyY2VzLyDkuIvvvIzlsLHnm7TmjqXlr6tcbiAgICAgICAgICAgIHZhciBwcmVmYWJQYXRoID0gJ015UHJlZmFiJztcbiAgICAgICAgICAgIC8vUHMuIOWBh+ioreS9oOaYr+aUvuWcqOWcqHJlc291cmNlc+S4i+eahHByZWZhYnPos4fmlpnlpL7kuK3vvIzkvaDlsLHlvpflr6sgJ3ByZWZhYnMvTXlQcmVmYWInXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy/pgJnpgormiJHlgJHmlrDlop7kuIDlgIvnp4HmnInmlrnms5XvvIzkvoblgZrngrrovInlhaVQcmVmYWLmmYLnmoTmlrnms5VcbiAgICAgICAgICAgIC8vKOeVtueEtuS9oOS5n+WPr+S7peebtOaOpeWvq+WcqGxvYWRSZXPlj4PmlbjkuIrvvIzmiJHlj6rmmK/oprrlvpfpgJnmqKPmr5TovIPlrrnmmJPnnIvmuIXmpZopXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKCBlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+S4gOaoo++8jOmkiuaIkOaqouafpeeahOWlvee/kuaFo1xuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNjLmxvZyggJ+i8ieWFpVByZWZhYuWkseaVlywg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi8ieWFpeeahOS4jeaYr1ByZWZhYiwg5L2g5YGa5LqG5LuA6bq85LqLPycgKTsgcmV0dXJuOyB9IC8v6YCZ5YCL5piv5Z6L5Yil55qE5qqi5p+lXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/miJHlgJHlsIdyb2906KOh55qE6KiI5pW45Zmo5YqgMVxuICAgICAgICAgICAgICAgIHJvb3QuQ2xpY2tDb3VudCsrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5bCx5Y+v5Lul6YCy6KGM5a+m5L6L5YyW5LqGXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/miJHlgJHlhYjlsIfpgJnlgIvlu7rnq4vlh7rkvobnmoRQcmVmYWLliqDlhaXnlavluIPoo6FcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5oiR5YCR6KaB6ZaL5aeL6Kit5a6a5L2N572u77yM5Zug54K655W25pmC5ZyoUHJlZmFi5oiR5YCR5rKS5pyJ5oyH5a6a5pyA5aSW5bGk55qE5aSn5bCPXG4gICAgICAgICAgICAgICAgLy/miYDku6XpgJnpgormiJHlgJHopoHlj5blvpflnKhNeVByZWZhYuS4re+8jOaIkeWAkeWKoOWFpeeahCBcIlNwbGl0QnV0dG9uc18wMVwiIOmAmeW8teWclueJh+eahOmrmOW6plxuICAgICAgICAgICAgICAgIHZhciBidXR0b25CRyA9IG5ld015UHJlZmFiLmdldENoaWxkQnlOYW1lKCAnU3BsaXRCdXR0b25zXzAxJyApO1xuICAgICAgICAgICAgICAgIGlmKCAhYnV0dG9uQkcgKSB7IGNjLmxvZygn5om+5LiN5Yiw5oyH5a6a5ZCN56ix55qETm9kZSwg5piv5LiN5piv5ZOq6KOh5pCe6Yyv5LqG77yfJyk7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5omA5Lul77yMeei7uOWwseaYr+WIqeeUqOioiOaVuOWZqOS5mOS4iuWclueJh+eahOmrmOW6pu+8jOWGjeWKoOS4ijEw6aGN5aSW6YKK55WM5b6M77yM5YaN5rib5Y675aC05pmv55qE6auY5bqm6Zmk5Lul5LqMXG4gICAgICAgICAgICAgICAgdmFyIG5ld1kgPSAoIHJvb3QuQ2xpY2tDb3VudCAqIGJ1dHRvbkJHLmhlaWdodCApICsgMSAtICggQ2FudmFzTm9kZS5oZWlnaHQgLyAyICktNDAwO1xuICAgICAgICAgICAgICAgIC8v5rib5Y675aC05pmv6auY5bqm6YCZ5YCL5YuV5L2c77yM5piv54K65LqG6K6T5q+P6bue5pOK5LiA5qyh5oyJ6YiV77yM5oiR5YCR55qEUHJlZmFi5bCx5LiA55u05b6A5LiK55Si55SfXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdZKTtcbiAgICAgICAgICAgICAgICAvL+ioreWumuS9jee9ru+8jOmAmemCinjou7jkuI3oropcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5zZXRQb3NpdGlvbiggMCwgbmV3WSApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5Y+W5b6XTXlQcmVmYWLoo6HnmoRTY3JpcHTvvIzpgJnlgIvlsLHmmK/miJHlgJHnlbbmmYLlrprnmoTlkI3nqLFcbiAgICAgICAgICAgICAgICAvL3ZhciBuZXdNeVByZWZhYlNjcmlwdCA9IG5ld015UHJlZmFiLmdldENvbXBvbmVudCggJ3NjcmlwdC9NeVByZWZhYlNjcmlwdCcgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL+eEtuW+jO+8jOaIkeWAkeWwseWPr+S7peWRvOWPq+aIkeWAkeWvq+WcqOipsuiFs+acrOS4reeahOaWueazleS6hlxuICAgICAgICAgICAgICAgIC8v6YCZ6YKK5oiR55u05o6l5bCH6KiI5pW45Zmo55qE5YC85YKz6YCy5Y675LqGXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9uZXdNeVByZWZhYlNjcmlwdC5zZXROdW1iZXJCeSggcm9vdC5DbGlja0NvdW50ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/nhLblvozvvIzmiJHmlrDlop7kuobkuIDlgItDYWxsQmFja+S6i+S7tu+8jOS9v+eUqOioiOaZguWZqOapn+WItu+8jOiuk+Wug+WcqDHnp5LkuYvlvozlho3ln7fooYxcbiAgICAgICAgICAgICAgICAvL3ZhciBzdGFydFJ1biA9IGZ1bmN0aW9uKCl7IG5ld015UHJlZmFiU2NyaXB0LlJ1bigpOyB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5ZG85Y+r6KiI5pmC5ZmoXG4gICAgICAgICAgICAgICAgLy9uZXdNeVByZWZhYlNjcmlwdC5zY2hlZHVsZU9uY2UoIHN0YXJ0UnVuLCAxICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL+mAmemCiuaJjeaYr+ecn+eahOS9v+eUqGNjLmxvYWRlcumAsuihjOi8ieWFpe+8jOS4puS4lOWRvOWPq+aIkeWAkeS4iumdouWvq+eahOaWueazlVxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoIHByZWZhYlBhdGgsIG9uUmVzb3VyY2VMb2FkZWQgKTtcbiAgICAgICAgfSxcbiAgICB9KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ItemTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7debbJV7GRGE7U3d5uYF5+c', 'ItemTemplate');
// script/ItemTemplate.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    id: 0,
    icon: cc.Sprite,
    itemName: cc.Label,
    itemPrice: cc.Label
  },
  init: function init(data) {
    // 加载 SpriteFrame
    var self = this;
    cc.resources.load(data.iconSF, cc.SpriteFrame, function (err, spriteFrame) {
      self.icon.spriteFrame = spriteFrame;
    });
    this.id = data.id;
    this.itemName.string = data.itemName;
    this.itemPrice.string = data.itemPrice;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbVRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaWQiLCJpY29uIiwiU3ByaXRlIiwiaXRlbU5hbWUiLCJMYWJlbCIsIml0ZW1QcmljZSIsImluaXQiLCJkYXRhIiwic2VsZiIsInJlc291cmNlcyIsImxvYWQiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRkQ7QUFHUkMsSUFBQUEsUUFBUSxFQUFFUCxFQUFFLENBQUNRLEtBSEw7QUFJUkMsSUFBQUEsU0FBUyxFQUFFVCxFQUFFLENBQUNRO0FBSk4sR0FGUDtBQVFMRSxFQUFBQSxJQUFJLEVBQUUsY0FBVUMsSUFBVixFQUFnQjtBQUNsQjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FaLElBQUFBLEVBQUUsQ0FBQ2EsU0FBSCxDQUFhQyxJQUFiLENBQWtCSCxJQUFJLENBQUNJLE1BQXZCLEVBQStCZixFQUFFLENBQUNnQixXQUFsQyxFQUErQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7QUFDdkVOLE1BQUFBLElBQUksQ0FBQ1AsSUFBTCxDQUFVYSxXQUFWLEdBQXdCQSxXQUF4QjtBQUNILEtBRkQ7QUFHQSxTQUFLZCxFQUFMLEdBQVVPLElBQUksQ0FBQ1AsRUFBZjtBQUNBLFNBQUtHLFFBQUwsQ0FBY1ksTUFBZCxHQUF1QlIsSUFBSSxDQUFDSixRQUE1QjtBQUNBLFNBQUtFLFNBQUwsQ0FBZVUsTUFBZixHQUF3QlIsSUFBSSxDQUFDRixTQUE3QjtBQUNIO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaWNvbjogY2MuU3ByaXRlLFxuICAgICAgICBpdGVtTmFtZTogY2MuTGFiZWwsXG4gICAgICAgIGl0ZW1QcmljZTogY2MuTGFiZWxcbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIOWKoOi9vSBTcHJpdGVGcmFtZVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGRhdGEuaWNvblNGLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHNlbGYuaWNvbi5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMuaXRlbU5hbWUuc3RyaW5nID0gZGF0YS5pdGVtTmFtZTtcbiAgICAgICAgdGhpcy5pdGVtUHJpY2Uuc3RyaW5nID0gZGF0YS5pdGVtUHJpY2U7XG4gICAgfVxufSk7Il19
//------QC-SOURCE-SPLIT------
