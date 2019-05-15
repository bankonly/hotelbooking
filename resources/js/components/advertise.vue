<template>
  <div>
    <div class="advertise">
      <div class="center-advertise">
          <div class="seach-room">
              <div class="box-search">
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
  </div>
</template>
<script>

import DatePicker from 'vue2-datepicker'
export default {
  data() {
    return {
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
    searchroom(){
      console.log(this.data_seach)
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
          console.log(this.search.check_in)
          this.data_seach.date_start = this.search.check_in
          this.data_seach.adult = this.adultvalue
          this.data_seach.childrenvalue = this.childrenvalue
          this.data_seach.roomsvalue = this.roomsvalue

      },
       addcheckout(e){
          console.log(this.search.check_out)
          this.data_seach.date_end = this.search.check_out
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
    color: #7d7d7d;
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
    top: 75px;

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
      background: #ffbc15;
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
}
</style>


