function f(e){window.enmity.plugins.registerPlugin(e)}function m(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common,window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const r=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const S=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function v(e){return window.enmity.patcher.create(e)}function M(e){return window.enmity.assets.getIDByName(e)}var _="MessageSpoofer",A="1.1.4",b="Change what people say.",E=[{name:"Marek (modified by spin)",id:"308440976723148800"}],N="#ff0069",C="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/MessageSpoofer.js",D={name:_,version:A,description:b,authors:E,color:N,sourceUrl:C};const P=m("getMessage","getMessages"),L=m("getChannel","getDMFromUserId"),t=v("message-spoofer"),l=m("openLazy"),R=m("_currentDispatchActionType","_subscriptions","_waitQueue"),T={...D,patches:[],onStart(){let e=!1;t.before(l,"openLazy",(a,[o,s])=>{s==="MessageLongPressActionSheet"&&o.then(n=>{let w=n.default;return n.default=function({message:d,user:u,channel:c,canAddNewReactions:y},p){let i=w({message:d,user:u,channel:c,canAddNewReactions:y},p);if(i.props.children.props.children.props.children[1][0].key=="69")return i;let g=i.props.children.props.children.props.children[1][0].type,h=S.createElement(g,{key:"69",onPressRow:k=>{l.hideActionSheet(),r.startEditMessage(`dirty-${c.id}`,d.id,d.content)},message:"Spoof edit",iconSource:M("ic_message_retry")});return i.props.children.props.children.props.children[1].unshift(h),i},n})}),t.before(r,"startEditMessage",(a,o,s)=>{o[0].startsWith("dirty-")?(o[0]=o[0].replace("dirty-",""),e=!0):e=!1}),t.before(r,"editMessage",(a,o,s)=>{if(e){const n=P.getMessage(o[0],o[1]);R.dispatch({type:"MESSAGE_UPDATE",message:{...n,...o[2],edited_timestamp:n.editedTimestamp,mention_roles:n.mentionRoles,mention_everyone:n.mentionEveryone,member:n.author,guild_id:L.getChannel(n.channel_id).guild_id},log_edit:!1}),o={}}})},onStop(){t.unpatchAll()}};f(T);
