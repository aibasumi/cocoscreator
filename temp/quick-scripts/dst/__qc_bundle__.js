
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
require('./assets/script/MyPrefabScript');
require('./assets/script/gameCardConfig');
require('./assets/script/lobby');
require('./assets/script/login');

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
      console.log(spriteFrame);
      self.icon.spriteFrame = spriteFrame;
    });
    console.log(data);
    this.id = data.id; //this.icon.spriteFrame = data.iconSF;

    this.itemName.string = 'data.itemName';
    this.itemPrice.string = 'data.itemPrice';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbVRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaWQiLCJpY29uIiwiU3ByaXRlIiwiaXRlbU5hbWUiLCJMYWJlbCIsIml0ZW1QcmljZSIsImluaXQiLCJkYXRhIiwic2VsZiIsInJlc291cmNlcyIsImxvYWQiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiY29uc29sZSIsImxvZyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRSxDQURJO0FBRVJDLElBQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZEO0FBR1JDLElBQUFBLFFBQVEsRUFBRVAsRUFBRSxDQUFDUSxLQUhMO0FBSVJDLElBQUFBLFNBQVMsRUFBRVQsRUFBRSxDQUFDUTtBQUpOLEdBRlA7QUFRTEUsRUFBQUEsSUFBSSxFQUFFLGNBQVVDLElBQVYsRUFBZ0I7QUFDbEI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBWixJQUFBQSxFQUFFLENBQUNhLFNBQUgsQ0FBYUMsSUFBYixDQUFrQkgsSUFBSSxDQUFDSSxNQUF2QixFQUErQmYsRUFBRSxDQUFDZ0IsV0FBbEMsRUFBK0MsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQ3ZFQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBTixNQUFBQSxJQUFJLENBQUNQLElBQUwsQ0FBVWEsV0FBVixHQUF3QkEsV0FBeEI7QUFDSCxLQUhEO0FBS0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaO0FBQ0EsU0FBS1AsRUFBTCxHQUFVTyxJQUFJLENBQUNQLEVBQWYsQ0FUa0IsQ0FVbEI7O0FBQ0EsU0FBS0csUUFBTCxDQUFjYyxNQUFkLEdBQXVCLGVBQXZCO0FBQ0EsU0FBS1osU0FBTCxDQUFlWSxNQUFmLEdBQXdCLGdCQUF4QjtBQUNIO0FBckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaWNvbjogY2MuU3ByaXRlLFxuICAgICAgICBpdGVtTmFtZTogY2MuTGFiZWwsXG4gICAgICAgIGl0ZW1QcmljZTogY2MuTGFiZWxcbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIOWKoOi9vSBTcHJpdGVGcmFtZVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGRhdGEuaWNvblNGLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwcml0ZUZyYW1lKVxuICAgICAgICAgICAgc2VsZi5pY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgLy90aGlzLmljb24uc3ByaXRlRnJhbWUgPSBkYXRhLmljb25TRjtcbiAgICAgICAgdGhpcy5pdGVtTmFtZS5zdHJpbmcgPSAnZGF0YS5pdGVtTmFtZSc7XG4gICAgICAgIHRoaXMuaXRlbVByaWNlLnN0cmluZyA9ICdkYXRhLml0ZW1QcmljZSc7XG4gICAgfVxufSk7Il19
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
// MyPrefabScript.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NeVByZWZhYlNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkNvbG9yIiwiTm9kZSIsIlRleHQiLCJ0eXBlIiwiTGFiZWwiLCJzZXROdW1iZXJCeSIsIm51bWJlciIsInN0cmluZyIsIlJ1biIsImFjdGlvbiIsInJlcGVhdEZvcmV2ZXIiLCJyb3RhdGVCeSIsIm5vZGUiLCJydW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUNJO0FBQ0ksYUFBU0QsRUFBRSxDQUFDRSxTQURoQjtBQUVJQyxFQUFBQSxVQUFVLEVBQ1Y7QUFDSUMsSUFBQUEsS0FBSyxFQUFFSixFQUFFLENBQUNLLElBRGQ7QUFFSUMsSUFBQUEsSUFBSSxFQUFFO0FBQUUsaUJBQVMsSUFBWDtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBQTFCO0FBRlYsR0FISjtBQVFJQyxFQUFBQSxXQUFXLEVBQUUscUJBQVVDLE1BQVYsRUFDYjtBQUNJO0FBQ0EsU0FBS0osSUFBTCxDQUFVSyxNQUFWLEdBQXFCLFFBQVFELE1BQTdCO0FBQ0gsR0FaTDtBQWNJRSxFQUFBQSxHQUFHLEVBQUUsZUFDTDtBQUNJO0FBQ0EsUUFBSUMsTUFBTSxHQUFHYixFQUFFLENBQUNjLGFBQUgsQ0FBa0JkLEVBQUUsQ0FBQ2UsUUFBSCxDQUFhLENBQWIsRUFBZ0IsR0FBaEIsQ0FBbEIsQ0FBYixDQUZKLENBR0k7O0FBQ0EsU0FBS1gsS0FBTCxDQUFXWSxJQUFYLENBQWdCQyxTQUFoQixDQUEyQkosTUFBM0I7QUFDSDtBQXBCTCxDQURKIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyhcbiAgICB7XG4gICAgICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICAgICAgcHJvcGVydGllczogXG4gICAgICAgIHtcbiAgICAgICAgICAgIENvbG9yOiBjYy5Ob2RlLFxuICAgICAgICAgICAgVGV4dDogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5MYWJlbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBzZXROdW1iZXJCeTogZnVuY3Rpb24oIG51bWJlciApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCZ6YKK55u05o6l5bCH5oiR5YCR55qETGFiZWzlrZfkuLLoqK3lrprngrogTm8uI1xuICAgICAgICAgICAgdGhpcy5UZXh0LnN0cmluZyA9ICggJ05vLicgKyBudW1iZXIgKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIFJ1bjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mAmemCiuW7uueri+S4gOWAi+awuOmBoOS4jeWBnOatoueahHJlcGVhdO+8jOWLleS9nOaYr+avjzHnp5LovYkzNjDluqZcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKCBjYy5yb3RhdGVCeSggMSwgMzYwICkgKTtcbiAgICAgICAgICAgIC8v6K6T5oiR5YCR55qE5b2p55CD5peL6L2J5ZCnIVxuICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLnJ1bkFjdGlvbiggYWN0aW9uICk7XG4gICAgICAgIH1cbiAgICB9KTsiXX0=
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
// gameCardConfig.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nYW1lQ2FyZENvbmZpZy5qcyJdLCJuYW1lcyI6WyJjZmciLCJsaXN0IiwiZ2FtZUlkIiwiZ2FtZVBsYXRmb3JtSWQiLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxHQUFHLEdBQUU7QUFDTEMsRUFBQUEsSUFBSSxFQUFFLENBRUY7QUFDSUMsSUFBQUEsTUFBTSxFQUFDLFlBRFg7QUFFSUMsSUFBQUEsY0FBYyxFQUFDLFVBRm5CO0FBR0lDLElBQUFBLElBQUksRUFBQztBQUhULEdBRkUsRUFPRjtBQUNJRixJQUFBQSxNQUFNLEVBQUMsWUFEWDtBQUVJQyxJQUFBQSxjQUFjLEVBQUMsU0FGbkI7QUFHSUMsSUFBQUEsSUFBSSxFQUFDO0FBSFQsR0FQRTtBQURELENBQVQ7QUFrQkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sR0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjZmcgPXtcbiAgICBsaXN0OiBbXG5cbiAgICAgICAge1xuICAgICAgICAgICAgZ2FtZUlkOidHVFNMT1QwMTQ5JyxcbiAgICAgICAgICAgIGdhbWVQbGF0Zm9ybUlkOidTTE9UQ05KUCcsXG4gICAgICAgICAgICBuYW1lOifnmbznmbznmbwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBnYW1lSWQ6J0dUU0xPVDAxMzknLFxuICAgICAgICAgICAgZ2FtZVBsYXRmb3JtSWQ6J0dUU0xUSEInLFxuICAgICAgICAgICAgbmFtZTon6YeR6byg6L+O6LKh56WeJyxcbiAgICAgICAgfSxcblxuICAgIF1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjZmc7XG5cblxuXG4iXX0=
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
                    var __filename = 'preview-scripts/assets/script/lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7426ogdsdIy5TFpUortkCy', 'lobby');
