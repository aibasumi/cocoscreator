cc.Class({
    extends: cc.Component,
    properties: {
        id: 0,
        icon: cc.Sprite,
        itemName: cc.Label,
        itemPrice: cc.Label
    },
    init: function (data) {
        // 加载 SpriteFrame
        var self = this;
        cc.resources.load(data.iconSF, cc.SpriteFrame, function (err, spriteFrame) {
            console.log(spriteFrame)
            self.icon.spriteFrame = spriteFrame;
        });

        console.log(data);
        this.id = data.id;
        //this.icon.spriteFrame = data.iconSF;
        this.itemName.string = 'data.itemName';
        this.itemPrice.string = 'data.itemPrice';
    }
});