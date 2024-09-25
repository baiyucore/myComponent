<template>

    <div>
      <slot></slot>
    </div>
</template>

<script setup lang="ts">


import { provide, ref } from 'vue';
import type { FormContext,  FormProps, FormTypeDate } from './interface';
import { FormInjectionKey } from './context';
const Formdata = defineProps<FormProps>()
const data= ref(Formdata.data)

  const Form : FormContext<FormTypeDate>={
    data: data, 
    submit:()=>{
      if(Formdata.onSubmit){
        Formdata.onSubmit()
      }
      
    },
    validate: () => {
      if(Formdata.validators){
        for (const key of Object.keys(Formdata.validators)) {
          if (!Formdata.validators[key](Formdata.data))  { 
          
            return false;}
        }
      
        return true  
      }
 
      return true;
      },
    changeData:(key,value)=>{  
    
      data.value[key] = value
     
    }
  }


  provide(FormInjectionKey,Form)
</script>