<template>
  <div>
    <div class="advertise">
      <div class="center-advertise">
          <div class="seach-room">
              <div class="box-search">
                <div class="textshow">
                  <span class="lao-txt vansana">VANSANA HOTEL</span><br>
                  <span class="lao-txt onlinebk ltx" >ຈອງຫ້ອງພັກອອນລາຍ, ການຍ້າຍທີ່ທ່ານຢູ່ ຄືວຽກຂອງພວກເຮົາ</span><br>
                  <span class="lao-txt onlinebk choose  ltx">ເລືອກຫ້ອງພັກຂອງທ່ານຂ້າງລຸ່ມນີ້ ></span>
                  </div>
                  <div class="input-all">
                    
                      <ul class="ul-boxseach">
                          <li class="li-center branch ml-3">
                            <select name="" id="" class="branches ltx" @change="branchesadd" v-model="gotbranch">
                              <option value="" selected class="ltx">ເລືອກສາຂາ</option>
                              <option value="" v-for="data in branches" :value="data" class="datasent">{{ data }}</option>
                            </select>
                          </li>
                          <li class="li-center ml-3 check-in">
                                <date-picker v-model="search.check_in" :lang="lang" :value="search.check_in" @change="addcheckin"></date-picker>
                          </li>
                          <li class="li-center ml-3 check-out">
                              <date-picker v-model="search.check_out" :lang="lang" :value="search.check_out" @change="addcheckout"></date-picker>
                          </li>
                          <li class="li-center text-center adult ltx" @click="addacr">{{adultvalue}} ຜູ້ໃຫ່ຍ</li>
                          <li class="li-center text-center chrildren ltx" @click="addacr">{{childrenvalue}} ເດັກນ້ອຍ</li>
                          <li class="li-center text-center chrildren ltx" @click="addacr">{{roomsvalue}} ຫ້ອງ</li>
                          <li class="last-li text-go ltx" @click="searchroom">ຄົ້ນຫາ</li>
                      </ul>
                      <div class="modal-acr" v-if="modal_addnum == true">
                                <ul class="ul-modal">
                                  <li>
                                    <div class="plus-adult">
                                      <div class="txt-left ltx">ຜູ້ໃຫ່ຍ</div>
                                      
                                       <button class="btn-minus-ault" @click="btnadultvalueminus"><i class="fa fa-plus"></i></button><input class="input-value" type="number" disabled name="" id="" v-model="adultvalue"><button @click="btnplusadultvalue" class="btn-plus-ault"><i class="fa fa-plus"></i></button>
                                       </div>
                                  </li>
                                  <li>
                                    <div class="plus-children">
                                      <div class="txt-left ltx">ເດັກນ້ອຍ</div>
                                      <div class="plus-adult">
                                        
                                       <button class="btn-minus-ault" @click="btnchildrenvalue"><i class="fa fa-plus"></i></button><input class="input-value" type="number" disabled name="" id="" v-model="childrenvalue"><button @click="btnpluschildrenvalue" class="btn-plus-ault"><i class="fa fa-plus"></i></button>
                                       </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="plus-rooms">
                                      <div class="txt-left ltx">ຫ້ອງ</div>
                                      <div class="plus-adult">
                                        
                                       <button class="btn-minus-ault" @click="btnroomsvalue"><i class="fa fa-plus"></i></button><input class="input-value" type="number" disabled name="" id="" v-model="roomsvalue"><button @click="btnplusroomsvalue" class="btn-plus-ault"><i class="fa fa-plus"></i></button>
                                       </div>
                                    </div>
                                  </li>
                                </ul>
                                <span class="text-explain ltx"> ເດັກນ້ອຍຕ່ໍາກວ່າ 10 ປີ</span>
                            </div>
                  </div>
              </div>
          </div>
    </div>
    </div>
    <div class="closemodal" v-if="modal_addnum == true" @click="modal_addnum = false"></div>
    <!-- ROOMS -->
     <div class="rooms" v-if="searchclicked == false">
            <div class="center-rooms">
              <div class="txt-room-top"><h3 class="ltx">ຄົ້ນຫາຫຼາຍກວ່າລ້ານທ່ຽວບິນ, ໂຮງແຮມ, ແພກເກດແລະອື່ນໆ</h3></div>
                <div class="rooms-ads">
                  <div class="cover-img-l">
                    <img class="img-rooms" src="imgs/room1.jpg" alt="">
                    <span class="txt-cover-imgs ltx">ໂຮງແຮມ Vansana Riverside (VRH) ຕັ້ງຢູ່ເທິງທະເລແມ່ນ້ໍາຂອງແມ່ນ້ໍາຂອງແລະຢູ່ໃກ້ກັບໃຈກາງເມືອງ</span>
                  </div>
                  <div class="cover-letter-r">
                    <span class="txt-img-l ltx">ໂຮງແຮມ Vansana Riverside (VRH) ຕັ້ງຢູ່ເທິງທະເລແມ່ນ້ໍາຂອງແມ່ນ້ໍາຂອງແລະຢູ່ໃກ້ກັບໃຈກາງເມືອງ. ຢູ່ທາງຫນ້າໂຮງແຮມ, ທ່ານສາມາດເພີດເພີນກັບອາຫານ Lao ທີ່ແຕກຕ່າງກັນໃນຕອນກາງຄືນ. VRH ປະກອບດ້ວຍ 6 ຊັ້ນ, 77 ຫ້ອງພັກທີ່ມີຄວາມສະດວກສະບາຍແລະ 5 ທີ່ພັກອາໄສຟຸ່ມເຟືອຍ.
