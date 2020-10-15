
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTGVmdE1lbnUvSXRlbUxpc3QgLSAwMDEuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJuYW1lRGF0YSIsIkNvbXBvbmVudCIsIml0ZW1QcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJpIiwibGVuZ3RoIiwiaXRlbSIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ2hCQyxFQUFBQSxJQUFJLEVBQUUsVUFEVTtBQUVoQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRSxDQURJO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUZGO0FBRkksQ0FBVCxDQUFYO0FBUUEsSUFBSUMsUUFBUSxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsTUFBekMsRUFBaUQsTUFBakQsRUFBeUQsTUFBekQsRUFBaUUsT0FBakUsRUFBMEUsT0FBMUUsQ0FBZjtBQUVBTixFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ08sU0FEUDtBQUVMSixFQUFBQSxVQUFVLEVBQUU7QUFDUkssSUFBQUEsVUFBVSxFQUFFUixFQUFFLENBQUNTO0FBRFAsR0FGUDtBQUtMQyxFQUFBQSxNQUxLLG9CQUtLO0FBQ04sU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxRQUFRLENBQUNNLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFVBQUlFLElBQUksR0FBR2IsRUFBRSxDQUFDYyxXQUFILENBQWUsS0FBS04sVUFBcEIsQ0FBWDtBQUNBLFdBQUtPLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxDQUFDSSxZQUFMLENBQWtCLG9CQUFsQixFQUF3Q0MsSUFBeEMsQ0FBNkM7QUFDekNiLFFBQUFBLFFBQVEsRUFBRUMsUUFBUSxDQUFDSyxDQUFEO0FBRHVCLE9BQTdDO0FBR0g7QUFFSjtBQWRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdJdGVtVHlwZScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaXRlbU5hbWU6IDAsXG4gICAgfVxufSk7XG5cbnZhciBuYW1lRGF0YSA9IFtcIumBuOWWriAxXCIsIFwi6YG45ZauIDJcIiwgXCLpgbjllq4gM1wiLCBcIumBuOWWriA0XCIsIFwi6YG45ZauIDVcIiwgXCLpgbjllq4gNlwiLCBcIumBuOWWriA3XCIsIFwi6YG45ZauIDhcIiwgXCLpgbjllq4gMTFcIiwgXCLpgbjllq4gMTBcIl1cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYlxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pOyBcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdJdGVtVGVtcGxhdGUgLSAwMDEnKS5pbml0KHtcbiAgICAgICAgICAgICAgICBpdGVtTmFtZTogbmFtZURhdGFbaV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfSBcbn0pOyJdfQ==