(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(3),i=a.n(s),r=(a(13),a(14),a(4)),l=a(5),d=a(6),o=a(8),u=a(7),b=a(0);function j(t){var e=t.text,a=t.action;return Object(b.jsx)("button",{className:"btn",onClick:a,children:e})}var h=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var c,n=t.title,s=void 0===n?"Statistics":n;return Object(l.a)(this,a),(c=e.call(this)).addGrade=function(t){c.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},c.title=s,c.state={good:0,neutral:0,bad:0},c}return Object(d.a)(a,[{key:"countTotalFeedback",value:function(){var t=this.state;return t.good+t.neutral+t.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.round(this.state.good/this.countTotalFeedback()*100)}},{key:"render",value:function(){var t=this,e=this.state,a=e.good,c=e.neutral,n=e.bad;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("ul",{className:"btnList",children:[Object(b.jsx)("li",{className:"btn",children:Object(b.jsx)(j,{text:"Good",action:function(){return t.addGrade("good")}})}),Object(b.jsx)("li",{className:"btn",children:Object(b.jsx)(j,{text:"Neutral",action:function(){return t.addGrade("neutral")}})}),Object(b.jsx)("li",{className:"btn",children:Object(b.jsx)(j,{text:"Bad",action:function(){return t.addGrade("bad")}})})]}),Object(b.jsx)("h2",{className:"statTitle",children:this.title}),Object(b.jsxs)("ul",{className:"stat",children:[Object(b.jsxs)("li",{className:"statElement",children:["Good: ",a]}),Object(b.jsxs)("li",{className:"statElement",children:["Neutral: ",c]}),Object(b.jsxs)("li",{className:"statElement",children:["Bad: ",n]})]}),Object(b.jsxs)("p",{children:["Positive feedback: ",this.countPositiveFeedbackPercentage()||0,"%"]})]})}}]),a}(c.Component);var O=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"title",children:"Please leave feedback"}),Object(b.jsx)(h,{title:"Our statistics"})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.774071b9.chunk.js.map