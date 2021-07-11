# vue-global-countdown

## 一个Vue的全局倒计时组件
```
npm install vue-global-countdown --save
```

### 使用
```
import countDown from 'vue-global-countdown'
Vue.use(countDown);
```

### API
```
this.$countDown({
    time: 60,
    customClass: 'self-countDown', // 样式定制
    text: 'tip text.', // 倒计时提醒文字
    handle: function () {
        console.log('CountDown Finished...');
    }
});
this.$countDown.restart(); // 重置
this.$countDown.pause(); // 暂停
this.$countDown.continue(); // 继续
this.$countDown.clear(); // 清除
```