// lobby.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9sb2JieS5qcyJdLCJuYW1lcyI6WyJnYW1lbGlzdCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJsaXN0Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUF0Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFwQlEsR0FIUDtBQTBCTDtBQUVBQyxFQUFBQSxNQTVCSyxvQkE0Qks7QUFFTjtBQUVBO0FBRUFDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFRLENBQUNTLElBQXJCO0FBQ0gsR0FuQ0k7QUFxQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLEVBQUFBLEtBNUNLLG1CQTRDSSxDQUVSLENBOUNJLENBZ0RMOztBQWhESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4vL2luY2x1ZGUgZ2FtZWxpc3RcbnZhciBnYW1lbGlzdCA9IHJlcXVpcmUoXCJnYW1lQ2FyZENvbmZpZ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcblxuICAgICAgICAvLyBsYWJlbDoge1xuICAgICAgICAvLyAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICBcbiAgICAgICAgLy8gdGhpcy5sYWJlbC5zdHJpbmc9IHRoaXMuZGRkO1xuXG4gICAgICAgIC8vIOWPluW+l+mBiuaIsuWIl+ihqFxuXG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWVsaXN0Lmxpc3QpO1xuICAgIH0sXG5cbiAgICAvLyBpbml0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAvLyAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gZGF0YS5pY29uU0Y7XG4gICAgLy8gICAgIHRoaXMuaXRlbU5hbWUuc3RyaW5nID0gZGF0YS5pdGVtTmFtZTtcbiAgICAvLyAgICAgdGhpcy5pdGVtUHJpY2Uuc3RyaW5nID0gZGF0YS5pdGVtUHJpY2U7XG4gICAgLy8gfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
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
    var CanvasNode = cc.find('Canvas');

    if (!CanvasNode) {
      cc.log('找不到Canvas畫布，請確認你的場景裡有Canvas');
      return;
    }

    var prefabPath = 'Item'; //這邊先將 this 指標存到另一個變數, 在別的方法裡this是會被改變的

    var root = this; //這邊我們新增一個私有方法，來做為載入Prefab時的方法
    //(當然你也可以直接寫在loadRes參數上，我只是覺得這樣比較容易看清楚)

    var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
      root.Count++; //一樣，養成檢查的好習慣

      if (errorMessage) {
        cc.log('載入Prefab失敗, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        cc.log('你載入的不是Prefab, 你做了什麼事?');
        return;
      } //這個是型別的檢查
      //接著，我們就可以進行實例化了


      var newMyPrefab = cc.instantiate(loadedResource); //我們先將這個建立出來的Prefab加入畫布裡

      CanvasNode.addChild(newMyPrefab); //我們要開始設定位置，因為當時在Prefab我們沒有指定最外層的大小
      //所以這邊我們要取得在MyPrefab中，我們加入的 "SplitButtons_01" 這張圖片的高度

      var buttonBG = newMyPrefab.getChildByName('bg');

      if (!buttonBG) {
        cc.log('找不到指定名稱的Node, 是不是哪裡搞錯了？');
        return;
      } //所以，y軸就是利用計數器乘上圖片的高度，再加上10額外邊界後，再減去場景的高度除以二


      var newX = buttonBG.width + root.Count * 50 - CanvasNode.width / 2; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

      console.log(newX); //設定位置，這邊x軸不變

      newMyPrefab.setPosition(newX, 5);
      newMyPrefab.getComponent('ItemTemplate').init({
        id: '1111',
        itemName: 'test',
        itemPrice: 'dfsdfsdf',
        iconSF: 'image/cards/cardA'
      });
    }; //這邊才是真的使用cc.loader進行載入，並且呼叫我們上面寫的方法
    //cc.loader.loadRes( prefabPath, onResourceLoaded );


    for (var i = 0; i < 5; ++i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImNvaW5ib2FyZCIsIkNvbXBvbmVudCIsIkNvdW50IiwiaXRlbVByZWZhYiIsIlByZWZhYiIsIm9uTG9hZCIsIkNhbnZhc05vZGUiLCJmaW5kIiwibG9nIiwicHJlZmFiUGF0aCIsInJvb3QiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJidXR0b25CRyIsImdldENoaWxkQnlOYW1lIiwibmV3WCIsIndpZHRoIiwiY29uc29sZSIsInNldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImkiLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxNQURVO0FBRWhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLEVBRkY7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLENBSEg7QUFJUkMsSUFBQUEsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0FBSkg7QUFGSSxDQUFULENBQVg7QUFVQSxJQUFJQyxTQUFTLEdBQUcsQ0FDWjtBQUNFSixFQUFBQSxRQUFRLEVBQUUsTUFEWjtBQUVFQyxFQUFBQSxTQUFTLEVBQUUsU0FGYjtBQUdFQyxFQUFBQSxNQUFNLEVBQUU7QUFIVixDQURZLENBQWhCO0FBV0FQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDVSxTQURQO0FBRUxQLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FRLElBQUFBLEtBQUssRUFBRSxDQUxDO0FBTVJDLElBQUFBLFVBQVUsRUFBRVosRUFBRSxDQUFDYTtBQU5QLEdBRlA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSztBQUVOO0FBQ0EsUUFBSUMsVUFBVSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVMsUUFBVCxDQUFqQjs7QUFDQSxRQUFJLENBQUNELFVBQUwsRUFBa0I7QUFBRWYsTUFBQUEsRUFBRSxDQUFDaUIsR0FBSCxDQUFRLDZCQUFSO0FBQXlDO0FBQVM7O0FBRXRFLFFBQUlDLFVBQVUsR0FBRyxNQUFqQixDQU5NLENBUUw7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVgsQ0FUSyxDQVdOO0FBQ0k7O0FBQ0EsUUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVQyxZQUFWLEVBQXdCQyxjQUF4QixFQUN2QjtBQUNJSCxNQUFBQSxJQUFJLENBQUNSLEtBQUwsR0FESixDQUdJOztBQUNBLFVBQUlVLFlBQUosRUFBbUI7QUFBRXJCLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSxvQkFBb0JJLFlBQTVCO0FBQTRDO0FBQVM7O0FBQzFFLFVBQUksRUFBR0MsY0FBYyxZQUFZdEIsRUFBRSxDQUFDYSxNQUFoQyxDQUFKLEVBQStDO0FBQUViLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSx1QkFBUjtBQUFtQztBQUFTLE9BTGpHLENBS2tHO0FBRzlGOzs7QUFDQSxVQUFJTSxXQUFXLEdBQUd2QixFQUFFLENBQUN3QixXQUFILENBQWdCRixjQUFoQixDQUFsQixDQVRKLENBV0k7O0FBQ0FQLE1BQUFBLFVBQVUsQ0FBQ1UsUUFBWCxDQUFxQkYsV0FBckIsRUFaSixDQWNJO0FBQ0E7O0FBQ0EsVUFBSUcsUUFBUSxHQUFHSCxXQUFXLENBQUNJLGNBQVosQ0FBNEIsSUFBNUIsQ0FBZjs7QUFDQSxVQUFJLENBQUNELFFBQUwsRUFBZ0I7QUFBRTFCLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBTyx5QkFBUDtBQUFtQztBQUFTLE9BakJsRSxDQW1CSTs7O0FBQ0EsVUFBSVcsSUFBSSxHQUFNRixRQUFRLENBQUNHLEtBQVosR0FBdUJWLElBQUksQ0FBQ1IsS0FBTCxHQUFXLEVBQWxDLEdBQTBDSSxVQUFVLENBQUNjLEtBQVgsR0FBbUIsQ0FBeEUsQ0FwQkosQ0FxQkk7O0FBR0FDLE1BQUFBLE9BQU8sQ0FBQ2IsR0FBUixDQUFZVyxJQUFaLEVBeEJKLENBeUJJOztBQUNBTCxNQUFBQSxXQUFXLENBQUNRLFdBQVosQ0FBeUJILElBQXpCLEVBQStCLENBQS9CO0FBR0FMLE1BQUFBLFdBQVcsQ0FBQ1MsWUFBWixDQUF5QixjQUF6QixFQUF5Q0MsSUFBekMsQ0FBOEM7QUFDMUM3QixRQUFBQSxFQUFFLEVBQUUsTUFEc0M7QUFFMUNDLFFBQUFBLFFBQVEsRUFBRSxNQUZnQztBQUcxQ0MsUUFBQUEsU0FBUyxFQUFFLFVBSCtCO0FBSTFDQyxRQUFBQSxNQUFNLEVBQUU7QUFKa0MsT0FBOUM7QUFZSCxLQTFDRCxDQWJFLENBeURGO0FBQ0E7OztBQUVKLFNBQUssSUFBSTJCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUIsRUFBRUEsQ0FBekIsRUFBNEI7QUFFeEJsQyxNQUFBQSxFQUFFLENBQUNtQyxNQUFILENBQVVDLE9BQVYsQ0FBbUJsQixVQUFuQixFQUErQkUsZ0JBQS9CLEVBRndCLENBR3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7QUFuRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW0gPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ0l0ZW0nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGl0ZW1OYW1lOiAnJyxcbiAgICAgICAgaXRlbVByaWNlOiAwLFxuICAgICAgICBpY29uU0Y6IGNjLlNwcml0ZUZyYW1lXG4gICAgfVxufSk7XG5cbnZhciBjb2luYm9hcmQgPSBbXG4gICAge1xuICAgICAgaXRlbU5hbWU6IFwi5bCK5qau56au5YyFXCIsXG4gICAgICBpdGVtUHJpY2U6IDI4MDAwMDAwMCxcbiAgICAgIGljb25TRjogXCJpbWFnZXMvY2FyZHMvY2FyZEFcIixcbiAgICB9LFxuICAgIFxuICBdO1xuXG5cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGl0ZW1zOiB7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgLy8gICAgIHR5cGU6IEl0ZW1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgQ291bnQ6IDAsXG4gICAgICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYlxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcblxuICAgICAgICAvL+aIkeWAkeWFiOWLleaFi+WPluW+l0NhbnZhc1xuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoICdDYW52YXMnICk7XG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MubG9nKCAn5om+5LiN5YiwQ2FudmFz55Wr5biD77yM6KuL56K66KqN5L2g55qE5aC05pmv6KOh5pyJQ2FudmFzJyApOyByZXR1cm47IH0gXG5cbiAgICAgICAgdmFyIHByZWZhYlBhdGggPSAnSXRlbSc7XG5cbiAgICAgICAgIC8v6YCZ6YKK5YWI5bCHIHRoaXMg5oyH5qiZ5a2Y5Yiw5Y+m5LiA5YCL6K6K5pW4LCDlnKjliKXnmoTmlrnms5Xoo6F0aGlz5piv5pyD6KKr5pS56K6K55qEXG4gICAgICAgICB2YXIgcm9vdCA9IHRoaXM7IFxuXG4gICAgICAgIC8v6YCZ6YKK5oiR5YCR5paw5aKe5LiA5YCL56eB5pyJ5pa55rOV77yM5L6G5YGa54K66LyJ5YWlUHJlZmFi5pmC55qE5pa55rOVXG4gICAgICAgICAgICAvLyjnlbbnhLbkvaDkuZ/lj6/ku6Xnm7TmjqXlr6vlnKhsb2FkUmVz5Y+D5pW45LiK77yM5oiR5Y+q5piv6Ka65b6X6YCZ5qij5q+U6LyD5a655piT55yL5riF5qWaKVxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbiggZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb290LkNvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAvL+S4gOaoo++8jOmkiuaIkOaqouafpeeahOWlvee/kuaFo1xuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNjLmxvZyggJ+i8ieWFpVByZWZhYuWkseaVlywg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi8ieWFpeeahOS4jeaYr1ByZWZhYiwg5L2g5YGa5LqG5LuA6bq85LqLPycgKTsgcmV0dXJuOyB9IC8v6YCZ5YCL5piv5Z6L5Yil55qE5qqi5p+lXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5bCx5Y+v5Lul6YCy6KGM5a+m5L6L5YyW5LqGXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XG5cbiAgICAgICAgICAgICAgICAvL+aIkeWAkeWFiOWwh+mAmeWAi+W7uueri+WHuuS+hueahFByZWZhYuWKoOWFpeeVq+W4g+ijoVxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XG5cbiAgICAgICAgICAgICAgICAvL+aIkeWAkeimgemWi+Wni+ioreWumuS9jee9ru+8jOWboOeCuueVtuaZguWcqFByZWZhYuaIkeWAkeaykuacieaMh+WumuacgOWkluWxpOeahOWkp+Wwj1xuICAgICAgICAgICAgICAgIC8v5omA5Lul6YCZ6YKK5oiR5YCR6KaB5Y+W5b6X5ZyoTXlQcmVmYWLkuK3vvIzmiJHlgJHliqDlhaXnmoQgXCJTcGxpdEJ1dHRvbnNfMDFcIiDpgJnlvLXlnJbniYfnmoTpq5jluqZcbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uQkcgPSBuZXdNeVByZWZhYi5nZXRDaGlsZEJ5TmFtZSggJ2JnJyApO1xuICAgICAgICAgICAgICAgIGlmKCAhYnV0dG9uQkcgKSB7IGNjLmxvZygn5om+5LiN5Yiw5oyH5a6a5ZCN56ix55qETm9kZSwg5piv5LiN5piv5ZOq6KOh5pCe6Yyv5LqG77yfJyk7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAgICAgLy/miYDku6XvvIx56Lu45bCx5piv5Yip55So6KiI5pW45Zmo5LmY5LiK5ZyW54mH55qE6auY5bqm77yM5YaN5Yqg5LiKMTDpoY3lpJbpgornlYzlvozvvIzlho3muJvljrvloLTmma/nmoTpq5jluqbpmaTku6XkuoxcbiAgICAgICAgICAgICAgICB2YXIgbmV3WCA9ICggIGJ1dHRvbkJHLndpZHRoICkgKyAocm9vdC5Db3VudCo1MCkgLSAoIENhbnZhc05vZGUud2lkdGggLyAyICk7XG4gICAgICAgICAgICAgICAgLy/muJvljrvloLTmma/pq5jluqbpgJnlgIvli5XkvZzvvIzmmK/ngrrkuoborpPmr4/pu57mk4rkuIDmrKHmjInpiJXvvIzmiJHlgJHnmoRQcmVmYWLlsLHkuIDnm7TlvoDkuIrnlKLnlJ9cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1gpO1xuICAgICAgICAgICAgICAgIC8v6Kit5a6a5L2N572u77yM6YCZ6YKKeOi7uOS4jeiuilxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnNldFBvc2l0aW9uKCBuZXdYLCA1ICk7XG5cblxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmdldENvbXBvbmVudCgnSXRlbVRlbXBsYXRlJykuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnMTExMScsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lOiAndGVzdCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QcmljZTogJ2Rmc2Rmc2RmJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNGOiAnaW1hZ2UvY2FyZHMvY2FyZEEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBcblxuXG5cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy/pgJnpgormiY3mmK/nnJ/nmoTkvb/nlKhjYy5sb2FkZXLpgLLooYzovInlhaXvvIzkuKbkuJTlkbzlj6vmiJHlgJHkuIrpnaLlr6vnmoTmlrnms5VcbiAgICAgICAgICAgIC8vY2MubG9hZGVyLmxvYWRSZXMoIHByZWZhYlBhdGgsIG9uUmVzb3VyY2VMb2FkZWQgKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7ICsraSkge1xuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyggcHJlZmFiUGF0aCwgb25SZXNvdXJjZUxvYWRlZCApO1xuICAgICAgICAgICAgLy8gdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYlBhdGgpO1xuICAgICAgICAgICAgLy8gdmFyIGRhdGEgPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgLy8gbmV3TXlQcmVmYWIuZ2V0Q29tcG9uZW50KCdJdGVtVGVtcGxhdGUnKS5pbml0KHtcbiAgICAgICAgICAgIC8vICAgICBpZDogJzExMTEnLFxuICAgICAgICAgICAgLy8gICAgIGl0ZW1OYW1lOiAndGVzdCcsXG4gICAgICAgICAgICAvLyAgICAgaXRlbVByaWNlOiAnZGZzZGZzZGYnLFxuICAgICAgICAgICAgLy8gICAgIGljb25TRjogZGF0YS5pY29uU0ZcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7Il19
//------QC-SOURCE-SPLIT------
