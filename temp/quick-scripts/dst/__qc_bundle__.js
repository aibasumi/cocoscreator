
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
<<<<<<< HEAD
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
                    var __filename = 'preview-scripts/assets/script/ItemTemplate.js';
=======
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
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

<<<<<<< HEAD
//include gamelist
var gamelist = require("gameCardConfig");

=======
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
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
<<<<<<< HEAD
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
=======
    Count: 0,
    Item: cc.Prefab
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
<<<<<<< HEAD
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
=======
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
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTXlQcmVmYWJTY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJDb2xvciIsIk5vZGUiLCJUZXh0IiwidHlwZSIsIkxhYmVsIiwic2V0TnVtYmVyQnkiLCJudW1iZXIiLCJzdHJpbmciLCJSdW4iLCJhY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwicm90YXRlQnkiLCJub2RlIiwicnVuQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FDSTtBQUNJLGFBQVNELEVBQUUsQ0FBQ0UsU0FEaEI7QUFFSUMsRUFBQUEsVUFBVSxFQUNWO0FBQ0lDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxJQURkO0FBRUlDLElBQUFBLElBQUksRUFBRTtBQUFFLGlCQUFTLElBQVg7QUFBaUJDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUExQjtBQUZWLEdBSEo7QUFRSUMsRUFBQUEsV0FBVyxFQUFFLHFCQUFVQyxNQUFWLEVBQ2I7QUFDSTtBQUNBLFNBQUtKLElBQUwsQ0FBVUssTUFBVixHQUFxQixRQUFRRCxNQUE3QjtBQUNILEdBWkw7QUFjSUUsRUFBQUEsR0FBRyxFQUFFLGVBQ0w7QUFDSTtBQUNBLFFBQUlDLE1BQU0sR0FBR2IsRUFBRSxDQUFDYyxhQUFILENBQWtCZCxFQUFFLENBQUNlLFFBQUgsQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLENBQWxCLENBQWIsQ0FGSixDQUdJOztBQUNBLFNBQUtYLEtBQUwsQ0FBV1ksSUFBWCxDQUFnQkMsU0FBaEIsQ0FBMkJKLE1BQTNCO0FBQ0g7QUFwQkwsQ0FESiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3MoXG4gICAge1xuICAgICAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgICAgIHByb3BlcnRpZXM6IFxuICAgICAgICB7XG4gICAgICAgICAgICBDb2xvcjogY2MuTm9kZSxcbiAgICAgICAgICAgIFRleHQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuTGFiZWwgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgc2V0TnVtYmVyQnk6IGZ1bmN0aW9uKCBudW1iZXIgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mAmemCiuebtOaOpeWwh+aIkeWAkeeahExhYmVs5a2X5Liy6Kit5a6a54K6IE5vLiNcbiAgICAgICAgICAgIHRoaXMuVGV4dC5zdHJpbmcgPSAoICdOby4nICsgbnVtYmVyICk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBSdW46IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/pgJnpgorlu7rnq4vkuIDlgIvmsLjpgaDkuI3lgZzmraLnmoRyZXBlYXTvvIzli5XkvZzmmK/mr48x56eS6L2JMzYw5bqmXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlciggY2Mucm90YXRlQnkoIDEsIDM2MCApICk7XG4gICAgICAgICAgICAvL+iuk+aIkeWAkeeahOW9qeeQg+aXi+i9ieWQpyFcbiAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5ydW5BY3Rpb24oIGFjdGlvbiApO1xuICAgICAgICB9XG4gICAgfSk7Il19
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
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImdhbWVDYXJkRGF0YSIsIkNvbXBvbmVudCIsIkNvdW50IiwiUHJlZmFiIiwib25Mb2FkIiwiQ2FudmFzTm9kZSIsImZpbmQiLCJsb2ciLCJwcmVmYWJQYXRoIiwicm9vdCIsImZvckVhY2giLCJpdGVtIiwibG9hZGVyIiwibG9hZFJlcyIsImVycm9yTWVzc2FnZSIsInByZWZhYiIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImJ1dHRvbkJHIiwiZ2V0Q2hpbGRCeU5hbWUiLCJuZXdYIiwid2lkdGgiLCJzZXRQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFLE1BRFU7QUFFaEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxFQUFFLEVBQUUsQ0FESTtBQUVSQyxJQUFBQSxRQUFRLEVBQUUsRUFGRjtBQUdSQyxJQUFBQSxTQUFTLEVBQUUsQ0FISDtBQUlSQyxJQUFBQSxNQUFNLEVBQUVQLEVBQUUsQ0FBQ1E7QUFKSDtBQUZJLENBQVQsQ0FBWDtBQVVBLElBQUlDLFlBQVksR0FBRyxDQUNmO0FBQ0lMLEVBQUFBLEVBQUUsRUFBQyxDQURQO0FBRUlDLEVBQUFBLFFBQVEsRUFBRSxLQUZkO0FBR0lDLEVBQUFBLFNBQVMsRUFBRSxFQUhmO0FBSUlDLEVBQUFBLE1BQU0sRUFBRTtBQUpaLENBRGUsRUFPZjtBQUNJSCxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxRQUFRLEVBQUUsS0FGZDtBQUdJQyxFQUFBQSxTQUFTLEVBQUUsRUFIZjtBQUlJQyxFQUFBQSxNQUFNLEVBQUU7QUFKWixDQVBlLEVBYWY7QUFDSUgsRUFBQUEsRUFBRSxFQUFDLENBRFA7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLEtBRmQ7QUFHSUMsRUFBQUEsU0FBUyxFQUFFLEVBSGY7QUFJSUMsRUFBQUEsTUFBTSxFQUFFO0FBSlosQ0FiZSxFQW1CZjtBQUNJSCxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxRQUFRLEVBQUUsS0FGZDtBQUdJQyxFQUFBQSxTQUFTLEVBQUUsRUFIZjtBQUlJQyxFQUFBQSxNQUFNLEVBQUU7QUFKWixDQW5CZSxFQXlCZjtBQUNJSCxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxRQUFRLEVBQUUsS0FGZDtBQUdJQyxFQUFBQSxTQUFTLEVBQUUsRUFIZjtBQUlJQyxFQUFBQSxNQUFNLEVBQUU7QUFKWixDQXpCZSxDQUFuQjtBQW9DQVAsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNVLFNBRFA7QUFFTFAsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQVEsSUFBQUEsS0FBSyxFQUFFLENBTEM7QUFNUlosSUFBQUEsSUFBSSxFQUFFQyxFQUFFLENBQUNZO0FBTkQsR0FGUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVLO0FBRU47QUFDQSxRQUFJQyxVQUFVLEdBQUdkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFTLHlCQUFULENBQWpCOztBQUNBLFFBQUksQ0FBQ0QsVUFBTCxFQUFrQjtBQUFFZCxNQUFBQSxFQUFFLENBQUNnQixHQUFILENBQVEsNkJBQVI7QUFBeUM7QUFBUzs7QUFFdEUsUUFBSUMsVUFBVSxHQUFHLE1BQWpCLENBTk0sQ0FRTjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBVCxJQUFBQSxZQUFZLENBQUNVLE9BQWIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3pCcEIsTUFBQUEsRUFBRSxDQUFDcUIsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLFVBQVVDLFlBQVYsRUFBd0JDLE1BQXhCLEVBQWdDO0FBRXRELFlBQUlELFlBQUosRUFBbUI7QUFBRXZCLFVBQUFBLEVBQUUsQ0FBQ2dCLEdBQUgsQ0FBUSxvQkFBb0JPLFlBQTVCO0FBQTRDO0FBQVM7O0FBQzFFLFlBQUksRUFBR0MsTUFBTSxZQUFZeEIsRUFBRSxDQUFDWSxNQUF4QixDQUFKLEVBQXVDO0FBQUVaLFVBQUFBLEVBQUUsQ0FBQ2dCLEdBQUgsQ0FBUSx1QkFBUjtBQUFtQztBQUFTLFNBSC9CLENBR2dDOzs7QUFFdEZFLFFBQUFBLElBQUksQ0FBQ1AsS0FBTCxHQUxzRCxDQU90RDs7QUFDQSxZQUFJYyxXQUFXLEdBQUd6QixFQUFFLENBQUMwQixXQUFILENBQWdCRixNQUFoQixDQUFsQixDQVJzRCxDQVV0RDs7QUFDQVYsUUFBQUEsVUFBVSxDQUFDYSxRQUFYLENBQXFCRixXQUFyQixFQVhzRCxDQWF0RDtBQUNBOztBQUNBLFlBQUlHLFFBQVEsR0FBR0gsV0FBVyxDQUFDSSxjQUFaLENBQTRCLElBQTVCLENBQWY7O0FBQ0EsWUFBSSxDQUFDRCxRQUFMLEVBQWdCO0FBQUU1QixVQUFBQSxFQUFFLENBQUNnQixHQUFILENBQU8seUJBQVA7QUFBbUM7QUFBUyxTQWhCUixDQWtCdEQ7OztBQUNBLFlBQUljLElBQUksR0FBTUYsUUFBUSxDQUFDRyxLQUFULEdBQWViLElBQUksQ0FBQ1AsS0FBdkIsR0FBaUMsQ0FBakMsR0FBc0NHLFVBQVUsQ0FBQ2lCLEtBQVgsR0FBbUIsQ0FBcEUsQ0FuQnNELENBb0J0RDtBQUdBO0FBRUE7O0FBQ0FOLFFBQUFBLFdBQVcsQ0FBQ08sV0FBWixDQUF5QkYsSUFBekIsRUFBK0IsQ0FBQyxHQUFoQztBQUVBTCxRQUFBQSxXQUFXLENBQUNRLFlBQVosQ0FBeUIsY0FBekIsRUFBeUNDLElBQXpDLENBQThDO0FBQzFDOUIsVUFBQUEsRUFBRSxFQUFFZ0IsSUFBSSxDQUFDaEIsRUFEaUM7QUFFMUNDLFVBQUFBLFFBQVEsRUFBRWUsSUFBSSxDQUFDZixRQUYyQjtBQUcxQ0MsVUFBQUEsU0FBUyxFQUFFYyxJQUFJLENBQUNkLFNBSDBCO0FBSTFDQyxVQUFBQSxNQUFNLEVBQUVhLElBQUksQ0FBQ2I7QUFKNkIsU0FBOUM7QUFNSCxPQWxDRDtBQW9DSCxLQXJDRDtBQXNDSDtBQTNESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnSXRlbScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICBpdGVtUHJpY2U6IDAsXG4gICAgICAgIGljb25TRjogY2MuU3ByaXRlRnJhbWVcbiAgICB9XG59KTtcblxudmFyIGdhbWVDYXJkRGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGlkOjEsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjFcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRBXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjIsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjJcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRCXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjMsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjNcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRBXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjQsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjRcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRCXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjUsXG4gICAgICAgIGl0ZW1OYW1lOiBcIumBiuaIsjVcIixcbiAgICAgICAgaXRlbVByaWNlOiAnJyxcbiAgICAgICAgaWNvblNGOiBcImltYWdlL2NhcmRzL2NhcmRBXCIsXG4gICAgfSxcbiAgICBcbiAgXTtcblxuXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBpdGVtczoge1xuICAgICAgICAvLyAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIC8vICAgICB0eXBlOiBJdGVtXG4gICAgICAgIC8vIH0sXG4gICAgICAgIENvdW50OiAwLFxuICAgICAgICBJdGVtOiBjYy5QcmVmYWJcbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICAgICAgLy/miJHlgJHlhYjli5XmhYvlj5blvpdDYW52YXNcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCAnc2Nyb2xsdmlldy92aWV3L2NvbnRlbnQnICk7XG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MubG9nKCAn5om+5LiN5YiwQ2FudmFz55Wr5biD77yM6KuL56K66KqN5L2g55qE5aC05pmv6KOh5pyJQ2FudmFzJyApOyByZXR1cm47IH0gXG5cbiAgICAgICAgdmFyIHByZWZhYlBhdGggPSAnSXRlbSc7XG5cbiAgICAgICAgLy/pgJnpgorlhYjlsIcgdGhpcyDmjIfmqJnlrZjliLDlj6bkuIDlgIvorormlbgsIOWcqOWIpeeahOaWueazleijoXRoaXPmmK/mnIPooqvmlLnorornmoRcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzOyBcbiAgICAgICAgICAgIFxuICAgICAgICBnYW1lQ2FyZERhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiSXRlbVwiLCBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlLCBwcmVmYWIpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNjLmxvZyggJ+i8ieWFpVByZWZhYuWkseaVlywg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYoICEoIHByZWZhYiBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjYy5sb2coICfkvaDovInlhaXnmoTkuI3mmK9QcmVmYWIsIOS9oOWBmuS6huS7gOm6vOS6iz8nICk7IHJldHVybjsgfSAvL+mAmeWAi+aYr+Wei+WIpeeahOaqouafpVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJvb3QuQ291bnQrKztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL+aOpeiRl++8jOaIkeWAkeWwseWPr+S7pemAsuihjOWvpuS+i+WMluS6hlxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBwcmVmYWIgKTtcblxuICAgICAgICAgICAgICAgIC8v5oiR5YCR5YWI5bCH6YCZ5YCL5bu656uL5Ye65L6G55qEUHJlZmFi5Yqg5YWl55Wr5biD6KOhXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcblxuICAgICAgICAgICAgICAgIC8v5oiR5YCR6KaB6ZaL5aeL6Kit5a6a5L2N572u77yM5Zug54K655W25pmC5ZyoUHJlZmFi5oiR5YCR5rKS5pyJ5oyH5a6a5pyA5aSW5bGk55qE5aSn5bCPXG4gICAgICAgICAgICAgICAgLy/miYDku6XpgJnpgormiJHlgJHopoHlj5blvpflnKhNeVByZWZhYuS4re+8jOaIkeWAkeWKoOWFpeeahCBcIlNwbGl0QnV0dG9uc18wMVwiIOmAmeW8teWclueJh+eahOmrmOW6plxuICAgICAgICAgICAgICAgIHZhciBidXR0b25CRyA9IG5ld015UHJlZmFiLmdldENoaWxkQnlOYW1lKCAnYmcnICk7XG4gICAgICAgICAgICAgICAgaWYoICFidXR0b25CRyApIHsgY2MubG9nKCfmib7kuI3liLDmjIflrprlkI3nqLHnmoROb2RlLCDmmK/kuI3mmK/lk6roo6HmkJ7pjK/kuobvvJ8nKTsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgICAvL+aJgOS7pe+8jHnou7jlsLHmmK/liKnnlKjoqIjmlbjlmajkuZjkuIrlnJbniYfnmoTpq5jluqbvvIzlho3liqDkuIoxMOmhjeWklumCiueVjOW+jO+8jOWGjea4m+WOu+WgtOaZr+eahOmrmOW6pumZpOS7peS6jFxuICAgICAgICAgICAgICAgIHZhciBuZXdYID0gKCAgYnV0dG9uQkcud2lkdGgqcm9vdC5Db3VudCApICsgMSAtIChDYW52YXNOb2RlLndpZHRoIC8gMikgO1xuICAgICAgICAgICAgICAgIC8v5rib5Y675aC05pmv6auY5bqm6YCZ5YCL5YuV5L2c77yM5piv54K65LqG6K6T5q+P6bue5pOK5LiA5qyh5oyJ6YiV77yM5oiR5YCR55qEUHJlZmFi5bCx5LiA55u05b6A5LiK55Si55SfXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvL25ld015UHJlZmFiLnNldENvbnRlbnRTaXplKDIwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/oqK3lrprkvY3nva7vvIzpgJnpgop46Lu45LiN6K6KXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuc2V0UG9zaXRpb24oIG5ld1gsIC0xNTAgKTtcblxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmdldENvbXBvbmVudCgnSXRlbVRlbXBsYXRlJykuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZTogaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVByaWNlOiBpdGVtLml0ZW1QcmljZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNGOiBpdGVtLmljb25TRixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59KTsiXX0=
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
<<<<<<< HEAD
                    var __filename = 'preview-scripts/assets/script/scrollview.js';
