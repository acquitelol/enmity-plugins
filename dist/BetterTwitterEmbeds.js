function l(e){window.enmity.plugins.registerPlugin(e)}function c(e){return window.enmity.plugins.installPlugin(e)}function w(e){return window.enmity.patcher.create(e)}var d="BetterTwitterEmbeds",a="1.0.0",u="Convert Twitter links to FxTwitter links so the tweet embed is better.",y=[{name:"spin",id:"308440976723148800"}],g="#ff0069",h="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/BetterTwitterEmbeds.js",i={name:d,version:a,description:u,authors:y,color:g,sourceUrl:h};window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const p=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const F=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const s=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var S=({pluginUrl:e})=>n.createElement(s,{label:"Update Plugin",trailing:s.Arrow,onPress:()=>{console.log(e),c(`${e}?${Math.floor(Math.random()*1001)}.js`)}});const r=w("BTE"),T={...i,onStart(){try{r.before(p,"sendMessage",(e,t,b)=>{const m=t[1].content;!m.match(/https:\/\/twitter.com\/\w{4,15}\/status\/\d+/gim)||(t[1].content=m.replace(/https:\/\/twitter.com/gim,"https://fxtwitter.com"))})}catch(e){console.log("[BetterTwitterEmbeds Error]",e)}},onStop(){r.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(F,{settings:e},n.createElement(S,{pluginUrl:i.sourceUrl}))}};l(T);