</span>
                    <span class="read-more-img">
                      <a href="#" class="a-read-more ltx">ອ່ານເພີ່ມເຕີມ <i class="fa fa-chevron-right"></i></a>
                    </span>
                  </div>
                  
                </div>
                <div class="rooms-ads-r">
                 <div class="cover-img-l">
                    <img class="img-rooms" src="imgs/room2.jpg" alt="">
                    <span class="txt-cover-imgs ltx">ໂຮງແຮມແຫ່ງນີ້ເປັນໂຮງແຮມທໍາອິດຂອງ VHG ແລະຕັ້ງຢູ່ທີ່ເມືອງເກົ່າແກ່ປະມານ 15 ນາທີ</span>
                  </div>
                  <div class="cover-letter-r">
                    <span class="txt-img-l ltx">ໂຮງແຮມແຫ່ງນີ້ເປັນໂຮງແຮມທໍາອິດຂອງ VHG ແລະຕັ້ງຢູ່ທີ່ເມືອງເກົ່າແກ່ປະມານ 15 ນາທີໂດຍມີຫ້ອງພັກທີ່ມີການຕົກແຕ່ງຢ່າງສວຍງາມ 35 ຫ້ອງ: ຫ້ອງພັກມາດຕະຖານ 32 ຫ້ອງແລະ 3 ຫ້ອງສະລອຍນ້ໍາທີ່ລ້ອມຮອບໄປດ້ວຍສະລອຍນ້ໍາຂະຫນາດໃຫຍ່ ແລະຕົກແຕ່ງຢ່າງມີລົດຊາດ.
</span>
                    <span class="read-more-img">
                      <a href="#" class="a-read-more ltx">ອ່ານເພີ່ມເຕີມ <i class="fa fa-chevron-right"></i></a>
                    </span>
                  </div>
                </div>
            </div>
            <div class="center-rooms">
              <div class="txt-room-top"><h3 class="ltx">ຕັ້ງຢູ່ຢ່າງສະຫງົບຢູ່ເທິງທະນາຄານຂອງນໍ້ານໍ້ານ້ໍາໃນບ້ານບ້ານຄູນ, ຫ່າງຈາກນະຄອນຫຼວງວຽງຈັນ 60 ກິໂລແມັດ,
</h3></div>
                <div class="rooms-ads">
                  <div class="cover-img-l">
                    <img class="img-rooms" src="imgs/branch1.jpg" alt="">
                    <span class="txt-cover-imgs ltx">ໂຮງແຮມແຫ່ງນີ້ເປັນໂຮງແຮມທໍາອິດຂອງ VHG ແລະຕັ້ງຢູ່ທີ່ເມືອງເກົ່າແກ່ປະມານ 15 ນາທີ</span>
                  </div>
                  <div class="cover-letter-r">
                    <img class="img-rooms" src="imgs/branch2.jpg" alt="">
                    <span class="txt-cover-imgs ltx">ຕັ້ງຢູ່ຢ່າງສະຫງົບຢູ່ເທິງທະນາຄານຂອງນໍ້ານໍ້ານ້ໍາໃນບ້ານບ້ານຄູນ, ຫ່າງຈາກນະຄອນຫຼວງວຽງຈັນ 60 ກິໂລແມັດ,
