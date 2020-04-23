<template>
<div class="column is-10">
  <h1 class="is-size-5 has-text-weight-semibold" style="margin-top:25px!important;margin-bottom:6px!important;">Team Information</h1>
  <hr style="border:solid 1px rgb(229, 229, 229)!important;margin:0px!important;"/>
  <div class="columns" style="margin-top:1%!important;">
    <div class="column">
      <span>Team ID: 
        <span class="tag">
          T01
        </span>
      </span>
    </div>
    <div class="column">
      <span>Team Name: 
        <span class="tag">
          mentimun_mentah
        </span>
      </span>
    </div><!--/column-->
  </div><!--/columns-->
  <hr style="border:solid 1px rgb(229, 229, 229)!important;margin:0px!important;"/>
  <h1 class="is-size-5 has-text-weight-semibold" style="margin-top:10px!important;margin-bottom:6px!important;">Attacker History</h1>
  <div class="box" style="overflow-y:auto;height:18%;">
    <ul class="submission" style="list-style-type:circle;margin-left:2%;">
      <li v-for="n in 10" :key="n">(2020-10-12 14:32) <span class="has-text-weight-semibold">Airavata</span> has stolen your flag.</li>
    </ul>
  </div>
  <div class="columns">
    <div class="column is-half">
      <div class="box">
        <p>
        Copy paste the below token to cookie x-flagger-token to share your current session with others. The token is a JWT token, reflecting current session that you have
        </p>
        <pre style="margin-top:10px!important;white-space:pre-wrap;word-break:break-word;">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODcxOTE0NTAsIm5iZiI6MTU4NzE5MTQ1MCwianRpIjoiNjg3ZDk3ZTAtYjUzYi00ZTI0LThhZDQtYWNjNzIxMTg0NzViIiwiZXhwIjoxNTg3MTkyMzUwLCJpZGVudGl0eSI6NCwiZnJlc2giOnRydWUsInR5cGUiOiJhY2Nlc3MifQ.ZTDpZvnrtmS3mp2PrMuK7rAfxc1J8z8WVIp9_KPduL0</pre>
      </div>
    </div>
    <div class="column is-half">
      <div class="box">
        <div class="content">
          <h1>Submit Flag</h1>
          <p >Submit all flags here</p>
          <p class="has-text-weight-semibold">
            Current Round / Tick:
            <span class="tag">
              R09
            </span>
          </p>
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Flag">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link is-capitalized is-fullwidth">submit</button>
            </div>
          </div>
        </div>
      </div>
    </div><!--/column-->
  </div><!--/columns-->
    <h1 class="is-size-5">Unlocked services</h1>
    <p class="is-italic" style="margin-top:4px;">There is no unlocked service yet!</p>
 </div>
</template>

<style>
ul.submission > li:not(:first-child){
  margin-top:5px;
}
</style>
