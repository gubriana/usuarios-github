<template>
  <div>
    <ul>
      <li class="user">
        <img class="img-avatar" :src="userAvatar" alt="">
        <h1>{{userName}}</h1>
        <p class="user-name"> {{userLogin}}</p>
        <p>Seguidores: {{userFollowers}}</p>
        <p>Email: {{userEmail}}</p>
        <p>Bio: {{userBio}}</p>
      </li>
      <li class="repos">
        <div class="repo" v-for="(repo,i) in userRepos" :key="i">
          <h1 class="primary"><a>{{userRepos[i].name}}</a></h1> 
          <p>{{userRepos[i].description}}</p>
        </div>
      </li>
    </ul>

    <p>{{ count }}</p>

  </div>
</template>
<script>
export default {
  name: 'Details',
  props: {
    userAvatar: String,
    userName: String,
    userLogin: String,
    userFollowers: String,
    userEmail: String,
    userBio: String,
    userRepos: Array,
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>
<style scoped>
.user {
  width:30%;
  display:inline-block;
}
.repos {
  width:70%;
  display:inline-block;
}
.user-name {
  padding-bottom: 20px;
}
p {
  color:#888888;
}
.img-avatar {
  max-width: 90%;
}
ul li {
  display:inline;
  vertical-align:top;
}
</style>
