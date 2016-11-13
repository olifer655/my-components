<script>
export default {
  props: {
    title: {
      type: String,
      default: '没有结果',
    },
    content: {
      type: String,
      default: '',
    },
    button: {
      type: Object,
      default: () => ({}),
    },
    show: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: 'error-load',
    },
  },
  methods: {
    toSrc: name => {
      if (!name) return '';
      return `//github.elemecdn.com/eleme/fe-static/master/media/empty/${name}.png`;
    },
  },
};
</script>

<template>
<div>
  <section class="nodatatip" v-if="show">
    <div>
      <img :src="toSrc(img)">
    </div>

    <h3>{{title}}</h3>

    <p v-if="content" class="nodatatip-tiptext">{{content}}</p>

    <a v-if="button && button.text"
       href="javascript:"
       @click="button.action()"
       class="button">{{button.text}}
    </a>
  </section>
</div>
</template>

<style src="./nodatatip.css" scoped></style>
