(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57829aa9"],{"1c98":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"实例名称"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search",plain:""},on:{click:function(e){return t.fetchData()}}},[t._v("查询")]),t._v("\n      \n    "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(e){return t.handleCreate()}}},[t._v("新建实例")]),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"info"},on:{click:function(e){return t.fetchData()}}},[t._v("刷新列表")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"实例名称","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"运行节点","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.nodeIp))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"修改时间","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.modifiedTime)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-dropdown",{attrs:{trigger:"click"}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("\n            操作"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleUpdate(e.row)}}},[t._v("修改实例")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除实例")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleStart(e.row)}}},[t._v("启动服务")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleStop(e.row)}}},[t._v("停止服务")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleLog(e.row)}}},[t._v("日志详情")])],1)],1)]}}])})],1)],1)},i=[],r=(n("7f7f"),n("f546")),c={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,listQuery:{name:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(r["d"])(this.listQuery).then(function(e){t.list=e.data,t.listLoading=!1})},handleCreate:function(){this.$router.push("/canalServer/canalInstance/add")},handleUpdate:function(t){this.$router.push("/canalServer/canalInstance/modify?id="+t.id)},handleDelete:function(t){var e=this;this.$confirm("删除实例配置会导致Canal实例停止","确定删除实例信息",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r["c"])(t.id).then(function(t){"success"===t.data?(e.fetchData(),e.$message({message:"删除实例信息成功",type:"success"})):e.$message({message:"删除实例点信息失败",type:"error"})})})},handleStart:function(t){var e=this;null===t.nodeId?this.$confirm("启动Canal Instance: "+t.name,"确定启动实例服务",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r["f"])(t.id).then(function(t){t.data?(e.fetchData(),e.$message({message:"启动成功",type:"success"})):e.$message({message:"启动实例服务出现异常",type:"error"})})}):this.$message({message:"当前实例不是停止状态，无法启动",type:"error"})},handleStop:function(t){var e=this;null!==t.nodeId?this.$confirm("停止Canal Instance: "+t.name,"确定停止实例服务",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r["g"])(t.id,t.nodeId).then(function(t){t.data?(e.fetchData(),e.$message({message:"停止成功",type:"success"})):e.$message({message:"停止实例服务出现异常",type:"error"})})}):this.$message({message:"当前实例不是启动状态，无法停止",type:"error"})},handleLog:function(t){null!==t.nodeId?this.$router.push("canalInstance/log?id="+t.id+"&nodeId="+t.nodeId):this.$message({message:"当前实例不是启动状态，无法查看日志",type:"warning"})}}},o=c,s=n("2877"),l=Object(s["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports},f546:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"h",function(){return c}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return u}),n.d(e,"e",function(){return d});var a=n("b775");function i(t){return Object(a["a"])({url:"/canal/instances",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/canal/instance/"+t,method:"get"})}function c(t){return Object(a["a"])({url:"/canal/instance",method:"put",data:t})}function o(t){return Object(a["a"])({url:"/canal/instance",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/canal/instance/"+t,method:"delete"})}function l(t){return Object(a["a"])({url:"/canal/instance/start/"+t,method:"put"})}function u(t,e){return Object(a["a"])({url:"/canal/instance/stop/"+t+"/"+e,method:"put"})}function d(t,e){return Object(a["a"])({url:"/canal/instance/log/"+t+"/"+e,method:"get"})}}}]);