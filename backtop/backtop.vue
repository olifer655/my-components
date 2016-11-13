<script>
import BackTop from './backtop.svg';

export default {
  props: {
    activeHeight: {
      type: Number,
      default: document.documentElement.clientHeight / 2,
    },
  },
  data() {
    return {
      show: false,
      BackTop,
    };
  },
  ready() {
    this.__listenEvent = 'ontouchmove' in window ? 'touchmove' : 'scroll';
    const getScrollTop = () => {
      return document.body.scrollTop || document.documentElement.scrollTop;
    };
    this.__listenAction = () => {
      if (this.activeHeight < getScrollTop()) {
        if (!this.show) this.show = true;
      } else {
        if (this.show) this.show = false;
      }
    };

    var timer;
    document.addEventListener(this.__listenEvent, () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => this.__listenAction(), 30);
    });
  },
  destroyed() {
    document.removeEventListener(this.__listenEvent, this.__listenAction);
  },
  methods: {
    back() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<template>
  <div class="backtop-container">
    <svg class="backtop" v-if="show" @click.stop="back()">
      <use :xlink:href="BackTop"></use>
    </svg>
  </div>
</template>

<style scoped>
.backtop-container {
  position: fixed;
  bottom: 150px;
  right: 30px;
}

.backtop {
  width: 85px;
  height: 85px;
}
</style>
