(this["webpackJsonpgator-delivery"]=this["webpackJsonpgator-delivery"]||[]).push([[0],{112:function(e,t){},152:function(e,t,a){},153:function(e,t){},214:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(37),o=a.n(r),c=(a(50),a(10)),i=a(9),s=a(5),m=a(22),u=(a(106),m.initializeApp({apiKey:"AIzaSyBLMSlM0gcFg3sO2cgRGZYFoPK00DvWSNY",authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_KEY:"AIzaSyBLMSlM0gcFg3sO2cgRGZYFoPK00DvWSNY"}).REACT_APP_FIREBASE_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_KEY:"AIzaSyBLMSlM0gcFg3sO2cgRGZYFoPK00DvWSNY"}).REACT_APP_FIREBASE_DATABASE,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_KEY:"AIzaSyBLMSlM0gcFg3sO2cgRGZYFoPK00DvWSNY"}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_KEY:"AIzaSyBLMSlM0gcFg3sO2cgRGZYFoPK00DvWSNY"}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_KEY:"AIzaSyBLMSlM0gcFg3sO2cgRGZYFoPK00DvWSNY"}).REACT_APP_FIREBASE_SENDER_ID})),d=u,E=l.a.createContext(),p=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(s.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){d.auth().onAuthStateChanged(c)}),[]),l.a.createElement(E.Provider,{value:{currentUser:o}},t)},v="/home",b=function(e){return l.a.createElement("div",{className:"container landing-page"},l.a.createElement("div",{className:"overlay"},l.a.createElement("img",{src:"https://greenindustryplatform.org/sites/default/files/styles/large/public/learning-resources/image/sol-518339-unsplash.jpg?itok=B4GJAY6_",alt:"background"})),l.a.createElement(c.b,{to:"/signin",className:"nav-link"},l.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg"},"Post a job")))},h=a(33),f=a.n(h),g=a(41),N=function(e){if(e.currentStep<1)return null;return l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputName"},"Name *"),l.a.createElement("input",{name:"name",type:"text",placeholder:"Full Name",className:"form-control",id:"inputName"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputEmail4"},"Email *"),l.a.createElement("input",{name:"email",type:"email",placeholder:"Email Address",className:"form-control",id:"inputEmail4"})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputPassword4"},"Password *"),l.a.createElement("input",{name:"passwordOne",type:"password",placeholder:"Password",className:"form-control",id:"inputPassword4"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputPassword5"},"Confirm Password *"),l.a.createElement("input",{name:"passwordTwo",type:"password",placeholder:"Re-enter Password",className:"form-control",id:"inputPassword5"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputAddress1"},"Address *"),l.a.createElement("input",{name:"addressOne",type:"text",placeholder:"1234 Main St",className:"form-control",id:"inputAddress1"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputAddress2"},"Address 2"),l.a.createElement("input",{name:"addressTwo",type:"text",placeholder:"Apartment, studio, or floor",className:"form-control",id:"inputAddress2"})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputCity"},"City *"),l.a.createElement("input",{name:"city",type:"text",className:"form-control",id:"inputCity"})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{htmlFor:"inputState"},"State *"),l.a.createElement("select",{id:"inputState",className:"form-control",name:"state"},l.a.createElement("option",{defaultValue:!0},"Choose..."),l.a.createElement("option",{value:"AL"},"Alabama"),l.a.createElement("option",{value:"AK"},"Alaska"),l.a.createElement("option",{value:"AZ"},"Arizona"),l.a.createElement("option",{value:"AR"},"Arkansas"),l.a.createElement("option",{value:"CA"},"California"),l.a.createElement("option",{value:"CO"},"Colorado"),l.a.createElement("option",{value:"CT"},"Connecticut"),l.a.createElement("option",{value:"DE"},"Delaware"),l.a.createElement("option",{value:"DC"},"District Of Columbia"),l.a.createElement("option",{value:"FL"},"Florida"),l.a.createElement("option",{value:"GA"},"Georgia"),l.a.createElement("option",{value:"HI"},"Hawaii"),l.a.createElement("option",{value:"ID"},"Idaho"),l.a.createElement("option",{value:"IL"},"Illinois"),l.a.createElement("option",{value:"IN"},"Indiana"),l.a.createElement("option",{value:"IA"},"Iowa"),l.a.createElement("option",{value:"KS"},"Kansas"),l.a.createElement("option",{value:"KY"},"Kentucky"),l.a.createElement("option",{value:"LA"},"Louisiana"),l.a.createElement("option",{value:"ME"},"Maine"),l.a.createElement("option",{value:"MD"},"Maryland"),l.a.createElement("option",{value:"MA"},"Massachusetts"),l.a.createElement("option",{value:"MI"},"Michigan"),l.a.createElement("option",{value:"MN"},"Minnesota"),l.a.createElement("option",{value:"MS"},"Mississippi"),l.a.createElement("option",{value:"MO"},"Missouri"),l.a.createElement("option",{value:"MT"},"Montana"),l.a.createElement("option",{value:"NE"},"Nebraska"),l.a.createElement("option",{value:"NV"},"Nevada"),l.a.createElement("option",{value:"NH"},"New Hampshire"),l.a.createElement("option",{value:"NJ"},"New Jersey"),l.a.createElement("option",{value:"NM"},"New Mexico"),l.a.createElement("option",{value:"NY"},"New York"),l.a.createElement("option",{value:"NC"},"North Carolina"),l.a.createElement("option",{value:"ND"},"North Dakota"),l.a.createElement("option",{value:"OH"},"Ohio"),l.a.createElement("option",{value:"OK"},"Oklahoma"),l.a.createElement("option",{value:"OR"},"Oregon"),l.a.createElement("option",{value:"PA"},"Pennsylvania"),l.a.createElement("option",{value:"RI"},"Rhode Island"),l.a.createElement("option",{value:"SC"},"South Carolina"),l.a.createElement("option",{value:"SD"},"South Dakota"),l.a.createElement("option",{value:"TN"},"Tennessee"),l.a.createElement("option",{value:"TX"},"Texas"),l.a.createElement("option",{value:"UT"},"Utah"),l.a.createElement("option",{value:"VT"},"Vermont"),l.a.createElement("option",{value:"VA"},"Virginia"),l.a.createElement("option",{value:"WA"},"Washington"),l.a.createElement("option",{value:"WV"},"West Virginia"),l.a.createElement("option",{value:"WI"},"Wisconsin"),l.a.createElement("option",{value:"WY"},"Wyoming"))),l.a.createElement("div",{className:"form-group col-md-2"},l.a.createElement("label",{htmlFor:"inputZip"},"Zip *"),l.a.createElement("input",{name:"zip",type:"text",className:"form-control",id:"inputZip"}))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputRole"},"User Role *"),l.a.createElement("select",{id:"inputRole",className:"form-control",name:"role",onChange:function(t){var a=t.target.value.isVolunteer;e.setVol(a),"volunteerH"===e.isVol&&e.setCurrentStep(2)}},l.a.createElement("option",{defaultValue:!0},"Chose role..."),l.a.createElement("option",{value:"cs"},"Regular Customer"),l.a.createElement("option",{value:"volunteerD"},"Volunteer Driver"),l.a.createElement("option",{value:"volunteerH"},"Volunteer Handyman")))))},y=function(e){if(e.currentStep<2)return null;var t=function(t){"No"===t.target.value?e.setIsInvalid(!0):e.setIsInvalid(!1)};return l.a.createElement("div",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-2"},l.a.createElement("label",{htmlFor:"inputSkill"},"Skill *"),l.a.createElement("select",{id:"inputSkill",className:"form-control",name:"skill"},l.a.createElement("option",{defaultValue:!0},"Choose Skill...")))),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"option1 option2"},"Do you have a personal business? *")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadioYes",value:"Yes",onChange:t}),l.a.createElement("label",{className:"form-check-lable",htmlFor:"inlineRadioYes"},"Yes")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"inlineRadioNo",value:"No",onChange:t}),l.a.createElement("label",{className:"form-check-lable",htmlFor:"inlineRadioYes"},"No")),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"business-name"},"Name of Business"),l.a.createElement("input",{name:"business",type:"text",placeholder:"(Optional)",className:"form-control",id:"business",disabled:e.isInvalid})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"business-website"},"Business website"),l.a.createElement("input",{className:"form-control",name:"website",placeholder:"(Optional)",id:"businessWeb",disabled:e.isInvalid}))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Finish Sign Up"))},S=function(){return l.a.createElement("p",null,"Don't have an account? ",l.a.createElement(c.b,{to:"/signup"},"Sign Up"))},O=Object(i.f)((function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),m=(i[0],i[1],Object(n.useState)("")),d=Object(s.a)(m,2),E=(d[0],d[1],Object(n.useState)("")),p=Object(s.a)(E,2),b=(p[0],p[1],Object(n.useState)(1)),h=Object(s.a)(b,2),S=h[0],O=h[1],w=Object(n.useState)(""),C=Object(s.a)(w,2),j=C[0],A=C[1],k=Object(n.useCallback)(function(){var t=Object(g.a)(f.a.mark((function t(a){var n,l,r,o,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.elements,l=n.name,r=n.email,o=n.passwordOne,n.passwordTwo,n.addressOne,n.addressTwo,n.city,n.state,n.zip,c=n.role,t.prev=2,t.next=5,u.auth().createUserWithEmailAndPassword(r.value,o.value).then((function(e){return u.auth().currentUser.updateProfile({displayName:l.value})}));case 5:console.log(c.value),e.history.push(v),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),alert(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),[e.history]),P=function(){var e=S;O(e=e>=2?2:e+1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Sign Up"),l.a.createElement("form",{onSubmit:k},l.a.createElement(N,{currentStep:S,setVol:A,isVol:j}),l.a.createElement(y,{currentStep:S,setIsInvalid:o,isInvalid:r}),S<2?l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:P},"Continue"):null)))})),w=function(e){e.history;var t=Object(n.useCallback)(function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements,n=a.email,l=a.password,e.prev=2,e.next=5,u.auth().signInWithEmailAndPassword(n.value,l.value);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(n.useContext)(E).currentUser?l.a.createElement(i.a,{to:v}):l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("input",{name:"email",type:"email",placeholder:"Email Address",className:"form-control"})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("input",{name:"password",type:"password",placeholder:"Password",className:"form-control"}))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"))},C=Object(i.f)((function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"),l.a.createElement(w,null),l.a.createElement(S,null),"  ")})),j=(a(112),a(13)),A=a.n(j),k=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"card-header bg-light card-head font-weight-bold"},e.task.headline),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-title"},e.task.task),l.a.createElement("h5",{className:"card-text"},"Created on ",e.task.createdAt.substring(0,10))))},P=function(e){return console.log(e.tasks),0===e.tasks.length?(console.log("here"),l.a.createElement("p",null,"No jobs posted")):e.tasks.map((function(t){return l.a.createElement("div",{className:"card mb-3"},l.a.createElement(k,{task:t,key:t._id}),l.a.createElement("div",{className:"card-body text-left"},l.a.createElement(c.b,{to:{pathname:"/job/"+t._id,id:t._id},className:"nav-link"},l.a.createElement("button",{type:"button",className:"btn btn-success btn-sm",onClick:function(){e.setSelectedID(t._id)}},"View job"))))}))},_=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),u=(i[0],i[1]),d=Object(n.useState)(!1),E=Object(s.a)(d,2),p=E[0],v=E[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),f=h[0],g=h[1];return Object(n.useEffect)((function(){m.auth().onAuthStateChanged((function(e){if(e){u(e.email);var t="/tasks/".concat(e.email);A.a.get(t).then((function(e){var t=e.data.reverse();o(t)})).catch((function(e){console.log(e)}))}}))}),[]),l.a.createElement("div",null,l.a.createElement("ul",{className:"posted-jobs_list"},l.a.createElement(P,{tasks:r,editing:p,setEditing:v,selectedID:f,setSelectedID:g})))},D=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null),l.a.createElement("div",{className:"container page"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"viewjob-main right-marg"},l.a.createElement("div",{className:"mb-panel posted-jobs",id:"my-posted-jobs"},l.a.createElement("h1",{className:"heading-large"},"My posted jobs"),l.a.createElement(_,null))),l.a.createElement("div",{className:"edit-sidebar"},l.a.createElement("div",{className:"mb-panel"},l.a.createElement("div",{className:"mb-panel_header"},l.a.createElement("h3",{className:"heading-caps"},"Post a new job")),l.a.createElement("p",{className:"cont-body"},"Click here to create a new job and let volunteers near you see!"),l.a.createElement("div",{className:"actions"},l.a.createElement(c.b,{to:"/create",className:"nav-link"},l.a.createElement("button",{type:"button",className:"btn btn-success btn-lg"},"Post a job")))))))))},I=a(34),T=(a(152),function(e){var t={"mysettings.general.name":"Dennis St\xfccken","mysettings.general.color-theme":"purple","mysettings.general.email":"dstuecken@react-settings-pane.com","mysettings.general.picture":"earth","mysettings.profile.firstname":"Dennis","mysettings.profile.lastname":"St\xfccken"};return l.a.createElement(I.SettingsPane,{items:[{title:"General",url:"/settings/general"},{title:"Profile",url:"/settings/profile"}],index:"/settings/general",settings:t,onPaneLeave:function(e,t,a){}},l.a.createElement(I.SettingsMenu,{headline:"Settings"}),l.a.createElement(I.SettingsContent,{closeButtonClass:"secondary",saveButtonClass:"primary",header:!0},l.a.createElement(I.SettingsPage,{handler:"/settings/general"},l.a.createElement("fieldset",{className:"form-group"},l.a.createElement("label",{for:"profileName"},"Name: "),l.a.createElement("input",{type:"text",className:"form-control",name:"mysettings.general.name",placeholder:"Name",id:"general.ame",onChange:function(e){},defaultValue:t["mysettings.general.name"]})),l.a.createElement("fieldset",{className:"form-group"},l.a.createElement("label",{for:"profileColor"},"Color-Theme: "),l.a.createElement("select",{name:"mysettings.general.color-theme",id:"profileColor",className:"form-control",defaultValue:t["mysettings.general.color-theme"]},l.a.createElement("option",{value:"blue"},"Blue"),l.a.createElement("option",{value:"red"},"Red"),l.a.createElement("option",{value:"purple"},"Purple"),l.a.createElement("option",{value:"orange"},"Orange")))),l.a.createElement(I.SettingsPage,{handler:"/settings/profile",options:[{key:"mysettings.general.email",label:"E-Mail address",type:"text"},{key:"mysettings.general.password",label:"Password",type:"password"}]})))}),R=(a(153),a(154),Object(i.f)((function(e){var t=e.history;return l.a.createElement("button",{type:"button",onClick:function(){try{d.auth().signOut(),t.push("/")}catch(e){alert(e)}}.bind(void 0)},"Sign Out")}))),M=function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg navbar-fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:v}," Home Order"),l.a.createElement("div",{className:"collpase navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement(c.b,{to:"/create",className:"nav-link"},l.a.createElement("button",{type:"button",className:"btn btn-light"},"Create Job")),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"dropbtn"},"Social"),l.a.createElement("div",{class:"dropdown-content"},l.a.createElement("a",{href:"/reviews"},"Volunteer Reviews"),l.a.createElement("a",{href:"/community"},"Community Board"),l.a.createElement("a",{href:"/faq"},"FAQ"))),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"dropbtn"},"User Account"),l.a.createElement("div",{class:"dropdown-content"},l.a.createElement("a",{href:"/settings/general"},"Control Panel"),l.a.createElement("a",{href:"/settings/profile"},"Edit Profile"))),l.a.createElement("div",{class:"dropdown"},l.a.createElement(c.b,{to:"/calendar",class:"lonk"},"Calendar"))),l.a.createElement("span",{className:"navbar-text"},"Hello, ",u.auth().currentUser.displayName,"!")," ",l.a.createElement("li",{className:"navbar-text"},l.a.createElement(R,{className:"btn btn-light"})))))},F=function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-primary navbar-expand-sm stick-top"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:v}," Home Order"),l.a.createElement("div",{className:"collpase navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement(c.b,{to:"/create",className:"nav-link"},l.a.createElement("button",{type:"button",className:"btn btn-light"},"Create Job")),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"dropbtn"},"Social"),l.a.createElement("div",{class:"dropdown-content"},l.a.createElement("a",{href:"/reviews"},"Volunteer Reviews"),l.a.createElement("a",{href:"/community"},"Community Board"),l.a.createElement("a",{href:"/faq"},"FAQ"))),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"dropbtn"},"Calendar"),l.a.createElement("div",{class:"dropdown-content"},l.a.createElement("a",{href:"/calendar"},"Calendar")))),l.a.createElement("div",{class:"dropdown"},l.a.createElement("button",{class:"dropbtn"},"Account"),l.a.createElement("div",{class:"dropdown-content"},l.a.createElement("a",{href:"/signin"},"Sign-In"),l.a.createElement("a",{href:"/signup"},"Sign-Up"))))))},x=function(){var e=Object(n.useContext)(E).currentUser;return l.a.createElement("div",{className:"header"},e?l.a.createElement(M,null):l.a.createElement(F,null),console.log(e))},L=a(94),B=a.n(L),W=(a(155),function(e){return e.currentStep<1?null:l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"form-question",for:"select-trade"},"What type of work do you need help with?"),l.a.createElement("select",{className:"custom-select",id:"select-trade",name:"select-trade",value:e.trade,onChange:function(t){return e.setTrade(t.target.value)},required:"required"},l.a.createElement("option",{selected:!0,disabled:!0,value:""},"Choose a category"),l.a.createElement("option",null,"Carpentry"),l.a.createElement("option",null,"Electrical"),l.a.createElement("option",null,"Fencing"),l.a.createElement("option",null,"Heating and Air Conditioning"),l.a.createElement("option",null,"Driveway"),l.a.createElement("option",null,"Guttering"),l.a.createElement("option",null,"Handyman"),l.a.createElement("option",null,"Insulation"),l.a.createElement("option",null,"Painting and Decorating"),l.a.createElement("option",null,"Locksmith"),l.a.createElement("option",null,"Appliances"),l.a.createElement("option",null,"Security Systems"),l.a.createElement("option",null,"Plumbing"),l.a.createElement("option",null,"Roofing"),l.a.createElement("option",null,"Windows"),l.a.createElement("option",null,"Pool"),l.a.createElement("option",null,"Gardening and Landscaping"),l.a.createElement("option",null,"I'm not sure what to pick")),l.a.createElement("div",{className:"invalid-tooltip"},"Please select an option"))}),K=function(e){return e.currentStep<2?null:l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Describe the task in detail"),l.a.createElement("textarea",{className:"form-control",id:"task",name:"task",type:"text",placeholder:"I need a new washing machine installed on the first floor, and the old washing machine dispose of.",value:e.task,onChange:function(t){return e.setTask(t.target.value)}}))},V=function(e){return e.currentStep<3?null:l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Create a headline for your job"),l.a.createElement("input",{className:"form-control",id:"headline",name:"headline",type:"text",placeholder:"New washing machine installed",value:e.headline,onChange:function(t){return e.setHeadline(t.target.value)}}))},H=function(e){return e.currentStep<4?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"When would you like the task done?"),l.a.createElement(B.a,{selected:e.date,onChange:e.setDate})),l.a.createElement("button",{className:"btn btn-success btn-block"},"Submit task"))},Y=function(e){var t=Object(n.useState)(1),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),u=i[0],d=i[1],E=Object(n.useState)(""),p=Object(s.a)(E,2),b=p[0],h=p[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),N=g[0],y=g[1],S=Object(n.useState)(""),O=Object(s.a)(S,2),w=O[0],C=O[1],j=Object(n.useState)(new Date),k=Object(s.a)(j,2),P=k[0],_=k[1];Object(n.useEffect)((function(){m.auth().onAuthStateChanged((function(e){e&&d(e.email)}))}),[]);var D=function(){var e=r;o(e=e>=4?4:e+1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-container"},l.a.createElement("h1",null,"Post a job"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={headline:b,task:w,email:u,date:P};A.a.post("/tasks/add",t),window.location=v,o(1),d(""),h(""),y(""),C(""),_(new Date)}},l.a.createElement(W,{currentStep:r,setTrade:y,trade:N}),l.a.createElement(K,{currentStep:r,setTask:C,task:w}),l.a.createElement(V,{currentStep:r,setHeadline:h,headline:b}),l.a.createElement(H,{currentStep:r,setDate:function(e){return _(e)},date:P}),r<4?l.a.createElement("button",{className:"btn btn-danger btn-lg btn-block",type:"button",onClick:D},"Next step"):null)))},U=function(e){return l.a.createElement("div",{className:"card post-editor"},l.a.createElement("div",{className:"card-body"},e.post.text,l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Answer this question","aria-label":"Answer","aria-describedby":"button-addon2"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-primary",type:"button",id:"button-addon2"},"Submit reply")))))},G=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),m=i[0],u=i[1];Object(n.useEffect)((function(){A.a.get("/posts/").then((function(e){u(e.data)})).catch((function(e){console.log(e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Community Board"),l.a.createElement("h3",null,"Ask questions and get answers from experts in your area"),l.a.createElement("div",{className:"card post-editor"},l.a.createElement("div",{className:"card-body"},"Ask a question",l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={text:r};A.a.post("/posts/add",t),window.location="/community",o("")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control post-editor-input",value:r,onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Submit Post",className:"btn btn-primary"}))))),m.map((function(e){return l.a.createElement(U,{post:e,key:e._id})})))},q=function(e){return l.a.createElement("div",{className:"card post-editor"},l.a.createElement("div",{className:"card-body"},e.review.text))},z=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),m=i[0],u=i[1];Object(n.useEffect)((function(){A.a.get("/reviews/").then((function(e){u(e.data)})).catch((function(e){console.log(e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Review Board"),l.a.createElement("h3",null,"Tell us how we did"),l.a.createElement("div",{className:"card post-editor"},l.a.createElement("div",{className:"card-body"},"Post a Review",l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={text:r};A.a.post("/reviews/add",t),window.location="/reviews",o("")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control post-editor-input",value:r,onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Submit Review",className:"btn btn-primary"}))))),m.map((function(e){return l.a.createElement(q,{review:e,key:e._id})})))},J=function(){return l.a.createElement("div",{class:"faqprofile"},l.a.createElement("h1",null,"Frequently Asked Questions"),l.a.createElement("h3",null,"Q: How do I place an order?"),l.a.createElement("h5",null,'A: If you click the button above that says "Create Job" it will walk you through the process of posting a job.'),l.a.createElement("br",null),l.a.createElement("h3",null,"Q: How do I become a volunteer if I'm already signed up?"),l.a.createElement("h5",null,"A: If you go into your ",l.a.createElement(c.b,{to:"/settings/general"},"Account"),', you can update any personal information you need as well as change member type between "Volunteer" and "Customer" '),l.a.createElement("br",null),l.a.createElement("h3",null,"Q: Do you store all my information that goes into the sign-up?"),l.a.createElement("h5",null,"A: No, the only information that is stored is your username for verification of a valid account."),l.a.createElement("br",null),l.a.createElement("h3",null,"Q: This is my first time using Home Order, are there any reviews I can see of current volunteers?"),l.a.createElement("h5",null,"A: You can actually check them out on the ",l.a.createElement(c.b,{to:"/reviews"},"reviews")," section. "),l.a.createElement("br",null),l.a.createElement("h3",null,"Q: I've never done any home projects before, can Home Order help me figure out what I need?"),l.a.createElement("h5",null,"A: Yes, if you go to our ",l.a.createElement(c.b,{to:"/community"},"community board")," you can ask get help from both volunteers and other people to narrow down what you may need."))},Z=a(98),Q=(a(212),function(e){var t=Object(n.useState)(new Date),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(12),i=Object(s.a)(c,2),m=i[0],u=(i[1],Object(n.useState)(0)),d=Object(s.a)(u,2),E=d[0],p=(d[1],Object(n.useState)(0)),v=Object(s.a)(p,2),b=v[0],h=(v[1],Object(n.useState)(12)),f=Object(s.a)(h,2),g=f[0],N=(f[1],Object(n.useState)(0)),y=Object(s.a)(N,2),S=y[0],O=(y[1],Object(n.useState)(0)),w=Object(s.a)(O,2),C=w[0],j=(w[1],Object(n.useState)("AM")),A=Object(s.a)(j,2),k=A[0],P=A[1],_=Object(n.useState)("PM"),D=Object(s.a)(_,2),I=D[0],T=D[1],R=Object(n.useState)(""),M=Object(s.a)(R,2),F=M[0],x=M[1],L=Object(n.useState)(!1),B=Object(s.a)(L,2),W=B[0],K=B[1];function V(){return l.a.createElement("div",null,F)}var V=V();return l.a.createElement("div",null,l.a.createElement("div",{class:"donk"},l.a.createElement("div",null,l.a.createElement(Z.a,{onChange:function(e){o(e)},selectRange:!0,value:r}))),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",{class:"donk"},"Click on a date twice or select a range of dates."),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",{class:"donk"},"--------------------------------------------------------------------------------------------------"),r.length>1&&r[0].toLocaleString().substring(0,r[0].toLocaleString().indexOf(","))===r[1].toLocaleString().substring(0,r[1].toLocaleString().indexOf(","))?l.a.createElement("div",{class:"donk"},l.a.createElement("div",null,"Selected day:"),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",null,"\xa0\xa0\xa0\xa0",r[0].toLocaleString().substring(0,r[0].toLocaleString().indexOf(",")),l.a.createElement("div",null,"\xa0"),"\xa0\xa0\xa0\xa0",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"12",onChange:function(){return K(!0)}}),":",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"00",onChange:function(){return K(!0)}}),":",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"00",onChange:function(){return K(!0)}}),"\xa0",l.a.createElement("select",{id:"inputAMPM1",onChange:function(e){return P(e.target.value)}},l.a.createElement("option",{defaultValue:!0},"AM"),l.a.createElement("option",{value:"PM"},"PM")),"\xa0to\xa0",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"11",onChange:function(){return K(!0)}}),":",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"59",onChange:function(){return K(!0)}}),":",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"59",onChange:function(){return K(!0)}}),"\xa0",l.a.createElement("select",{id:"inputAMPM2",onChange:function(e){return T(e.target.value)}},l.a.createElement("option",{defaultValue:!0},"PM"),l.a.createElement("option",{value:"AM"},"AM")),l.a.createElement("div",null,"\xa0"))):null==r[1]?l.a.createElement("div",{class:"donk"},l.a.createElement("div",null,"Selected day(s):"),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",null,"None. Please select the same date or a different date.")):l.a.createElement("div",{class:"donk"},l.a.createElement("div",null,l.a.createElement("div",null,"Selected days:"),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",null,"\xa0\xa0\xa0\xa0",r[0].toLocaleString().substring(0,r[0].toLocaleString().indexOf(",")),"\xa0\xa0--\xa0\xa0",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"12",onChange:function(){return K(!0)}}),":",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"00",onChange:function(){return K(!0)}}),":",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"00",onChange:function(){return K(!0)}}),"\xa0",l.a.createElement("select",{id:"inputAMPM3",onChange:function(e){return P(e.target.value)}},l.a.createElement("option",{defaultValue:!0},"AM"),l.a.createElement("option",{value:"PM"},"PM"))),l.a.createElement("div",null,"\xa0\xa0\xa0\xa0to"),l.a.createElement("div",null,"\xa0\xa0\xa0\xa0",r[1].toLocaleString().substring(0,r[1].toLocaleString().indexOf(",")),"\xa0\xa0--\xa0\xa0",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"11",onChange:function(){return K(!0)}}),":",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"59",onChange:function(){return K(!0)}}),":",l.a.createElement("input",{style:{width:25},type:"numeric",placeholder:"59",onChange:function(){return K(!0)}}),"\xa0",l.a.createElement("select",{id:"inputAMPM4",onChange:function(e){return T(e.target.value)}},l.a.createElement("option",{defaultValue:!0},"PM"),l.a.createElement("option",{value:"AM"},"AM")))),l.a.createElement("div",null,"\xa0")),l.a.createElement("div",{class:"donk"},"--------------------------------------------------------------------------------------------------"),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",{class:"donk"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){if(console.log(r),W)if("PM"===k&&"AM"===I)x("Error: invalid timespan. Enter times in chronological order."),console.log("Error: invalid timespan. Enter times in chronological order.");else{for(var e=[m,E,b,g,S,C],t=!0,a=0;a<e.length;a++){if(console.log(e[a]),Number(e[a])!==parseInt(Number(e[a]),10)){x("Error: input is not an integer."),console.log("Error: input is not an integer."),t=!1;break}if(a%3===0&&(e[a]<1||e[a]>12)||a%3!==0&&(e[a]<0||e[a]>59)){x("Error: input is out of bounds. Enter integers in between 1 and 12 or 0 and 59."),console.log("Error: input is out of bounds. Enter integers in between 1 and 12 or 0 and 59."),t=!1;break}}if(!0===t)for(a=0;a<e.length;a++)x("Hours added!"),console.log("Hours added!"),e[a]=Number(e[a]);console.log(k),console.log(I)}else x("Error: input not changed. Enter integers in between 0 and 12 or 0 and 59."),console.log("Error: input not changed. Enter integers in between 0 and 12 or 0 and 59.")}},"Submit")),l.a.createElement("div",null,"\xa0"),l.a.createElement("div",{class:"donk"},V))}),X=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),u=(i[0],i[1]),d=Object(n.useState)(""),E=Object(s.a)(d,2),p=E[0],b=E[1],h=Object(n.useState)(new Date),f=Object(s.a)(h,2),g=(f[0],f[1]),N=Object(n.useState)(""),y=Object(s.a)(N,2),S=y[0],O=y[1],w=Object(n.useState)(""),C=Object(s.a)(w,2),j=(C[0],C[1]);Object(n.useEffect)((function(){m.auth().onAuthStateChanged((function(t){if(t){j(t.email);var a="/tasks/".concat(t.email);A.a.get(a).then((function(t){var a=t.data.filter((function(t){return t._id===e.location.id}));b(a[0].headline),o(a[0].task),g(a[0].date),O(a[0].createdAt.substring(0,10))})).catch((function(e){console.log(e)}))}}))}),[]);return l.a.createElement("div",{className:"container page"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"viewjob-header"},l.a.createElement("div",{className:"mb-panel"},l.a.createElement("h3",{className:"card-title"},p),l.a.createElement("h5",{className:"card-text"},"Created on ",S))),l.a.createElement("div",{className:"edit-sidebar"},l.a.createElement("div",{className:"mb-panel"},l.a.createElement("div",{className:"mb-panel-header"},l.a.createElement("p",{className:"cont-body"},"Edit job"),l.a.createElement("a",{href:"#",onClick:function(){!function(t){var a=e.location.id,n="/tasks/".concat(a);console.log(n),A.a.delete(n).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),console.log("###########"),window.location=v,j(""),b(""),u([]),o(""),g(new Date),O("")}()}},"Delete job")))),l.a.createElement("div",{className:"viewjob-main"},l.a.createElement("div",{className:"mb-panel"},l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"card-header bg-light card-head font-weight-bold"},"Job description"),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-title"},r))))))))},$=a(97),ee=a.n($),te=function(){return l.a.createElement("div",{className:"page"},l.a.createElement(p,null,l.a.createElement(c.a,null,l.a.createElement("div",{className:"c"},l.a.createElement(x,null),l.a.createElement("br",null),l.a.createElement("div",{className:"body"},l.a.createElement(i.b,{path:"/create",component:Y}),l.a.createElement(i.b,{path:"/community",component:G}),l.a.createElement(i.b,{path:"/reviews",component:z}),l.a.createElement(i.b,{path:"/calendar",component:Q}),l.a.createElement(i.b,{path:"/faq",component:J}),l.a.createElement(i.b,{exact:!0,path:"/",component:b}),l.a.createElement(i.b,{exact:!0,path:"/signup",component:O}),l.a.createElement(i.b,{path:"/signin",component:C}),l.a.createElement(i.b,{path:v,component:D}),l.a.createElement(i.b,{path:"/settings/general",component:T}),l.a.createElement(i.b,{path:ee.a.join("/job",":id?"),component:X}))))),l.a.createElement("footer",{className:"site-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"The page was made possible by Gator Delivery"))))};a(213),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(te,null)),document.getElementById("root"))},50:function(e,t,a){},99:function(e,t,a){e.exports=a(214)}},[[99,1,2]]]);
//# sourceMappingURL=main.28a2d664.chunk.js.map