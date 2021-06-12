<template>
  <div class="apply-extra">
    <NavMenuHome />
    <div class="apply-extra-container">
      <div class="apply-extra-titlecard">
        <h1>{{ $t('apply.titleExtra') }}</h1>
        <span class="apply-extra-info" @click="openDialog"><i class="fas fa-info-circle "> info</i></span>
      </div>
      {{ $t('apply.subtitleExtra') }}
      <hr>
      <br>
      <div>
        <div class="apply-extra-tfdiv">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="OMTitle1" :label="$t('merits.official')" class="apply-extra-tf" />
            <AddButton plus :disabled="count==3" @click="duplicateRow" />
          </div>
          <DateField v-model="OMDate1" :label="$t('apply.date')"
                     class="apply-extra-field"
                     :max-date="new Date().toISOString()"
          />
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="OMGrade1" placeholder="0-10"
                       type="number"
                       :rules="[rules.max]"
                       :label="$t('apply.grade')"
                       class="apply-extra-field"
            />
          </v-form>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="count >= 1" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="OMTitle2" :label="$t('merits.official')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRow" />
          </div>
          <DateField v-model="OMDate2" :label="$t('apply.date')"
                     class="apply-extra-field"
                     :max-date="new Date().toISOString()"
          />
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="OMGrade2" placeholder="0-10"
                       type="number"
                       :rules="[rules.max]"
                       :label="$t('apply.grade')"
                       class="apply-extra-field"
            />
          </v-form>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="count >= 2" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="OMTitle3" :label="$t('merits.official')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRow" />
          </div>
          <DateField v-model="OMDate3" :label="$t('apply.date')"
                     class="apply-extra-field"
                     :max-date="new Date().toISOString()"
          />
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="OMGrade3" placeholder="0-10"
                       type="number"
                       :rules="[rules.max]"
                       :label="$t('apply.grade')"
                       class="apply-extra-field"
            />
          </v-form>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="count >= 3" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="OMTitle4" :label="$t('merits.official')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRow" />
          </div>
          <DateField v-model="OMDate4" :label="$t('apply.date')"
                     class="apply-extra-field"
                     :max-date="new Date().toISOString()"
          />
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="OMGrade4" placeholder="0-10"
                       type="number"
                       :rules="[rules.max]"
                       :label="$t('apply.grade')"
                       class="apply-extra-field"
            />
          </v-form>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div class="apply-extra-tfdiv exp">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="EMCompany1" :label="$t('create.company')" class="apply-extra-tf" />
            <AddButton plus :disabled="expCounter==3" @click="duplicateRowExp" />
          </div>
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="EMTime1"
                       type="number"
                       :label="$t('apply.time')"
                       :rules="[rules.negative]"
                       :placeholder="$t('apply.months')"
                       class="apply-requirements-field"
            />
          </v-form>
          <TextArea v-model="EMDesc1" :label="$t('create.description')" />
        </div>
        <div v-if="expCounter >= 1" class="apply-extra-tfdiv exp">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="EMCompany2" :label="$t('create.company')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
          </div>
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="EMTime2"
                       type="number"
                       :label="$t('apply.time')"
                       :rules="[rules.negative]"
                       :placeholder="$t('apply.months')"
                       class="apply-requirements-field"
            />
          </v-form>
          <TextArea v-model="EMDesc2" :label="$t('create.description')" />
        </div>
        <div v-if="expCounter >= 2" class="apply-extra-tfdiv exp">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="EMCompany3" :label="$t('create.company')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
          </div>
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="EMTime3"
                       type="number"
                       :label="$t('apply.time')"
                       :rules="[rules.negative]"
                       :placeholder="$t('apply.months')"
                       class="apply-requirements-field"
            />
          </v-form>
          <TextArea v-model="EMDesc3" :label="$t('create.description')" />
        </div>
        <div v-if="expCounter >= 3" class="apply-extra-tfdiv exp">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="EMCompany4" :label="$t('create.company')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowExp" />
          </div>
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="EMTime4"
                       type="number"
                       :label="$t('apply.time')"
                       :rules="[rules.negative]"
                       :placeholder="$t('apply.months')"
                       class="apply-requirements-field"
            />
          </v-form>
          <TextArea v-model="EMDesc4" :label="$t('create.description')" />
        </div>
      </div>
      <div>
        <div class="apply-extra-tfdiv">
          <div class="apply-extra-duplicatediv">
            <TextArea v-model="PMDesc1" :label="$t('merits.punctual')" class="apply-extra-tf" />
            <AddButton plus :disabled="punctCounter==3" @click="duplicateRowPunctual" />
          </div>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="punctCounter >= 1" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextArea v-model="PMDesc2" :label="$t('merits.punctual')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
          </div>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="punctCounter >= 2" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextArea v-model="PMDesc3" :label="$t('merits.punctual')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
          </div>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="punctCounter >= 3" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextArea v-model="PMDesc4" :label="$t('merits.punctual')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowPunctual" />
          </div>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div class="apply-extra-tfdiv">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="KMTitle1" :label="$t('merits.knowledge')" class="apply-extra-tf" />
            <AddButton plus :disabled="knowCounter==3" @click="duplicateRowKnow" />
          </div>
          <DateField v-model="KMDate1" :label="$t('apply.date')"
                     class="apply-extra-field"
                     :max-date="new Date().toISOString()"
          />
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="KMGrade1" placeholder="0-10"
                       type="number"
                       :rules="[rules.max]"
                       :label="$t('apply.grade')"
                       class="apply-extra-field"
            />
          </v-form>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="knowCounter >= 1" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="KMTitle2" :label="$t('merits.knowledge')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
          </div>
          <DateField v-model="KMDate2" :label="$t('apply.date')"
                     class="apply-extra-field"
                     :max-date="new Date().toISOString()"
          />
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="KMGrade2" placeholder="0-10"
                       type="number"
                       :rules="[rules.max]"
                       :label="$t('apply.grade')"
                       class="apply-extra-field"
            />
          </v-form>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="knowCounter >= 2" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="KMTitle3" :label="$t('merits.knowledge')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
          </div>
          <DateField v-model="KMDate3" :label="$t('apply.date')"
                     class="apply-extra-field"
                     :max-date="new Date().toISOString()"
          />
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="KMGrade3" placeholder="0-10"
                       type="number"
                       :rules="[rules.max]"
                       :label="$t('apply.grade')"
                       class="apply-extra-field"
            />
          </v-form>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
        <div v-if="knowCounter >= 3" class="apply-extra-tfdiv duplicate">
          <div class="apply-extra-duplicatediv">
            <TextField v-model="KMTitle4" :label="$t('merits.knowledge')" class="apply-extra-tf" />
            <AddButton class="apply-extra-minus" minus @click="deleteRowKnow" />
          </div>
          <DateField v-model="KMDate4" :label="$t('apply.date')"
                     class="apply-extra-field"
                     :max-date="new Date().toISOString()"
          />
          <v-form v-model="isFormValid" @click.prevent>
            <TextField v-model="KMGrade4" placeholder="0-10"
                       type="number"
                       :rules="[rules.max]"
                       :label="$t('apply.grade')"
                       class="apply-extra-field"
            />
          </v-form>
          <Input id="fileUpload" class="apply-extra-input"
                 type="file"
                 @click="chooseFiles()"
          />
        </div>
      </div>
      <div class="apply-extra-div-button">
        <Button terciary class="apply-extra-button" @click="toSkills">
          {{ $t('buttons.back') }}
        </Button>
        <Button primary class="apply-extra-button"
                :disabled="!isFormValid"
                @click="toFinish"
        >
          {{ $t('buttons.continue') }}
        </Button>
      </div>
    </div>
    <img class="apply-extra-img" src="@/assets/images/data_points.svg" alt="extra skills image">
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
import AddButton from '@/components/AddButton.vue'
import ParticipationDTO from '@/api/models/Participation'
import { API } from '@/api'

