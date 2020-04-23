<template>
  <div class="container">
    <section style="margin:5% 29% 0 29%;">
      <div class="has-text-centered">
        <img src="static/images/logo.jpg" style="height:250px;margin-bottom:1%;">
      </div>
      <div class="box">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" placeholder="Username">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Password">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <router-link to="/home" class="button is-link is-fullwidth">Login</router-link>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>
