<template>
  <div>
    <div class="advertise">
      <div class="center-advertise">
          <div class="seach-room">
              <div class="box-search">
                <div class="textshow">
                  <span class="lao-txt vansana">VANSANA HOTEL ABOUT</span><br>
                  <span class="lao-txt onlinebk">Online Booking, The move you stay, The more you see</span><br>
                  <span class="lao-txt onlinebk choose">Chose yours below ></span>
                  </div>
                  <div class="input-all">
                    
                      <ul class="ul-boxseach">
                          <li class="li-center branch ml-3">
                            <select name="" id="" class="branches" @change="branchesadd">
                              <option value="" selected>Select Branches</option>
                              <option value="" v-for="data in branches" :value="data" class="datasent">{{ data }}</option>
                            </select>
                          </li>
                          <li class="li-center ml-3 check-in">
                                <date-picker v-model="search.check_in" :lang="lang" :value="search.check_in" @change="addcheckin"></date-picker>
                          </li>
                          <li class="li-center ml-3 check-out">
                              <date-picker v-model="search.check_out" :lang="lang" :value="search.check_out" @change="addcheckout"></date-picker>
                          </li>
                          <li class="li-center text-center adult" @click="addacr">{{adultvalue}} Adult</li>
                          <li class="li-center text-center chrildren" @click="addacr">{{childrenvalue}} chrildern</li>
                          <li class="li-center text-center chrildren" @click="addacr">{{roomsvalue}} Rooms</li>
                          <li class="last-li text-go" @click="searchroom">Search</li>
                      </ul>
                      <div class="modal-acr" v-if="modal_addnum == true">
                                <ul class="ul-modal">
                                  <li>
                                    <div class="plus-adult">
                                       <button class="btn-minus-ault" @click="btnadultvalueminus"><i class="fa fa-plus"></i></button><input class="input-value" type="number" disabled name="" id="" v-model="adultvalue"><button @click="btnplusadultvalue" class="btn-plus-ault"><i class="fa fa-plus"></i></button>
                                       </div>
                                  </li>
                                  <li>
                                    <div class="plus-children">
                                      <div class="plus-adult">
                                       <button class="btn-minus-ault" @click="btnchildrenvalue"><i class="fa fa-plus"></i></button><input class="input-value" type="number" disabled name="" id="" v-model="childrenvalue"><button @click="btnpluschildrenvalue" class="btn-plus-ault"><i class="fa fa-plus"></i></button>
                                       </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="plus-rooms">
                                      <div class="plus-adult">
                                       <button class="btn-minus-ault" @click="btnroomsvalue"><i class="fa fa-plus"></i></button><input class="input-value" type="number" disabled name="" id="" v-model="roomsvalue"><button @click="btnplusroomsvalue" class="btn-plus-ault"><i class="fa fa-plus"></i></button>
                                       </div>
                                    </div>
                                  </li>
                                </ul>
                                <span class="text-explain"> Children is lower than 10 years old </span>
                            </div>
                  </div>
              </div>
          </div>
    </div>
    </div>
    <div class="closemodal" v-if="modal_addnum == true" @click="modal_addnum = false"></div>
    <!-- ROOMS -->
     <div class="rooms">
            <div class="center-rooms">
              <div class="txt-room-top"><h3>5.7 million homes, big or small… and you thought we only did hotels</h3></div>
                <div class="rooms-ads">
                  <div class="cover-img-l">
                    <img class="img-rooms" src="imgs/room1.jpg" alt="">
                    <span class="txt-cover-imgs">We’ve defined the required #app element which contains the App component that</span>
                  </div>
                  <div class="cover-letter-r">
                    <span class="txt-img-l">We’ve defined the required #app element which contains the App component that Vue will render, along with rendering the appropriate component based on the URL.We’ve defined thewith rendering the appropriate component based on the URL.</span>
                    <span class="read-more-img">
                      <a href="#" class="a-read-more">Read More <i class="fa fa-chevron-right"></i></a>
                    </span>
                  </div>
                  
                </div>
                <div class="rooms-ads-r">
                 <div class="cover-img-l">
                    <img class="img-rooms" src="imgs/room2.jpg" alt="">
                    <span class="txt-cover-imgs">We’ve defined the required #app element which contains the App component that</span>
                  </div>
                  <div class="cover-letter-r">
                    <span class="txt-img-l">We’ve defined the required #app element which contains the App component that Vue will render, along with rendering the appropriate component based on the URL.</span>
                    <span class="read-more-img">
                      <a href="#" class="a-read-more">Read More <i class="fa fa-chevron-right"></i></a>
                    </span>
                  </div>
                </div>
            </div>
            <div class="center-rooms">
              <div class="txt-room-top"><h3>Vansana Hotel Group THE MORE YOU STAY, THE MORE YOU SEE</h3></div>
                <div class="rooms-ads">
                  <div class="cover-img-l">
                    <img class="img-rooms" src="imgs/branch1.jpg" alt="">
                    <span class="txt-cover-imgs">We’ve defined the required #app element which contains the App component that</span>
                  </div>
                  <div class="cover-letter-r">
                    <img class="img-rooms" src="imgs/branch2.jpg" alt="">
                    <span class="txt-cover-imgs">We’ve defined the required #app element which contains the App component that</span>
                  </div>
                  
                </div>
                <div class="rooms-ads-r">
                 <div class="cover-img-l">
                    <img class="img-rooms" src="imgs/branch3.jpg" alt="">
                    <span class="txt-cover-imgs">We’ve defined the required #app element which contains the App component that</span>
                  </div>
                  <div class="cover-letter-r">
                    <img class="img-rooms" src="imgs/branch5.jpg" alt="">
                    <span class="txt-cover-imgs">We’ve defined the required #app element which contains the App component that</span>
                  </div>
                </div>
            </div>
        </div>
    <!-- END ROOMS -->
    <!-- POPUP ZONE -->
    <div class="alert-error" v-if="error_value == true">
        <span  class="txt-alert-error">{{ error_msg }}</span>
    </div> 
    <!-- POPUP ZONE -->
  </div>
