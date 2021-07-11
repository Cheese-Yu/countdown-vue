import CountDownComponent from './index.vue';

const plugin = {
    install(Vue) {
        const CountDownConstructor = Vue.extend(CountDownComponent);

        let instance;
        
        CountDownConstructor.prototype.clear = function () {
            if (instance) instance = null;
            this.visible = false;
            this.pause();
            this.$destroy(true);
            this.$el && this.$el.parentNode.removeChild(this.$el);
        };
        
        const CountDown = function (options = {}) {
            if (instance) {
                instance.customClass = '';
                for (const key in options) {
                    instance[key] = options[key];
                }
                Vue.nextTick(() => {
                    instance.restart();
                });
                return instance;
            }
        
            const parent = document.body;
            instance = new CountDownConstructor({
                el: document.createElement('div'),
                data: options
            });
        
            instance.$mount();
            parent.appendChild(instance.$el);
            Vue.nextTick(() => {
                instance.start();
            });
        
            return instance;
        };
        
        CountDown.restart = () => {
            if (!instance) return;
            instance.restart();
        };
        CountDown.continue = () => {
            if (!instance) return;
            instance.continue();
        };
        CountDown.pause = () => {
            if (!instance) return;
            instance.pause();
        };
        CountDown.clear = () => {
            if (!instance) return;
            instance.clear();
        };
        
        Vue.prototype.$countDown = CountDown;
    }
};

export default plugin;
