<template>
  <div class="selectvalue">
    <div > {{ value }} </div>
   
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSelectContext } from './context';
import type { SelectProps } from './interface';
const {defaultValue} =  defineProps<SelectProps>()
const { selectValue} = useSelectContext()

const value = computed(()=>{
  return selectValue ?? defaultValue;
})
</script>

<style scoped>
.selectvalue{
  color: black;
  background-color: #fff;
  width:  100px;
  height: auto;
  padding: 1rch; 
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: #d1d5db;
  border-style: solid;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: default;
  user-select: none;
}

</style>