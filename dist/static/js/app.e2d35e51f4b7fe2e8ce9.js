webpackJsonp([1],{"+lBM":function(e,t){e.exports={_from:"truffle-contract-schema@0.0.5",_id:"truffle-contract-schema@0.0.5",_inBundle:!1,_integrity:"sha1-Xp0gvQvyon/pQxB0gknUhO7kmWE=",_location:"/truffle-contract-schema",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"truffle-contract-schema@0.0.5",name:"truffle-contract-schema",escapedName:"truffle-contract-schema",rawSpec:"0.0.5",saveSpec:null,fetchSpec:"0.0.5"},_requiredBy:["/truffle-contract"],_resolved:"https://registry.npmjs.org/truffle-contract-schema/-/truffle-contract-schema-0.0.5.tgz",_shasum:"5e9d20bd0bf2a27fe94310748249d484eee49961",_spec:"truffle-contract-schema@0.0.5",_where:"/home/daniel/dev/vue/apps/eth-vue/node_modules/truffle-contract",author:{name:"Tim Coulter",email:"tim.coulter@consensys.net"},bugs:{url:"https://github.com/trufflesuite/truffle-schema/issues"},bundleDependencies:!1,dependencies:{"crypto-js":"^3.1.9-1"},deprecated:!1,description:"JSON schema for contract artifacts",devDependencies:{mocha:"^3.2.0"},homepage:"https://github.com/trufflesuite/truffle-schema#readme",keywords:["ethereum","json","schema","contract","artifacts"],license:"MIT",main:"index.js",name:"truffle-contract-schema",repository:{type:"git",url:"git+https://github.com/trufflesuite/truffle-schema.git"},scripts:{test:"mocha"},version:"0.0.5"}},"+xc3":function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return i});var a={1:"Main Net",2:"Deprecated Morden test network",3:"Ropsten test network",4:"Rinkeby test network",42:"Kovan test network",765:"DanielNet test network",approvedBlockchainNetwork:"3"},s={CHANGE_CURRENT_ROUTE_TO:"changeCurrentRouteTo",REGISTER_WEB3_INSTANCE:"registerWeb3Instance",UPDATE_USER_BLOCKCHAIN_STATUS:"updateUserBlockchainStatus",LOGIN:"login",LOGOUT:"logout"},i=s},"0lwJ":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sticky header",attrs:{id:"header-template"}},[n("div",{staticClass:"content"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("INSERT YOUR LOGO HERE")]),e._v(" "),n("div",{staticClass:"links"},[e.isLoggedIn?e._e():n("router-link",{staticClass:"link1",attrs:{to:"/sign-up"}},[e._v("Sign Up")]),e._v(" "),e.isLoggedIn?e._e():n("span",{staticClass:"divider"}),e._v(" "),e.isLoggedIn?e._e():n("input",{staticClass:"link1",attrs:{type:"button",value:"Login"},on:{click:e.logUserIn}}),e._v(" "),e.isLoggedIn?e._e():n("span",{staticClass:"divider"}),e._v(" "),e.isLoggedIn?n("router-link",{staticClass:"link2",attrs:{to:"/profile/edit"}},[e._v("Edit Profile")]):e._e(),e._v(" "),e.isLoggedIn?n("span",{staticClass:"divider"}):e._e(),e._v(" "),e.isLoggedIn?n("input",{staticClass:"link2",attrs:{type:"button",value:"Logout"},on:{click:e.logUserOut}}):e._e(),e._v(" "),e.isLoggedIn?n("span",{staticClass:"divider"}):e._e(),e._v(" "),n("a",{staticClass:"link3",attrs:{href:"https://github.com/DOkwufulueze/eth-vue",target:"_blank"}},[e._v("Github")]),e._v(" "),n("span",{staticClass:"divider"}),e._v(" "),n("a",{staticClass:"link4",attrs:{href:"http://danielokwufulueze.com",target:"_blank"}},[e._v("www")])],1)],1)])},s=[],i={render:a,staticRenderFns:s};t.a=i},"1Sql":function(e,t,n){"use strict";var a=n("Dd8w"),s=n.n(a),i=n("NYxO"),o=n("N9OI"),r=n("+xc3");t.a={name:"header-template",computed:{user:function(){return this.$store.state.user},isLoggedIn:function(){return this.$store.state.user.isLoggedIn}},methods:s()({},n.i(i.b)([r.a.LOGIN,r.a.LOGOUT]),{logUserIn:function(e){var t=this;e.target.disabled=!0,this.$store.state.user.isLoggedIn||o.a.login(this.$store.state).then(function(n){t[r.a.LOGIN](n).then(function(n){e.target.disabled=!1,t.$store.state.user.isLoggedIn?t.$router.push("/dashboard"):t.$router.push("/")})})},logUserOut:function(e){var t=this;e.target.disabled=!0,this[r.a.LOGOUT]().then(function(){e.target.disabled=!1,t.$router.push("/")})}})}},"2NTp":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"profile-form"}},[n("h3",[e._v(e._s("/sign-up"===this.$route.path?"Sign Up":"Edit Profile"))]),e._v(" "),n("div",{staticClass:"row"},[n("label",{attrs:{for:"first-name"}},[e._v("First name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",id:"first-name",name:"first-name"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"row"},[n("label",{attrs:{for:"last-name"}},[e._v("Last name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"Last-name",name:"Last-name"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"row"},[n("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"row"},[n("input",{attrs:{type:"button",value:"Submit"},on:{click:e.submitProfileToTheBlockchain}})])])},s=[],i={render:a,staticRenderFns:s};t.a=i},"2g7C":function(e,t,n){"use strict";function a(e){n("HPCu")}var s=n("f2im"),i=n("mOn1"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,"data-v-10c3d417",null);t.a=u.exports},D5te:function(e,t){e.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},DQit:function(e,t){},EEbw:function(e,t){e.exports={version:"0.16.0"}},EWfp:function(e,t,n){"use strict";function a(e){n("DQit")}var s=n("EZYi"),i=n("xGuS"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,null,null);t.a=u.exports},EZYi:function(e,t,n){"use strict";var a=n("Dd8w"),s=n.n(a),i=n("NYxO"),o=n("+xc3"),r=n("POeb"),u=n("Z1Py"),c=n("rEmu");t.a={name:"app",computed:s()({},n.i(i.a)({hasInjectedWeb3:function(e){return e.web3.isInjected},hasWeb3InjectedBrowser:function(e){return e.user.hasWeb3InjectedBrowser},isConnectedToApprovedNetwork:function(e){return e.user.isConnectedToApprovedNetwork},hasCoinbase:function(e){return e.user.hasCoinbase},networkId:function(e){return e.web3.networkId},coinbase:function(e){return e.web3.coinbase},currentRoute:function(e){return e.currentRoute},user:function(e){return e.user}}),{currentView:function(){switch(this.$route.path){case"/home":return c.a;case"/dashboard":return r.a;case"/sign-up":case"/profile/edit":return u.a;default:return c.a}}}),components:{Profile:r.a,ProfileForm:u.a,Web3Message:c.a},beforeCreate:function(){var e=this;this.$store.dispatch(o.a.REGISTER_WEB3_INSTANCE).then(function(){e.$store.dispatch(o.a.UPDATE_USER_BLOCKCHAIN_STATUS)}).catch(function(e){console.log("We've encountered problems with your Web3 connection")})},created:function(){this[o.a.CHANGE_CURRENT_ROUTE_TO](this.$route)},methods:s()({},n.i(i.b)([o.a.CHANGE_CURRENT_ROUTE_TO,o.a.UPDATE_USER_BLOCKCHAIN_STATUS])),watch:{hasInjectedWeb3:function(e){console.log("hasInjectedWeb3: ",e)},networkId:function(e){console.log("networkId: "+e)},coinbase:function(e){console.log("coinbase: "+e)},$route:function(e){this[o.a.CHANGE_CURRENT_ROUTE_TO](e)}}}},Fs8J:function(e,t,n){"use strict";var a=n("yz5X"),s=n("ffIc"),i=n("2g7C");t.a={name:"home",props:["currentView"],components:{HeaderTemplate:a.a,BodyTemplate:s.a,FooterTemplate:i.a},computed:{user:function(){return this.$store.state.user}}}},HPCu:function(e,t){},IcnI:function(e,t,n){"use strict";var a=n("7+uW"),s=n("NYxO"),i=n("lwq5"),o=n("mUbh"),r=n("UjVw"),u=n.n(r),c=n("ukYY");a.a.use(s.c);var d=new s.c.Store({state:i.a,actions:o.a,getters:u.a,mutations:c.a});t.a=d},LmkH:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("HeaderTemplate"),e._v(" "),n("BodyTemplate",{attrs:{"current-view":e.currentView}}),e._v(" "),n("FooterTemplate")],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},N9OI:function(e,t,n){"use strict";var a=n("//Fk"),s=n.n(a),i=n("Zrlr"),o=n.n(i),r=n("wxAW"),u=n.n(r),c=n("dztg"),d=n.n(c),p=n("ZBzV"),m=n.n(p),f=null,l=function(){function e(){return o()(this,e),f=f||this}return u()(e,[{key:"editProfile",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s.a(function(a,i){e.accessAuthenticationContractWith({state:t,method:function(e,t){return new s.a(function(a,s){e.update(n.firstName,n.lastName,n.email,{from:t}).then(function(e){a(n)}).catch(function(e){console.error(e)})})}}).then(function(e){a(e)})})}},{key:"signup",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s.a(function(a,i){e.accessAuthenticationContractWith({state:t,method:function(e,t){return new s.a(function(a,s){e.signup(n.firstName,n.lastName,n.email,{from:t}).then(function(e){a(n)}).catch(function(e){console.error(e)})})}}).then(function(e){a(e)})})}},{key:"login",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new s.a(function(n,a){e.accessAuthenticationContractWith({state:t,method:function(n,a){return new s.a(function(s,i){n.login({from:a}).then(function(n){s(e.getUTF8DataOfResults(t,n))}).catch(function(e){console.error(e)})})}}).then(function(e){n(e)})})}},{key:"accessAuthenticationContractWith",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.state;return new s.a(function(n,a){if(t&&t.web3&&t.web3.instance){var s=d()(m.a);s.setProvider(t.web3.instance().currentProvider),t.web3.instance().eth.getCoinbase(function(t,i){t?(console.err(":::Unable to get coinbase for this operation"),a(t)):s.deployed().then(function(t){e.method(t,i).then(function(e){n(e)})})})}else console.log("Web3 is not initialised. Use a Web3 injector")})}},{key:"getUTF8DataOfResults",value:function(e,t){var n=t.map(function(t){return e.web3.instance().toUtf8(t)});return{firstName:n[0],lastName:n[1],email:n[2]}}}]),e}();t.a=new l},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s=n("EWfp"),i=n("YaEn"),o=n("IcnI");a.a.config.devtools=!0,a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,store:o.a,template:"<App />",components:{App:s.a}})},Ow54:function(e,t){},POeb:function(e,t,n){"use strict";function a(e){n("zrg/")}var s=n("SQ2D"),i=n("myIA"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,"data-v-010bf07b",null);t.a=u.exports},Qm11:function(e,t){e.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},"R/pS":function(e,t){e.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},SQ2D:function(e,t,n){"use strict";t.a={name:"profile",computed:{user:function(){return this.$store.state.user},isLoggedIn:function(){return this.$store.state.user.isLoggedIn}}}},TGvd:function(e,t,n){"use strict";function a(e){n("Ow54")}var s=n("aEfQ"),i=n("m7aE"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,"data-v-2d3a9c31",null);t.a=u.exports},"U+8w":function(e,t){},UIsv:function(e,t){e.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},UjVw:function(e,t){},VfEa:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"web3-message"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"message"},[e.user.hasWeb3InjectedBrowser?n("div",[e._v("\n        Your browser is Web3-injected.\n        "),n("br"),e._v(" "),e.user.isConnectedToApprovedNetwork?n("div",[e._v("\n          You are also connected to the "+e._s(e.approvedNetworkName)+" on the blockchain.\n          "),n("br"),e._v(" "),e.user.hasCoinbase?n("div",[e._v("\n            And you have an account on the blockchain."),n("br"),e._v("\n            You're all set to use the dApp. Click the LOGIN button above to begin.\n          ")]):n("div",[e._v("\n            But it seems you don't have an account with us on the blockchain."),n("br"),e._v("Or you do but the account is currently inaccessible."),n("br"),e._v("Create an account on the blockchain and sign up to begin, or make your existing account accessible.\n          ")])]):n("div",[e._v("\n          But you are not connected to the network on the blockchain ["+e._s(e.approvedNetworkName)+"]."),n("br"),e._v("\n          Connect to the "+e._s(e.approvedNetworkName)+".\n        ")])]):n("div",[e._v("\n        Your browser is not Web3-injected. To use the dApp, you can install "),n("a",{attrs:{href:"https://metamask.io/"}},[e._v("Metamask")]),e._v(".\n        "),n("div",{staticClass:"metamask-resource"})])])])])},s=[],i={render:a,staticRenderFns:s};t.a=i},WP4h:function(e,t){e.exports={version:"0.18.4"}},XDkp:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.currentView,{tag:"component",staticClass:"body-template"})},s=[],i={render:a,staticRenderFns:s};t.a=i},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),s=n("/ocq"),i=n("lO7g"),o=n("TGvd");a.a.use(s.a),t.a=new s.a({routes:[{mode:"history",path:"/",name:"Home",component:i.a},{mode:"history",path:"/home",component:i.a},{mode:"history",path:"/dashboard",component:o.a},{mode:"history",path:"/sign-up",component:i.a},{mode:"history",path:"/profile/edit",component:o.a}]})},Z1Py:function(e,t,n){"use strict";function a(e){n("U+8w")}var s=n("v4ix"),i=n("2NTp"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,"data-v-0692b5df",null);t.a=u.exports},ZBzV:function(e,t){e.exports={contract_name:"Authentication",abi:[{constant:!1,inputs:[{name:"firstName",type:"bytes32"},{name:"lastName",type:"bytes32"},{name:"email",type:"bytes32"}],name:"signup",outputs:[{name:"",type:"bytes32"},{name:"",type:"bytes32"},{name:"",type:"bytes32"}],payable:!0,type:"function"},{constant:!1,inputs:[],name:"destroy",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"firstName",type:"bytes32"},{name:"lastName",type:"bytes32"},{name:"email",type:"bytes32"}],name:"update",outputs:[{name:"",type:"bytes32"},{name:"",type:"bytes32"},{name:"",type:"bytes32"}],payable:!0,type:"function"},{constant:!0,inputs:[],name:"login",outputs:[{name:"",type:"bytes32"},{name:"",type:"bytes32"},{name:"",type:"bytes32"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_recipient",type:"address"}],name:"destroyAndSend",outputs:[],payable:!1,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_userAddress",type:"address"},{indexed:!1,name:"_firstName",type:"bytes32"},{indexed:!1,name:"_lastName",type:"bytes32"},{indexed:!0,name:"_email",type:"bytes32"}],name:"SignedUp",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_userAddress",type:"address"},{indexed:!1,name:"_firstName",type:"bytes32"},{indexed:!1,name:"_lastName",type:"bytes32"},{indexed:!0,name:"_email",type:"bytes32"}],name:"Updated",type:"event"}],unlinked_binary:"0x60606040525b5b60008054600160a060020a03191633600160a060020a03161790555b5b5b61062d806100336000396000f300606060405236156100805763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631a2dc634811461008557806383197ef0146100ba5780638da5cb5b146100cf5780639c0d2525146100fe578063b34e97e814610133578063f2fde38b1461016a578063f5074f411461018b575b600080fd5b6100966004356024356044356101ac565b60405192835260208301919091526040808301919091526060909101905180910390f35b34156100c557600080fd5b6100cd6102eb565b005b34156100da57600080fd5b6100e2610317565b604051600160a060020a03909116815260200160405180910390f35b610096600435602435604435610326565b60405192835260208301919091526040808301919091526060909101905180910390f35b341561013e57600080fd5b6100966104d6565b60405192835260208301919091526040808301919091526060909101905180910390f35b341561017557600080fd5b6100cd600160a060020a036004351661057e565b005b341561019657600080fd5b6100cd600160a060020a03600435166105d6565b005b60008080858015156101bd57600080fd5b858015156101ca57600080fd5b858015156101d757600080fd5b600160a060020a033316600090815260016020526040902054151561021257600160a060020a03331660009081526001602052604090208990555b600160a060020a03331660009081526001602081905260409091200154151561025557600160a060020a0333166000908152600160208190526040909120018890555b600160a060020a033316600090815260016020526040902060020154151561029657600160a060020a03331660009081526001602052604090206002018790555b86600160a060020a0333167f43b85add1b26d595d269b3b3500e49383cdcc47fdda5c8584d6c601c5dc0ab5b8b8b60405191825260208201526040908101905180910390a35b5b505b505b5093509350939050565b60005433600160a060020a0390811691161461030657600080fd5b600054600160a060020a0316ff5b5b565b600054600160a060020a031681565b600080808580151561033757600080fd5b8580151561034457600080fd5b8580151561035157600080fd5b600160a060020a033316600090815260016020526040902054158015906103935750600160a060020a0333166000908152600160208190526040909120015415155b80156103b95750600160a060020a03331660009081526001602052604090206002015415155b15156103c457600080fd5b600160a060020a033316600090815260016020526040902054156103fe57600160a060020a03331660009081526001602052604090208990555b600160a060020a033316600090815260016020819052604090912001541561044057600160a060020a0333166000908152600160208190526040909120018890555b600160a060020a0333166000908152600160205260409020600201541561048057600160a060020a03331660009081526001602052604090206002018790555b86600160a060020a0333167ff30000b0c45b2f041d5fbfa2021f30a3799312d9a346b182802b0ef9ee4878838b8b60405191825260208201526040908101905180910390a35b5b5b505b505b5093509350939050565b600160a060020a033316600090815260016020526040812054819081901580159061051c5750600160a060020a0333166000908152600160208190526040909120015415155b80156105425750600160a060020a03331660009081526001602052604090206002015415155b151561054d57600080fd5b505050600160a060020a03331660009081526001602081905260409091208054918101546002909101545b5b909192565b60005433600160a060020a0390811691161461059957600080fd5b600160a060020a038116156105d1576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b5b50565b60005433600160a060020a039081169116146105f157600080fd5b80600160a060020a0316ff5b5b505600a165627a7a72305820a9a70bfcc18383e915de076ec251518e397a46b17551fa0cf47976a24370bab30029",networks:{765:{events:{"0x43b85add1b26d595d269b3b3500e49383cdcc47fdda5c8584d6c601c5dc0ab5b":{anonymous:!1,inputs:[{indexed:!0,name:"_userAddress",type:"address"},{indexed:!1,name:"_firstName",type:"bytes32"},{indexed:!1,name:"_lastName",type:"bytes32"},{indexed:!0,name:"_email",type:"bytes32"}],name:"SignedUp",type:"event"},"0xf30000b0c45b2f041d5fbfa2021f30a3799312d9a346b182802b0ef9ee487883":{anonymous:!1,inputs:[{indexed:!0,name:"_userAddress",type:"address"},{indexed:!1,name:"_firstName",type:"bytes32"},{indexed:!1,name:"_lastName",type:"bytes32"},{indexed:!0,name:"_email",type:"bytes32"}],name:"Updated",type:"event"}},links:{},address:"0x609a32adcc2f6877fe5d448d79609ff9b7bcc9f2",updated_at:1505265489232}},schema_version:"0.0.5",updated_at:1505265489232}},"ZHP+":function(e,t,n){"use strict";t.a={name:"body-template",props:["currentView"],computed:{user:function(){return this.$store.state.user},isLoggedIn:function(){return this.$store.state.user.isLoggedIn}}}},aEfQ:function(e,t,n){"use strict";var a=n("Dd8w"),s=n.n(a),i=n("NYxO"),o=n("yz5X"),r=n("ffIc"),u=n("2g7C"),c=n("+xc3");t.a={name:"dashboard",props:["currentView"],components:{HeaderTemplate:o.a,BodyTemplate:r.a,FooterTemplate:u.a},created:function(){""!==this.$store.state.user.email&&this.$store.state.user.isLoggedIn||this.$router.push("/")},computed:{user:function(){return this.$store.state.user},isLoggedIn:function(){return this.$store.state.user.isLoggedIn}},methods:s()({},n.i(i.b)([c.a.LOGIN]))}},djAN:function(e,t){},f2im:function(e,t,n){"use strict";t.a={name:"footer-template",computed:{user:function(){return this.$store.state.user}}}},ffIc:function(e,t,n){"use strict";function a(e){n("qLi9")}var s=n("ZHP+"),i=n("XDkp"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,"data-v-6a0a301e",null);t.a=u.exports},fqMf:function(e,t){},gPMH:function(e,t,n){"use strict";var a=n("+xc3");t.a={name:"web3-message",data:function(){return{approvedNetworkName:a.b[a.b.approvedBlockchainNetwork]}},computed:{user:function(){return this.$store.state.user}}}},gi4C:function(e,t){e.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],payable:!0,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},lO7g:function(e,t,n){"use strict";function a(e){n("fqMf")}var s=n("Fs8J"),i=n("LmkH"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,"data-v-2f35305c",null);t.a=u.exports},lquA:function(e,t){},lwq5:function(e,t,n){"use strict";t.a={currentRoute:null,web3:{address:null,coinbase:null,error:null,instance:null,isInjected:!1,networkId:null},user:{email:"",firstName:"",lastName:"",hasCoinbase:!1,hasWeb3InjectedBrowser:!1,isConnectedToApprovedNetwork:!1,isLoggedIn:!1}}},m7aE:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("HeaderTemplate"),e._v(" "),n("BodyTemplate",{attrs:{"current-view":e.currentView}}),e._v(" "),n("FooterTemplate")],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},mOn1:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer-template"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"links"},[n("a",{staticClass:"link2",attrs:{href:"https://github.com/DOkwufulueze/eth-vue",target:"_blank"}},[e._v("Github")]),e._v(" "),n("span",{staticClass:"divider"}),e._v(" "),n("a",{staticClass:"link3",attrs:{href:"http://danielokwufulueze.com",target:"_blank"}},[e._v("www")])]),e._v(" "),n("div",{staticClass:"copyleft"},[n("div",{staticClass:"text"},[e._v("Copyleft "),n("span",{staticClass:"copyleft-resource"}),e._v(" 2017 "),n("a",{staticClass:"link2",attrs:{href:"https://danielokwufulueze.com"}},[e._v("Daniel Okwufulueze")]),e._v(".")])]),e._v(" "),n("div",{staticClass:"social"},[n("a",{staticClass:"facebook",attrs:{href:"https://facebook.com/DOkwufulueze",target:"_blank"}}),e._v(" "),n("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/dokwufulueze",target:"_blank"}})])])])}],i={render:a,staticRenderFns:s};t.a=i},mUbh:function(e,t,n){"use strict";var a,s=n("bOdI"),i=n.n(s),o=n("//Fk"),r=n.n(o),u=n("+xc3"),c=n("sW12");t.a=(a={},i()(a,u.a.REGISTER_WEB3_INSTANCE,function(e){var t=e.commit;e.dispatch;return new r.a(function(e,n){c.a.then(function(n){t(u.c.REGISTER_WEB3_INSTANCE,{result:n,callback:function(){return e()}})}).catch(function(e){if(e.result){var a=e.result;t(u.c.REGISTER_WEB3_INSTANCE,{result:{web3:a.hasInjectedWeb3?function(){return a.web3}:null,hasInjectedWeb3:!!a.hasInjectedWeb3&&a.hasInjectedWeb3,web3Error:e.err},callback:function(){return n(a)}})}})})}),i()(a,u.a.UPDATE_USER_BLOCKCHAIN_STATUS,function(e){(0,e.commit)(u.c.UPDATE_USER_BLOCKCHAIN_STATUS)}),i()(a,u.a.LOGIN,function(e,t){var n=e.commit;return new r.a(function(e,a){n(u.c.LOGIN,{userData:t,callback:function(){return e(t)}})})}),i()(a,u.a.LOGOUT,function(e){var t=e.commit;return new r.a(function(e,n){t(u.c.LOGOUT,{callback:function(){return e()}})})}),i()(a,u.a.CHANGE_CURRENT_ROUTE_TO,function(e,t){(0,e.commit)(u.c.CHANGE_CURRENT_ROUTE_TO,t)}),a)},myIA:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"profile"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"message"},[n("div",[e._v("\n        Welcome to your Profile Page "+e._s(e.user.firstName)+"\n      ")])])])])},s=[],i={render:a,staticRenderFns:s};t.a=i},oPsS:function(e,t){e.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},qLi9:function(e,t){},rEmu:function(e,t,n){"use strict";function a(e){n("lquA")}var s=n("gPMH"),i=n("VfEa"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,"data-v-6477bc0c",null);t.a=u.exports},sW12:function(e,t,n){"use strict";var a=n("woOf"),s=n.n(a),i=n("//Fk"),o=n.n(i),r=n("8k0n"),u=n.n(r),c=new o.a(function(e,t){window.addEventListener("load",function(){var n=window.web3;void 0!==n?(n=new u.a(n.currentProvider),e({hasInjectedWeb3:n.isConnected(),web3:n})):t({result:null,err:"Unable to connect to Web3"})})}).then(function(e){return new o.a(function(t,n){e.web3.version.getNetwork(function(a,i){a?(e=s()({},e),n({result:e,err:a})):(i=i.toString(),e=s()({},e,{networkId:i}),t(e))})})}).then(function(e){return new o.a(function(t,n){e.web3.eth.getCoinbase(function(a,i){var o=void 0;a?(o=s()({},e),n({result:o,err:a})):(o=s()({},e,{coinbase:i}),t(o))})})}).then(function(e){return new o.a(function(t,n){var a=e.web3.eth.defaultAccount;t(s()({},e,{address:a}))})});t.a=c},ukYY:function(e,t,n){"use strict";var a,s=n("bOdI"),i=n.n(s),o=n("+xc3");t.a=(a={},i()(a,o.c.REGISTER_WEB3_INSTANCE,function(e,t){var n=t.result;e.web3.instance=function(){return n.web3},e.web3.address=n.address,e.web3.coinbase=n.coinbase,e.web3.networkId=n.networkId,e.web3.error=n.web3Error,e.web3.isInjected=n.hasInjectedWeb3,t.callback&&t.callback(n)}),i()(a,o.c.UPDATE_USER_BLOCKCHAIN_STATUS,function(e){e.user.hasWeb3InjectedBrowser=e.web3.isInjected,e.user.hasCoinbase=e.web3.coinbase&&""!==e.web3.coinbase,e.user.isConnectedToApprovedNetwork=e.web3.networkId&&""!==e.web3.networkId&&e.web3.networkId===o.b.approvedBlockchainNetwork}),i()(a,o.c.LOGIN,function(e,t){var n=t.userData;e.user.firstName=n.firstName,e.user.lastName=n.lastName,e.user.email=n.email,e.user.isLoggedIn=!(!n.email||""===n.email),t.callback&&t.callback(n)}),i()(a,o.c.LOGOUT,function(e,t){e.user.firstName="",e.user.lastName="",e.user.email="",e.user.isLoggedIn=!1,t.callback&&t.callback()}),i()(a,o.c.CHANGE_CURRENT_ROUTE_TO,function(e,t){e.currentRoute=t}),a)},v4ix:function(e,t,n){"use strict";var a=n("Dd8w"),s=n.n(a),i=n("NYxO"),o=n("+xc3"),r=n("N9OI");t.a={data:function(){return{firstName:this.$store.state.user.firstName,lastName:this.$store.state.user.lastName,email:this.$store.state.user.email}},computed:{user:function(){return this.$store.state.user}},methods:s()({},n.i(i.b)([o.a.LOGIN]),{submitProfileToTheBlockchain:function(e){var t=this;e.target.disabled=!0;var n="/sign-up"===this.$route.path?"signup":"editProfile",a={firstName:this.firstName,lastName:this.lastName,email:this.email};r.a[n](this.$store.state,a).then(function(a){t[o.a.LOGIN](a).then(function(a){e.target.disabled=!1,console.log("signup"===n?"Signed up and logged In":"Successfully updated profile"),""!==t.$store.state.user.email&&t.$store.state.user.isLoggedIn?t.$router.push("/dashboard"):t.$router.push("/")})})}})}},xGuS:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{"current-view":e.currentView}})],1)},s=[],i={render:a,staticRenderFns:s};t.a=i},yz5X:function(e,t,n){"use strict";function a(e){n("djAN")}var s=n("1Sql"),i=n("0lwJ"),o=n("VU/8"),r=a,u=o(s.a,i.a,r,"data-v-7f942609",null);t.a=u.exports},"zrg/":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e2d35e51f4b7fe2e8ce9.js.map