import{u,a as p,r,j as s,B as f}from"./index-eed41382.js";import{P as x}from"./PageNav-289f3d06.js";import"./Logo-8d3c9df1.js";const g="_login_1mydq_1",h="_form_1mydq_8",j="_row_1mydq_22",a={login:g,form:h,row:j};function _(){const{login:l,isAuthenticated:i}=u(),n=p(),[t,m]=r.useState("jack@example.com"),[o,c]=r.useState("qwerty");function d(e){e.preventDefault(),t&&o&&l(t,o)}return r.useEffect(function(){i===!0&&n("/app")},[i,n]),s.jsxs("main",{className:a.login,children:[s.jsx(x,{}),s.jsxs("form",{className:a.form,onSubmit:d,children:[s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"email",children:"Email address"}),s.jsx("input",{type:"email",id:"email",onChange:e=>m(e.target.value),value:t})]}),s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",onChange:e=>c(e.target.value),value:o})]}),s.jsx("div",{children:s.jsx(f,{typeStyle:"primary",children:"Login"})})]})]})}export{_ as default};
