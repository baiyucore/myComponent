<template>
 
    
    <div class="content">
      <slot ></slot>
    </div>
    


 
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import type { TooltipBoolean } from './interface';
import { TooltipInjectionKey } from './context';

const open = ref(false)

provide<TooltipBoolean>(TooltipInjectionKey,{
  open : open,
  handleMouseOver: ()=>{ open.value = true },
  handleMouseLeave: ()=>{ open.value = false},
})
</script>

<style scoped>
.content {
  position: relative; 
  display: inline-block; 
}
</style>