export default Vue.extend({
  name: 'ApplyExtra',
  components: {
    Button,
    NavMenuHome,
    Input,
    DateField,
    TextField,
    TextArea,
    AddButton
  },
  data () {
    return {
      count: 0,
      expCounter: 0,
      punctCounter: 0,
      knowCounter: 0,
      isFormValid: false,
      rules: {
        required: (value: any) => !!value || this.$t('validations.required'),
        counter: (value: any) => value.length <= 40 || this.$t('validations.max40'),
        counterDesc: (value: any) => value.length <= 200 || this.$t('validations.max200'),
        max: (value: any) => (value <= 10 && value >= 0) || this.$t('validations.between010'),
        negative: (value: any) => (value > 0) || this.$t('validations.positive')
      },
      OMTitle1: '',
      OMDate1: '',
      OMGrade1: '',
      OMFile1: '',
      OMTitle2: '',
      OMDate2: '',
      OMGrade2: '',
      OMFile2: '',
      OMTitle3: '',
      OMDate3: '',
      OMGrade3: '',
      OMFile3: '',
      OMTitle4: '',
      OMDate4: '',
      OMGrade4: '',
      OMFile4: '',
      EMCompany1: '',
      EMTime1: '',
      EMDesc1: '',
      EMCompany2: '',
      EMTime2: '',
      EMDesc2: '',
      EMCompany3: '',
      EMTime3: '',
      EMDesc3: '',
      EMCompany4: '',
      EMTime4: '',
      EMDesc4: '',
      PMDesc1: '',
      PMFile1: '',
      PMDesc2: '',
      PMFile2: '',
      PMDesc3: '',
      PMFile3: '',
      PMDesc4: '',
      PMFile4: '',
      KMTitle1: '',
      KMDate1: '',
      KMGrade1: '',
      KMFile1: '',
      KMTitle2: '',
      KMDate2: '',
      KMGrade2: '',
      KMFile2: '',
      KMTitle3: '',
      KMDate3: '',
      KMGrade3: '',
      KMFile3: '',
      KMTitle4: '',
      KMDate4: '',
      KMGrade4: '',
      KMFile4: ''
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    toSkills () {
      this.$router.push('/apply/skills').catch((err: string) => { return err })
    },
    async toFinish () {
      const OMerit = []
      if (this.OMTitle1 && this.OMDate1 && this.OMGrade1) {
        OMerit.push({
          title: this.OMTitle1,
          date: this.OMDate1,
          grade: +this.OMGrade1
        })
      }
      if (this.OMTitle2 && this.OMDate2 && this.OMGrade2) {
        OMerit.push({
          title: this.OMTitle2,
          date: this.OMDate2,
          grade: +this.OMGrade2
        })
      }
      if (this.OMTitle3 && this.OMDate3 && this.OMGrade3) {
        OMerit.push({
          title: this.OMTitle3,
          date: this.OMDate3,
          grade: +this.OMGrade3
        })
      }
      if (this.OMTitle4 && this.OMDate4 && this.OMGrade4) {
        OMerit.push({
          title: this.OMTitle4,
          date: this.OMDate4,
          grade: +this.OMGrade4
        })
      }
      const EMerit = []
      if (this.EMCompany1 && this.EMDesc1 && this.EMTime1) {
        EMerit.push({
          company: this.EMCompany1,
          description: this.EMDesc1,
          time: +this.EMTime1
        })
      }
      if (this.EMCompany2 && this.EMDesc2 && this.EMTime2) {
        EMerit.push({
          company: this.EMCompany2,
          description: this.EMDesc2,
          time: +this.EMTime2
        })
      }
      if (this.EMCompany3 && this.EMDesc3 && this.EMTime3) {
        EMerit.push({
          company: this.EMCompany3,
          description: this.EMDesc3,
          time: +this.EMTime3
        })
      }
      if (this.EMCompany4 && this.EMDesc4 && this.EMTime4) {
        EMerit.push({
          company: this.EMCompany4,
          description: this.EMDesc4,
          time: +this.EMTime4
        })
      }
      const PMerit = []
      if (this.PMDesc1) {
        PMerit.push({
          description: this.PMDesc1
        })
      }
      if (this.PMDesc2) {
        PMerit.push({
          description: this.PMDesc2
        })
      }
      if (this.PMDesc3) {
        PMerit.push({
          description: this.PMDesc3
        })
      }
      if (this.PMDesc4) {
        PMerit.push({
          description: this.PMDesc4
        })
      }
      const KMerit = []
      if (this.KMTitle1 && this.KMDate1 && this.KMGrade1) {
        KMerit.push({
          title: this.KMTitle1,
          date: this.KMDate1,
          grade: +this.KMGrade1
        })
      }
      if (this.KMTitle2 && this.KMDate2 && this.KMGrade2) {
        KMerit.push({
          title: this.KMTitle2,
          date: this.KMDate2,
          grade: +this.KMGrade2
        })
      }
      if (this.KMTitle3 && this.KMDate3 && this.KMGrade3) {
        KMerit.push({
          title: this.KMTitle3,
          date: this.KMDate3,
          grade: +this.KMGrade3
        })
      }
      if (this.KMTitle4 && this.KMDate4 && this.KMGrade4) {
        KMerit.push({
          title: this.KMTitle4,
          date: this.KMDate4,
          grade: +this.KMGrade4
        })
      }
      const participation: ParticipationDTO = {
        extra: {
          OMerit,
          EMerit,
          PMerit,
          KMerit
        }
      }
      this.$store.dispatch('session/updateParticipation', { participation })
      this.$store.dispatch('ui/showMask', {
        text: this.$t('main.retrievingData')
      })
      try {
        const resp: any = await API.contest.createParticipation()
        if (resp?.status === 201) {
          this.$router.push({
            name: 'ApplyFinish',
            params: {
              score: resp.data?.score
            }
          }).catch((err) => { return err })
        } else {
          this.$router.push({
            name: 'Error404',
            params: {
              errorType: 'Error creating participation'
            }
          }).catch((err) => { return err })
        }
      } catch (err) {
        console.log(err)
        this.$router.push({
          name: 'Error404',
          params: {
            errorType: 'Error creating participation'
          }
        }).catch((err) => { return err })
      } finally {
        this.$store.dispatch('ui/hideMask')
      }
    },
    duplicateRow () {
      if (this.count < 3) this.count++
    },
    deleteRow () {
      this.count--
    },
    duplicateRowExp () {
      if (this.expCounter < 3) this.expCounter++
    },
    deleteRowExp () {
      this.expCounter--
    },
    duplicateRowPunctual () {
      if (this.punctCounter < 3) this.punctCounter++
    },
    deleteRowPunctual () {
      this.punctCounter--
    },
    duplicateRowKnow () {
      if (this.knowCounter < 3) this.knowCounter++
    },
    deleteRowKnow () {
      this.knowCounter--
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.applyExtra')
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

.apply-extra{
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
.apply-extra-container{
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
.apply-extra-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.apply-extra-info{
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
.apply-extra-tf{
margin-right:1em;
width:90%;
}
.apply-extra-minus{
  margin-top:14px;
}
.apply-extra-tfdiv{
  flex-direction: column;
  display:flex;
  max-width: 400px;
  max-height: 385px;
  margin-bottom: 1.5em;
  margin-top:1.5em;
  &.exp {
    max-height: 490px;
  }
  // align-items: flex-start;
}
.apply-extra-duplicatediv{
  display:flex;
}
.apply-extra-duplicatespan{
  margin:0;
}
.apply-extra-span{
display:flex;
justify-content: center;
align-items: center;
min-width:205px;
height:60px;
}
.apply-extra-img{
  display: none;
  height: 20rem;
  z-index: 6;
  position: absolute;
  top:16%;
  left:50%;
}
.apply-extra-upload{
  margin-right: 1em;
  &.dup{
    margin-top:13px;
  }
}
.apply-extra-div-button {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100% !important;
    margin-bottom: 70px !important;
    padding:10px;
    overflow: hidden;
   }
   .apply-extra-button {
    width:100% !important;
    margin-bottom: 2em;
  }
@media (min-width: 580px) {
  .apply-extra{
    padding: 1em 8em;
  }
  .apply-extra-div-button{
    flex-direction: row;
    margin:20px 0px 40px 0px;
    padding:10px;
    :nth-child(1) {
    margin-right: 3em ;
  }
  }
    .apply-extra-button {
    width: 160px !important;
  }
  .apply-extra-tfdiv{
    margin-bottom: 0px;
  }
  ::v-deep
  .v-text-field__details{
  display:block
}
}
@media (min-width: 1050px) {
  .apply-extra-img{
    display: block;
  }
}
@media (min-width: 1500px) {
  .apply-extra-img{
    height: 30rem;
  }
}

</style>
