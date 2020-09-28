
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