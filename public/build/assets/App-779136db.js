import{a as l,R as e,L as a,r as s,H as m}from"./app-1d5a0756.js";import{n as o,I as c}from"./index-c5b24bcd.js";function i(){const{auth:t}=l().props;return e.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},e.createElement("div",{className:"container"},e.createElement("a",{className:"navbar-brand",href:"/"},"INERTIA"),e.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},e.createElement("span",{className:"navbar-toggler-icon"})),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},e.createElement("li",{className:"nav-item"},e.createElement(a,{className:"nav-link",href:route("home")},"Home")),e.createElement("li",{className:"nav-item"},e.createElement(a,{className:"nav-link",href:route("dashboard")},"Dashboard")),e.createElement("li",{className:"nav-item"},e.createElement(a,{className:"nav-link",href:route("users.index")},"Users"))),t.user!==null?e.createElement("ul",{className:"navbar-nav mb-2 mb-lg-0"},e.createElement("li",{className:"nav-item dropdown"},e.createElement("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},t.user.name),e.createElement("ul",{className:"dropdown-menu dropdown-menu-end"},e.createElement("li",null,e.createElement("a",{className:"dropdown-item",href:"#"},"Profile")),e.createElement("li",null,e.createElement("a",{className:"dropdown-item",href:"#"},"Settings")),e.createElement("li",null,e.createElement("hr",{className:"dropdown-divider"})),e.createElement("li",null,e.createElement(a,{href:route("logout"),method:"post",as:"button",className:"dropdown-item"},"Logout"))))):e.createElement("ul",{className:"navbar-nav mb-2 mb-lg-0"},e.createElement("li",{className:"nav-item"},e.createElement(a,{className:"nav-link",href:route("login")},"Login")),e.createElement("li",{className:"nav-item"},e.createElement(a,{className:"nav-link",href:route("register")},"Register"))))))}function u({children:t,title:r}){const{flash:n}=l().props;return s.useEffect(()=>{n.type&&o[n.type](n.message)}),e.createElement("div",null,e.createElement(m,{title:r}),e.createElement(i,null),e.createElement("div",{className:"pt-5"},e.createElement(c,{position:"top-right"}),t))}export{u as A};