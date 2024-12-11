(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{787:function(t,e,n){var content=n(826);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7d7b4556",content,!0,{sourceMap:!1})},825:function(t,e,n){"use strict";n(787)},826:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".table-salary[data-v-07660fc0]{background:#fff;border:1px solid #eff0f6;border:1px solid var(--Stroke-Color,#eff0f6);border-radius:10px!important;box-shadow:0 2px 48px 0 rgba(0,0,0,.06);margin-top:10px;overflow:hidden}.table-salary tr td .blade-id[data-v-07660fc0]{display:inline;display:initial}.table-salary tr td .user-name[data-v-07660fc0]{color:#0056b1;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;line-height:normal;text-decoration-line:underline}.table-salary tr td .box-img[data-v-07660fc0]{border-radius:50%;height:35px;overflow:hidden;width:35px}.table-salary tr td .box-img img[data-v-07660fc0]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.table-salary tr td .salary[data-v-07660fc0]{align-items:center;color:#0056b1;display:flex;font-weight:600;height:100%}.table-salary tr td .salary[data-v-07660fc0],.table-salary tr td .span[data-v-07660fc0]{font-family:SVN-Gilroy;font-size:14px;font-style:normal;line-height:normal}.table-salary tr td .span[data-v-07660fc0]{color:#2d2d2d;font-weight:500}.order-service-title[data-v-07660fc0]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:600;line-height:normal}.month-picker[data-v-07660fc0]{width:94px}.chart-title[data-v-07660fc0]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:700;line-height:normal}.text-c-danger[data-v-07660fc0]{color:#fa4d32}.text-c-primary[data-v-07660fc0]{color:#0056b1}.text-c-warning[data-v-07660fc0]{color:#ffb761}.text-c-success[data-v-07660fc0]{color:#00c092}.text-admin .text-span[data-v-07660fc0]{color:rgba(45,45,45,.8);font-size:12px;font-weight:400}.text-admin .text[data-v-07660fc0],.text-admin .text-span[data-v-07660fc0]{font-family:SVN-Gilroy;font-style:normal;line-height:normal}.text-admin .text[data-v-07660fc0]{font-size:14px;font-weight:600}.text-admin .text-c-primary[data-v-07660fc0]{color:#0056b1!important}.text-admin .text-c-warning[data-v-07660fc0]{color:#ffb761!important}.text-admin .text-c-danger[data-v-07660fc0]{color:#fc4d32!important}.text-admin .text-c-success[data-v-07660fc0]{color:#00c092!important}.c-primary[data-v-07660fc0]{background:#0056b1!important}.c-danger[data-v-07660fc0]{background:#fc4d32!important}.c-warning[data-v-07660fc0]{background:#ffb761!important}.c-success[data-v-07660fc0]{background:#00c092!important}",""]),r.locals={},t.exports=r},938:function(t,e,n){"use strict";n.r(e);var r=n(277),o=n(1151),l=n(1148),d=n(715),c=n(803),f=n(32),v=n(13),m=(n(42),n(5),n(25),n(20),n(65)),h=(n(506),n(30),{name:"SalaryReport",data:function(){return{title:{name:null,previous:"/admin/dashboard"},data:null,date:(new Date).toISOString().substr(0,7),month:1,menu:!1,modal:!1,item:0,items:[]}},computed:{token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{load_role:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.default.get("admin-api/get-nhom-giao-vien",{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n,r;t.items.unshift({value:"",text:"Tất cả trạng thái"}),(n=t.items).push.apply(n,Object(f.a)(null==e||null===(r=e.data)||void 0===r?void 0:r.data.map((function(t){return{value:t.id,text:t.name}})))),t.item=t.items[0].value}));case 2:case"end":return e.stop()}}),e)})))()},load_data:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.default.get("chi-luong/danh-sach?tuKhoa=&dien_thoai=&leader_kd_id=".concat(null==t?void 0:t.item,"&dia_chi=&dich_vu_id=&thang=&page=1&limit=4&sort="),{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;console.log(e),t.data=null==e||null===(n=e.data)||void 0===n?void 0:n.data}));case 2:case"end":return e.stop()}}),e)})))()},updateFilter:function(filter){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,filter;case 2:if(e.t1=n=e.sent,e.t0=null!==e.t1,!e.t0){e.next=6;break}e.t0=void 0!==n;case 6:if(!e.t0){e.next=10;break}e.t2=n,e.next=11;break;case 10:e.t2="";case 11:return t.selectedFilter=e.t2,e.next=14,t.load_data();case 14:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$store.dispatch("title/set_title",this.title),this.month=this.date.split("-")[1],this.load_data(),this.load_role()},watch:{date:function(){console.log(this.date);var t=this.date.split("-");this.month=t[1],this.load_data()},item:function(){console.log(this.item),this.load_data()}}}),x=(n(825),n(36)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"mb-2 hover-card",staticStyle:{"min-width":"245px"}},[e("div",{staticClass:"d-flex justify-content-between align-center"},[e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("label",{staticClass:"chart-title"},[t._v("Báo cáo lương nhân sự")]),t._v(" "),e("div",[e(l.a,{ref:"dialog",attrs:{"return-value":t.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(c.a,t._g(t._b({staticClass:"month-picker",attrs:{label:"","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[t._v(" "),e(o.a,{attrs:{type:"month",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[e(d.a),t._v(" "),e(r.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("\n                                Cancel\n                            ")]),t._v(" "),e(r.a,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("\n                                OK\n                            ")])],1)],1)],1)]),t._v(" "),e("div",[e("b-form-select",{attrs:{options:t.items},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}})],1),t._v(" "),e("div",{staticClass:"w-100"},[e("table",{staticClass:"table table-hover table-salary"},[e("thead",[e("tr",[e("td",[e("div",{staticClass:"span"},[t._v("Tên GV")])]),t._v(" "),e("td",[e("div",{staticClass:"span"},[t._v("Tổng lương")])])])]),t._v(" "),e("tbody",t._l(t.data,(function(n,r){var o;return e("tr",{key:r},[e("td",[e("nuxt-link",{staticClass:"d-block",attrs:{to:"/admin/dashboard/salary/"+(null==n?void 0:n.id)}},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"box-img me-2"},[e("img",{attrs:{src:null==n?void 0:n.anh_nguoi_dung}})]),t._v(" "),e("div",[e("div",{staticClass:"blade blade-id"},[t._v("# "+t._s(null==n?void 0:n.id))]),t._v(" "),e("div",{staticClass:"user-name"},[t._v("\n                                                "+t._s(null!==(o=null==n?void 0:n.hoten)&&void 0!==o?o:"Chưa cập nhật tên")+"\n                                            ")])])])])],1),t._v(" "),e("td",[e("nuxt-link",{staticClass:"d-block",attrs:{to:"/admin/dashboard/salary/"+(null==n?void 0:n.id)}},[e("div",{staticClass:"salary"},[t._v("\n                                        "+t._s(t.formatCurrency(null==n?void 0:n.tong_tien))+"\n                                    ")])])],1)])})),0)])]),t._v(" "),e("div",{staticClass:"w-100 mt-3"})])])])}),[],!1,null,"07660fc0",null);e.default=component.exports}}]);