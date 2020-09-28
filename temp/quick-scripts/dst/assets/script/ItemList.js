
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImNvaW5ib2FyZCIsIkNvbXBvbmVudCIsIkNvdW50IiwiaXRlbVByZWZhYiIsIlByZWZhYiIsIm9uTG9hZCIsIkNhbnZhc05vZGUiLCJmaW5kIiwibG9nIiwicHJlZmFiUGF0aCIsInJvb3QiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJidXR0b25CRyIsImdldENoaWxkQnlOYW1lIiwibmV3WCIsIndpZHRoIiwiY29uc29sZSIsInNldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImkiLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxNQURVO0FBRWhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLEVBRkY7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLENBSEg7QUFJUkMsSUFBQUEsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0FBSkg7QUFGSSxDQUFULENBQVg7QUFVQSxJQUFJQyxTQUFTLEdBQUcsQ0FDWjtBQUNFSixFQUFBQSxRQUFRLEVBQUUsTUFEWjtBQUVFQyxFQUFBQSxTQUFTLEVBQUUsU0FGYjtBQUdFQyxFQUFBQSxNQUFNLEVBQUU7QUFIVixDQURZLENBQWhCO0FBV0FQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDVSxTQURQO0FBRUxQLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FRLElBQUFBLEtBQUssRUFBRSxDQUxDO0FBTVJDLElBQUFBLFVBQVUsRUFBRVosRUFBRSxDQUFDYTtBQU5QLEdBRlA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSztBQUVOO0FBQ0EsUUFBSUMsVUFBVSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVMseUJBQVQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRCxVQUFMLEVBQWtCO0FBQUVmLE1BQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSw2QkFBUjtBQUF5QztBQUFTOztBQUV0RSxRQUFJQyxVQUFVLEdBQUcsTUFBakIsQ0FOTSxDQVFMOztBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYLENBVEssQ0FXTjtBQUNJOztBQUNBLFFBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsWUFBVixFQUF3QkMsY0FBeEIsRUFDdkI7QUFDSUgsTUFBQUEsSUFBSSxDQUFDUixLQUFMLEdBREosQ0FHSTs7QUFDQSxVQUFJVSxZQUFKLEVBQW1CO0FBQUVyQixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQVEsb0JBQW9CSSxZQUE1QjtBQUE0QztBQUFTOztBQUMxRSxVQUFJLEVBQUdDLGNBQWMsWUFBWXRCLEVBQUUsQ0FBQ2EsTUFBaEMsQ0FBSixFQUErQztBQUFFYixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQVEsdUJBQVI7QUFBbUM7QUFBUyxPQUxqRyxDQUtrRztBQUc5Rjs7O0FBQ0EsVUFBSU0sV0FBVyxHQUFHdkIsRUFBRSxDQUFDd0IsV0FBSCxDQUFnQkYsY0FBaEIsQ0FBbEIsQ0FUSixDQVdJOztBQUNBUCxNQUFBQSxVQUFVLENBQUNVLFFBQVgsQ0FBcUJGLFdBQXJCLEVBWkosQ0FjSTtBQUNBOztBQUNBLFVBQUlHLFFBQVEsR0FBR0gsV0FBVyxDQUFDSSxjQUFaLENBQTRCLElBQTVCLENBQWY7O0FBQ0EsVUFBSSxDQUFDRCxRQUFMLEVBQWdCO0FBQUUxQixRQUFBQSxFQUFFLENBQUNpQixHQUFILENBQU8seUJBQVA7QUFBbUM7QUFBUyxPQWpCbEUsQ0FtQkk7OztBQUNBLFVBQUlXLElBQUksR0FBTUYsUUFBUSxDQUFDRyxLQUFaLEdBQXVCVixJQUFJLENBQUNSLEtBQUwsR0FBVyxHQUFsQyxHQUF5QyxHQUFwRCxDQXBCSixDQXFCSTs7QUFHQW1CLE1BQUFBLE9BQU8sQ0FBQ2IsR0FBUixDQUFZVyxJQUFaLEVBeEJKLENBeUJJOztBQUNBTCxNQUFBQSxXQUFXLENBQUNRLFdBQVosQ0FBeUJILElBQXpCLEVBQStCLEVBQS9CO0FBR0FMLE1BQUFBLFdBQVcsQ0FBQ1MsWUFBWixDQUF5QixjQUF6QixFQUF5Q0MsSUFBekMsQ0FBOEM7QUFDMUM3QixRQUFBQSxFQUFFLEVBQUUsTUFEc0M7QUFFMUNDLFFBQUFBLFFBQVEsRUFBRSxNQUZnQztBQUcxQ0MsUUFBQUEsU0FBUyxFQUFFLFVBSCtCO0FBSTFDQyxRQUFBQSxNQUFNLEVBQUU7QUFKa0MsT0FBOUM7QUFZSCxLQTFDRCxDQWJFLENBeURGO0FBQ0E7OztBQUVKLFNBQUssSUFBSTJCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0IsRUFBRUEsQ0FBMUIsRUFBNkI7QUFFekJsQyxNQUFBQSxFQUFFLENBQUNtQyxNQUFILENBQVVDLE9BQVYsQ0FBbUJsQixVQUFuQixFQUErQkUsZ0JBQS9CLEVBRnlCLENBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7QUFuRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW0gPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ0l0ZW0nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGl0ZW1OYW1lOiAnJyxcbiAgICAgICAgaXRlbVByaWNlOiAwLFxuICAgICAgICBpY29uU0Y6IGNjLlNwcml0ZUZyYW1lXG4gICAgfVxufSk7XG5cbnZhciBjb2luYm9hcmQgPSBbXG4gICAge1xuICAgICAgaXRlbU5hbWU6IFwi5bCK5qau56au5YyFXCIsXG4gICAgICBpdGVtUHJpY2U6IDI4MDAwMDAwMCxcbiAgICAgIGljb25TRjogXCJpbWFnZXMvY2FyZHMvY2FyZEFcIixcbiAgICB9LFxuICAgIFxuICBdO1xuXG5cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGl0ZW1zOiB7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgLy8gICAgIHR5cGU6IEl0ZW1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgQ291bnQ6IDAsXG4gICAgICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYlxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcblxuICAgICAgICAvL+aIkeWAkeWFiOWLleaFi+WPluW+l0NhbnZhc1xuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoICdzY3JvbGx2aWV3L3ZpZXcvY29udGVudCcgKTtcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5sb2coICfmib7kuI3liLBDYW52YXPnlavluIPvvIzoq4vnorroqo3kvaDnmoTloLTmma/oo6HmnIlDYW52YXMnICk7IHJldHVybjsgfSBcblxuICAgICAgICB2YXIgcHJlZmFiUGF0aCA9ICdJdGVtJztcblxuICAgICAgICAgLy/pgJnpgorlhYjlsIcgdGhpcyDmjIfmqJnlrZjliLDlj6bkuIDlgIvorormlbgsIOWcqOWIpeeahOaWueazleijoXRoaXPmmK/mnIPooqvmlLnorornmoRcbiAgICAgICAgIHZhciByb290ID0gdGhpczsgXG5cbiAgICAgICAgLy/pgJnpgormiJHlgJHmlrDlop7kuIDlgIvnp4HmnInmlrnms5XvvIzkvoblgZrngrrovInlhaVQcmVmYWLmmYLnmoTmlrnms5VcbiAgICAgICAgICAgIC8vKOeVtueEtuS9oOS5n+WPr+S7peebtOaOpeWvq+WcqGxvYWRSZXPlj4PmlbjkuIrvvIzmiJHlj6rmmK/oprrlvpfpgJnmqKPmr5TovIPlrrnmmJPnnIvmuIXmpZopXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKCBlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvb3QuQ291bnQrKztcblxuICAgICAgICAgICAgICAgIC8v5LiA5qij77yM6aSK5oiQ5qqi5p+l55qE5aW957+S5oWjXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY2MubG9nKCAn6LyJ5YWlUHJlZmFi5aSx5pWXLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY2MubG9nKCAn5L2g6LyJ5YWl55qE5LiN5pivUHJlZmFiLCDkvaDlgZrkuobku4Dpurzkuos/JyApOyByZXR1cm47IH0gLy/pgJnlgIvmmK/lnovliKXnmoTmqqLmn6VcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/mjqXokZfvvIzmiJHlgJHlsLHlj6/ku6XpgLLooYzlr6bkvovljJbkuoZcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcblxuICAgICAgICAgICAgICAgIC8v5oiR5YCR5YWI5bCH6YCZ5YCL5bu656uL5Ye65L6G55qEUHJlZmFi5Yqg5YWl55Wr5biD6KOhXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcblxuICAgICAgICAgICAgICAgIC8v5oiR5YCR6KaB6ZaL5aeL6Kit5a6a5L2N572u77yM5Zug54K655W25pmC5ZyoUHJlZmFi5oiR5YCR5rKS5pyJ5oyH5a6a5pyA5aSW5bGk55qE5aSn5bCPXG4gICAgICAgICAgICAgICAgLy/miYDku6XpgJnpgormiJHlgJHopoHlj5blvpflnKhNeVByZWZhYuS4re+8jOaIkeWAkeWKoOWFpeeahCBcIlNwbGl0QnV0dG9uc18wMVwiIOmAmeW8teWclueJh+eahOmrmOW6plxuICAgICAgICAgICAgICAgIHZhciBidXR0b25CRyA9IG5ld015UHJlZmFiLmdldENoaWxkQnlOYW1lKCAnYmcnICk7XG4gICAgICAgICAgICAgICAgaWYoICFidXR0b25CRyApIHsgY2MubG9nKCfmib7kuI3liLDmjIflrprlkI3nqLHnmoROb2RlLCDmmK/kuI3mmK/lk6roo6HmkJ7pjK/kuobvvJ8nKTsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgICAvL+aJgOS7pe+8jHnou7jlsLHmmK/liKnnlKjoqIjmlbjlmajkuZjkuIrlnJbniYfnmoTpq5jluqbvvIzlho3liqDkuIoxMOmhjeWklumCiueVjOW+jO+8jOWGjea4m+WOu+WgtOaZr+eahOmrmOW6pumZpOS7peS6jFxuICAgICAgICAgICAgICAgIHZhciBuZXdYID0gKCAgYnV0dG9uQkcud2lkdGggKSArIChyb290LkNvdW50KjEwMCkgLSA3NTA7XG4gICAgICAgICAgICAgICAgLy/muJvljrvloLTmma/pq5jluqbpgJnlgIvli5XkvZzvvIzmmK/ngrrkuoborpPmr4/pu57mk4rkuIDmrKHmjInpiJXvvIzmiJHlgJHnmoRQcmVmYWLlsLHkuIDnm7TlvoDkuIrnlKLnlJ9cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1gpO1xuICAgICAgICAgICAgICAgIC8v6Kit5a6a5L2N572u77yM6YCZ6YKKeOi7uOS4jeiuilxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnNldFBvc2l0aW9uKCBuZXdYLCAxMCApO1xuXG5cbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5nZXRDb21wb25lbnQoJ0l0ZW1UZW1wbGF0ZScpLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJzExMTEnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZTogJ3Rlc3QnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUHJpY2U6ICdkZnNkZnNkZicsXG4gICAgICAgICAgICAgICAgICAgIGljb25TRjogJ2ltYWdlL2NhcmRzL2NhcmRBJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8v6YCZ6YKK5omN5piv55yf55qE5L2/55SoY2MubG9hZGVy6YCy6KGM6LyJ5YWl77yM5Lim5LiU5ZG85Y+r5oiR5YCR5LiK6Z2i5a+r55qE5pa55rOVXG4gICAgICAgICAgICAvL2NjLmxvYWRlci5sb2FkUmVzKCBwcmVmYWJQYXRoLCBvblJlc291cmNlTG9hZGVkICk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG5cbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCBwcmVmYWJQYXRoLCBvblJlc291cmNlTG9hZGVkICk7XG4gICAgICAgICAgICAvLyB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiUGF0aCk7XG4gICAgICAgICAgICAvLyB2YXIgZGF0YSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICAvLyBuZXdNeVByZWZhYi5nZXRDb21wb25lbnQoJ0l0ZW1UZW1wbGF0ZScpLmluaXQoe1xuICAgICAgICAgICAgLy8gICAgIGlkOiAnMTExMScsXG4gICAgICAgICAgICAvLyAgICAgaXRlbU5hbWU6ICd0ZXN0JyxcbiAgICAgICAgICAgIC8vICAgICBpdGVtUHJpY2U6ICdkZnNkZnNkZicsXG4gICAgICAgICAgICAvLyAgICAgaWNvblNGOiBkYXRhLmljb25TRlxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXX0=