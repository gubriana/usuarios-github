<template>
  <div>
    <form>
      <h1 class="title">Github <span>Search</span></h1>
        <input class="form-field shadow" type="text" v-model="userLogin">
        <button class="btn shadow bg-primary-color" type="button" @click="sendUser"> lupa</button>
    </form>
    <div>
      <ul>
        <li class="user">
          <img class="img-avatar" :src="userAvatar" alt="">
          <h1>{{userName}}</h1>
          <p class="user-name"> {{userLogin}}</p>
          <p>Followers: {{numFollowers}}</p>
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'Details',
  data() {
    return {
      userAvatar: '',
      userName: '',
      userLogin: '',
      numFollowers: '',
      userEmail:'',
      userBio: '',
      userRepos: [],
    }
  },
  methods: {
    sendUser() {
      this.axios.get(`https://api.github.com/users/${this.userLogin}`)
      .then((datos) => {
        const user = datos.data;
        this.userAvatar = user.avatar_url;
        this.userName = user.name;
        this.userLogin = user.login;
        this.numFollowers = user.followers;
        this.userBio = user.bio;
        
      })
      .catch((error) => {
        alert(error);
      })
      this.axios.get(`https://api.github.com/users/${this.userLogin}/repos`)
      .then((datos) => {
        const repos = datos.data;
        this.userRepos = repos;
      })
    }
  }
}
</script>
<style scoped>
.title {
	font-family: Consolas, monaco, monospace; 
  display: inline;
  padding-right: 30px;
}
.title span{
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
form {
  width: 100%;
}
.form-field {
  width: 100vh;
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
ul li {
  display:inline;
  vertical-align:top;

}
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
</style>