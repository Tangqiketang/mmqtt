(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-199b3a26"],{"0fea":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var s=r("b775");function o(e,t){return Object(s["b"])({url:e,method:"post",data:t})}function n(e,t){return Object(s["b"])({url:e,method:"put",data:t})}function i(e,t){return Object(s["b"])({url:e,method:"get",params:t})}function a(e,t){return Object(s["b"])({url:e,method:"delete",params:t})}},3682:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-operator"}),r("a-list",{attrs:{grid:{gutter:24,lg:3,md:2,sm:1,xs:1},loading:e.loading,"data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t){return r("a-list-item",{},[r("a-card",{attrs:{title:t.moduleName}},[r("div",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.moduleName))]),r("img",{attrs:{slot:"cover",alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"},slot:"cover"}),r("template",{staticClass:"ant-card-actions",slot:"actions"},[r("a",{attrs:{slot:"actions"},on:{click:function(r){return e.handleUpdate(t)}},slot:"actions"},[e._v("编辑")]),r("a-switch",{attrs:{checked:t.enable},on:{change:function(r){return e.handleCheck(r,t)}}},[r("a-icon",{attrs:{slot:"checkedChildren",type:"check"},slot:"checkedChildren"}),r("a-icon",{attrs:{slot:"unCheckedChildren",type:"close"},slot:"unCheckedChildren"})],1)],1),e._v(" "+e._s(t.description)+" ")],2)],1)}}])}),r("AuthModuleModel",{ref:"AuthModuleModel",on:{ok:e.loadData}}),r("ApiModuleModel",{ref:"ApiModuleModel",on:{ok:e.loadData}})],1)},o=[],n=r("0fea"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{confirmLoading:e.confirmLoading,title:"保存新资源",width:720,visible:e.visible,"body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[r("a-form",{attrs:{form:e.form,layout:"vertical","hide-required-mark":""}},[r("a-form-item",{attrs:{label:"资源类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["configs.resourceType",{rules:[{required:!0,message:"请选择资源类型"}]}],expression:"[\n          'configs.resourceType',\n          {\n            rules: [{ required: true, message: '请选择资源类型' }]\n          }\n        ]"}],attrs:{placeholder:"请选择资源类型"},on:{change:e.typeChange}},[r("a-select-option",{attrs:{value:"MYSQL"}},[e._v(" Mysql ")]),r("a-select-option",{attrs:{value:"POSTGRESQL"}},[e._v(" Postgresql ")]),r("a-select-option",{attrs:{value:"SQLSERVER"}},[e._v(" SqlServer ")])],1)],1),r("a-form-item",{attrs:{label:"资源id"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["configs.resourceId",{rules:[{required:!0,message:"请选择资源id"}]}],expression:"[\n          'configs.resourceId',\n          {\n            rules: [{ required: true, message: '请选择资源id' }]\n          }\n        ]"}],attrs:{placeholder:"请选择资源id"}},e._l(e.selectResources,(function(t,s){return r("a-select-option",{key:s,attrs:{value:t.resourceID}},[e._v(" "+e._s(t.resourceID)+" ")])})),1)],1),r("a-form-item",{attrs:{label:"表名"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["configs.table",{rules:[{required:!0,message:"请输入表名"}]}],expression:"['configs.table', { rules: [{ required: true, message: '请输入表名' }] }]"}],attrs:{placeholder:"请输入表名"}})],1),r("a-form-item",{attrs:{label:"账户字段"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["configs.username",{rules:[{required:!0,message:"请输入账户字段"}]}],expression:"['configs.username', { rules: [{ required: true, message: '请输入账户字段' }] }]"}],attrs:{placeholder:"请输入账户字段"}})],1),r("a-form-item",{attrs:{label:"密码字段"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["configs.password",{rules:[{required:!0,message:"请输入密码字段"}]}],expression:"['configs.password', { rules: [{ required: true, message: '请输入密码字段' }] }]"}],attrs:{placeholder:"请输入密码字段"}})],1)],1),r("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[r("a-button",{style:{marginRight:"8px"},on:{click:e.onClose}},[e._v(" Cancel ")]),r("a-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v(" Submit ")])],1)],1)},a=[],c=(r("159b"),r("a4d3"),r("e01a"),r("4de4"),r("d3b7"),{data:function(){return{title:"操作",visible:!1,curRecord:null,confirmLoading:!1,curResources:[],selectResources:[],type:"",form:this.$form.createForm(this),url:{listResources:"/v1/resources/resources",update:"/v1/modules"}}},created:function(){this.listResources()},methods:{listResources:function(){var e=this;Object(n["b"])(this.url.listResources,{}).then((function(t){e.curResources=[],t.data.forEach((function(t){e.curResources.push(t)}))}))},update:function(e){var t=this;this.form.resetFields(),this.visible=!0,this.curRecord=e,e&&(this.key=e.key,this.$nextTick((function(){t.form.setFieldsValue({key:e.key,enable:e.enable,description:e.description,icon:e.icon,modelEnum:e.modelEnum,configs:{resourceType:e.configs.resourceType,resourceId:e.configs.resourceId,table:e.configs.table,username:e.configs.username,password:e.configs.password}})})))},typeChange:function(e){this.selectResources=this.curResources.filter((function(t){return e===t.type})),this.curType=e},onClose:function(){this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,s){if(!r){t.confirmLoading=!0,e.curRecord.configs=s.configs;var o=Object.assign({},e.curRecord),i=Object(n["d"])(e.url.update,o);i.then((function(e){200===e.code?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.onClose()}))}}))},filterOption:function(e,t){return!!t.componentOptions.children[0].text&&t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},handleCancel:function(){this.onClose()}}}),u=c,l=r("2877"),d=Object(l["a"])(u,i,a,!1,null,"582b6de3",null),f=d.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-drawer",{attrs:{confirmLoading:e.confirmLoading,title:"保存新资源",width:720,visible:e.visible,"body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[r("a-form",{attrs:{form:e.form,layout:"vertical","hide-required-mark":""}},[r("a-form-item",{attrs:{label:"appId"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["configs.appId",{rules:[{required:!0,message:"请输入appId"}]}],expression:"['configs.appId', { rules: [{ required: true, message: '请输入appId' }] }]"}],attrs:{placeholder:"请输入appId"}})],1),r("a-form-item",{attrs:{label:"appSecret"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["configs.appSecret",{rules:[{required:!0,message:"请输入appSecret"}]}],expression:"['configs.appSecret', { rules: [{ required: true, message: '请输入appSecret' }] }]"}],attrs:{placeholder:"请输入appSecret"}})],1)],1),r("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[r("a-button",{style:{marginRight:"8px"},on:{click:e.onClose}},[e._v(" Cancel ")]),r("a-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v(" Submit ")])],1)],1)},m=[],h={data:function(){return{title:"操作",visible:!1,curRecord:null,confirmLoading:!1,curResources:[],selectResources:[],type:"",form:this.$form.createForm(this),url:{listResources:"/v1/resources/resources",update:"/v1/modules"}}},created:function(){this.listResources()},methods:{listResources:function(){var e=this;Object(n["b"])(this.url.listResources,{}).then((function(t){e.curResources=[],t.data.forEach((function(t){e.curResources.push(t)}))}))},update:function(e){var t=this;this.form.resetFields(),this.visible=!0,this.curRecord=e,e&&(this.key=e.key,this.$nextTick((function(){t.form.setFieldsValue({key:e.key,enable:e.enable,description:e.description,icon:e.icon,modelEnum:e.modelEnum,configs:{appSecret:e.configs.appSecret,appId:e.configs.appId}})})))},typeChange:function(e){this.selectResources=this.curResources.filter((function(t){return e===t.type})),this.curType=e},onClose:function(){this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,s){if(!r){t.confirmLoading=!0,e.curRecord.configs=s.configs;var o=Object.assign({},e.curRecord),i=Object(n["d"])(e.url.update,o);i.then((function(e){200===e.code?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.onClose()}))}}))},filterOption:function(e,t){return!!t.componentOptions.children[0].text&&t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0},handleCancel:function(){this.onClose()}}},g=h,b=Object(l["a"])(g,p,m,!1,null,"11dbae70",null),v=b.exports,y={name:"Subscribes",components:{AuthModuleModel:f,ApiModuleModel:v},data:function(){return{loading:!0,data:[]}},filters:{},created:function(){this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0,setTimeout((function(){return Object(n["b"])("/v1/modules/modules",{}).then((function(t){e.data=t.data,e.loading=!1}))}),1e3)},handleCheck:function(e,t){var r=this;t.enable=e;var s=Object(n["d"])("/v1/modules",t);s.then((function(e){200===e.code?r.$message.success(e.message):r.$message.warning(e.message)}))},handleUpdate:function(e){switch(e.key){case"AUTH-MODULE":this.$refs.AuthModuleModel.update(e);break;case"API-MODULE":this.$refs.ApiModuleModel.update(e);break}}}},k=y,x=(r("72d1"),Object(l["a"])(k,s,o,!1,null,"0f5c8f56",null));t["default"]=x.exports},"72d1":function(e,t,r){"use strict";r("7b9b")},"7b9b":function(e,t,r){}}]);