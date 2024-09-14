<template >
  <div  v-show="open " @mouseover="Over" @mouseleave="Leave"  >
    <div  class="tooltip" >
    <slot></slot>
  
    </div>
  </div>

</template>

<script setup lang="ts">
import { useTooltipBoolean } from './context';
  const {open,handleMouseOver,handleMouseLeave} = useTooltipBoolean()

  const  Over = ()=>{
      handleMouseOver()
  }
  const  Leave = ()=>{
    handleMouseLeave()

  }

</script>


<style scoped>
.tooltip {
  position: absolute;
  top: -48px;
  z-index: 50;
  border-radius: 0.375rem; 
  border-width: 1px; 
  border-color: #d1d5db; 
  background-color: #ffffff; 
  padding: 0.75rem 0.75rem; 
  color: #1f2937; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}


</style>