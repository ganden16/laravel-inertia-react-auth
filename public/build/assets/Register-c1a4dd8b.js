import{u as c,R as e,L as o}from"./app-d8299362.js";import{G as i}from"./Guest-0038607e.js";import"./index-1b7860ca.js";function d({errors:a}){const{data:t,setData:n,post:s}=c({name:"",username:"",location:"",email:"",password:"",password_confirmation:""}),m=l=>{n({...t,[l.target.id]:l.target.value})},r=l=>{l.preventDefault(),s("/register",t)};return e.createElement(e.Fragment,null,e.createElement("div",{className:"py-5 my-5"},e.createElement("div",{className:"card"},e.createElement("div",{className:"card-header"},"Register"),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:r},e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"name",className:"form-label"},"Name"),e.createElement("input",{value:t.name,onChange:m,type:"text",name:"name",id:"name",className:"form-control"}),a.name&&e.createElement("div",{className:"text-danger mt-1"},a.name)),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"username",className:"form-label"},"Username"),e.createElement("input",{value:t.username,onChange:m,type:"text",name:"username",id:"username",className:"form-control"}),a.username&&e.createElement("div",{className:"text-danger mt-1"},a.username)),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"location",className:"form-label"},"location"),e.createElement("input",{value:t.location,onChange:m,type:"text",name:"location",id:"location",className:"form-control"}),a.location&&e.createElement("div",{className:"text-danger mt-1"},a.location)),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),e.createElement("input",{value:t.email,onChange:m,type:"email",name:"email",id:"email",className:"form-control"}),a.email&&e.createElement("div",{className:"text-danger mt-1"},a.email)),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),e.createElement("input",{value:t.password,onChange:m,type:"password",name:"password",id:"password",className:"form-control"}),a.password&&e.createElement("div",{className:"text-danger mt-1"},a.password)),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"password_confirmation",className:"form-label"},"Password Confirmation"),e.createElement("input",{value:t.password_confirmation,onChange:m,type:"password",name:"password_confirmation",id:"password_confirmation",className:"form-control"})),e.createElement("button",{type:"submit",className:"btn btn-primary"},"Register"))),e.createElement("div",{className:"card-footer"},e.createElement("span",{className:"text-muted"},"Have account? ")," "," ",e.createElement(o,{className:"link-dark text-decoration-none fw-bold",href:route("login")},"Login")))))}d.layout=a=>e.createElement(i,{children:a,title:"Register"});export{d as default};
