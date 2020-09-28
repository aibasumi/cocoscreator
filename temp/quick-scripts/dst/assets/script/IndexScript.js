
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/IndexScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99d3eLg9mBN7I5aBj3JHfdS', 'IndexScript');
// script/IndexScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    ClickCount: 0 //除了計數器外，這邊我故意留空，我準備全部使用代碼來控制

  },
  onLoad: function onLoad() {
    //首先，我們先找到我們剛剛新增的按鈕
    var NodeBtnAdd = cc.find('Canvas/BtnAdd'); //cc.find回傳的是Node
    //然後，記得養成時時檢查變數是否存在、並且寫Log的習慣，
    //上面的參數如果打錯，這邊就會印出Log，並且也不會再往下執行

    if (!NodeBtnAdd) {
      cc.log('找不到Button, 請確認find的參數正確');
      return;
    } //接著，我們將監聽按鈕的點擊事件，關聯至下方的onBtnAddClicked方法


    NodeBtnAdd.on(cc.Node.EventType.TOUCH_END, this.onBtnAddClicked.bind(this));
  },
  //由於我們打算動態新增Prefab來進行使用，所以我們在這個點擊事件中進行載入
  onBtnAddClicked: function onBtnAddClicked() {
    //我們先動態取得Canvas
    var CanvasNode = cc.find('Canvas');

    if (!CanvasNode) {
      cc.log('找不到Canvas畫布，請確認你的場景裡有Canvas');
      return;
    } //這邊先將 this 指標存到另一個變數, 在別的方法裡this是會被改變的


    var root = this; //Prefab的路徑
    //不過因為我們的MyPrefab直接就放在 /assets/resources/ 下，就直接寫

    var prefabPath = 'MyPrefab'; //Ps. 假設你是放在在resources下的prefabs資料夾中，你就得寫 'prefabs/MyPrefab'
    //這邊我們新增一個私有方法，來做為載入Prefab時的方法
    //(當然你也可以直接寫在loadRes參數上，我只是覺得這樣比較容易看清楚)

    var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
      //一樣，養成檢查的好習慣
      if (errorMessage) {
        cc.log('載入Prefab失敗, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        cc.log('你載入的不是Prefab, 你做了什麼事?');
        return;
      } //這個是型別的檢查
      //我們將root裡的計數器加1


      root.ClickCount++; //接著，我們就可以進行實例化了

      var newMyPrefab = cc.instantiate(loadedResource); //我們先將這個建立出來的Prefab加入畫布裡

      CanvasNode.addChild(newMyPrefab); //我們要開始設定位置，因為當時在Prefab我們沒有指定最外層的大小
      //所以這邊我們要取得在MyPrefab中，我們加入的 "SplitButtons_01" 這張圖片的高度

      var buttonBG = newMyPrefab.getChildByName('SplitButtons_01');

      if (!buttonBG) {
        cc.log('找不到指定名稱的Node, 是不是哪裡搞錯了？');
        return;
      } //所以，y軸就是利用計數器乘上圖片的高度，再加上10額外邊界後，再減去場景的高度除以二


      var newY = root.ClickCount * buttonBG.height + 1 - CanvasNode.height / 2 - 400; //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生

      console.log(newY); //設定位置，這邊x軸不變

      newMyPrefab.setPosition(0, newY); //接著，我們取得MyPrefab裡的Script，這個就是我們當時定的名稱
      //var newMyPrefabScript = newMyPrefab.getComponent( 'script/MyPrefabScript' );
      //然後，我們就可以呼叫我們寫在該腳本中的方法了
      //這邊我直接將計數器的值傳進去了
      //newMyPrefabScript.setNumberBy( root.ClickCount );
      //然後，我新增了一個CallBack事件，使用計時器機制，讓它在1秒之後再執行
      //var startRun = function(){ newMyPrefabScript.Run(); };
      //呼叫計時器
      //newMyPrefabScript.scheduleOnce( startRun, 1 );
    }; //這邊才是真的使用cc.loader進行載入，並且呼叫我們上面寫的方法


    cc.loader.loadRes(prefabPath, onResourceLoaded);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSW5kZXhTY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJDbGlja0NvdW50Iiwib25Mb2FkIiwiTm9kZUJ0bkFkZCIsImZpbmQiLCJsb2ciLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvbkJ0bkFkZENsaWNrZWQiLCJiaW5kIiwiQ2FudmFzTm9kZSIsInJvb3QiLCJwcmVmYWJQYXRoIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwiUHJlZmFiIiwibmV3TXlQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwiYnV0dG9uQkciLCJnZXRDaGlsZEJ5TmFtZSIsIm5ld1kiLCJoZWlnaHQiLCJjb25zb2xlIiwic2V0UG9zaXRpb24iLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FDSTtBQUNJLGFBQVNELEVBQUUsQ0FBQ0UsU0FEaEI7QUFFSUMsRUFBQUEsVUFBVSxFQUNWO0FBQ0lDLElBQUFBLFVBQVUsRUFBRSxDQURoQixDQUVJOztBQUZKLEdBSEo7QUFRSUMsRUFBQUEsTUFBTSxFQUFFLGtCQUNSO0FBQ0k7QUFDQSxRQUFJQyxVQUFVLEdBQUdOLEVBQUUsQ0FBQ08sSUFBSCxDQUFTLGVBQVQsQ0FBakIsQ0FGSixDQUVpRDtBQUU3QztBQUNBOztBQUNBLFFBQUksQ0FBQ0QsVUFBTCxFQUFrQjtBQUFFTixNQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBTyx5QkFBUDtBQUFtQztBQUFTLEtBTnBFLENBUUk7OztBQUNBRixJQUFBQSxVQUFVLENBQUNHLEVBQVgsQ0FBZVQsRUFBRSxDQUFDVSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQWpDLEVBQTRDLEtBQUtDLGVBQUwsQ0FBcUJDLElBQXJCLENBQTJCLElBQTNCLENBQTVDO0FBQ0gsR0FuQkw7QUFxQkk7QUFDQUQsRUFBQUEsZUFBZSxFQUFFLDJCQUNqQjtBQUNJO0FBQ0EsUUFBSUUsVUFBVSxHQUFHZixFQUFFLENBQUNPLElBQUgsQ0FBUyxRQUFULENBQWpCOztBQUNBLFFBQUksQ0FBQ1EsVUFBTCxFQUFrQjtBQUFFZixNQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBUSw2QkFBUjtBQUF5QztBQUFTLEtBSDFFLENBS0k7OztBQUNBLFFBQUlRLElBQUksR0FBRyxJQUFYLENBTkosQ0FRSTtBQUNBOztBQUNBLFFBQUlDLFVBQVUsR0FBRyxVQUFqQixDQVZKLENBV0k7QUFHQTtBQUNBOztBQUNBLFFBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBVUMsWUFBVixFQUF3QkMsY0FBeEIsRUFDdkI7QUFDSTtBQUNBLFVBQUlELFlBQUosRUFBbUI7QUFBRW5CLFFBQUFBLEVBQUUsQ0FBQ1EsR0FBSCxDQUFRLG9CQUFvQlcsWUFBNUI7QUFBNEM7QUFBUzs7QUFDMUUsVUFBSSxFQUFHQyxjQUFjLFlBQVlwQixFQUFFLENBQUNxQixNQUFoQyxDQUFKLEVBQStDO0FBQUVyQixRQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBUSx1QkFBUjtBQUFtQztBQUFTLE9BSGpHLENBR2tHO0FBRTlGOzs7QUFDQVEsTUFBQUEsSUFBSSxDQUFDWixVQUFMLEdBTkosQ0FRSTs7QUFDQSxVQUFJa0IsV0FBVyxHQUFHdEIsRUFBRSxDQUFDdUIsV0FBSCxDQUFnQkgsY0FBaEIsQ0FBbEIsQ0FUSixDQVdJOztBQUNBTCxNQUFBQSxVQUFVLENBQUNTLFFBQVgsQ0FBcUJGLFdBQXJCLEVBWkosQ0FjSTtBQUNBOztBQUNBLFVBQUlHLFFBQVEsR0FBR0gsV0FBVyxDQUFDSSxjQUFaLENBQTRCLGlCQUE1QixDQUFmOztBQUNBLFVBQUksQ0FBQ0QsUUFBTCxFQUFnQjtBQUFFekIsUUFBQUEsRUFBRSxDQUFDUSxHQUFILENBQU8seUJBQVA7QUFBbUM7QUFBUyxPQWpCbEUsQ0FtQkk7OztBQUNBLFVBQUltQixJQUFJLEdBQUtYLElBQUksQ0FBQ1osVUFBTCxHQUFrQnFCLFFBQVEsQ0FBQ0csTUFBN0IsR0FBd0MsQ0FBeEMsR0FBOENiLFVBQVUsQ0FBQ2EsTUFBWCxHQUFvQixDQUFsRSxHQUFzRSxHQUFqRixDQXBCSixDQXFCSTs7QUFHQUMsTUFBQUEsT0FBTyxDQUFDckIsR0FBUixDQUFZbUIsSUFBWixFQXhCSixDQXlCSTs7QUFDQUwsTUFBQUEsV0FBVyxDQUFDUSxXQUFaLENBQXlCLENBQXpCLEVBQTRCSCxJQUE1QixFQTFCSixDQTRCSTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDSCxLQTFDRCxDQWhCSixDQTRESTs7O0FBQ0EzQixJQUFBQSxFQUFFLENBQUMrQixNQUFILENBQVVDLE9BQVYsQ0FBbUJmLFVBQW5CLEVBQStCQyxnQkFBL0I7QUFDSDtBQXJGTCxDQURKIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyhcbiAgICB7XG4gICAgICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICAgICAgcHJvcGVydGllczogXG4gICAgICAgIHtcbiAgICAgICAgICAgIENsaWNrQ291bnQ6IDAsXG4gICAgICAgICAgICAvL+mZpOS6huioiOaVuOWZqOWklu+8jOmAmemCiuaIkeaVheaEj+eVmeepuu+8jOaIkea6luWCmeWFqOmDqOS9v+eUqOS7o+eivOS+huaOp+WItlxuICAgICAgICB9LFxuICAgIFxuICAgICAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6aaW5YWI77yM5oiR5YCR5YWI5om+5Yiw5oiR5YCR5Ymb5Ymb5paw5aKe55qE5oyJ6YiVXG4gICAgICAgICAgICB2YXIgTm9kZUJ0bkFkZCA9IGNjLmZpbmQoICdDYW52YXMvQnRuQWRkJyApOyAvL2NjLmZpbmTlm57lgrPnmoTmmK9Ob2RlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8v54S25b6M77yM6KiY5b6X6aSK5oiQ5pmC5pmC5qqi5p+l6K6K5pW45piv5ZCm5a2Y5Zyo44CB5Lim5LiU5a+rTG9n55qE57+S5oWj77yMXG4gICAgICAgICAgICAvL+S4iumdoueahOWPg+aVuOWmguaenOaJk+mMr++8jOmAmemCiuWwseacg+WNsOWHukxvZ++8jOS4puS4lOS5n+S4jeacg+WGjeW+gOS4i+Wft+ihjFxuICAgICAgICAgICAgaWYoICFOb2RlQnRuQWRkICkgeyBjYy5sb2coJ+aJvuS4jeWIsEJ1dHRvbiwg6KuL56K66KqNZmluZOeahOWPg+aVuOato+eiuicpOyByZXR1cm47IH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy/mjqXokZfvvIzmiJHlgJHlsIfnm6Pogb3mjInpiJXnmoTpu57mk4rkuovku7bvvIzpl5zoga/oh7PkuIvmlrnnmoRvbkJ0bkFkZENsaWNrZWTmlrnms5VcbiAgICAgICAgICAgIE5vZGVCdG5BZGQub24oIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ0bkFkZENsaWNrZWQuYmluZCggdGhpcyApICk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8v55Sx5pa85oiR5YCR5omT566X5YuV5oWL5paw5aKeUHJlZmFi5L6G6YCy6KGM5L2/55So77yM5omA5Lul5oiR5YCR5Zyo6YCZ5YCL6bue5pOK5LqL5Lu25Lit6YCy6KGM6LyJ5YWlXG4gICAgICAgIG9uQnRuQWRkQ2xpY2tlZDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+aIkeWAkeWFiOWLleaFi+WPluW+l0NhbnZhc1xuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCAnQ2FudmFzJyApO1xuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5sb2coICfmib7kuI3liLBDYW52YXPnlavluIPvvIzoq4vnorroqo3kvaDnmoTloLTmma/oo6HmnIlDYW52YXMnICk7IHJldHVybjsgfSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy/pgJnpgorlhYjlsIcgdGhpcyDmjIfmqJnlrZjliLDlj6bkuIDlgIvorormlbgsIOWcqOWIpeeahOaWueazleijoXRoaXPmmK/mnIPooqvmlLnorornmoRcbiAgICAgICAgICAgIHZhciByb290ID0gdGhpczsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vUHJlZmFi55qE6Lev5b6RXG4gICAgICAgICAgICAvL+S4jemBjuWboOeCuuaIkeWAkeeahE15UHJlZmFi55u05o6l5bCx5pS+5ZyoIC9hc3NldHMvcmVzb3VyY2VzLyDkuIvvvIzlsLHnm7TmjqXlr6tcbiAgICAgICAgICAgIHZhciBwcmVmYWJQYXRoID0gJ015UHJlZmFiJztcbiAgICAgICAgICAgIC8vUHMuIOWBh+ioreS9oOaYr+aUvuWcqOWcqHJlc291cmNlc+S4i+eahHByZWZhYnPos4fmlpnlpL7kuK3vvIzkvaDlsLHlvpflr6sgJ3ByZWZhYnMvTXlQcmVmYWInXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy/pgJnpgormiJHlgJHmlrDlop7kuIDlgIvnp4HmnInmlrnms5XvvIzkvoblgZrngrrovInlhaVQcmVmYWLmmYLnmoTmlrnms5VcbiAgICAgICAgICAgIC8vKOeVtueEtuS9oOS5n+WPr+S7peebtOaOpeWvq+WcqGxvYWRSZXPlj4PmlbjkuIrvvIzmiJHlj6rmmK/oprrlvpfpgJnmqKPmr5TovIPlrrnmmJPnnIvmuIXmpZopXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKCBlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+S4gOaoo++8jOmkiuaIkOaqouafpeeahOWlvee/kuaFo1xuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNjLmxvZyggJ+i8ieWFpVByZWZhYuWkseaVlywg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNjLmxvZyggJ+S9oOi8ieWFpeeahOS4jeaYr1ByZWZhYiwg5L2g5YGa5LqG5LuA6bq85LqLPycgKTsgcmV0dXJuOyB9IC8v6YCZ5YCL5piv5Z6L5Yil55qE5qqi5p+lXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/miJHlgJHlsIdyb2906KOh55qE6KiI5pW45Zmo5YqgMVxuICAgICAgICAgICAgICAgIHJvb3QuQ2xpY2tDb3VudCsrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5bCx5Y+v5Lul6YCy6KGM5a+m5L6L5YyW5LqGXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/miJHlgJHlhYjlsIfpgJnlgIvlu7rnq4vlh7rkvobnmoRQcmVmYWLliqDlhaXnlavluIPoo6FcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5oiR5YCR6KaB6ZaL5aeL6Kit5a6a5L2N572u77yM5Zug54K655W25pmC5ZyoUHJlZmFi5oiR5YCR5rKS5pyJ5oyH5a6a5pyA5aSW5bGk55qE5aSn5bCPXG4gICAgICAgICAgICAgICAgLy/miYDku6XpgJnpgormiJHlgJHopoHlj5blvpflnKhNeVByZWZhYuS4re+8jOaIkeWAkeWKoOWFpeeahCBcIlNwbGl0QnV0dG9uc18wMVwiIOmAmeW8teWclueJh+eahOmrmOW6plxuICAgICAgICAgICAgICAgIHZhciBidXR0b25CRyA9IG5ld015UHJlZmFiLmdldENoaWxkQnlOYW1lKCAnU3BsaXRCdXR0b25zXzAxJyApO1xuICAgICAgICAgICAgICAgIGlmKCAhYnV0dG9uQkcgKSB7IGNjLmxvZygn5om+5LiN5Yiw5oyH5a6a5ZCN56ix55qETm9kZSwg5piv5LiN5piv5ZOq6KOh5pCe6Yyv5LqG77yfJyk7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5omA5Lul77yMeei7uOWwseaYr+WIqeeUqOioiOaVuOWZqOS5mOS4iuWclueJh+eahOmrmOW6pu+8jOWGjeWKoOS4ijEw6aGN5aSW6YKK55WM5b6M77yM5YaN5rib5Y675aC05pmv55qE6auY5bqm6Zmk5Lul5LqMXG4gICAgICAgICAgICAgICAgdmFyIG5ld1kgPSAoIHJvb3QuQ2xpY2tDb3VudCAqIGJ1dHRvbkJHLmhlaWdodCApICsgMSAtICggQ2FudmFzTm9kZS5oZWlnaHQgLyAyICktNDAwO1xuICAgICAgICAgICAgICAgIC8v5rib5Y675aC05pmv6auY5bqm6YCZ5YCL5YuV5L2c77yM5piv54K65LqG6K6T5q+P6bue5pOK5LiA5qyh5oyJ6YiV77yM5oiR5YCR55qEUHJlZmFi5bCx5LiA55u05b6A5LiK55Si55SfXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdZKTtcbiAgICAgICAgICAgICAgICAvL+ioreWumuS9jee9ru+8jOmAmemCinjou7jkuI3oropcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5zZXRQb3NpdGlvbiggMCwgbmV3WSApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5Y+W5b6XTXlQcmVmYWLoo6HnmoRTY3JpcHTvvIzpgJnlgIvlsLHmmK/miJHlgJHnlbbmmYLlrprnmoTlkI3nqLFcbiAgICAgICAgICAgICAgICAvL3ZhciBuZXdNeVByZWZhYlNjcmlwdCA9IG5ld015UHJlZmFiLmdldENvbXBvbmVudCggJ3NjcmlwdC9NeVByZWZhYlNjcmlwdCcgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL+eEtuW+jO+8jOaIkeWAkeWwseWPr+S7peWRvOWPq+aIkeWAkeWvq+WcqOipsuiFs+acrOS4reeahOaWueazleS6hlxuICAgICAgICAgICAgICAgIC8v6YCZ6YKK5oiR55u05o6l5bCH6KiI5pW45Zmo55qE5YC85YKz6YCy5Y675LqGXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9uZXdNeVByZWZhYlNjcmlwdC5zZXROdW1iZXJCeSggcm9vdC5DbGlja0NvdW50ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/nhLblvozvvIzmiJHmlrDlop7kuobkuIDlgItDYWxsQmFja+S6i+S7tu+8jOS9v+eUqOioiOaZguWZqOapn+WItu+8jOiuk+Wug+WcqDHnp5LkuYvlvozlho3ln7fooYxcbiAgICAgICAgICAgICAgICAvL3ZhciBzdGFydFJ1biA9IGZ1bmN0aW9uKCl7IG5ld015UHJlZmFiU2NyaXB0LlJ1bigpOyB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v5ZG85Y+r6KiI5pmC5ZmoXG4gICAgICAgICAgICAgICAgLy9uZXdNeVByZWZhYlNjcmlwdC5zY2hlZHVsZU9uY2UoIHN0YXJ0UnVuLCAxICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL+mAmemCiuaJjeaYr+ecn+eahOS9v+eUqGNjLmxvYWRlcumAsuihjOi8ieWFpe+8jOS4puS4lOWRvOWPq+aIkeWAkeS4iumdouWvq+eahOaWueazlVxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoIHByZWZhYlBhdGgsIG9uUmVzb3VyY2VMb2FkZWQgKTtcbiAgICAgICAgfSxcbiAgICB9KTsiXX0=