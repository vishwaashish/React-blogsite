"use strict";(self.webpackChunktechnotaught=self.webpackChunktechnotaught||[]).push([[562],{4849:function(e,s,i){var t=i(2791),n=i(1087),a=i(184),r=function(e){var s=e.posts,i=s.title,t=s.description,r=s.id,l=s.image,c=s.width;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"card shadow-s card-hover",style:{width:c},children:[(0,a.jsx)(n.OL,{to:"/post/"+r,state:e.posts,children:(0,a.jsxs)("div",{className:"imageoveray",children:[(0,a.jsx)("i",{className:"fa fa-link"}),(0,a.jsx)("img",{src:l,className:"cardstyle-img-3",alt:i})]})}),(0,a.jsxs)("div",{className:"cardstyle-body-3",children:[(0,a.jsx)(n.OL,{to:"/post/"+r,state:e.posts,children:(0,a.jsx)("h4",{className:"card-title",children:i})}),(0,a.jsx)("div",{className:"card-description",dangerouslySetInnerHTML:{__html:t}}),(0,a.jsx)(n.OL,{to:"/post/"+r,state:e.posts,children:"Read Article"})]})]})})};s.Z=t.memo(r)},6012:function(e,s,i){i.d(s,{fg:function(){return n},ue:function(){return t}});var t=function(e,s){var i=!!e&&(null===e||void 0===e?void 0:e.sort((function(){return s-Math.random()})));return!!i&&i.slice(0,s)},n=function(e,s){var i=!!e&&Math.floor(Math.random()*(null===e||void 0===e?void 0:e.length));return!!i&&e[i]}},4508:function(e,s,i){i(2791);var t=i(1575),n=i(184);s.Z=function(e){var s,i=(null===e||void 0===e?void 0:e.shareparam)||{},a=i.title,r=void 0===a?"":a,l=i.description,c=void 0===l?"":l,d=i.image_lg,o=void 0===d?"":d,h=window.location.href;return(0,n.jsxs)("div",{className:"sticky-social-share",children:[(0,n.jsx)(t.J,{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(h,"&quote=").concat(null!==(s=!!r)&&void 0!==s?s:""),children:(0,n.jsx)("i",{className:"fab fa-facebook"})}),(0,n.jsx)(t.J,{href:"http://twitter.com/share?text=".concat(null!==r&&void 0!==r?r:"","&url=").concat(h),children:(0,n.jsx)("i",{className:"fab fa-twitter"})}),(0,n.jsx)(t.J,{href:h,children:(0,n.jsx)("i",{className:"fa fa-rss"})}),(0,n.jsx)(t.J,{href:'"https://www.pinterest.com/pin/create/button/?url='.concat(h,"&media=").concat(null!==o&&void 0!==o?o:"","&description=").concat(null!==c&&void 0!==c?c:""),children:(0,n.jsx)("i",{className:"fab fa-pinterest"})}),(0,n.jsx)(t.J,{href:"https://wa.me/?text=".concat(h),children:(0,n.jsx)("i",{className:"fab fa-whatsapp"})})]})}},7562:function(e,s,i){i.r(s),i.d(s,{default:function(){return k}});var t=i(2791),n=i(1933),a=i(9017),r=i(1087),l=i(184),c=function(e){var s=e.posts,i=s.title,t=void 0===i?"":i,n=s.description,a=s.id,c=s.image,d=s.width;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"card",style:{width:d},children:[(0,l.jsx)(r.OL,{to:"/post/"+a,children:(0,l.jsx)("img",{src:c,className:"cardstyle-img-1",alt:t})}),(0,l.jsxs)("div",{className:"cardstyle-body-1",children:[(0,l.jsx)(r.OL,{to:"/post/"+a,children:(0,l.jsx)("h3",{className:"card-title",children:t&&t})}),(0,l.jsx)("div",{className:"card-description",dangerouslySetInnerHTML:{__html:n}}),(0,l.jsx)(r.OL,{to:"/post/"+a,children:(0,l.jsx)("button",{className:"outline",children:"Read Article"})})]})]})})},d=t.memo(c),o=function(e){var s=e.posts,i=s.title,t=s.description,n=s.id,a=s.width;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"card",style:{width:a},children:(0,l.jsxs)("div",{className:"cardstyle-body-2",children:[(0,l.jsxs)(r.OL,{to:"/post/"+n,children:[" ",(0,l.jsx)("h4",{className:"card-title",children:i})]}),(0,l.jsx)("div",{className:"card-description",dangerouslySetInnerHTML:{__html:t}}),(0,l.jsx)(r.OL,{to:"/post/"+n,className:"underline",state:e.posts,children:"Read Article"})]})})})},h=t.memo(o),m=i(4849),u=i(9439),x=function(e){var s=e.posts,i=s.data,n=s.isLoading,a=s.style,c=t.useState(1),d=(0,u.Z)(c,2),o=d[0],h=d[1],m=function(){return(0,l.jsx)("div",{style:{display:"flex",height:400,justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("svg",{className:"spinner",viewBox:"0 0 50 50",children:(0,l.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})})})};return(0,l.jsxs)("div",{className:"hero-carousel",style:a,children:[n?(0,l.jsx)(m,{}):null,!n&&(null===i||void 0===i?void 0:i.map((function(e,s){return s+1===o?(0,l.jsxs)("div",{className:"hero-slide",children:[(0,l.jsxs)("div",{className:"hero-data",children:[(0,l.jsx)("div",{className:"hero-title",children:e.title}),(0,l.jsx)(r.OL,{to:"/post/"+e.id,state:e,children:(0,l.jsx)("button",{children:"Read Article"})})]}),(0,l.jsx)("div",{className:"hero-overlay",children:(0,l.jsx)("img",{src:e.image,alt:e.title})})]},s):null}))),!n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{moveSlide:function(){o!==(null===i||void 0===i?void 0:i.length)?h(o+1):o===i.length&&h(1)},direction:"next"})," ",(0,l.jsx)(v,{moveSlide:function(){1!==o?h(o-1):1===o&&h(1)},direction:"prev"})," ",(0,l.jsx)("div",{className:"containerdots",children:Array.from({length:null===i||void 0===i?void 0:i.length}).map((function(e,s){return(0,l.jsx)("div",{onClick:function(){return function(e){h(e)}(s+1)},className:o===s+1?"dot active":"dot"},s)}))})]})]})},v=function(e){return(0,l.jsx)("button",{onClick:e.moveSlide,className:"next"===e.direction?"btn-slide next shadow-sm":"btn-slide prev shadow-sm",children:(0,l.jsx)("i",{className:"next"===e.direction?"fa fa-arrow-right":"fa fa-arrow-left"})})},j=t.memo(x),f=i(6012),p=function(e){var s,i,n,a,c=t.useRef(),d=e.randomarticle1,o=e.data,h=null!==(s=!!d&&(null===d||void 0===d?void 0:d.id))&&void 0!==s?s:null===o||void 0===o?void 0:o.id;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"hero1",id:"hero1",ref:c,style:{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.6), #00000015), url(".concat(null!==(i=null===d||void 0===d?void 0:d.image_lg)&&void 0!==i?i:null===o||void 0===o?void 0:o.image_lg,")")},children:(0,l.jsxs)("div",{className:"hero1-body",children:[(0,l.jsx)("h1",{className:"title",children:null!==(n=null===d||void 0===d?void 0:d.title)&&void 0!==n?n:null===o||void 0===o?void 0:o.title}),(0,l.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:null!==(a=null===d||void 0===d?void 0:d.description)&&void 0!==a?a:null===o||void 0===o?void 0:o.description}}),h&&(0,l.jsx)(r.OL,{to:"/post/"+h,children:(0,l.jsx)("button",{children:(0,l.jsx)("i",{className:"fa fa-hand-pointer"})})})]})})})},g=t.memo(p),N=i(3611),y=function(e){var s=t.useRef(null),i=e.posts,n=i.data,a=i.error,c=i.isLoading,o=(0,f.fg)(n,1),u=(0,f.ue)(n,10),x=(0,f.ue)(n,4),v=(0,f.ue)(n,3);return(0,l.jsx)(l.Fragment,{children:c?(0,l.jsx)(N.Z,{h:"100vh"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{randomarticle1:null!==o&&void 0!==o?o:n&&n[8],data:n&&n[8]}),(0,l.jsxs)("div",{className:"section-2",id:"section2",ref:s,children:[(0,l.jsxs)("div",{className:"section-2-0",children:[(0,l.jsx)("div",{className:"section-2-1",children:(0,l.jsx)(d,{posts:!!n&&n[1]})}),(0,l.jsx)("div",{className:"section-2-2",children:(0,l.jsx)(d,{posts:!!n&&n[5]})})]}),(0,l.jsx)("div",{className:"section-2-3",children:u&&u.map((function(e,s){return(0,l.jsx)(h,{posts:e},s)}))})]}),(0,l.jsxs)("div",{className:"section-3",id:"section3",children:[(0,l.jsxs)("div",{className:"section-3-1",children:[(0,l.jsx)("h2",{children:"The Science Behind"}),(0,l.jsx)(r.OL,{to:"/blog",children:(0,l.jsx)("button",{className:"outline btn-sm",children:"View More"})})]}),(0,l.jsx)("div",{className:"section-3-2",children:x&&x.map((function(e,s){return(0,l.jsx)(m.Z,{posts:e},s)}))})]}),(0,l.jsx)("div",{className:"section-3",id:"section4",children:(0,l.jsxs)("div",{className:"section-4-0",children:[(0,l.jsx)("div",{className:"section-4-1",children:v&&v.map((function(e,s){return(0,l.jsx)(h,{posts:e},s)}))}),(0,l.jsx)("div",{className:"section-4-2",children:(0,l.jsx)(j,{posts:{data:x,error:a,isLoading:c,style:{borderRadius:".5rem"}}})})]})})]})})},w=t.memo(y),b=i(4508),L=function(){var e=(0,n.useQuery)("post",a.kS,{keepPreviousData:!0,staleTime:1/0}),s=e.data,i=e.error,t=e.isLoading;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.Z,{shareparam:{title:"",description:"",image_lg:"",image:""}}),(0,l.jsx)(w,{posts:{data:s,error:i,isLoading:t}})]})},k=t.memo(L)}}]);
//# sourceMappingURL=562.bdc15817.chunk.js.map