</span>
                  </div>
                  
                </div>
                <div class="rooms-ads-r">
                 <div class="cover-img-l">
                    <img class="img-rooms" src="imgs/branch3.jpg" alt="">
                    <span class="txt-cover-imgs ltx">ຕັ້ງຢູ່ພຽງ 30 ນາທີຈາກ Plain of Jars ແລະ 15 ນາທີຈາກສະຫນາມບິນ,
</span>
                  </div>
                  <div class="cover-letter-r">
                    <img class="img-rooms" src="imgs/branch5.jpg" alt="">
                    <span class="txt-cover-imgs ltx">ໂຮງແຮມ Vansana Riverside (VRH) ຕັ້ງຢູ່ເທິງທະເລແມ່ນ້ໍາຂອງແມ່ນ້ໍາຂອງແລະຢູ່ໃກ້ກັບໃຈກາງເມືອງ</span>
                  </div>
                </div>
            </div>
        </div>
    <!-- END ROOMS -->


    <!-- SEARCH BUTTON -->
    <div class="cover-search-box" v-if="searchclicked==true">
      <div class="lds-ring" id="search-loader" v-if="loader !== false"><div></div><div></div><div></div><div></div></div>
      <div class="search-txt-search" v-if="loader == false"><span class="txt-result-out ltx"> ຜົນການຄົ້ນຫາ</span></div>
      <div class="center-searchbox" v-if="loader == false">
        <div class="left-search-box">
          <ul class="left-result-search">
            <li><span class="ltx">ສາຊາ</span> - {{ gotbranch }}</li>
            <li><span class="">CheckIn</span> - {{ data_seach.date_start }}</li>
            <li><span class="">CheckOut</span> - {{ data_seach.date_end }}</li>
            <li><span class="ltx">ຜູ້ໃຫ່ຍ</span> - {{ adultvalue }}</li>
            <li><span class="ltx">ເດັກນ້ອຍ</span> - {{ childrenvalue }}</li>
            <li><span class="ltx">ຫ້ອງ</span> - {{ roomsvalue }}</li>
          </ul>
        </div>
        <div class="right-search-box">
          <div class="cover-result-search">
            <div class="pic-result">
              <img src="imgs/room1.jpg" alt="" class="img-detail-res">
            </div>
            <div class="detail-result">
              <div class="left-detail-txt">
                <ul class="text-detail-room">
                  <li><a href="" class="name-hotel"> <i class="fa fa-map-marker-alt"></i> Vansana Riverside</a></li>
                  <li><a href="" class="seeonmap">see on map</a></li>
                  <li><a href="" class="pomotion ltx">
1 ຄົນອື່ນເບິ່ງຫາວັນທີຂອງທ່ານໃນ 10 ນາທີສຸດທ້າຍ</a></li>
                  <li><a href="" class="roomdt">Standard Twin Room  </a></li>
                  <li><a href="#" class="btnton ltx" @click="seemorebtn()">ເບິ່ງເພີ່ມເຕີມ  </a></li>
                </ul>
              </div>
              <div class="right-detail-txt">
                <ul class="text-detail-room-right">
                  <li class="lireview"><a href="" class="review ltx"> <span class="rv-score"></span> 6.5</a></li>
                  <li class="liprice-for-night"><a href="" class="price-for-night ltx">ລາຄາຕໍຄືນ</a></li>
                  <li class="liprice"><a href="" class="price ltx">7,550,000 ກີບ</a></li>
                  <li class="litax"><a href="" class="tax ltx">ປະກອບພາສີ ຄ່າທຳນຽມ</a></li>
                  <li class="liinclude"><a href="" class="include ltx">ລວມທັ້ງອາຫານເຊົ້າ</a></li>
                  
                  <li class="liallroom"><a href="" class="allroom ltx" >ເບິ່ງຫ້ອງທັງໝົດ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>











      </div>
    </div>
    <!-- SEARCH BUTTON -->


<!-- MODAL ROOM -->
<div class="cover-modal-rooms cover-height" v-show="seemore == true">
<div class="lds-ring" id="search-loader-modal" v-if="loadermodal !== false" ><div></div><div></div><div></div><div></div></div>
<div class="close-modal-rooms" v-if="loadermodal==false"><button class="btn-clsoe-exit" @click="seemore = false"><i class="fa fa-times-circle"></i></button></div>
<div class="close-modal-rooms" v-if="loadermodal==false"><button class="btn-clsoe-back" @click="seemore = false">Go Back</button></div>

