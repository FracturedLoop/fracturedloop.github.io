webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,o,n){"use strict";function t(e,o,n){var t=a.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}function s(e,o,n){return a.reduce(function(n,t){return t.plugin[e]?n.then(function(){return t.plugin[e](o,t.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=t,o.apiRunnerAsync=s;var a=[{plugin:n("../node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),options:{plugins:[]}}]},"./.cache/async-requires.js":function(e,o,n){"use strict";var t;o.components={"component---src-templates-blog-post-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-templates-blog-post-js!./src/templates/blog-post.js"),"component---src-pages-404-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-about-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-js!./src/pages/about.js"),"component---src-pages-contact-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-contact-js!./src/pages/contact.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js")},o.json=(t={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"managing-dotfiles-and-zsh-with-dotbot-and-antigen.json":n("./node_modules/gatsby-module-loader/index.js?name=path---managing-dotfiles-and-zsh-with-dotbot-and-antigen!./.cache/json/managing-dotfiles-and-zsh-with-dotbot-and-antigen.json")},t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["best-free-download-manager-for-mac.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---best-free-download-manager-for-mac!./.cache/json/best-free-download-manager-for-mac.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["about.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["contact.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---contact!./.cache/json/contact.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404-html.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),t),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function a(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i=n("./node_modules/react/react.js"),l=t(i),d=n("./node_modules/prop-types/index.js"),c=t(d),m=n("./.cache/loader.js"),p=t(m),g=n("./.cache/emitter.js"),f=t(g),h=function(e){var o=e.children;return l.default.createElement("div",null,o())},b=function(e){function o(n){s(this,o);var t=a(this,e.call(this));return t.state={location:n.location,pageResources:p.default.getResourcesForPathname(n.location.pathname)},t}return r(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):p.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;f.default.on("onPostLoadPageResources",function(o){o.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!o.pageResources||(!(this.state.pageResources||!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath&&!o.pageResources.page.path))))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:h,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(l.default.Component);b.propTypes={page:c.default.bool,layout:c.default.bool,location:c.default.object},o.default=b,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/mitt/dist/mitt.js"),a=t(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=n.slice(o.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(a,{path:e.path})||(0,t.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,t.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c04,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xf927f8900006,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/about.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---best-free-download-manager-for-mac!./.cache/json/best-free-download-manager-for-mac.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xca2da87694fe,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/best-free-download-manager-for-mac.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---contact!./.cache/json/contact.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa7f31e1aeaea,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/contact.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e4260,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(60335399758886,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---managing-dotfiles-and-zsh-with-dotbot-and-antigen!./.cache/json/managing-dotfiles-and-zsh-with-dotbot-and-antigen.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(98870803019946,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/managing-dotfiles-and-zsh-with-dotbot-and-antigen.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2a,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/react/react.js"),a=(t(s),n("./.cache/find-page.js")),r=t(a),u=n("./.cache/emitter.js"),i=t(u),l=void 0,d={},c={},m={},p={},g={},f=[],h=[],b={},j=[],y={},x=function(e){return e&&e.default||e},_=void 0,v=!0;_=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(e){R(e,function(){j=j.filter(function(o){return o!==e}),_.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var w=function(e,o){return y[e]>y[o]?1:y[e]<y[o]?-1:0},P=function(e,o){return b[e]>b[o]?1:b[e]<b[o]?-1:0},R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])o.nextTick(function(){n(null,p[e])});else{var t="component---"===e.slice(0,12)?c.components[e]||c.layouts[e]:c.json[e];t(function(o,t){p[e]=t,n(o,t)})}},k=function(e,n){g[e]?o.nextTick(function(){n(null,g[e])}):R(e,function(o,t){if(o)n(o);else{var s=x(t());g[e]=s,n(o,s)}})},E=1,N={empty:function(){h=[],b={},y={},j=[],f=[]},addPagesArray:function(e){f=e;var o="";l=(0,r.default)(e,o)},addDevRequires:function(e){d=e},addProdRequires:function(e){c=e},dequeue:function(e){return h.pop()},enqueue:function(e){if(!f.some(function(o){return o.path===e}))return!1;var o=1/E;E+=1,b[e]?b[e]+=1:b[e]=1,N.has(e)||h.unshift(e),h.sort(P);var n=l(e);return n.jsonName&&(y[n.jsonName]?y[n.jsonName]+=1+o:y[n.jsonName]=1+o,j.indexOf(n.jsonName)!==-1||p[n.jsonName]||j.unshift(n.jsonName)),n.componentChunkName&&(y[n.componentChunkName]?y[n.componentChunkName]+=1+o:y[n.componentChunkName]=1+o,j.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||j.unshift(n.componentChunkName)),j.sort(w),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:y}},getPages:function(){return{pathArray:h,pathCount:b}},getPage:function(e){return l(e)},has:function(e){return h.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(l(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),t=0,o=n?o:o[Symbol.iterator]();;){var s;if(n){if(t>=o.length)break;s=o[t++]}else{if(t=o.next(),t.done)break;s=t.value}var a=s;a.unregister()}window.location.reload()})),v=!1;var t=l(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,m[e])return o.nextTick(function(){n(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var s=void 0,a=void 0,r=void 0,u=function(){if(s&&a&&(!t.layoutComponentChunkName||r)){m[e]={component:s,json:a,layout:r};var o={component:s,json:a,layout:r};n(o),i.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return k(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),s=o,u()}),k(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),a=o,u()}),void(t.layoutComponentChunkName&&k(t.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+t.path+" failed"),r=o,u()}))},peek:function(e){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(e){return h.length-h.indexOf(e)-1}};e.exports=N}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"managing-dotfiles-and-zsh-with-dotbot-and-antigen.json",path:"/managing-dotfiles-and-zsh-with-dotbot-and-antigen"},{componentChunkName:"component---src-templates-blog-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"best-free-download-manager-for-mac.json",path:"/best-free-download-manager-for-mac"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-contact-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],s=[],a=function(){var e=o();e&&(s.push(e),n(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a=n("./.cache/api-runner-browser.js"),r=n("./node_modules/react/react.js"),u=t(r),i=n("./node_modules/react-dom/index.js"),l=t(i),d=n("./node_modules/react-router-dom/index.js"),c=n("./node_modules/react-router-scroll/lib/index.js"),m=n("./node_modules/history/createBrowserHistory.js"),p=t(m),g=n("./node_modules/domready/ready.js"),f=t(g),h=n("./.cache/emitter.js"),b=t(h),j=n("./.cache/pages.json"),y=t(j),x=n("./.cache/component-renderer.js"),_=t(x),v=n("./.cache/async-requires.js"),w=t(v),P=n("./.cache/loader.js"),R=t(P);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=b.default,R.default.addPagesArray(y.default),R.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=R.default,window.matchPath=d.matchPath,(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,a.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var t=function(e){function o(t){t.page.path===R.default.getPage(e).path&&(b.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){b.default.off("onPostLoadPageResources",o),b.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);R.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):b.default.on("onPostLoadPageResources",o)}};window.___navigateTo=t;var i=(0,p.default)();(0,a.apiRunner)("onRouteUpdate",{location:i.location,action:i.action});var m=(0,a.apiRunner)("replaceRouterComponent",{history:i})[0],g=function(e){var o=e.children;return u.default.createElement(d.Router,{history:i},o)};R.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,r.createElement)(m?m:g,null,(0,r.createElement)(c.ScrollContext,{shouldUpdateScroll:o},(0,r.createElement)((0,d.withRouter)(_.default),{layout:!0,children:function(o){return(0,r.createElement)(d.Route,{render:function(n){e(n.history);var t=o?o:n;return R.default.getPage(t.location.pathname)?(0,r.createElement)(_.default,s({page:!0},t)):(0,r.createElement)(_.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,f.default)(function(){return l.default.render(u.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./.cache/emitter.js"),a=t(s),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,t=n.documentElement.doScroll,s="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(s,e=function(){for(n.removeEventListener(s,e),a=1;e=o.shift();)e()}),function(e){a?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),s=n.e,a=n.s;n.e=function(t,r){var u=!1,i=!0,l=function(e){r&&(r(n,e),r=null)};return!a&&o&&o[t]?void l(!0):(s(t,function(){u||(u=!0,i?setTimeout(function(){l()}):l())}),void(u||(i=!1,e(function(){u||(u=!0,a?a[t]=void 0:(o||(o={}),o[t]=!0),l(!0))}))))}}t()},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/process/browser.js":function(e,o){function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(d===setTimeout)return setTimeout(e,0);if((d===n||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(o){try{return d.call(null,e,0)}catch(o){return d.call(this,e,0)}}}function a(e){if(c===clearTimeout)return clearTimeout(e);if((c===t||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(o){try{return c.call(null,e)}catch(o){return c.call(this,e)}}}function r(){f&&p&&(f=!1,p.length?g=p.concat(g):h=-1,g.length&&u())}function u(){if(!f){var e=s(r);f=!0;for(var o=g.length;o;){for(p=g,g=[];++h<o;)p&&p[h].run();h=-1,o=g.length}p=null,f=!1,a(e)}}function i(e,o){this.fun=e,this.array=o}function l(){}var d,c,m=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:n}catch(e){d=n}try{c="function"==typeof clearTimeout?clearTimeout:t}catch(e){c=t}}();var p,g=[],f=!1,h=-1;m.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];g.push(new i(e,o)),1!==g.length||f||s(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=l,m.addListener=l,m.once=l,m.off=l,m.removeListener=l,m.removeAllListeners=l,m.emit=l,m.prependListener=l,m.prependOnceListener=l,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9427c64ab85d,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-js!./src/pages/about.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xefeaa6d1881d,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-contact-js!./src/pages/contact.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(70144966829960,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/contact.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(35783957827783,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-templates-blog-post-js!./src/templates/blog-post.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x620f737b6699,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/josiah/Programming/Web/fracturedloop.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/blog-post.js')})})}},"../node_modules/gatsby-plugin-catch-links/catch-links.js":function(e,o){"use strict";e.exports=function(e,o){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var n=null,t=e.target;t.parentNode;t=t.parentNode)if("A"===t.nodeName){n=t;break}if(!n)return!0;if(n.target&&"_self"!==n.target.toLowerCase())return!0;if(n.pathname===window.location.pathname&&""!==n.target.hash)return!0;if(n.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var s=document.createElement("a");s.href=n.href;var a=document.createElement("a");return a.href=window.location.href,s.host!==a.host||(e.preventDefault(),o(n.getAttribute("href")),!1)})}},"../node_modules/gatsby-plugin-catch-links/gatsby-browser.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/gatsby-link/index.js"),a=n("../node_modules/gatsby-plugin-catch-links/catch-links.js"),r=t(a);(0,r.default)(window,function(e){(0,s.navigateTo)(e)})}});
//# sourceMappingURL=app-de6214b89a3915716b88.js.map