(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(4),i=a.n(s),r=(a(16),a(5)),o=a(6),l=a(7),d=a(11),b=a(10),u=a(8),j=a.n(u),h=a(9),O=a.n(h),x=a(0);function m(t){var e=t.children,a=t.onClick,c=t.name;return Object(x.jsx)("button",{name:c,className:O.a.btn,onClick:a,children:e})}function f(t){var e=t.onClick;return Object(x.jsxs)("div",{className:"feedbackOptions",children:[Object(x.jsx)(m,{name:"good",onClick:e,children:"Good"}),Object(x.jsx)(m,{name:"neutral",onClick:e,children:"Neutral"}),Object(x.jsx)(m,{name:"bad",onClick:e,children:"Bad"})]})}function v(t){var e=t.message;return Object(x.jsx)("p",{className:"notification",children:e})}function k(t){var e=t.text,a=t.children;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{className:"title",children:e}),a]})}var p=a(2),g=a.n(p);function N(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,s=t.positivePercentage;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("ul",{className:g.a.statistics,children:[Object(x.jsxs)("li",{className:g.a.statisticElem,children:["Good: ",e]}),Object(x.jsxs)("li",{className:g.a.statisticElem,children:["Neutral: ",a]}),Object(x.jsxs)("li",{className:g.a.statisticElem,children:["Bad: ",c]}),Object(x.jsxs)("li",{className:g.a.statisticElem,children:["Total: ",n]})]}),Object(x.jsxs)("p",{children:["Positive feedback: ",s||0,"%"]})]})}var _=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.addGrade=function(e){var a=e.target.name;t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){var t=this.state;return t.good+t.neutral+t.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.round(this.state.good/this.countTotalFeedback()*100)}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:j.a.App,children:[Object(x.jsx)(k,{text:"Please leave feedback",children:Object(x.jsx)(f,{onClick:this.addGrade})}),Object(x.jsx)(k,{text:"Statistics",children:this.countTotalFeedback()?Object(x.jsx)(N,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(x.jsx)(v,{message:"No feedback given"})})]})}}]),a}(c.Component),C=_;i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root"))},2:function(t,e,a){t.exports={statistics:"Statistics_statistics__3EOAQ"}},8:function(t,e,a){t.exports={App:"App_App__84gbM"}},9:function(t,e,a){t.exports={btn:"Button_btn__1d_eG"}}},[[18,1,2]]]);
//# sourceMappingURL=main.736ebbe4.chunk.js.map