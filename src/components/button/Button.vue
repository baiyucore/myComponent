<template>
  <div  class="Button" @click="handleClick"  role="button" tabindex="0" @keydown.enter="handleClick">
    <slot >button</slot>
  </div>
  
</template>


<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);

const handleClick = (event: any) => {
  emit('click', event);  // Emit a 'click' event
};

</script>

<style scoped>
.Button{
  height: 50px;
  width: 95px;
  border-width: 5px;
  cursor: pointer;
  color: rgb(255 255 255);
  border-radius: 10px;
  background-color: rgb(0, 0, 0);
  font-size:15px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.Button:hover{
  background-color: rgb(71, 71, 71);
}
</style>