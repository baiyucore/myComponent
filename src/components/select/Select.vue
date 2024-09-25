<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {  provide, ref } from 'vue';
import { SelectInjectionKey } from './context';
import type { SelectContext, SelectProps } from './interface';
const selectValue = ref("defaultvale")
const open = ref(false)
provide<SelectContext>(SelectInjectionKey,{
  selectValue: selectValue,
  open:open,
  changeSelect:(value:string)=>{
    selectValue.value = value
  },
  changeOpen:(selectopen:boolean)=>{
    open.value= selectopen
  }

})

</script>

<style scoped>
.content {
  position: relative; 
  display: inline-block; 
}
</style>