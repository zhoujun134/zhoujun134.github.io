"use strict";(self.webpackChunkmy_docus=self.webpackChunkmy_docus||[]).push([[3042],{28045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(74848),i=n(28453);const o={slug:"code-offer-sort-gui-bing-sort",title:"\u5f52\u5e76\u6392\u5e8f",date:new Date("2023-12-02T00:00:00.000Z"),authors:{name:"zhoujun134",title:"\u4e0d\u8981\u7b49! \u4e0d\u7ba1\u60f3\u505a\u4ec0\u4e48, \u90fd\u8981\u7acb\u523b\u52a8\u8d77\u6765\u3002",url:"https://github.com/zhoujun134",image_url:"https://img.zbus.top/zbus/logo.jpg"},tags:["java","\u5251\u6307offer"],keywords:["\u5251\u6307offer","\u7b97\u6cd5\u9898"]},s=void 0,l={id:"codeOffer/c0-sort/\u5f52\u5e76\u6392\u5e8f",title:"\u5f52\u5e76\u6392\u5e8f",description:"\u7b97\u6cd5\u601d\u60f3",source:"@site/docs/01-codeOffer/c0-sort/06-\u5f52\u5e76\u6392\u5e8f.md",sourceDirName:"01-codeOffer/c0-sort",slug:"/codeOffer/c0-sort/code-offer-sort-gui-bing-sort",permalink:"/docs/codeOffer/c0-sort/code-offer-sort-gui-bing-sort",draft:!1,unlisted:!1,tags:[{inline:!0,label:"java",permalink:"/docs/tags/java"},{inline:!0,label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"}],version:"current",sidebarPosition:6,frontMatter:{slug:"code-offer-sort-gui-bing-sort",title:"\u5f52\u5e76\u6392\u5e8f",date:"2023-12-02T00:00:00.000Z",authors:{name:"zhoujun134",title:"\u4e0d\u8981\u7b49! \u4e0d\u7ba1\u60f3\u505a\u4ec0\u4e48, \u90fd\u8981\u7acb\u523b\u52a8\u8d77\u6765\u3002",url:"https://github.com/zhoujun134",image_url:"https://img.zbus.top/zbus/logo.jpg"},tags:["java","\u5251\u6307offer"],keywords:["\u5251\u6307offer","\u7b97\u6cd5\u9898"]},sidebar:"tutorialSidebar",previous:{title:"\u5e0c\u5c14\u6392\u5e8f",permalink:"/docs/codeOffer/c0-sort/code-offer-sort-shell-sort"},next:{title:"\u6570\u5b57\u7c7b",permalink:"/docs/category/\u6570\u5b57\u7c7b"}},c={},u=[{value:"\u7b97\u6cd5\u601d\u60f3",id:"\u7b97\u6cd5\u601d\u60f3",level:2},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801",level:2},{value:"\u7b97\u6cd5\u7279\u6027",id:"\u7b97\u6cd5\u7279\u6027",level:2}];function a(e){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u7b97\u6cd5\u601d\u60f3",children:"\u7b97\u6cd5\u601d\u60f3"}),"\n",(0,r.jsx)(t.p,{children:"\u5f52\u5e76\u6392\u5e8f\u662f\u5efa\u7acb\u5728\u5f52\u5e76\u64cd\u4f5c\u4e0a\u7684\u4e00\u79cd\u6709\u6548\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u91c7\u7528\u5206\u6cbb\u6cd5\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5c06\u5df2\u6709\u5e8f\u7684\u5b50\u5e8f\u5217\u5408\u5e76\uff0c\u5f97\u5230\u5b8c\u5168\u6709\u5e8f\u7684\u5e8f\u5217\uff1b\u5373\u5148\u4f7f\u6bcf\u4e2a\u5b50\u5e8f\u5217\u6709\u5e8f\uff0c\u518d\u4f7f\u5b50\u5e8f\u5217\u6bb5\u95f4\u6709\u5e8f\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://img.zbus.top/zbus/blog202407150029156.png",alt:"image-20240715002943135"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://img.zbus.top/zbus/blog202407150029147.gif",alt:"\u52a8\u56fe"})}),"\n",(0,r.jsx)(t.h2,{id:"\u5b9e\u73b0\u4ee3\u7801",children:"\u5b9e\u73b0\u4ee3\u7801"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"    public static int[] mergeSort(int[] nums, int l, int h) {\n        if (l == h)\n            return new int[]{nums[l]};\n\n        int mid = (l + h) / 2;\n        int[] leftArr = mergeSort(nums, l, mid); //\u5de6\u6709\u5e8f\u6570\u7ec4\n        int[] rightArr = mergeSort(nums, mid + 1, h); //\u53f3\u6709\u5e8f\u6570\u7ec4\n        int[] newNum = new int[leftArr.length + rightArr.length]; //\u65b0\u6709\u5e8f\u6570\u7ec4\n\n        int m = 0, i = 0, j = 0;\n        while (i < leftArr.length && j < rightArr.length) {\n            newNum[m++] = leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++];\n        }\n        while (i < leftArr.length)\n            newNum[m++] = leftArr[i++];\n        while (j < rightArr.length)\n            newNum[m++] = rightArr[j++];\n        return newNum;\n    }\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u7b97\u6cd5\u7279\u6027",children:"\u7b97\u6cd5\u7279\u6027"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u5f52\u5e76\u7684\u7f3a\u70b9\u5728\u4e8e\u9700\u8981O(N)\u7684\u7a7a\u95f4\u590d\u6742\u5ea6\uff0c\u5f52\u5e76\u6392\u5e8f\u7684\u601d\u8003\u66f4\u591a\u7684\u662f\u89e3\u51b3\u5728\u78c1\u76d8\u4e2d\u7684\u5916\u6392\u5e8f\u95ee\u9898"}),"\n",(0,r.jsx)(t.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(N*logN)"}),"\n",(0,r.jsx)(t.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(N)"}),"\n",(0,r.jsx)(t.li,{children:"\u7a33\u5b9a\u6027\uff1a\u7a33\u5b9a"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);