"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7572],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9473:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=a(2122),r=a(9756),s=(a(7294),a(3905)),i=["components"],l={id:"user_status",title:"User status"},o=void 0,u={unversionedId:"pro/user_status",id:"pro/user_status",isDocsHomePage:!1,title:"User status",description:"Centrifugo OSS provides a presence feature for channels. It works well (for channels with reasonably small number of active subscribers though), but sometimes you may need a bit different functionality.",source:"@site/docs/pro/user_status.md",sourceDirName:"pro",slug:"/pro/user_status",permalink:"/docs/pro/user_status",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/user_status.md",version:"current",frontMatter:{id:"user_status",title:"User status"},sidebar:"Pro",previous:{title:"Analytics with ClickHouse",permalink:"/docs/pro/analytics"},next:{title:"Operation throttling",permalink:"/docs/pro/throttling"}},p=[{value:"Client-side status update RPC",id:"client-side-status-update-rpc",children:[]},{value:"update_user_status server API",id:"update_user_status-server-api",children:[]},{value:"get_user_status server API",id:"get_user_status-server-api",children:[]},{value:"delete_user_status server API",id:"delete_user_status-server-api",children:[]},{value:"Configuration",id:"configuration",children:[]}],d={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Centrifugo OSS provides a presence feature for channels. It works well (for channels with reasonably small number of active subscribers though), but sometimes you may need a bit different functionality."),(0,s.kt)("p",null,"What if you want to get a specific user status based on its recent activity in application? You can create a personal channel with a presence enabled for each user. It will show that user has an active connection with a server. But this won't show whether user did some actions in an application recently or just left it open while not actually using it."),(0,s.kt)("p",null,"User status feature of Centrifugo PRO allows calling a special RPC method from a client side when a user makes a useful action in an application (clicks on buttons, uses a mouse \u2013 whatever means that user really uses application at the moment). This call sets a time of last user activity in Redis, and this information can then be queried over Centrifugo PRO server API."),(0,s.kt)("p",null,"The feature can be useful for chat applications when you need to get online/activity status for a list of buddies (Centrifugo supports batch requests to user status information \u2013 i.e. ask for many users in one call)."),(0,s.kt)("h3",{id:"client-side-status-update-rpc"},"Client-side status update RPC"),(0,s.kt)("p",null,"Centrifugo PRO provides a built-in RPC method of client API called ",(0,s.kt)("inlineCode",{parentName:"p"},"update_user_status"),". Call it with empty parameters from a client side whenever user performs a useful action that proves it's active status in your app. For example, in Javascript:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"await centrifuge.namedRPC('update_user_status', {});\n")),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Don't forget to debounce this method calls on a client side to avoid exposing RPC on every mouse move event for example."))),(0,s.kt)("p",null,"This RPC call sets user's last active time value in Redis (with sharding and Cluster support). Information about active status will be kept in Redis for a configured time interval, then expire."),(0,s.kt)("h3",{id:"update_user_status-server-api"},"update_user_status server API"),(0,s.kt)("p",null,"It's also possible to call ",(0,s.kt)("inlineCode",{parentName:"p"},"update_user_status")," using Centrifugo server API (for example if you want to force status during application development or you want to proxy status updates over your app backend when using unidirectional transports):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "update_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n')),(0,s.kt)("h4",{id:"update-user-status-params"},"Update user status params"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,s.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"users"),(0,s.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,s.kt)("td",{parentName:"tr",align:null},"yes"),(0,s.kt)("td",{parentName:"tr",align:null},"List of users to update status for")))),(0,s.kt)("h4",{id:"update-user-status-result"},"Update user status result"),(0,s.kt)("p",null,"Empty object at the moment."),(0,s.kt)("h3",{id:"get_user_status-server-api"},"get_user_status server API"),(0,s.kt)("p",null,"Now on a backend side you have access to a bulk API to effectively get status of particular users."),(0,s.kt)("p",null,"Call RPC method of server API (over HTTP or GRPC):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "get_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n')),(0,s.kt)("p",null,"You should get a response like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result":{\n        "statuses":[\n            {\n                "user":"42",\n                "active":1627107289,\n                "online":1627107289\n            }\n        ]\n    }\n}\n')),(0,s.kt)("p",null,"In case information about last status update time not available the response will be like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result":{\n        "statuses":[\n            {\n                "user":"42"\n            }\n        ]\n    }\n}\n')),(0,s.kt)("p",null,"I.e. status object will present in a response but ",(0,s.kt)("inlineCode",{parentName:"p"},"active")," field won't be set for status object."),(0,s.kt)("p",null,"Note that Centrifugo also maintains ",(0,s.kt)("inlineCode",{parentName:"p"},"online")," field inside user status object. This field updated periodically by Centrifugo itself while user has active connection with a server. So you can draw ",(0,s.kt)("inlineCode",{parentName:"p"},"away")," statuses in your application: i.e. when user connected (",(0,s.kt)("inlineCode",{parentName:"p"},"online")," time) but not using application for a long time (",(0,s.kt)("inlineCode",{parentName:"p"},"active")," time)."),(0,s.kt)("h4",{id:"get-user-status-params"},"Get user status params"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,s.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"users"),(0,s.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,s.kt)("td",{parentName:"tr",align:null},"yes"),(0,s.kt)("td",{parentName:"tr",align:null},"List of users to get status for")))),(0,s.kt)("h4",{id:"get-user-status-result"},"Get user status result"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field name"),(0,s.kt)("th",{parentName:"tr",align:null},"Field type"),(0,s.kt)("th",{parentName:"tr",align:null},"Optional"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"statuses"),(0,s.kt)("td",{parentName:"tr",align:null},"array of UserStatus"),(0,s.kt)("td",{parentName:"tr",align:null},"no"),(0,s.kt)("td",{parentName:"tr",align:null},"Statuses for each user in params (same order)")))),(0,s.kt)("h4",{id:"userstatus"},"UserStatus"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field name"),(0,s.kt)("th",{parentName:"tr",align:null},"Field type"),(0,s.kt)("th",{parentName:"tr",align:null},"Optional"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"user"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"no"),(0,s.kt)("td",{parentName:"tr",align:null},"User ID")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"active"),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"yes"),(0,s.kt)("td",{parentName:"tr",align:null},"Last active time (Unix seconds)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"online"),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"yes"),(0,s.kt)("td",{parentName:"tr",align:null},"Last online time (Unix seconds)")))),(0,s.kt)("h3",{id:"delete_user_status-server-api"},"delete_user_status server API"),(0,s.kt)("p",null,"If you need to clear user status information for some reason there is a ",(0,s.kt)("inlineCode",{parentName:"p"},"delete_user_status")," server API call:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "delete_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n')),(0,s.kt)("h4",{id:"delete-user-status-params"},"Delete user status params"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,s.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"users"),(0,s.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,s.kt)("td",{parentName:"tr",align:null},"yes"),(0,s.kt)("td",{parentName:"tr",align:null},"List of users to delete status for")))),(0,s.kt)("h4",{id:"delete-user-status-result"},"Delete user status result"),(0,s.kt)("p",null,"Empty object at the moment."),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"To enable Redis active status feature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "redis_active_status": {\n        "enabled": true,\n        "redis_address": "127.0.0.1:6379"\n    }\n}\n')),(0,s.kt)("p",null,"Redis configuration for user status feature matches Centrifugo Redis engine configuration. So Centrifugo supports client-side consistent sharding to scale Redis, Redis Sentinel, Redis Cluster for user status feature too."),(0,s.kt)("p",null,"It's also possible to reuse Centrifugo Redis engine by setting ",(0,s.kt)("inlineCode",{parentName:"p"},"use_redis_from_engine")," option instead of custom throttling Redis address declaration, like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_address": "localhost:6379",\n    "redis_active_status": {\n        "enabled": true,\n        "use_redis_from_engine": true,\n    }\n}\n')),(0,s.kt)("p",null,"In this case Redis active status will simply connect to Redis instances configured for Centrifugo Redis engine."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"expire_interval")," is a ",(0,s.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")," for how long Redis keys will be kept for each user. Expiration time extended on every update. By default expiration time is 31 day. To set it to 1 day:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "redis_active_status": {\n        ...\n        "expire_interval": "24h"\n    }\n}\n')))}c.isMDXComponent=!0}}]);