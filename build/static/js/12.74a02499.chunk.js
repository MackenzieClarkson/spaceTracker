(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{263:function(e,a,t){"use strict";function s(e,a){if(null==e)return{};var t,s,l=function(e,a){if(null==e)return{};var t,s,l={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(a,"a",function(){return s})},264:function(e,a,t){"use strict";function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(a){var t=this.constructor.getDerivedStateFromProps(e,a);return null!==t&&void 0!==t?t:null}.bind(this))}function r(e,a){try{var t=this.props,s=this.state;this.props=e,this.state=a,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,s)}finally{this.props=t,this.state=s}}function c(e){var a=e.prototype;if(!a||!a.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate)return e;var t=null,c=null,m=null;if("function"===typeof a.componentWillMount?t="componentWillMount":"function"===typeof a.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof a.componentWillReceiveProps?c="componentWillReceiveProps":"function"===typeof a.UNSAFE_componentWillReceiveProps&&(c="UNSAFE_componentWillReceiveProps"),"function"===typeof a.componentWillUpdate?m="componentWillUpdate":"function"===typeof a.UNSAFE_componentWillUpdate&&(m="UNSAFE_componentWillUpdate"),null!==t||null!==c||null!==m){var n=e.displayName||e.name,i="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+n+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==c?"\n  "+c:"")+(null!==m?"\n  "+m:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(a.componentWillMount=s,a.componentWillReceiveProps=l),"function"===typeof a.getSnapshotBeforeUpdate){if("function"!==typeof a.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");a.componentWillUpdate=r;var o=a.componentDidUpdate;a.componentDidUpdate=function(e,a,t){var s=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;o.call(this,e,a,s)}}return e}t.r(a),t.d(a,"polyfill",function(){return c}),s.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},338:function(e,a){var t=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,m=/^0o[0-7]+$/i,n=parseInt,i=Object.prototype.toString;function o(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&i.call(e)==s}(e))return t;if(o(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=o(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var u=c.test(e);return u||m.test(e)?n(e.slice(2),u?2:8):r.test(e)?t:+e}},525:function(e,a,t){"use strict";t.r(a);var s=t(263),l=t(86),r=t(87),c=t(89),m=t(88),n=t(90),i=t(92),o=t(1),u=t.n(o),d=t(511),p=t(509),g=t(510),v=t(242),E=t(247),b=t(264),N=t(0),f=t.n(N),h=t(240),x=t.n(h),y=t(241),j={tag:y.g,activeTab:f.a.any,className:f.a.string,cssModule:f.a.object},O={activeTabId:f.a.any},S=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}Object(E.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null};var t=a.prototype;return t.getChildContext=function(){return{activeTabId:this.state.activeTab}},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.tag,l=Object(y.f)(this.props,Object.keys(j)),r=Object(y.e)(x()("tab-content",a),t);return u.a.createElement(s,Object(v.a)({},l,{className:r}))},a}(o.Component);Object(b.polyfill)(S);var T=S;S.propTypes=j,S.defaultProps={tag:"div"},S.childContextTypes=O;var k=t(243),w={tag:y.g,className:f.a.string,cssModule:f.a.object,tabId:f.a.any},P={activeTabId:f.a.any};function M(e,a){var t=e.className,s=e.cssModule,l=e.tabId,r=e.tag,c=Object(k.a)(e,["className","cssModule","tabId","tag"]),m=Object(y.e)(x()("tab-pane",t,{active:l===a.activeTabId}),s);return u.a.createElement(r,Object(v.a)({},c,{className:m}))}M.propTypes=w,M.defaultProps={tag:"div"},M.contextTypes=P;var U={tag:y.g,flush:f.a.bool,className:f.a.string,cssModule:f.a.object},C=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=e.flush,r=Object(k.a)(e,["className","cssModule","tag","flush"]),c=Object(y.e)(x()(a,"list-group",!!l&&"list-group-flush"),t);return u.a.createElement(s,Object(v.a)({},r,{className:c}))};C.propTypes=U,C.defaultProps={tag:"ul"};var L=C,_={tag:y.g,active:f.a.bool,disabled:f.a.bool,color:f.a.string,action:f.a.bool,className:f.a.any,cssModule:f.a.object},I=function(e){e.preventDefault()},W=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=e.active,r=e.disabled,c=e.action,m=e.color,n=Object(k.a)(e,["className","cssModule","tag","active","disabled","action","color"]),i=Object(y.e)(x()(a,!!l&&"active",!!r&&"disabled",!!c&&"list-group-item-action",!!m&&"list-group-item-"+m,"list-group-item"),t);return r&&(n.onClick=I),u.a.createElement(s,Object(v.a)({},n,{className:i}))};W.propTypes=_,W.defaultProps={tag:"li"};var D=W,F=t(338),z=t.n(F),A={children:f.a.node,bar:f.a.bool,multi:f.a.bool,tag:y.g,value:f.a.oneOfType([f.a.string,f.a.number]),max:f.a.oneOfType([f.a.string,f.a.number]),animated:f.a.bool,striped:f.a.bool,color:f.a.string,className:f.a.string,barClassName:f.a.string,cssModule:f.a.object},B=function(e){var a=e.children,t=e.className,s=e.barClassName,l=e.cssModule,r=e.value,c=e.max,m=e.animated,n=e.striped,i=e.color,o=e.bar,d=e.multi,p=e.tag,g=Object(k.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),E=z()(r)/z()(c)*100,b=Object(y.e)(x()(t,"progress"),l),N=Object(y.e)(x()("progress-bar",o&&t||s,m?"progress-bar-animated":null,i?"bg-"+i:null,n||m?"progress-bar-striped":null),l),f=d?a:u.a.createElement("div",{className:N,style:{width:E+"%"},role:"progressbar","aria-valuenow":r,"aria-valuemin":"0","aria-valuemax":c,children:a});return o?f:u.a.createElement(p,Object(v.a)({},g,{className:b,children:f}))};B.propTypes=A,B.defaultProps={tag:"div",value:0,max:100};var H=B,G=t(291),R=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(i.a)(Object(i.a)(t))),t.state={activeTab:"1"},t}return Object(n.a)(a,e),Object(r.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,a=this.props;a.children,Object(s.a)(a,["children"]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{tabs:!0},u.a.createElement(p.a,null,u.a.createElement(g.a,{className:x()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},u.a.createElement("i",{className:"icon-list"}))),u.a.createElement(p.a,null,u.a.createElement(g.a,{className:x()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},u.a.createElement("i",{className:"icon-speech"}))),u.a.createElement(p.a,null,u.a.createElement(g.a,{className:x()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},u.a.createElement("i",{className:"icon-settings"})))),u.a.createElement(T,{activeTab:this.state.activeTab},u.a.createElement(M,{tabId:"1"},u.a.createElement(L,{className:"list-group-accent",tag:"div"},u.a.createElement(D,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Today"),u.a.createElement(D,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-warning list-group-item-divider"},u.a.createElement("div",{className:"avatar float-right"},u.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",null,"Meeting with ",u.a.createElement("strong",null,"Lucas")," "),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-location-pin"})," Palo Alto, CA")),u.a.createElement(D,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-info list-group-item-divider"},u.a.createElement("div",{className:"avatar float-right"},u.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",null,"Skype with ",u.a.createElement("strong",null,"Megan")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 5pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-social-skype"})," On-line")),u.a.createElement(D,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Tomorrow"),u.a.createElement(D,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-danger list-group-item-divider"},u.a.createElement("div",null,"New UI Project - ",u.a.createElement("strong",null,"deadline")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 10 - 11pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),u.a.createElement("div",{className:"avatars-stack mt-2"},u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))),u.a.createElement(D,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-success list-group-item-divider"},u.a.createElement("div",null,u.a.createElement("strong",null,"#10 Startups.Garden")," Meetup"),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-location-pin"}),"\xa0 Palo Alto, CA")),u.a.createElement(D,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-primary list-group-item-divider"},u.a.createElement("div",null,u.a.createElement("strong",null,"Team meeting")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 6pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),u.a.createElement("div",{className:"avatars-stack mt-2"},u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/8.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))))),u.a.createElement(M,{tabId:"2",className:"p-3"},u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),u.a.createElement(M,{tabId:"3",className:"p-3"},u.a.createElement("h6",null,"Settings"),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-4"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 1")),u.a.createElement(G.k,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"})),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 2")),u.a.createElement(G.k,{className:"float-right",variant:"pill",label:!0,color:"success",size:"sm"})),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 3")),u.a.createElement(G.k,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm",disabled:!0}),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Option disabled.")))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 4")),u.a.createElement(G.k,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"}))),u.a.createElement("hr",null),u.a.createElement("h6",null,"System Utilization"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-4"},u.a.createElement("small",null,u.a.createElement("b",null,"CPU Usage"))),u.a.createElement(H,{className:"progress-xs",color:"info",value:"25"}),u.a.createElement("small",{className:"text-muted"},"348 Processes. 1/4 Cores."),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"Memory Usage"))),u.a.createElement(H,{className:"progress-xs",color:"warning",value:"70"}),u.a.createElement("small",{className:"text-muted"},"11444GB/16384MB"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"SSD 1 Usage"))),u.a.createElement(H,{className:"progress-xs",color:"danger",value:"95"}),u.a.createElement("small",{className:"text-muted"},"243GB/256GB"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"SSD 2 Usage"))),u.a.createElement(H,{className:"progress-xs",color:"success",value:"10"}),u.a.createElement("small",{className:"text-muted"},"25GB/256GB"))))}}]),a}(o.Component);R.defaultProps={};a.default=R}}]);
//# sourceMappingURL=12.74a02499.chunk.js.map