(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2713cfe4"],{"33f0":function(e,t,s){},"3fdb":function(e,t,s){"use strict";var i=s("33f0"),n=s.n(i);n.a},5118:function(e,t,s){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,n=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(n.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new a(n.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},s("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,s("c8ba"))},6017:function(e,t,s){(function(e,t){(function(e,s){"use strict";if(!e.setImmediate){var i,n=1,a={},o=!1,l=e.document,r=Object.getPrototypeOf&&Object.getPrototypeOf(e);r=r&&r.setTimeout?r:e,"[object process]"==={}.toString.call(e.process)?m():g()?p():e.MessageChannel?h():l&&"onreadystatechange"in l.createElement("script")?y():v(),r.setImmediate=c,r.clearImmediate=u}function c(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),s=0;s<t.length;s++)t[s]=arguments[s+1];var o={callback:e,args:t};return a[n]=o,i(n),n++}function u(e){delete a[e]}function f(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(s,i);break}}function d(e){if(o)setTimeout(d,0,e);else{var t=a[e];if(t){o=!0;try{f(t)}finally{u(e),o=!1}}}}function m(){i=function(e){t.nextTick((function(){d(e)}))}}function g(){if(e.postMessage&&!e.importScripts){var t=!0,s=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=s,t}}function p(){var t="setImmediate$"+Math.random()+"$",s=function(s){s.source===e&&"string"===typeof s.data&&0===s.data.indexOf(t)&&d(+s.data.slice(t.length))};e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),i=function(s){e.postMessage(t+s,"*")}}function h(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;d(t)},i=function(t){e.port2.postMessage(t)}}function y(){var e=l.documentElement;i=function(t){var s=l.createElement("script");s.onreadystatechange=function(){d(t),s.onreadystatechange=null,e.removeChild(s),s=null},e.appendChild(s)}}function v(){i=function(e){setTimeout(d,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,s("c8ba"),s("4362"))},7424:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-dialog",{attrs:{title:"添加阿里云配置",visible:e.aliDialogVisible,width:"30%",center:"","destroy-on-close":""},on:{"update:visible":function(t){e.aliDialogVisible=t},close:function(t){return e.resetForm("form")}}},[s("div",{staticClass:"dialog-form"},[s("el-form",{ref:"form",staticClass:"dialogbody",attrs:{model:e.form,rules:e.dialogRules,"label-width":"150px"}},[s("el-form-item",{attrs:{label:"AccessKeyId",prop:"AccessKeyId"}},[s("el-input",{staticStyle:{width:"71%"},attrs:{autocomplete:"off"},model:{value:e.form.AccessKeyId,callback:function(t){e.$set(e.form,"AccessKeyId",t)},expression:"form.AccessKeyId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"AccessKeySecret",prop:"AccessKeySecret"}},[s("el-input",{staticStyle:{width:"71%"},attrs:{autocomplete:"off"},model:{value:e.form.AccessKeySecret,callback:function(t){e.$set(e.form,"AccessKeySecret",t)},expression:"form.AccessKeySecret"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Region",prop:"Region"}},[s("el-input",{staticStyle:{width:"71%"},attrs:{autocomplete:"off"},model:{value:e.form.Region,callback:function(t){e.$set(e.form,"Region",t)},expression:"form.Region"}})],1)],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.AddAliyunForm("form")}}},[e._v("确 定")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"添加系统配置",visible:e.systemDialogVisible,width:"30%","destroy-on-close":"","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.systemDialogVisible=t},close:function(t){return e.resetSysForm("sysform")}}},[s("div",{staticClass:"dialog"},[s("el-form",{ref:"sysform",staticClass:"sysdialogbody",attrs:{model:e.sysform,rules:e.sysdialogRules,"label-width":"150px"}},[s("el-upload",{staticClass:"upload-demo",attrs:{"http-request":e.handleFile,multiple:!1,limit:1,drag:"",action:"#",clearFiles:"","on-exceed":e.handleExceed,"file-list":e.fileList,"before-upload":e.beforeAvatarUpload}},[s("i",{staticClass:"el-icon-upload"}),e._v(" "),s("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或\n            "),s("em",[e._v("点击上传")])]),e._v(" "),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("仅支持 png 文件上传, 图片尺寸 150 x 150")])]),e._v(" "),s("div",{staticClass:"upload_form_item"},[s("el-form-item",{attrs:{label:"Title",prop:"title"}},[s("el-input",{staticStyle:{width:"80%"},attrs:{autocomplete:"off"},model:{value:e.sysform.title,callback:function(t){e.$set(e.sysform,"title",t)},expression:"sysform.title"}})],1)],1)],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){return e.resetSysForm("sysform")}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.uploadLogo("sysform")}}},[e._v("确 定")])],1)]),e._v(" "),s("div",{staticClass:"setting"},[s("el-tabs",{staticClass:"setting-tabs",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"阿里云配置",name:"aliyun"}},[s("el-form",{attrs:{inline:!0}},[s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleAliyunAdd}},[e._v("添加配置")]),e._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"AccessKeyId需要配置ECS、RDS、SLB权限，否则同步会失败；可以添加多个AccessKeyId，同步多个账号资源",placement:"right"}},[s("i",{staticClass:"el-icon-question",staticStyle:{"margin-left":"10px"}})])],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.aliLoading,expression:"aliLoading"}],attrs:{data:e.aliyunlist,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{align:"center",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.id)+"\n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"key",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.key)+"\n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"secret",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.secret)+"\n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"region",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.region)+"\n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.create_time)+"\n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",round:""},on:{click:function(s){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),s("el-tab-pane",{attrs:{label:"系统配置",name:"system"}},[s("el-form",{attrs:{inline:!0}},[s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSystemAdd}},[e._v("添加配置")]),e._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"添加配置将覆盖现有的配置，配置重新登录生效",placement:"right"}},[s("i",{staticClass:"el-icon-question",staticStyle:{"margin-left":"10px"}})])],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.sysLoading,expression:"sysLoading"}],attrs:{data:e.syslist,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{align:"center",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.id)+"\n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"title",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.name)+"\n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"logo",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.logo)+"\n            ")]}}])})],1)],1)],1)],1)],1)},n=[],a=(s("7f7f"),s("90e7")),o=s("5118"),l={data:function(){var e=function(e,t,s){if(!t)return s(new Error("IP地址不能为空"));var i=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;if(console.log(i.test(t)),!i.test(t))return s(new Error("请输入正确的IP地址"));s()};return{activeName:"aliyun",aliyunlist:null,aliLoading:!0,syslist:null,sysLoading:!0,sshlist:null,sshLoading:!0,aliDialogVisible:!1,systemDialogVisible:!1,sshDialogVisible:!1,dialogVisible:!1,dialogImageUrl:"",disabled:!1,sysform:{title:""},sysdialogRules:{title:[{required:!0,trigger:"blur",message:"title不能为空"}]},fileList:[],total:0,currentPage:1,pageSize:10,dialogRules:{AccessKeyId:[{required:!0,trigger:"blur",message:"AccessKeyId不能为空"}],AccessKeySecret:[{required:!0,trigger:"blur",message:"AccessKeySecret不能为空"}],Region:[{required:!0,message:"Region不能为空",trigger:"blur"}],ip:[{required:!0,trigger:"blur",validator:e}],username:[{required:!0,trigger:"blur",message:"用户名不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"}]},form:{AccessKeyId:"",AccessKeySecret:"",Region:""},sshform:{ip:"",username:"",password:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a["f"])({per_page:this.pageSize,page:this.currentPage}).then((function(t){e.aliyunlist=t.data.results,e.aliLoading=!1})).catch((function(e){console.log(e)}))},getSysData:function(){var e=this;Object(a["h"])().then((function(t){e.syslist=t.data.results,e.sysLoading=!1})).catch((function(e){console.log(e)}))},getSshData:function(){var e=this;Object(a["g"])().then((function(t){e.sshlist=t.data.results,e.sshLoading=!1})).catch((function(e){console.log(e)}))},handleSshAdd:function(){this.sshDialogVisible=!0},handleAliyunAdd:function(){this.aliDialogVisible=!0},resetForm:function(e){this.$refs[e].resetFields(),this.aliDialogVisible=!1},handleSystemAdd:function(){this.systemDialogVisible=!0},uploadLogo:function(e){var t=this,s=this;s.$refs[e].validate((function(i){if(i){var n=s.$refs[e].$el,l=new FormData(n);l.append("name",t.sysform.title),l.append("logo",s.fileList[0]),Object(a["c"])(l).then((function(e){201===e.status?(s.systemDialogVisible=!1,t.$message.success("配置设置成功"),s.fileList=[],Object(o["setTimeout"])((function(){t.fetchData()}),2e3)):t.$message.error("配置设置失败")})).catch((function(e){!0===e.response.hasOwnProperty("data")&&t.$message.error(e.response.data.non_field_errors[0])}))}else console.log("error")}))},resetSysForm:function(e){this.$refs[e].resetFields(),this.fileList=[],this.systemDialogVisible=!1},resetSshForm:function(e){this.$refs[e].resetFields(),this.sshDialogVisible=!1},beforeAvatarUpload:function(e){var t="image/png"===e.type;console.log("allow",t);var s=e.size/1024<50;return t||this.$message.error("上传图片只能是PNG格式!"),s||this.$message.error("上传文件大小不能超过 50KB !"),t&&s},handleFile:function(e){console.log("fileobj",e),this.fileList.push(e.file)},handleExceed:function(e,t){this.$message.warning("最多上传 ".concat(e.length," 个文件"))},AddAliyunForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var s={key:t.form.AccessKeyId,secret:t.form.AccessKeySecret,region:t.form.Region};Object(a["a"])(s).then((function(e){t.aliDialogVisible=!1,t.$message.success("添加成功"),Object(o["setTimeout"])((function(){t.fetchData()}),1e3)})).catch((function(e){console.log(e)}))}else console.log("error")}))},AddSshForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var s={hostname:t.sshform.ip,username:t.sshform.username,password:t.sshform.password};Object(a["b"])(s).then((function(e){t.sshDialogVisible=!1,t.$message.success("添加成功"),Object(o["setTimeout"])((function(){t.getSshData()}),1e3)})).catch((function(e){console.log(e)}))}else console.log("error")}))},handleDelete:function(e,t){var s=this;this.$confirm("你真的要删除 "+t.key+" 么？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["d"])(t.id).then((function(e){for(var i=0;i<s.aliyunlist.length;i++)s.aliyunlist[i].id===t.id&&s.aliyunlist.splice(i,1);s.$message({type:"success",message:"删除成功!"})})).catch((function(){s.$message({type:"error",message:"删除失败!"})}))})).catch((function(){}))},handleSshDelete:function(e,t){var s=this;this.$confirm("你真的要删除 "+t.hostname+" 么？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["e"])(t.id).then((function(e){for(var i=0;i<s.sshlist.length;i++)s.sshlist[i].id===t.id&&s.sshlist.splice(i,1);s.$message({type:"success",message:"删除成功!"})})).catch((function(){s.$message({type:"error",message:"删除失败!"})}))})).catch((function(){}))},handleClick:function(e,t){"system"===e.name?this.getSysData():this.getSshData()},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},r=l,c=(s("3fdb"),s("2877")),u=Object(c["a"])(r,i,n,!1,null,"a51dea16",null);t["default"]=u.exports}}]);