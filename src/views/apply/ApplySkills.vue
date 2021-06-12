<template>
  <div class="apply-skills">
    <NavMenuHome />
    <div class="apply-skills-container">
      <div class="apply-skills-titlecard">
        <h1>{{ $t('apply.titleSkills') }}</h1>
        <span class="apply-skills-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('apply.subtitleSkills') }}
      <hr>
      <br>
      <v-form v-model="isFormValid" @click.prevent>
        <div v-for="(item, i) in Omerits" :key="item._id" class="apply-skills-tfdiv">
          <label class="apply-skills-label"> {{ item.title }} </label>
          <label class="apply-skills-desc"> {{ item.description }} </label>
          <DateField v-model="ODates[i]" :label="$t('apply.date')"
                     class="apply-skills-field"
                     :max-date="new Date().toISOString()"
          />
          <TextField v-model="OGrades[i]" placeholder="0-10"
                     type="number"
                     :rules="[rules.max]"
                     :label="$t('apply.grade')"
                     class="apply-skills-field"
          />
          <Input id="fileUpload" class="apply-skills-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-for="(item, i) in Emerits" :key="item._id" class="apply-skills-tfdiv">
          <label class="apply-skills-label"> {{ item.title }} </label>
          <label class="apply-skills-desc"> {{ item.description }} </label>
          <TextField v-model="ECompanies[i]" :label="$t('create.company')"
                     class="apply-skills-field"
                     :rules="[rules.counter]"
          />
          <TextField v-model="ETime[i]"
                     type="number"
                     :rules="[rules.negative]"
                     :label="$t('apply.time')"
                     :placeholder="$t('apply.months')"
                     class="apply-skills-field"
          />
          <TextArea v-model="EDesc[i]" :label="$t('create.description')" :rules="[rules.counterDesc]" />
        </div>
        <div v-for="(item, i) in Pmerits" :key="item._id" class="apply-skills-tfdiv">
          <label class="apply-skills-label"> {{ item.title }} </label>
          <label class="apply-skills-desc"> {{ item.description }} </label>
          <TextArea v-model="PDesc[i]" :label="$t('create.description')" :rules="[rules.counterDesc]" />
          <Input id="fileUpload" class="apply-skills-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-for="(item, i) in Kmerits" :key="item._id" class="apply-skills-tfdiv">
          <label class="apply-skills-label"> {{ item.title }} </label>
          <label class="apply-skills-desc"> {{ item.description }} </label>
          <DateField v-model="KDates[i]" :label="$t('apply.date')"
                     class="apply-skills-field"
                     :max-date="new Date().toISOString()"
          />
          <TextField v-model="KGrades[i]" placeholder="0-10"
                     type="number"
                     :rules="[rules.max]"
                     :label="$t('apply.grade')"
                     class="apply-skills-field"
          />
          <Input id="fileUpload" class="apply-skills-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
      </v-form>
      <div class="apply-skills-div-button">
        <Button terciary class="apply-skills-button" @click="toRequirements">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary class="apply-skills-button"
                :disabled="!isFormValid"
                @click="toExtra"
        >
          {{ $t('buttons.continue') }}
        </Button>
      </div>
    </div>
    <img class="apply-skills-img" src="@/assets/images/skills.svg">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import NavMenuHome from '@/components/NavMenu/NavMenuHome.vue'
import TextField from '@/components/TextField.vue'
import DateField from '@/components/DateField.vue'
import TextArea from '@/components/TextArea.vue'
import ParticipationDTO from '@/api/models/Participation'

