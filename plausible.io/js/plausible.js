!function(){var a=window.location,o=window.document,t=o.currentScript,r=t.getAttribute("data-api")||new URL(t.src).origin+"/api/event",l=t.getAttribute("data-domain");function s(t,i,e){i&&console.warn("Ignoring Event: "+i),e&&e.callback&&e.callback()}function i(t,i){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return s(0,"localhost",i);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return s(0,null,i);try{if("true"===window.localStorage.plausible_ignore)return s(0,"localStorage flag",i)}catch(t){}var e,n={};n.n=t,n.u=a.href,n.d=l,n.r=o.referrer||null,i&&i.meta&&(n.m=JSON.stringify(i.meta)),i&&i.props&&(n.p=i.props),t=r,n=n,e=i,window.fetch&&fetch(t,{method:"POST",headers:{"Content-Type":"text/plain"},keepalive:!0,body:JSON.stringify(n)}).then(function(t){e&&e.callback&&e.callback({status:t.status})})}var e=window.plausible&&window.plausible.q||[];window.plausible=i;for(var n,c=0;c<e.length;c++)i.apply(this,e[c]);function p(t){t&&n===a.pathname||(n=a.pathname,i("pageview"))}function w(){p(!0)}var u,t=window.history;t.pushState&&(u=t.pushState,t.pushState=function(){u.apply(this,arguments),w()},window.addEventListener("popstate",w)),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){n||"visible"!==o.visibilityState||p()}):p()}();