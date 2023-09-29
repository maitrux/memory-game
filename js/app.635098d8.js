(function(){"use strict";var r={6245:function(r,t,o){var n=o(1508),e=o(3074),i=o(579),a=o(2534),s=o(6881),l=o(6586),d=o(190),c=o(9580),u=o(9648),f=o(4242),h=function(){var r=this,t=r._self._c;return t(e.Z,[t(i.Z,{attrs:{app:"",color:"#00838F",dark:""}},[t(f.Z),t(c.Z,{on:{click:function(t){r.dialog=!0}}},[r._v("mdi-reload")])],1),t(u.Z,{staticClass:"d-flex justify-center align-center"},[t("GameContainer"),t(d.Z,{attrs:{width:"400"},model:{value:r.dialog,callback:function(t){r.dialog=t},expression:"dialog"}},[t(s.Z,[t(l.ZB,{staticStyle:{"font-size":"20px"}},[t("div",{staticClass:"pt-4 mb-8 d-flex justify-center"},[r._v(" Do you want to start the game again? ")]),t(a.Z,{staticClass:"mb-2",attrs:{outlined:"",block:"",color:"#00838F"},on:{click:function(t){r.dialog=!1}}},[r._v("Close")]),t(a.Z,{attrs:{block:"",color:"#00838F",dark:""},on:{click:r.reloadGame}},[r._v("RETRY")])],1)],1)],1)],1)],1)},w=[],p=o(4207),m=o(1728),C=o(2559),g=function(){var r=this,t=r._self._c;return t(m.Z,[t(C.Z,r._l(r.words,(function(o,n){return t(p.Z,{key:n,attrs:{cols:"12",sm:"6",md:"3",lg:"3"}},[t("memory-card",{attrs:{word:o},on:{clickCard:r.clickCard}})],1)})),1)],1)},k=[],v=(o(1788),{wordPairs:[{word:"cat",translation:"Katze"},{word:"dog",translation:"Hund"},{word:"elephant",translation:"Elefant"},{word:"lion",translation:"Löwe"},{word:"tiger",translation:"Tiger"},{word:"giraffe",translation:"Giraffe"},{word:"monkey",translation:"Affe"},{word:"horse",translation:"Pferd"},{word:"rabbit",translation:"Hase"},{word:"bear",translation:"Bär"},{word:"zebra",translation:"Zebra"},{word:"penguin",translation:"Pinguin"},{word:"kangaroo",translation:"Känguru"},{word:"dolphin",translation:"Delfin"},{word:"whale",translation:"Wal"},{word:"shark",translation:"Hai"},{word:"octopus",translation:"Tintenfish"},{word:"crocodile",translation:"Krokodil"},{word:"parrot",translation:"Papagei"},{word:"snake",translation:"Schlange"}]}),b=o(5013),y=function(){var r=this,t=r._self._c;return t(s.Z,{directives:[{def:b.Z,name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"memory-card d-flex justify-center align-center",class:{"disabled-card":!r.isClickable||r.isCardClicked},on:{click:r.handleCardClick}},[!r.isClickable||r.isCardClicked?t(l.EB,[r._v(r._s(r.word))]):t(c.Z,{attrs:{size:"40",color:"white"}},[r._v("mdi-comment-question-outline")])],1)},Z=[],P={props:{word:String},computed:{isClickable(){return!this.hasCardBeenMatched()}},data(){return{isCardClicked:!1}},methods:{handleCardClick(){this.isCardClicked=!0,this.isClickable&&this.$emit("clickCard",this.word),this.$el.blur()},hasCardBeenMatched(){return this.$parent.matchedPairs.some((r=>r.word1===this.word||r.word2===this.word))}}},_=P,x=o(1248),O=(0,x.Z)(_,y,Z,!1,null,"d2fa50ea",null),j=O.exports,M={components:{MemoryCard:j},data(){return{words:this.generateMappedWords(v.wordPairs),clickCounter:0,word1:"",word2:"",matchedPairs:[]}},methods:{generateMappedWords(r){const t=this.shuffleWordPairs(r),o=t.slice(0,10),n=o.flatMap((r=>[r.word,r.translation]));return n},shuffleWordPairs(r){for(let t=r.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[r[t],r[o]]=[r[o],r[t]]}return r},clickCard(r){0===this.clickCounter?(this.word1=r,this.clickCounter++):1===this.clickCounter&&(this.word2=r,this.clickCounter++,this.isWordPairCorrect()||setTimeout((()=>{this.closeCards()}),500),setTimeout((()=>{this.word1="",this.word2="",this.clickCounter=0}),500))},isWordPairCorrect(){const r=v.wordPairs.some((r=>r.word===this.word1&&r.translation===this.word2))||v.wordPairs.some((r=>r.word===this.word2&&r.translation===this.word1));return r&&this.matchedPairs.push({word1:this.word1,word2:this.word2}),r},closeCards(){this.$children.forEach((r=>{r.isCardClicked=!1}))}}},T=M,S=(0,x.Z)(T,g,k,!1,null,"09c9d7f7",null),W=S.exports,B={name:"App",components:{GameContainer:W},data(){return{dialog:!1}},methods:{reloadGame(){this.dialog=!1,window.location.reload()}}},E=B,G=(0,x.Z)(E,h,w,!1,null,null,null),$=G.exports,z=o(2700);n.ZP.use(z.Z);var F=new z.Z({});n.ZP.config.productionTip=!1,new n.ZP({vuetify:F,render:r=>r($)}).$mount("#app")}},t={};function o(n){var e=t[n];if(void 0!==e)return e.exports;var i=t[n]={exports:{}};return r[n].call(i.exports,i,i.exports,o),i.exports}o.m=r,function(){var r=[];o.O=function(t,n,e,i){if(!n){var a=1/0;for(c=0;c<r.length;c++){n=r[c][0],e=r[c][1],i=r[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(r){return o.O[r](n[l])}))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){r.splice(c--,1);var d=e();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=r.length;c>0&&r[c-1][2]>i;c--)r[c]=r[c-1];r[c]=[n,e,i]}}(),function(){o.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return o.d(t,{a:t}),t}}(),function(){o.d=function(r,t){for(var n in t)o.o(t,n)&&!o.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){o.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)}}(),function(){o.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}}(),function(){var r={143:0};o.O.j=function(t){return 0===r[t]};var t=function(t,n){var e,i,a=n[0],s=n[1],l=n[2],d=0;if(a.some((function(t){return 0!==r[t]}))){for(e in s)o.o(s,e)&&(o.m[e]=s[e]);if(l)var c=l(o)}for(t&&t(n);d<a.length;d++)i=a[d],o.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return o.O(c)},n=self["webpackChunkmemory_game"]=self["webpackChunkmemory_game"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6245)}));n=o.O(n)})();
//# sourceMappingURL=app.635098d8.js.map