<div class="cover-search-box modal-result" v-if="searchclicked==true && loadermodal==false">
      <div class="lds-ring" id="search-loader" v-if="loader !== false"><div></div><div></div><div></div><div></div></div>
      <div class="center-searchbox" v-if="loader == false">
        <div class="header-modal">
          <ul class="ul-header-modal">
            <li class="ltx">ລາຍລະອຽດ, ລາຄາ</li>
            <li class="ltx">ກ່ຽວກັບໂຮງແຮມ</li>
            <li class="ltx">ກົດຂອງໂຮງແຮມ</li>
            <li class="ltx">ລີວິວ</li>
          </ul>
        </div>
        <div class="left-search-box">
          <ul class="left-result-search">
            <li><span class="ltx">ສາຊາ</span> - {{ gotbranch }}</li>
            <li><span class="">CheckIn</span> - {{ data_seach.date_start }}</li>
            <li><span class="">CheckOut</span> - {{ data_seach.date_end }}</li>
            <li><span class="ltx">ຜູ້ໃຫ່ຍ</span> - {{ adultvalue }}</li>
            <li><span class="ltx">ເດັກນ້ອຍ</span> - {{ childrenvalue }}</li>
            <li><span class="ltx">ຫ້ອງ</span> - {{ roomsvalue }}</li>
          </ul>
        </div>


        


        <div class="right-search-box">
          <div class="cover-result-search">
            <div class="pic-result">
              <img src="imgs/room1.jpg" alt="" class="img-detail-res">
            </div>
            <div class="detail-result">
              <div class="left-detail-txt">
                <ul class="text-detail-room">
                  <li><a href="" class="name-hotel"> <i class="fa fa-map-marker-alt"></i> Vansana Riverside</a></li>
                  <li><a href="" class="seeonmap">see on map</a></li>
                  <li><a href="" class="pomotion ltx">
1 ຄົນອື່ນເບິ່ງຫາວັນທີຂອງທ່ານໃນ 10 ນາທີສຸດທ້າຍ</a></li>
                  <li><a href="" class="roomdt">Standard Twin Room  </a></li>
                  <li><a href="#" class="btnton ltx" @click="registerroom">ຈອງຕອນນີ້  </a></li>
                </ul>
              </div>
              <div class="right-detail-txt">
                <ul class="text-detail-room-right">
                  <li class="lireview"><a href="" class="review ltx"> <span class="rv-score"></span> 6.5</a></li>
                  <li class="liprice-for-night"><a href="" class="price-for-night ltx">ລາຄາຕໍຄືນ</a></li>
                  <li class="liprice"><a href="" class="price ltx">7,550,000 ກີບ</a></li>
                  <li class="litax"><a href="" class="tax ltx">ປະກອບພາສີ ຄ່າທຳນຽມ</a></li>
                  <li class="liinclude"><a href="" class="include ltx">ລວມທັ້ງອາຫານເຊົ້າ</a></li>
                  
                  <li class="liallroom"><a href="" class="allroom ltx" >ເບິ່ງຫ້ອງທັງໝົດ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- register form -->
        <div class="cv_loader"  v-if="loader_md_register == true">
           <div class="lds-ring" id="search-loader-register" ><div></div><div></div><div></div><div></div></div>
        </div>
       
        <div class="rsb-modal-register" v-if="loader_md_register == false ">
          
          <div class="cover-result-search crs-modal" >
            <div class="pc-modal-register">
              <div class="top_check_b">
                
                <button class="back_to_page ltx" @click="register_modal = false">ກັບຄືນ</button>
                 <label for="why_you_guest" class="lb_why_you_guest ltx">ທ່ານກໍາລັງເດີນທາງໄປເຮັດວຽກຢູ່ບໍ?</label><br>
              <input type="radio" class="why_you_guest" id="why_you_guest" name="work_or_not" v-model="work_or_not" >
              <input type="radio" class="why_you_guest" id="why_you_guest" name="work_or_not" v-model="work_or_not" >
              </div>
             <div class="bottom_input">
              <label for="title_guest" class="lb_title_guest ltx">ເພດ</label>
              <select type="text" class="title_guest" id="title_guest" v-model="value_title">
                <option  class="option_guest" v-for="data in title_m" :value="data">{{ data }}</option>
              </select>
              <label for="name_guest" class="lb_name_guest ltx">ຊື່</label>
              <input type="text" class="name_guest" id="name_guest">
              <label for="lastname_guest" class="lb_lastname_guest ltx">ນາມສະກຸນ</label>
              <input type="text" class="lastname_guest" id="lastname_guest"><br>
              <label for="email_guest" class="lb_email_guest ltx">ອີເມລ</label>
              <input type="text" class="email_guest" id="email_guest">
              <label for="cf_email_guest" class="lb_cf_email_guest ltx">ຄອນເຟີມ ອີເມລ</label>
              <input type="text" class="cf_email_guest" id="cf_email_guest">
              </div>
            </div>
          </div>
        </div>
        <!-- register form -->


 <div class="rsb-modal" >
          <div class="cover-result-search crs-modal" >
            <!-- <div class="pc-modal"> -->
              <table class="tb_room_detail">
                <thead class="thead_room_detail">
                  <th class="tb_Room">Room type</th>
                  <th class="tb_Sleep">Sleep</th>
                  <th class="tb_Price">Price for 2 night</th>
                  <th class="tb_choice">Your choice</th>
                  <th class="tb_empty_sleect"></th>
                </thead>
                <tbody class="tbody_room_detail">
                    <tr>
                      <td class="td_tb_Room">2 twin beds  ຶ
