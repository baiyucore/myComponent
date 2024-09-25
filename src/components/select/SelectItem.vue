<template>
<div @click="changeselect" class="item" >
  <slot></slot>
</div>

</template>

<script setup lang="ts">
import { useSelectContext } from './context';
import type { SelectItemProps } from './interface';

const {changeSelect , changeOpen} = useSelectContext()
const {value} = defineProps<SelectItemProps>()
const changeselect=()=>{
  changeSelect(value)
  changeOpen(false)

}


</script>
<style scoped>
.item{
  padding: 3.5px;
  border-radius: 0.375rem;
  user-select: none;
}
.item:hover{
  background-color: rgba(190, 190, 190, 0.575);
}

</style>