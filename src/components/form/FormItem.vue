<template>

  <div >
    {{formitemvalue }}
    {{ data }}
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { FormItemInjectionKey, useFormContext } from './context';
import type { FormItemInputProps, FormItemProps } from './interface';

const {data} = useFormContext()

const {formKey} = defineProps<FormItemProps>()


const formitemvalue = ref()
provide<FormItemInputProps>(FormItemInjectionKey,{
  formkey: formKey,
  formitemvalue: formitemvalue.value,
  changeValue:(value:string|number)=>{
    formitemvalue.value = value
  }
})





</script>