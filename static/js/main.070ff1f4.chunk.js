(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__4WcYL",total:"Cart_total__2y8QH",actions:"Cart_actions__2A6Hv","button--alt":"Cart_button--alt__22L9j",button:"Cart_button__2Hecl"}},,function(e,t,n){e.exports={profile:"Profile_profile__2iUmz",otherButtonsOne:"Profile_otherButtonsOne__1g670",otherButtonsTwo:"Profile_otherButtonsTwo__Z0Am1"}},function(e,t,n){e.exports={"footer-background":"Contact_footer-background__33h3Q",footer:"Contact_footer__2pqg5",founders:"Contact_founders__25ars",nav:"Contact_nav__2tijL"}},function(e,t,n){e.exports={"svg-icon":"Help_svg-icon__XOHFQ"}},function(e,t,n){e.exports={"main-header":"NavBar_main-header__3BdGI",logo:"NavBar_logo__3BWNs",toggle:"NavBar_toggle__17u4F"}},function(e,t,n){e.exports={front:"Front_front__ET95o",title:"Front_title__2qNMF",fadeIn:"Front_fadeIn__H_J3m",card:"Front_card__QAv_E","text-box":"Front_text-box__15_-S"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__29I7D",modal:"Modal_modal__2G9ic","slide-down":"Modal_slide-down__D2Ypu"}},function(e,t,n){e.exports={control:"Input_control__3VYa7",invalid:"Input_invalid__1UtAL"}},,function(e,t,n){e.exports={nav:"Navigation_nav__F485x"}},function(e,t,n){e.exports={button:"Button_button__3QjRc"}},function(e,t,n){e.exports={"svg-icon":"blank-profile_svg-icon__3l4RM"}},function(e,t,n){e.exports={button:"OtherButtons_button__58IFr"}},function(e,t,n){e.exports={"svg-icon":"SettingsIcon_svg-icon__38WlY"}},function(e,t,n){e.exports={"svg-icon":"ShoppingCart_svg-icon__3k5zI"}},function(e,t,n){e.exports={"svg-icon":"History_svg-icon__Rv_3U"}},function(e,t,n){e.exports={items:"ProfileSettings_items__pNJEu"}},function(e,t,n){e.exports=n(45)},,,,,function(e,t,n){},,function(e,t,n){},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),o=n.n(l),r=(n(25),n(1)),i=(n(27),n(7)),u=n.n(i),s=n(12),m=n.n(s),d=n(13),v=n.n(d),E=function(e){return c.a.createElement("button",{type:e.type||"button",className:"".concat(v.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled},e.children)},_=c.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,t){}}),f=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),l=n[0],o=n[1];Object(a.useEffect)(function(){"1"===localStorage.getItem("isLoggedIn")&&o(!0)},[]);return c.a.createElement(_.Provider,{value:{isLoggedIn:l,onLogout:function(){localStorage.removeItem("isLoggedIn"),o(!1)},onLogin:function(){localStorage.setItem("isLoggedIn","1"),o(!0)}}},e.children)},g=_,h=function(e){var t=Object(a.useContext)(g);return c.a.createElement("nav",{className:m.a.nav},c.a.createElement("ul",null,c.a.createElement("li",null,"Why IVonDemand?"),c.a.createElement("li",null,"Resources"),c.a.createElement("li",null,"Products"),c.a.createElement("li",null,"Contact Us"),c.a.createElement(E,null,"Get Started!"),t.isLoggedIn&&c.a.createElement(E,{onClick:t.onLogout},"logout")))},p=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],l=t[1],o=function(){l(function(e){return!e})};return c.a.createElement("div",null,c.a.createElement("header",{className:u.a["main-header"]},c.a.createElement("div",{className:u.a.logo},"IVonDemand"),c.a.createElement("div",{className:u.a.toggle,onClick:o,value:n},"=")),n&&c.a.createElement(h,{onClick:o}))},C=n(8),b=n.n(C),N=n(10),M=n.n(N),L=function(e){return c.a.createElement("div",{className:"".concat(M.a.control," ").concat(!1===e.isValid?M.a.invalid:"")},c.a.createElement("label",{htmlFor:e.id},e.label),c.a.createElement("input",{type:e.type,id:e.id,value:e.value,onChange:e.onChange,onBlur:e.onBlur,placeholder:e.placeholder}))},I=n(4),w=n.n(I),V=n(14),x=n.n(V),y=function(){return c.a.createElement("svg",{className:x.a["svg-icon"],viewBox:"0 0 20 20"},c.a.createElement("path",{fill:"none",d:"M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512\r c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186\r c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646\r c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367\r c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328\r C15.328,9.982,12.943,12.367,10,12.367z"}))},B=n(15),S=n.n(B),O=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:e.type||"button",className:"".concat(S.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled},e.children))},z=n(16),k=n.n(z),P=function(){return c.a.createElement("svg",{className:k.a["svg-icon"],viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"}))},j=n(17),H=n.n(j),U=function(){return c.a.createElement("svg",{className:H.a["svg-icon"],viewBox:"0 0 20 20"},c.a.createElement("path",{fill:"none",d:"M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"}))},F=n(18),T=n.n(F),R=function(){return c.a.createElement("svg",{className:T.a["svg-icon"],viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"}))},D=n(6),A=n.n(D),Q=function(){return c.a.createElement("svg",{className:A.a["svg-icon"],viewBox:"0 0 20 20"},c.a.createElement("path",{fill:"none",d:"M14.9,6.707c-0.804-2.497-3.649-4.351-7.035-4.351c-4.008,0-7.27,2.594-7.27,5.782 c0,2.163,1.516,4.133,3.903,5.122v3.091c0,0.251,0.144,0.478,0.372,0.586c0.087,0.042,0.182,0.062,0.276,0.062 c0.148,0,0.295-0.051,0.412-0.15l3.678-3.038c0.14-0.022,0.275-0.057,0.413-0.084c0.655,0.666,1.544,1.185,2.607,1.46 c0.198,0.051,0.401,0.094,0.608,0.125l2.641,2.182c0.118,0.099,0.264,0.15,0.413,0.15c0.094,0,0.188-0.02,0.276-0.062 c0.228-0.108,0.372-0.335,0.372-0.586v-2.135c1.74-0.761,2.84-2.231,2.84-3.846C19.405,8.862,17.456,7.073,14.9,6.707z M8.885,12.552c-0.019,0.003-0.032,0.018-0.051,0.022c-0.101,0.022-0.2,0.056-0.281,0.123l-2.76,2.28v-2.161 c0-0.275-0.175-0.521-0.434-0.612C3.253,11.467,1.89,9.871,1.89,8.138c0-2.474,2.68-4.487,5.975-4.487 c2.604,0,4.801,1.265,5.617,3.014c0.187,0.401,0.302,0.823,0.33,1.268c0.005,0.069,0.028,0.134,0.028,0.205 c0,1.819-1.481,3.438-3.706,4.129c-0.115,0.037-0.224,0.08-0.343,0.111C9.497,12.455,9.196,12.513,8.885,12.552z M15.703,13.809 c-0.259,0.091-0.434,0.336-0.434,0.612v1.199l-1.723-1.422c-0.095-0.079-0.211-0.129-0.333-0.144 c-0.219-0.028-0.431-0.068-0.636-0.121c-0.545-0.14-1.023-0.364-1.433-0.64c2.423-0.969,3.99-2.942,3.99-5.155 c0-0.024-0.004-0.047-0.005-0.071c1.718,0.385,2.98,1.553,2.98,2.948C18.11,12.202,17.165,13.299,15.703,13.809z"}),c.a.createElement("path",{fill:"none",d:"M4.68,7.591h6.167c0.358,0,0.648-0.29,0.648-0.648s-0.29-0.648-0.648-0.648H4.68 c-0.358,0-0.648,0.29-0.648,0.648S4.323,7.591,4.68,7.591z"}),c.a.createElement("path",{fill:"none",d:"M8.709,8.636H4.68c-0.358,0-0.648,0.29-0.648,0.648c0,0.358,0.29,0.648,0.648,0.648h4.028 c0.358,0,0.648-0.29,0.648-0.648C9.356,8.926,9.067,8.636,8.709,8.636z"}))},W=function(){return c.a.createElement("svg",{className:A.a["svg-icon"],viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M3.24,7.51c-0.146,0.142-0.146,0.381,0,0.523l5.199,5.193c0.234,0.238,0.633,0.064,0.633-0.262v-2.634c0.105-0.007,0.212-0.011,0.321-0.011c2.373,0,4.302,1.91,4.302,4.258c0,0.957-0.33,1.809-1.008,2.602c-0.259,0.307,0.084,0.762,0.451,0.572c2.336-1.195,3.73-3.408,3.73-5.924c0-3.741-3.103-6.783-6.916-6.783c-0.307,0-0.615,0.028-0.881,0.063V2.575c0-0.327-0.398-0.5-0.633-0.261L3.24,7.51 M4.027,7.771l4.301-4.3v2.073c0,0.232,0.21,0.409,0.441,0.366c0.298-0.056,0.746-0.123,1.184-0.123c3.402,0,6.172,2.709,6.172,6.041c0,1.695-0.718,3.24-1.979,4.352c0.193-0.51,0.293-1.045,0.293-1.602c0-2.76-2.266-5-5.046-5c-0.256,0-0.528,0.018-0.747,0.05C8.465,9.653,8.328,9.81,8.328,9.995v2.074L4.027,7.771z"}))},J=function(e){var t=Object(a.useContext)(g);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:w.a.profile},c.a.createElement("span",null,c.a.createElement("h3",null,"Welcome ADMIN!")),c.a.createElement("span",{className:w.a["svg-icon"]},c.a.createElement(y,null))),c.a.createElement("div",{className:w.a.otherButtonsOne},c.a.createElement(O,{onClick:e.onShowProfile},c.a.createElement(y,null),"profile"),c.a.createElement(O,{onClick:e.onShowCart},c.a.createElement(U,null),"cart"),c.a.createElement(O,null,c.a.createElement(R,null),"history")),c.a.createElement("div",{className:w.a.otherButtonsTwo},c.a.createElement(O,null,c.a.createElement(Q,null),"help"),c.a.createElement(O,null,c.a.createElement(P,null),"settings"),c.a.createElement(O,{onClick:t.onLogout},c.a.createElement(W,null),"logout")))},Y=function(e,t){return"USER_INPUT"===t.type?{value:t.val,isValid:"admin@admin.com"===t.val}:"INPUT_BLUR"===t.type?{value:e.value,isValid:"admin@admin.com"===e.value}:{value:"wow",isValid:null}},G=function(e,t){return"USER_INPUT"===t.type?{value:t.val,isValid:"admin"===t.val}:"INPUT_BLUR"===t.type?{value:e.value,isValid:"admin"===e.value}:{value:"wow",isValid:null}},q=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),l=n[0],o=n[1],i=Object(a.useContext)(g),u=Object(a.useReducer)(Y,{value:"admin@admin.com",isValid:!0}),s=Object(r.a)(u,2),m=s[0],d=s[1],v=Object(a.useReducer)(G,{value:"admin",isValid:!0}),_=Object(r.a)(v,2),f=_[0],h=_[1],p=m.isValid,C=f.isValid;Object(a.useEffect)(function(){var e=setTimeout(function(){console.log("checking validity"),o(p&&C)},300);return function(){console.log("cleanup"),clearTimeout(e)}},[p,C]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:b.a.front},!i.isLoggedIn&&c.a.createElement("div",{className:b.a.title},c.a.createElement("h1",null,c.a.createElement("span",null,"IV On Demand"),c.a.createElement("span",null,"stick it in the vein"))),c.a.createElement("div",{className:b.a.card},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&(console.log("submitted"),i.onLogin(m.value,f.value))}},!i.isLoggedIn&&c.a.createElement(L,{type:"email",id:"email",placeholder:" email",onChange:function(e){d({type:"USER_INPUT",val:e.target.value})},onBlur:function(){d({type:"INPUT_BLUR"})},isValid:p,value:m.value}),!i.isLoggedIn&&c.a.createElement(L,{type:"password",id:"password",placeholder:" password",onChange:function(e){h({type:"USER_INPUT",val:e.target.value})},onBlur:function(){h({type:"INPUT_BLUR"})},isValid:C,value:f.value}),!i.isLoggedIn&&c.a.createElement(E,{type:"submit",disabled:!l},"login"),i.isLoggedIn&&c.a.createElement(J,{onShowCart:e.onShowCart,onShowProfile:e.onShowProfile})))))},X=n(5),Z=n.n(X),K=function(e){return c.a.createElement("div",{className:Z.a["footer-background"]},c.a.createElement("footer",{className:Z.a.footer},c.a.createElement("hr",null),c.a.createElement("h2",{className:Z.a.founders},"Founders"),c.a.createElement("nav",{className:Z.a.nav},c.a.createElement("ul",null,c.a.createElement("h3",null,"Developers / Engineers"),c.a.createElement("li",null,"Thi Nguyen"),c.a.createElement("li",null,"Mimi Vo"),c.a.createElement("li",null,"Vinh Phan"),c.a.createElement("li",null,"Andrews Nguyen-Phan")),c.a.createElement("ul",null,c.a.createElement("h3",null,"Design"),c.a.createElement("li",null,"Ryan Pursel")),c.a.createElement("ul",null,c.a.createElement("h3",null,"Medical Expertise"),c.a.createElement("li",null,"Tim Fischer"),c.a.createElement("li",null,"Ryan Pursel")))))},$=n(2),ee=n.n($),te=n(9),ne=n.n(te),ae=function(e){return c.a.createElement("div",{className:ne.a.backdrop,onClick:e.onClose})},ce=function(e){return c.a.createElement("div",{className:ne.a.modal},c.a.createElement("div",{className:ne.a.content},e.children))},le=document.getElementById("overlays"),oe=function(e){return c.a.createElement(c.a.Fragment,null,o.a.createPortal(c.a.createElement(ae,{onClose:e.onClose}),le),o.a.createPortal(c.a.createElement(ce,null,e.children),le))},re=function(e){var t=c.a.createElement("ul",{className:ee.a["cart-items"]},[{id:"c1",name:"IV",amount:2,price:12.99}].map(function(e){return c.a.createElement("li",null,e.name)}));return c.a.createElement(oe,{onClose:e.onClose},t,c.a.createElement("div",{className:ee.a.total},c.a.createElement("span",null,"Total Amount"),c.a.createElement("span",null,"4.20")),c.a.createElement("div",{className:ee.a.actions},c.a.createElement("button",{className:ee.a.buttonOne,onClick:e.onClose},"close"),c.a.createElement("button",{className:ee.a.buttonTwo},"Order")))},ie=n(19),ue=n.n(ie),se=function(e){var t=c.a.createElement("form",{className:ue.a.items},c.a.createElement("input",{placeholder:"First Name"}));return c.a.createElement(oe,null,t)};var me=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(!1),i=Object(r.a)(o,2),u=i[0],s=i[1];return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(re,{onClose:function(){l(!1)}}),u&&c.a.createElement(se,{onClose:function(){s(!1)}}),c.a.createElement(p,null),c.a.createElement(q,{onShowCart:function(){l(!0)},onShowProfile:function(){s(!0)}}),c.a.createElement(K,null))};o.a.render(c.a.createElement(f,null,c.a.createElement(me,null)),document.getElementById("root"))}],[[20,2,1]]]);
//# sourceMappingURL=main.070ff1f4.chunk.js.map