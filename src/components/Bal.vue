<template>
  <div>
    <div id="head">
      <ul>
        <li><a href="#O">О нас</a></li>
        <li><a href="#Phot">Фото</a></li>
        <li><a href="#Video">Видео</a></li>
        <li><a href="#Vid">Виды бальных танцов</a></li>
        <li><a href="#tran">Тренера</a></li>
        <li><a href="#Zap">Записатса</a></li>
        <li style="float: right" class="name">
          Танцевально-спортивный клуб "Окар"
        </li>
      </ul>
    </div>
    <br />
    <div class="cont" style="margin-top:75px">
      <div>
       
        <div class="accentText" id="O">О нас</div>
        <span class="text"
          >Танцевально-спортивный клуб "Окар" работает в Киеве с 1999 года.
          Руководители клуба бальных танцев имеют педагогическое и
          хореографическое образование, в прошлом - танцоры-профессионалы,
          бронзовые призеры чемпионата Украины в европейской программе,
          серебряные призеры чемпионата Украины по европейскому шоу, в настоящее
          время тренеры и судьи, имеющие профессиональные лицензии мировой
          профессиональной организации - WDDSC.</span
        >
      </div>
      <div>
        <div class="accentText" id="Phot">Фото</div>
        <div class="accentText"></div>
        <div class="owl-carousel slide-one">
          <div class="item" v-for="p in photo" :key="p" >
             <img   :src="'/resurs/photo/'+ p" >
          </div>
        </div>
        <div class="sliderControl">
          <div class="owl-nav">
            <button class="prev" style="margin-left: 49%"></button>
            <button class="nxts"></button>
          </div>
        </div>

        <br />
      </div>
      <div>
        <div class="accentText" id="Video">Видео</div>
        <br />
        <div class="owl-carousel slide-two owl-theme">
          <div v-for="v in video" :key="v._id">
            <iframe
              width="100% "
              height="720"
              :src="v.item"
            >
            </iframe>
        
          </div>
        </div>
      </div>
      <div>
        <div class="accentText" id="Vid">Виды бальных танцов</div>
        <div class="text2" > 
          Вальс – уникальный танец, который доступен каждому. Его исполняют как
          на всемирно известных Венских балах, так и в обычных сельских клубах
          или на выпускных вечерах. Вальс – воплощение романтики и чувств в
          танце. Сложно назвать имя популярного композитора, который бы не
          написал свою замечательную мелодию для вальса, под которую сегодня
          танцуют как взрослые, так и дети.
        </div>
        <h2>«Европейская» программа</h2>
        <table>
          <tr>
            <td>
              <img
                src="/resurs/table/tango.jpg"
                style="width: 125px; height: 125px"
  
              />
            </td>
            <td class="text2">Танго (Tango)</td>
            <td style="width: 100%">
              <span class="text2"
                >Танго – воплощение разнообразности. Сегодня существует
                классическое бальное, страстное аргентинское и даже немного
                экзотическое финское направление.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="/resurs/table/waltz.jpeg"
                style="width: 125px; height: 125px"
              />
            </td>
            <td>Венский вальс (Viennese Waltz)</td>
            <td style="width: 100%">
              <span class="text2"
                >Очень изящный, легкий и одновременно стремительный
                романтический танец, который чаще всего исполняется на свадьбах,
                выпусках и других торжествах. Венский вальс остается неизменно
                популярным среди людей различного возраста.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="/resurs/table/quik.jpg"
                style="width: 125px; height: 125px"
              />
            </td>
            <td>Быстрый фокстрот (Quickstep)</td>
            <td style="width: 100%">
              <span class="text2"
                >Само слово (Quickstep) в буквальном переводе означает «быстрый
                шаг». Быстрый фокстрот – стремительный и легкий танец. Иногда
                даже кажется, что танцоры и вовсе не касаются ногами танцпола, а
                прямо-таки парят над ним в невесомости.</span
              >
            </td>
          </tr>
        </table>
        <h2>«Латиноамериканская» программа</h2>
        <table>
          <tr>
            <td>
              <img
                src="/resurs/table/Самба.jpg"
                style="width: 125px; height: 125px"
              />
            </td>
            <td>Самба (Samba)</td>
            <td style="width: 100%">
              <span class="text2"
                >Самба – уникальный бальный танец, пришедший к нам из Бразилии.
                Своей популяризации среди населения Бразилии он обязан небольшой
                танцевальной школе из десятка человек, которые первые начали
                исполнять его на традиционных танцевальных карнавалах.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="/resurs/table/ча-ча-ча.jpg"
                style="width: 125px; height: 125px"
              />
            </td>
            <td>Ча-ча-ча (Cha-cha-cha)</td>
            <td style="width: 100%">
              <span class="text2"
                >Воистину зажигательный и колоритный кубинский танец с
                неповторимым характером. Довольно забавное название танцу дали
                сами танцоры, поскольку звук, издаваемый при касании пола во
                время танца, был похож на «ча-ча-ча».</span
              >
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="/resurs/table/румба.jpg"
                style="width: 125px; height: 125px"
              />
            </td>
            <td>Румба (Rumba)</td>
            <td style="width: 100%">
              <span class="text2"
                >Румба – один из самых эмоциональных бальных танцев. Невероятная
                феерия чувств и эмоциональных оттенков, которая не оставляет
                равнодушным ни зрителей, ни самих танцоров. Страсть и пламя
                бальных танцев.</span
              >
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="/resurs/table/Пасодобль.jpg"
                style="width: 125px; height: 125px"
              />
            </td>
            <td>Пасодобль (Posodoble)</td>
            <td style="width: 100%">
              <span class="text2"
                >Воплощение борьбы в танце. Пасодобль рассказывает зрителям о
                борьбе. Она везде: в жизни, в любви, в работе, в дружбе и в
                танце… Испанские корни Пасадобля придают ему еще большей
                агрессивности, эмоций и чувств.</span
              >
            </td>
          </tr>

          <tr>
            <td>
              <img
                src="/resurs/table/Джайв.jpg"
                style="width: 125px; height: 125px"
              />
            </td>
            <td>Джайв (Jive)</td>
            <td style="width: 100%">
              <span class="text2"
                >Одна из самых популярных разновидностей свинга, но со
                свободными движениями, некоторой волей для фантазии. Основным
                отличием Джайва можно считать наличие особенно опасных
                хореографических бросков.
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div>
        <div id="tran" class="accentText">Тренера</div>
        <br />

        <div class="owl-carousel slide-thre">
          <div class="card" v-for="t in tran" :key="t._id">
            <img
              :src="'/resurs/tran/'+t.src"
              style="
                height: 250px;
                width: 275px;
                padding-top: 10%;
                padding-left: 11%;
              "
            />
            <div style="padding-left: 10%">
              <h2 style="text-align: justify">{{t.name}}</h2>
              <h3 style="text-align: justify">Занятия:{{t.type}}</h3>
              <h4 style="text-align: justify; max-width: 280px">
                 {{t.desc}}
              </h4>
            </div>
          </div>
   
        </div>
      </div>
      <div>
        <div id="Zap" class="accentText">Запись</div>
