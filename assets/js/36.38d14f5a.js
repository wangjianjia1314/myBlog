(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{312:function(t,a,s){"use strict";s.r(a);var r=s(13),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" diff")]),t._v(" "),a("ul",[a("li",[t._v("vue1.0 没有引入虚拟 dom vue2.0 引入虚拟 dom 是因为 vue1 在读取响应数据的时候会生成对应的 watcher 通过 dep 收集 watcher 出发 watcher 的更新函数达到数据驱动视图 大量的 watcher 会造成内存的浪费。vue2.0 加入了 diff 虚拟 dom 此时一个组件会对应一个 watcher 一个组件内多个数据发生改变的时候 只会收集一个 watcher 当数据发生改变的时候 会进行虚拟 dom 的对比 从而进行一次更新")]),t._v(" "),a("li",[t._v("h 函数 会返回由真实 dom 转换为的 虚拟 dom 通过 path 函数进行新老节点的替换增加删除等操作 生成真实的 dom 进行渲染")]),t._v(" "),a("li",[t._v("虚拟节点是什么\n"),a("ul",[a("li",[t._v("js 对象 描述的 真实 dom")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("elm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("新老节点的替换规则\n"),a("ul",[a("li",[t._v("1.节点不同直接删除老节点 替换成新节点")]),t._v(" "),a("li",[t._v("2.key 的作用 做为唯一标识，确定是不是同一个节点")]),t._v(" "),a("li",[t._v("3.同级比较 不能跨级")]),t._v(" "),a("li",[t._v("4 核心\n"),a("ul",[a("li",[t._v("会有指针 指向 当前比对的哪个")]),t._v(" "),a("li",[t._v("a)旧前 新前")]),t._v(" "),a("li",[t._v("b)旧后 新后")]),t._v(" "),a("li",[t._v("c)旧前 新后")]),t._v(" "),a("li",[t._v("d)旧后 新前")]),t._v(" "),a("li",[t._v("e)循环遍历")]),t._v(" "),a("li",[t._v("f)以上会循环比对过程")]),t._v(" "),a("li",[t._v("g)添加或删除")])])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);