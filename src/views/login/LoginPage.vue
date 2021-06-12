<template>
  <div class="login-div">
    <div :class="{'container sign-up-mode' : signUpMode , 'container' : !signUpMode}">
      <div class="forms-container">
        <BlueBall big class="ball1" />
        <BlueBall medium class="ball2" />
        <BlueBall small class="ball3" />
        <div class="signin-signup">
          <form id="app" class="sign-in-form" @click.prevent>
            <h2 class="titles">
              {{ $t('login.title') }}
            </h2>
            <div :class="{ 'input-field inv' : emailInvalid, 'input-field' : !emailInvalid }">
              <i class="fas fa-envelope" />
              <input v-model="email" type="email"
                     :placeholder="$t('register.email')"
                     @input="validateEmail()"
              >
            </div>
            <div :class="{ 'input-field inv' : passInvalid, 'input-field' : !passInvalid }">
              <i class="fas fa-lock" />
              <input v-model="password" type="password"
                     :placeholder="$t('register.password')"
                     @input="validatePass()"
              >
            </div>
            <div class="form-buttons">
              <Button primary
                      :disabled="handleLogin()"
                      @click="onLogin()"
              >
                {{ $t('login.title') }}
              </Button>
            </div>
            <p class="social-text">
              {{ $t('login.social') }}
            </p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter" />
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google" />
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
          <form class="sign-up-form" @click.prevent>
            <h2 class="titles">
              {{ $t('register.title') }}
            </h2>
            <div :class="{ 'input-field inv' : emailRegisterInvalid, 'input-field' : !emailRegisterInvalid }">
              <i class="fas fa-envelope" />
              <input v-model="emailRegister" type="email"
                     :placeholder="$t('register.email')"
                     @input="validateEmailRegister()"
              >
            </div>
            <div :class="{ 'input-field inv' : passRegisterInvalid, 'input-field' : !passRegisterInvalid }">
              <i class="fas fa-lock" />
              <input v-model="passwordRegister" type="password"
                     :placeholder="$t('register.password')"
                     @input="validatePassRegister()"
              >
            </div>
            <div class="form-buttons">
              <Button primary :disabled="handleRegister()" @click="onRegister()">
                {{ $t('buttons.signup') }}
              </Button>
            </div>
            <p class="social-text">
              {{ $t('register.social') }}
            </p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter" />
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google" />
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>{{ $t('login.new') }}</h3>
            <p>
              {{ $t('login.newSubtitle') }}
            </p>
            <div class="transparent-div">
              <Button id="sign-up-btn" secondary
                      @click="signUpMode = !signUpMode"
              >
                {{ $t('buttons.register') }}
              </Button>
            </div>
          </div>
          <img src="@/assets/images/lost.svg" class="image" alt="lost-person">
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>{{ $t('register.new') }}</h3>
            <p>
              {{ $t('register.newSubtitle') }}
            </p>
            <div class="transparent-div">
              <Button id="sign-in-btn"
                      secondary @click="signUpMode = !signUpMode"
              >
                {{ $t('buttons.login') }}
              </Button>
            </div>
          </div>
          <img src="@/assets/images/team.svg" class="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import BlueBall from '@/components/BlueBall.vue'
