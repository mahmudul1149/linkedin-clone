<template>
  <div class=" mt-2 mb-2 fixed-position">
    <div class="box dark-shadow">
      <div class="background">
        <div class="image-div">
            <h3>{{ user.displayName | liveSubstr }}</h3>
        </div>
      </div>
      <div class="content">
        <div class="title-box">
          <a href="#">{{ user.displayName }}</a>
          <br />
          <span>{{ user.email }} </span>
        </div>
        <div class="border-box">
          <div class="connection-box">
            <div>
              <div class="box">
                <a href="#">Connections</a>
                <br />
                <a href="#" class="connection">Connection With almuni</a>
              </div>
            </div>
            <span>9</span>
          </div>
        </div>
        <div class="tools">
          <div class="hover-tool">
            <span class="tool">Access exclusive tools & insigts</span>
            <div class="box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                class="mercado-match" width="24" height="24" focusable="false">
                <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e">
                </path>
                <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"></path>
              </svg>
              <a href="#">Get Hired Faster Try <br />
                Premium Free</a>
            </div>
          </div>
          <div class="items">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor"
              width="16" height="16" focusable="false">
              <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
            </svg>
            <span>My items</span>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="groups">
        <ul>
          <li><a href="#">Follow</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#"> Followed HashTags</a></li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#333"
          class="mercado-match add-icon" width="16" height="16" focusable="false">
          <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
        </svg>
      </div>
      <div class="btn-center  ">
        <button class="btn-dark">Discover more</button>
      </div>
    </div>
   
  </div>
</template>

<script>

export default {

  data() {
    return {
        user: {
        displayName: '',
        email: '',
        password: ''
      },
    }
  },
 computed: {
      // user() {
      //   return this.$store.state.user
      // },
      isAuthenticated() {
        return this.$store.state.user.hasOwnProperty('id')
      }
    },
     filters: {
  
  	liveSubstr: function(string) {
    	return string.substring(0,1).toLowerCase();
        }
  
  },
    mounted() {
    const loaded = JSON.parse(localStorage.getItem("users"));
    if (loaded) {
      this.user.email = loaded.email;
      this.user.displayName = loaded.username;
    } else {
      console.log("ddd");
    }
  },


}
</script>

<style>
.background {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 120px;
  background-image: linear-gradient(#a0b4b7, #bfd3d6);
  position: relative;
}
.fixed-position {
  position: fixed;
  top: 4.5rem;
  bottom: 0; 
 width: 250px;
}

.mt-2 {
  margin-top: 2rem;
}
.image-div{
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background: #BDBDBD;
  color: white !important;
  font-weight: bolder;
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
}
.image-div h3 {
  font-size: 1.3rem;
}

.flex-container .content {
  background: #fff;
}

.flex-container .left-sidebar .dark-shadow {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.flex-container .title-box {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.flex-container .content .title-box a {
  padding: 0.7rem 0;
  font-size: 1rem;
  color: #333;
  font-weight: bolder;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.flex-container .content .title-box a:hover {
  text-decoration: underline;
}

.flex-container .content .title-box span {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #535353;
}

.flex-container .connection-box {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}

.flex-container .connection-box .box a {
  font-size: 0.9rem;
  color: rgb(95, 88, 88);
}

.flex-container .connection-box .box .connection {
  font-weight: bolder;
  color: #333;
}

.flex-container .connection-box span {
  color: blue;
}

.flex-container .connection-box:hover {
  background: #ebebeb;
}

.border-box {
  padding: 0.7rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.tools .box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}

.tools .hover-tool:hover {
  background: #ebebeb;
}

.tools .box a {
  text-decoration: underline;
  color: #333;
  font-size: 0.8rem;
  font-weight: 800;
}

.details .groups {
  position: relative;
  padding: 0.4rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: white;
}

.details {
  margin-top: 0.5rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

}

.details .groups .add-icon {
  position: absolute;
  top: 50%;
  right: 5px;
  font-size: 1.3rem;
}

.details .groups ul li {
  display: inline-flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0.4rem 0;
}

.details .groups ul li:hover {
  text-decoration: underline;
}

.details .groups ul li a {
  color: rgb(1, 128, 255);
  font-size: 0.9rem;
}

.tools {
  /* padding: 0.5rem; */
  border: 1px solid rgba(0, 0, 0, 0.1);

}

.tools .items {
  margin-top: 0.4rem;
  padding: 0.7rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border-top: 1px solid rgba(90, 88, 88, 0.3);

}

.tools .items:hover {
  background: #ebebeb;
}

.tool {
  color: #696e6e;
  font-size: 0.8rem;
  padding: 0.5rem;
}

.btn-center {
  text-align: center;
}

.btn-dark {
  width: 100%;
  cursor: pointer;
  border: none;
  background: #fff;
  color: #858585;
  padding: 0.7rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
@media screen and (max-width: 1100px) {
  .fixed-position {
      width: 170px;
  }
    .right-sidebar {
    display: none;
  }
  .main{
    margin-left: 
    10% !important;
    width: 600px;
  }
}
@media screen and (max-width: 900px) {


  .main {
  
   margin: 1rem 0 !important;
  }

  /* .left-sidebar {
    padding-left: 3rem;
  } */
  .flex-container {
    grid-template-columns:  1fr;
    width: 100%;

    
}
 .fixed-position {
    position: inherit;
    width: 100% !important;
  }
}
@media screen and (max-width: 400px)  {
   .left-sidebar {
    width: 300px;
    margin: auto !important;
   }
   .main {
    width: 300px !important;
    margin: auto !important;
   }
   .artdeco-button__text {
      display: none;
   }
.artdeco-button__text {
  display: none;
}
.signup .input-group input  {
  width: 300px !important;
  background: white;
}
.signin .input-group input  {
  width: 300px !important;
}
.mb-2 {
  margin-bottom: 1rem !important;
}
.btn-text {
  display: none;
}
}

</style>