Balcony, City view  Air conditioning  Private bathroom  Free WiFi
• Balcony  • TV  • Telephone  • Cable channels  • Safe  • Sitting area  • Wardrobe or closet  • Shower  • Free toiletries  • Toilet  • Minibar  • Refrigerator  • Electric kettle
Prices are per room for 3 nights
Included: 10 % TAX, 10 % Property service charge, Breakfast</td>
<td class="td_tb_Sleep"><i class="fa fa-users"></i></td>
                    <td class="td_tb_Price">1,800,000</td>
                    <td class="td_tb_choice">Breakfast included in the price
                            Non-refundable
                            NO PREPAYMENT NEEDED – pay at the property
                            </td>
                            <td class="td_tb_empty_sleect">
                              <button class="ltx btn-confirm-der"  @click="registerroom">ຈອງຕອນນີ້</button>
                            </td>
                    </tr>
                    
                </tbody>
              </table>
            <!-- </div> -->
          </div>
        </div>

        <div class="rsb-modal" v-if="register_modal == false">
          <div class="cover-result-search crs-modal" >
            <div class="pc-modal">
              <img src="imgs/room1.jpg" alt="" class="img-detail-res-model">
            </div>
          </div>
        </div>

        <div class="rsb-modal-desc" v-if="register_modal == false">
          <div class="cover-result-search crs-modal" >
            <!-- <div class="pc-modal"> -->
              <div class="ltx txt-descrip">
                <span class="txt-detail-der"></span>
                          ຢູ່ຫ່າງຈາກແມ່ນ້ໍາຂອງແມ່ນ້ໍາຂອງ, Vansana Riverside Hotel ມີສະຖານທີ່ທີ່ສະດວກສະບາຍທີ່ມີລະບຽງສ່ວນຕົວແລະຫ້ອງນ້ໍາສ່ວນຕົວ. ມີສະລອຍນ້ໍາກາງແຈ້ງແລະໄນຄັບ ມີບໍລິການ Wi-Fi ຟລີທົ່ວໂຮງແຮມ.
                          Vansana Riverside Hotel ແມ່ນພຽງແຕ່ 5 ນາທີຈາກນະຄອນວຽງຈັນແລະຕະຫຼາດກາງຄືນ. ມັນເປັນເວລາຂັບລົດ 10 ນາທີຈາກສະຫນາມບິນນານາຊາດ Wattay ແລະຂັບລົດ 20 ນາທີຈາກ Patuxai Arch.
                          ພ້ອມດ້ວຍພື້ນໄມ້, ຫ້ອງພັກທີ່ສະດວກສະບາຍໃນໂຮງແຮມມີເຄື່ອງປັບອາກາດ, ເຄເບີນແລະຫ້ອງນັ່ງຫຼິ້ນ. ສິ່ງອໍານວຍຄວາມສະດວກໃນຫ້ອງນ້ໍາແລະຫ້ອງນ້ໍາໃນຫ້ອງນ້ໍາສ່ວນຕົວ
                          ເພື່ອຄວາມສະດວກສະບາຍ, ໂຮງແຮມໃຫ້ບໍລິການແຜນກະຕ້ອນຮັບ 24 ຊົ່ວໂມງ, ສູນທຸລະກິດແລະຫ້ອງປະຊຸມ. ພະນັກງານຢູ່ທີ່ໂຕ໊ະທົວສາມາດຊ່ວຍໃຫ້ຜູ້ເຂົ້າພັກມີການຈັດການທ່ອງທ່ຽວ.
                          ຮ້ານອາຫານ Vansana ໃຫ້ບໍລິການເມນູທີ່ມີຂະຫນາດກວ້າງຂວາງຂອງຮ້ານອາຫານໄທແລະລາວ.
              </div>
              <div class="include-text">
                <ul class="ul-include-txt">
                  <li> <i class="fa fa-swimmer"></i> Swimming pool </li>           
                  <li> <i class="fa fa-wifi"></i> Free WiFi </li>
                  <li> <i class="fa fa-swimming-pool"></i> Outdoor pool</li>
                  <li> <i class="fa fa-parking"></i> Free parking</li>
                  <li> <i class="fa fa-utensils"></i> Restaurant</li>
                  <li> <i class="fa fa-glass-cheers"></i> Bar</li>
                  <li> <i class="fa fa-coffee"></i> Breakfast</li>
                </ul>
              </div>
              <!-- </div> -->
            </div>
          </div>





      </div>
    </div>




