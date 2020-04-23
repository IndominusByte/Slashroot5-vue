<template>
<div class="column is-10">
<div class="box" style="margin-top:1%;">
  <div class="columns has-text-centered">
  <div class="column">
    <p class="has-text-weight-bold">Games ends in</p>
    01:54:23
  </div>
  <div class="column">
    <p class="has-text-weight-bold">Current Tick</p>
    09
  </div>
  <div class="column">
    <p class="has-text-weight-bold">Next tick about</p>
    02:54
  </div>
</div>
</div>
 <div class="box">
    <p class="is-size-4 has-text-weight-bold" style="margin-bottom:1%">Full Scoreboard</p>
    <table class="table is-fullwidth is-hoverable">
    <thead>
      <tr>
        <th>#</th>
        <th>Team ID</th>
        <th>Team Name</th>
        <th>S01</th>
        <th>S02</th>
        <th>S03</th>
        <th>S04</th>
        <th>S05</th>
        <th>S06</th>
        <th>S07</th>
        <th>Attack Pts</th>
        <th>Defense Pts</th>
        <th>Total Pts</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="n in 10" :key="n">
        <th>{{n}}</th>
        <td>T{{n}}</td>
        <td>mentimun_mentah</td>
        <td>0/0</td>
        <td>0/0</td>
        <td>0/0</td>
        <td>0/0</td>
        <td>0/0</td>
        <td>0/0</td>
        <td>0/0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
    </tbody>
  </table>
</div><!-- box -->

<div class="box">
  <p class="is-size-4 has-text-weight-bold" style="margin-bottom:1%;">Per Round Scoreboard</p>
  <div class="tabs is-centered is-boxed">
    <ul>
      <li :class="active_tab == n ? 'is-active' : '' " v-for="n in 9" :key="n">
        <a @click="changetab(n)">
          <span>R0{{n}}</span>
        </a>
      </li>
    </ul>
  </div>
  <table class="table is-fullwidth is-hoverable">
  <thead>
    <tr>
      <th>#</th>
      <th>Team ID</th>
      <th>Team Name</th>
      <th>S01</th>
      <th>S02</th>
      <th>S03</th>
      <th>S04</th>
      <th>S05</th>
      <th>S06</th>
      <th>S07</th>
      <th>Attack Pts</th>
      <th>Defense Pts</th>
      <th>Total Pts</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="n in 10" :key="n">
      <th>{{n}}</th>
      <td>T{{n}}</td>
      <td>mentimun_mentah</td>
      <td>0/0</td>
      <td>0/0</td>
      <td>0/0</td>
      <td>0/0</td>
      <td>0/0</td>
      <td>0/0</td>
      <td>0/0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div><!-- box -->
</div><!-- column -->
</template>

<script>
export default{
  data(){
    return{
      active_tab:9
    }
  },
  methods:{
    changetab(n){
      this.active_tab = n
    },
  }
}
</script>
