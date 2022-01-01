"use strict";(self.webpackChunkblog_web=self.webpackChunkblog_web||[]).push([[9838],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=l,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5816:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return m}});var n=r(7462),l=r(3366),i=(r(7294),r(3905)),a=["components"],o={slug:"build-docker-image-in-docker-with-gitlab-ci.html",title:"\u901a\u8fc7Gitlab CI\u6784\u5efaDocker\u955c\u50cf",author:"losgif",author_title:"\u524d\u7aef\u5f00\u53d1\u8005",author_url:"https://github.com/losgif",author_image_url:"https://avatars.githubusercontent.com/u/13404752?v=4",tags:["Docker","Gitlab CI","dind","Docker Image"]},c=void 0,u={permalink:"/blog/build-docker-image-in-docker-with-gitlab-ci.html",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-01-01-build-docker-image-docker-with-gitlab-ci.md",source:"@site/blog/2021-01-01-build-docker-image-docker-with-gitlab-ci.md",title:"\u901a\u8fc7Gitlab CI\u6784\u5efaDocker\u955c\u50cf",description:"\u524d\u60c5\u63d0\u8981",date:"2021-01-01T00:00:00.000Z",formattedDate:"2021\u5e741\u67081\u65e5",tags:[{label:"Docker",permalink:"/blog/tags/docker"},{label:"Gitlab CI",permalink:"/blog/tags/gitlab-ci"},{label:"dind",permalink:"/blog/tags/dind"},{label:"Docker Image",permalink:"/blog/tags/docker-image"}],readingTime:1.64,truncated:!1,authors:[{name:"losgif",title:"\u524d\u7aef\u5f00\u53d1\u8005",url:"https://github.com/losgif",imageURL:"https://avatars.githubusercontent.com/u/13404752?v=4"}],nextItem:{title:"JavaScript \u4e2d\u7684\u9632\u6296\u548c\u8282\u6d41",permalink:"/blog/debounce-and-throttle.html"}},p={authorsImageUrls:[void 0]},d=[{value:"\u524d\u60c5\u63d0\u8981",id:"\u524d\u60c5\u63d0\u8981",children:[],level:2},{value:"\u6784\u5efa",id:"\u6784\u5efa",children:[{value:"Dockerfile",id:"dockerfile",children:[],level:3},{value:".gitlab-ci.yml",id:"gitlab-ciyml",children:[],level:3}],level:2},{value:"\u63a8\u9001",id:"\u63a8\u9001",children:[],level:2}],s={toc:d};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u60c5\u63d0\u8981"},"\u524d\u60c5\u63d0\u8981"),(0,i.kt)("p",null,"Gitlab CI \u73af\u5883\u4e00\u822c\u6709\uff1adocker, shell\u3002\u672c\u6587\u8ba8\u8bba\u5728docker\u8fd0\u884c\u73af\u5883\u4e2d\u5982\u4f55\u518d\u6b21\u6784\u5efaDocker\u955c\u50cf\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u6709\u70b9\u5148\u6709\u9e21\u8fd8\u662f\u5148\u6709\u86cb\u7684\u610f\u601d\uff0c\u6240\u4ee5docker\u7684\u89e3\u51b3\u65b9\u6848\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"dind"),"\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"dind")," \u6307\u7684\u662f Docker in Docker\uff0c\u4e00\u79cd\u5728docker\u5bb9\u5668\u5185\u4f7f\u7528docker\u7684\u65b9\u6cd5")),(0,i.kt)("h2",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,i.kt)("p",null,"\u9996\u5148\u770b\u4e0b\u6587\u4ef6\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree     \n.\n\u251c\u2500\u2500 .gitlab-ci.yml\n\u2514\u2500\u2500 Dockerfile\n\n0 directories, 3 files\n\n")),(0,i.kt)("h3",{id:"dockerfile"},"Dockerfile"),(0,i.kt)("p",null,"\u4e0d\u5fc5\u591a\u8bf4\uff0cdocker\u6784\u5efa\u955c\u50cf\u5fc5\u5907\u6587\u4ef6"),(0,i.kt)("h3",{id:"gitlab-ciyml"},".gitlab-ci.yml"),(0,i.kt)("p",null,"gitlab ci \u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("p",null,"\u76f4\u63a5\u770b\u4e0b\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# This file is a template, and might need editing before it works on your project.\nbuild:\n  tags:\n    - docker-ci-runner\n  # Official docker image.\n  image: docker:latest\n  services:\n    - docker:dind\n  before_script:\n    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY\n  script:\n    - docker build --tag "$CI_REGISTRY_IMAGE:$CI_COMMIT_TAG" .\n    - docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_TAG"\n  only:\n    # \u4ec5\u8fd0\u884c\u5728\u6dfb\u52a0\u6807\u7b7e\u65f6\n    - tags\n\n')),(0,i.kt)("p",null,"\u524d\u7f6e\u77e5\u8bc6\u9700\u8981\u4e86\u89e3 .gitlab-ci.yml \u914d\u7f6e",(0,i.kt)("br",{parentName:"p"}),"\n","\u6587\u6863\u53ef\u4ee5\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/yaml/index.html"},"\u8fd9\u91cc"),(0,i.kt)("br",{parentName:"p"}),"\n","\u5185\u5bb9\u5f88\u7b80\u5355\uff0c\u58f0\u660eimage\u3001tags\u3001script\u3001only\u3001services",(0,i.kt)("br",{parentName:"p"}),"\n","\u4e3b\u8981\u5173\u6ce8services\u5185\u58f0\u660e\u4f7f\u7528\u4e86docker:dind\uff0c\u501f\u6b64\u53ef\u4ee5\u5b8c\u6210docker\u5bb9\u5668 \u5185\u6784\u5efadocker \u955c\u50cf\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'docker build --tag "$CI_REGISTRY_IMAGE:$CI_COMMIT_TAG" .\n')),(0,i.kt)("p",null,"\u6b64\u547d\u4ee4\u5b8c\u6210\u4e86\u6784\u5efa\u955c\u50cf\u4efb\u52a1\uff0c\u4e14\u4f7f\u7528git\u6807\u7b7e\u540d\u4f5c\u4e3a\u955c\u50cf\u6807\u7b7e\u3002"),(0,i.kt)("h2",{id:"\u63a8\u9001"},"\u63a8\u9001"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_TAG"\n')),(0,i.kt)("p",null,"Gitlab CE\u7248\u672c\u4e5f\u662f\u652f\u6301docker\u955c\u50cf\u5e93\u7684\uff0c\u4e0a\u9762\u7684\u914d\u7f6e\u53ef\u4ee5\u5b8c\u6210\u63a8\u9001\u81f3\u955c\u50cf\u5e93\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u81f3\u6b64\u5b8c\u6210\u4e86\u955c\u50cf\u6784\u5efa\u548c\u63a8\u9001\u3002"))}m.isMDXComponent=!0}}]);