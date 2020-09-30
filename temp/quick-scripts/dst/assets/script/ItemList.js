
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
var gameCardData = [{
  id: 1,
  itemName: "遊戲1",
  itemPrice: '',
  iconSF: "image/cards/cardA"
}, {
  id: 2,
  itemName: "遊戲2",
  itemPrice: '',
  iconSF: "image/cards/cardB"
}, {
  id: 3,
  itemName: "遊戲3",
  itemPrice: '',
  iconSF: "image/cards/cardC"
}, {
  id: 4,
  itemName: "遊戲4",
  itemPrice: '',
  iconSF: "image/cards/cardD"
}, {
  id: 5,
  itemName: "遊戲5",
  itemPrice: '',
  iconSF: "image/cards/cardE"
}];
cc.Class({
  "extends": cc.Component,
  properties: {
    // items: {
    //     default: [],
    //     type: Item
    // },
    Count: 0,
    Item: cc.Prefab
  },
  onLoad: function onLoad() {
    //我們先動態取得Canvas
    var CanvasNode = cc.find('scrollview/view/content');

    if (!CanvasNode) {
      cc.log('找不到Canvas畫布，請確認你的場景裡有Canvas');
      return;
    }

    var prefabPath = 'Item'; //這邊先將 this 指標存到另一個變數, 在別的方法裡this是會被改變的

    var root = this;
    gameCardData.forEach(function (item) {
      cc.loader.loadRes("Item", function (errorMessage, prefab) {
        if (errorMessage) {
          cc.log('載入Prefab失敗, 原因:' + errorMessage);
          return;
        }

        if (!(prefab instanceof cc.Prefab)) {
          cc.log('你載入的不是Prefab, 你做了什麼事?');
          return;
        } //這個是型別的檢查


        root.Count++; //接著，我們就可以進行實例化了

        var newMyPrefab = cc.instantiate(prefab); //我們先將這個建立出來的Prefab加入畫布裡

        CanvasNode.addChild(newMyPrefab); //我們要開始設定位置，因為當時在Prefab我們沒有指定最外層的大小
        //所以這邊我們要取得在MyPrefab中，我們加入的 "SplitButtons_01" 這張圖片的高度

        var buttonBG = newMyPrefab.getChildByName('bg');

        if (!buttonBG) {
          cc.log('找不到指定名稱的Node, 是不是哪裡搞錯了？');
          return;
        } //所以，y軸就是利用計數器乘上圖片的高度，再加上10額外邊界後，再減去場景的高度除以二


        var newX = buttonBG.width * 0.5 * root.Count - CanvasNode.width / 2 - 60; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

        console.log('buttonBG.width', buttonBG.width); //newMyPrefab.setContentSize(200);
        //設定位置，這邊x軸不變

        newMyPrefab.setPosition(newX, -130);
        newMyPrefab.getComponent('ItemTemplate').init({
          id: item.id,
          itemName: item.itemName,
          itemPrice: item.itemPrice,
          iconSF: item.iconSF
        });
      });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImdhbWVDYXJkRGF0YSIsIkNvbXBvbmVudCIsIkNvdW50IiwiUHJlZmFiIiwib25Mb2FkIiwiQ2FudmFzTm9kZSIsImZpbmQiLCJsb2ciLCJwcmVmYWJQYXRoIiwicm9vdCIsImZvckVhY2giLCJpdGVtIiwibG9hZGVyIiwibG9hZFJlcyIsImVycm9yTWVzc2FnZSIsInByZWZhYiIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImJ1dHRvbkJHIiwiZ2V0Q2hpbGRCeU5hbWUiLCJuZXdYIiwid2lkdGgiLCJjb25zb2xlIiwic2V0UG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxNQURVO0FBRWhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLEVBRkY7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLENBSEg7QUFJUkMsSUFBQUEsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0FBSkg7QUFGSSxDQUFULENBQVg7QUFVQSxJQUFJQyxZQUFZLEdBQUcsQ0FDZjtBQUNJTCxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxRQUFRLEVBQUUsS0FGZDtBQUdJQyxFQUFBQSxTQUFTLEVBQUUsRUFIZjtBQUlJQyxFQUFBQSxNQUFNLEVBQUU7QUFKWixDQURlLEVBT2Y7QUFDSUgsRUFBQUEsRUFBRSxFQUFDLENBRFA7QUFFSUMsRUFBQUEsUUFBUSxFQUFFLEtBRmQ7QUFH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QixFQUF5Q0MsSUFBekMsQ0FBOEM7QUFDMUMvQixVQUFBQSxFQUFFLEVBQUVnQixJQUFJLENBQUNoQixFQURpQztBQUUxQ0MsVUFBQUEsUUFBUSxFQUFFZSxJQUFJLENBQUNmLFFBRjJCO0FBRzFDQyxVQUFBQSxTQUFTLEVBQUVjLElBQUksQ0FBQ2QsU0FIMEI7QUFJMUNDLFVBQUFBLE1BQU0sRUFBRWEsSUFBSSxDQUFDYjtBQUo2QixTQUE5QztBQU1ILE9BbkNEO0FBcUNILEtBdENEO0FBdUNIO0FBNURJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJdGVtID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdJdGVtJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBpdGVtTmFtZTogJycsXG4gICAgICAgIGl0ZW1QcmljZTogMCxcbiAgICAgICAgaWNvblNGOiBjYy5TcHJpdGVGcmFtZVxuICAgIH1cbn0pO1xuXG52YXIgZ2FtZUNhcmREYXRhID0gW1xuICAgIHtcbiAgICAgICAgaWQ6MSxcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyMVwiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZEFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6MixcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyMlwiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZEJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6MyxcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyM1wiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZENcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6NCxcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyNFwiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZERcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6NSxcbiAgICAgICAgaXRlbU5hbWU6IFwi6YGK5oiyNVwiLFxuICAgICAgICBpdGVtUHJpY2U6ICcnLFxuICAgICAgICBpY29uU0Y6IFwiaW1hZ2UvY2FyZHMvY2FyZEVcIixcbiAgICB9LFxuICAgIFxuICBdO1xuXG5cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGl0ZW1zOiB7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgLy8gICAgIHR5cGU6IEl0ZW1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgQ291bnQ6IDAsXG4gICAgICAgIEl0ZW06IGNjLlByZWZhYlxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcblxuICAgICAgICAvL+aIkeWAkeWFiOWLleaFi+WPluW+l0NhbnZhc1xuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoICdzY3JvbGx2aWV3L3ZpZXcvY29udGVudCcgKTtcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5sb2coICfmib7kuI3liLBDYW52YXPnlavluIPvvIzoq4vnorroqo3kvaDnmoTloLTmma/oo6HmnIlDYW52YXMnICk7IHJldHVybjsgfSBcblxuICAgICAgICB2YXIgcHJlZmFiUGF0aCA9ICdJdGVtJztcblxuICAgICAgICAvL+mAmemCiuWFiOWwhyB0aGlzIOaMh+aomeWtmOWIsOWPpuS4gOWAi+iuiuaVuCwg5Zyo5Yil55qE5pa55rOV6KOhdGhpc+aYr+acg+iiq+aUueiuiueahFxuICAgICAgICB2YXIgcm9vdCA9IHRoaXM7IFxuICAgICAgICAgICAgXG4gICAgICAgIGdhbWVDYXJkRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJJdGVtXCIsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIHByZWZhYikge1xuXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY2MubG9nKCAn6LyJ5YWlUHJlZmFi5aSx5pWXLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiggISggcHJlZmFiIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi8ieWFpeeahOS4jeaYr1ByZWZhYiwg5L2g5YGa5LqG5LuA6bq85LqLPycgKTsgcmV0dXJuOyB9IC8v6YCZ5YCL5piv5Z6L5Yil55qE5qqi5p+lXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcm9vdC5Db3VudCsrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5bCx5Y+v5Lul6YCy6KGM5a+m5L6L5YyW5LqGXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIHByZWZhYiApO1xuXG4gICAgICAgICAgICAgICAgLy/miJHlgJHlhYjlsIfpgJnlgIvlu7rnq4vlh7rkvobnmoRQcmVmYWLliqDlhaXnlavluIPoo6FcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xuXG4gICAgICAgICAgICAgICAgLy/miJHlgJHopoHplovlp4voqK3lrprkvY3nva7vvIzlm6DngrrnlbbmmYLlnKhQcmVmYWLmiJHlgJHmspLmnInmjIflrprmnIDlpJblsaTnmoTlpKflsI9cbiAgICAgICAgICAgICAgICAvL+aJgOS7pemAmemCiuaIkeWAkeimgeWPluW+l+WcqE15UHJlZmFi5Lit77yM5oiR5YCR5Yqg5YWl55qEIFwiU3BsaXRCdXR0b25zXzAxXCIg6YCZ5by15ZyW54mH55qE6auY5bqmXG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbkJHID0gbmV3TXlQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoICdiZycgKTtcbiAgICAgICAgICAgICAgICBpZiggIWJ1dHRvbkJHICkgeyBjYy5sb2coJ+aJvuS4jeWIsOaMh+WumuWQjeeoseeahE5vZGUsIOaYr+S4jeaYr+WTquijoeaQnumMr+S6hu+8nycpOyByZXR1cm47IH1cblxuICAgICAgICAgICAgICAgIC8v5omA5Lul77yMeei7uOWwseaYr+WIqeeUqOioiOaVuOWZqOS5mOS4iuWclueJh+eahOmrmOW6pu+8jOWGjeWKoOS4ijEw6aGN5aSW6YKK55WM5b6M77yM5YaN5rib5Y675aC05pmv55qE6auY5bqm6Zmk5Lul5LqMXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ggPSAoICBidXR0b25CRy53aWR0aCowLjUqcm9vdC5Db3VudCApIC0gKENhbnZhc05vZGUud2lkdGggLyAyKSAtNjAgO1xuICAgICAgICAgICAgICAgIC8v5rib5Y675aC05pmv6auY5bqm6YCZ5YCL5YuV5L2c77yM5piv54K65LqG6K6T5q+P6bue5pOK5LiA5qyh5oyJ6YiV77yM5oiR5YCR55qEUHJlZmFi5bCx5LiA55u05b6A5LiK55Si55SfXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYnV0dG9uQkcud2lkdGgnLGJ1dHRvbkJHLndpZHRoKTtcbiAgICAgICAgICAgICAgICAvL25ld015UHJlZmFiLnNldENvbnRlbnRTaXplKDIwMCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/oqK3lrprkvY3nva7vvIzpgJnpgop46Lu45LiN6K6KXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuc2V0UG9zaXRpb24oIG5ld1gsIC0xMzAgKTtcblxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmdldENvbXBvbmVudCgnSXRlbVRlbXBsYXRlJykuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZTogaXRlbS5pdGVtTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVByaWNlOiBpdGVtLml0ZW1QcmljZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNGOiBpdGVtLmljb25TRixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59KTsiXX0=
