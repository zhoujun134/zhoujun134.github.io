"use strict";(self.webpackChunkmy_docus=self.webpackChunkmy_docus||[]).push([[8434],{87806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=n(74848),i=n(28453);const o={slug:"code-offer-sort-quick-sort",title:"\u6392\u5e8f-\u5feb\u901f\u6392\u5e8f",date:new Date("2023-12-02T00:00:00.000Z"),authors:{name:"zhoujun134",title:"\u4e0d\u8981\u7b49! \u4e0d\u7ba1\u60f3\u505a\u4ec0\u4e48, \u90fd\u8981\u7acb\u523b\u52a8\u8d77\u6765\u3002",url:"https://github.com/zhoujun134",image_url:"https://img.zbus.top/zbus/logo.jpg"},tags:["java","\u5251\u6307offer"],keywords:["\u5251\u6307offer","\u7b97\u6cd5\u9898"]},s=void 0,c={id:"codeOffer/c0-sort/\u5feb\u901f\u6392\u5e8f",title:"\u6392\u5e8f-\u5feb\u901f\u6392\u5e8f",description:"\u57fa\u672c\u601d\u60f3",source:"@site/docs/01-codeOffer/c0-sort/\u5feb\u901f\u6392\u5e8f.md",sourceDirName:"01-codeOffer/c0-sort",slug:"/codeOffer/c0-sort/code-offer-sort-quick-sort",permalink:"/docs/codeOffer/c0-sort/code-offer-sort-quick-sort",draft:!1,unlisted:!1,tags:[{inline:!0,label:"java",permalink:"/docs/tags/java"},{inline:!0,label:"\u5251\u6307offer",permalink:"/docs/tags/\u5251\u6307offer"}],version:"current",frontMatter:{slug:"code-offer-sort-quick-sort",title:"\u6392\u5e8f-\u5feb\u901f\u6392\u5e8f",date:"2023-12-02T00:00:00.000Z",authors:{name:"zhoujun134",title:"\u4e0d\u8981\u7b49! \u4e0d\u7ba1\u60f3\u505a\u4ec0\u4e48, \u90fd\u8981\u7acb\u523b\u52a8\u8d77\u6765\u3002",url:"https://github.com/zhoujun134",image_url:"https://img.zbus.top/zbus/logo.jpg"},tags:["java","\u5251\u6307offer"],keywords:["\u5251\u6307offer","\u7b97\u6cd5\u9898"]},sidebar:"tutorialSidebar",previous:{title:"\u6392\u5e8f-\u5192\u6ce1\u6392\u5e8f",permalink:"/docs/codeOffer/c0-sort/code-offer-sort-mao-pao"},next:{title:"01-\u4e24\u6570\u4e4b\u548c",permalink:"/docs/codeOffer/c1-one-integer/code-offer-integer-twoSum"}},l={},a=[{value:"\u57fa\u672c\u601d\u60f3",id:"\u57fa\u672c\u601d\u60f3",level:2},{value:"\u6316\u5751\u6cd5",id:"\u6316\u5751\u6cd5",level:2},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u57fa\u672c\u601d\u60f3",children:"\u57fa\u672c\u601d\u60f3"}),"\n",(0,r.jsx)(t.p,{children:"\u4efb\u53d6\u5f85\u6392\u5e8f\u5143\u7d20\u5e8f\u5217\u4e2d\u7684\u67d0\u5143\u7d20\u4f5c\u4e3a\u57fa\u51c6\u503c\uff0c\u6309\u7167\u8be5\u6392\u5e8f\u7801\u5c06\u5f85\u6392\u5e8f\u96c6\u5408\u5206\u5272\u6210\u4e24\u5b50\u5e8f\u5217\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5de6\u5b50\u5e8f\u5217\u4e2d\u6240\u6709\u5143\u7d20\u5747\u5c0f\u4e8e\u57fa\u51c6\u503c\uff0c\u53f3\u5b50\u5e8f\u5217\u4e2d\u6240\u6709\u5143\u7d20\u5747\u5927\u4e8e\u57fa\u51c6\u503c\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u7136\u540e\u6700\u5de6\u53f3\u5b50\u5e8f\u5217\u91cd\u590d\u8be5\u8fc7\u7a0b\uff0c\u76f4\u5230\u6240\u6709\u5143\u7d20\u90fd\u6392\u5217\u5728\u76f8\u5e94\u4f4d\u7f6e\u4e0a\u4e3a\u6b62\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u6316\u5751\u6cd5",children:"\u6316\u5751\u6cd5"}),"\n",(0,r.jsx)(t.p,{children:"\u4e00\u822c\u628a\u7b2c\u4e00\u4e2a\u5143\u7d20\u4f5c\u4e3a\u5751\u4f4d\u3002L \u548c R \u5206\u522b\u4ece\u4e24\u7aef\u5f00\u59cb\u627e\u5bf9\u5e94\u7684\u503c\u586b\u5751\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://img.zbus.top/zbus/blog202407142137069.gif",alt:"\u52a8\u56fe"})}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528 java \u4ee3\u7801\u5b9e\u73b0\u4e3a:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"    public static void quickSort(int[] arr, int left, int right) {\n        if (left >= right) {\n            return;\n        }\n        int temp = arr[left];\n        int i = left, j = right;\n        while (i < j) {\n            // \u4ece\u53f3\u5411\u5de6\u627e\uff0c\u5c0f\u4e8e temp \u7684\u6570\uff0c\u627e\u5230\u5219\u505c\u6b62\u5faa\u73af\n            while (i < j && arr[j] > temp) {\n                j--;\n            }\n            // \u5982\u679c\u5b58\u5728\uff0c\u5219\u9700\u8981\u628a\u53f3\u8fb9\u7684\u503c\u6362\u5230\u5de6\u8fb9\u6765\n            if (i < j) {\n                arr[i] = arr[j];\n                ++i;\n            }\n            // \u4ece\u53f3\u5411\u5de6\u627e\uff0c\u5927\u4e8e\u7b49\u4e8e temp \u7684\u6570\uff0c\u627e\u5230\u5219\u505c\u6b62\u5faa\u73af\n            while (i < j && arr[i] <= temp) {\n                i++;\n            }\n            // \u5982\u679c\u5b58\u5728\uff0c\u5219\u9700\u8981\u628a\u5de6\u8fb9\u7684\u503c\u6362\u5230\u53f3\u8fb9\u6765\n            if (i <= j) {\n                arr[j] = arr[i];\n                j--;\n            }\n            // \u6700\u540e\u628a\u521a\u521a\u62ff\u51fa\u6765\u7684\u90a3\u4e2a\u503c\u653e\u5165 \u5f53\u524d\u6307\u9488\u5904\n            arr[i] = temp;\n            // \u7ee7\u7eed\u4e0b\u4e00\u8f6e\uff0c\u4ece\u5de6\u5230 i-1 \uff08\u56e0\u4e3aleft \u5230 i-1 \u4ecd\u7136\u662f\u65e0\u5e8f\u7684\uff09\n            quickSort(arr, left, i - 1);\n            // \u7ee7\u7eed\u4e0b\u4e00\u8f6e\uff0c\u4ece i + 1 \u5230 right \uff08\u56e0\u4e3a i+1 \u5230 right \u4ecd\u7136\u662f\u65e0\u5e8f\u7684\uff09\n            quickSort(arr, i + 1, right);\n        }\n    }\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u65f6\u95f4\u590d\u6742\u5ea6",children:"\u65f6\u95f4\u590d\u6742\u5ea6"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u5feb\u901f\u6392\u5e8f\u6574\u4f53\u7684\u7efc\u5408\u6027\u80fd\u548c\u4f7f\u7528\u573a\u666f\u90fd\u662f\u6bd4\u8f83\u597d\u7684\uff0c\u6240\u4ee5\u624d\u6562\u53eb\u5feb\u901f\u6392\u5e8f"}),"\n",(0,r.jsx)(t.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(N*logN)"}),"\n",(0,r.jsx)(t.li,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(logN)"}),"\n",(0,r.jsx)(t.li,{children:"\u7a33\u5b9a\u6027\uff1a\u4e0d\u7a33\u5b9a"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/zhoujun134/leetcode/blob/main/src/main/java/com/zj/datastruct/sort/QuickSort.java",children:"\u8be6\u7ec6\u7684\u4ee3\u7801\u70b9\u51fb\u8df3\u8f6c"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);