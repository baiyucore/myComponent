import type { Ref } from "vue";

export interface Props<T>{
  onSubmit ?:(data: T) =>void;
  validators?: Record<string,(data: T)=> boolean>;

}

export interface FormItemProps{
  formKey:string,
  
}
export interface FormContext<FormTypeDate>{
  data:Ref<FormTypeDate>
  submit:() => void;
  validate: ()=>boolean;
  changeData: (formkey:string,value:string|number) => void;
}



export interface FormTypeDate{
  [key:string] :string | number
}

export interface FormProps{
  data:FormTypeDate
  validators?: Record<string,(data: FormTypeDate)=> boolean>;
  onSubmit ?:()=>void;
}

export interface FormItemInputProps{
  formkey:string
  formitemvalue:string|number
  changeValue:(value:string|number)=>void
}