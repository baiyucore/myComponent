<template>
  <div v-if="value === tabValue">
    <slot></slot>
  </div>
 
</template>

<script setup lang="ts">
import { useTabContxt } from './context';
import type { TabContent } from './interface';


const {value} = defineProps<TabContent>()
const {tabValue} = useTabContxt()

</script>