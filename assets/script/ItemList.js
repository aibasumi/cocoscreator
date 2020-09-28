var Item = cc.Class({
    name: 'Item',
    properties: {
        id: 0,
        itemName: '',
        itemPrice: 0,
        iconSF: cc.SpriteFrame
    }
});

var coinboard = [
    {
      itemName: "尊榮禮包",
      itemPrice: 280000000,
      iconSF: "images/cards/cardA",
    },
    
  ];



cc.Class({
    extends: cc.Component,
    properties: {
        // items: {
        //     default: [],
        //     type: Item
        // },
        Count: 0,
        itemPrefab: cc.Prefab
    },
    onLoad () {

        //我們先動態取得Canvas
        var CanvasNode = cc.find( 'Canvas' );
        if( !CanvasNode ) { cc.log( '找不到Canvas畫布，請確認你的場景裡有Canvas' ); return; } 

        var prefabPath = 'Item';

         //這邊先將 this 指標存到另一個變數, 在別的方法裡this是會被改變的
         var root = this; 

        //這邊我們新增一個私有方法，來做為載入Prefab時的方法
            //(當然你也可以直接寫在loadRes參數上，我只是覺得這樣比較容易看清楚)
            var onResourceLoaded = function( errorMessage, loadedResource)
            {
                root.Count++;

                //一樣，養成檢查的好習慣
                if( errorMessage ) { cc.log( '載入Prefab失敗, 原因:' + errorMessage ); return; }
                if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你載入的不是Prefab, 你做了什麼事?' ); return; } //這個是型別的檢查
              
                
                //接著，我們就可以進行實例化了
                var newMyPrefab = cc.instantiate( loadedResource );

                //我們先將這個建立出來的Prefab加入畫布裡
                CanvasNode.addChild( newMyPrefab );

                //我們要開始設定位置，因為當時在Prefab我們沒有指定最外層的大小
                //所以這邊我們要取得在MyPrefab中，我們加入的 "SplitButtons_01" 這張圖片的高度
                var buttonBG = newMyPrefab.getChildByName( 'bg' );
                if( !buttonBG ) { cc.log('找不到指定名稱的Node, 是不是哪裡搞錯了？'); return; }

                //所以，y軸就是利用計數器乘上圖片的高度，再加上10額外邊界後，再減去場景的高度除以二
                var newX = (  buttonBG.width ) + (root.Count*50) - ( CanvasNode.width / 2 );
                //減去場景高度這個動作，是為了讓每點擊一次按鈕，我們的Prefab就一直往上產生
                

                console.log(newX);
                //設定位置，這邊x軸不變
                newMyPrefab.setPosition( newX, 5 );


                newMyPrefab.getComponent('ItemTemplate').init({
                    id: '1111',
                    itemName: 'test',
                    itemPrice: 'dfsdfsdf',
                    iconSF: 'image/cards/cardA'
                });

                




            };
            
            //這邊才是真的使用cc.loader進行載入，並且呼叫我們上面寫的方法
            //cc.loader.loadRes( prefabPath, onResourceLoaded );

        for (var i = 0; i < 5; ++i) {

            cc.loader.loadRes( prefabPath, onResourceLoaded );
            // var item = cc.instantiate(this.prefabPath);
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