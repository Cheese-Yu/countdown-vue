<template>
    <div v-show="visible" :class="['count-down', customClass]">
        <span class="time">{{currentTime | addZero(2)}}<i>s</i></span>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'CountDown',
    data () {
        return {
            time: 60,
            handle: null,
            visible: false,
            timer: null,
            currentTime: 0,
            customClass: ''
        };
    },
    filters: {
        addZero: (value, len) => {
            if (!value) return Array(len).fill(0).join('');
            return (Array(len).fill(0).join('') + value).substr(-len);
        }
    },
    methods: {
        start () {
            this.currentTime = this.time;
            this.visible = true;
            this.countDown();
        },
        restart () {
            this.pause();
            this.start();
        },
        continue () {
            this.countDown();
        },
        pause () {
            if (this.timer) clearTimeout(this.timer);
        },
        countDown () {
            if (this.currentTime <= 0) {
                this.visible = false;
                if (typeof this.handle === 'function') {
                    this.handle();
                }
                this.clear();
                return;
            }
            this.timer = setTimeout(() => {
                this.currentTime--;
                this.countDown();
            }, 1000);
        }
    }
};
</script>
<style scoped>
.count-down {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    color: #000;
    font-size: 24px;

}
.count-down i {
    font-size: 18px;
    font-style: normal;
}
</style>