<br> <br><br><br>
        <div class="center">

            <table style="margin-bottom: 50px">
              <tr>
                <td style="text-align: left">
                  <p>Имя</p>
                  <p>Вид занятий</p>
                  <p>Тренер</p>
                  <p>Время</p>
                  <p>Телефон</p>
                  <p>Сообщение</p>
                  <br />
                </td>
                <td>
                  <input
                    placeholder="Ваше имя"
                    type="text"
                    class="cleanInput"
                    v-model="pol.Имя"
                  />
                  <select v-model="pol.Видзанятий" class="cleanInput" style="width: 206px;">
                    <option>Груповые</option>
                    <option>Индивидуальные</option>
                  </select>
                  <select v-model="pol.Тренер" class="cleanInput" style="width: 206px;">
                    <option  v-for="t in tran" :key="t.name" v-if="pol.Видзанятий == t.type">{{t.name}}</option>
                  </select>
                   <select  v-if="pol.Видзанятий==''" class="cleanInput" style="width: 206px;">
                  
                  </select>
                  <select v-model="pol.Время" v-if="pol.Видзанятий=='Груповые'" class="cleanInput" style="width: 206px;">
                    <option>10:30-11:30</option>
                    <option>14:30-15:30</option>
                    <option>16:00-17:00</option>
                  </select>
                      <input
                    placeholder="Укажите удобное для вас время"
                    type="text"
                    class="cleanInput"
                    v-if="pol.Видзанятий=='Индивидуальные'"
                    v-model="pol.Время"
                  />
                  <input  type="number"       v-model="pol.Телефон" placeholder="0972148135" class="cleanInput" />
                  <textarea
                    name="comment"
                    id="comment"
                    tabindex="4"
                    class="cleanInput"
                    v-model="pol.Сообщение"
                  ></textarea>
                  <button style="margin-left: 10px; width:207px; "       class="cleanInput" @click="pos">Отправить </button>
               
                </td>
              </tr>
            </table>
        </div>
      </div>
    </div>
   <footer>
      <div   class="name">
       Дячук Володимир  
      </div>
