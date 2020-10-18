<template>
  <div class="app frame">
    <form class="form-user">
      <h1 class="title">Github <span>Search</span></h1>
        <input class="form-field shadow" type="text" v-model="userLogin">
        <button class="btn shadow bg-primary-color" type="button" @click="sendUser"> lupa</button>
    </form>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    sendUser() {
      this.axios.get(`https://api.github.com/users/${this.userLogin}`)
      .then((datos) => {
        const user = datos.data;
        this.userAvatar = user.avatar_url;
        this.userName = user.name;
        this.userLogin = user.login;
        this.userFollowers = user.followers;
        this.userBio = user.bio;
      })
      .catch((error) => {
        console.log(error);
        this.$router.push('/not-found')
      })
      this.axios.get(`https://api.github.com/users/${this.userLogin}/repos`)
      .then((datos) => {
        const repos = datos.data;
        this.userRepos = repos;
        this.$router.push('/details')
      })
    }
  },
  data() {
    return {
      userAvatar: '',
      userName: '',
      userLogin: '',
      userFollowers: '',
      userEmail:'',
      userBio: '',
      userRepos: [],
    }
  }
}
</script>
<style>
h1 {
  color: #000;
  font-weight: 400;  
}
.app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
.frame {
  border: 2px dashed #eeeeee;
  position: relative;
  padding: 50px;
}
.frame:before {
  content: " ";
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 1px solid #409af8;
  outline: 1px solid #bcb5b9;
}
.primary-color {
  color: #ab53f2;
}
.bg-primary-color {
  background-color: #ab53f2;
}
a {
  color: #ab53f2;
}
.title {
	font-family: Consolas,monaco,monospace; 
}
.title span{
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
.form-field {
  width: 90%;
  height: 40px;
  border: 0;
  border-radius: 4px 0px 0px 4px;
  box-shadow: 5px 10px #888888;
}
.btn {
  height: 40px;
  color: #fff;
  border: 0;
  border-radius: 0px 4px 4px 0px;
}
.shadow {
 box-shadow: 0px 0px 9px 0px rgba(170,170,170,1);
}
</style>
