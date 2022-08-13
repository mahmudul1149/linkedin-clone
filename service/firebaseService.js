import firebase from "firebase/compat/app"
import "firebase/compat/auth";
export async function register(username, email, password) {
    try {
      // create user using the email and password
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
      // update the user to add his username
      await response.user.updateProfile({
        displayName: username,
        email: email,
      })
  
      return response.user
    } catch (error) {
      // alert any error that occurred in the process
      this.$router.push('/')
    }
  }

  export async function login(username, email, password) {
    try {
      // log in using email and password
      const response = await firebase.auth().signInWithEmailAndPassword(username, email, password)
      // return the currently logged in user.
      await response.user.updateProfile({
        displayName: username,
        email: email,
      })
      return response.user
    } catch (error) {
      alert(error);
      this.$router.push('/signin')
    }
  }

  export async function logout () {
    await firebase.auth().signOut()
  }


 