</div>
<!-- MODAL ROOM -->




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
      register_modal:false,
      work_or_not:'yes',
      value_title:"",
      loader_md_register:null,
      title_m:[
        'Mr.',
        'Mrs.'
      ],
      seemore:null,
      gotbranch:"",
      loadermodal:null,
      error_value:false,
      error_msg:null,
      searchclicked:false,
      loader:null,
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
    registerroom(){
      this.loader_md_register = true
      this.register_modal = true
      setTimeout(() => {
          this.loader_md_register = false
      }, 1000);
    },
    seemorebtn(){
      this.seemore = true
      this.loadermodal = true
      setTimeout(() => {
        $('.cover-modal-rooms').removeClass('cover-height');
        this.loadermodal = false
      }, 1000);
    },
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
      this.searchclicked = true
      this.loader=true 
      setTimeout(() => {
          this.loader=false 
      }, 1000);
      let n = 0
      console.log(this.data_seach.adult)
      search = 
      'search?province='+this.gotbranch+
      '&checkin='+this.data_seach.date_start+
      '&checkout='+this.data_seach.date_end+
      '&adult='+this.adultvalue+
      '&children='+this.childrenvalue+
      '&rooms='+this.roomsvalue
      
      // if(
      //   this.data_seach.brance == undefined ||
      //   this.data_seach.date_start == undefined ||
      //   this.data_seach.date_end == undefined ||
      //   this.adultvalue == undefined ||
      //   this.childrenvalue == undefined ||
      //   this.roomsvalue == undefined 
      // ){
      //   this.error_value=true
      //   setTimeout(() => {
      //   this.error_value=false
      //   }, 2000);
      //   this.error_msg = 'Please Complete the form'
      // }
      
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
.cv_loader{
      position: relative;
    width: 778px;
    float: right;
    top: 7px;
}
#search-loader-register{

}
.bottom_input{
    text-align: left;
    padding-top: 44px;
}
.pc-modal-register{
      width: 750px;
    /* background: #666; */
    margin: 0 auto;
    margin-top: 14px;
}
.top_check_b{
    text-align: left;
}
.lb_why_you_guest{

}
.why_you_guest{
margin-left: 11px;

}
.lb_title_guest{

}
.back_to_page{

}

