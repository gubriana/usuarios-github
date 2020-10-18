<template>
  <div>
    <form class="form-user">
      <h1 class="title">Github <span>Search</span></h1>
        <input class="form-field shadow" type="text" v-model="userLogin">
        <button class="btn shadow bg-primary-color" type="button" @click="sendUser"> lupa</button>
    </form>
   <!--  <div>
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
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'Login',
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
<style scoped>
.title {
	font-family: Consolas, monaco, monospace; 
  display: inline;
  padding-right: 30px;
}
.title span{
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
.form-user {
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
</style>