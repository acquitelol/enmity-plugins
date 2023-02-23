const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const J=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const Q=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const b=i.Text;i.TextInput,i.TouchableHighlight;const p=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const S=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const I=i.FormDivider;i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const l=i.FormRow,D=i.FormSection;i.FormSelect,i.FormSubLabel;const Z=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;function O(e){window.enmity.plugins.registerPlugin(e)}const _={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function N(...e){return window.enmity.modules.bulk(...e)}function ee(...e){return window.enmity.modules.getByProps(...e)}function y(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;const v=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const k=window.enmity.modules.common.Native,t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const R=window.enmity.modules.common.Storage,f=window.enmity.modules.common.Toasts,L=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const U=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const ne=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const M=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const V=e=>{let n=0;for(let s in e)n++;return n};function d(e){return window.enmity.assets.getIDByName(e)}const m={Debug:d("debug"),Retry:d("ic_message_retry"),Failed:d("Small"),Cancel:d("ic_megaphone_nsfw_16px"),Add:d("add_white"),Delete:d("ic_message_delete"),Clear:d("ic_clear_all_24px"),Pencil:d("ic_pencil_24px"),Success:d("ic_selection_checked_24px"),Copy:d("toast_copy_link"),Open:d("ic_leave_stage"),Clipboard:d("pending-alert"),Debug_Command:{Sent:d("ic_application_command_24px"),Clock:d("clock")},Settings:{Toasts:{Context:d("toast_image_saved"),Settings:d("ic_selection_checked_24px")},Self:d("friends_toast_icon"),Share:d("share"),Robot:d("ic_robot_24px"),Commands:d("ic_profile_badge_bot_commands"),Debug:d("ic_rulebook_16px")}},E=e=>{f.open({content:`Copied ${e} to clipboard.`,source:m.Clipboard})},te=e=>{let n=e.split(`
`).map(s=>{if(s!="")return`"${s.replaceAll(":",'":"').replace(" ","")}",`});return n[0]=`{${n[0]}`,n[V(n)]=`${n[V(n)]}}`,n=n.join(""),n=n.replaceAll("undefined",""),n=n.split("").reverse().join("").replace(",","").split("").reverse().join(""),n};async function oe(){try{let e=await R.getItem("device_list");if(e)return JSON.parse(e);let n=(await U.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,s=te(n);await R.setItem("device_list",s);let o=await R.getItem("device_list");return JSON.parse(o)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ie(e,n,s){let o=await oe();return`**[${e}] Debug Information**
> **Plugin Version:** ${n}
> **Plugin Build:** ${s.split("-")[1]}
> **Discord Build:** ${k.InfoDictionaryManager.Version} (${k.InfoDictionaryManager.Build})
> **Software Version:** ${k.DCDDeviceManager.systemVersion}
> **Device:** ${o[k.DCDDeviceManager.device]}`}const{native:$}=window.enmity;function se(){$.reload()}$.version,$.build,$.device,$.version;const re=ee("transitionToGuild");async function le({manifest:e}){const n=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,s=await(await U.get(n)).text;let o=s.match(/\d\.\d\.\d+/g),r=s.match(/patch\-\d\.\d\.\d+/g);return!o||!r?G(e.name,e.version):(o=o[0],r=r[0],o!=e.version?Y(n,o,r.split("-")[1],e,!1):r!=e.build?Y(n,o,r.split("-")[1],e,!0):G(e.name,e.version))}const Y=(e,n,s,o,r)=>{const a=r?s:n;L.show({title:"Update found",body:`A newer ${r?"build":"version"} is available for ${o.name}. ${r?`
The version will remain at ${n}, but the build will update to ${s}.`:""}
Would you like to install ${r?`build \`${s}\``:`version \`${n}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>ae(e,a,o,r)})},G=(e,n)=>{console.log(`[${e}] Plugin is on the latest version, which is ${n}`),f.open({content:`${e} is on latest version (${n})`,source:m.Settings.Toasts.Settings})};async function ae(e,n,s,o){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?L.show({title:`Updated ${s.name}`,body:`Successfully updated to ${o?"build":"version"} \`${n}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{se()}}):L.show({title:"Error",body:`Something went wrong while updating ${s.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{re.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${s.name}%20Update%20Error%3A%20${o?`b${n}`:`v${n}`}`)}})})}const P=window.enmity.modules.common.Components.General.Animated,[B,ce]=N(_.byProps("transitionToGuild"),_.byProps("setString"));var de=({manifest:e})=>{const n=M.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:v.ThemeColorMap.HEADER_PRIMARY,fontFamily:v.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:v.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),s=t.useRef(new P.Value(1)).current,o=()=>{P.spring(s,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{P.spring(s,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>{B.openURL("https://spin.rip/")},h={transform:[{scale:s}]};return t.createElement(t.Fragment,null,t.createElement(S,{style:n.container},t.createElement(p,{onPress:a,onPressIn:o,onPressOut:r},t.createElement(P.View,{style:[h]},t.createElement(J,{style:[n.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(S,{style:n.text_container},t.createElement(p,{onPress:()=>{B.openURL(e.sourceUrl)}},t.createElement(b,{style:[n.main_text,n.header]},e.name," ")),t.createElement(S,{style:{flexDirection:"row"}},t.createElement(b,{style:[n.main_text,n.sub_header]},"A plugin by"),t.createElement(p,{onPress:()=>{B.openURL("https://spin.rip/")}},t.createElement(b,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:v.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),t.createElement(S,{style:{flexDirection:"row"}},t.createElement(b,{style:[n.main_text,n.sub_header]},"Settings page by"),t.createElement(p,{onPress:()=>{B.openURL("https://github.com/acquitelol/")}},t.createElement(b,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:v.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),t.createElement(S,null,t.createElement(p,{style:{flexDirection:"row"},onPress:()=>{ce.setString(`**${e.name}** v${e.version}`),E("plugin name and version")}},t.createElement(b,{style:[n.main_text,n.sub_header]},"Version:"),t.createElement(b,{style:[n.main_text,n.sub_header,{paddingLeft:4,fontFamily:v.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[me,A]=N(_.byProps("transitionToGuild"),_.byProps("setString"));var ue=({manifest:e,settings:n,hasToasts:s,children:o,commands:r})=>{const a=M.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:v.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:v.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[h,u]=t.useState(),[g,C]=t.useState();return t.createElement(t.Fragment,null,t.createElement(Q,{onTouchStart:c=>{u(c.nativeEvent.pageX),C(c.nativeEvent.pageY)},onTouchEnd:c=>{h-c.nativeEvent.pageX<-100&&g-c.nativeEvent.pageY<40&&g-c.nativeEvent.pageY>-40&&ne.pop()}},t.createElement(de,{manifest:e}),o,r&&t.createElement(D,{title:"Plugin Commands"},r.map(c=>t.createElement(l,{label:`/${c.name}`,subLabel:c.description,leading:t.createElement(l.Icon,{style:a.icon,source:m.Settings.Commands}),trailing:l.Arrow,onPress:function(){A.setString(`/${c.name}`),E(`the command ${c.name}`)}}))),t.createElement(D,{title:"Utility"},s&&t.createElement(t.Fragment,null,t.createElement(l,{label:"Initialization Toasts",leading:t.createElement(l.Icon,{style:a.icon,source:m.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:t.createElement(Z,{value:n.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{n.toggle(`${e.name}-toastEnable`,!1),f.open({content:`Successfully ${n.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:m.Settings.Toasts.Settings})}})}),t.createElement(I,null)),t.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:t.createElement(l.Icon,{style:a.icon,source:m.Settings.Debug}),trailing:l.Arrow,onPress:async function(){A.setString(await ie(e.name,e.version,e.build)),E("plugin debug information")}}),t.createElement(I,null),t.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:t.createElement(l.Icon,{style:a.icon,source:m.Delete}),trailing:l.Arrow,onPress:async function(){await R.removeItem("device_list"),f.open({content:"Cleared device list storage.",source:m.Settings.Toasts.Settings})}})),t.createElement(D,{title:"Source"},t.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(l.Icon,{style:a.icon,source:m.Copy}),trailing:l.Arrow,onPress:()=>{le({manifest:e})}}),t.createElement(I,null),t.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(l.Icon,{style:a.icon,source:m.Open}),trailing:l.Arrow,onPress:()=>{me.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),t.createElement(l,{style:a.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))},ge="FriendInvites",ve="1.2.6",we="patch-1.0.10",he="Easily create a Discord friend invite link to make it easier for users to add you as a friend",fe=[{name:"spin",id:"308440976723148800"}],ye="#ff0069",be="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/FriendInvites.js",j={name:ge,version:ve,build:we,description:he,authors:fe,color:ye,sourceUrl:be};function w(e,n,s,o){window.enmity.clyde.sendReply(e,n,s,o)}var z;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(z||(z={}));var x;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(x||(x={}));var F;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(F||(F={}));var W;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(W||(W={}));var T;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(T||(T={}));var H;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(H||(H={}));const pe={id:"create-friend-invite",name:"invites create",displayName:"invites create",description:"Create a friend invite link",displayDescription:"Create a friend invite link",type:x.Chat,inputType:F.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the response",displayDescription:"Only you can see the response",type:T.Boolean,required:!1}],execute:async function(e,n){var s,o,r,a;const h=e[e.findIndex(u=>u.name==="whisper")];try{const u=await y("friendinvite").createFriendInvite();if(u)if((s=h==null?void 0:h.value)==null||s){w((o=n==null?void 0:n.channel.id)!=null?o:"0",`Your friend invite link is: discord.gg/${u.code}
Max uses: ${u.max_uses}
Expires: <t:${new Date(u.expires_at).getTime()/1e3}:R>`);return}else return{content:`discord.gg/${u.code}`};else console.log("[ createFriendInvite Response ]",u),w((r=n==null?void 0:n.channel.id)!=null?r:"0","Something went wrong, please try again later. Fetch response sent to console.")}catch(u){console.log("[ createFriendInvite Error ]",u),w((a=n==null?void 0:n.channel.id)!=null?a:"0","An error occured while creating the friend invite. Check debug logs for more info.")}}},Se={id:"list-friend-invites",name:"invites list",displayName:"invites list",description:"List your current friend invite links",displayDescription:"List your current friend invite links",type:x.Chat,inputType:F.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the response",displayDescription:"Only you can see the response",type:T.Boolean,required:!1}],execute:async function(e,n){var s,o,r,a,h;const u=e[e.findIndex(g=>g.name==="whisper")];try{const g=await y("friendinvite").getAllFriendInvites();if(g){const C={type:"rich",title:"Friend Invites",description:g.length==0?"You have no friend invites!":`${g.map(c=>`**https://discord.gg/${c.code}**
Uses: ${c.uses}/${c.max_uses}
Expires <t:${new Date(c.expires_at).getTime()/1e3}:R>`).join(`

`)}`,footer:{text:"Friend invites are mostly undocumented and any of these features may break at any time."},color:"0xff0069"};if((s=u==null?void 0:u.value)==null||s){w((o=n==null?void 0:n.channel.id)!=null?o:"0",{embeds:[C]});return}else if(g.length==0){w((r=n==null?void 0:n.channel.id)!=null?r:"0","You have no friend invites!");return}else return{content:`${g.map(c=>`\`discord.gg/${c.code}\` - uses: ${c.uses}/${c.max_uses} - expires <t:${new Date(c.expires_at).getTime()/1e3}:R>`).join(`
`)}`}}else console.log("[ listFriendInvites Response ]",g),w((a=n==null?void 0:n.channel.id)!=null?a:"0","Something went wrong, please try again later. Fetch response sent to console.")}catch(g){console.log("[ listFriendInvites Error ]",g),w((h=n==null?void 0:n.channel.id)!=null?h:"0","An error occured while fetching and listing friend invites. Check debug logs for more info.")}}},_e={id:"revoke-friend-invites",name:"invites revoke",displayName:"invites revoke",description:"Revoke all of your friend invites (this is irreversible and will delete all of your friend invites)",displayDescription:"Revoke all of your friend invites (this is irreversible and will delete all of your friend invites)",type:x.Chat,inputType:F.BuiltInText,execute:async function(e,n){var s,o,r;try{await y("friendinvite").revokeFriendInvites();const a=await y("friendinvite").getAllFriendInvites();if(a.length==0){w((s=n==null?void 0:n.channel.id)!=null?s:"0","All of your friend invites have been revoked.");return}else console.log("[ revokeFriendInvites Response ]",a),w((o=n==null?void 0:n.channel.id)!=null?o:"0","Something went wrong, please try again later. Fetch response sent to console.")}catch(a){console.log("[ revokeFriendInvites Error ]",a),w((r=n==null?void 0:n.channel.id)!=null?r:"0","An error occured while revoking friend invites. Check debug logs for more info.")}}},X=[pe,Se,_e],[q]=N(_.byProps("setString")),K=M.createThemedStyleSheet({icon:{color:v.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:v.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),Ee={...j,onStart(){this.commands=X},onStop(){this.commands=[]},patches:[],getSettingsPanel({settings:e}){const[n,s]=t.useState(null);return t.useEffect(async function(){const o=await y("friendinvite").getAllFriendInvites();!o||o.length===0?s(null):s(o)},[]),t.createElement(ue,{manifest:j,settings:e,hasToasts:!1,commands:X},t.createElement(D,{title:"Invite Links"},n&&t.createElement(t.Fragment,null,n.map(o=>t.createElement(l,{key:o.code,label:`discord.gg/${o.code}`,subLabel:`This invite has been used ${o.uses} times out of ${o.max_uses} and will expire ${new Date(o.expires_at).toLocaleString()}`,leading:t.createElement(l.Icon,{style:K.icon,source:m.Settings.Share}),trailing:l.Arrow,onPress:function(){q.setString(`discord.gg/${o.code}`),E(`the invite discord.gg/${o.code}`)},onLongPress:function(){L.show({title:"Revoke friend invites",body:`Would you like to revoke all friend invites?
This action is permanent and cannot be undone.`,confirmText:"Revoke",cancelText:"Cancel",onConfirm:()=>{y("friendinvite").revokeFriendInvites().then(()=>{y("friendinvite").getAllFriendInvites().then(r=>{if(!r||r.length==0){f.open({content:"Friends invites have been revoked",source:m.Settings.Toasts.Settings});return}else console.log("[ revokeFriendInvites Response ]",r),f.open({content:"Something went wrong. Invite list sent to console",source:m.Failed})}).catch(r=>{console.log("[ revokeFriendInvites Response ]",r),f.open({content:"Something went wrong. Details sent to console",source:m.Failed})})})}})}})))||t.createElement(t.Fragment,null,t.createElement(l,{key:Math.floor(Math.random()*1001),label:"Create a friend invite",subLabel:"You do not have any friend invites! Try creating one.",leading:t.createElement(l.Icon,{style:K.icon,source:m.Add}),trailing:l.Arrow,onPress:function(){y("friendinvite").createFriendInvite().then(o=>{o?(q.setString(`discord.gg/${o.code}`),E(`the invite discord.gg/${o.code}`)):(console.log("[ createFriendInvite Response ]",o),f.open({content:"Something went wrong. Invite list sent to console",source:m.Failed}))}).catch(o=>{console.log("[ createFriendInvite Response ]",o),f.open({content:"Something went wrong. Details sent to console",source:m.Failed})})}}))),t.createElement(I,null))}};O(Ee);
