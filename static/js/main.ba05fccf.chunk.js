(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(34)},18:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),i=t(3),c=t.n(i),r=(t(18),t(4)),l=t(5),s=t(10),d=t(6),u=t(11),h=t(7),p=(t(33),function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).changeFavicon=function(e){document.querySelector("link").href=e},t.handleVisibilityChange=function(){window.addEventListener("visibilitychange",function(){document.hidden?(t.changeFavicon("https://user-images.githubusercontent.com/15229355/54630478-3eb49b80-4a7a-11e9-889e-82cd455e57d1.png"),t.state.player.pauseVideo()):(t.changeFavicon("https://cdn1.iconfinder.com/data/icons/material-audio-video/20/play-circle-fill-128.png"),t.state.player.playVideo())})},t._onPlay=function(e){t.setState({player:e.target}),t.handleVisibilityChange()},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"content"},o.a.createElement(h.a,{opts:{height:"390",width:"640",playerVars:{autoplay:1}},onPlay:this._onPlay,videoId:"nx1tOOc_3fU"})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.ba05fccf.chunk.js.map