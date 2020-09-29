
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
    var CanvasNode = cc.find('scrollview/view/content');

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


      var newX = buttonBG.width + root.Count * 100 - 750; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

      console.log(newX); //設定位置，這邊x軸不變

      newMyPrefab.setPosition(newX, -150);
      newMyPrefab.getComponent('ItemTemplate').init({
        id: '1111',
        itemName: 'test',
        itemPrice: 'dfsdfsdf',
        iconSF: 'image/cards/cardA'
      });
    }; //這邊才是真的使用cc.loader進行載入，並且呼叫我們上面寫的方法
    //cc.loader.loadRes( prefabPath, onResourceLoaded );


    for (var i = 0; i < 10; ++i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImNvaW5ib2FyZCIsIkNvbXBvbmVudCIsIkNvdW50IiwiaXRlbVByZWZhYiIsIlByZWZhYiIsIm9uTG9hZCIsIkNhbnZhc05vZGUiLCJmaW5kIiwibG9nIiwicHJlZmFiUGF0aCIsInJvb3QiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJidXR0b25CRyIsImdldENoaWxkQnlOYW1lIiwibmV3WCIsIndpZHRoIiwiY29uc29sZSIsInNldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImkiLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxNQURVO0FBRWhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLEVBRkY7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLENBSEg7QUFJUkMsSUFBQUEsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0FBSkg7QUFGSSxDQUFULENBQVg7QUFVQSxJQUFJQyxTQUFTLEdBQUcsQ0FDWjtBQUNFSixFQUFBQSxRQUFRLEVBQUUsTUFEWjtBQUVFQyxFQUFBQSxTQUFTLEVBQUUsU0FGYjtBQUdFQyxFQUFBQSxNQUFNLEVBQUU7QUFIVixDQURZLENBQWhCO0FBV0FQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDVSxTQURQO0FBRUxQLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FRLElBQUFBLEtBQUssRUFBRSxDQUxDO0FBTVJDLElBQUFBLFVBQVUsRUFBRVosRUFBRSxDQUFDYTtBQU5QLEdBRlA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSztBQUVOO0FBQ0EsUUFBSUMsVUFBVSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVMseUJBQVQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRCxVQUFMLEVBQWtCO0FBQUVmLE1BQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSw2QkFBUjtBQUF5QztBQUFTOztBQUV0RSxRQUFJQyxVQUFVLEdBQUcsTUFBakIsQ0FOTSxDQVFMOztBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYLENBVEssQ0FXTjtBQUNJOztBQUNBLFFBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsWUFBVixFQUF3QkMsY0FBeEIsRUFDdkI7QUFDSUgsTUFBQUEsSUFBSSxDQUFDUixLQUFMLEdBREosQ0FHSTs7QUFDQSxVQUFJVSxZQUFKLEVBQW1CO0FBQUVyQixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQVEsb0JBQW9CSSxZQUE1QjtBQUE0QztBQUFTOztBQUMxRSxVQUFJLEVBQUdDLGNBQWMsWUFBWXRCLEVBQUUsQ0FBQ2EsTUFBaEMsQ0FBSixFQUErQztBQUFFYixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQVEsdUJBQVI7QUFBbUM7QUFBUyxPQUxqRyxDQUtrRztBQUc5Rjs7O0FBQ0EsVUFBSU0sV0FBVyxHQUFHdkIsRUFBRSxDQUFDd0IsV0FBSCxDQUFnQkYsY0FBaEIsQ0FBbEIsQ0FUSixDQVdJOztBQUNBUCxNQUFBQSxVQUFVLENBQUNVLFFBQVgsQ0FBcUJGLFdBQXJCLEVBWkosQ0FjSTtBQUNBOztBQUNBLFVBQUlHLFFBQVEsR0FBR0gsV0FBVyxDQUFDSSxjQUFaLENBQTRCLElBQTVCLENBQWY7O0FBQ0EsVUFBSSxDQUFDRCxRQUFMLEVBQWdCO0FBQUUxQixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQU8seUJBQVA7QUFBbUM7QUFBUyxPQWpCbEUsQ0FtQkk7OztBQUNBLFVBQUlXLElBQUksR0FBTUYsUUFBUSxDQUFDRyxLQUFaLEdBQXVCVixJQUFJLENBQUNSLEtBQUwsR0FBVyxHQUFsQyxHQUF5QyxHQUFwRCxDQXBCSixDQXFCSTs7QUFHQW1CLE1BQUFBLE9BQU8sQ0FBQ2IsR0FBUixDQUFZVyxJQUFaLEVBeEJKLENBeUJJOztBQUNBTCxNQUFBQSxXQUFXLENBQUNRLFdBQVosQ0FBeUJILElBQXpCLEVBQStCLENBQUMsR0FBaEM7QUFHQUwsTUFBQUEsV0FBVyxDQUFDUyxZQUFaLENBQXlCLGNBQXpCLEVBQXlDQyxJQUF6QyxDQUE4QztBQUMxQzdCLFFBQUFBLEVBQUUsRUFBRSxNQURzQztBQUUxQ0MsUUFBQUEsUUFBUSxFQUFFLE1BRmdDO0FBRzFDQyxRQUFBQSxTQUFTLEVBQUUsVUFIK0I7QUFJMUNDLFFBQUFBLE1BQU0sRUFBRTtBQUprQyxPQUE5QztBQVlILEtBMUNELENBYkUsQ0F5REY7QUFDQTs7O0FBRUosU0FBSyxJQUFJMkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QixFQUFFQSxDQUExQixFQUE2QjtBQUV6QmxDLE1BQUFBLEVBQUUsQ0FBQ21DLE1BQUgsQ0FBVUMsT0FBVixDQUFtQmxCLFVBQW5CLEVBQStCRSxnQkFBL0IsRUFGeUIsQ0FHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjtBQW5GSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnSXRlbScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICBpdGVtUHJpY2U6IDAsXG4gICAgICAgIGljb25TRjogY2MuU3ByaXRlRnJhbWVcbiAgICB9XG59KTtcblxudmFyIGNvaW5ib2FyZCA9IFtcbiAgICB7XG4gICAgICBpdGVtTmFtZTogXCLlsIrmpq7npq7ljIVcIixcbiAgICAgIGl0ZW1QcmljZTogMjgwMDAwMDAwLFxuICAgICAgaWNvblNGOiBcImltYWdlcy9jYXJkcy9jYXJkQVwiLFxuICAgIH0sXG4gICAgXG4gIF07XG5cblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gaXRlbXM6IHtcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAvLyAgICAgdHlwZTogSXRlbVxuICAgICAgICAvLyB9LFxuICAgICAgICBDb3VudDogMCxcbiAgICAgICAgaXRlbVByZWZhYjogY2MuUHJlZmFiXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuXG4gICAgICAgIC8v5oiR5YCR5YWI5YuV5oWL5Y+W5b6XQ2FudmFzXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCggJ3Njcm9sbHZpZXcvdmlldy9jb250ZW50JyApO1xuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmxvZyggJ+aJvuS4jeWIsENhbnZhc+eVq+W4g++8jOiri+eiuuiqjeS9oOeahOWgtOaZr+ijoeaciUNhbnZhcycgKTsgcmV0dXJuOyB9IFxuXG4gICAgICAgIHZhciBwcmVmYWJQYXRoID0gJ0l0ZW0nO1xuXG4gICAgICAgICAvL+mAmemCiuWFiOWwhyB0aGlzIOaMh+aomeWtmOWIsOWPpuS4gOWAi+iuiuaVuCwg5Zyo5Yil55qE5pa55rOV6KOhdGhpc+aYr+acg+iiq+aUueiuiueahFxuICAgICAgICAgdmFyIHJvb3QgPSB0aGlzOyBcblxuICAgICAgICAvL+mAmemCiuaIkeWAkeaWsOWinuS4gOWAi+engeacieaWueazle+8jOS+huWBmueCuui8ieWFpVByZWZhYuaZgueahOaWueazlVxuICAgICAgICAgICAgLy8o55W254S25L2g5Lmf5Y+v5Lul55u05o6l5a+r5ZyobG9hZFJlc+WPg+aVuOS4iu+8jOaIkeWPquaYr+imuuW+l+mAmeaoo+avlOi8g+WuueaYk+eci+a4healmilcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oIGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm9vdC5Db3VudCsrO1xuXG4gICAgICAgICAgICAgICAgLy/kuIDmqKPvvIzppIrmiJDmqqLmn6XnmoTlpb3nv5LmhaNcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjYy5sb2coICfovInlhaVQcmVmYWLlpLHmlZcsIOWOn+WboDonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjYy5sb2coICfkvaDovInlhaXnmoTkuI3mmK9QcmVmYWIsIOS9oOWBmuS6huS7gOm6vOS6iz8nICk7IHJldHVybjsgfSAvL+mAmeWAi+aYr+Wei+WIpeeahOaqouafpVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL+aOpeiRl++8jOaIkeWAkeWwseWPr+S7pemAsuihjOWvpuS+i+WMluS6hlxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xuXG4gICAgICAgICAgICAgICAgLy/miJHlgJHlhYjlsIfpgJnlgIvlu7rnq4vlh7rkvobnmoRQcmVmYWLliqDlhaXnlavluIPoo6FcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xuXG4gICAgICAgICAgICAgICAgLy/miJHlgJHopoHplovlp4voqK3lrprkvY3nva7vvIzlm6DngrrnlbbmmYLlnKhQcmVmYWLmiJHlgJHmspLmnInmjIflrprmnIDlpJblsaTnmoTlpKflsI9cbiAgICAgICAgICAgICAgICAvL+aJgOS7pemAmemCiuaIkeWAkeimgeWPluW+l+WcqE15UHJlZmFi5Lit77yM5oiR5YCR5Yqg5YWl55qEIFwiU3BsaXRCdXR0b25zXzAxXCIg6YCZ5by15ZyW54mH55qE6auY5bqmXG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbkJHID0gbmV3TXlQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoICdiZycgKTtcbiAgICAgICAgICAgICAgICBpZiggIWJ1dHRvbkJHICkgeyBjYy5sb2coJ+aJvuS4jeWIsOaMh+WumuWQjeeoseeahE5vZGUsIOaYr+S4jeaYr+WTquijoeaQnumMr+S6hu+8nycpOyByZXR1cm47IH1cblxuICAgICAgICAgICAgICAgIC8v5omA5Lul77yMeei7uOWwseaYr+WIqeeUqOioiOaVuOWZqOS5mOS4iuWclueJh+eahOmrmOW6pu+8jOWGjeWKoOS4ijEw6aGN5aSW6YKK55WM5b6M77yM5YaN5rib5Y675aC05pmv55qE6auY5bqm6Zmk5Lul5LqMXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ggPSAoICBidXR0b25CRy53aWR0aCApICsgKHJvb3QuQ291bnQqMTAwKSAtIDc1MDtcbiAgICAgICAgICAgICAgICAvL+a4m+WOu+WgtOaZr+mrmOW6pumAmeWAi+WLleS9nO+8jOaYr+eCuuS6huiuk+avj+m7nuaTiuS4gOasoeaMiemIle+8jOaIkeWAkeeahFByZWZhYuWwseS4gOebtOW+gOS4iueUoueUn1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3WCk7XG4gICAgICAgICAgICAgICAgLy/oqK3lrprkvY3nva7vvIzpgJnpgop46Lu45LiN6K6KXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuc2V0UG9zaXRpb24oIG5ld1gsIC0xNTAgKTtcblxuXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZ2V0Q29tcG9uZW50KCdJdGVtVGVtcGxhdGUnKS5pbml0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMTExJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWU6ICd0ZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVByaWNlOiAnZGZzZGZzZGYnLFxuICAgICAgICAgICAgICAgICAgICBpY29uU0Y6ICdpbWFnZS9jYXJkcy9jYXJkQSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL+mAmemCiuaJjeaYr+ecn+eahOS9v+eUqGNjLmxvYWRlcumAsuihjOi8ieWFpe+8jOS4puS4lOWRvOWPq+aIkeWAkeS4iumdouWvq+eahOaWueazlVxuICAgICAgICAgICAgLy9jYy5sb2FkZXIubG9hZFJlcyggcHJlZmFiUGF0aCwgb25SZXNvdXJjZUxvYWRlZCApO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7ICsraSkge1xuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyggcHJlZmFiUGF0aCwgb25SZXNvdXJjZUxvYWRlZCApO1xuICAgICAgICAgICAgLy8gdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYlBhdGgpO1xuICAgICAgICAgICAgLy8gdmFyIGRhdGEgPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgLy8gbmV3TXlQcmVmYWIuZ2V0Q29tcG9uZW50KCdJdGVtVGVtcGxhdGUnKS5pbml0KHtcbiAgICAgICAgICAgIC8vICAgICBpZDogJzExMTEnLFxuICAgICAgICAgICAgLy8gICAgIGl0ZW1OYW1lOiAndGVzdCcsXG4gICAgICAgICAgICAvLyAgICAgaXRlbVByaWNlOiAnZGZzZGZzZGYnLFxuICAgICAgICAgICAgLy8gICAgIGljb25TRjogZGF0YS5pY29uU0ZcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7Il19