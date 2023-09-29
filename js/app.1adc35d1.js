(function(){"use strict";var t={824:function(t,r,o){var a=o(1508),e=o(3074),n=o(579),i=o(3714),s=o(9504),l=o(6586),d=o(7981),c=o(9580),u=o(9648),w=o(6878),h=o(4242),f=function(){var t=this,r=t._self._c;return r(e.Z,[r(n.Z,{attrs:{app:"",color:"#00838F",dark:""}},[r("div",{staticStyle:{width:"200px"}},[r(w.Z,{attrs:{items:t.categories,density:"comfortable",label:"Category","hide-details":""},on:{change:t.updateWordPairs},model:{value:t.selectedCategory,callback:function(r){t.selectedCategory=r},expression:"selectedCategory"}})],1),r(h.Z),r(c.Z,{on:{click:function(r){t.isRetryDialogOpen=!0}}},[t._v("mdi-reload")])],1),r(u.Z,{staticClass:"d-flex justify-center align-center"},[r("GameContainer",{key:t.selectedCategory,attrs:{wordPairs:t.wordPairs}}),r(d.Z,{attrs:{width:"400"},model:{value:t.isRetryDialogOpen,callback:function(r){t.isRetryDialogOpen=r},expression:"isRetryDialogOpen"}},[r(s.Z,[r(l.ZB,{staticStyle:{"font-size":"20px"}},[r("div",{staticClass:"pt-4 mb-8 d-flex justify-center"},[t._v(" Do you want to start the game again? ")]),r(i.Z,{staticClass:"mb-2",attrs:{outlined:"",block:"",color:"#00838F"},on:{click:function(r){t.isRetryDialogOpen=!1}}},[t._v("Close")]),r(i.Z,{attrs:{block:"",color:"#00838F",dark:""},on:{click:t.reloadGame}},[t._v("RETRY")])],1)],1)],1)],1)],1)},p=[],m={AnimalsEnDe:[{word:"cat",translation:"Katze"},{word:"dog",translation:"Hund"},{word:"elephant",translation:"Elefant"},{word:"lion",translation:"Löwe"},{word:"tiger",translation:"Tiger"},{word:"giraffe",translation:"Giraffe"},{word:"monkey",translation:"Affe"},{word:"horse",translation:"Pferd"},{word:"rabbit",translation:"Hase"},{word:"bear",translation:"Bär"},{word:"zebra",translation:"Zebra"},{word:"penguin",translation:"Pinguin"},{word:"kangaroo",translation:"Känguru"},{word:"dolphin",translation:"Delfin"},{word:"whale",translation:"Wal"},{word:"shark",translation:"Hai"},{word:"octopus",translation:"Tintenfish"},{word:"crocodile",translation:"Krokodil"},{word:"parrot",translation:"Papagei"},{word:"snake",translation:"Schlange"}],FoodEnDe:[{word:"apple",translation:"Apfel"},{word:"banana",translation:"Banane"},{word:"chocolate",translation:"Schokolade"},{word:"bread",translation:"Brot"},{word:"cheese",translation:"Käse"},{word:"milk",translation:"Milch"},{word:"cake",translation:"Kuchen"},{word:"pizza",translation:"Pizza"},{word:"spaghetti",translation:"Spaghetti"},{word:"rice",translation:"Reis"},{word:"lettuce",translation:"Salat"},{word:"tomato",translation:"Tomate"},{word:"carrot",translation:"Karotte"},{word:"potato",translation:"Kartoffel"},{word:"onion",translation:"Zwiebel"},{word:"chicken",translation:"Huhn"},{word:"beef",translation:"Rindfleisch"},{word:"fish",translation:"Fisch"},{word:"soup",translation:"Suppe"},{word:"juice",translation:"Saft"}],SportsEnDe:[{word:"soccer",translation:"Fußball"},{word:"basketball",translation:"Basketball"},{word:"tennis",translation:"Tennis"},{word:"swimming",translation:"Schwimmen"},{word:"cycling",translation:"Radfahren"},{word:"running",translation:"Laufen"},{word:"volleyball",translation:"Volleyball"},{word:"golf",translation:"Golf"},{word:"hockey",translation:"Hockey"},{word:"skiing",translation:"Skifahren"},{word:"boxing",translation:"Boxen"},{word:"wrestling",translation:"Ringkampf"},{word:"athletics",translation:"Leichtathletik"},{word:"badminton",translation:"Badminton"},{word:"rugby",translation:"Rugby"},{word:"surfing",translation:"Surfen"},{word:"karate",translation:"Karate"},{word:"gymnastics",translation:"Gymnastik"},{word:"table tennis",translation:"Tischtennis"},{word:"baseball",translation:"Baseball"}]},g=o(4207),y=o(1728),k=o(2559),C=function(){var t=this,r=t._self._c;return r(y.Z,[r(k.Z,t._l(t.words,(function(o,a){return r(g.Z,{key:a,attrs:{cols:"12",sm:"6",md:"3",lg:"3"}},[r("memory-card",{attrs:{word:o},on:{clickCard:t.clickCard}})],1)})),1)],1)},b=[],v=(o(1788),o(5013)),P=function(){var t=this,r=t._self._c;return r(s.Z,{directives:[{def:v.Z,name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"memory-card d-flex justify-center align-center",class:{"disabled-card":!t.isClickable||t.isCardClicked},on:{click:t.handleCardClick}},[!t.isClickable||t.isCardClicked?r(l.EB,[t._v(t._s(t.word))]):r(c.Z,{attrs:{size:"40",color:"white"}},[t._v("mdi-comment-question-outline")])],1)},Z=[],S={props:{word:String},computed:{isClickable(){return!this.hasCardBeenMatched()}},data(){return{isCardClicked:!1}},methods:{handleCardClick(){this.isCardClicked=!0,this.isClickable&&this.$emit("clickCard",this.word),this.$el.blur()},hasCardBeenMatched(){return this.$parent.matchedPairs.some((t=>t.word1===this.word||t.word2===this.word))}}},O=S,_=o(1248),x=(0,_.Z)(O,P,Z,!1,null,"d2fa50ea",null),D=x.exports,R={components:{MemoryCard:D},props:{wordPairs:Array},data(){return{words:this.generateMappedWords(this.wordPairs),clickCounter:0,word1:"",word2:"",matchedPairs:[]}},methods:{generateMappedWords(t){const r=this.shuffleArray(t),o=r.slice(0,10),a=o.flatMap((t=>[t.word,t.translation]));return this.shuffleArray(a)},shuffleArray(t){for(let r=t.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[t[r],t[o]]=[t[o],t[r]]}return t},clickCard(t){0===this.clickCounter?(this.word1=t,this.clickCounter++):1===this.clickCounter&&(this.word2=t,this.clickCounter++,this.isWordPairCorrect()||setTimeout((()=>{this.closeCards()}),500),setTimeout((()=>{this.word1="",this.word2="",this.clickCounter=0}),500))},isWordPairCorrect(){const t=this.wordPairs.some((t=>t.word===this.word1&&t.translation===this.word2))||this.wordPairs.some((t=>t.word===this.word2&&t.translation===this.word1));return t&&this.matchedPairs.push({word1:this.word1,word2:this.word2}),t},closeCards(){this.$children.forEach((t=>{t.isCardClicked=!1}))}}},T=R,j=(0,_.Z)(T,C,b,!1,null,null,null),A=j.exports,E={name:"App",components:{GameContainer:A},data(){return{isRetryDialogOpen:!1,categories:["Animals","Food","Sports"],selectedCategory:"Animals",wordPairs:m.FoodEnDe}},mounted(){const t=localStorage.getItem("selectedCategory");t&&(this.selectedCategory=t),this.updateWordPairs()},methods:{reloadGame(){this.isRetryDialogOpen=!1,window.location.reload()},updateWordPairs(){"Animals"===this.selectedCategory?this.wordPairs=m.AnimalsEnDe:"Food"===this.selectedCategory?this.wordPairs=m.FoodEnDe:"Sports"===this.selectedCategory&&(this.wordPairs=m.SportsEnDe),localStorage.setItem("selectedCategory",this.selectedCategory)}}},M=E,B=(0,_.Z)(M,f,p,!1,null,null,null),F=B.exports,z=o(7038);a.ZP.use(z.Z);var K=new z.Z({});a.ZP.config.productionTip=!1,new a.ZP({vuetify:K,render:t=>t(F)}).$mount("#app")}},r={};function o(a){var e=r[a];if(void 0!==e)return e.exports;var n=r[a]={exports:{}};return t[a].call(n.exports,n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(r,a,e,n){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],e=t[c][1],n=t[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&n||i>=n)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(s=!1,n<i&&(i=n));if(s){t.splice(c--,1);var d=e();void 0!==d&&(r=d)}}return r}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[a,e,n]}}(),function(){o.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(r,{a:r}),r}}(),function(){o.d=function(t,r){for(var a in r)o.o(r,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(r){return 0===t[r]};var r=function(r,a){var e,n,i=a[0],s=a[1],l=a[2],d=0;if(i.some((function(r){return 0!==t[r]}))){for(e in s)o.o(s,e)&&(o.m[e]=s[e]);if(l)var c=l(o)}for(r&&r(a);d<i.length;d++)n=i[d],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(c)},a=self["webpackChunkmemory_game"]=self["webpackChunkmemory_game"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(824)}));a=o.O(a)})();
//# sourceMappingURL=app.1adc35d1.js.map