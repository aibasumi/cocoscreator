// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,
            function(t){
        
                var CanvasNode = cc.find( 'mask' );
                cc.loader.loadRes("dialog", function (errorMessage, prefab) {

                    if( errorMessage ) { cc.log( '載入Prefab失敗, 原因:' + errorMessage ); return; }
                    if( !( prefab instanceof cc.Prefab ) ) { cc.log( '你載入的不是Prefab, 你做了什麼事?' ); return; } //這個是型別的檢查
                    
                    //接著，我們就可以進行實例化了
                    var newMyPrefab = cc.instantiate( prefab );
    
                    //我們先將這個建立出來的Prefab加入畫布裡
                    CanvasNode.addChild( newMyPrefab );

                    newMyPrefab.setPosition( -400, -250 );

                    newMyPrefab.getComponent('closeDialog').init({
                        message: 'message!',
                    });

                });
        },this);
        // this.node.on(cc.Node.EventType.TOUCH_MOVE,
        //     function(t){console.log("cc.Node.EventType.TOUCH_MOVE ")},this);
             
        // this.node.on(cc.Node.EventType.TOUCH_END,
        //     function(t){console.log("cc.Node.EventType.TOUCH_END ")},this);
             
        // this.node.on(cc.Node.EventType.TOUCH_CANCEL,
        //     function(t){console.log("cc.Node.EventType.TOUCH_CANCEL ")},this);

    },
    start () {

    },

    // update (dt) {},
});
