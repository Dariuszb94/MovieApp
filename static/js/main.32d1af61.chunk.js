(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),s=(a(23),a(2)),o=a(17);var i=function(e){var t=e.handleInput,a=e.search;return r.a.createElement("section",{className:"searchbox-wrap"},r.a.createElement("input",{type:"text",placeholder:"Search for a movie...",className:"searchbox",onChange:t,onKeyPress:a}))},u=a(3),m=a.n(u);var p=function(e){var t=e.result,a=e.openPopup;return r.a.createElement("div",{className:"result",onClick:function(){return a(t.imdbID)}},r.a.createElement("img",{src:t.Poster,alt:t.Title}),r.a.createElement("h3",null,t.Title))};var d=function(e){var t=e.results,a=e.openPopup;return r.a.createElement("section",{className:"results"},t.map((function(e){return r.a.createElement(p,{key:e.imdbID,result:e,openPopup:a})})))},E=a(16),h=a.n(E);a(44);var v=function(e){var t=e.selected;return r.a.createElement(h.a,{total:10,rating:t.imdbRating,interactive:!1})};var f=function(e){var t=e.selected,a=e.closePopup;return r.a.createElement("section",{className:"popup"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.Title,r.a.createElement("span",null,"(",t.Year,")")),r.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),r.a.createElement(v,{selected:t}),r.a.createElement("div",{className:"plot"},r.a.createElement("img",{src:t.Poster,alt:t.Title}),r.a.createElement("p",null,t.Plot)),r.a.createElement("button",{className:"close",onClick:a},"Close")))},b="https://www.omdbapi.com/?apikey=885b8a6d";var g=function(){var e=Object(n.useState)({urlEnd:"",results:[],selected:{}}),t=Object(o.a)(e,2),a=t[0],c=t[1];function l(e){e.response?(alert(e.response.data),alert(e.response.status),alert(e.response.headers)):e.request?alert(e.request):alert("Error",e.message),alert(e.config)}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Header"},r.a.createElement("h1",null,"Movie Database")),r.a.createElement("main",null,r.a.createElement(i,{handleInput:function(e){var t=e.target.value;c((function(e){return Object(s.a)({},e,{urlEnd:t})}))},search:function(e){"Enter"===e.key&&m.a.get(b+"&s="+a.urlEnd,{params:{_limit:5}}).then((function(e){var t=e.data.Search;t?c((function(e){return Object(s.a)({},e,{results:t})})):alert("There are no movies for your search")})).catch(l)}}),r.a.createElement(d,{results:a.results,openPopup:function(e){m.a.get(b+"&i="+e).then((function(e){var t=e.data;c((function(e){return Object(s.a)({},e,{selected:t})}))})).catch(l)}}),"undefined"!=typeof a.selected.Title&&r.a.createElement(f,{selected:a.selected,closePopup:function(){c((function(e){return Object(s.a)({},e,{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.32d1af61.chunk.js.map