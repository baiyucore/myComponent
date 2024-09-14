<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import type { DialogContext } from './interface';
import { DialogInjectionKey } from './context';

const open = ref(false)
const scrollY = ref(0); 
provide<DialogContext>(DialogInjectionKey,{
  open:open,
  changeOpen: ()=>{ open.value =true},
  changeClose :()=>{ open.value = false},
  scrollY:scrollY,
})
</script>