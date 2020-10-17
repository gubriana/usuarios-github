<template>
  <div>
    <h1 class="title">Github <span>Search</span></h1>
    <form>
      <div class="form-group">
        <input class="form-field shadow" type="text">
        <button class="btn shadow bg-primary-color" type="submit"> lupa</button>
      </div>
    </form>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
	font-family: Consolas,monaco,monospace; 
}
.title span{
  font-family: Montserrat, Helvetica, Arial, sans-serif;
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
