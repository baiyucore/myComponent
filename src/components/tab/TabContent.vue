<template>
  <div v-if="value === tabValue" class="content">
    <slot></slot>
  </div>
 
</template>

<script setup lang="ts">
import { useTabContxt } from './context';
import type { TabContent } from './interface';


const {value} = defineProps<TabContent>()
const {tabValue} = useTabContxt()

</script>
<style scoped>
.content{
  cursor: default;
}
</style>