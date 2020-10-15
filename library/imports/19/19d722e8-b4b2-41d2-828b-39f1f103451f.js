"use strict";
cc._RF.push(module, '19d72LotLJB0oKLOfHxA0Uf', 'closeDialog');
// script/closeDialog.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
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
    dialogBG: cc.Sprite,
    close: cc.Sprite,
    message: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var dialog = this.node;
    this.close.node.on(cc.Node.EventType.TOUCH_START, function (t) {
      dialog.active ? dialog.active = false : null;
    }, this);
  },
  init: function init(data) {
    this.message.string = data.message;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();