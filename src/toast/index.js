import Toast from "@/toast/Toast.vue";
const obj = {};
obj.install = function(Vue) {
  const ToastConstructor = Vue.extend(Toast);
  const toast = new ToastConstructor().$mount(document.createElement("div"));
  console.log(toast);
  document.body.append(toast.$el);
  Vue.prototype.$toast = toast;
};

export default obj;
