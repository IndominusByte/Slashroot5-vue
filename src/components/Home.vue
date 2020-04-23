<template>
  <!-- 
  1. tambahin page untuk manage service di punyanya admin untuk manage service and tick
  2. page service status up or down
  3. info rules
  4. upload patch
  5. tampilan nyuri flag di page sumbit flag {DONE}
  6. page admin submission correct and incorrect
  7. tambah footer {DONE}
  8. tambah time mulai di dashboard admin
  9. challenge detail
  10. menu register di admin
  11. action pada soal seperti visible, update delete info
  -->
<div class="container">
  <div class="columns">
    <div class="column">
      <div class="menu sticky" style="margin-top:10%;">
        <img src="static/images/logo.jpg" style="margin-bottom:10%;">
        <ul class="menu-list">
         <li>
           <a href="#" :class="[selected == 'scoreboard-content' ? 'is-active' : '']" @click="changeComponent('scoreboard')">
             <span class="icon pr-10"><i class="fa fa-table"></i></span> Scoreboard
           </a>
          </li>
          <li>
            <a href="#" :class="[selected == 'rules-content' ? 'is-active' : '']" @click="changeComponent('rules-guide')">
              <span class="icon pr-10"><i class="fa fa-info-square"></i></span> Rules & Guide
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon pr-10"><i class="fa fa-pennant"></i></span> Flagger
            </a>
            <ul>
              <li><a href="#" :class="[selected == 'submit-content' ? 'is-active' : '']"
                  @click="changeComponent('submit-flag')">Submit Flag</a></li>
              <li><a href="#">Accepted Flag</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span class="icon pr-10"><i class="fa fa-cogs"></i></span> Services
            </a>
            <ul>
              <li><a href="#">S01 - Firmware</a></li>
              <li><a href="#">S02 - Sandbox</a></li>
              <li><a href="#">S03 - Image Manipulator</a></li>
              <li><a href="#">S04 - Code Runner</a></li>
              <li><a href="#">S05 - Crypto</a></li>
              <li><a href="#">S06 - Hades</a></li>
              <li><a href="#">S07 - Exif Reader</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in">
    <component :is="selected"></component>
    </transition>
  </div><!-- columns -->
</div> <!-- end container -->
</template>

<script>
import ScoreboardContent from './scoreboard/Content.vue'
import SubmitContent from './submit-flag/Content.vue'
import RulesContent from './rules-guide/Content.vue'

export default{
  data(){
    return{
      selected:'scoreboard-content'
    }
  },
  methods:{
    changeComponent(val){
      if(val == 'scoreboard') this.selected = 'scoreboard-content'
      if(val == 'submit-flag') this.selected = 'submit-content'
      if(val == 'rules-guide') this.selected = 'rules-content'
    }
  },
  components:{
    ScoreboardContent,
    SubmitContent,
    RulesContent
  }
}
</script>
<style>
.pr-10{padding-right:10px;}
.table th{text-align:center!important;}
.table td{text-align:center!important;}
.table thead{border-top:solid 2px rgb(229, 229, 229)!important;}
.tabs li.is-active a{background-color:#3273dc!important;color:#fff;}
.sticky	{position: sticky;top: 0;}
</style>