.title_guest{
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    margin-left: 15px;
}
.lb_name_guest{
    padding-left: 20px;
}
.name_guest{
    border: 1px solid #d6d6d6;
    border-radius: 5px;
        margin-left: 7px;
}
.lb_lastname_guest{
  margin-left: 7px;
}
.lastname_guest{
    border: 1px solid #d6d6d6;
    border-radius: 5px;
}
.email_guest{
    border: 1px solid #d6d6d6;
    border-radius: 5px;
}
.cf_email_guest{
    border: 1px solid #d6d6d6;
    border-radius: 5px;
}
.lb_email_guest{
padding-left: 20px;
}
.lb_cf_email_guest{

}
.rsb-modal-register{
margin-top: 7px;
    width: 780px;
    height: 365px;
    position: relative;
    border-radius: 3px;
    background: #fff;
    float: right;
    box-sizing: border-box;
    box-shadow: 0px 0px 11px #343a4017;
    border: 1px solid #c1c1c157;
}
.btn-confirm-der{
    border: none;
    background: #1ad850;
    color: #fff;
    border-radius: 3px;
    padding: 5px;
}
.tb_Room{
    width: 200px;
}
.tb_Sleep{
width: 100px;
}
.tb_Price{
    width: 200px;
}
.tb_choice{
    width: 170px;
}
.tb_empty_sleect{
text-align: right;
}
.td_tb_Room{
text-align: left;
    padding-top: 15px;
}
.td_tb_Sleep{

}
.td_tb_Price{

}
.td_tb_choice{
text-align: left;
}
.td_tb_empty_sleect{

}
.tb_room_detail{
    width: 750px;
    margin: 0 auto;
        margin-top: 12px;
}
.thead_room_detail{

}
.thead_room_detail th{
      padding: 9px;
    background: #338de6;
    color: #fff;
}
.tbody_room_detail{

}
.tbody_room_detail tr{

}
.tbody_room_detail tr td{

}
.btn-clsoe-back{
      background: none;
    border: 1px solid #eaeaea;
    /* border: none; */
    border-radius: 3px;
    /* left: 19px; */
    margin-top: 9px;
    color: #338de6;
    height: 26px;
    width: 72px;
    /* padding: 3px; */
    margin-left: 10px;
}
.txt-descrip{
   width: 470px;
    float: left;
    height: 300px;
    position: relative;
    top: 20px;
    text-align: left;
    margin-left: 17px;
}
.txt-detail-der{

}
.include-text{
width: 278px;
    height: 350px;
    float: right;
}
.ul-include-txt{
    width: 200px;
    margin-top: 23px;
    margin-left: 28px;
}
.ul-include-txt li{
   text-align: left;
    padding: 7px;
    margin-top: 7px;
    border-radius: 10px;
    border: 1px solid #44444414;
}
.img-detail-res-model{
    line-height: 500px;
    width: 750px;
    height: 475px;
}
.rsb-modal-desc{
margin-top: 7px;
    width: 780px;
    height: 350px;
    position: relative;
    border-radius: 3px;
    background: #fff;
    float: right;
    box-sizing: border-box;
    box-shadow: 0px 0px 11px #343a4017;
    border: 1px solid #c1c1c157;
}
.rsb-modal{
margin-top: 7px;
    width: 780px;
    height: 365px;
    position: relative;
    border-radius: 3px;
    background: #fff;
    float: right;
    box-sizing: border-box;
    box-shadow: 0px 0px 11px #343a4017;
    border: 1px solid #c1c1c157;
}
.crs-modal{

}
.pc-modal{
    width: 778px;
    height: 500px;
    position: relative;
    /* background: yellow; */
    float: left;
    line-height: 500px;
}

