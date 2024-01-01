"use strict";(self["webpackChunksub"]=self["webpackChunksub"]||[]).push([[611],{6477:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var n=function(){var t=this,e=t._self._c;return e("div",[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("div",[e("span",{staticStyle:{"margin-right":"10px"}},[t._v("订阅生成管理系统")]),e("el-button",{attrs:{icon:"el-icon-s-promotion",size:"mini"},on:{click:function(e){return t.handleOpenUrl("https://t.me/toutie_1")}}},[t._v("作者")]),e("el-button",{attrs:{icon:"el-icon-s-home",size:"mini"},on:{click:function(e){return t.handleOpenUrl("https://github.com/jaaksii/sublink")}}},[t._v("开源")])],1)]),e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",[e("span",{staticClass:"el-icon-umbrella",attrs:{slot:"label"},slot:"label"},[t._v(" 订阅管理")]),0!==t.filteredList.length?e("el-radio",{attrs:{label:"1",border:""},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[t._v("编辑订阅")]):t._e(),e("el-radio",{attrs:{label:"2",border:""},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[t._v("创建订阅")]),e("div",{staticStyle:{"margin-bottom":"10px"}}),"1"===t.radio1?e("div",[e("div",[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.optionValue,callback:function(e){t.optionValue=e},expression:"optionValue"}},t._l(t.filteredList,(function(t,s){return e("el-option",{key:s,attrs:{value:t}})})),1),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger",size:"mini",round:""},on:{click:t.handleDel}},[t._v("删除订阅")])],1),e("div",{staticStyle:{"margin-bottom":"10px"}}),e("el-input",{attrs:{type:"textarea",placeholder:"节点多个用回车分开,每个节点最后面带上|为备注信息",rows:"10","show-word-limit":""},model:{value:t.optionSub,callback:function(e){t.optionSub=e},expression:"optionSub"}}),e("div",{staticStyle:{"margin-bottom":"10px"}}),e("el-input",{attrs:{type:"text",readonly:""},model:{value:t.optionUrl,callback:function(e){t.optionUrl=e},expression:"optionUrl"}},[e("template",{slot:"prepend"},[t._v("订阅地址")]),e("template",{slot:"append"},[e("el-button",{attrs:{size:"small",icon:"el-icon-document-copy"},on:{click:function(e){return t.handleCopy(t.optionUrl)}}},[t._v("复制")]),e("el-button",{attrs:{size:"small",icon:"el-icon-paperclip"},on:{click:function(e){return t.handleOpenUrl(t.optionUrl)}}},[t._v("打开")])],1)],2),e("div",{staticStyle:{"margin-bottom":"10px"}}),e("el-button",{staticStyle:{position:"relative",left:"50%",transform:"translate(-50%)"},attrs:{round:""},on:{click:t.handleSet}},[t._v("修改订阅")])],1):e("div",[e("el-input",{attrs:{type:"text",placeholder:"订阅名称",maxlength:"20","show-word-limit":""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e("div",{staticStyle:{"margin-bottom":"10px"}}),e("el-input",{attrs:{type:"textarea",placeholder:"节点多个用回车分开,每个节点最后面带上|为备注信息",rows:"10"},model:{value:t.sub,callback:function(e){t.sub=e},expression:"sub"}}),e("div",{staticStyle:{"margin-bottom":"10px"}}),""!==t.url?e("div",[e("el-input",{attrs:{type:"text",readonly:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}},[e("template",{slot:"prepend"},[t._v("订阅地址")]),e("template",{slot:"append"},[e("el-button",{attrs:{size:"small",icon:"el-icon-document-copy"},on:{click:function(e){return t.handleCopy(t.url)}}},[t._v("复制")]),e("el-button",{attrs:{size:"small",icon:"el-icon-paperclip"},on:{click:function(e){return t.handleOpenUrl(t.url)}}},[t._v("打开")])],1)],2)],1):t._e(),e("div",{staticStyle:{"margin-bottom":"10px"}}),e("el-button",{staticStyle:{position:"relative",left:"50%",transform:"translate(-50%)"},attrs:{round:""},on:{click:t.handleCreate}},[t._v("创建订阅")])],1)],1),e("el-tab-pane",[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-user-solid"},[t._v(" 账号设置")])]),e("User")],1)],1),e("div",{staticStyle:{"padding-bottom":"5px"}})],1)],1)},i=[],a=(s(560),s(3764)),o=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("span",[t._v(t._s(t.username))]),e("span",{staticStyle:{"margin-left":"10px"}},[e("el-button",{attrs:{size:"mini"},on:{click:t.ifOutUser}},[t._v("注销")])],1)]),e("div",{staticStyle:{"margin-bottom":"10px"}}),e("el-input",{attrs:{type:"text",placeholder:"新账号"},model:{value:t.newUserName,callback:function(e){t.newUserName=e},expression:"newUserName"}},[e("template",{slot:"prepend"},[t._v("新账号")])],2),e("div",{staticStyle:{"margin-bottom":"10px"}}),e("el-input",{attrs:{type:"text",placeholder:"新密码"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSetUser.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[e("template",{slot:"prepend"},[t._v("新密码")])],2),e("div",{staticStyle:{"margin-bottom":"10px"}}),e("el-button",{staticStyle:{position:"relative",left:"50%",transform:"translate(-50%)"},attrs:{round:""},on:{click:t.handleSetUser}},[t._v("修改")])],1)},l=[],r=(s(3429),s(4164));const c=t=>r.Z.post("/set_user",t);var u={name:"MyUser",data(){return{username:"",newUserName:"",password:"",timer:""}},created(){this.handleUser()},methods:{handleUser(){const t=JSON.parse(localStorage.getItem("token"));if(t){const e=t.split(".")[1],s=JSON.parse(atob(e));this.username=s.sub}},handleSetUser(){return/^\w{4,12}$/.test(this.newUserName)?/^\w{4,32}$/.test(this.password)?(clearTimeout(this.timer),void(this.timer=setTimeout((async()=>{const{code:t,msg:e}=await c({username:this.username,newUserName:this.newUserName,password:this.password});this.$message({type:200===t?"success":"warning",message:e}),200===t&&(this.$message({message:"现在请重新登录"}),this.handleOutUser())}),1e3))):alert("请输入4-32位数字母或者数字密码"):alert("请输入4-12位数字母或者数字账号")},handleOutUser(){localStorage.removeItem("token"),localStorage.removeItem("refresh"),location.reload()},ifOutUser(){this.$confirm("此操作将注销重新登录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((()=>{this.handleOutUser()})).catch((()=>{}))}}},p=u,d=s(1001),m=(0,d.Z)(p,o,l,!1,null,"12fe9540",null),h=m.exports,b={name:"MyIndex",data(){return{activeName:"",name:"",sub:"",sublist:[],url:"",radio1:"2",list:[],optionValue:"",optionSub:"",optionUrl:"",filteredList:[],timer:null}},created(){this.GetSub(),this.list.length>0?this.radio1="1":this.radio1="2"},watch:{optionValue(t){const e=this.list.filter((e=>e.name===t)),s=e.map((t=>t.node+(t.remarks?"|"+t.remarks:"")));this.optionSub=s.join("\n"),this.optionUrl=location.origin+"/sub="+t}},methods:{async GetSub(){const t=await(0,a.n5)();0===t.length?console.log("没有节点"):(this.list=t,this.filteredList=Array.from(new Set(this.list.map((t=>t.name)))))},handleCreate(){if(""===this.sub||""===this.name)return!1;clearTimeout(this.timer),this.timer=setTimeout((async()=>{this.sublist=this.sub.split("\n");const{code:t,msg:e}=await(0,a.zg)({name:this.name,node:this.sublist});this.$message({message:e,type:200===t?"success":"warning"}),200===t&&(this.url=location.origin+"/sub="+this.name,this.filteredList.push(this.name),this.GetSub())}),1e3)},async handleSet(){if(""===this.optionSub)return!1;const t=this.list.find((t=>t.name===this.optionValue)),e=this.optionSub.split("\n"),{code:s,msg:n}=await(0,a.Dt)({name:this.optionValue,node:t.node,newNode:e});this.$message({message:n,type:200===s?"success":"warning"}),200===s&&(console.log("修改成功"),this.GetSub())},handleOpenUrl(t){window.open(t)},handleDel(){clearTimeout(this.timer),this.timer=setTimeout((()=>{this.$confirm("此操作将永久删除该订阅, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((async()=>{const{code:t,msg:e}=await(0,a.Hc)(this.optionValue);200===t&&(this.filteredList=this.filteredList.filter((t=>t!==this.optionValue)),this.optionValue=""),this.$message({type:200===t?"success":"warning",message:e}),0===this.filteredList.length&&(this.radio1="2")})).catch((()=>{}))}),100)},handleCopy(t){this.$copyText(t),this.$message({message:"复制成功"})}},components:{User:h}},f=b,v=(0,d.Z)(f,n,i,!1,null,"7297d5da",null),y=v.exports},3764:function(t,e,s){s.d(e,{Dt:function(){return r},Hc:function(){return l},Uq:function(){return o},n5:function(){return i},zg:function(){return a}});var n=s(4164);const i=()=>n.Z.post("/get_subs"),a=t=>n.Z.post("/create_sub",t),o=t=>n.Z.post("/get_sub/"+t),l=t=>n.Z.post("/del_sub/"+t),r=t=>n.Z.post("/set_sub",t)}}]);
//# sourceMappingURL=611.6621f927.js.map