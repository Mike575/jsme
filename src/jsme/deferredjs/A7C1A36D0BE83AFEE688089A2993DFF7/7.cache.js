$wnd.jsme.runAsyncCallback7('var iha="400px",jha="Accept",kha="Paste",lha="Paste the text to import into the text area below.",mha="dragend",nha="dragenter",oha="dragover",pha="drop",qha="file",rha="gwt-FileUpload",sha="gwt-HTML",tha="gwt-TextArea",uha="textarea";t(239,227,{});function o$(){o$=u;p$=new wF(mha,new q$)}function r$(a){a.a.cancelBubble=!0;VC(a.a)}function q$(){}t(240,239,{},q$);_.md=function(){r$(this)};_.pd=function(){return p$};var p$;function s$(){s$=u;t$=new wF(nha,new u$)}function u$(){}t(241,239,{},u$);\n_.md=function(){r$(this)};_.pd=function(){return t$};var t$;function v$(){v$=u;w$=new wF(oha,new x$)}function x$(){}t(242,239,{},x$);_.md=function(){r$(this)};_.pd=function(){return w$};var w$;function y$(){y$=u;z$=new wF(pha,new A$)}function A$(){}t(243,239,{},A$);\n_.md=function(a){var b,c,d,e;this.a.cancelBubble=!0;VC(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;vha(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(hw),a.a.b.a.a.f.pb[Ow]=null!=b?b:m)};_.pd=function(){return z$};var z$;function B$(a,b,c){eH(!a.mb?a.mb=new tH(a):a.mb,c,b)}function C$(){this.pb=RC(qha);this.pb[cp]=rha}t(362,343,py,C$);_.Hd=function(a){gK(this,a)};\nfunction D$(a){var b=UC(Np);k_(ov,j_(b));this.pb=b;this.b=new C0(this.pb);this.pb[cp]=sha;B0(this.b,a,!0);K0(this)}t(366,367,py,D$);function E$(){LM();var a=UC(uha);!TI&&(TI=new SI);!RI&&(RI=new QI);this.pb=a;this.pb[cp]=tha}t(406,407,py,E$);function F$(a,b){var c,d;c=UC(xw);d=UC(gw);d[Vn]=a.a.a;d.style[Pw]=a.b.a;var e=(VI(),WI(d));c.appendChild(e);UI(a.d,c);sK(a,b,d)}function G$(){mL.call(this);this.a=(pL(),wL);this.b=(xL(),AL);this.e[Uo]=Ie;this.e[To]=Ie}t(415,359,ky,G$);\n_.ee=function(a){var b;b=TC(a.pb);(a=wK(this,a))&&this.d.removeChild(TC(b));return a};function H$(a){try{a.w=!1;var b,c,d;d=a.hb;c=a.ab;d||(a.pb.style[Qw]=Jq,WL(a.pb,!1),a.ab=!1,a.re());b=a.pb;b.style[Mr]=0+(yE(),Wt);b.style[rw]=Ke;P2(a,Zy(XD($doc)+(WD()-OC(a.pb,it)>>1),0),Zy(YD($doc)+(VD()-OC(a.pb,ht)>>1),0));d||((a.ab=c)?(a.pb.style[jp]=zu,a.pb.style[Qw]=Rw,WL(a.pb,!0),Ay(a.gb,200)):(a.pb.style[Qw]=Rw,WL(a.pb,!0)))}finally{a.w=!0}}\nfunction I$(a){a.i=(new t1(a.j)).Gc.pf();cK(a.i,new J$(a),(CF(),CF(),DF));a.d=F(YM,s,47,[a.i])}function K$(){C2();var a,b,c,d,e;a3.call(this,(t3(),u3),null,!0);this.vh();this.db=!0;a=new D$(this.k);this.f=new E$;this.f.pb.style[Xw]=Me;RJ(this.f,Me);this.th();t2(this,iha);e=new G$;e.pb.style[Hq]=Me;e.e[Uo]=10;c=(pL(),qL);e.a=c;F$(e,a);F$(e,this.f);this.e=new EL;this.e.e[Uo]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],BL(this.e,a);F$(e,this.e);H2(this,e);R2(this,!1);this.uh()}t(710,711,UY,K$);\n_.th=function(){I$(this)};_.uh=function(){var a=this.f;a.pb.readOnly=!0;var b=UJ(a.pb)+"-readonly";QJ(a.Td(),b,!0)};_.vh=function(){s3(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function J$(a){this.a=a}t(713,1,{},J$);_.sd=function(){J2(this.a,!1)};_.a=null;function L$(a){this.a=a}t(714,1,{},L$);\n_.Zc=function(){ZJ(this.a.f.pb,!0);YL(this.a.f.pb);var a=this.a.f,b;b=PC(a.pb,Ow).length;if(0<b&&a.kb){if(0>b)throw new JV("Length must be a positive integer. Length: "+b);if(b>PC(a.pb,Ow).length)throw new JV("From Index: 0  To Index: "+b+"  Text Length: "+PC(a.pb,Ow).length);var a=a.pb,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function M$(a){I$(a);a.a=(new t1(a.b)).Gc.pf();cK(a.a,new N$(a),(CF(),CF(),DF));a.d=F(YM,s,47,[a.a,a.i])}function O$(a){a.j=dZ;a.k=lha;a.b=jha;s3(a.I.b,kha)}function P$(a){C2();K$.call(this);this.c=a}t(716,710,UY,P$);_.th=function(){M$(this)};_.uh=function(){RJ(this.f,"150px")};_.vh=function(){O$(this)};_.re=function(){$2(this);DC((AC(),BC),new Q$(this))};_.a=null;_.b=null;_.c=null;function R$(a){C2();P$.call(this,a)}t(715,716,UY,R$);\n_.th=function(){var a;M$(this);a=new C$;cK(a,new S$(this),(w_(),w_(),x_));this.d=F(YM,s,47,[this.a,a,this.i])};_.uh=function(){RJ(this.f,"150px");var a=new T$(this),b=this.f;B$(b,new U$,(s$(),s$(),t$));B$(b,new V$,(o$(),o$(),p$));B$(b,new W$,(v$(),v$(),w$));B$(b,new X$(a),(y$(),y$(),z$))};_.vh=function(){O$(this);this.k+=" Or drag and drop a file on it."};function S$(a){this.a=a}t(717,1,{},S$);_.rd=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);wha(b,new Y$(this));b.readAsText(a)};\n_.a=null;function Y$(a){this.a=a}t(718,1,{},Y$);_.wh=function(a){$P();KM(this.a.a.f,a)};_.a=null;t(721,1,{});t(720,721,{});_.b=null;_.c=1;_.d=-1;function T$(a){this.a=a;this.b=new Z$(this);this.c=this.d=1}t(719,720,{},T$);_.a=null;function Z$(a){this.a=a}t(722,1,{},Z$);_.wh=function(a){this.a.a.f.pb[Ow]=null!=a?a:m};_.a=null;function N$(a){this.a=a}t(726,1,{},N$);_.sd=function(){if(this.a.c){var a=this.a.c,b;b=new TP(a.a,0,PC(this.a.f.pb,Ow));qU(a.a.a,b.a)}J2(this.a,!1)};_.a=null;\nfunction Q$(a){this.a=a}t(727,1,{},Q$);_.Zc=function(){ZJ(this.a.f.pb,!0);YL(this.a.f.pb)};_.a=null;t(728,1,Yx);_.jd=function(){var a,b;a=new $$(this.a);void 0!=$wnd.FileReader?b=new R$(a):b=new P$(a);v2(b);H$(b)};function $$(a){this.a=a}t(729,1,{},$$);_.a=null;t(730,1,Yx);_.jd=function(){var a;a=new K$;var b=this.a,c;KM(a.f,b);b=(c=SV(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);RJ(a.f,20*(10>b?b:10)+Wt);DC((AC(),BC),new L$(a));v2(a);H$(a)};function wha(a,b){a.onload=function(a){b.wh(a.target.result)}}\nfunction vha(a,b){a.onloadend=function(a){b.wh(a.target.result)}}function X$(a){this.a=a}t(735,1,{},X$);_.a=null;function U$(){}t(736,1,{},U$);function V$(){}t(737,1,{},V$);function W$(){}t(738,1,{},W$);S(721);S(720);S(735);S(736);S(737);S(738);S(239);S(241);S(240);S(242);S(243);S(710);S(716);S(715);S(729);S(713);S(714);S(726);S(727);S(717);S(718);S(719);S(722);S(366);S(415);S(406);S(362);v(QY)(7);\n//@ sourceURL=7.js\n')
