
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