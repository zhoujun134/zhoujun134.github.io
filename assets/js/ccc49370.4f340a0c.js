"use strict";(self.webpackChunkmy_docus=self.webpackChunkmy_docus||[]).push([[3249],{87437:(e,t,n)=>{n.d(t,{A:()=>m});var o=n(96540),s=n(34164),a=n(23230),i=n(18630),l=n(24245),r=n(54067);const c={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=n(74848);function m(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,s]=(0,o.useState)(!1),a=(0,o.useRef)(!1),{startScroll:i,cancelScroll:c}=(0,l.gk)();return(0,l.Mq)(((e,n)=>{let{scrollY:o}=e;const i=n?.scrollY;i&&(a.current?a.current=!1:o>=i?(c(),s(!1)):o<t?s(!1):o+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,r.$)((e=>{e.location.hash&&(a.current=!0,s(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return(0,d.jsx)("button",{"aria-label":(0,a.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,s.A)("clean-btn",i.G.common.backToTopButton,c.backToTopButton,e&&c.backToTopButtonShow),type:"button",onClick:t})}},38322:(e,t,n)=>{n.d(t,{e:()=>r,i:()=>l});var o=n(96540),s=n(4799),a=n(74848);const i=o.createContext(null);function l(e){let{children:t,content:n,isBlogPostPage:s=!1}=e;const l=function(e){let{content:t,isBlogPostPage:n}=e;return(0,o.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:s});return(0,a.jsx)(i.Provider,{value:l,children:t})}function r(){const e=(0,o.useContext)(i);if(null===e)throw new s.dV("BlogPostProvider");return e}},57824:(e,t,n)=>{n.d(t,{W:()=>c});var o=n(96540),s=n(97639);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function r(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=r();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return o[Math.min(a,o.length-1)]}(n,t,e)}}},75147:(e,t,n)=>{n.d(t,{A:()=>B});var o=n(96540);const s="commentsContainer_c8kT",a="commentItem_e5Ci",i="commentItemContent_nivu",l="commentTitle_QzY2",r="commentForm_VTSH",c="commentInput__Vux",d="inputGroup_JMK_",m="commentItemUp_PQkj",u="commentItemDown_DbcC",h="commentCreateTime_WnHy",p="inputFieldLeft_toZt",g="inputFieldRight_uXK8",x="commentButton_BTU5",b="noComments_iMLa",j="commentListContainer_D4E5";var f=n(67168);async function v(e){return await(0,f.A)({url:"/api/article/comment",method:"get",params:{articleId:e}}).then((e=>JSON.parse(JSON.stringify(e)))).catch((e=>{let{message:t}=e;return{code:"-1",message:"\u7cfb\u7edf\u5f00\u5c0f\u5dee\u4e86\uff01\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01"+t,data:[]}}))}var N=n(46423),k=n(29813),y=n(74848);const _=e=>{let{html:t}=e;return(0,y.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})},B=e=>{const[t,n]=(0,o.useState)([]),[B,C]=(0,o.useState)(""),[A,T]=(0,o.useState)(""),[I,P]=(0,o.useState)(""),[w,L]=(0,o.useState)("# \u6b22\u8fce\u7559\u4e0b\u60a8\u7684\u5b9d\u8d35\u8bc4\u8bba"),F=e=>{let{char:t,size:n=50,color:o="var(--zj-comment-author-font-color)",bgColor:s="var(--ifm-color-primary-light)"}=e;const a=.8*n;return(0,y.jsx)("svg",{width:n,height:n,viewBox:"0 0 100 100",style:{backgroundColor:s,borderRadius:"50%",display:"inline-block",verticalAlign:"middle",fontSize:a,fontWeight:"bold"},children:(0,y.jsx)("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fill:o,children:t})})};(0,o.useEffect)((()=>{S().then((e=>{}))}),[]),(0,o.useEffect)((()=>{""===B&&(L("# \u6b22\u8fce\u7559\u4e0b\u60a8\u7684\u5b9d\u8d35\u8bc4\u8bba"),R(""),W(""))}),[B]);const S=async()=>{const t=await v(e.articleId);t&&t.data&&n(t.data)},D=async t=>{if(t.preventDefault(),!A||!I)return void alert("\u7528\u6237\u540d\u548c\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a\uff01");const o={articleId:e.articleId,articleTitle:e.articleTitle,author:A,email:I,content:B,parentCommentId:M,replyCommentId:z};await async function(e){return await(0,f.A)({url:"/api/article/comment/submit",method:"post",data:e}).then((e=>JSON.parse(JSON.stringify(e)))).catch((e=>{let{message:t}=e;return{code:"-1",message:"\u7cfb\u7edf\u5f00\u5c0f\u5dee\u4e86\uff01\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01"+t,data:!1}}))}(o).then((e=>{}));const s=await v(e.articleId);if(s){const e=s.data;n(e),C(""),T(""),P(""),R(""),W(""),L("# \u6b22\u8fce\u7559\u4e0b\u60a8\u7684\u5b9d\u8d35\u8bc4\u8bba")}},[M,W]=(0,o.useState)(null),[z,R]=(0,o.useState)(null),G=(e,t)=>(0,y.jsxs)("li",{className:a,children:[(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)(F,{char:e.author[0]}),(0,y.jsx)("p",{className:i,children:(0,y.jsx)(_,{html:e.content})})]}),(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)("p",{className:h,children:e.createTime}),(0,y.jsx)("a",{href:"#submitCommentForm",onClick:n=>((e,t,n)=>{e.preventDefault(),console.log("\u6765\u6e90: commentId=",JSON.stringify(t)," parentCommentId=",n),W(n),R(t.commentId),C(A+" \u56de\u590d "+t.author+": "),L("# \u56de\u590d "+t.author+" \u7684\u8bc4\u8bba "),window.location.href.endsWith("#submitCommentForm")?window.location.href=window.location.href+"":window.location.href+="#submitCommentForm"})(n,e,t),children:"\u56de\u590d"})]}),e.children&&e.children.length>0?(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{className:j,children:(0,y.jsx)("ul",{children:e.children.map((e=>G(e,t)))})})}):(0,y.jsx)(y.Fragment,{children:" "})]},e.commentId),E={title:"\u5173\u4e8e\u60a8\u63d0\u4ea4\u7684\u8bc4\u8bba",type:"info",icon:"\ud83d\udd79",description:(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("p",{children:"\u60a8\u63d0\u4ea4\u7684\u8bc4\u8bba\uff0c\u4f5c\u8005\u5c06\u4f1a\u6536\u5230\u901a\u77e5\uff0c\u5728\u5ba1\u6838\u4e4b\u540e\uff0c\u5c06\u4f1a\u5c55\u793a\u5728\u8bc4\u8bba\u5217\u8868\u4e2d\u3002"})})};return(0,y.jsx)(k.A,{fallback:(0,y.jsx)("div",{children:"Loading Comments..."}),children:()=>(0,y.jsxs)("div",{className:s,children:[(0,y.jsx)("h2",{children:"# \u8bc4\u8bba\u5217\u8868"}),t.length>0?(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{className:j,children:(0,y.jsx)("ul",{children:t.map((e=>G(e,e.commentId)))})})}):(0,y.jsx)("p",{className:b,children:"\u5f53\u524d\u6682\u65e0\u8bc4\u8bba, \u6b22\u8fce\u5927\u4f6c\u901a\u8fc7\u4e0b\u9762\u7684\u8868\u5355\u7559\u4e0b\u60a8\u7684\u8db3\u8ff9\u3002\u2764\ufe0f\ud83c\udf77\ud83c\udf6d\u2705\ud83d\udcaf"}),(0,y.jsx)(N.A,{...E}),(0,y.jsx)("div",{className:s,children:(0,y.jsxs)("form",{id:"submitCommentForm",onSubmit:D,className:r,children:[(0,y.jsx)("div",{className:l,children:(0,y.jsx)("h2",{children:w})}),(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)("input",{type:"text",value:A,onChange:e=>T(e.target.value),placeholder:"\u8f93\u5165\u4f60\u7684\u7528\u6237\u540d",className:p,required:!0}),(0,y.jsx)("input",{type:"email",value:I,onChange:e=>P(e.target.value),placeholder:"\u8f93\u5165\u4f60\u7684\u90ae\u7bb1",className:g,required:!0})]}),(0,y.jsx)("div",{className:d,children:(0,y.jsx)("textarea",{value:B,onChange:e=>C(e.target.value),placeholder:"\u5199\u4e0b\u4f60\u7684\u8bc4\u8bba...",className:c,rows:5,required:!0})}),(0,y.jsx)("div",{className:d,children:(0,y.jsx)("button",{type:"submit",className:x,children:"\u63d0\u4ea4\u8bc4\u8bba"})}),e.noticeCardBeforeSumitForm?(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(N.A,{...e.noticeCardBeforeSumitForm})}):(0,y.jsx)(y.Fragment,{})]})})]})})}},46423:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(19581);const s={noticeCardContainer:"noticeCardContainer_M8qB"};var a=n(74848);function i(e){return(0,a.jsx)("div",{className:s.noticeCardContainer,children:(0,a.jsx)(o.A,{type:e.type,icon:e.icon,title:e.title,children:e.description})})}},29247:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var o=n(34164),s=n(18630);const a={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var i=n(74848);function l(e){let{type:t,className:n,children:l}=e;return(0,i.jsx)("div",{className:(0,o.A)(s.G.common.admonition,s.G.common.admonitionType(t),a.admonition,n),children:l})}function r(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:a.admonitionHeading,children:[(0,i.jsx)("span",{className:a.admonitionIcon,children:t}),n]})}function c(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:a.admonitionContent,children:t}):null}function d(e){const{type:t,icon:n,title:o,children:s,className:a}=e;return(0,i.jsxs)(l,{type:t,className:a,children:[o||n?(0,i.jsx)(r,{title:o,icon:n}):null,(0,i.jsx)(c,{children:s})]})}},74851:(e,t,n)=>{n.d(t,{A:()=>T});var o=n(38322),s=n(98180),a=n(32782),i=n(74848);function l(e){let{children:t,className:n}=e;const{frontMatter:l,assets:r}=(0,o.e)(),{withBaseUrl:c}=(0,s.hH)(),d=r.image??l.image;return(0,i.jsxs)("article",{className:(0,a.cn)("relative px-4 pt-4 pb-3 lg:px-4",n),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[d&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{itemProp:"image",content:c(d,{absolute:!0})}),(0,i.jsx)("div",{className:"absolute inset-0 z-1 h-[224px]",children:(0,i.jsx)("div",{className:"size-full rounded-[var(--ifm-pagination-nav-border-radius)] bg-center bg-cover bg-no-repeat",style:{WebkitMaskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",maskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",backgroundImage:`url("${d}")`}})}),(0,i.jsx)("div",{style:{height:"120px"}})]}),t]})}var r=n(64609),c=n(23299);n(96540);function d(e){let{children:t,className:n}=e;const{isBlogPostPage:s}=(0,o.e)();return(0,i.jsx)("div",{id:s?r.blogPostContainerID:void 0,className:(0,a.cn)("markdown",n),itemProp:"articleBody",style:{position:"relative"},children:(0,i.jsx)(c.A,{children:t})})}var m=n(49191),u=n(37399),h=n(14783),p=n(23230);function g(){return(0,i.jsx)("b",{children:(0,i.jsx)(p.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function x(e){const{blogPostTitle:t,...n}=e;return(0,i.jsxs)(h.A,{"aria-label":(0,p.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),style:{display:"flex",alignItems:"center",gap:"0.25rem"},...n,children:[(0,i.jsx)(g,{}),(0,i.jsx)(u.In,{icon:"ri:arrow-right-line"})]})}const b={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y",blogPostInfo:"blogPostInfo_k7sy",blogPostInfoTags:"blogPostInfoTags_W9UY",blogPostAuthor:"blogPostAuthor_OLeU",blogPostDetailsFull:"blogPostDetailsFull_rPUK",divider:"divider_nSib"};var j=n(2818),f=n(57824);const v={zjButton:"zjButton_RnFF"};function N(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,f.W)();return t=>{const n=Math.ceil(t);return e(n,(0,p.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)("span",{className:"truncate",children:n(t)})}function k(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",className:"truncate",children:n})}function y(e){let{className:t}=e;const{metadata:n}=(0,o.e)(),{date:s,tags:l,readingTime:r}=n,c=l.length>0,d=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,a.cn)("inline-flex flex-wrap gap-1.5 text-base","margin-bottom--md",t,v.zjButton),children:[(0,i.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,i.jsx)(u.In,{icon:"ri:calendar-line"}),(0,i.jsx)(k,{date:s,formattedDate:(h=s,d.format(new Date(h)))})]}),c&&(0,i.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,i.jsx)(u.In,{icon:"ri:price-tag-3-line"}),(0,i.jsx)("div",{className:(0,a.cn)("truncate","inline-flex text-center"),children:l.slice(0,3).map(((e,t)=>{let{label:n,permalink:o,description:s}=e;return(0,i.jsxs)("div",{className:"tag !border-0 px-0.5 py-0.5 text-text hover:text-link",children:[0!==t&&"/",(0,i.jsx)(j.A,{label:n,permalink:o,description:s})]},o)}))})]}),void 0!==r&&(0,i.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,i.jsx)(u.In,{icon:"ri:time-line"}),(0,i.jsx)(N,{readingTime:r})]})]});var h}function _(){const{metadata:e,isBlogPostPage:t}=(0,o.e)(),{tags:n,title:s,editUrl:l,hasTruncateMarker:r,date:c,readingTime:d,authors:h}=e,p=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),g=!t&&r,f=n.length>0;h.length;return t?(0,i.jsx)("footer",{className:(0,a.cn)("row docusaurus-mt-lg",t&&b.blogPostFooterDetailsFull),children:g&&(0,i.jsx)("div",{className:(0,a.cn)("col text--right",{"col--3":f}),children:(0,i.jsx)(x,{blogPostTitle:s,to:e.permalink})})}):(0,i.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,i.jsxs)("div",{className:b.blogPostInfo,children:[c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.In,{icon:"ri:calendar-line"}),(0,i.jsx)("time",{dateTime:c,itemProp:"datePublished",children:(v=c,p.format(new Date(v)))})]}),f&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.In,{icon:"ri:price-tag-3-line"}),(0,i.jsx)("span",{className:b.blogPostInfoTags,children:n.map((e=>{let{label:t,permalink:n,description:o}=e;return(0,i.jsx)(j.A,{label:t,permalink:n,description:o},n)}))})]}),d&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.In,{icon:"ri:time-line"}),(0,i.jsx)("span",{className:(0,a.cn)(b.blogPostReadTime,"blog__readingTime"),children:(0,i.jsx)(N,{readingTime:d})})]}),g&&(0,i.jsx)("div",{className:(0,a.cn)("flex flex-1 items-center justify-end gap-0.5 font-medium text-[var(--ifm-link-color)] opacity-0 transition-opacity duration-200 group-hover/blog:opacity-100",{"col--3":f}),children:(0,i.jsx)(x,{blogPostTitle:s,to:e.permalink,className:"hover:no-underline"})})]})});var v}const B={titleLink:"titleLink_BX2g"};function C(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,o.e)(),{permalink:l,title:r}=n,c=s?"h1":"h2";return(0,i.jsx)(c,{className:(0,a.cn)(B.title,t),itemProp:"headline",children:s?r:(0,i.jsx)(h.A,{itemProp:"url",to:l,className:B.titleLink,children:r})})}function A(){const{isBlogPostPage:e}=(0,o.e)();return(0,i.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,i.jsx)(C,{}),e&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(y,{})})]})}function T(e){let{children:t,className:n}=e;const s=function(){const{isBlogPostPage:e}=(0,o.e)();return e?"":"group/blog rounded-md mt-0 bg-blog mb-8 shadow-blog"}();return(0,i.jsxs)(l,{className:(0,a.cn)(s,n),children:[(0,i.jsx)(A,{}),(0,i.jsx)(d,{children:t}),(0,i.jsx)(_,{})]})}},11257:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var o=n(94239),s=n(18630),a=n(38322),i=n(87437),l=n(82216),r=n(14783),c=n(23230),d=n(37399),m=n(96540);const u={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",backButton:"backButton_MCHS"};var h=n(32782),p=n(74848);function g(e){let{sidebar:t}=e;const{isBlogPostPage:n}=(0,a.e)(),[o,s]=(0,m.useState)(!1);return(0,p.jsx)("aside",{className:"col col--2",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:(0,p.jsxs)("nav",{className:(0,h.cn)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),style:{opacity:o?1:0},children:[n&&(0,p.jsx)("div",{className:u.backButton,onClick:()=>{window.history.back()},children:(0,p.jsx)(d.In,{icon:"ri:arrow-go-back-line"})}),(0,p.jsx)(r.A,{href:"/blog",className:(0,h.cn)(u.sidebarItemTitle,"margin-bottom--sm"),children:t.title}),(0,p.jsx)("ul",{className:(0,h.cn)(u.sidebarItemList,"clean-list"),children:t.items.map((e=>(0,p.jsx)("li",{className:u.sidebarItem,children:(0,p.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=n(70763);function b(e){let{sidebar:t}=e;return(0,p.jsx)("ul",{className:"menu__list",children:t.items.map((e=>(0,p.jsx)("li",{className:"menu__list-item",children:(0,p.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,p.jsx)(x.GX,{component:b,props:e})}function f(e){let{sidebar:t}=e;const n=(0,l.l)();return t?.items.length?"mobile"===n?(0,p.jsx)(j,{sidebar:t}):(0,p.jsx)(g,{sidebar:t}):null}var v=n(57270);function N(e){const{sidebar:t,toc:n,children:o,...s}=e,a=t&&t.items.length>0;return(0,p.jsx)(v.A,{...s,children:(0,p.jsx)("div",{className:"margin-vert--md container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)(f,{sidebar:t}),(0,p.jsx)("main",{className:(0,h.cn)("col",{"col--8":a,"col--8 col--offset-2":!a}),itemScope:!0,itemType:"http://schema.org/Blog",children:o}),n&&(0,p.jsx)("div",{className:"col col--2 px-0.5",children:n})]})})})}var k=n(74851);function y(){const{assets:e,metadata:t}=(0,a.e)(),{title:n,description:s,date:i,tags:l,authors:r,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,p.jsxs)(o.be,{title:n,description:s,keywords:d,image:m,children:[(0,p.jsx)("meta",{property:"og:type",content:"article"}),(0,p.jsx)("meta",{property:"article:published_time",content:i}),r.some((e=>e.url))&&(0,p.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,p.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var _=n(63753);function B(e){const{nextItem:t,prevItem:n}=e;return(0,p.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,p.jsx)(_.A,{...n,subLabel:(0,p.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,p.jsx)(_.A,{...t,subLabel:(0,p.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}var C=n(94941),A=n(75147),T=n(56347),I=n(97639),P=n(46423);function w(e){let{sidebar:t,children:n}=e;const{pathname:o}=(0,T.zy)(),{metadata:s,toc:l}=(0,a.e)(),{nextItem:c,prevItem:d,frontMatter:m}=s,{hide_table_of_contents:u,toc_min_heading_level:h,toc_max_heading_level:g,hide_comment:x}=m,b=function(){const{siteConfig:e}=(0,I.A)(),{pathname:t}=(0,T.zy)(),n=e.url+t;return{title:"\u672c\u6587\u58f0\u660e",href:n,type:"danger",icon:"\ud83d\udca1",description:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{children:"\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\uff0c\u8c22\u8c22\u5408\u4f5c\uff01\u8f6c\u8f7d\u672c\u6587\u8bf7\u58f0\u660e\u539f\u6587\u7ae0\u94fe\u63a5\u5982\u4e0b:"}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"\u539f\u6587\u94fe\u63a5: "}),(0,p.jsx)("a",{href:n,children:n})]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"\u4f5c\u8005: "}),(0,p.jsx)("a",{href:e.url,children:e.title})]}),(0,p.jsxs)("p",{children:[(0,p.jsx)(r.A,{href:e.url,children:e.title})," \u81f4\u529b\u4e8e\u5206\u4eab\u6709\u4ef7\u503c\u7684\u4fe1\u606f\u548c\u77e5\u8bc6\u3002\u6211\u4eec\u5c0a\u91cd\u5e76\u4fdd\u62a4\u77e5\u8bc6\u4ea7\u6743\u3002\u672c\u6587\u4ec5\u4ee3\u8868\u4f5c\u8005\u89c2\u70b9\uff0c\u4e0d\u4ee3\u8868\u4efb\u4f55\u7acb\u573a\u3002 \u5982\u679c\u672c\u6587\u6709\u6240\u4fb5\u6743\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u5220\u9664\u6216\u4fee\u6539\uff01"]})]})}}();return(0,p.jsxs)(N,{sidebar:t,toc:!u&&l.length>0?(0,p.jsx)(C.A,{toc:l,minHeadingLevel:h,maxHeadingLevel:g}):void 0,children:[(0,p.jsx)(k.A,{children:n}),(c||d)&&(0,p.jsx)("div",{className:"margin-bottom--md",children:(0,p.jsx)(B,{nextItem:c,prevItem:d})}),(0,p.jsx)(P.A,{...b}),(0,p.jsx)(A.A,{articleId:o,articleTitle:s.title}),(0,p.jsx)(i.A,{})]})}function L(e){const t=e.content;return(0,p.jsx)(a.i,{content:e.content,isBlogPostPage:!0,children:(0,p.jsxs)(o.e3,{className:(0,h.cn)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,p.jsx)(y,{}),(0,p.jsx)(w,{sidebar:e.sidebar,children:(0,p.jsx)(t,{})})]})})}},12908:(e,t,n)=>{n.d(t,{A:()=>T});var o=n(96540),s=n(11062),a=n(34164),i=n(84631),l=n(18630),r=n(49292);const c={codeBlockContainer:"codeBlockContainer_APcc"};var d=n(74848);function m(e){let{as:t,...n}=e;const o=(0,i.A)(),s=(0,r.M$)(o);return(0,d.jsx)(t,{...n,style:s,className:(0,a.A)(n.className,c.codeBlockContainer,l.G.common.codeBlock)})}const u={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",codeBlockDisplayNone:"codeBlockDisplayNone_QAcq",buttonGroupDisplayNone:"buttonGroupDisplayNone_rDli",buttonLanguageDisplayNone:"buttonLanguageDisplayNone_BxBZ",codeBlockContentDisplayNone:"codeBlockContentDisplayNone_JlGW",buttonGroup:"buttonGroup_6DOT"};function h(e){let{children:t,className:n}=e;return(0,d.jsx)(m,{as:"pre",tabIndex:0,className:(0,a.A)(u.codeBlockStandalone,"thin-scrollbar",n),children:(0,d.jsx)("code",{className:u.codeBlockLines,children:t})})}var p=n(86957),g=n(16419),x=n(71765);const b={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function j(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=s({line:t,className:(0,a.A)(n,o&&b.codeLine)}),r=t.map(((e,t)=>(0,d.jsx)("span",{...i({token:e})},t)));return(0,d.jsxs)("span",{...l,children:[o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:b.codeLineNumber}),(0,d.jsx)("span",{className:b.codeLineContent,children:r})]}):r,(0,d.jsx)("br",{})]})}var f=n(76316),v=n(23230),N=n(62578),k=n(52030);const y={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function _(e){let{code:t,className:n}=e;const[s,i]=(0,o.useState)(!1),l=(0,o.useRef)(void 0),r=(0,o.useCallback)((()=>{(0,f.A)(t),i(!0),l.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":s?(0,v.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.A)("clean-btn",n,y.copyButton,s&&y.copyButtonCopied),onClick:r,children:(0,d.jsxs)("span",{className:y.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(N.A,{className:y.copyButtonIcon}),(0,d.jsx)(k.A,{className:y.copyButtonSuccessIcon})]})})}const B={wordWrapButtonIcon:"wordWrapButtonIcon_yqOQ",wordWrapButtonEnabled:"wordWrapButtonEnabled_tAnL"};function C(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,v.T)({id:"theme.CodeBlock.wordWrapToggle",message:"\u4ee3\u7801\u6298\u53e0\u5c55\u5f00",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:n,className:(0,a.A)("clean-btn",t,o&&B.wordWrapButtonEnabled),"aria-label":s,title:s,children:o?"\u6298\u53e0\u4ee3\u7801":"\u5c55\u5f00\u4ee3\u7801"})}function A(e){let{children:t,className:n="",metastring:s,title:l,showLineNumbers:c,language:h}=e;const{prism:{defaultLanguage:b,magicComments:f}}=(0,p.p)(),v=function(e){return e?.toLowerCase()}(h??(0,r.Op)(n)??b),N=(0,i.A)(),k=(0,g.f)(),y=(0,r.wt)(s)||l,{lineClassNames:B,code:A}=(0,r.Li)(t,{metastring:s,language:v,magicComments:f}),T=!0,[I,P]=(0,o.useState)(!0);return(0,d.jsxs)(m,{as:"div",className:(0,a.A)(n,v&&!n.includes(`language-${v}`)&&`language-${v}`),children:[y&&(0,d.jsx)("div",{className:u.codeBlockTitle,children:y}),(0,d.jsxs)("div",{className:(0,a.A)(u.codeBlockContent,!I&&u.codeBlockContentDisplayNone),children:[(0,d.jsxs)("div",{className:(0,a.A)(u.buttonGroup,u.codeBlockLinesWithNumbering,!I&&u.buttonGroupDisplayNone),children:[(0,d.jsxs)("button",{className:(0,a.A)(u.codeButton,!I&&u.buttonLanguageDisplayNone),children:[" ",v," "]}),(0,d.jsx)(_,{className:u.codeButton,code:A}),(0,d.jsx)(C,{className:u.codeButton,onClick:()=>{P(!I)},isEnabled:I})]}),(0,d.jsx)(x.f4,{theme:N,code:A,language:v??"javascript",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:i}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:k.codeBlockRef,className:(0,a.A)(t,u.codeBlock,"thin-scrollbar"),style:n,children:(0,d.jsx)("code",{className:(0,a.A)(u.codeBlockLines,u.codeBlockLinesWithNumbering,!I&&u.codeBlockDisplayNone),children:o.map(((e,t)=>(0,d.jsx)(j,{line:e,getLineProps:s,getTokenProps:i,classNames:B[t],showLineNumbers:T},t)))})})}})]})]})}function T(e){let{children:t,...n}=e;const a=(0,s.A)(),i=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof i?A:h;return(0,d.jsx)(l,{...n,children:i},String(a))}},93601:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var o=n(34164);const s={img:"img_CujE",zjImgContainer:"zjImgContainer_kJPg"};var a=n(74848);function i(e){return(0,a.jsx)("div",{className:s.zjImgContainer,children:(0,a.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,o.A)(t,s.img))})});var t}},63753:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(14783),s=n(32782),a=n(74848);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,a.jsxs)(o.A,{className:(0,s.cn)("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},2818:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var o=n(34164),s=n(14783);const a={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var i=n(74848);function l(e){let{permalink:t,label:n,count:l,description:r}=e;return(0,i.jsxs)(s.A,{href:t,title:r,className:(0,o.A)(a.tag,l?a.tagWithCount:a.tagRegular),children:[n,l&&(0,i.jsx)("span",{children:l})]})}},67168:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(94335);const s={apiConfig:{baseUrl:"https://zbus.top",timeout:15e3,headers:{"Content-Type":"application/json;charset=utf-8"}}};o.A.defaults.withCredentials=!0;const a=o.A.create({baseURL:s.apiConfig.baseUrl,timeout:s.apiConfig.timeout,headers:s.apiConfig.headers});const i=()=>{0};a.interceptors.request.use((e=>("get"===e.method&&e.params,e)),(e=>Promise.reject(e))),a.interceptors.response.use((e=>{i();e.data;return e.data}),(e=>{console.error("err"+e),i();let t="\u8bf7\u6c42\u51fa\u73b0\u5f02\u5e38";t=e.response?e.message||t:e.request?"\u8bf7\u6c42\u5df2\u53d1\u51fa\uff0c\u4f46\u6ca1\u6709\u6536\u5230\u54cd\u5e94":e.message||t;const n={code:"-1",message:t,data:{}};return Promise.reject(n)}));const l=a}}]);