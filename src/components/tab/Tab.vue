<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import type { TabContext, TabProps } from './interface';
import { TabInjectionKey } from './context';


 const {defaultValue} = defineProps<TabProps>()
 const tabValue = ref(defaultValue)

 
 provide<TabContext>(TabInjectionKey,{
  tabValue:tabValue,
  changeTab:(value:string) =>{
    tabValue.value = value
  }
 })

</script>