=======
                    var __filename = 'preview-scripts/assets/script/gameCardConfig.js';
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
<<<<<<< HEAD
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
=======
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
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2

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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2Nyb2xsdmlldy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZlEsR0FIUCxDQXFCTDtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIChcbiAgICAgICAgXG4gICAgLy8gKSxcblxuICAgIC8vIHN0YXJ0ICgpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZ2FtZUNhcmRDb25maWcuanMiXSwibmFtZXMiOlsiY2ZnIiwibGlzdCIsImdhbWVJZCIsImdhbWVQbGF0Zm9ybUlkIiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsR0FBRyxHQUFFO0FBQ0xDLEVBQUFBLElBQUksRUFBRSxDQUVGO0FBQ0lDLElBQUFBLE1BQU0sRUFBQyxZQURYO0FBRUlDLElBQUFBLGNBQWMsRUFBQyxVQUZuQjtBQUdJQyxJQUFBQSxJQUFJLEVBQUM7QUFIVCxHQUZFLEVBT0Y7QUFDSUYsSUFBQUEsTUFBTSxFQUFDLFlBRFg7QUFFSUMsSUFBQUEsY0FBYyxFQUFDLFNBRm5CO0FBR0lDLElBQUFBLElBQUksRUFBQztBQUhULEdBUEU7QUFERCxDQUFUO0FBa0JBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLEdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2ZnID17XG4gICAgbGlzdDogW1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdhbWVJZDonR1RTTE9UMDE0OScsXG4gICAgICAgICAgICBnYW1lUGxhdGZvcm1JZDonU0xPVENOSlAnLFxuICAgICAgICAgICAgbmFtZTon55m855m855m8JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZ2FtZUlkOidHVFNMT1QwMTM5JyxcbiAgICAgICAgICAgIGdhbWVQbGF0Zm9ybUlkOidHVFNMVEhCJyxcbiAgICAgICAgICAgIG5hbWU6J+mHkem8oOi/juiyoeelnicsXG4gICAgICAgIH0sXG5cbiAgICBdXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gY2ZnO1xuXG5cblxuIl19
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
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
var coinboard = [{
  itemName: "尊榮禮包",
  itemPrice: 280000000,
  iconSF: "images/cards/cardA"
}];
cc.Class({
  "extends": cc.Component,
  properties: {
    // items: {
    //     default: [],
    //     type: Item
    // },
    Count: 0,
    itemPrefab: cc.Prefab
  },
  onLoad: function onLoad() {
    //我們先動態取得Canvas
    var CanvasNode = cc.find('scrollview/view/content');

    if (!CanvasNode) {
      cc.log('找不到Canvas畫布，請確認你的場景裡有Canvas');
      return;
    }

    var prefabPath = 'Item'; //這邊先將 this 指標存到另一個變數, 在別的方法裡this是會被改變的

<<<<<<< HEAD
    var root = this; //這邊我們新增一個私有方法，來做為載入Prefab時的方法
    //(當然你也可以直接寫在loadRes參數上，我只是覺得這樣比較容易看清楚)
=======
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
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2

    var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
      root.Count++; //一樣，養成檢查的好習慣

<<<<<<< HEAD
      if (errorMessage) {
        cc.log('載入Prefab失敗, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        cc.log('你載入的不是Prefab, 你做了什麼事?');
        return;
      } //這個是型別的檢查
      //接著，我們就可以進行實例化了

=======
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
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2

      var newMyPrefab = cc.instantiate(loadedResource); //我們先將這個建立出來的Prefab加入畫布裡

<<<<<<< HEAD
      CanvasNode.addChild(newMyPrefab); //我們要開始設定位置，因為當時在Prefab我們沒有指定最外層的大小
      //所以這邊我們要取得在MyPrefab中，我們加入的 "SplitButtons_01" 這張圖片的高度

      var buttonBG = newMyPrefab.getChildByName('bg');

      if (!buttonBG) {
        cc.log('找不到指定名稱的Node, 是不是哪裡搞錯了？');
        return;
      } //所以，y軸就是利用計數器乘上圖片的高度，再加上10額外邊界後，再減去場景的高度除以二


      var newX = buttonBG.width + root.Count * 100 - 750; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

      console.log(newX); //設定位置，這邊x軸不變

      newMyPrefab.setPosition(newX, -150);
      newMyPrefab.getComponent('ItemTemplate').init({
        id: '1111',
        itemName: 'test',
        itemPrice: 'dfsdfsdf',
        iconSF: 'image/cards/cardA'
      });
    }; //這邊才是真的使用cc.loader進行載入，並且呼叫我們上面寫的方法
    //cc.loader.loadRes( prefabPath, onResourceLoaded );


    for (var i = 0; i < 10; ++i) {
      cc.loader.loadRes(prefabPath, onResourceLoaded); // var item = cc.instantiate(this.prefabPath);
      // var data = this.items[i];
      // this.node.addChild(item);
      // newMyPrefab.getComponent('ItemTemplate').init({
      //     id: '1111',
      //     itemName: 'test',
      //     itemPrice: 'dfsdfsdf',
      //     iconSF: data.iconSF
      // });
    }
=======
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
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImNvaW5ib2FyZCIsIkNvbXBvbmVudCIsIkNvdW50IiwiaXRlbVByZWZhYiIsIlByZWZhYiIsIm9uTG9hZCIsIkNhbnZhc05vZGUiLCJmaW5kIiwibG9nIiwicHJlZmFiUGF0aCIsInJvb3QiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJidXR0b25CRyIsImdldENoaWxkQnlOYW1lIiwibmV3WCIsIndpZHRoIiwiY29uc29sZSIsInNldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImkiLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxNQURVO0FBRWhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLEVBRkY7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLENBSEg7QUFJUkMsSUFBQUEsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0FBSkg7QUFGSSxDQUFULENBQVg7QUFVQSxJQUFJQyxTQUFTLEdBQUcsQ0FDWjtBQUNFSixFQUFBQSxRQUFRLEVBQUUsTUFEWjtBQUVFQyxFQUFBQSxTQUFTLEVBQUUsU0FGYjtBQUdFQyxFQUFBQSxNQUFNLEVBQUU7QUFIVixDQURZLENBQWhCO0FBV0FQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDVSxTQURQO0FBRUxQLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FRLElBQUFBLEtBQUssRUFBRSxDQUxDO0FBTVJDLElBQUFBLFVBQVUsRUFBRVosRUFBRSxDQUFDYTtBQU5QLEdBRlA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSztBQUVOO0FBQ0EsUUFBSUMsVUFBVSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVMseUJBQVQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRCxVQUFMLEVBQWtCO0FBQUVmLE1BQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSw2QkFBUjtBQUF5QztBQUFTOztBQUV0RSxRQUFJQyxVQUFVLEdBQUcsTUFBakIsQ0FOTSxDQVFMOztBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYLENBVEssQ0FXTjtBQUNJOztBQUNBLFFBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsWUFBVixFQUF3QkMsY0FBeEIsRUFDdkI7QUFDSUgsTUFBQUEsSUFBSSxDQUFDUixLQUFMLEdBREosQ0FHSTs7QUFDQSxVQUFJVSxZQUFKLEVBQW1CO0FBQUVyQixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQVEsb0JBQW9CSSxZQUE1QjtBQUE0QztBQUFTOztBQUMxRSxVQUFJLEVBQUdDLGNBQWMsWUFBWXRCLEVBQUUsQ0FBQ2EsTUFBaEMsQ0FBSixFQUErQztBQUFFYixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQVEsdUJBQVI7QUFBbUM7QUFBUyxPQUxqRyxDQUtrRztBQUc5Rjs7O0FBQ0EsVUFBSU0sV0FBVyxHQUFHdkIsRUFBRSxDQUFDd0IsV0FBSCxDQUFnQkYsY0FBaEIsQ0FBbEIsQ0FUSixDQVdJOztBQUNBUCxNQUFBQSxVQUFVLENBQUNVLFFBQVgsQ0FBcUJGLFdBQXJCLEVBWkosQ0FjSTtBQUNBOztBQUNBLFVBQUlHLFFBQVEsR0FBR0gsV0FBVyxDQUFDSSxjQUFaLENBQTRCLElBQTVCLENBQWY7O0FBQ0EsVUFBSSxDQUFDRCxRQUFMLEVBQWdCO0FBQUUxQixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQU8seUJBQVA7QUFBbUM7QUFBUyxPQWpCbEUsQ0FtQkk7OztBQUNBLFVBQUlXLElBQUksR0FBTUYsUUFBUSxDQUFDRyxLQUFaLEdBQXVCVixJQUFJLENBQUNSLEtBQUwsR0FBVyxHQUFsQyxHQUF5QyxHQUFwRCxDQXBCSixDQXFCSTs7QUFHQW1CLE1BQUFBLE9BQU8sQ0FBQ2IsR0FBUixDQUFZVyxJQUFaLEVBeEJKLENBeUJJOztBQUNBTCxNQUFBQSxXQUFXLENBQUNRLFdBQVosQ0FBeUJILElBQXpCLEVBQStCLENBQUMsR0FBaEM7QUFHQUwsTUFBQUEsV0FBVyxDQUFDUyxZQUFaLENBQXlCLGNBQXpCLEVBQXlDQyxJQUF6QyxDQUE4QztBQUMxQzdCLFFBQUFBLEVBQUUsRUFBRSxNQURzQztBQUUxQ0MsUUFBQUEsUUFBUSxFQUFFLE1BRmdDO0FBRzFDQyxRQUFBQSxTQUFTLEVBQUUsVUFIK0I7QUFJMUNDLFFBQUFBLE1BQU0sRUFBRTtBQUprQyxPQUE5QztBQVlILEtBMUNELENBYkUsQ0F5REY7QUFDQTs7O0FBRUosU0FBSyxJQUFJMkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QixFQUFFQSxDQUExQixFQUE2QjtBQUV6QmxDLE1BQUFBLEVBQUUsQ0FBQ21DLE1BQUgsQ0FBVUMsT0FBVixDQUFtQmxCLFVBQW5CLEVBQStCRSxnQkFBL0IsRUFGeUIsQ0FHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjtBQW5GSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnSXRlbScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICBpdGVtUHJpY2U6IDAsXG4gICAgICAgIGljb25TRjogY2MuU3ByaXRlRnJhbWVcbiAgICB9XG59KTtcblxudmFyIGNvaW5ib2FyZCA9IFtcbiAgICB7XG4gICAgICBpdGVtTmFtZTogXCLlsIrmpq7npq7ljIVcIixcbiAgICAgIGl0ZW1QcmljZTogMjgwMDAwMDAwLFxuICAgICAgaWNvblNGOiBcImltYWdlcy9jYXJkcy9jYXJkQVwiLFxuICAgIH0sXG4gICAgXG4gIF07XG5cblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gaXRlbXM6IHtcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAvLyAgICAgdHlwZTogSXRlbVxuICAgICAgICAvLyB9LFxuICAgICAgICBDb3VudDogMCxcbiAgICAgICAgaXRlbVByZWZhYjogY2MuUHJlZmFiXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuXG4gICAgICAgIC8v5oiR5YCR5YWI5YuV5oWL5Y+W5b6XQ2FudmFzXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCggJ3Njcm9sbHZpZXcvdmlldy9jb250ZW50JyApO1xuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmxvZyggJ+aJvuS4jeWIsENhbnZhc+eVq+W4g++8jOiri+eiuuiqjeS9oOeahOWgtOaZr+ijoeaciUNhbnZhcycgKTsgcmV0dXJuOyB9IFxuXG4gICAgICAgIHZhciBwcmVmYWJQYXRoID0gJ0l0ZW0nO1xuXG4gICAgICAgICAvL+mAmemCiuWFiOWwhyB0aGlzIOaMh+aomeWtmOWIsOWPpuS4gOWAi+iuiuaVuCwg5Zyo5Yil55qE5pa55rOV6KOhdGhpc+aYr+acg+iiq+aUueiuiueahFxuICAgICAgICAgdmFyIHJvb3QgPSB0aGlzOyBcblxuICAgICAgICAvL+mAmemCiuaIkeWAkeaWsOWinuS4gOWAi+engeacieaWueazle+8jOS+huWBmueCuui8ieWFpVByZWZhYuaZgueahOaWueazlVxuICAgICAgICAgICAgLy8o55W254S25L2g5Lmf5Y+v5Lul55u05o6l5a+r5ZyobG9hZFJlc+WPg+aVuOS4iu+8jOaIkeWPquaYr+imuuW+l+mAmeaoo+avlOi8g+WuueaYk+eci+a4healmilcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oIGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm9vdC5Db3VudCsrO1xuXG4gICAgICAgICAgICAgICAgLy/kuIDmqKPvvIzppIrmiJDmqqLmn6XnmoTlpb3nv5LmhaNcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjYy5sb2coICfovInlhaVQcmVmYWLlpLHmlZcsIOWOn+WboDonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjYy5sb2coICfkvaDovInlhaXnmoTkuI3mmK9QcmVmYWIsIOS9oOWBmuS6huS7gOm6vOS6iz8nICk7IHJldHVybjsgfSAvL+mAmeWAi+aYr+Wei+WIpeeahOaqouafpVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL+aOpeiRl++8jOaIkeWAkeWwseWPr+S7pemAsuihjOWvpuS+i+WMluS6hlxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xuXG4gICAgICAgICAgICAgICAgLy/miJHlgJHlhYjlsIfpgJnlgIvlu7rnq4vlh7rkvobnmoRQcmVmYWLliqDlhaXnlavluIPoo6FcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xuXG4gICAgICAgICAgICAgICAgLy/miJHlgJHopoHplovlp4voqK3lrprkvY3nva7vvIzlm6DngrrnlbbmmYLlnKhQcmVmYWLmiJHlgJHmspLmnInmjIflrprmnIDlpJblsaTnmoTlpKflsI9cbiAgICAgICAgICAgICAgICAvL+aJgOS7pemAmemCiuaIkeWAkeimgeWPluW+l+WcqE15UHJlZmFi5Lit77yM5oiR5YCR5Yqg5YWl55qEIFwiU3BsaXRCdXR0b25zXzAxXCIg6YCZ5by15ZyW54mH55qE6auY5bqmXG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbkJHID0gbmV3TXlQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoICdiZycgKTtcbiAgICAgICAgICAgICAgICBpZiggIWJ1dHRvbkJHICkgeyBjYy5sb2coJ+aJvuS4jeWIsOaMh+WumuWQjeeoseeahE5vZGUsIOaYr+S4jeaYr+WTquijoeaQnumMr+S6hu+8nycpOyByZXR1cm47IH1cblxuICAgICAgICAgICAgICAgIC8v5omA5Lul77yMeei7uOWwseaYr+WIqeeUqOioiOaVuOWZqOS5mOS4iuWclueJh+eahOmrmOW6pu+8jOWGjeWKoOS4ijEw6aGN5aSW6YKK55WM5b6M77yM5YaN5rib5Y675aC05pmv55qE6auY5bqm6Zmk5Lul5LqMXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ggPSAoICBidXR0b25CRy53aWR0aCApICsgKHJvb3QuQ291bnQqMTAwKSAtIDc1MDtcbiAgICAgICAgICAgICAgICAvL+a4m+WOu+WgtOaZr+mrmOW6pumAmeWAi+WLleS9nO+8jOaYr+eCuuS6huiuk+avj+m7nuaTiuS4gOasoeaMiemIle+8jOaIkeWAkeeahFByZWZhYuWwseS4gOebtOW+gOS4iueUoueUn1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3WCk7XG4gICAgICAgICAgICAgICAgLy/oqK3lrprkvY3nva7vvIzpgJnpgop46Lu45LiN6K6KXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuc2V0UG9zaXRpb24oIG5ld1gsIC0xNTAgKTtcblxuXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZ2V0Q29tcG9uZW50KCdJdGVtVGVtcGxhdGUnKS5pbml0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMTExJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWU6ICd0ZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVByaWNlOiAnZGZzZGZzZGYnLFxuICAgICAgICAgICAgICAgICAgICBpY29uU0Y6ICdpbWFnZS9jYXJkcy9jYXJkQSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL+mAmemCiuaJjeaYr+ecn+eahOS9v+eUqGNjLmxvYWRlcumAsuihjOi8ieWFpe+8jOS4puS4lOWRvOWPq+aIkeWAkeS4iumdouWvq+eahOaWueazlVxuICAgICAgICAgICAgLy9jYy5sb2FkZXIubG9hZFJlcyggcHJlZmFiUGF0aCwgb25SZXNvdXJjZUxvYWRlZCApO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7ICsraSkge1xuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyggcHJlZmFiUGF0aCwgb25SZXNvdXJjZUxvYWRlZCApO1xuICAgICAgICAgICAgLy8gdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYlBhdGgpO1xuICAgICAgICAgICAgLy8gdmFyIGRhdGEgPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgLy8gbmV3TXlQcmVmYWIuZ2V0Q29tcG9uZW50KCdJdGVtVGVtcGxhdGUnKS5pbml0KHtcbiAgICAgICAgICAgIC8vICAgICBpZDogJzExMTEnLFxuICAgICAgICAgICAgLy8gICAgIGl0ZW1OYW1lOiAndGVzdCcsXG4gICAgICAgICAgICAvLyAgICAgaXRlbVByaWNlOiAnZGZzZGZzZGYnLFxuICAgICAgICAgICAgLy8gICAgIGljb25TRjogZGF0YS5pY29uU0ZcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7Il19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTXlQcmVmYWJTY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJDb2xvciIsIk5vZGUiLCJUZXh0IiwidHlwZSIsIkxhYmVsIiwic2V0TnVtYmVyQnkiLCJudW1iZXIiLCJzdHJpbmciLCJSdW4iLCJhY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwicm90YXRlQnkiLCJub2RlIiwicnVuQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FDSTtBQUNJLGFBQVNELEVBQUUsQ0FBQ0UsU0FEaEI7QUFFSUMsRUFBQUEsVUFBVSxFQUNWO0FBQ0lDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxJQURkO0FBRUlDLElBQUFBLElBQUksRUFBRTtBQUFFLGlCQUFTLElBQVg7QUFBaUJDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUExQjtBQUZWLEdBSEo7QUFRSUMsRUFBQUEsV0FBVyxFQUFFLHFCQUFVQyxNQUFWLEVBQ2I7QUFDSTtBQUNBLFNBQUtKLElBQUwsQ0FBVUssTUFBVixHQUFxQixRQUFRRCxNQUE3QjtBQUNILEdBWkw7QUFjSUUsRUFBQUEsR0FBRyxFQUFFLGVBQ0w7QUFDSTtBQUNBLFFBQUlDLE1BQU0sR0FBR2IsRUFBRSxDQUFDYyxhQUFILENBQWtCZCxFQUFFLENBQUNlLFFBQUgsQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLENBQWxCLENBQWIsQ0FGSixDQUdJOztBQUNBLFNBQUtYLEtBQUwsQ0FBV1ksSUFBWCxDQUFnQkMsU0FBaEIsQ0FBMkJKLE1BQTNCO0FBQ0g7QUFwQkwsQ0FESiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3MoXG4gICAge1xuICAgICAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgICAgIHByb3BlcnRpZXM6IFxuICAgICAgICB7XG4gICAgICAgICAgICBDb2xvcjogY2MuTm9kZSxcbiAgICAgICAgICAgIFRleHQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuTGFiZWwgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgc2V0TnVtYmVyQnk6IGZ1bmN0aW9uKCBudW1iZXIgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mAmemCiuebtOaOpeWwh+aIkeWAkeeahExhYmVs5a2X5Liy6Kit5a6a54K6IE5vLiNcbiAgICAgICAgICAgIHRoaXMuVGV4dC5zdHJpbmcgPSAoICdOby4nICsgbnVtYmVyICk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBSdW46IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/pgJnpgorlu7rnq4vkuIDlgIvmsLjpgaDkuI3lgZzmraLnmoRyZXBlYXTvvIzli5XkvZzmmK/mr48x56eS6L2JMzYw5bqmXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlciggY2Mucm90YXRlQnkoIDEsIDM2MCApICk7XG4gICAgICAgICAgICAvL+iuk+aIkeWAkeeahOW9qeeQg+aXi+i9ieWQpyFcbiAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5ydW5BY3Rpb24oIGFjdGlvbiApO1xuICAgICAgICB9XG4gICAgfSk7Il19
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
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
<<<<<<< HEAD
=======
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
>>>>>>> c9461298b026653cfce04e6175fc3bdac6d3feb2
//------QC-SOURCE-SPLIT------
