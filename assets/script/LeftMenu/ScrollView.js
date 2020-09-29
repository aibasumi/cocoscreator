cc.Class({
    extends: cc.Component,

    properties: {
        scrollView: cc.ScrollView,
    },

    onArrowClick: function(event) {
        var node = event.target;
        // var button = node.getComponent(cc.Button);
        
        if (node.name === "UP") {
            // console.log(this.scrollView)
            this.scrollView.scrollToOffset(cc.v2(0, this.scrollView.getScrollOffset().y - 120), 1);
        }
        else if (node.name === "DOWN") {
            this.scrollView.scrollToOffset(cc.v2(0, this.scrollView.getScrollOffset().y + 120), 1);
        }
    }

});
