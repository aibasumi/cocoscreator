"use strict";
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