<template>
  <div @click="changeopen">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useSelectContext } from './context';


const {changeOpen} = useSelectContext()

const changeopen = ()=>{

    changeOpen(true)

}

</script>