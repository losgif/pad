(self.webpackChunkblog_web=self.webpackChunkblog_web||[]).push([[720],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),h=a,m=s["".concat(i,".").concat(h)]||s[h]||p[h]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7135:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],c={slug:"debounce-and-throttle.html",title:"JavaScript \u4e2d\u7684\u9632\u6296\u548c\u8282\u6d41",author:"losgif",author_title:"\u524d\u7aef\u5f00\u53d1\u8005",author_url:"https://github.com/losgif",author_image_url:"https://avatars.githubusercontent.com/u/13404752?v=4",tags:["\u6559\u7a0b","\u8282\u6d41\u548c\u9632\u6296","JavaScript"]},i=void 0,u={permalink:"/en/blog/debounce-and-throttle.html",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-04-20-debounce-and-throttle.md",source:"@site/blog/2020-04-20-debounce-and-throttle.md",title:"JavaScript \u4e2d\u7684\u9632\u6296\u548c\u8282\u6d41",description:"\u4f7f\u7528\u573a\u666f",date:"2020-04-20T00:00:00.000Z",formattedDate:"April 20, 2020",tags:[{label:"\u6559\u7a0b",permalink:"/en/blog/tags/\u6559\u7a0b"},{label:"\u8282\u6d41\u548c\u9632\u6296",permalink:"/en/blog/tags/\u8282\u6d41\u548c\u9632\u6296"},{label:"JavaScript",permalink:"/en/blog/tags/java-script"}],readingTime:.71,truncated:!1,nextItem:{title:"Vue 2 \u5347\u7ea7 TypeScript \u7b80\u5355\u98df\u7528\u65b9\u5f0f",permalink:"/en/blog/vuejs2-typescript.html"}},d=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",children:[{value:"\u9632\u6296\u51fd\u6570",id:"\u9632\u6296\u51fd\u6570",children:[]},{value:"\u8282\u6d41\u51fd\u6570",id:"\u8282\u6d41\u51fd\u6570",children:[]}]},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[{value:"\u9632\u6296\uff1a",id:"\u9632\u6296\uff1a",children:[]},{value:"\u8282\u6d41",id:"\u8282\u6d41",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[{value:"\u9632\u6296\uff1a",id:"\u9632\u6296\uff1a-1",children:[]},{value:"\u8282\u6d41\uff1a",id:"\u8282\u6d41\uff1a",children:[]},{value:"\u533a\u522b\uff1a",id:"\u533a\u522b\uff1a",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u5728\u8fdb\u884c\u7a97\u53e3\u7684resize\u3001scroll\uff0c\u8f93\u5165\u6846\u5185\u5bb9\u6821\u9a8c\u7b49\u64cd\u4f5c\u65f6\uff0c\u5982\u679c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u8c03\u7528\u7684\u9891\u7387\u65e0\u9650\u5236\uff0c\u4f1a\u52a0\u91cd\u6d4f\u89c8\u5668\u7684\u8d1f\u62c5\uff0c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u975e\u5e38\u7cdf\u7cd5\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u91c7\u7528debounce\uff08\u9632\u6296\uff09\u548cthrottle\uff08\u8282\u6d41\uff09\u7684\u65b9\u5f0f\u6765\u51cf\u5c11\u8c03\u7528\u9891\u7387\uff0c\u540c\u65f6\u53c8\u4e0d\u5f71\u54cd\u5b9e\u9645\u6548\u679c\u3002"),(0,l.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.kt)("h3",{id:"\u9632\u6296\u51fd\u6570"},"\u9632\u6296\u51fd\u6570"),(0,l.kt)("p",null,"\u9632\u6296\uff08debounce\uff09\uff1a\u5f53\u6301\u7eed\u89e6\u53d1\u4e8b\u4ef6\u65f6\uff0c\u4e00\u5b9a\u65f6\u95f4\u6bb5\u5185\u6ca1\u6709\u518d\u89e6\u53d1\u4e8b\u4ef6\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u624d\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c\u8bbe\u5b9a\u7684\u65f6\u95f4\u5230\u6765\u4e4b\u524d\uff0c\u53c8\u4e00\u6b21\u89e6\u53d1\u4e86\u4e8b\u4ef6\uff0c\u5c31\u91cd\u65b0\u5f00\u59cb\u5ef6\u65f6\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5982\u4e0b\u56fe\uff0c\u6301\u7eed\u89e6\u53d1scroll\u4e8b\u4ef6\u65f6\uff0c\u5e76\u4e0d\u6267\u884chandle\u51fd\u6570\uff0c\u5f531000\u6beb\u79d2\u5185\u6ca1\u6709\u89e6\u53d1scroll\u4e8b\u4ef6\u65f6\uff0c\u624d\u4f1a\u5ef6\u65f6\u89e6\u53d1scroll\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://res-static.hc-cdn.cn/fms/img/6862e0a0a403e16445761f89e2966fb71603448561229",alt:"debounce.png"})),(0,l.kt)("h3",{id:"\u8282\u6d41\u51fd\u6570"},"\u8282\u6d41\u51fd\u6570"),(0,l.kt)("p",null,"\u8282\u6d41\uff08throttle\uff09\uff1a\u5f53\u6301\u7eed\u89e6\u53d1\u4e8b\u4ef6\u65f6\uff0c\u4fdd\u8bc1\u4e00\u5b9a\u65f6\u95f4\u6bb5\u5185\u53ea\u8c03\u7528\u4e00\u6b21\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u8282\u6d41\u901a\u4fd7\u89e3\u91ca\u5c31\u6bd4\u5982\u6211\u4eec\u6c34\u9f99\u5934\u653e\u6c34\uff0c\u9600\u95e8\u4e00\u6253\u5f00\uff0c\u6c34\u54d7\u54d7\u7684\u5f80\u4e0b\u6d41\uff0c\u79c9\u7740\u52e4\u4fed\u8282\u7ea6\u7684\u4f18\u826f\u4f20\u7edf\u7f8e\u5fb7\uff0c\u6211\u4eec\u8981\u628a\u6c34\u9f99\u5934\u5173\u5c0f\u70b9\uff0c\u6700\u597d\u662f\u5982\u6211\u4eec\u5fc3\u610f\u6309\u7167\u4e00\u5b9a\u89c4\u5f8b\u5728\u67d0\u4e2a\u65f6\u95f4\u95f4\u9694\u5185\u4e00\u6ef4\u4e00\u6ef4\u7684\u5f80\u4e0b\u6ef4\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5982\u4e0b\u56fe\uff0c\u6301\u7eed\u89e6\u53d1scroll\u4e8b\u4ef6\u65f6\uff0c\u5e76\u4e0d\u7acb\u5373\u6267\u884chandle\u51fd\u6570\uff0c\u6bcf\u96941000\u6beb\u79d2\u624d\u4f1a\u6267\u884c\u4e00\u6b21handle\u51fd\u6570\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://res-static.hc-cdn.cn/fms/img/3d0c29700d9a89ef7d33a2d7ac2e9fb31603448561230",alt:"throttle.png"})),(0,l.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u9632\u6296\uff1a"},"\u9632\u6296\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u9632\u6296\nfunction debounce (fn: Function, wait) {\n  var timeout = null;\n  return function () {\n    if (timeout !== null) {\n      clearTimeout(timeout);\n    }\n\n    timeout = setTimeout(fn, wait);\n  }\n}\n\n// \u5904\u7406\u51fd\u6570\nfunction handle () {\n  console.log(Math.random());\n}\n\n// \u6eda\u52a8\u4e8b\u4ef6\nwindow.addEventListener('scroll', debounce(handle, 1000));\n")),(0,l.kt)("p",null,"\u5f53\u6301\u7eed\u89e6\u53d1scroll\u4e8b\u4ef6\u65f6\uff0c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570handle\u53ea\u5728\u505c\u6b62\u6eda\u52a81000\u6beb\u79d2\u4e4b\u540e\u624d\u4f1a\u8c03\u7528\u4e00\u6b21\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u8bf4\u5728\u6301\u7eed\u89e6\u53d1scroll\u4e8b\u4ef6\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570handle\u4e00\u76f4\u6ca1\u6709\u6267\u884c\u3002"),(0,l.kt)("h3",{id:"\u8282\u6d41"},"\u8282\u6d41"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"var throttle = function (func, delay) {\n  var timer = null;\n  return function () {\n    var context = this;\n    var args = arguments;\n\n    if (!timer) {\n      timer = setTimeout(function () {\n        func.call(context, args);\n        timer = null;\n      }, delay);\n    }\n  }\n}\n\nfunction handle () {\n  console.log(Math.random());\n}\n\nwindow.addEventListener('scroll', throttle(handle, 1000));\n")),(0,l.kt)("p",null,"\u5f53\u89e6\u53d1\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u6211\u4eec\u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u518d\u6b21\u89e6\u53d1\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u5982\u679c\u5b9a\u65f6\u5668\u5b58\u5728\uff0c\u5c31\u4e0d\u6267\u884c\uff0c\u76f4\u5230delay\u65f6\u95f4\u540e\uff0c\u5b9a\u65f6\u5668\u6267\u884c\u6267\u884c\u51fd\u6570\uff0c\u5e76\u4e14\u6e05\u7a7a\u5b9a\u65f6\u5668\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u8bbe\u7f6e\u4e0b\u4e2a\u5b9a\u65f6\u5668\u3002\u5f53\u7b2c\u4e00\u6b21\u89e6\u53d1\u4e8b\u4ef6\u65f6\uff0c\u4e0d\u4f1a\u7acb\u5373\u6267\u884c\u51fd\u6570\uff0c\u800c\u662f\u5728delay\u79d2\u540e\u624d\u6267\u884c\u3002\u800c\u540e\u518d\u600e\u4e48\u9891\u7e41\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4e5f\u90fd\u662f\u6bcfdelay\u65f6\u95f4\u624d\u6267\u884c\u4e00\u6b21\u3002\u5f53\u6700\u540e\u4e00\u6b21\u505c\u6b62\u89e6\u53d1\u540e\uff0c\u7531\u4e8e\u5b9a\u65f6\u5668\u7684delay\u5ef6\u8fdf\uff0c\u53ef\u80fd\u8fd8\u4f1a\u6267\u884c\u4e00\u6b21\u51fd\u6570\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("h3",{id:"\u9632\u6296\uff1a-1"},"\u9632\u6296\uff1a"),(0,l.kt)("p",null,"\u5c06\u51e0\u6b21\u64cd\u4f5c\u5408\u5e76\u4e3a\u4e00\u6b64\u64cd\u4f5c\u8fdb\u884c\u3002\u539f\u7406\u662f\u7ef4\u62a4\u4e00\u4e2a\u8ba1\u65f6\u5668\uff0c\u89c4\u5b9a\u5728delay\u65f6\u95f4\u540e\u89e6\u53d1\u51fd\u6570\uff0c\u4f46\u662f\u5728delay\u65f6\u95f4\u5185\u518d\u6b21\u89e6\u53d1\u7684\u8bdd\uff0c\u5c31\u4f1a\u53d6\u6d88\u4e4b\u524d\u7684\u8ba1\u65f6\u5668\u800c\u91cd\u65b0\u8bbe\u7f6e\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u53ea\u6709\u6700\u540e\u4e00\u6b21\u64cd\u4f5c\u80fd\u88ab\u89e6\u53d1\u3002"),(0,l.kt)("h3",{id:"\u8282\u6d41\uff1a"},"\u8282\u6d41\uff1a"),(0,l.kt)("p",null,"\u4f7f\u5f97\u4e00\u5b9a\u65f6\u95f4\u5185\u53ea\u89e6\u53d1\u4e00\u6b21\u51fd\u6570\u3002\u539f\u7406\u662f\u901a\u8fc7\u5224\u65ad\u662f\u5426\u5230\u8fbe\u4e00\u5b9a\u65f6\u95f4\u6765\u89e6\u53d1\u51fd\u6570\u3002"),(0,l.kt)("h3",{id:"\u533a\u522b\uff1a"},"\u533a\u522b\uff1a"),(0,l.kt)("p",null,"\u51fd\u6570\u8282\u6d41\u4e0d\u7ba1\u4e8b\u4ef6\u89e6\u53d1\u6709\u591a\u9891\u7e41\uff0c\u90fd\u4f1a\u4fdd\u8bc1\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u4e00\u5b9a\u4f1a\u6267\u884c\u4e00\u6b21\u771f\u6b63\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u800c\u51fd\u6570\u9632\u6296\u53ea\u662f\u5728\u6700\u540e\u4e00\u6b21\u4e8b\u4ef6\u540e\u624d\u89e6\u53d1\u4e00\u6b21\u51fd\u6570\u3002 \u6bd4\u5982\u5728\u9875\u9762\u7684\u65e0\u9650\u52a0\u8f7d\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u9700\u8981\u7528\u6237\u5728\u6eda\u52a8\u9875\u9762\u65f6\uff0c\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u53d1\u4e00\u6b21 Ajax \u8bf7\u6c42\uff0c\u800c\u4e0d\u662f\u5728\u7528\u6237\u505c\u4e0b\u6eda\u52a8\u9875\u9762\u64cd\u4f5c\u65f6\u624d\u53bb\u8bf7\u6c42\u6570\u636e\u3002\u8fd9\u6837\u7684\u573a\u666f\uff0c\u5c31\u9002\u5408\u7528\u8282\u6d41\u6280\u672f\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.lodashjs.com/docs/lodash.debounce"},"https://www.lodashjs.com/docs/lodash.debounce"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.huaweicloud.com/articles/d3842d8455d26db6868c19c7daced54b.html"},"https://www.huaweicloud.com/articles/d3842d8455d26db6868c19c7daced54b.html"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://dev.to/heymarkkop/debounce-x-throttle-23k5"},"https://dev.to/heymarkkop/debounce-x-throttle-23k5")))}s.isMDXComponent=!0}}]);