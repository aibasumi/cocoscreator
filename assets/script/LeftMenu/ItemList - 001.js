var Item = cc.Class({
    name: 'ItemType',
    properties: {
        id: 0,
        itemName: 0,
    }
});

var nameData = ["選單 1", "選單 2", "選單 3", "選單 4", "選單 5", "選單 6", "選單 7", "選單 8", "選單 11", "選單 10"]

cc.Class({
    extends: cc.Component,
    properties: {
        itemPrefab: cc.Prefab
    },
    onLoad () {
        for (var i = 0; i < nameData.length; i++) {
            var item = cc.instantiate(this.itemPrefab);
            this.node.addChild(item); 
            item.getComponent('ItemTemplate - 001').init({
                itemName: nameData[i],
            });
        }

    } 
});