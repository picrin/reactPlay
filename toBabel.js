      var isBig = 1;
      var magic = function(payload) {
         console.log("magic", payload);
      }
      var BigPenisBox = React.createClass({
        render: function() {
          return (
            <div className="bigPenis">
              I have such a big penis. Ladies beware!
            </div>
          );
        }
      });
      var SmallPenisBox = React.createClass({
        render : function() {
          return (
            <div className="smallPenis">
              I have such a small penis. But ladies still like it.
            </div>
          );
        }
      });
      //magicalDispatcher = new Dispatcher();
      //magicalDispatcher.register(magic);
      //magicalDispatcher.dispatch("hello!");
      var penisChanger = function(){
        if (isBig === 0) {isBig = 1}
        if (isBig === 1) {isBig = 0}

        if (isBig === 1) {
          ReactDom.render(
            <BigPenisBox/>,
            document.getElementById('htmlMagic')
          );
        }

        if (isBig === 0) {
          ReactDom.render(
            <SmallPenisBox/>,
            document.getElementById('htmlMagic')
          );
        }
      }
      ReactDOM.render(
        <h1>Magic from the outer space!</h1>,
        document.getElementById('htmlMagic')
      );
      ReactDOM.render(
        <BigPenisBox> </BigPenisBox>, document.getElementById('htmlMagic')
      );
