function J(e,t,o){window.enmity.settings.set(e,t,o)}function U(e,t,o){return window.enmity.settings.get(e,t,o)}const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const X=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const ce=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const h=i.Text;i.TextInput,i.TouchableHighlight;const b=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const w=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const C=i.FormDivider;i.FormHint,i.FormIcon;const K=i.FormInput;i.FormLabel,i.FormRadio;const s=i.FormRow,A=i.FormSection;i.FormSelect,i.FormSubLabel;const me=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;function de(e){window.enmity.plugins.registerPlugin(e)}const D={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function ue(e,t){return window.enmity.modules.getModule(e,t)}function M(...e){return window.enmity.modules.bulk(...e)}function E(...e){return window.enmity.modules.getByProps(...e)}function pe(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;const m=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const F=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const L=window.enmity.modules.common.Storage,y=window.enmity.modules.common.Toasts,$=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const q=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const ge=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const Z=window.enmity.modules.common.Linking,O=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const we=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function ye(e){return window.enmity.patcher.create(e)}function he(e,t,o){return window.enmity.utilities.findInReactTree(e,t,o)}const Q=e=>{let t=0;for(let o in e)t++;return t};function l(e){return window.enmity.assets.getIDByName(e)}const c={Debug:l("debug"),Retry:l("ic_message_retry"),Failed:l("Small"),Cancel:l("ic_megaphone_nsfw_16px"),Add:l("add_white"),Delete:l("ic_message_delete"),Clear:l("ic_clear_all_24px"),Pencil:l("ic_pencil_24px"),Success:l("ic_selection_checked_24px"),Copy:l("toast_copy_link"),Open:l("ic_leave_stage"),Clipboard:l("pending-alert"),Debug_Command:{Sent:l("ic_application_command_24px"),Clock:l("clock")},Settings:{Toasts:{Context:l("toast_image_saved"),Settings:l("ic_selection_checked_24px")},Self:l("friends_toast_icon"),Share:l("share"),Robot:l("ic_robot_24px"),Commands:l("ic_profile_badge_bot_commands"),Debug:l("ic_rulebook_16px")}},V=e=>{y.open({content:`Copied ${e} to clipboard.`,source:c.Clipboard})},fe=e=>{let t=e.split(`
`).map(o=>{if(o!="")return`"${o.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[Q(t)]=`${t[Q(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function ve(){try{let e=await L.getItem("device_list");if(e)return JSON.parse(e);let t=(await q.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,o=fe(t);await L.setItem("device_list",o);let r=await L.getItem("device_list");return JSON.parse(r)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function be(e,t,o){let r=await ve();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${o.split("-")[1]}
> **Discord Build:** ${F.InfoDictionaryManager.Version} (${F.InfoDictionaryManager.Build})
> **Software Version:** ${F.DCDDeviceManager.systemVersion}
> **Device:** ${r[F.DCDDeviceManager.device]}`}const{native:P}=window.enmity;function Se(){P.reload()}P.version,P.build,P.device,P.version;const Ee=E("transitionToGuild");async function _e({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,o=await(await q.get(t)).text;let r=o.match(/\d\.\d\.\d+/g),a=o.match(/patch\-\d\.\d\.\d+/g);return!r||!a?te(e.name,e.version):(r=r[0],a=a[0],r!=e.version?ee(t,r,a.split("-")[1],e,!1):a!=e.build?ee(t,r,a.split("-")[1],e,!0):te(e.name,e.version))}const ee=(e,t,o,r,a)=>{const u=a?o:t;$.show({title:"Update found",body:`A newer ${a?"build":"version"} is available for ${r.name}. ${a?`
The version will remain at ${t}, but the build will update to ${o}.`:""}
Would you like to install ${a?`build \`${o}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Te(e,u,r,a)})},te=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),y.open({content:`${e} is on latest version (${t})`,source:c.Settings.Toasts.Settings})};async function Te(e,t,o,r){window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?$.show({title:`Updated ${o.name}`,body:`Successfully updated to ${r?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{Se()}}):$.show({title:"Error",body:`Something went wrong while updating ${o.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{Ee.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${o.name}%20Update%20Error%3A%20${r?`b${t}`:`v${t}`}`)}})})}const B=window.enmity.modules.common.Components.General.Animated,[k,Re]=M(D.byProps("transitionToGuild"),D.byProps("setString"));var Ce=({manifest:e})=>{const t=O.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:m.ThemeColorMap.HEADER_PRIMARY,fontFamily:m.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:m.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),o=n.useRef(new B.Value(1)).current,r=()=>{B.spring(o,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},a=()=>{B.spring(o,{toValue:1,duration:250,useNativeDriver:!0}).start()},u=()=>{k.openURL("https://spin.rip/")},p={transform:[{scale:o}]};return n.createElement(n.Fragment,null,n.createElement(w,{style:t.container},n.createElement(b,{onPress:u,onPressIn:r,onPressOut:a},n.createElement(B.View,{style:[p]},n.createElement(X,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(w,{style:t.text_container},n.createElement(b,{onPress:()=>{k.openURL(e.sourceUrl)}},n.createElement(h,{style:[t.main_text,t.header]},e.name," ")),n.createElement(w,{style:{flexDirection:"row"}},n.createElement(h,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(b,{onPress:()=>{k.openURL("https://spin.rip/")}},n.createElement(h,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:m.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(w,{style:{flexDirection:"row"}},n.createElement(h,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(b,{onPress:()=>{k.openURL("https://github.com/acquitelol/")}},n.createElement(h,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:m.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(w,null,n.createElement(b,{style:{flexDirection:"row"},onPress:()=>{Re.setString(`**${e.name}** v${e.version}`),V("plugin name and version")}},n.createElement(h,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(h,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:m.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[De,ne]=M(D.byProps("transitionToGuild"),D.byProps("setString"));var Pe=({manifest:e,settings:t,hasToasts:o,children:r,commands:a})=>{const u=O.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:m.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:m.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[p,I]=n.useState(),[_,S]=n.useState();return n.createElement(n.Fragment,null,n.createElement(ce,{onTouchStart:g=>{I(g.nativeEvent.pageX),S(g.nativeEvent.pageY)},onTouchEnd:g=>{p-g.nativeEvent.pageX<-100&&_-g.nativeEvent.pageY<40&&_-g.nativeEvent.pageY>-40&&ge.pop()}},n.createElement(Ce,{manifest:e}),r,a&&n.createElement(A,{title:"Plugin Commands"},a.map(g=>n.createElement(s,{label:`/${g.name}`,subLabel:g.description,leading:n.createElement(s.Icon,{style:u.icon,source:c.Settings.Commands}),trailing:s.Arrow,onPress:function(){ne.setString(`/${g.name}`),V(`the command ${g.name}`)}}))),n.createElement(A,{title:"Utility"},o&&n.createElement(n.Fragment,null,n.createElement(s,{label:"Initialization Toasts",leading:n.createElement(s.Icon,{style:u.icon,source:c.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(me,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),y.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:c.Settings.Toasts.Settings})}})}),n.createElement(C,null)),n.createElement(s,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(s.Icon,{style:u.icon,source:c.Settings.Debug}),trailing:s.Arrow,onPress:async function(){ne.setString(await be(e.name,e.version,e.build)),V("plugin debug information")}}),n.createElement(C,null),n.createElement(s,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(s.Icon,{style:u.icon,source:c.Delete}),trailing:s.Arrow,onPress:async function(){await L.removeItem("device_list"),y.open({content:"Cleared device list storage.",source:c.Settings.Toasts.Settings})}})),n.createElement(A,{title:"Source"},n.createElement(s,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(s.Icon,{style:u.icon,source:c.Copy}),trailing:s.Arrow,onPress:()=>{_e({manifest:e})}}),n.createElement(C,null),n.createElement(s,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(s.Icon,{style:u.icon,source:c.Open}),trailing:s.Arrow,onPress:()=>{De.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(s,{style:u.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))},xe="ReviewDB",Ie="1.7.0",Ae="patch-1.1.3",Fe="Review other users. These reviews are visible to anyone with this type of plugin on any platform.",Le=[{name:"spin",id:"308440976723148800"},{name:"Rosie<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],$e="#ff0069",Be="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/ReviewDB.js",ke="https://manti.vendicated.dev",f={name:xe,version:Ie,build:Ae,description:Fe,authors:Le,color:$e,sourceUrl:Be,API_URL:ke};const d=O.createThemedStyleSheet({container:{marginTop:12,marginLeft:12,alignSelf:"flex-start",width:"95%"},eyebrow:{textTransform:"uppercase",fontSize:12,lineHeight:16,fontFamily:m.Fonts.PRIMARY_BOLD,color:m.ThemeColorMap.TEXT_NORMAL,marginBottom:10},innerContainer:{backgroundColor:m.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,borderRadius:8,borderWidth:1,borderColor:m.ThemeColorMap.HEADER_PRIMARY,overflow:"hidden",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},button:{width:"100%",height:40,justifyContent:"center",alignItems:"center",backgroundColor:"#1e1f22",borderRadius:8,marginTop:10,marginBottom:5},buttonContainer:{flexDirection:"row"},circle:{width:12,height:12,borderRadius:12/2,backgroundColor:m.ThemeColorMap.HEADER_PRIMARY,marginLeft:8,marginRight:6},content:{fontSize:14,paddingRight:8,paddingTop:8,paddingBottom:8},text:{fontFamily:m.Fonts.DISPLAY_BOLD,color:m.ThemeColorMap.TEXT_NORMAL},buttonText:{fontSize:16},mainText:{opacity:.975,letterSpacing:.25},itemContainer:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:6,paddingBottom:6,width:"95%"},authorName:{color:m.ThemeColorMap.HEADER_PRIMARY,fontFamily:m.Fonts.DISPLAY_BOLD,fontSize:18,letterSpacing:.25,paddingBottom:4},reviewHeader:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"90%"},reviewSubHeader:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"65%"},avatarContainer:{alignSelf:"start",justifySelf:"start",marginTop:5},authorAvatar:{width:40,height:40,borderRadius:100},messageContent:{color:m.ThemeColorMap.TEXT_NORMAL,fontFamily:m.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:16},textContainer:{display:"flex",flexDirection:"column",paddingBottom:4,paddingLeft:8,width:"90%"},addReview:{paddingLeft:10,paddingRight:10}});function x({text:e,onPress:t}){return n.createElement(w,{style:d.buttonContainer},n.createElement(b,{style:d.button,onPress:t!=null?t:console.log("No press function provided.")},n.createElement(h,{style:[d.text,d.buttonText]},e)))}const Y=()=>U(f.name,"rdbToken","");let N=!1;const z=()=>N?!1:Y()?!0:(N=!0,$.show({title:"Unauthorized",body:"You have not set your ReviewDB Auth Token. Please do so in the settings panel.",confirmText:"Get ReviewDB Token",cancelText:"Close",onConfirm:()=>{Z.openURL("https://discord.com/api/v9/oauth2/authorize?client_id=915703782174752809&response_type=code&redirect_uri=https%3A%2F%2Fmanti.vendicated.dev%2FURauth&scope=identify"),N=!1},onCancel:()=>{N=!1}}),!1);async function oe(e){try{return await(await fetch(`${f.API_URL}/getUserReviews?snowflakeFormat=string&discordid=${e}`)).json()}catch(t){y.open({content:"Error while fetching reviews. Check logs for more info.",source:c.Failed}),console.log("[ReviewDB] Error while fetching reviews:",t)}}async function Ne(e){var t;if(!z())return new Promise((r,a)=>a("Invalid token!"));const o=await(await fetch(f.API_URL+"/addUserReview",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).text();return o&&y.open({content:o,source:c.Pencil}),console.log("[ReviewDB]",(t=Response[o])!=null?t:Response.error)}async function Ue(e){if(!z())return new Promise((o,r)=>r("Invalid token!"));const t=await(await fetch(f.API_URL+"/deleteReview",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({token:Y(),reviewid:e})})).json();y.open({content:(t==null?void 0:t.message)||"Response is empty",source:c.Success})}async function Me(e){if(!z())return new Promise((o,r)=>r("Invalid token!"));const t=await fetch(f.API_URL+"/reportReview",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:Y()})});y.open({content:await t.text(),source:c.Success})}function Oe(e,t){return e.senderdiscordid==t}const[Ve]=M(D.byProps("fetchProfile"));var ie=({item:e,onSubmit:t})=>n.createElement(n.Fragment,{key:e.senderdiscordid},n.createElement(w,{style:d.itemContainer},n.createElement(b,{onPress:()=>{Ve.fetchProfile(e.senderdiscordid).then(()=>{we.showUserProfile({userId:e.senderdiscordid})}).catch(o=>{y.open({content:"Could not fetch user. Check logs for more info.",source:c.Failed}),console.log("[ReviewDB User Fetch Error]",o)})},style:d.avatarContainer},n.createElement(X,{loading:"lazy",style:d.authorAvatar,source:{uri:e.profile_photo.replace("?size=128","?size=96")}})),n.createElement(b,{onPress:t,style:d.textContainer},n.createElement(w,{style:d.reviewHeader},n.createElement(w,{style:d.reviewSubHeader},n.createElement(h,{style:[d.mainText,d.authorName]},e.username))),n.createElement(w,null,n.createElement(h,{style:d.messageContent},e.comment)))),n.createElement(C,null)),re;const ae=((re=ue(e=>{var t,o;return((o=(t=e.default)==null?void 0:t.render)==null?void 0:o.name)=="ActionSheet"}))!=null?re:{default:{render:!1}}).default.render,Ye=E("BottomSheetScrollView").BottomSheetScrollView,ze=E("openLazy","hideActionSheet"),se=E("setString");function je(e,t,o){ae?ze.openLazy(new Promise(r=>r({default:He})),"ReviewActionSheet",{onConfirm:e,item:t,currentUserID:o}):y.open({content:"You cannot open ActionSheets on this version! Upgrade to 163+",source:c.Failed})}function He({onConfirm:e,item:t,currentUserID:o}){var r;return console.log(t),n.createElement(ae,null,n.createElement(Ye,{contentContainerStyle:{marginBottom:10}},n.createElement(w,{style:{flexDirection:"column",padding:15}},n.createElement(ie,{item:t,onSubmit:null}),t.comment?n.createElement(x,{text:"Copy Text",onPress:()=>{se.setString(t.comment),y.open({content:"Copied to clipboard!",source:c.Success})}}):null,t.id?n.createElement(x,{text:"Copy ID",onPress:()=>{se.setString(t.id),y.open({content:"Copied to clipboard!",source:c.Success})}}):null,(r=Oe)!=null&&r(t,o)?n.createElement(x,{text:"Delete Review",onPress:()=>{Ue(t.id).then(()=>{e()})}}):null,t.id?n.createElement(x,{text:"Report Review",onPress:()=>{Me(t.id).then(()=>{e()})}}):null)))}const Ge=E("openLazy","hideActionSheet");var We=({userID:e,currentUserID:t})=>{const[o,r]=n.useState(""),[a,u]=n.useState([]);return n.useEffect(()=>{oe(e).then(p=>{u(p)})},[]),n.createElement(n.Fragment,null,n.createElement(w,{style:d.container},n.createElement(h,{style:d.eyebrow},"User Reviews"),a&&a.length>0?a.map(p=>n.createElement(ie,{item:p,onSubmit:()=>je(()=>{Ge.hideActionSheet()},p,t)})):n.createElement(h,{style:[d.text,d.content]},"No reviews yet. You could be the first!")),n.createElement(w,{style:d.addReview},n.createElement(K,{id:"reviewTextbox",placeholder:JSON.stringify(a).includes(t)?"Tap here to update your review...":"Tap here to leave a review...",value:o,onChange:p=>{r(p)}}),n.createElement(x,{text:"Submit",onPress:()=>{o?Ne({userid:e,comment:o.trim(),star:-1,token:U(f.name,"rdbToken","")}).then(()=>{oe(e).then(p=>{u(p)}),r("")}):y.open({content:"Please enter a review before submitting.",source:c.Failed})}})))};const le=ye(f.name),Je=E("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),Xe={...f,onStart(){let e;setTimeout(()=>e=pe("getCurrentUser").getCurrentUser().id,2e3),le.after(Je.default,"type",(t,o,r)=>{var a,u,p,I,_;const S=(u=(a=he(r,v=>{var T,R,j;return((T=v==null?void 0:v.props)==null?void 0:T.children.find(H=>{var G,W;return typeof((W=(G=H==null?void 0:H.props)==null?void 0:G.displayProfile)==null?void 0:W.userId)=="string"}))&&((R=v==null?void 0:v.type)==null?void 0:R.displayName)==="View"&&Array.isArray((j=v==null?void 0:v.props)==null?void 0:j.style)}))==null?void 0:a.props)==null?void 0:u.children;if(!S)return r;const{userId:g}=(_=(I=(p=S==null?void 0:S.find(v=>{var T,R;return typeof((R=(T=v==null?void 0:v.props)==null?void 0:T.displayProfile)==null?void 0:R.userId)=="string"}))==null?void 0:p.props)==null?void 0:I.displayProfile)!=null?_:{};if(!g)return r;S.push(n.createElement(We,{userID:g,currentUserID:e}))})},onStop(){le.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(Pe,{manifest:f,settings:e,hasToasts:!1,commands:null},n.createElement(A,{title:"Plugin Settings"},n.createElement(s,{label:"Get ReviewDB Auth Token",trailing:s.Arrow,leading:n.createElement(s.Icon,{source:c.Settings.Self}),onPress:()=>{Z.openURL("https://discord.com/api/v9/oauth2/authorize?client_id=915703782174752809&response_type=code&redirect_uri=https%3A%2F%2Fmanti.vendicated.dev%2FURauth&scope=identify")}}),n.createElement(C,null),n.createElement(K,{placeholder:"token",value:U(f.name,"rdbToken",""),onChange:t=>/^[A-Za-z0-9]{30,32}$/.test(t)?J(f.name,"rdbToken",t.trim()):J(f.name,"rdbToken",""),title:"ReviewDB Auth Token"})))}};de(Xe);
