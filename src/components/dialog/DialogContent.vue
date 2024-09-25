<template>
 <div v-if="open" class="overlay" @click="close">
    <div class="content" @click.stop>
        <Button class="button" @click="close" >X</Button>
        <slot></slot>   
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../button/Button.vue';
import { useDialogContext } from './context';

const {open,changeClose,scrollY} = useDialogContext()

const close = () => {
  enableScroll()
  changeClose();
};

const enableScroll = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.width = '';
  document.body.style.overflow = '';
  window.scrollTo(0, scrollY.value); 
};
</script>

<style scoped>
.button{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  text-align: center;
  height: 10px;
  width: 10px;
  border-radius: 2px;
  /* background-color: #122847; */
  color: black;
  top: 10px;
  right: 10px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
}
.content {
  position: relative;
  height: auto;
  width: 200px;
  border-radius: 0.375rem; 
  border-width: 1px; 
  border-color: #d1d5db; 
  background-color: #ffffff; 
  padding: 0.75rem;
  color: #1f2937; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

</style>