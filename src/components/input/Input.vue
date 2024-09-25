<template>
<input :type="inputType" :value="modelValue"  @input="handleInput" />

</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

import type { FormItemInputProps } from '../form/interface';
import { FormItemInjectionKey, useFormContext } from '../form/context';

interface Type{
  inputType:string
  location ?: "form"
  modelValue?:string //可能有点问题
}

const {data,changeData,validate} = useFormContext()
const {inputType} = defineProps<Type>()

  
  const FormItemProps = inject<FormItemInputProps>(FormItemInjectionKey)
  if(FormItemProps === undefined){
    throw new Error()
  }
  const emit = defineEmits();
  const handleInput = (event:any) => {
  FormItemProps.changeValue(event.target.value)
  changeData(FormItemProps.formkey,event.target.value)
  emit('update:modelValue', event.target.value);
  validate()
}


</script>