import { validateEmail } from '@/utils/validations'
import { API } from '@/api/index.ts'
export default {
  name: 'LoginPage',
  components: {
    Button,
    BlueBall
  },
  data () {
    return {
      signUpMode: false,
      password: '',
      email: '',
      passwordRegister: '',
      emailRegister: '',
      emailInvalid: false,
      passInvalid: false,
      passRegisterInvalid: false,
      emailRegisterInvalid: false
    }
  },
  methods: {
    validateEmail () {
      if (!validateEmail(this.email)) {
        this.emailInvalid = true
      } else {
        this.emailInvalid = false
      }
    },
    validatePass () {
      if (this.password.length < 6) {
        this.passInvalid = true
      } else {
        this.passInvalid = false
      }
    },
    validateEmailRegister () {
      if (!validateEmail(this.emailRegister)) {
        this.emailRegisterInvalid = true
      } else {
        this.emailRegisterInvalid = false
      }
    },
    validatePassRegister () {
      if (this.passwordRegister.length < 6) {
        this.passRegisterInvalid = true
      } else {
        this.passRegisterInvalid = false
      }
    },
    async onLogin () {
      this.$store.dispatch('ui/showMask', {
        text: this.$t('main.retrievingData')
      })
      try {
        const resp = await API.user.login(this.email, this.password)
        if (resp?.status === 200) {
          resp?.data?.token ? window.localStorage.setItem('tokenClient', JSON.stringify(resp.data.token)) : console.log('Error saving login credentials')
          this.$router.push('/dashboard').catch((err) => { return err })
        } else {
          console.log(resp)
          this.$router.push({
            name: 'Error404',
            params: {
              errorType: 'Login error'
            }
          }).catch((err) => { return err })
        }
      } catch (err) {
        console.log(err)
        this.$router.push({
          name: 'Error404',
          params: {
            errorType: 'Invalid credentials'
          }
        }).catch((err) => { return err })
      } finally {
        this.$store.dispatch('ui/hideMask')
      }
    },
    async onRegister () {
      this.$store.dispatch('ui/showMask', {
        text: this.$t('main.retrievingData')
      })
      try {
        const resp = await API.user.register(this.emailRegister, this.passwordRegister)
        if (resp?.status === 201) {
          resp?.data?.token ? window.localStorage.setItem('tokenClient', JSON.stringify(resp.data.token)) : console.log('Error saving login credentials')
          this.$router.push('/dashboard').catch((err) => { return err })
        } else {
          this.$router.push({
            name: 'Error404',
            params: {
              errorType: 'Login error'
            }
          }).catch((err) => { return err })
        }
      } catch (err) {
        console.log(err)
        this.$router.push({
          name: 'Error404',
          params: {
            errorType: 'Login error'
          }
        }).catch((err) => { return err })
      } finally {
        this.$store.dispatch('ui/hideMask')
      }
    },
    handleLogin () {
      if (!this.email || !this.password) {
        return true
      } if (this.emailInvalid || this.passInvalid) {
        return true
      } else return false
    },
    handleRegister () {
      if (!this.emailRegister || !this.passwordRegister) {
        return true
      } if (this.emailRegisterInvalid || this.passRegisterInvalid) {
        return true
      } else return false
    }
  }
}

</script>

<style lang="scss" scoped>

$primary-color: #4974a5;
.login-div,
input {
  font-family: "Poppins", sans-serif;
}

.container {
  position: relative;
  max-width: 100%;
  width: 100%;
  background: inherit;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 35%;
  height: 55%;
  min-height: 440px;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.ball1{
  top: 26%;
  transform: translate(-50%, -50%);
  left: 90%;
  transition: 1.2s 0.6s ease-in-out;
}
.ball2{
  top: 36%;
  left: 49%;
  transform: translate(-50%, -50%);
  transition: 1.2s 0.6s ease-in-out;
}
.ball3{
  top: 79%;
  left: 89%;
  transform: translate(-50%, -50%);
  transition: 1.2s 0.6s ease-in-out;
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.titles {
  font-size: 2.2rem !important;
  color: rgb(46, 44, 44);
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
  border:none;
  &.inv {
    border: 1px solid red;
  }
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  height: 55px;
  width: 260px;
  align-items: center;
  justify-content: space-around;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  &:active{
        transform: scale(1.12);
      }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:transparent;
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 0%;
    border-radius: 50rem;
    background-size: 400% 400%;
    background-position: 0 0;
    background-image: linear-gradient(to left, rgba(2,0,36,1) 0%, rgba(29,44,85,1) 0%, rgba(73,116,165,1) 100%);
    transition: all .3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    background: none;
    border: 2px solid #fff;
    &:before {
      width: 100%;
      height: 100%;
    }
  }
}

// .social-icon:hover {
//   color:  #4974a5;
//   border-color:  #4974a5;
//   height: 49px;
//   width: 48px;
// }
.form-buttons{
  width: 100%;
  text-align: center;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  overflow: hidden;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #4974a5;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}
.transparent-div{
  height:55px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-panel .image,
.right-panel .content {
  transform: translateX(100vh);
}

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-100vh);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}
.container.sign-up-mode .ball1{
  left: 36%;
  top: 82%;
}
.container.sign-up-mode .ball2{
   left: 43%;
  top: 23%;
}
.container.sign-up-mode .ball3{
  left: 11%;
  top: 9%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 970px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }
  .ball1, .ball2, .ball3{
    display:none;
  }
  .signin-signup {
    width: 80%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }
 .moon, .sun{
  display:none
  }
  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
</style>