</template>
<script>

import DatePicker from 'vue2-datepicker'
import { setTimeout, clearInterval } from 'timers';
export default {
  data() {
    return {
      error_value:false,
      error_msg:null,
      branches:
        [
          'Vientiane',
          'Luangprabang',
          'Vangvieng',
        ],
      data_seach:[
        {
          date_start:null,
          date_end:null,
          adult:1,
          children:1,
          rooms:1,
          brance:null,
        }
      ],
      modal_addnum:false,
      adultvalue:1,
      childrenvalue:1,
      roomsvalue:1,
        search:
            [
                {
                    check_in:"",
                    check_out:"",
                   
                }
            ],
        lang: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
        placeholder: {
          date: 'Check In',
          dateRange: 'Select Date Range'
        }
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [ new Date(), new Date() ]
          }
        }
      ],
      timePickerOptions:{
        start: '00:00',
        step: '00:30',
        end: '23:30'
      },
      advertise: "THIS IS ADVERTISE PAGE"
    };
  },
  mounted(vm = this) {
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    btnplusadultvalue(){
      this.adultvalue += 1
      this.data_seach.adult = this.adultvalue
    },
    btnpluschildrenvalue(){
      this.childrenvalue += 1
      this.data_seach.childrenvalue = this.childrenvalue
    },
    btnplusroomsvalue(){
      this.roomsvalue += 1
      this.data_seach.roomsvalue = this.roomsvalue
    },
    searchroom(search){
      let n = 0
      console.log(this.data_seach.adult)
      search = 
      'search?province='+this.data_seach.brance+
      '&checkin='+this.data_seach.date_start+
      '&checkout='+this.data_seach.date_end+
      '&adult='+this.adultvalue+
      '&children='+this.childrenvalue+
      '&rooms='+this.roomsvalue
      
      if(
        this.data_seach.brance == undefined ||
        this.data_seach.date_start == undefined ||
        this.data_seach.date_end == undefined ||
        this.adultvalue == undefined ||
        this.childrenvalue == undefined ||
        this.roomsvalue == undefined 
      ){
        this.error_value=true
        setTimeout(() => {
        this.error_value=false
        }, 2000);
        this.error_msg = 'Please Complete the form'
      }
      
      // console.log(search)
      // axios.get(search).then(res=>{
      //     console.log(res.data)
      // }).catch(er=>{
      //   console.log(er.res)
      // })
      
    },
    branchesadd(data){
      data = $('.datasent').val()
      this.data_seach.brance = data
    },
      addacr(){
        if(this.modal_addnum == true ){
          this.modal_addnum = false 
        }else{
          this.modal_addnum = true 
        }
      },
      removemodal(){
          this.modal_addnum = false 
      },
      addcheckin(e){
          this.data_seach.date_start = this.search.check_in.toLocaleDateString();
          this.data_seach.adult = this.adultvalue
          this.data_seach.childrenvalue = this.childrenvalue
          this.data_seach.roomsvalue = this.roomsvalue

      },
       addcheckout(e){
          console.log(this.search.check_out)
          this.data_seach.date_end = this.search.check_out.toLocaleDateString();
      },
      btnadultvalueminus(){
        this.adultvalue -= 1
        if(this.adultvalue < 1){
            this.adultvalue = 1
        }
      },
      btnchildrenvalue(){
        this.childrenvalue -= 1
        if(this.childrenvalue < 1){
            this.childrenvalue = 1
        }
      },
      btnroomsvalue(){
        this.roomsvalue -= 1
        if(this.roomsvalue < 1){
            this.roomsvalue = 1
        }
      }

  }
};
</script>
<style scoped>
.read-more-img{
  position: relative;
    top: 14px;
}
.a-read-more{
    display: block;
    padding: 10px;
    width: 109px;
    border-radius: 3px;
    border: 1px solid #ebeef1;
}
.a-read-more i{
      margin-left: 6px;
    /* margin-top: 0px; */
    font-size: 13px;
}
.txt-cover-imgs{
          position: relative;
    left: 22px;
    display: block;
    width: 250px;
    /* background: red; */
    color: #ececec;
    bottom: 87px;
}
.txt-room-top h3{
  padding-bottom: 10px;
    display: block;
    position: relative;
    text-align: left;
    width: 686px;
}
.img-rooms{
width: 250px;
    height: 250px;
}
.cover-img-l{
    width: 300px;
    float: left;
}
.cover-letter-r{
    width: 270px;
    float: left;
}
.txt-img-l{

}
.rooms-ads-r{

}
.center-alert-error{

}
.txt-alert-error{
      margin: 0 auto;
    width: 503px;
    line-height: 50px;
    /* margin: 0 auto; */
    color: #fff;
    height: 50px;
    border-radius: 3px;
    display: block;
    font-weight: bold;
    background: #fd7272;
}
.alert-error{
    width: 100%;
    height: 50px;
    text-align: center;
    position: fixed;
    top: 40px;
}
.choose{
  color:#999;
}
.lao-txt{
  color:#fff;
}
.vansana{
  color:#fff;
  font-size: 33px;
}
.onlinebk{
  color:#fff;
}
.textshow{
    position: relative;
    left: 51px;
}
.closemodal{
      position: absolute;
    width: 100%;
    top: 0;
    height: 1000px;
    z-index: 100;
}
.branches{
      height: 34px;
    width: 183px;
    background: #fff;
    border-color: #ccc;
}
.ul-modal{
    text-align: center;
}
.ul-modal li{
  margin-top: 16px;
}
.plus-adult{

}
.text-explain{
  color: #9e9e9e;
}
.btn-minus-ault{
    width: 30px;
    height: 26px;
    position: relative;
    right: 29px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    background: #0892da;
    line-height: 18px;
}
.input-value{
 outline: none;
    height: 27px;
    width: 90px;
    padding-left: 14px;
    color: #736f6f;
    border: none;
    background: none;
    text-align: center;
}
.btn-plus-ault{
    width: 30px;
    height: 26px;
    position: relative;
    left: 29px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    background: #0892da;
    line-height: 18px;
}
.advertise{
    
    /* width: 100%; */
    height: 500px;
    padding:22px;
}
.center-advertise{
      width: 1200px;
      background: url("/imgs/advertise.jpg");
    height: 500px;
    margin: 0 auto;
    /* background: black; */
}
.seach-room{
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    /* background: green; */
}
.box-search{
             width: 100%;
    height: 200px;
    position: relative;
    top: 150px;

}
.input-all{
       width: 900px;
    height: 50px;
    background: #ffffff;
    position: relative;
    border: 1px solid #5ea0f5;
    border-radius: 3px;
    margin: 0 auto;
    top: 31px;

}
.ul-boxseach {
    widows: 100%;

}
.ul-boxseach .li-center{
        line-height: 50px;
    float: left;
    border-right: 1px solid #1f1f1f1a;

}
.last-li{
     text-align: center;
    line-height:50px;
    float: left;
    width: 108px;
}
.branch{
    text-align: left;
    width: 199px;
}
.check-in{
    width: 150px;
}
.check-out{
    width: 150px;    
}
.adult{
width: 83px;  
cursor: pointer;
}
.chrildren{
width: 83px;  
cursor: pointer;
}
.rooms{
width: 83px;  
}
.mx-datepicker {
    position: relative;
    display: inline-block;
    width: 138px;
    color: #73879c;
    font: 14px/1.5 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei',
 sans-serif;
}
.text-go{
          background: #338de6;
    height: 48px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
.modal-acr{
        width: 250px;
    /* top: 3px; */
    background: white;
    position: absolute;
    border: 1px solid #5da0f5;
    height: 180px;
    top: 53px;
    right: 108px;
    border-radius: 2px;
        text-align: center;
        z-index: 101;
}
.rooms{
        /* background: red; */
    width: 100%;
    height: 0 auto;
    margin-top: 64px;
}
.center-rooms{
        width: 1200px;
    height: 250px;
    width: 1000;
    margin: 0 auto;
    position: relative;
}
.rooms-ads{
    width: 600px;
    /* height: 250px; */
    float: left;
}
</style>


