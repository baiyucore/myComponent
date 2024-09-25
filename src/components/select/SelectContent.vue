<template>
  <div v-show="open" class="overlay" @click="changeopen">  
  </div>
  <div v-show="open" class="content">
      <slot></slot>
  </div>

</template>

<script setup lang="ts">
import { useSelectContext } from './context';

  const {open,changeOpen} = useSelectContext()
  const changeopen= ()=>{
    changeOpen(false)
  }

</script>

<style scoped>
.overlay {
  position: fixed; /* 改为绝对定位 */
  top: 0; /* 让它在父元素的下方 */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;

}
.content{
  position: absolute;
  width: 100px;
  height: auto;
  top: 102%; 
  left: 0;
  padding: 1rch;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  z-index: 50;

  color: black;
  background-color: #fff;
  cursor: pointer;
  border-radius: 0.375rem;
}


</style>