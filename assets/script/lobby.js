


//include gamelist
var gamelist = require("gameCardConfig");

cc.Class({
    extends: cc.Component,

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

        // label: {
        //     type: cc.Label,
        //     default: null,
        // }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       
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

    start () {

    },

    // update (dt) {},
});
