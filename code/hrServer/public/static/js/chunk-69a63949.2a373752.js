(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a63949"],{"13e5":function(t,e,r){"use strict";r("d8bc")},1401:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return n})),r.d(e,"i",(function(){return o})),r.d(e,"e",(function(){return i})),r.d(e,"h",(function(){return s})),r.d(e,"a",(function(){return p})),r.d(e,"j",(function(){return c})),r.d(e,"d",(function(){return u})),r.d(e,"f",(function(){return d})),r.d(e,"g",(function(){return b}));r("b4fb");var a=r("b775");function l(t){return Object(a["a"])({url:"/social_securitys/historys/".concat(t.month),params:t})}function n(t){return Object(a["a"])({url:"/social_securitys/historys/".concat(t.year,"/list"),data:t})}function o(t){return Object(a["a"])({url:"/social_securitys/historys/".concat(t.yearMonth,"/newReport"),method:"put",data:t})}function i(t){return Object(a["a"])({url:"/social_securitys/historys/archiveDetail/".concat(t.userId,"/").concat(t.yearMonth),data:t})}function s(t){return Object(a["a"])({url:"/social_securitys/list",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/social_securitys/historys/".concat(t.yearMonth,"/archive"),method:"post",data:t})}function c(t){return Object(a["a"])({url:"/social_securitys/".concat(t.userId),method:"put",data:t})}function u(t){return Object(a["a"])({url:"/social_securitys/".concat(t)})}function d(t){return Object(a["a"])({url:"/social_securitys/payment_item/".concat(t)})}function b(){return Object(a["a"])({url:"/social_securitys/settings"})}},9492:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"monthStatementBox"},[t._m(0),r("div",{staticClass:"monthStatementTable"},[r("div",{staticClass:"itemDropDown"},[r("div",{staticClass:"topLab"},[t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),r("div",{staticClass:"rightLabBox"},[r("el-button",{attrs:{type:"primary",size:"small"}},[t._v("导出")])],1)]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%","text-align":"center"},attrs:{data:t.contentData,border:"","empty-text":"暂无数据",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{type:"index",label:"序号",center:"",width:"50"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名",width:"150px"}}),r("el-table-column",{attrs:{prop:"timeOfEntry",label:"入职时间",formatter:t.transformDateFormat,width:"150px"}}),r("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"150px"}}),r("el-table-column",{attrs:{prop:"idNumber",label:"身份证号码",width:"150px"}}),r("el-table-column",{attrs:{prop:"theHighestDegreeOfEducation",label:"学历",width:"150px"}}),r("el-table-column",{attrs:{prop:"bankCardNumber",label:"开户行",width:"150px"}}),r("el-table-column",{attrs:{prop:"firstLevelDepartment",label:"一级部门",width:"150px"}}),r("el-table-column",{attrs:{prop:"twoLevelDepartment",label:"二级部门",width:"150px"}}),r("el-table-column",{attrs:{prop:"workingCity",label:"工作城市",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityComputerNumber",label:"社保电脑号",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundAccount",label:"公积金账号",width:"150px"}}),r("el-table-column",{attrs:{prop:"leaveDate",label:"离职时间",width:"150px"}}),r("el-table-column",{attrs:{prop:"householdRegistrationType",label:"户籍类型",width:"150px"}}),r("el-table-column",{attrs:{prop:"participatingInTheCity",label:"参保城市",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityMonth",label:"社保月份",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityBase",label:"社保基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurity",label:"社保合计",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityEnterprise",label:"社保企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityIndividual",label:"社保个人",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundCity",label:"公积金城市",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundMonth",label:"公积金月份",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundBase",label:"公积金基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"accumulationFundEnterpriseBase",label:"公积金企业基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"proportionOfProvidentFundEnterprises",label:"公积金企业比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"individualBaseOfProvidentFund",label:"公积金个人基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"personalRatioOfProvidentFund",label:"公积金个人比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"totalProvidentFund",label:"公积金合计",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundEnterprises",label:"公积金企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundIndividual",label:"公积金个人",width:"150px"}}),r("el-table-column",{attrs:{prop:"pensionEnterpriseBase",label:"养老企业基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"proportionOfPensionEnterprises",label:"养老企业比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"pensionEnterprise",label:"养老企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"personalPensionBase",label:"养老个人基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"personalPensionRatio",label:"养老个人比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"oldAgeIndividual",label:"养老个人",width:"150px"}}),r("el-table-column",{attrs:{prop:"unemploymentEnterpriseBase",label:"失业企业基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"proportionOfUnemployedEnterprises",label:"失业企业比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"unemployedEnterprise",label:"失业企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"theNumberOfUnemployedIndividuals",label:"失业个人基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"percentageOfUnemployedIndividuals",label:"失业个人比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"unemployedIndividual",label:"失业个人",width:"150px"}}),r("el-table-column",{attrs:{prop:"medicalEnterpriseBase",label:"医疗企业基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"proportionOfMedicalEnterprises",label:"医疗企业比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"medicalEnterprise",label:"医疗企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"medicalPersonalBase",label:"医疗个人基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"medicalPersonalRatio",label:"医疗个人比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"medicalIndividual",label:"医疗个人",width:"150px"}}),r("el-table-column",{attrs:{prop:"baseOfIndustrialInjuryEnterprises",label:"工伤企业基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"proportionOfIndustrialInjuryEnterprises",label:"工伤企业比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"industrialInjuryEnterprise",label:"工伤企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"fertilityEnterpriseBase",label:"生育企业基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"proportionOfFertilityEnterprises",label:"生育企业比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"childbearingEnterprise",label:"生育企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"baseOfSeriousIllness",label:"大病企业基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"proportionOfSeriouslyIllEnterprises",label:"大病企业比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"bigDiseaseEnterprise",label:"大病企业",width:"150px"}}),r("el-table-column",{attrs:{prop:"personalBaseOfSeriousIllness",label:"大病个人基数",width:"150px"}}),r("el-table-column",{attrs:{prop:"personalProportionOfSeriousIllness",label:"大病个人比例",width:"150px"}}),r("el-table-column",{attrs:{prop:"aPersonOfGreatDisease",label:"大病个人",width:"150px"}}),r("el-table-column",{attrs:{prop:"providentFundNotes",label:"公积金备注",width:"150px"}}),r("el-table-column",{attrs:{prop:"socialSecurityNotes",label:"社保备注",width:"150px"}})],1)],1)]),r("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-col",{attrs:{span:12}},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.archivingReportForm}},[t._v("归档"+t._s(t.yearVal?t.yearVal.substr(4):"")+"报表")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.createReportForm}},[t._v("新建报表")]),r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.$router.back()}}},[t._v("取消")])],1)],1)],1)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"monthStatementTop"},[r("div",{staticClass:"title"},[r("span",[t._v("社保报表")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticStyle:{"background-color":"#cfeffe"}}),t._v("已离职")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticStyle:{"background-color":"#a8f8bb"}}),t._v("再入职")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticStyle:{"background-color":"#fedbd7"}}),t._v("公司合计")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticStyle:{"background-color":"#ffe8c9"}}),t._v("一级部门")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticStyle:{"background-color":"#fdfcd5"}}),t._v("二级部门")])}],n=(r("77ad"),r("6a61"),r("2e91")),o=r("1401"),i={name:"HistoricalArchiving",data:function(){return{num:0,yearVal:this.$route.query.yearMonth,contentData:[],loading:!1}},created:function(){this.getArchivingCont()},methods:{getArchivingCont:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(o["b"])({month:t.yearVal,opType:1});case 3:t.contentData=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},archivingReportForm:function(){var t=this;this.$confirm("您确定要归档".concat(this.yearVal,"报表？报表归档将覆盖上一次归档记录，无法恢复。")).then(Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])({yearMonth:t.yearVal});case 2:t.$message({type:"success",message:"确定!"});case 3:case"end":return e.stop()}}),e)}))))},createReportForm:function(){var t=this,e=this.getNextMonth(),r=e.substring(0,4),a=e.substring(4);this.$confirm("您将创建 《 "+r+"年"+a+"月 》 报表").then((function(){t.yearMonth=e,t.createNewReport(e),t.getArchivingCont()}))},createNewReport:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(o["i"])({yearMonth:t});case 2:e.$message.success("操作成功");case 3:case"end":return r.stop()}}),r)})))()},getNextMonth:function(){var t=this.yearVal.substring(0,4),e=this.yearVal.slice(4),r=t,a=parseInt(e)+1;13===a&&(r=parseInt(r)+1,a=1),a<10&&(a="0"+a);var l=r+a;return l}}},s=i,p=(r("13e5"),r("5d22")),c=Object(p["a"])(s,a,l,!1,null,"c1e6e4c4",null);e["default"]=c.exports},d8bc:function(t,e,r){}}]);