</footer>



  </div>
</template>


<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        data: function () {
            return {
               photo:[],
               tran:[],
               video:[],
               pol:{"Имя":"","Видзанятий":"","Тренер":"","Время":"","Телефон":"","Сообщение":""},
               msg: "",
            };
        },
        methods:{
                  pos:function(){
             axios.post("http://localhost:9999/pos",{
             pos: this.pol
             

      })
        
       this.string();
       axios.post('https://api.telegram.org/bot1483998605:AAFTTJyzlhyDrenwLEyQ9HmULZEyIJOru2o/sendMessage?chat_id=-466875537&text='+this.msg);
      this.pol = {"Имя":"","Видзанятий":"","Тренер":"","Время":"","Телефон":"","Сообщение":""}
         },
         string:function(){
           this.msg = "Имя:" + this.pol.Имя +
           "%0AВид занятий:"+ this.pol.Видзанятий+
           "%0AТренер:"+ this.pol.Тренер +
           "%0AВремя:"+ this.pol.Время +
           "%0AТелефон:" + this.pol.Телефон + 
           "%0AСообщение:" + this.pol.Сообщение
         },

        corl:function(){
            $(".slide-one").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed:2000, 
    loop: true,
    margin: 10,
    nav: false,
    mouseDrag: false,
    responsive: {
            0:{
                items:4
            }
        }
    });

    $(".slide-two").owlCarousel({
        dots: true,
        loop:true, 
        margin: 10,
        responsive:{ 
            0:{
                items:1
            }
        }
    });

    
$(".slide-thre").owlCarousel({
        dots: true,
        loop:true, 
        margin: 100,
        responsive:{ 
            0:{
                items:4
            },
            
        }
    });


 
  
  var owl = $('.slide-one');
 

  $('.nxts').click(function () {
    owl.trigger('next.owl.carousel');
  })

  $('.prev').click(function () {

    owl.trigger('prev.owl.carousel');
  });
        }
        },
        mounted: async function(){
                    await   axios.get("http://localhost:9999/photo").then((Response)=>{
                      this.photo = Response.data;
             
         });

            await     axios.get("http://localhost:9999/video").then((Response)=>{
                      this.video = Response.data;
             
         })
            await     axios.get("http://localhost:9999/tran").then((Response)=>{
                      this.tran = Response.data;
             
         })
          this.corl();
        },
        computed: {
 
        }
    }





</script>