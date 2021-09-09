class MVVM {
  // 每一个class类脏哦能都有一个constructor，其它类可用super继承父类
  constructor(el, data) {
    // 当前的dom根节点
    this.el = document.querySelector(el);
    // data中的数据
    this._data = data;
    // dom节点池
    this.domPool = {};
    // 初始化
    this.init();
  }
  //   1、初始化
  init() {
    this.initData();
    this.initDom();
  }
  //   2、初始化Dom
  initDom() {
    this.bindDom(this.el);
    this.bindInput(this.el);
  }
  //   3、初始化数据data
  initData() {
    const _this = this;
    this.data = {};
    for (let key in this._data) {
      //   Object.defineProperty第一个参数为对象，第二个对象键，第三个设置get和set
      Object.defineProperty(this.data, key, {
        get() {
          console.log("获取数据：", key, _this._data[key]);
          return _this._data[key];
        },
        set(newValue) {
          console.log("设置数据：", key, newValue);
          _this.domPool[key].innerHTML = newValue;
          _this._data[key] = newValue;
        },
      });
    }
  }
  //   4、绑定dom
  bindDom(el) {
    const childNodes = el.childNodes;
    childNodes.forEach((item) => {
      if (item.nodeType === 3) {
        //1代表element元素，2代表attribute属性，3代表文本
        const _value = item.nodeValue;
        if (_value.trim().length) {
          let _reg = /\{\{(.+?)\}\}/.test(_value);
          if (_reg) {
            const _key = _value.match(/\{\{(.+?)\}\}/)[1].trim();
            console.log(_key, item.parentNode);
            this.domPool[_key] = item.parentNode;
            item.parentNode.innerText = this.data[_key] || "";
            // console.log(this.domPool[_key]);
          }
        }
      }
      item.childNodes && this.bindDom(item);
    });
  }
  //   5、绑定input
  bindInput(el) {
    const _allInputs = el.querySelectorAll("input");
    _allInputs.forEach((input) => {
      const _vModel = input.getAttribute("v-model");
      if (_vModel) {
        input.addEventListener(
          "keyup",
          this.handleInput.bind(this, _vModel, input)
        );
      }
    });
  }
  //   6、数据输入
  handleInput(key, input) {
    const _value = input.value;
    this.data[key] = _value;
  }
  //   7、设置数据
  setData(key, value) {
    this.data[key] = value;
  }
}
