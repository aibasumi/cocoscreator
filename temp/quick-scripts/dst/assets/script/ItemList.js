
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


      var newX = buttonBG.width + root.Count * 50 - CanvasNode.width / 2; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

      console.log(newX); //設定位置，這邊x軸不變

      newMyPrefab.setPosition(newX, 5);
      newMyPrefab.getComponent('ItemTemplate').init({
        id: '1111',
        itemName: 'test',
        itemPrice: 'dfsdfsdf',
        iconSF: 'image/cards/cardA'
      });
    }; //這邊才是真的使用cc.loader進行載入，並且呼叫我們上面寫的方法
    //cc.loader.loadRes( prefabPath, onResourceLoaded );


    for (var i = 0; i < 5; ++i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlkIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpY29uU0YiLCJTcHJpdGVGcmFtZSIsImNvaW5ib2FyZCIsIkNvbXBvbmVudCIsIkNvdW50IiwiaXRlbVByZWZhYiIsIlByZWZhYiIsIm9uTG9hZCIsIkNhbnZhc05vZGUiLCJmaW5kIiwibG9nIiwicHJlZmFiUGF0aCIsInJvb3QiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJidXR0b25CRyIsImdldENoaWxkQnlOYW1lIiwibmV3WCIsIndpZHRoIiwiY29uc29sZSIsInNldFBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImkiLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUksR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxNQURVO0FBRWhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsUUFBUSxFQUFFLEVBRkY7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLENBSEg7QUFJUkMsSUFBQUEsTUFBTSxFQUFFUCxFQUFFLENBQUNRO0FBSkg7QUFGSSxDQUFULENBQVg7QUFVQSxJQUFJQyxTQUFTLEdBQUcsQ0FDWjtBQUNFSixFQUFBQSxRQUFRLEVBQUUsTUFEWjtBQUVFQyxFQUFBQSxTQUFTLEVBQUUsU0FGYjtBQUdFQyxFQUFBQSxNQUFNLEVBQUU7QUFIVixDQURZLENBQWhCO0FBV0FQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDVSxTQURQO0FBRUxQLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FRLElBQUFBLEtBQUssRUFBRSxDQUxDO0FBTVJDLElBQUFBLFVBQVUsRUFBRVosRUFBRSxDQUFDYTtBQU5QLEdBRlA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSztBQUVOO0FBQ0EsUUFBSUMsVUFBVSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVMsUUFBVCxDQUFqQjs7QUFDQSxRQUFJLENBQUNELFVBQUwsRUFBa0I7QUFBRWYsTUFBQUEsRUFBRSxDQUFDaUIsR0FBSCxDQUFRLDZCQUFSO0FBQXlDO0FBQVM7O0FBRXRFLFFBQUlDLFVBQVUsR0FBRyxNQUFqQixDQU5NLENBUUw7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVgsQ0FUSyxDQVdOO0FBQ0k7O0FBQ0EsUUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVQyxZQUFWLEVBQXdCQyxjQUF4QixFQUN2QjtBQUNJSCxNQUFBQSxJQUFJLENBQUNSLEtBQUwsR0FESixDQUdJOztBQUNBLFVBQUlVLFlBQUosRUFBbUI7QUFBRXJCLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSxvQkFBb0JJLFlBQTVCO0FBQTRDO0FBQVM7O0FBQzFFLFVBQUksRUFBR0MsY0FBYyxZQUFZdEIsRUFBRSxDQUFDYSxNQUFoQyxDQUFKLEVBQStDO0FBQUViLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSx1QkFBUjtBQUFtQztBQUFTLE9BTGpHLENBS2tHO0FBRzlGOzs7QUFDQSxVQUFJTSxXQUFXLEdBQUd2QixFQUFFLENBQUN3QixXQUFILENBQWdCRixjQUFoQixDQUFsQixDQVRKLENBV0k7O0FBQ0FQLE1BQUFBLFVBQVUsQ0FBQ1UsUUFBWCxDQUFxQkYsV0FBckIsRUFaSixDQWNJO0FBQ0E7O0FBQ0EsVUFBSUcsUUFBUSxHQUFHSCxXQUFXLENBQUNJLGNBQVosQ0FBNEIsSUFBNUIsQ0FBZjs7QUFDQSxVQUFJLENBQUNELFFBQUwsRUFBZ0I7QUFBRTFCLFFBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBTyx5QkFBUDtBQUFtQztBQUFTLE9BakJsRSxDQW1CSTs7O0FBQ0EsVUFBSVcsSUFBSSxHQUFNRixRQUFRLENBQUNHLEtBQVosR0FBdUJWLElBQUksQ0FBQ1IsS0FBTCxHQUFXLEVBQWxDLEdBQTBDSSxVQUFVLENBQUNjLEtBQVgsR0FBbUIsQ0FBeEUsQ0FwQkosQ0FxQkk7O0FBR0FDLE1BQUFBLE9BQU8sQ0FBQ2IsR0FBUixDQUFZVyxJQUFaLEVBeEJKLENBeUJJOztBQUNBTCxNQUFBQSxXQUFXLENBQUNRLFdBQVosQ0FBeUJILElBQXpCLEVBQStCLENBQS9CO0FBR0FMLE1BQUFBLFdBQVcsQ0FBQ1MsWUFBWixDQUF5QixjQUF6QixFQUF5Q0MsSUFBekMsQ0FBOEM7QUFDMUM3QixRQUFBQSxFQUFFLEVBQUUsTUFEc0M7QUFFMUNDLFFBQUFBLFFBQVEsRUFBRSxNQUZnQztBQUcxQ0MsUUFBQUEsU0FBUyxFQUFFLFVBSCtCO0FBSTFDQyxRQUFBQSxNQUFNLEVBQUU7QUFKa0MsT0FBOUM7QUFZSCxLQTFDRCxDQWJFLENBeURGO0FBQ0E7OztBQUVKLFNBQUssSUFBSTJCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUIsRUFBRUEsQ0FBekIsRUFBNEI7QUFFeEJsQyxNQUFBQSxFQUFFLENBQUNtQyxNQUFILENBQVVDLE9BQVYsQ0FBbUJsQixVQUFuQixFQUErQkUsZ0JBQS9CLEVBRndCLENBR3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7QUFuRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEl0ZW0gPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ0l0ZW0nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGl0ZW1OYW1lOiAnJyxcbiAgICAgICAgaXRlbVByaWNlOiAwLFxuICAgICAgICBpY29uU0Y6IGNjLlNwcml0ZUZyYW1lXG4gICAgfVxufSk7XG5cbnZhciBjb2luYm9hcmQgPSBbXG4gICAge1xuICAgICAgaXRlbU5hbWU6IFwi5bCK5qau56au5YyFXCIsXG4gICAgICBpdGVtUHJpY2U6IDI4MDAwMDAwMCxcbiAgICAgIGljb25TRjogXCJpbWFnZXMvY2FyZHMvY2FyZEFcIixcbiAgICB9LFxuICAgIFxuICBdO1xuXG5cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGl0ZW1zOiB7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgLy8gICAgIHR5cGU6IEl0ZW1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgQ291bnQ6IDAsXG4gICAgICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYlxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcblxuICAgICAgICAvL+aIkeWAkeWFiOWLleaFi+WPluW+l0NhbnZhc1xuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoICdDYW52YXMnICk7XG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MubG9nKCAn5om+5LiN5YiwQ2FudmFz55Wr5biD77yM6KuL56K66KqN5L2g55qE5aC05pmv6KOh5pyJQ2FudmFzJyApOyByZXR1cm47IH0gXG5cbiAgICAgICAgdmFyIHByZWZhYlBhdGggPSAnSXRlbSc7XG5cbiAgICAgICAgIC8v6YCZ6YKK5YWI5bCHIHRoaXMg5oyH5qiZ5a2Y5Yiw5Y+m5LiA5YCL6K6K5pW4LCDlnKjliKXnmoTmlrnms5Xoo6F0aGlz5piv5pyD6KKr5pS56K6K55qEXG4gICAgICAgICB2YXIgcm9vdCA9IHRoaXM7IFxuXG4gICAgICAgIC8v6YCZ6YKK5oiR5YCR5paw5aKe5LiA5YCL56eB5pyJ5pa55rOV77yM5L6G5YGa54K66LyJ5YWlUHJlZmFi5pmC55qE5pa55rOVXG4gICAgICAgICAgICAvLyjnlbbnhLbkvaDkuZ/lj6/ku6Xnm7TmjqXlr6vlnKhsb2FkUmVz5Y+D5pW45LiK77yM5oiR5Y+q5piv6Ka65b6X6YCZ5qij5q+U6LyD5a655piT55yL5riF5qWaKVxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbiggZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb290LkNvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAvL+S4gOaoo++8jOmkiuaIkOaqouafpeeahOWlvee/kuaFo1xuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNjLmxvZyggJ+i8ieWFpVByZWZhYuWkseaVlywg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi8ieWFpeeahOS4jeaYr1ByZWZhYiwg5L2g5YGa5LqG5LuA6bq85LqLPycgKTsgcmV0dXJuOyB9IC8v6YCZ5YCL5piv5Z6L5Yil55qE5qqi5p+lXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5bCx5Y+v5Lul6YCy6KGM5a+m5L6L5YyW5LqGXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XG5cbiAgICAgICAgICAgICAgICAvL+aIkeWAkeWFiOWwh+mAmeWAi+W7uueri+WHuuS+hueahFByZWZhYuWKoOWFpeeVq+W4g+ijoVxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XG5cbiAgICAgICAgICAgICAgICAvL+aIkeWAkeimgemWi+Wni+ioreWumuS9jee9ru+8jOWboOeCuueVtuaZguWcqFByZWZhYuaIkeWAkeaykuacieaMh+WumuacgOWkluWxpOeahOWkp+Wwj1xuICAgICAgICAgICAgICAgIC8v5omA5Lul6YCZ6YKK5oiR5YCR6KaB5Y+W5b6X5ZyoTXlQcmVmYWLkuK3vvIzmiJHlgJHliqDlhaXnmoQgXCJTcGxpdEJ1dHRvbnNfMDFcIiDpgJnlvLXlnJbniYfnmoTpq5jluqZcbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uQkcgPSBuZXdNeVByZWZhYi5nZXRDaGlsZEJ5TmFtZSggJ2JnJyApO1xuICAgICAgICAgICAgICAgIGlmKCAhYnV0dG9uQkcgKSB7IGNjLmxvZygn5om+5LiN5Yiw5oyH5a6a5ZCN56ix55qETm9kZSwg5piv5LiN5piv5ZOq6KOh5pCe6Yyv5LqG77yfJyk7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAgICAgLy/miYDku6XvvIx56Lu45bCx5piv5Yip55So6KiI5pW45Zmo5LmY5LiK5ZyW54mH55qE6auY5bqm77yM5YaN5Yqg5LiKMTDpoY3lpJbpgornlYzlvozvvIzlho3muJvljrvloLTmma/nmoTpq5jluqbpmaTku6XkuoxcbiAgICAgICAgICAgICAgICB2YXIgbmV3WCA9ICggIGJ1dHRvbkJHLndpZHRoICkgKyAocm9vdC5Db3VudCo1MCkgLSAoIENhbnZhc05vZGUud2lkdGggLyAyICk7XG4gICAgICAgICAgICAgICAgLy/muJvljrvloLTmma/pq5jluqbpgJnlgIvli5XkvZzvvIzmmK/ngrrkuoborpPmr4/pu57mk4rkuIDmrKHmjInpiJXvvIzmiJHlgJHnmoRQcmVmYWLlsLHkuIDnm7TlvoDkuIrnlKLnlJ9cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1gpO1xuICAgICAgICAgICAgICAgIC8v6Kit5a6a5L2N572u77yM6YCZ6YKKeOi7uOS4jeiuilxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnNldFBvc2l0aW9uKCBuZXdYLCA1ICk7XG5cblxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmdldENvbXBvbmVudCgnSXRlbVRlbXBsYXRlJykuaW5pdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnMTExMScsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lOiAndGVzdCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QcmljZTogJ2Rmc2Rmc2RmJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNGOiAnaW1hZ2UvY2FyZHMvY2FyZEEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBcblxuXG5cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy/pgJnpgormiY3mmK/nnJ/nmoTkvb/nlKhjYy5sb2FkZXLpgLLooYzovInlhaXvvIzkuKbkuJTlkbzlj6vmiJHlgJHkuIrpnaLlr6vnmoTmlrnms5VcbiAgICAgICAgICAgIC8vY2MubG9hZGVyLmxvYWRSZXMoIHByZWZhYlBhdGgsIG9uUmVzb3VyY2VMb2FkZWQgKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7ICsraSkge1xuXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyggcHJlZmFiUGF0aCwgb25SZXNvdXJjZUxvYWRlZCApO1xuICAgICAgICAgICAgLy8gdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYlBhdGgpO1xuICAgICAgICAgICAgLy8gdmFyIGRhdGEgPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgLy8gbmV3TXlQcmVmYWIuZ2V0Q29tcG9uZW50KCdJdGVtVGVtcGxhdGUnKS5pbml0KHtcbiAgICAgICAgICAgIC8vICAgICBpZDogJzExMTEnLFxuICAgICAgICAgICAgLy8gICAgIGl0ZW1OYW1lOiAndGVzdCcsXG4gICAgICAgICAgICAvLyAgICAgaXRlbVByaWNlOiAnZGZzZGZzZGYnLFxuICAgICAgICAgICAgLy8gICAgIGljb25TRjogZGF0YS5pY29uU0ZcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7Il19