
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
    var CanvasNode = cc.find('Canvas');

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

      newMyPrefab.setPosition(newX, 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImNvaW5ib2FyZCIsIkNvbXBvbmVudCIsIkNvdW50IiwiaXRlbVByZWZhYiIsIlByZWZhYiIsIm9uTG9hZCIsIkNhbnZhc05vZGUiLCJmaW5kIiwibG9nIiwicHJlZmFiUGF0aCIsInJvb3QiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJidXR0b25CRyIsImdldENoaWxkQnlOYW1lIiwibmV3WCIsIndpZHRoIiwiY29uc29sZSIsInNldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImkiLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxNQURVO0FBRWhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLEVBRkY7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLENBSEg7QUFJUkMsSUFBQUEsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0FBSkg7QUFGSSxDQUFULENBQVg7QUFVQSxJQUFJQyxTQUFTLEdBQUcsQ0FDWjtBQUNFSixFQUFBQSxRQUFRLEVBQUUsTUFEWjtBQUVFQyxFQUFBQSxTQUFTLEVBQUUsU0FGYjtBQUdFQyxFQUFBQSxNQUFNLEVBQUU7QUFIVixDQURZLENBQWhCO0FBV0FQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDVSxTQURQO0FBRUxQLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FRLElBQUFBLEtBQUssRUFBRSxDQUxDO0FBTVJDLElBQUFBLFVBQVUsRUFBRVosRUFBRSxDQUFDYTtBQU5QLEdBRlA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSztBQUVOO0FBQ0EsUUFBSUMsVUFBVSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVMsUUFBVCxDQUFqQjs7QUFDQSxRQUFJLENBQUNELFVBQUwsRUFBa0I7QUFBRWYsTUFBQUEsRUFBRSxDQUFDaUIsR0FBSCxDQUFRLDZCQUFSO0FBQXlDO0FBQVM7O0FBRXRFLFFBQUlDLFVBQVUsR0FBRyxNQUFqQixDQU5NLENBUUw7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVgsQ0FUSyxDQVdOO0FBQ0k7O0FBQ0EsUUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVQyxZQUFWLEVBQXdCQyxjQUF4QixFQUN2QjtBQUNJSCxNQUFBQSxJQUFJLENBQUNSLEtBQUwsR0FESixDQUdJOztBQUNBLFVBQUlVLFlBQUosRUFBbUI7QUFBRXJCLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSxvQkFBb0JJLFlBQTVCO0FBQTRDO0FBQVM7O0FBQzFFLFVBQUksRUFBR0MsY0FBYyxZQUFZdEIsRUFBRSxDQUFDYSxNQUFoQyxDQUFKLEVBQStDO0FBQUViLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSx1QkFBUjtBQUFtQztBQUFTLE9BTGpHLENBS2tHO0FBRzlGOzs7QUFDQSxVQUFJTSxXQUFXLEdBQUd2QixFQUFFLENBQUN3QixXQUFILENBQWdCRixjQUFoQixDQUFsQixDQVRKLENBV0k7O0FBQ0FQLE1BQUFBLFVBQVUsQ0FBQ1UsUUFBWCxDQUFxQkYsV0FBckIsRUFaSixDQWNJO0FBQ0E7O0FBQ0EsVUFBSUcsUUFBUSxHQUFHSCxXQUFXLENBQUNJLGNBQVosQ0FBNEIsSUFBNUIsQ0FBZjs7QUFDQSxVQUFJLENBQUNELFFBQUwsRUFBZ0I7QUFBRTFCLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBTyx5QkFBUDtBQUFtQztBQUFTLE9BakJsRSxDQW1CSTs7O0FBQ0EsVUFBSVcsSUFBSSxHQUFNRixRQUFRLENBQUNHLEtBQVosR0FBdUJWLElBQUksQ0FBQ1IsS0FBTCxHQUFXLEdBQWxDLEdBQXlDLEdBQXBELENBcEJKLENBcUJJOztBQUdBbUIsTUFBQUEsT0FBTyxDQUFDYixHQUFSLENBQVlXLElBQVosRUF4QkosQ0F5Qkk7O0FBQ0FMLE1BQUFBLFdBQVcsQ0FBQ1EsV0FBWixDQUF5QkgsSUFBekIsRUFBK0IsRUFBL0I7QUFHQUwsTUFBQUEsV0FBVyxDQUFDUyxZQUFaLENBQXlCLGNBQXpCLEVBQXlDQyxJQUF6QyxDQUE4QztBQUMxQzdCLFFBQUFBLEVBQUUsRUFBRSxNQURzQztBQUUxQ0MsUUFBQUEsUUFBUSxFQUFFLE1BRmdDO0FBRzFDQyxRQUFBQSxTQUFTLEVBQUUsVUFIK0I7QUFJMUNDLFFBQUFBLE1BQU0sRUFBRTtBQUprQyxPQUE5QztBQVlILEtBMUNELENBYkUsQ0F5REY7QUFDQTs7O0FBRUosU0FBSyxJQUFJMkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QixFQUFFQSxDQUExQixFQUE2QjtBQUV6QmxDLE1BQUFBLEVBQUUsQ0FBQ21DLE1BQUgsQ0FBVUMsT0FBVixDQUFtQmxCLFVBQW5CLEVBQStCRSxnQkFBL0IsRUFGeUIsQ0FHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDSjtBQW5GSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSXRlbSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnSXRlbScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICBpdGVtUHJpY2U6IDAsXG4gICAgICAgIGljb25TRjogY2MuU3ByaXRlRnJhbWVcbiAgICB9XG59KTtcblxudmFyIGNvaW5ib2FyZCA9IFtcbiAgICB7XG4gICAgICBpdGVtTmFtZTogXCLlsIrmpq7npq7ljIVcIixcbiAgICAgIGl0ZW1QcmljZTogMjgwMDAwMDAwLFxuICAgICAgaWNvblNGOiBcImltYWdlcy9jYXJkcy9jYXJkQVwiLFxuICAgIH0sXG4gICAgXG4gIF07XG5cblxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gaXRlbXM6IHtcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAvLyAgICAgdHlwZTogSXRlbVxuICAgICAgICAvLyB9LFxuICAgICAgICBDb3VudDogMCxcbiAgICAgICAgaXRlbVByZWZhYjogY2MuUHJlZmFiXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuXG4gICAgICAgIC8v5oiR5YCR5YWI5YuV5oWL5Y+W5b6XQ2FudmFzXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCggJ0NhbnZhcycgKTtcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5sb2coICfmib7kuI3liLBDYW52YXPnlavluIPvvIzoq4vnorroqo3kvaDnmoTloLTmma/oo6HmnIlDYW52YXMnICk7IHJldHVybjsgfSBcblxuICAgICAgICB2YXIgcHJlZmFiUGF0aCA9ICdJdGVtJztcblxuICAgICAgICAgLy/pgJnpgorlhYjlsIcgdGhpcyDmjIfmqJnlrZjliLDlj6bkuIDlgIvorormlbgsIOWcqOWIpeeahOaWueazleijoXRoaXPmmK/mnIPooqvmlLnorornmoRcbiAgICAgICAgIHZhciByb290ID0gdGhpczsgXG5cbiAgICAgICAgLy/pgJnpgormiJHlgJHmlrDlop7kuIDlgIvnp4HmnInmlrnms5XvvIzkvoblgZrngrrovInlhaVQcmVmYWLmmYLnmoTmlrnms5VcbiAgICAgICAgICAgIC8vKOeVtueEtuS9oOS5n+WPr+S7peebtOaOpeWvq+WcqGxvYWRSZXPlj4PmlbjkuIrvvIzmiJHlj6rmmK/oprrlvpfpgJnmqKPmr5TovIPlrrnmmJPnnIvmuIXmpZopXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKCBlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvb3QuQ291bnQrKztcblxuICAgICAgICAgICAgICAgIC8v5LiA5qij77yM6aSK5oiQ5qqi5p+l55qE5aW957+S5oWjXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY2MubG9nKCAn6LyJ5YWlUHJlZmFi5aSx5pWXLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY2MubG9nKCAn5L2g6LyJ5YWl55qE5LiN5pivUHJlZmFiLCDkvaDlgZrkuobku4Dpurzkuos/JyApOyByZXR1cm47IH0gLy/pgJnlgIvmmK/lnovliKXnmoTmqqLmn6VcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/mjqXokZfvvIzmiJHlgJHlsLHlj6/ku6XpgLLooYzlr6bkvovljJbkuoZcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcblxuICAgICAgICAgICAgICAgIC8v5oiR5YCR5YWI5bCH6YCZ5YCL5bu656uL5Ye65L6G55qEUHJlZmFi5Yqg5YWl55Wr5biD6KOhXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcblxuICAgICAgICAgICAgICAgIC8v5oiR5YCR6KaB6ZaL5aeL6Kit5a6a5L2N572u77yM5Zug54K655W25pmC5ZyoUHJlZmFi5oiR5YCR5rKS5pyJ5oyH5a6a5pyA5aSW5bGk55qE5aSn5bCPXG4gICAgICAgICAgICAgICAgLy/miYDku6XpgJnpgormiJHlgJHopoHlj5blvpflnKhNeVByZWZhYuS4re+8jOaIkeWAkeWKoOWFpeeahCBcIlNwbGl0QnV0dG9uc18wMVwiIOmAmeW8teWclueJh+eahOmrmOW6plxuICAgICAgICAgICAgICAgIHZhciBidXR0b25CRyA9IG5ld015UHJlZmFiLmdldENoaWxkQnlOYW1lKCAnYmcnICk7XG4gICAgICAgICAgICAgICAgaWYoICFidXR0b25CRyApIHsgY2MubG9nKCfmib7kuI3liLDmjIflrprlkI3nqLHnmoROb2RlLCDmmK/kuI3mmK/lk6roo6HmkJ7pjK/kuobvvJ8nKTsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgICAvL+aJgOS7pe+8jHnou7jlsLHmmK/liKnnlKjoqIjmlbjlmajkuZjkuIrlnJbniYfnmoTpq5jluqbvvIzlho3liqDkuIoxMOmhjeWklumCiueVjOW+jO+8jOWGjea4m+WOu+WgtOaZr+eahOmrmOW6pumZpOS7peS6jFxuICAgICAgICAgICAgICAgIHZhciBuZXdYID0gKCAgYnV0dG9uQkcud2lkdGggKSArIChyb290LkNvdW50KjEwMCkgLSA3NTA7XG4gICAgICAgICAgICAgICAgLy/muJvljrvloLTmma/pq5jluqbpgJnlgIvli5XkvZzvvIzmmK/ngrrkuoborpPmr4/pu57mk4rkuIDmrKHmjInpiJXvvIzmiJHlgJHnmoRQcmVmYWLlsLHkuIDnm7TlvoDkuIrnlKLnlJ9cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1gpO1xuICAgICAgICAgICAgICAgIC8v6Kit5a6a5L2N572u77yM6YCZ6YKKeOi7uOS4jeiuilxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnNldFBvc2l0aW9uKCBuZXdYLCAxMCApO1xuXG5cbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5nZXRDb21wb25lbnQoJ0l0ZW1UZW1wbGF0ZScpLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJzExMTEnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZTogJ3Rlc3QnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUHJpY2U6ICdkZnNkZnNkZicsXG4gICAgICAgICAgICAgICAgICAgIGljb25TRjogJ2ltYWdlL2NhcmRzL2NhcmRBJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8v6YCZ6YKK5omN5piv55yf55qE5L2/55SoY2MubG9hZGVy6YCy6KGM6LyJ5YWl77yM5Lim5LiU5ZG85Y+r5oiR5YCR5LiK6Z2i5a+r55qE5pa55rOVXG4gICAgICAgICAgICAvL2NjLmxvYWRlci5sb2FkUmVzKCBwcmVmYWJQYXRoLCBvblJlc291cmNlTG9hZGVkICk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG5cbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCBwcmVmYWJQYXRoLCBvblJlc291cmNlTG9hZGVkICk7XG4gICAgICAgICAgICAvLyB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiUGF0aCk7XG4gICAgICAgICAgICAvLyB2YXIgZGF0YSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAvLyBuZXdNeVByZWZhYi5nZXRDb21wb25lbnQoJ0l0ZW1UZW1wbGF0ZScpLmluaXQoe1xuICAgICAgICAgICAgLy8gICAgIGlkOiAnMTExMScsXG4gICAgICAgICAgICAvLyAgICAgaXRlbU5hbWU6ICd0ZXN0JyxcbiAgICAgICAgICAgIC8vICAgICBpdGVtUHJpY2U6ICdkZnNkZnNkZicsXG4gICAgICAgICAgICAvLyAgICAgaWNvblNGOiBkYXRhLmljb25TRlxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXX0=