(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(7),r=n.n(i),o=(n(14),n(15),n(1)),s=n(2),l=n(4),p=n(3),u=n(5),h=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.painting,e=t.id,n=t.name,a=t.src;return c.a.createElement("img",{width:"200px",height:"200px",alt:n,src:a,key:e,onClick:this.props.changeClickedState.bind(this,e)})}}]),e}(a.Component),d=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.paintings.map(function(e){return c.a.createElement(h,{key:e.id,painting:e,changeClickedState:t.props.changeClickedState})})}}]),e}(a.Component),m=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.score,n=t.topScore;return c.a.createElement("div",null,c.a.createElement("h1",null,"Clicky Game"),c.a.createElement("h2",null,"Click on an image to earn points, but don't click any more than once!"),c.a.createElement("p",null,"Score: ",e),c.a.createElement("p",null,"Top Score: ",n))}}]),e}(a.Component),b=(n(16),function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={score:0,topScore:0,paintings:[{id:1,name:"rothko chapel",src:"https://i.ibb.co/PZrpHPg/chapel.jpg",clicked:!1},{id:2,name:"with my back to the world",src:"https://i.ibb.co/w0KFQRF/martinback.jpg",clicked:!1},{id:3,name:"gratitude",src:"https://i.ibb.co/dj7Kmt7/martingratitude.jpg",clicked:!1},{id:4,name:"buds",src:"https://i.ibb.co/xJS5177/martinbuds.jpg",clicked:!1},{id:5,name:"faraway love",src:"https://i.ibb.co/QHP1xMd/martinlove.jpg",clicked:!1},{id:6,name:"morning",src:"https://i.ibb.co/PzKTjwL/martinmorning.jpg",clicked:!1},{id:7,name:"rothko grey",src:"https://i.ibb.co/4PYM0xR/rothkogrey.jpg",clicked:!1},{id:8,name:"four darks in red",src:"https://i.ibb.co/V3DCgB8/rothkored.jpg",clicked:!1},{id:9,name:"rust and blue",src:"https://i.ibb.co/1J7Rb1H/rothkorust.jpg",clicked:!1}]},n.changeClickedState=function(t){n.state.paintings.map(function(e){return e.id===t&&!1===e.clicked?(e.clicked=!0,n.setState({score:n.state.score+1}),n.state.score>=n.state.topScore&&n.setState({topScore:n.state.score+1})):e.id===t&&!0===e.clicked&&(n.setState({score:0}),n.state.paintings.map(function(t){return t.clicked=!1,t})),e}),n.shuffleArr(n.state.paintings)},n.shuffleArr=function(t){for(var e,n,a=t.length;0!==a;)n=Math.floor(Math.random()*a),e=t[a-=1],t[a]=t[n],t[n]=e;return t},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(d,{paintings:this.state.paintings,changeClickedState:this.changeClickedState}))}}]),e}(a.Component));var g=function(){return c.a.createElement("div",null,c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.7cb88ecd.chunk.js.map