export default Vue.extend({
  name: 'ApplySkills',
  components: {
    Button,
    NavMenuHome,
    Input,
    DateField,
    TextField,
    TextArea
  },
  data () {
    return {
      // Received Arrays
      Omerits: [] as any,
      Emerits: [] as any,
      Pmerits: [] as any,
      Kmerits: [] as any,
      // Arrays to send
      OGrades: [] as any,
      ODates: [] as any,
      EDesc: [] as any,
      ECompanies: [] as any,
      ETime: [] as any,
      PDesc: [] as any,
      KGrades: [] as any,
      KDates: [] as any,
      isFormValid: false,
      rules: {
        counter: (value: any) => value.length <= 40 || this.$t('validations.max40'),
        counterDesc: (value: any) => value.length <= 200 || this.$t('validations.max200'),
        max: (value: any) => (value <= 10 && value >= 0) || this.$t('validations.between010'),
        negative: (value: any) => (value >= 0) || this.$t('validations.positive')
      }
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    const contest = this.$store.getters['session/contestItem']
    this.Omerits = contest?.item?.skills?.OMerit
    this.Emerits = contest?.item?.skills?.EMerit
    this.Pmerits = contest?.item?.skills?.PMerit
    this.Kmerits = contest?.item?.skills?.KMerit
  },
  methods: {
    toRequirements () {
      this.$router.push('/apply/requirements').catch((err: string) => { return err })
    },
    toExtra () {
      const OMerit: Array<{grade: number; date: string; file: string}> = new Array(0)
      for (let i = 0; i < this.OGrades.length; i++) {
        OMerit.push({ grade: +this.OGrades[i], date: this.ODates[i]?.split('-').join('/'), file: '' })
      }
      const EMerit: Array<{time: number; description: string; company: string}> = new Array(0)
      for (let i = 0; i < this.OGrades.length; i++) {
        EMerit.push({ time: +this.ETime[i], description: this.EDesc[i], company: this.ECompanies[i] })
      }
      const PMerit: Array<{description: string; file: string}> = new Array(0)
      for (let i = 0; i < this.PDesc.length; i++) {
        PMerit.push({ description: this.PDesc[i], file: '' })
      }
      const KMerit: Array<{grade: number; date: string; file: string}> = new Array(0)
      for (let i = 0; i < this.KGrades.length; i++) {
        KMerit.push({ grade: +this.KGrades[i], date: this.KDates[i]?.split('-').join('/'), file: '' })
      }
      const participation: ParticipationDTO = {
        skills: {
          OMerit,
          EMerit,
          PMerit,
          KMerit
        }
      }
      this.$store.dispatch('session/updateParticipation', { participation })
      this.$router.push('/apply/extra').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.applySkills')
      })
    },
    chooseFiles () {
      const aux = document.getElementById('fileUpload')
      if (aux) aux.click()
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.apply-skills{
  z-index: 2;
  max-width: 100%;
  width: 100%;
  background: inherit;
  min-height: 100vh;
  color:$primary-color;
  font-size: 12px;
  height: 100%;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 6em 1em;
}
.apply-skills-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:2em 3em;
}
.apply-skills-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.apply-skills-info{
  user-select: none;
  font-size: 18px;
  cursor:pointer;
  margin-left: auto;
  min-width: 90px;
  text-align: right;
  &:active{
    color: #fff
  }
}
.apply-skills-field{
  height:100px;
  &.area {
    height:130px;
  }
}
.apply-skills-input{
  margin-top:.9em;
}
.apply-skills-label{
  font-size: 17px;
  font-weight: 600;
  color:$primary-color;
}
.apply-skills-desc{
  font-size: 14px;
  font-weight: 600;
  margin-bottom:.8em;
  color:gray;
}
.apply-skills-minus{
  margin-top:14px;
}
.apply-skills-tfdiv{
  display:flex;
  flex-direction: column;
  max-width:400px;
  margin:2em 0em;
  overflow: hidden;
}
::v-deep
.v-select__slot{
  overflow:hidden;
}
.apply-skills-div-button {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .apply-skills-button {
    width:100% !important;
    margin-bottom: 2em;
  }
.apply-skills-span{
  margin-left: auto;
  height:80px;
  min-width:150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.apply-skills-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:17%;
  left:50%;
}
@media (min-width: 580px) {
  .apply-skills{
    padding: 1em 8em;
  }
  .apply-skills-div-button{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    :nth-child(1) {
    margin-right: 3em ;
  }
  }
    .apply-skills-button {
    width: 160px !important;
  }
}
@media (min-width: 1100px) {
  .tf-div.apply-skills-label{
    width:40%;
  }.apply-skills-img{
    display: block;
  }
}
@media (min-width: 1500px) {
  .apply-skills-img{
    height: 30rem;
  }
}
</style>
