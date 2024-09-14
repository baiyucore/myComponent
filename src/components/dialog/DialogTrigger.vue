<template>
  <div @click="handchangeOpen">
    <slot></slot>
  </div>

</template>

<script setup lang="ts">
import { useDialogContext } from './context';


const {changeOpen,scrollY} = useDialogContext()
 
const disableScroll = () => {
  // Store current scroll position
  scrollY.value = window.scrollY;
  
  // Disable scroll
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY.value}px`;
  document.body.style.left = '0';
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
};

const handchangeOpen=()=>{
  disableScroll()
  changeOpen()
}
</script>