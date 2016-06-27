"use strict";

var isBig = 1;
var magic = function magic(payload) {
  console.log("magic", payload);
};
var BigPenisBox = React.createClass({
  displayName: "BigPenisBox",

  render: function render() {
    return React.createElement(
      "div",
      { className: "bigPenis" },
      "I have such a big penis. Ladies beware!"
    );
  }
});
var SmallPenisBox = React.createClass({
  displayName: "SmallPenisBox",

  render: function render() {
    return React.createElement(
      "div",
      { className: "smallPenis" },
      "I have such a small penis. But ladies still like it."
    );
  }
});
//magicalDispatcher = new Dispatcher();
//magicalDispatcher.register(magic);
//magicalDispatcher.dispatch("hello!");
var penisChanger = function penisChanger() {
  if (isBig === 0) {
    isBig = 1;
  }
  if (isBig === 1) {
    isBig = 0;
  }

  if (isBig === 1) {
    ReactDom.render(React.createElement(BigPenisBox, null), document.getElementById('htmlMagic'));
  }

  if (isBig === 0) {
    ReactDom.render(React.createElement(SmallPenisBox, null), document.getElementById('htmlMagic'));
  }
};
ReactDOM.render(React.createElement(
  "h1",
  null,
  "Magic from the outer space!"
), document.getElementById('htmlMagic'));
ReactDOM.render(React.createElement(
  BigPenisBox,
  null,
  " "
), document.getElementById('htmlMagic'));
