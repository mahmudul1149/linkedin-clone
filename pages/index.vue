<template>
  <div class="signup">
    <div v-if="isLoading" class="loading">
      <img src="../assets/image/linkedin_loder.gif" alt="" />
    </div>
    <div v-else class="input-group container">
      <div class="text-center">
        <h1>
          Linked
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0A66C2"
            class="mercado-match"
            width="40"
            height="40"
            focusable="false"
          >
            <path
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
            ></path>
          </svg>
        </h1>
      </div>
      <form @submit.prevent="registerUser" action="#">
        <input
          type="text"
          name=""
          id=""
          placeholder="Full Name"
          v-model="user.username"
          required
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          v-model="user.email"
          required
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          v-model="user.password"
          required
        />
        <button class="btn-secondery" type="submit">Agree & Join</button>
      </form>
      <p>Already on LinkedIn?<nuxt-link to="/signin"> Sign in</nuxt-link></p>
    </div>
  </div>
</template>

<script>
import { register } from "../service/firebaseService";

export default {
  data() {
    return {
      // make the data for the form reactive
      user: {
        username: "",
        email: "",
        password: "",
      },
      // handle loading state.
      isLoading: false,
    };
  },
  methods: {
    // action to be performed when the register form is submitted

    registerUser() {
      this.isLoading = true;
      localStorage.setItem("users", JSON.stringify(this.user));
      register(this.user.username, this.user.email, this.user.password)
        .then((user) => {
          // commit the mutation
          this.$store.commit("setUser", user);
        })
        .then(() => {
          // Go to the home page after loggin in.
          this.$router.push("/feed");
        })
        .catch((err) => {
          alert("error");
          this.$router.push("/");
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: auto;
}

.text-center {
  text-align: center;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.signup {
  background: #f3f2ef;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
}
.signup .input-group {
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 10px;
}

.signup .input-group input {
  display: block;
  width: 400px;
  outline: none;
  border: 1.5px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1rem 0.6rem;
  margin-bottom: 0.7rem;
}
.signup .input-group input:hover {
  box-shadow: 0 0 5px #0a66c2;
}
.btn-secondery {
  transition: 0.5s ease-in;
  cursor: pointer;
  width: 100%;
  background: #0a66c2;
  padding: 0.5rem;
  color: white;
  border-radius: 35px;
  letter-spacing: 0.2mm;
  padding: 1rem 0.6rem;
  font-size: 1.2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.btn-secondery:hover {
  background: rgb(72, 72, 250);
}

.signup p {
  margin-top: 1rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
}

.signup a {
  color: #0a66c2;
}

.signup a:hover {
  text-decoration: underline;
}

.signup h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem;
  color: #333;
  font-size: 2.3rem;
  font-weight: 800;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
