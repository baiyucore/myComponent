<template>
  <div @mouseover="Over" @mouseleave="Leave" >
    <slot ></slot>
  </div>
</template>

<script setup lang="ts">
import { useTooltipBoolean } from './context';


const { handleMouseOver,handleMouseLeave} = useTooltipBoolean()

const  Over = ()=>{
  handleMouseOver()

}
const  Leave = ()=>{
  handleMouseLeave()
 
}
</script>

