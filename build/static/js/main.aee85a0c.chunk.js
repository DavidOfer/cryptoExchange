(this.webpackJsonpinterview=this.webpackJsonpinterview||[]).push([[0],{118:function(n,e,t){"use strict";t.r(e);var r,a,i,c=t(0),o=t(37),d=t.n(o),s=(t(88),t(89),t(20)),u=t(15),l=t(149),p=t(146),j=t(150),b=t(53),g=t.n(b),h=t(72),f=t(154),x=t(157),m=t(156),O=t(152),C=t(155),v=t(151),y=t(153),P=t(78),T=t.n(P),k=t(73),B=t.n(k),w=t(45),H=Object(w.b)({name:"cryptoData",initialState:{error:!1,isLoading:!0,data:[]},reducers:{addData:function(n,e){n.data=e.payload,n.isLoading=!1},updateData:function(n,e){var t=n.data.findIndex((function(n){return n.title===e.payload.coin}));if(t>=0){var r=n.data[t].data.findIndex((function(n){return n.priceTitle===e.payload.rowItem.priceTitle}));r>=0&&(n.data[t].data[r].isFavorite=!e.payload.rowItem.isFavorite)}}}}),D=H.actions,S=H,A=Object(w.a)({reducer:{data:S.reducer}}),F=t(31),I=(t(158),t(141),t(2)),R=t(16),z=t(34),E=Object(z.a)(v.a)(a||(a=Object(R.a)(["\nfont-size: '0.7em';\nbackground-color: ",";\nanimation: 800ms "," ease-in-out;\n\n/* animation-duration: 900ms;\nanimation-iteration-count: 1;\nanimation-timing-function: ease-in-out; */\n\n"])),(function(n){return n.$fav?"#1b1203":"white"}),(function(n){var e,t=n.$flashColor;return e=t,Object(z.b)(r||(r=Object(R.a)(["\n    0% {\n        background-color: ",";\n        opacity:1;\n    }\n    22% {\n        background-color: ",";\n    }\n    77% {\n        background-color: ",";\n\n    }\n    100% {\n        background-color: gray;\n\n    }\n"])),e,e,e)})),$=function(n,e,t,r){for(var a=[],i=0;i<e.length;i++){a.push({id:i,title:e[i],img:"https://www.cryptocompare.com/"+n[e[i]][t[0]].IMAGEURL,data:[]});for(var c=0;c<t.length;c++)a[i].data.push({priceTitle:e[i]+t[c],price:n[e[i]][t[c]].PRICE,changePerHour:n[e[i]][t[c]].CHANGEPCTHOUR,changePerDay:n[e[i]][t[c]].CHANGEPCT24HOUR,isFavorite:!1})}return a},U=function(n){var e="https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+n.coins.join()+"&tsyms="+n.currencies.join();return Object(c.useEffect)((function(){var t,r,a=function(){var t=Object(h.a)(g.a.mark((function t(){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get(e,{headers:{authorization:"Apikey ".concat("4ebc065dcb065b4c42eea8129846c459fc7c83959697e68a7ac2acf085b79c04")}});case 2:r=t.sent,A.dispatch(D.addData($(r.data.DISPLAY,n.coins,n.currencies)));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=(r=8e3,(t=a)(),setInterval(t,r));return function(){clearInterval(i)}}),[e]),Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(O.a,{component:y.a,children:Object(I.jsx)(f.a,{sx:{minWidth:350},"aria-label":"spanning table",children:n.data.map((function(e){return Object(I.jsxs)(c.Fragment,{children:[Object(I.jsx)(C.a,{children:Object(I.jsx)(v.a,{children:Object(I.jsxs)(m.a,{sx:{fontSize:"inherit",color:"white",backgroundColor:"#C1C1C1"},align:"left",colSpan:5,children:[Object(I.jsx)("img",{style:{backgroundColor:"white",marginRight:"5px",height:"30px",width:"30px"},src:e.img,alt:"img"}),e.title]})})},e.id),Object(I.jsx)(x.a,{children:e.data.map((function(t,r){return Object(I.jsxs)(E,{$fav:t.isFavorite,$flashColor:t.changePerHour>0?"green":"red",children:[Object(I.jsx)(m.a,{sx:{fontSize:"inherit",color:"gray",paddingTop:"1px",paddingBottom:"1px",border:"none"},align:"left",children:t.priceTitle}),Object(I.jsx)(m.a,{sx:{fontSize:"inherit",paddingTop:"1px",paddingBottom:"1px",paddingRight:"50px",color:"gray",border:"none"},align:"right",children:t.price}),Object(I.jsx)(m.a,{sx:{fontSize:"inherit",color:"".concat(t.changePerHour>0?"green":"red"),paddingTop:"1px",paddingBottom:"1px",border:"none"},align:"center",children:t.changePerHour>0?"+".concat(t.changePerHour,"%"):"".concat(t.changePerHour,"%")}),Object(I.jsxs)(m.a,{sx:{fontSize:"inherit",paddingTop:"1px",color:"".concat(t.changePerDay>0?"green":"red"),paddingBottom:"1px",border:"none"},align:"right",children:[t.changePerDay,"%"]}),Object(I.jsx)(m.a,{onClick:function(){return n.onFavorite(e.title,t)},sx:{fontSize:"0.4em",cursor:"pointer",color:"".concat(t.isFavorite?"#e3991e":"gray"),paddingTop:"1px",paddingBottom:"1px",border:"none"},align:"center",children:Object(I.jsx)(T.a,{})})]},r)}))})]},e.id)}))})})})},G=t(147),L=Object(z.a)(G.a)(i||(i=Object(R.a)(["\nflex:1;\nbackground-color: ",";\n"])),(function(n){return n.$isActive?"#898989":"#C1C1C1"})),X=function(){var n=Object(F.b)((function(n){return n.data.data})),e=Object(c.useState)(["BTC","XRP","BCH"]),t=Object(u.a)(e,2),r=t[0],a=t[1],i=function(n){r.includes(n)?a((function(e){return e.filter((function(e){return e!==n}))})):a((function(e){return[].concat(Object(s.a)(e),[n])}))};return Object(I.jsx)(c.Fragment,{children:Object(I.jsx)(l.a,{maxWidth:"sm",children:Object(I.jsxs)(p.a,{sx:{display:"flex",paddingTop:"5px",paddingBottom:"50px",flexDirection:"column"},children:[Object(I.jsxs)(j.a,{sx:{backgroundColor:"#C1C1C1",display:"flex"},variant:"contained","aria-label":" button group",children:[Object(I.jsx)(L,{onClick:function(){return i("XRP")},$isActive:r.includes("XRP"),children:"XRP"}),Object(I.jsx)(L,{onClick:function(){return i("BCH")},$isActive:r.includes("BCH"),children:"BCH"}),Object(I.jsx)(L,{onClick:function(){return i("BTC")},$isActive:r.includes("BTC"),children:"BTC"})]}),Object(I.jsx)(U,{coins:r,currencies:["AUD","BTC","CAD","ETH","EUR","GBP","JPY","USD","USDT"],data:n.filter((function(n){return r.includes(n.title)})),onFavorite:function(n,e){A.dispatch(D.updateData({coin:n,rowItem:e}))}})]})})})};var J=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(X,{})})};d.a.render(Object(I.jsx)(F.a,{store:A,children:Object(I.jsx)(J,{})}),document.getElementById("root"))},88:function(n,e,t){},89:function(n,e,t){}},[[118,1,2]]]);
//# sourceMappingURL=main.aee85a0c.chunk.js.map