webpackJsonp([1],{95:function(e,a,t){var l=t(8)(t(97),t(99),null,null);e.exports=l.exports},97:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{currentPage:1,searchform:{number:"",grade:null,major:"",class_index:null,name:"",status:null},tableData:[{num:"130708122",name:"王虎",grade:"13级",pro:"网络工程",class:"1班",status:"实习中",address:"杭州XX网络技术有限公司"},{num:"130708124",name:"张菁菁",grade:"13级",pro:"网络工程",class:"1班",status:"未实习",address:"/"},{num:"130708125",name:"黄正",grade:"13级",pro:"网络工程",class:"1班",status:"实习中",address:"上海XX文化传播有限公司"},{num:"130708126",name:"李莉",grade:"13级",pro:"网络工程",class:"1班",status:"实习中",address:"浙江广播电视集团"}],classData:[{value:"13",label:"13级",children:[{value:"shejiyuanze",label:"网络工程",children:[{value:"yiban",label:"1班"},{value:"erban",label:"2班"}]},{value:"daohang",label:"信息系统管理与设计",children:[{value:"all",label:"全部"}]}]},{value:"14",label:"14级"},{value:"15",label:"15级"},{value:"16",label:"16级"}],value5:[]}},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}}},99:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{},[t("div",{staticStyle:{"margin-bottom":"10px",padding:"20px"}},[t("h2",{staticStyle:{"margin-top":"0"}},[e._v("学生信息")]),e._v(" "),t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),t("el-breadcrumb-item",[e._v("学生管理")]),e._v(" "),t("el-breadcrumb-item",[e._v("学生列表")])],1)],1),e._v(" "),t("div",{staticClass:"list"},[t("div",{staticClass:"search"},[t("el-form",{attrs:{model:e.searchform}},[t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"学号"}},[t("el-input",{model:{value:e.searchform.number,callback:function(a){e.searchform.number=a},expression:"searchform.number"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{model:{value:e.searchform.user,callback:function(a){e.searchform.user=a},expression:"searchform.user"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"班级"}},[t("el-cascader",{attrs:{options:e.classData},model:{value:e.searchform.oClass,callback:function(a){e.searchform.oClass=a},expression:"searchform.oClass"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"实习状态"}},[t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.searchform.status,callback:function(a){e.searchform.status=a},expression:"searchform.status"}},[t("el-option",{attrs:{label:"实习中",value:"0"}}),e._v(" "),t("el-option",{attrs:{label:"未实习",value:"1"}})],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("div",{staticStyle:{color:"#fff"}},[e._v("1")])]),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-button",{attrs:{type:"primary"}},[e._v("搜索")])],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"fast-search"},[t("span",[e._v("快捷搜索：")]),e._v(" "),t("el-button",{attrs:{type:"text"}},[e._v("全部")]),e._v(" "),t("el-button",{attrs:{type:"text"}},[e._v("毕业班")]),e._v(" "),t("el-button",{attrs:{type:"text"}},[e._v("非毕业班")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","tooltip-effect":"dark"}},[t("el-table-column",{attrs:{prop:"num",label:"学号",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"grade",label:"年级",width:"80","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"pro",label:"专业",width:"120","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"class",label:"班级",width:"80","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"status",label:"实习状态",width:"100","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",label:"实习公司","show-overflow-tooltip":""}})],1),e._v(" "),t("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next","page-count":20},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage=a}}})],1)])},staticRenderFns:[]}}});