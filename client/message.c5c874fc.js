import{c as e,d as t,b as n,A as s,B as a,x as o,l as r,u as i,s as c,y as l,h as $,e as m,f as p,g as u,i as f,m as d,a as g,J as h}from"./chunk.9276dc34.js";import{d as v,c as k}from"./chunk.7fda16e5.js";import"./chunk.0a41e55b.js";import{a as b}from"./chunk.f06b9ea2.js";import"./chunk.a5c491ec.js";import{a as x}from"./chunk.591af4e4.js";function j(e){var t;return{c(){t=h("Toggle")},l(e){t=a(e,"Toggle")},m(e,n){r(e,t,n)},d(e){e&&$(t)}}}function w(e){var t;return{c(){t=h("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit")},l(e){t=a(e,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit")},m(e,n){r(e,t,n)},d(e){e&&$(t)}}}function M(e){var t,n,g,h=new v({props:{class:"block",$$slots:{default:[j]},$$scope:{ctx:e}}});h.$on("click",e.click_handler);var b=new k({props:{active:!e.open,title:"Default",$$slots:{default:[w]},$$scope:{ctx:e}}});return b.$on("close",e.close_handler),{c(){t=m("div"),h.$$.fragment.c(),n=s(),b.$$.fragment.c(),this.h()},l(e){t=p(e,"DIV",{slot:!0},!1);var s=u(t);h.$$.fragment.l(s),n=a(s,"\n    "),b.$$.fragment.l(s),s.forEach($),this.h()},h(){f(t,"slot","preview")},m(e,s){r(e,t,s),o(h,t,null),d(t,n),o(b,t,null),g=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),h.$set(n);var s={};e.open&&(s.active=!t.open),e.$$scope&&(s.$$scope={changed:e,ctx:t}),b.$set(s)},i(e){g||(i(h.$$.fragment,e),i(b.$$.fragment,e),g=!0)},o(e){c(h.$$.fragment,e),c(b.$$.fragment,e),g=!1},d(e){e&&$(t),l(h),l(b)}}}function B(e){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function _(e){var t,n,m=new b({props:{title:"Message",subtitle:"Message blocks to convey information"}}),p=new x({props:{code:'<script>\n  import { Button, Message } from \'svelma\'\n\n  let open\n<\/script>\n\n<Button class="block" on:click={() => open = !open}>Toggle</Button>\n<Message active={!open} title="Default"\n  on:close={active => open = active}>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Fusce id fermentum quam. Proin sagittis, nibh id\n  hendrerit imperdiet, elit sapien laoreet elit\n</Message>',$$slots:{default:[B],preview:[M]},$$scope:{ctx:e}}});return{c(){m.$$.fragment.c(),t=s(),p.$$.fragment.c()},l(e){m.$$.fragment.l(e),t=a(e,"\n\n"),p.$$.fragment.l(e)},m(e,s){o(m,e,s),r(e,t,s),o(p,e,s),n=!0},p(e,t){var n={};(e.$$scope||e.open)&&(n.$$scope={changed:e,ctx:t}),p.$set(n)},i(e){n||(i(m.$$.fragment,e),i(p.$$.fragment,e),n=!0)},o(e){c(m.$$.fragment,e),c(p.$$.fragment,e),n=!1},d(e){l(m,e),e&&$(t),l(p,e)}}}function q(e,t,n){let s;return{open:s,click_handler:function(){const e=s=!s;return n("open",s),e},close_handler:function(e){const t=s=e;return n("open",s),t}}}export default class extends e{constructor(e){super(),t(this,e,q,_,n,[])}}
//# sourceMappingURL=message.c5c874fc.js.map
