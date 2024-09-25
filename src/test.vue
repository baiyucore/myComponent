<script setup lang="ts">
import {Button} from './components/button'
import { reactive, ref } from 'vue'
import {icon} from './components/icon';
import { Tab,TabBar,TabBarItem,TabContent } from './components/tab';
import { Tooltip,TooltipTrigger, TooltipContent } from './components/tooltip';
import { Dialog,DialogContent,DialogHeader,DialogTrigger,DialogFooter } from './components/dialog/index';
import Card from './components/card/Card.vue';
import CardTitle from './components/card/CardTitle.vue';
import CardContent from './components/card/CardContent.vue';
import CardFooter from './components/card/CardFooter.vue';
import { Select ,SelectContent,SelectTrigger,SelectItem, } from './components/select';
import SelectValue from './components/select/SelectValue.vue';
import { Form,FormLable,FormItem,FormButton } from './components/form';
import {Input} from './components/input';


let test = ref()
function onSubmit(){
  console.log(email.value,password.value)
}
const theme = ref(false)
const changetheme = ()=>{
  if(theme.value){
    document.documentElement.setAttribute('data-theme', 'light');
    theme.value = false
  }else{
    document.documentElement.setAttribute('data-theme', 'dark');
    theme.value = true
  }

}
const formInline= ref({
  email:'',
  password:'',
  usename:'',
})

const test12 ={
  same: (data:any) => {
        if (data.email === '123' && data.password === '123') {
          return true;
        }
        if (data.email === '12' && data.password === '12') {
          return true;
        }
        if (data.email === '33' && data.password === '33') {
          return true;
        }
        return false;
      },
}

const email = ref()
const password = ref()
</script>

<template>
  
  <Form :data="formInline" :validators="test12" :onSubmit="onSubmit">
    <FormItem formKey="email">
      <FormLable>
        Email
      </FormLable>
      <Input inputType="text" location="form" v-model="email"/>
    </FormItem>
    <FormItem formKey ="password">
      <FormLable>
        Password
      </FormLable>
      <Input inputType="password" v-model="password" />
    </FormItem>

      <FormButton ></FormButton>
  </Form>


  <Button  @click="changetheme">
    更换主题色
  </Button>

  <form @submit.prevent="onSubmit">
    <input v-model="test"></input>
    <button type="submit">按钮</button>
    <Button class="Button1" variant="primary">按钮</Button>
  </form>



  <Tab defaultValue="Shacn">
      <!-- 这个是页头 -->
      <TabBar>
        <TabBarItem value="Arco" >字节</TabBarItem>
        <TabBarItem value="Shacn">开源</TabBarItem>
        <TabBarItem value="Matemial">谷歌</TabBarItem>
      </TabBar>
      <!-- 这个是内容 -->
      <TabContent  value="Arco">
        <div>Arco</div>
      </TabContent>
      <TabContent  value="Shacn">
        <div>Shacn</div>
      </TabContent>
      <TabContent value="Matemial">
        <div>Matemial</div>
      </TabContent>
    </Tab>

      <icon class="Icon">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </icon>
      <Tooltip>
        <TooltipTrigger>tooltip</TooltipTrigger>
        <TooltipContent >11111111111111111</TooltipContent>
      </Tooltip>
      
      <Dialog>
        <!-- 触发器 -->
        <DialogTrigger><Button>dialog</Button></DialogTrigger>
        <!-- 内容 -->
        <DialogContent>
          <DialogHeader>header</DialogHeader>
          content
          <DialogFooter>footer</DialogFooter>
        </DialogContent>
      </Dialog>

    
      <Select>
        <SelectTrigger>
          <SelectValue defaultValue="hao"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">
            1
          </SelectItem>
          <SelectItem value="2">
            2
          </SelectItem>
        </SelectContent>

      </Select>
      <!-- 这里的阴影对于白色背景有的淡了，需要更改一下 -->
      <Card>
        
        <CardTitle>
          Title
        </CardTitle>
        <CardContent>
          Content
        </CardContent>
        <CardFooter>
          footer

        </CardFooter>
      </Card>
      
     
      
</template>


<style scoped>
.Button1{
  font-size:20px;
}
.Icon{
  width: 50px;
  height: 50px;
}
</style>