.pic-result-modal{

}
.modal-result{
  padding-top: 49px;
}
.header-modal{

}
.ul-header-modal{
    width: 778px;
    float: right;
    background: #fff;
    border: 1px solid #eaeaea;
}
.ul-header-modal li{
      float: left;
    line-height: 50px;
    cursor: pointer;
    width: 194px;
    border: none;
    background: #ffffff;
    color: #000;
    border-right: 0.01em solid #f1f1f1;
}
#search-loader-modal{
  position: absolute;
    top: 400px;
}
.cover-height{
  height: 1440px;
}
.cover-modal-rooms{
  text-align: center;
  padding-bottom: 175px;
position: absolute;
    z-index: 100;
    
    background: #ffffff;
    width: 100%;
    top: 0;
    height: 0 auto;
}
.btn-clsoe-exit{
          border: 0;
    top: -2px;
    color: #f95555;
    font-size: 34px;
    position: fixed;
    right: 9px;
    background: none;
}
.close-modal-rooms{
    position: fixed;
    left: 0;
}
.lireview{

}
.liprice-for-night{
    padding: 5px;
        padding-top: 69px;
    margin-right: 14px;
}
.liprice{

}
.litax{

}
.liinclude{

}
.liallroom{

}
.review{
padding: 5px;
    color: #fff;
    background: #1f4250;
    border-radius: 3px;
}
.rv-score{

}
.price-for-night{
    color: #4e4b4b;
    font-size: 11px;
    position: relative;
    top: 11px;
}
.price{
color: #19d84f;
    font-size: 21px;
}
.tax{
color: #6d6d6d;
    font-size: 11px;
}
.include{
    color: #000;
}
.allroom{
padding: 7px 26px;
    position: relative;
    color: #fff;
    top: 27px;
    background: #338de6;
}
.btnton{
  display: block;
    width: 93px;
    padding: 10px;
    border-radius: 3px;
    color: #fff;
    background: #1ad850;
}
.name-hotel{
    color: #191919c2;
    font-size: 17px;
    text-decoration: none;
}
.seeonmap{

}
.pomotion{
font-size: 11px;
    background: #ffd900;
    color: #fff;
    display: block;
    padding: 11px;
}
.roomdt{
    margin-top: 12px;
    display: block;
    padding-top: 27px;
    font-size: 12px;
    color: #000;
}
.txt-result-out{
      font-size: 25px;
    display: block;
    color: #353535;
    height: 64px;
    line-height: 64px;
}
.search-txt-search{

}
.text-detail-room{
    position: relative;
    top: 4px;
}
.text-detail-room li {
width: 260px;
    text-align: left;
    /* padding-top: 2px; */
    margin-top: 6px;
}
.text-detail-room li a{

}
.text-detail-room-right{
        text-align: right;
    position: relative;
    top: 17px;
}
.text-detail-room-right li {
    /* padding: 5px; */
    margin-right: 14px;
}
.text-detail-room-right li a{

}
.left-result-search{
    text-align: center;
    position: relative;
    width: 170px;
    margin: 0 auto;
    top: 13px;
}
.left-result-search li{
      padding: 3px;
    margin-top: 6px;
    width: 170px;
    border-radius: 3px;
    padding-left: 14px;
    text-align: left;
    background: #ffffff;
    border: 1px solid #a8e2ff;
}
.img-detail-res{
    width: 220px;
    height: 220px;
    border-radius: 3px;
    position: relative;
    box-shadow: 0px 0px 11px #343a4017;
    top: -29px;
}
.cover-search-box{
      width: 100%;
    text-align: center;
    height: 400px;
    /* background: red; */
}
.center-searchbox{
    width: 1000px;
    height: 400px;
    /* top: -25px; */
    position: relative;
    /* background: blue; */
    margin: 0 auto;
}
.left-search-box{
       float: left;
    width: 207px;
    text-align: center;
    height: 300px;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    position: relative;
    background: #ffffff;
}
.right-search-box{
      /* margin-top: 7px; */

    width: 780px;
    height: 300px;
    position: relative;
    border-radius: 3px;
    background: #fff;
    float: right;
    box-sizing: border-box;
    box-shadow: 0px 0px 11px #343a4017;
    border: 1px solid #c1c1c157;
}
.cover-result-search{
    width: 100%;
    height: 300px;
    /* background: rebeccapurple; */
}
.pic-result{
   width: 250px;
    height: 250px;
    position: relative;
    /* background: yellow; */
    float: left;
    line-height: 300px;
}
.detail-result{
    width: 520px;
    height: 300px;
    position: relative;
    /* background: #71ab99; */
    float: right;
}
.left-detail-txt{
    width: 260px;
    height: 300px;
    float: left;
    position: relative;
    /* background: #5d4646; */
}
.right-detail-txt{
    width: 260px;
    height: 300px;
    float: right;
    position: relative;
    /* background: #6d3a3a; */
}
.txt-left{
      position: absolute;
    left: 24px;
}
.read-more-img{
  position: relative;
    top: 14px;
}
.a-read-more{
    display: block;
    padding: 10px;
    width: 122px;
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
    width: 212px;
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
  color:#292929;
  font-size: 33px;
}
.onlinebk{
  color:#868484;
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
    right: -70px;
    border: none;
    border: 1px solid #0892da;
    outline: none;
    cursor: pointer;
    border-radius: 2px;
    color: #0892da;
    /* background: #58575a; */
    line-height: 18px;
}
.input-value{
     outline: none;
    height: 27px;
    width: 90px;
    /* z-index: 100000; */
    position: relative;
    /* padding-left: 67px; */
    left: 20px;
    color: #736f6f;
    border: none;
    background: none;
    text-align: right;
}
.btn-plus-ault{
    width: 30px;
    height: 26px;
    position: relative;
    left: 29px;
    border: none;
    outline: none;
     border: 1px solid #0892da;
    cursor: pointer;
    color: #0892da;
    /* background: #0892da; */
    line-height: 18px;
}
.advertise{
    
    /* width: 100%; */
    height: 300px;
    padding:22px;
}
.center-advertise{
      width: 1200px;
      /* background: url("/imgs/advertise.jpg"); */
    height: 300px;
    margin: 0 auto;
    /* background: black; */
}
.seach-room{
    width: 1000px;
    height: 300px;
    margin: 0 auto;
    /* background: green; */
}
.box-search{
             width: 100%;
    height: 200px;
    position: relative;
    top: 50px;

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
    border: 1px solid #ececec;
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


