!function(n){function e(r){if(t[r])return t[r].exports;var u=t[r]={exports:{},id:r,loaded:!1};return n[r].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}var u=t(2),i=r(u);window.$messages=new i["default"]({email:["email is required.","email has be taken."],username:["uesrname is required","username has be taken"]}),$messages.merge({email:["email is not invalid."],password:["password is required."]}),console.log($messages.first("email","key: :key, message: :message")),console.log($messages.all("key: :key, message: :message")),console.log($messages.messages())},function(n,e,t){var r,u;(function(){function t(n){function e(e,t,r,u,i,a){for(;i>=0&&i<a;i+=n){var o=u?u[i]:i;r=t(r,e[o],o,e)}return r}return function(t,r,u,i){r=_(r,i,4);var a=!F(t)&&j.keys(t),o=(a||t).length,c=n>0?0:o-1;return arguments.length<3&&(u=t[a?a[c]:c],c+=n),e(t,r,u,a,c,o)}}function i(n){return function(e,t,r){t=x(t,r);for(var u=E(e),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(e[i],i,e))return i;return-1}}function a(n,e,t){return function(r,u,i){var a=0,o=E(r);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+o,a):o=i>=0?Math.min(i+1,o):i+o+1;else if(t&&i&&o)return i=t(r,u),r[i]===u?i:-1;if(u!==u)return i=e(v.call(r,a,o),j.isNaN),i>=0?i+a:-1;for(i=n>0?a:o-1;i>=0&&i<o;i+=n)if(r[i]===u)return i;return-1}}function o(n,e){var t=q.length,r=n.constructor,u=j.isFunction(r)&&r.prototype||f,i="constructor";for(j.has(n,i)&&!j.contains(e,i)&&e.push(i);t--;)i=q[t],i in n&&n[i]!==u[i]&&!j.contains(e,i)&&e.push(i)}var c=this,l=c._,s=Array.prototype,f=Object.prototype,p=Function.prototype,h=s.push,v=s.slice,y=f.toString,g=f.hasOwnProperty,d=Array.isArray,m=Object.keys,b=p.bind,k=Object.create,w=function(){},j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof n&&n.exports&&(e=n.exports=j),e._=j,j.VERSION="1.8.3";var _=function(n,e,t){if(void 0===e)return n;switch(null==t?3:t){case 1:return function(t){return n.call(e,t)};case 2:return function(t,r){return n.call(e,t,r)};case 3:return function(t,r,u){return n.call(e,t,r,u)};case 4:return function(t,r,u,i){return n.call(e,t,r,u,i)}}return function(){return n.apply(e,arguments)}},x=function(n,e,t){return null==n?j.identity:j.isFunction(n)?_(n,e,t):j.isObject(n)?j.matcher(n):j.property(n)};j.iteratee=function(n,e){return x(n,e,1/0)};var O=function(n,e){return function(t){var r=arguments.length;if(r<2||null==t)return t;for(var u=1;u<r;u++)for(var i=arguments[u],a=n(i),o=a.length,c=0;c<o;c++){var l=a[c];e&&void 0!==t[l]||(t[l]=i[l])}return t}},A=function(n){if(!j.isObject(n))return{};if(k)return k(n);w.prototype=n;var e=new w;return w.prototype=null,e},S=function(n){return function(e){return null==e?void 0:e[n]}},M=Math.pow(2,53)-1,E=S("length"),F=function(n){var e=E(n);return"number"==typeof e&&e>=0&&e<=M};j.each=j.forEach=function(n,e,t){e=_(e,t);var r,u;if(F(n))for(r=0,u=n.length;r<u;r++)e(n[r],r,n);else{var i=j.keys(n);for(r=0,u=i.length;r<u;r++)e(n[i[r]],i[r],n)}return n},j.map=j.collect=function(n,e,t){e=x(e,t);for(var r=!F(n)&&j.keys(n),u=(r||n).length,i=Array(u),a=0;a<u;a++){var o=r?r[a]:a;i[a]=e(n[o],o,n)}return i},j.reduce=j.foldl=j.inject=t(1),j.reduceRight=j.foldr=t(-1),j.find=j.detect=function(n,e,t){var r;if(r=F(n)?j.findIndex(n,e,t):j.findKey(n,e,t),void 0!==r&&r!==-1)return n[r]},j.filter=j.select=function(n,e,t){var r=[];return e=x(e,t),j.each(n,function(n,t,u){e(n,t,u)&&r.push(n)}),r},j.reject=function(n,e,t){return j.filter(n,j.negate(x(e)),t)},j.every=j.all=function(n,e,t){e=x(e,t);for(var r=!F(n)&&j.keys(n),u=(r||n).length,i=0;i<u;i++){var a=r?r[i]:i;if(!e(n[a],a,n))return!1}return!0},j.some=j.any=function(n,e,t){e=x(e,t);for(var r=!F(n)&&j.keys(n),u=(r||n).length,i=0;i<u;i++){var a=r?r[i]:i;if(e(n[a],a,n))return!0}return!1},j.contains=j.includes=j.include=function(n,e,t,r){return F(n)||(n=j.values(n)),("number"!=typeof t||r)&&(t=0),j.indexOf(n,e,t)>=0},j.invoke=function(n,e){var t=v.call(arguments,2),r=j.isFunction(e);return j.map(n,function(n){var u=r?e:n[e];return null==u?u:u.apply(n,t)})},j.pluck=function(n,e){return j.map(n,j.property(e))},j.where=function(n,e){return j.filter(n,j.matcher(e))},j.findWhere=function(n,e){return j.find(n,j.matcher(e))},j.max=function(n,e,t){var r,u,i=-(1/0),a=-(1/0);if(null==e&&null!=n){n=F(n)?n:j.values(n);for(var o=0,c=n.length;o<c;o++)r=n[o],r>i&&(i=r)}else e=x(e,t),j.each(n,function(n,t,r){u=e(n,t,r),(u>a||u===-(1/0)&&i===-(1/0))&&(i=n,a=u)});return i},j.min=function(n,e,t){var r,u,i=1/0,a=1/0;if(null==e&&null!=n){n=F(n)?n:j.values(n);for(var o=0,c=n.length;o<c;o++)r=n[o],r<i&&(i=r)}else e=x(e,t),j.each(n,function(n,t,r){u=e(n,t,r),(u<a||u===1/0&&i===1/0)&&(i=n,a=u)});return i},j.shuffle=function(n){for(var e,t=F(n)?n:j.values(n),r=t.length,u=Array(r),i=0;i<r;i++)e=j.random(0,i),e!==i&&(u[i]=u[e]),u[e]=t[i];return u},j.sample=function(n,e,t){return null==e||t?(F(n)||(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,e))},j.sortBy=function(n,e,t){return e=x(e,t),j.pluck(j.map(n,function(n,t,r){return{value:n,index:t,criteria:e(n,t,r)}}).sort(function(n,e){var t=n.criteria,r=e.criteria;if(t!==r){if(t>r||void 0===t)return 1;if(t<r||void 0===r)return-1}return n.index-e.index}),"value")};var $=function(n){return function(e,t,r){var u={};return t=x(t,r),j.each(e,function(r,i){var a=t(r,i,e);n(u,r,a)}),u}};j.groupBy=$(function(n,e,t){j.has(n,t)?n[t].push(e):n[t]=[e]}),j.indexBy=$(function(n,e,t){n[t]=e}),j.countBy=$(function(n,e,t){j.has(n,t)?n[t]++:n[t]=1}),j.toArray=function(n){return n?j.isArray(n)?v.call(n):F(n)?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:F(n)?n.length:j.keys(n).length},j.partition=function(n,e,t){e=x(e,t);var r=[],u=[];return j.each(n,function(n,t,i){(e(n,t,i)?r:u).push(n)}),[r,u]},j.first=j.head=j.take=function(n,e,t){if(null!=n)return null==e||t?n[0]:j.initial(n,n.length-e)},j.initial=function(n,e,t){return v.call(n,0,Math.max(0,n.length-(null==e||t?1:e)))},j.last=function(n,e,t){if(null!=n)return null==e||t?n[n.length-1]:j.rest(n,Math.max(0,n.length-e))},j.rest=j.tail=j.drop=function(n,e,t){return v.call(n,null==e||t?1:e)},j.compact=function(n){return j.filter(n,j.identity)};var N=function(n,e,t,r){for(var u=[],i=0,a=r||0,o=E(n);a<o;a++){var c=n[a];if(F(c)&&(j.isArray(c)||j.isArguments(c))){e||(c=N(c,e,t));var l=0,s=c.length;for(u.length+=s;l<s;)u[i++]=c[l++]}else t||(u[i++]=c)}return u};j.flatten=function(n,e){return N(n,e,!1)},j.without=function(n){return j.difference(n,v.call(arguments,1))},j.uniq=j.unique=function(n,e,t,r){j.isBoolean(e)||(r=t,t=e,e=!1),null!=t&&(t=x(t,r));for(var u=[],i=[],a=0,o=E(n);a<o;a++){var c=n[a],l=t?t(c,a,n):c;e?(a&&i===l||u.push(c),i=l):t?j.contains(i,l)||(i.push(l),u.push(c)):j.contains(u,c)||u.push(c)}return u},j.union=function(){return j.uniq(N(arguments,!0,!0))},j.intersection=function(n){for(var e=[],t=arguments.length,r=0,u=E(n);r<u;r++){var i=n[r];if(!j.contains(e,i)){for(var a=1;a<t&&j.contains(arguments[a],i);a++);a===t&&e.push(i)}}return e},j.difference=function(n){var e=N(arguments,!0,!0,1);return j.filter(n,function(n){return!j.contains(e,n)})},j.zip=function(){return j.unzip(arguments)},j.unzip=function(n){for(var e=n&&j.max(n,E).length||0,t=Array(e),r=0;r<e;r++)t[r]=j.pluck(n,r);return t},j.object=function(n,e){for(var t={},r=0,u=E(n);r<u;r++)e?t[n[r]]=e[r]:t[n[r][0]]=n[r][1];return t},j.findIndex=i(1),j.findLastIndex=i(-1),j.sortedIndex=function(n,e,t,r){t=x(t,r,1);for(var u=t(e),i=0,a=E(n);i<a;){var o=Math.floor((i+a)/2);t(n[o])<u?i=o+1:a=o}return i},j.indexOf=a(1,j.findIndex,j.sortedIndex),j.lastIndexOf=a(-1,j.findLastIndex),j.range=function(n,e,t){null==e&&(e=n||0,n=0),t=t||1;for(var r=Math.max(Math.ceil((e-n)/t),0),u=Array(r),i=0;i<r;i++,n+=t)u[i]=n;return u};var I=function(n,e,t,r,u){if(!(r instanceof e))return n.apply(t,u);var i=A(n.prototype),a=n.apply(i,u);return j.isObject(a)?a:i};j.bind=function(n,e){if(b&&n.bind===b)return b.apply(n,v.call(arguments,1));if(!j.isFunction(n))throw new TypeError("Bind must be called on a function");var t=v.call(arguments,2),r=function(){return I(n,r,e,this,t.concat(v.call(arguments)))};return r},j.partial=function(n){var e=v.call(arguments,1),t=function(){for(var r=0,u=e.length,i=Array(u),a=0;a<u;a++)i[a]=e[a]===j?arguments[r++]:e[a];for(;r<arguments.length;)i.push(arguments[r++]);return I(n,t,this,this,i)};return t},j.bindAll=function(n){var e,t,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(e=1;e<r;e++)t=arguments[e],n[t]=j.bind(n[t],n);return n},j.memoize=function(n,e){var t=function(r){var u=t.cache,i=""+(e?e.apply(this,arguments):r);return j.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t},j.delay=function(n,e){var t=v.call(arguments,2);return setTimeout(function(){return n.apply(null,t)},e)},j.defer=j.partial(j.delay,j,1),j.throttle=function(n,e,t){var r,u,i,a=null,o=0;t||(t={});var c=function(){o=t.leading===!1?0:j.now(),a=null,i=n.apply(r,u),a||(r=u=null)};return function(){var l=j.now();o||t.leading!==!1||(o=l);var s=e-(l-o);return r=this,u=arguments,s<=0||s>e?(a&&(clearTimeout(a),a=null),o=l,i=n.apply(r,u),a||(r=u=null)):a||t.trailing===!1||(a=setTimeout(c,s)),i}},j.debounce=function(n,e,t){var r,u,i,a,o,c=function(){var l=j.now()-a;l<e&&l>=0?r=setTimeout(c,e-l):(r=null,t||(o=n.apply(i,u),r||(i=u=null)))};return function(){i=this,u=arguments,a=j.now();var l=t&&!r;return r||(r=setTimeout(c,e)),l&&(o=n.apply(i,u),i=u=null),o}},j.wrap=function(n,e){return j.partial(e,n)},j.negate=function(n){return function(){return!n.apply(this,arguments)}},j.compose=function(){var n=arguments,e=n.length-1;return function(){for(var t=e,r=n[e].apply(this,arguments);t--;)r=n[t].call(this,r);return r}},j.after=function(n,e){return function(){if(--n<1)return e.apply(this,arguments)}},j.before=function(n,e){var t;return function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=null),t}},j.once=j.partial(j.before,2);var T=!{toString:null}.propertyIsEnumerable("toString"),q=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];j.keys=function(n){if(!j.isObject(n))return[];if(m)return m(n);var e=[];for(var t in n)j.has(n,t)&&e.push(t);return T&&o(n,e),e},j.allKeys=function(n){if(!j.isObject(n))return[];var e=[];for(var t in n)e.push(t);return T&&o(n,e),e},j.values=function(n){for(var e=j.keys(n),t=e.length,r=Array(t),u=0;u<t;u++)r[u]=n[e[u]];return r},j.mapObject=function(n,e,t){e=x(e,t);for(var r,u=j.keys(n),i=u.length,a={},o=0;o<i;o++)r=u[o],a[r]=e(n[r],r,n);return a},j.pairs=function(n){for(var e=j.keys(n),t=e.length,r=Array(t),u=0;u<t;u++)r[u]=[e[u],n[e[u]]];return r},j.invert=function(n){for(var e={},t=j.keys(n),r=0,u=t.length;r<u;r++)e[n[t[r]]]=t[r];return e},j.functions=j.methods=function(n){var e=[];for(var t in n)j.isFunction(n[t])&&e.push(t);return e.sort()},j.extend=O(j.allKeys),j.extendOwn=j.assign=O(j.keys),j.findKey=function(n,e,t){e=x(e,t);for(var r,u=j.keys(n),i=0,a=u.length;i<a;i++)if(r=u[i],e(n[r],r,n))return r},j.pick=function(n,e,t){var r,u,i={},a=n;if(null==a)return i;j.isFunction(e)?(u=j.allKeys(a),r=_(e,t)):(u=N(arguments,!1,!1,1),r=function(n,e,t){return e in t},a=Object(a));for(var o=0,c=u.length;o<c;o++){var l=u[o],s=a[l];r(s,l,a)&&(i[l]=s)}return i},j.omit=function(n,e,t){if(j.isFunction(e))e=j.negate(e);else{var r=j.map(N(arguments,!1,!1,1),String);e=function(n,e){return!j.contains(r,e)}}return j.pick(n,e,t)},j.defaults=O(j.allKeys,!0),j.create=function(n,e){var t=A(n);return e&&j.extendOwn(t,e),t},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,e){return e(n),n},j.isMatch=function(n,e){var t=j.keys(e),r=t.length;if(null==n)return!r;for(var u=Object(n),i=0;i<r;i++){var a=t[i];if(e[a]!==u[a]||!(a in u))return!1}return!0};var R=function(n,e,t,r){if(n===e)return 0!==n||1/n===1/e;if(null==n||null==e)return n===e;n instanceof j&&(n=n._wrapped),e instanceof j&&(e=e._wrapped);var u=y.call(n);if(u!==y.call(e))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+e;case"[object Number]":return+n!==+n?+e!==+e:0===+n?1/+n===1/e:+n===+e;case"[object Date]":case"[object Boolean]":return+n===+e}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof e)return!1;var a=n.constructor,o=e.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in e)return!1}t=t||[],r=r||[];for(var c=t.length;c--;)if(t[c]===n)return r[c]===e;if(t.push(n),r.push(e),i){if(c=n.length,c!==e.length)return!1;for(;c--;)if(!R(n[c],e[c],t,r))return!1}else{var l,s=j.keys(n);if(c=s.length,j.keys(e).length!==c)return!1;for(;c--;)if(l=s[c],!j.has(e,l)||!R(n[l],e[l],t,r))return!1}return t.pop(),r.pop(),!0};j.isEqual=function(n,e){return R(n,e)},j.isEmpty=function(n){return null==n||(F(n)&&(j.isArray(n)||j.isString(n)||j.isArguments(n))?0===n.length:0===j.keys(n).length)},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=d||function(n){return"[object Array]"===y.call(n)},j.isObject=function(n){var e=typeof n;return"function"===e||"object"===e&&!!n},j.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){j["is"+n]=function(e){return y.call(e)==="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return j.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(j.isFunction=function(n){return"function"==typeof n||!1}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!==+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===y.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return void 0===n},j.has=function(n,e){return null!=n&&g.call(n,e)},j.noConflict=function(){return c._=l,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.noop=function(){},j.property=S,j.propertyOf=function(n){return null==n?function(){}:function(e){return n[e]}},j.matcher=j.matches=function(n){return n=j.extendOwn({},n),function(e){return j.isMatch(e,n)}},j.times=function(n,e,t){var r=Array(Math.max(0,n));e=_(e,t,1);for(var u=0;u<n;u++)r[u]=e(u);return r},j.random=function(n,e){return null==e&&(e=n,n=0),n+Math.floor(Math.random()*(e-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=j.invert(B),z=function(n){var e=function(e){return n[e]},t="(?:"+j.keys(n).join("|")+")",r=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(u,e):n}};j.escape=z(B),j.unescape=z(P),j.result=function(n,e,t){var r=null==n?void 0:n[e];return void 0===r&&(r=t),j.isFunction(r)?r.call(n):r};var C=0;j.uniqueId=function(n){var e=++C+"";return n?n+e:e},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,D={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},L=/\\|'|\r|\n|\u2028|\u2029/g,U=function(n){return"\\"+D[n]};j.template=function(n,e,t){!e&&t&&(e=t),e=j.defaults({},e,j.templateSettings);var r=RegExp([(e.escape||K).source,(e.interpolate||K).source,(e.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(r,function(e,t,r,a,o){return i+=n.slice(u,o).replace(L,U),u=o+e.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),e}),i+="';\n",e.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(e.variable||"obj","_",i)}catch(o){throw o.source=i,o}var c=function(n){return a.call(this,n,j)},l=e.variable||"obj";return c.source="function("+l+"){\n"+i+"}",c},j.chain=function(n){var e=j(n);return e._chain=!0,e};var J=function(n,e){return n._chain?j(e).chain():e};j.mixin=function(n){j.each(j.functions(n),function(e){var t=j[e]=n[e];j.prototype[e]=function(){var n=[this._wrapped];return h.apply(n,arguments),J(this,t.apply(j,n))}})},j.mixin(j),j.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var e=s[n];j.prototype[n]=function(){var t=this._wrapped;return e.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0],J(this,t)}}),j.each(["concat","join","slice"],function(n){var e=s[n];j.prototype[n]=function(){return J(this,e.apply(this._wrapped,arguments))}}),j.prototype.value=function(){return this._wrapped},j.prototype.valueOf=j.prototype.toJSON=j.prototype.value,j.prototype.toString=function(){return""+this._wrapped},r=[],u=function(){return j}.apply(e,r),!(void 0!==u&&(n.exports=u))}).call(this)},function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}function u(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function o(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),l=t(3),s=r(l),f=t(1),p=r(f),h=t(4),v=r(h),y=function(n){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,e);var t=a(this,Object.getPrototypeOf(e).call(this));return t.$messages={},t.format=":message",p["default"].each(n,function(n,e){t.$messages[e]=p["default"].isArray(n)?n:[n]}),t}return o(e,n),c(e,[{key:"keys",value:function(){return p["default"].keys(this.$messages)}},{key:"add",value:function(n,e){return this.isUnique(n,e)&&this.$messages[n].push(e),this}},{key:"merge",value:function(n){var t=this;n instanceof e&&(n=n.getMessageBag().getMessages());var r=p["default"].keys(n);return p["default"].each(r,function(e){t.has(e)?p["default"].isArray(n[e])?t.$messages[e]=[].concat(u(t.$messages[e]),u(n[e])):t.$messages[e]=[].concat(u(t.$messages[e]),[n[e]]):p["default"].isArray(n[e])?t.$messages[e]=n[e]:t.$messages[e]=[n[e]]}),this}},{key:"isUnique",value:function(n,e){return!p["default"].has(n,this.$messages)}},{key:"has",value:function(){var n=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return""!==this.first(n)}},{key:"first",value:function(){var n=arguments.length<=0||void 0===arguments[0]?null:arguments[0],e=arguments.length<=1||void 0===arguments[1]?null:arguments[1],t=p["default"].isNull(n)?this.all(e):this.get(n,e);return t.length>0?p["default"].first(t):""}},{key:"get",value:function(n){var e=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return p["default"].isArray(this.$messages[n])?this.transform(this.$messages[n],this.checkFormat(e),n):[]}},{key:"all",value:function t(){var n=this,e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];e=this.checkFormat(e);var t={};return p["default"].each(this.$messages,function(r,u){t[u]=n.transform(r,e,u)}),t}},{key:"unique",value:function(){return(new Date).getTime()}},{key:"transform",value:function(n,e,t){var r=[":message",":key"],u=[];return p["default"].each(n,function(n,i){u[i]=s["default"].replace(r,[n,t],e)}),u}},{key:"checkFormat",value:function(n){return n?n:this.format}},{key:"messages",value:function(){return this.$messages}},{key:"getMessages",value:function(){return this.messages()}},{key:"getMessageBag",value:function(){return this}},{key:"getFormat",value:function(){return this.format}},{key:"setFormat",value:function(){var n=arguments.length<=0||void 0===arguments[0]?":message":arguments[0];return this.format=n,this}},{key:"isEmpty",value:function(){return!this.any()}},{key:"any",value:function(){return this.count()>0}},{key:"count",value:function(){return p["default"].keys(this.$messages).length}},{key:"refresh",value:function(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.clear(),p["default"].keys(n).length>0&&this.merge(n)}},{key:"clear",value:function(){this.$messages={}}},{key:"toArray",value:function(){return this.getMessages()}},{key:"jsonSerialize",value:function(){var n=arguments.length<=0||void 0===arguments[0]?0:arguments[0];return JSON.stringify(this.$messages,null,n)}},{key:"toJson",value:function(){return this.getMessages()}}]),e}(v["default"]);e["default"]=y},function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=t(1),o=r(a),c=function(){function n(){u(this,n)}return i(n,null,[{key:"replace",value:function(n,e,t){if(!o["default"].isString(t))throw Error("Target type error.");var r=t,u=0;if(o["default"].isString(n))o["default"].isString(e)||o["default"].isRegExp(e)?r=r.replace(n,e):o["default"].isFunction(e)?r=r.replace(n,function(n){return e(n)}):o["default"].isArray(e)?r=r.replace(n,function(){return e[u]}):o["default"].isObject(e)&&(r=r.replace(n,function(n){return e[n]}));else if(o["default"].isArray(n)){var i=new RegExp("("+n.join("|")+")","g");o["default"].isString(e)?r=r.replace(i,e):o["default"].isArray(e)?r=r.replace(i,function(t){var r=n.indexOf(t);return e[r]?e[r]:t}):o["default"].isObject(e)&&(i=new RegExp("("+n.join("|")+")"),r=r.replace(i,function(n){return e[n]||"null"}))}return r}},{key:"size",value:function(n){for(var e=arguments.length<=1||void 0===arguments[1]?"utf-8":arguments[1],t=0,r=n.length,u=-1,i=0;i<r;i++)u=n.charCodeAt(i),t+=u>=0&&u<=128?1:"utf-8"===e?3:2;return t}},{key:"contains",value:function(n,e){e=Array(e);for(var t=e.length-1;t>=0;t--)if(""!==e[t]&&n.indexOf(e[t])!==-1)return!0;return!1}},{key:"startsWith",value:function(n,e){e=Array(e);for(var t=e.length-1;t>=0;t--)if(""!==e[t]&&0===n.indexOf(e[t]))return!0;return!1}},{key:"endsWith",value:function(n,e){e=Array(e);for(var t=e.length-1;t>=0;t--)if(String(needle[0])===n.substr(0,needle[0].length))return!0;return!1}},{key:"ucfirst",value:function(e){return n.upper(e.substr(0,1))+e.substr(1)}},{key:"upper",value:function(n){return String(n).toUpperCase()}},{key:"lower",value:function(n){return String(n).toLowerCase()}},{key:"quickRandom",value:function(n){return o["default"].shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).join("").slice(0,n||16)}}]),n}();c.VERSION="1.0.0",e["default"]=c},function(n,e){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),u=function(){function n(){t(this,n)}return r(n,[{key:"getMessageBag",value:function(){}}]),n}();e["default"]=u}]);