<template>
  <div @click="handleClike">
    <slot></slot>
  </div>
 
</template>

<script setup lang="ts">
import { useTabContxt } from './context';
import type { TabBarItemProps } from './interface';

const {value} = defineProps<TabBarItemProps>()

const {changeTab} = useTabContxt()
const handleClike = ()=>{
  changeTab(value)
}


</script>