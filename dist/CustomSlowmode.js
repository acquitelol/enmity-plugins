function U(e,t,s){window.enmity.settings.set(e,t,s)}function N(e,t,s){return window.enmity.settings.get(e,t,s)}function J(e){window.enmity.plugins.registerPlugin(e)}const r=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const L=window.enmity.modules.common.Native,o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const $=window.enmity.modules.common.Storage,x=window.enmity.modules.common.Toasts,B=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const T=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const K=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const C=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const{components:n}=window.enmity;n.Alert,n.Button,n.FlatList;const Q=n.Image;n.ImageBackground,n.KeyboardAvoidingView,n.Modal,n.Pressable,n.RefreshControl;const Z=n.ScrollView;n.SectionList,n.StatusBar,n.StyleSheet,n.Switch;const f=n.Text;n.TextInput,n.TouchableHighlight;const E=n.TouchableOpacity;n.TouchableWithoutFeedback,n.Touchable;const _=n.View;n.VirtualizedList,n.Form,n.FormArrow,n.FormCTA,n.FormCTAButton,n.FormCardSection,n.FormCheckbox;const F=n.FormDivider;n.FormHint,n.FormIcon,n.FormInput,n.FormLabel,n.FormRadio;const m=n.FormRow,P=n.FormSection;n.FormSelect,n.FormSubLabel;const ee=n.FormSwitch;n.FormTernaryCheckBox,n.FormText,n.FormTextColors,n.FormTextSizes;const V={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function O(...e){return window.enmity.modules.bulk(...e)}function te(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const k=e=>{let t=0;for(let s in e)t++;return t};function c(e){return window.enmity.assets.getIDByName(e)}const v={Debug:c("debug"),Retry:c("ic_message_retry"),Failed:c("Small"),Cancel:c("ic_megaphone_nsfw_16px"),Add:c("add_white"),Delete:c("ic_message_delete"),Clear:c("ic_clear_all_24px"),Pencil:c("ic_pencil_24px"),Success:c("ic_selection_checked_24px"),Copy:c("toast_copy_link"),Open:c("ic_leave_stage"),Clipboard:c("pending-alert"),Debug_Command:{Sent:c("ic_application_command_24px"),Clock:c("clock")},Settings:{Toasts:{Context:c("toast_image_saved"),Settings:c("ic_selection_checked_24px")},Self:c("friends_toast_icon"),Share:c("share"),Robot:c("ic_robot_24px"),Commands:c("ic_profile_badge_bot_commands"),Debug:c("ic_rulebook_16px")}},R=e=>{x.open({content:`Copied ${e} to clipboard.`,source:v.Clipboard})},oe=e=>{let t=e.split(`
`).map(s=>{if(s!="")return`"${s.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[k(t)]=`${t[k(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function ne(){try{let e=await $.getItem("device_list");if(e)return JSON.parse(e);let t=(await T.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,s=oe(t);await $.setItem("device_list",s);let l=await $.getItem("device_list");return JSON.parse(l)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function se(e,t,s){let l=await ne();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${s.split("-")[1]}
> **Discord Build:** ${L.InfoDictionaryManager.Version} (${L.InfoDictionaryManager.Build})
> **Software Version:** ${L.DCDDeviceManager.systemVersion}
> **Device:** ${l[L.DCDDeviceManager.device]}`}const{native:p}=window.enmity;function le(){p.reload()}p.version,p.build,p.device,p.version;const ie=te("transitionToGuild");async function ae({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,s=await(await T.get(t)).text;let l=s.match(/\d\.\d\.\d+/g),i=s.match(/patch\-\d\.\d\.\d+/g);return!l||!i?W(e.name,e.version):(l=l[0],i=i[0],l!=e.version?A(t,l,i.split("-")[1],e,!1):i!=e.build?A(t,l,i.split("-")[1],e,!0):W(e.name,e.version))}const A=(e,t,s,l,i)=>{const a=i?s:t;B.show({title:"Update found",body:`A newer ${i?"build":"version"} is available for ${l.name}. ${i?`
The version will remain at ${t}, but the build will update to ${s}.`:""}
Would you like to install ${i?`build \`${s}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>re(e,a,l,i)})},W=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),x.open({content:`${e} is on latest version (${t})`,source:v.Settings.Toasts.Settings})};async function re(e,t,s,l){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?B.show({title:`Updated ${s.name}`,body:`Successfully updated to ${l?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{le()}}):B.show({title:"Error",body:`Something went wrong while updating ${s.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{ie.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${s.name}%20Update%20Error%3A%20${l?`b${t}`:`v${t}`}`)}})})}const I=window.enmity.modules.common.Components.General.Animated,[M,ce]=O(V.byProps("transitionToGuild"),V.byProps("setString"));var de=({manifest:e})=>{const t=C.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:r.ThemeColorMap.HEADER_PRIMARY,fontFamily:r.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:r.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),s=o.useRef(new I.Value(1)).current,l=()=>{I.spring(s,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{I.spring(s,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>{M.openURL("https://spin.rip/")},d={transform:[{scale:s}]};return o.createElement(o.Fragment,null,o.createElement(_,{style:t.container},o.createElement(E,{onPress:a,onPressIn:l,onPressOut:i},o.createElement(I.View,{style:[d]},o.createElement(Q,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),o.createElement(_,{style:t.text_container},o.createElement(E,{onPress:()=>{M.openURL(e.sourceUrl)}},o.createElement(f,{style:[t.main_text,t.header]},e.name," ")),o.createElement(_,{style:{flexDirection:"row"}},o.createElement(f,{style:[t.main_text,t.sub_header]},"A plugin by"),o.createElement(E,{onPress:()=>{M.openURL("https://spin.rip/")}},o.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:r.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),o.createElement(_,{style:{flexDirection:"row"}},o.createElement(f,{style:[t.main_text,t.sub_header]},"Settings page by"),o.createElement(E,{onPress:()=>{M.openURL("https://github.com/acquitelol/")}},o.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:r.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),o.createElement(_,null,o.createElement(E,{style:{flexDirection:"row"},onPress:()=>{ce.setString(`**${e.name}** v${e.version}`),R("plugin name and version")}},o.createElement(f,{style:[t.main_text,t.sub_header]},"Version:"),o.createElement(f,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:r.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[me,G]=O(V.byProps("transitionToGuild"),V.byProps("setString"));var ue=({manifest:e,settings:t,hasToasts:s,children:l,commands:i})=>{const a=C.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:r.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:r.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[d,u]=o.useState(),[h,y]=o.useState();return o.createElement(o.Fragment,null,o.createElement(Z,{onTouchStart:g=>{u(g.nativeEvent.pageX),y(g.nativeEvent.pageY)},onTouchEnd:g=>{d-g.nativeEvent.pageX<-100&&h-g.nativeEvent.pageY<40&&h-g.nativeEvent.pageY>-40&&K.pop()}},o.createElement(de,{manifest:e}),l,i&&o.createElement(P,{title:"Plugin Commands"},i.map(g=>o.createElement(m,{label:`/${g.name}`,subLabel:g.description,leading:o.createElement(m.Icon,{style:a.icon,source:v.Settings.Commands}),trailing:m.Arrow,onPress:function(){G.setString(`/${g.name}`),R(`the command ${g.name}`)}}))),o.createElement(P,{title:"Utility"},s&&o.createElement(o.Fragment,null,o.createElement(m,{label:"Initialization Toasts",leading:o.createElement(m.Icon,{style:a.icon,source:v.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:o.createElement(ee,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),x.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:v.Settings.Toasts.Settings})}})}),o.createElement(F,null)),o.createElement(m,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:o.createElement(m.Icon,{style:a.icon,source:v.Settings.Debug}),trailing:m.Arrow,onPress:async function(){G.setString(await se(e.name,e.version,e.build)),R("plugin debug information")}}),o.createElement(F,null),o.createElement(m,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:o.createElement(m.Icon,{style:a.icon,source:v.Delete}),trailing:m.Arrow,onPress:async function(){await $.removeItem("device_list"),x.open({content:"Cleared device list storage.",source:v.Settings.Toasts.Settings})}})),o.createElement(P,{title:"Source"},o.createElement(m,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:o.createElement(m.Icon,{style:a.icon,source:v.Copy}),trailing:m.Arrow,onPress:()=>{ae({manifest:e})}}),o.createElement(F,null),o.createElement(m,{label:"Source",subLabel:`View ${e.name} source code`,leading:o.createElement(m.Icon,{style:a.icon,source:v.Open}),trailing:m.Arrow,onPress:()=>{me.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),o.createElement(m,{style:a.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))},we="CustomSlowmode",ge="1.0.0",he="patch-1.0.5",ve="Add custom values to the slowmode slider or remove values that you do not want!",ye=[{name:"spin",id:"308440976723148800"}],fe="#ff0069",be="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/CustomSlowmode.js",Y={name:we,version:ge,build:he,description:ve,authors:ye,color:fe,sourceUrl:be};function w(e,t,s,l){window.enmity.clyde.sendReply(e,t,s,l)}var j;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(j||(j={}));var b;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(b||(b={}));var S;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(S||(S={}));var z;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(z||(z={}));var D;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(D||(D={}));var q;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(q||(q={}));const Se={id:"add-slowmode-value",name:"slowmode add",displayName:"slowmode add",description:"Add a value to the slowmode list",displayDescription:"Add a value to the slowmode list",type:b.Chat,inputType:S.BuiltInText,options:[{name:"seconds",displayName:"seconds",description:"The new value (in seconds) that you want to add",displayDescription:"The new value (in seconds) that you want to add",type:D.Integer,required:!0}],execute:async function(e,t){var s,l,i,a;const d=parseInt(e[e.findIndex(u=>u.name==="seconds")].value);try{if(r.SLOWMODE_VALUES.includes(d)){w((s=t==null?void 0:t.channel.id)!=null?s:"0",`The value \`${d}\` already exists.`);return}else if(d<1){w((l=t==null?void 0:t.channel.id)!=null?l:"0",`The value \`${d}\` must be greater than 0.`);return}r.SLOWMODE_VALUES.push(d),r.SLOWMODE_VALUES.sort((u,h)=>u-h),w((i=t==null?void 0:t.channel.id)!=null?i:"0",`The value \`${d}\` has been added.`),U("_customSlowmode","slowmodeValues",r.SLOWMODE_VALUES)}catch(u){console.log("[ addSlowmodeValue Error ]",u),w((a=t==null?void 0:t.channel.id)!=null?a:"0","An error occured while adding a slowmode value. Check debug logs for more info.")}}},Ee={id:"list-slowmode-values",name:"slowmode list",displayName:"slowmode list",description:"List the values that are currently in the slowmode list",displayDescription:"List the values that are currently in the slowmode list",type:b.Chat,inputType:S.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the response",displayDescription:"Only you can see the response",type:D.Boolean,required:!1}],execute:async function(e,t){var s,l,i,a,d;const u=e[e.findIndex(h=>h.name==="whisper")];try{const h={type:"rich",title:"Slowmode Values",description:((s=r.SLOWMODE_VALUES)==null?void 0:s.length)>0?r.SLOWMODE_VALUES.map(y=>`${y}s (${Math.floor(y/60)}m)`).join(`
`):"No values found",footer:{text:"Not every value will work. This is a limitation set by Discord."},color:"0xff0069"};if((l=u==null?void 0:u.value)==null||l){w((i=t==null?void 0:t.channel.id)!=null?i:"0",{embeds:[h]});return}else return{content:((a=r.SLOWMODE_VALUES)==null?void 0:a.length)>0?r.SLOWMODE_VALUES.map(y=>`${y}s (${Math.floor(y/60)}m)`).join(`
`):"No values found"}}catch(h){console.log("[ listSlowmodeValues Error ]",h),w((d=t==null?void 0:t.channel.id)!=null?d:"0","An error occured while fetching and listing the slowmode values. Check debug logs for more info.")}}},_e={id:"remove-slowmode-value",name:"slowmode remove",displayName:"slowmode remove",description:"Remove a value to the slowmode list",displayDescription:"Remove a value to the slowmode list",type:b.Chat,inputType:S.BuiltInText,options:[{name:"value",displayName:"value",description:"The value that you want to remove",displayDescription:"The value that you want to remove",type:D.Integer,required:!0}],execute:async function(e,t){var s,l,i;const a=parseInt(e[e.findIndex(d=>d.name==="value")].value);try{if(!r.SLOWMODE_VALUES.includes(a)){w((s=t==null?void 0:t.channel.id)!=null?s:"0",`The value \`${a}\` does not exist.`);return}r.SLOWMODE_VALUES.splice(r.SLOWMODE_VALUES.indexOf(a),1),r.SLOWMODE_VALUES.sort((d,u)=>d-u),U("_customSlowmode","slowmodeValues",r.SLOWMODE_VALUES),w((l=t==null?void 0:t.channel.id)!=null?l:"0",`The value \`${a}\` has been removed.`)}catch(d){console.log("[ removeSlowmodeValue Error ]",d),w((i=t==null?void 0:t.channel.id)!=null?i:"0","An error occured while removing a slowmode value. Check debug logs for more info.")}}},pe={id:"reset-slowmode-values",name:"slowmode reset",displayName:"slowmode reset",description:"Reset the slowmode values to Discord's default values",displayDescription:"Reset the slowmode values to Discord's default values",type:b.Chat,inputType:S.BuiltInText,execute:async function(e,t){var s,l,i;try{const a=[0,5,10,15,30,60,120,300,600,900,1800,3600,7200,21600];if(r.SLOWMODE_VALUES=a,U("_customSlowmode","slowmodeValues",r.SLOWMODE_VALUES),r.SLOWMODE_VALUES===a&&N("_customSlowmode","slowmodeValues",null)===a){w((s=t==null?void 0:t.channel.id)!=null?s:"0","Slowmode values have been reset to Discord's default values.");return}else{w((l=t==null?void 0:t.channel.id)!=null?l:"0","An error occured while resetting the slowmode values.");return}}catch(a){console.log("[ resetSlowmodeValues Error ]",a),w((i=t==null?void 0:t.channel.id)!=null?i:"0","An error occured while resetting the slowmode values. Check debug logs for more info.")}}},H=[Se,_e,Ee,pe],X=[0,5,10,15,30,60,120,300,600,900,1800,3600,7200,21600],De={...Y,onStart(){this.commands=H,r.SLOWMODE_VALUES=N("_customSlowmode","slowmodeValues",X)},onStop(){this.commands=[],r.SLOWMODE_VALUES=X},patches:[],getSettingsPanel({settings:e}){return o.createElement(ue,{manifest:Y,settings:e,hasToasts:!1,commands:H})}};J(De);
