<template>
<div>   
  <h1 class="text" style="color:black"> Видео в рулетке</h1>
 <table border="1">
      <tr>
        <th>Видео</th>
       
        <th>Видалити</th>
      </tr>
      <tr v-for="v in video" :key="v._id" >
        <td><iframe width="250" height="250" :src="v.item"></iframe></td>
        <td><a href="#"  v-on:click="delv(v._id)">Видалити</a> </td>
      </tr>     
    </table>
   <h1 class="text" style="color:black">Cылка на видео</h1>
    <input v-model="vid"> <button v-on:click="addv">Добавить</button>

       <h1 class="text" style="color:black">Загрузить фото в слайдер</h1>
    <form action="http://localhost:9999/upload" method="post" enctype="multipart/form-data">
        <label style="color:black">Файл</label><br>
        <input  style="color:black"  type="file" name="filedata" accept="image/*"/><br><br>
        <input type="submit" value="Send" />
      </form>

      <table border="1">
      <tr>
        <th>Фото</th>
       
        <th>Видалити</th>
      </tr>
      <tr v-for="p in photo" :key="p" >
        <td><img :src="'/resurs/photo/'+ p" class="item"></td>
        <td><a href="#"  v-on:click="delp(p)">Видалити</a> </td>
      </tr>     
    </table>
</div>




</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        data: function () {
            return {
               photo:[],
               video:[],
               vid:"",
               filn:""
            };
        },
        methods:{
          
        },
        mounted: function(){
         this.listP();
          this.listV();

        },
        methods: {

          delv:async function(id){
        await axios.delete('http://localhost:9999/video/' + id)  ;
          this.listV();
          },
          delp: async function(id){
          axios.delete('http://localhost:9999/photo/' + id)  ;
          },
          addv: async function(){
          await axios.post("http://localhost:9999/video",{
            item: this.vid
           });
       this.listV();
          },

                    listV:function(){
    axios.get("http://localhost:9999/video").then((Response)=>{
                      this.video = Response.data;
                  
                      return this.video;
         })
          },
          listP:function(){
                      axios.get("http://localhost:9999/photo").then((Response)=>{
                      this.photo = Response.data;
         })
         console.log(Response.data)
                      return this.photo;

          },
        }

    }
</script>