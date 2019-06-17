(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,r){e.exports=r(359)},151:function(e,t,r){},164:function(e,t,r){},287:function(e,t){},303:function(e,t){},305:function(e,t){},322:function(e,t){},359:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(140),c=r.n(s),o=(r(151),r(4)),i=r(5),l=r(10),u=r(9),m=r(11),p=r(141),d=r.n(p),h=(r(164),r(144)),_=r(142),f=r.n(_),v=[{$id:"/viz/transaction",type:"array",minItems:1,items:[{$ref:"/viz/operation"}]},{$id:"/viz/account",type:"string",pattern:"^[a-z][-\\.a-z\\d]{2,15}[a-z\\d]$"},{$id:"/viz/asset",type:"string",pattern:"^[0-9]+\\.[0-9]{3} (viz|GBG)$"},{$id:"/viz/permlink",type:"string",pattern:"^.{1,256}$"},{$id:"/viz/public_key",type:"string",pattern:"^GLS[0-9a-zA-Z]{50}$"},{$id:"/viz/percent",type:"integer",minimum:0,maximum:1e4},{$id:"/viz/operation",type:"array",minItems:2,maxLength:2,items:[{type:"string",enum:["vote","comment","transfer","transfer_to_vesting","withdraw_vesting","limit_order_create","limit_order_cancel","feed_publish","convert","account_create","account_update","witness_update","account_witness_vote","account_witness_proxy","pow","custom","report_over_production","delete_comment","custom_json","comment_options","set_withdraw_vesting_route","limit_order_create2","challenge_authority","prove_authority","request_account_recovery","recover_account","change_recovery_account","escrow_transfer","escrow_dispute","escrow_release","pow2","escrow_approve","transfer_to_savings","transfer_from_savings","cancel_transfer_from_savings","custom_binary","decline_voting_rights","reset_account","set_reset_account","delegate_vesting_shares","account_create_with_delegation","account_metadata","proposal_create","proposal_update","proposal_delete","chain_properties_update","break_free_referral","delegate_vesting_shares_with_interest","reject_vesting_shares_delegation"]},{type:"object"}]}],g=r(73),b=r.n(g),E={owner:0,active:1,posting:2,memo:3};function w(e){return e.sort(function(e,t){return E[t]-E[e]})}var y=new f.a({schemas:v,verbose:!0}).getSchema("/viz/transaction"),N=function(){function e(t){if(Object(o.a)(this,e),!y(t))throw y.errors;this.raw_transaction=Object(h.a)(t),this.ops=[],this.readOps()}return Object(i.a)(e,[{key:"readOps",value:function(){var e=!0,t=!1,r=void 0;try{for(var a,n=this.raw_transaction[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var s=a.value;this.ops.push(new O(s[0],s[1]))}}catch(c){t=!0,r=c}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}}},{key:"required_wif",get:function(){if(0==this.ops.length)return null;var e=[],t=!0,r=!1,a=void 0;try{for(var n,s=this.ops[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var c=n.value;e.push(c.role)}}catch(o){r=!0,a=o}finally{try{t||null==s.return||s.return()}finally{if(r)throw a}}return w(e)[0]}}]),e}(),O=function(){function e(t,r){Object(o.a)(this,e),this.name=t,this.body=r;var a=!0,n=!1,s=void 0;try{for(var c,i=b.a[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var l=c.value;l.operation===this.name&&(this.roles=w(l.roles))}}catch(u){n=!0,s=u}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}}return Object(i.a)(e,[{key:"role",get:function(){return this.roles[0]}}]),e}();var k=r(25),j=r(145),S=r(35),x=r.n(S),W=r(75),z=r(74),C={PASSWORD:"password",WIF:"wif"};function A(){return(A=Object(W.a)(x.a.mark(function e(t,r,a,n){var s,c,o,i,l,u,m,p;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.raw_transaction,c=t.required_wif,o=$(r,a,n,c),i={extensions:[],operations:s},l=Object(k.a)({},c,o),e.next=6,z.broadcast._prepareTransaction(i);case 6:return u=e.sent,m=z.auth.signTransaction(u,l),e.next=10,z.api.broadcastTransactionSynchronousAsync(m);case 10:return p=e.sent,e.abrupt("return",p);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(e,t,r,a){switch(e){case C.PASSWORD:return z.auth.getPrivateKeys(t,r,[a])[a];default:return r}}function I(){return(I=Object(W.a)(x.a.mark(function e(t){var r,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0430\u0440\u043e\u043b\u0435\u043c");case 2:return e.next=4,z.api.getAccountsAsync([t]);case 4:if(r=e.sent,a=Object(j.a)(r,1),a[0]){e.next=9;break}return e.abrupt("return","\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!");case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}var P=function(e,t,r,a){return A.apply(this,arguments)},D={"Expected version":"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u0435\u043c, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442, \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0439 \u0437\u043d\u0430\u043a",3020100:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043b\u0438\u0431\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u043b\u0438\u0431\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0430\u0443\u0442\u043e\u0440\u0438\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",2020000:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",3080000:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0432 \u0431\u043b\u043e\u043a\u0435",2030000:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c",1020400:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",4020100:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0435\u043b\u043e\u0432",3010000:"\u041e\u0448\u0438\u0431\u043e\u0447\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0432 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"};function R(e){for(var t in D)if(e.match(t))return D[t];return null}var q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"extractErrorMessage",value:function(){var e=this.props.error;console.log("error",e);var t=[n.a.createElement("h4",{key:"head"},"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438")];if(e.message)for(var r=e.message.split("\n"),a=0;a<r.length;a++)if(r[a]&&!r[a].match(/for the full error payload/)){t.push(n.a.createElement("p",{key:"error-text",className:"mb-0"},r[a]));var s=R(r[a]);s&&t.push(n.a.createElement("small",{key:"error-desc",className:"mb-0"},s))}return t}},{key:"extractUsefulInfos",value:function(){return console.log("ret",this.props.result),n.a.createElement("div",null,n.a.createElement("h4",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"),n.a.createElement("p",{className:"mb-0"},"\u041d\u043e\u043c\u0435\u0440 \u0431\u043b\u043e\u043a\u0430: ",this.props.result.block_num),n.a.createElement("p",{className:"mb-0"},"ID \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438: ",this.props.result.id),this.props.redirect&&n.a.createElement("p",{className:"mt-2"},"\u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0430\u0434\u0440\u0435\u0441 ",n.a.createElement("strong",null,this.props.redirect),"..."))}},{key:"render",value:function(){var e=!!this.props.error,t=e?"danger":"success",r=e?this.extractErrorMessage():this.extractUsefulInfos();return n.a.createElement("div",{className:"mt-5 mb-5 alert alert-"+t,role:"alert"},r)}}]),t}(a.Component),F=r(76),J=r.n(F);var T=function(e){var t=e.wif_error?" is-invalid":"";return n.a.createElement("input",{id:e.id,name:e.id,value:e.wif,onChange:function(t){return e.onChange("wif",t.target.value)},type:"password",className:"form-control"+t,"aria-describedby":"wif-help",required:!0})},U=function(e){return n.a.createElement("div",{className:"form-group input-group-sm"},n.a.createElement("button",{type:"button",id:"sign-botton",className:"btn btn-primary",onClick:e.onSign},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))},B=function(e){var t=e.transaction,r=e.form_class,a=e.wif_error;return n.a.createElement("form",{id:"sign-form",className:r},n.a.createElement("div",{className:"form-group input-group-sm"},n.a.createElement("label",{htmlFor:"wif"},"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447"),n.a.createElement(T,Object.assign({id:"wif"},e)),n.a.createElement("small",{id:"wif-help",className:"form-text text-muted"},"\u0414\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c ",n.a.createElement("strong",null,function(e){switch(console.log("translate role",e),e){case"owner":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430";case"active":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043b\u044e\u0447";case"posting":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u043f\u043e\u0441\u0442\u0438\u043d\u0433 \u043a\u043b\u044e\u0447";case"memo":return"\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439, \u043a\u043b\u044e\u0447 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0442\u043e\u043a";default:return null}}(t.required_wif))),n.a.createElement("div",{className:"invalid-feedback"},a)),n.a.createElement(U,e))},G=function(e){var t=e.form_class,r=e.onChange,a=e.account,s=e.account_error,c=e.wif_error,o=s?" is-invalid":"";return n.a.createElement("form",{id:"sign-form",className:t},n.a.createElement("div",{className:"form-group input-group-sm"},n.a.createElement("label",{htmlFor:"account"},"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),n.a.createElement("input",{id:"account",name:"account",value:a,onChange:function(e){return r("account",e.target.value)},type:"text",className:"form-control"+o,placeholder:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0435 viz",required:!0}),n.a.createElement("div",{className:"invalid-feedback"},s)),n.a.createElement("div",{className:"form-group input-group-sm"},n.a.createElement("label",{htmlFor:"wif"},"\u041f\u0430\u0440\u043e\u043b\u044c"),n.a.createElement(T,Object.assign({id:"password"},e)),n.a.createElement("div",{className:"invalid-feedback"},c)),n.a.createElement(U,e))},L=function(e){switch(e.sign_type){case C.WIF:return n.a.createElement(B,e);default:return n.a.createElement(G,e)}},M=r(77),Z=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={wif:"",account:e.user||"",error:null,result:null,sign_type:C.PASSWORD,account_error:null,sending:!1,redirect:null},r}return Object(m.a)(t,e),Object(i.a)(t,[{key:"send",value:function(){var e=this;P(this.props.transaction,this.state.sign_type,this.state.account,this.state.wif).then(function(t){return e.onSuccess(t)}).catch(function(t){return e.setState({result:null,error:t,account_error:null,sending:!1})}),this.setState({sending:!0,error:null,result:null})}},{key:"onSuccess",value:function(e){this.setState({result:e,error:null,account_error:null,sending:!1}),this.redirect()}},{key:"redirect",value:function(){var e=this;this.props.redirect&&setTimeout(function(){window.location=e.props.redirect},5e3)}},{key:"onSign",value:function(){var e=this;switch(this.state.sign_type){case C.PASSWORD:var t=null;this.state.wif||(t="\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"),function(e){return I.apply(this,arguments)}(this.state.account).then(function(r){r||t?e.setState({account_error:r,wif_error:t}):e.send()}).catch(function(t){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"),e.setState({account_error:"\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})});break;default:if(!this.state.wif)return void this.setState({wif_error:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d"});this.send()}}},{key:"onChange",value:function(e,t){var r;console.log("onChange",e,t),this.setState((r={},Object(k.a)(r,e,t),Object(k.a)(r,"wif_error",null),Object(k.a)(r,"account_error",null),r))}},{key:"render",value:function(){var e=this,t=this.props,r=t.nowif,a=t.redirect,s=function(t){var r=t.sign_type,a=e.state.sign_type===r?" active ":"";return n.a.createElement("li",{className:"nav-item"},n.a.createElement("button",{type:"button",className:"btn btn-block nav-link "+a,onClick:function(){return e.setState({sign_type:r})}},t.label))};return n.a.createElement("div",{className:"clearfix border p-2 m-2"},!r&&n.a.createElement("div",{className:" mb-3"},!this.state.sending&&!this.state.result&&n.a.createElement("div",null,n.a.createElement(J.a,{minWidth:425},n.a.createElement("ul",{className:"nav nav-tabs"},n.a.createElement(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c",sign_type:C.PASSWORD}),n.a.createElement(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u043e\u043c",sign_type:C.WIF}))),n.a.createElement(J.a,{maxWidth:420},n.a.createElement("ul",{className:"nav nav-pills nav-justified"},n.a.createElement(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c",sign_type:C.PASSWORD}),n.a.createElement(s,{label:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u0435\u043c",sign_type:C.WIF}))))),(this.state.error||this.state.result)&&n.a.createElement(q,{error:this.state.error,result:this.state.result,redirect:a}),this.state.sending&&n.a.createElement("div",{className:"mt-5 mb-5 alert alert-warning",role:"alert"},n.a.createElement("h4",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...")),!this.state.sending&&!this.state.result&&n.a.createElement(L,Object.assign({onChange:function(t,r){return e.onChange(t,r)},onSign:function(){return e.onSign()},form_class:"needs-validation"},this.state,this.props)),!this.state.sending&&!this.state.result&&n.a.createElement(function(t){if(r){var a=e.state.sign_type===C.PASSWORD,s=a?n.a.createElement(M.a,null):n.a.createElement(M.b,null),c=a?C.WIF:C.PASSWORD,o=a?"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043a\u043b\u044e\u0447\u043e\u043c":"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u0430\u0440\u043e\u043b\u0435\u043c";return n.a.createElement("button",{type:"button",title:o,className:"btn-outline-primary float-right btn btn-sm btn-primary",onClick:function(){return e.setState({sign_type:c})}},s)}return null},null))}}]),t}(a.Component);var K={vote:"\u0410\u043f\u0432\u043e\u0443\u0442",comment:"\u041f\u043e\u0441\u0442/\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",transfer:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434",transfer_to_vesting:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0432 \u0421\u0413",withdraw_vesting:"\u041f\u043e\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0421\u0413",limit_order_create:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0440\u0434\u0435\u0440",limit_order_cancel:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0440\u0434\u0435\u0440",account_create:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442",account_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442",witness_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430",account_witness_vote:"\u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c \u0437\u0430 \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430",account_witness_proxy:"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0433\u043e",custom:"custom",report_over_production:"\u041d\u0430\u0441\u0442\u0443\u0447\u0430\u0442\u044c",delete_comment:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442 \u0438\u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",custom_json:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f",comment_options:"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u0441\u0442/\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",set_withdraw_vesting_route:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u043f\u043e\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0421\u0413",limit_order_create2:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0440\u0434\u0435\u0440 2",challenge_authority:"challenge_authority",prove_authority:"prove_authority",request_account_recovery:"request_account_recovery",recover_account:"recover_account",change_recovery_account:"change_recovery_account",escrow_transfer:"escrow_transfer",escrow_dispute:"escrow_dispute",escrow_release:"escrow_release",pow2:"Proof of Work 2",escrow_approve:"escrow_approve",transfer_to_savings:"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432 \u0441\u0435\u0439\u0444",transfer_from_savings:"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u0438\u0437 \u0441\u0435\u0439\u0444\u0430",cancel_transfer_from_savings:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0438\u0437 \u0441\u0435\u0439\u0444\u0430",custom_binary:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f (\u0431\u0438\u043d.)",decline_voting_rights:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f (\u043d\u0435\u043e\u0431\u0440\u0430\u0442\u0438\u043c\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f!)",reset_account:"reset_account",set_reset_account:"set_reset_account",delegate_vesting_shares:"delegate_vesting_shares",account_create_with_delegation:"account_create_with_delegation",account_metadata:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",proposal_create:"proposal_create",proposal_update:"proposal_update",proposal_delete:"proposal_delete",chain_properties_update:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0442\u0438",break_free_referral:"\u041e\u0442\u043a\u0443\u043f\u0438\u0442\u044c\u0441\u044f",delegate_vesting_shares_with_interest:"\u0414\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 \u043e\u0442\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0430",reject_vesting_shares_delegation:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0434\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"};var V=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).status={},r}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(Z,this.props))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:" border m-2 p-2"},n.a.createElement("div",{className:"alert alert-info",role:"alert"},n.a.createElement("h4",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435")),n.a.createElement("div",{className:"container"},this.props.transaction.ops.map(function(e,t){return n.a.createElement("div",{className:"row",key:t},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"font-weight-bold"},"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f"),function(e){var t=K[e.name];return t||(t=e.name),n.a.createElement("span",{className:"label label-default"},t)}(e),n.a.createElement("div",null,n.a.createElement("small",null,e.name))),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("div",{className:"font-weight-bold"},"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),function(e){switch(e.name){case"transfer":return n.a.createElement("div",{className:"md-2 border-bottom"},n.a.createElement("strong",null,"\u041e\u0442")," ",e.body.from,", ",n.a.createElement("strong",null,"\u041a\u043e\u043c\u0443")," ",e.body.to,", ",n.a.createElement("strong",null,"\u0421\u0443\u043c\u043c\u0430")," ",e.body.amount,n.a.createElement("br",null),n.a.createElement("strong",null,"\u0417\u0430\u043c\u0435\u0442\u043a\u0430")," ",(""+e.body.memo||"").substring(0,50));default:return n.a.createElement("pre",null,JSON.stringify(e.body,null,2))}}(e)))}))))))}}]),t}(a.Component),H=(r(357),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-danger",role:"alert"},n.a.createElement("h4",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0430\u044f \u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0448\u0438\u0431\u043a\u0438")),n.a.createElement("table",{className:"table table-sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u0422\u0438\u043f \u043e\u0448\u0438\u0431\u043a\u0438"),n.a.createElement("th",null,"\u041c\u0435\u0441\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u044b\u0445"),n.a.createElement("th",null,"\u0421\u0445\u0435\u043c\u0430"),n.a.createElement("th",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"))),n.a.createElement("tbody",null,this.props.errors.map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.keyword),n.a.createElement("td",null,e.dataPath),n.a.createElement("td",null,e.schemaPath),n.a.createElement("td",null,e.message))}))))}}]),t}(a.Component)),Q=r(74),X=r.n(Q),Y=r(143),ee=r.n(Y);X.a.config.set("websocket","wss://ws.viz.ropox.app");var te=function(e){return n.a.createElement("div",{className:"mt-5 mb-5 alert alert-danger",role:"alert"},n.a.createElement("h4",null,e.error))},re=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={transaction:null,errors:null,error:null},r}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=d.a.parse(window.location.search),t=e.title||"\u0412\u0438\u0437\u0438\u0440\u044c",r=e.subtitle,a=Object.keys(e).includes("nowif"),n=e.user,s=ee.a.sanitizeUrl(e.redirect||"");"about:blank"===s&&(s=null);var c=e.tr;if(!c)return console.log("\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d URL \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 tr"),void this.setState({title:t,subtitle:r,error:"\u0412\u044b\u0437\u043e\u0432 \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"});try{var o=null;try{o=JSON.parse(c)}catch(l){return console.log("not valid json",c),void this.setState({title:t,subtitle:r,error:"\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u043c JSON"})}var i=new N(o);this.setState({transaction:i,title:t,subtitle:r,user:n,nowif:a,redirect:s})}catch(u){console.log("found errors",u),this.setState({errors:u})}}},{key:"render",value:function(){var e=null;return this.state.transaction?e=n.a.createElement(V,{redirect:this.state.redirect,nowif:this.state.nowif,user:this.state.user,transaction:this.state.transaction}):this.state.error?e=n.a.createElement(te,{error:this.state.error}):this.state.errors&&(e=n.a.createElement(H,{errors:this.state.errors})),n.a.createElement("div",{className:"container App"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("nav",{className:"navbar navbar-light "},n.a.createElement("div",null,n.a.createElement("h3",null,this.state.title),this.state.subtitle&&n.a.createElement("h5",null,this.state.subtitle),n.a.createElement("br",null),n.a.createElement("small",null,"\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 VIZ",n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://golos.io/@ropox/sign"},"\xa0",n.a.createElement("span",{className:"rounded-circle bg-info text-white font-weight-bold"},"\xa0?\xa0"))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},e)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,2,1]]]);
//# sourceMappingURL=main.c11f4ffb.chunk.js.map