<template>
  <div class="detail">
    <NavMenu route="Profile" />
    <div class="detail-container">
      <div class="detail-titlecard">
        <h1>{{ $t('detail.title') }}</h1>
        <span class="detail-info" @click="openDialog"><i class="fas fa-info-circle"> info</i></span>
      </div>
      <hr>
      <v-data-table
        :headers="headers"
        :items="contestants"
        sort-by="score"
        :sort-desc="true"
        :items-per-page="itemsPerPage"
        class="elevation-1"
      />
      <Button terciary class="detail-button" @click="toProfile">
        {{ $t('buttons.back') }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'
import Button from '@/components/Button.vue'
import i18n from '@/i18n'
import { API } from '@/api'

export default Vue.extend({
  name: 'Detail',
  components: {
    NavMenu,
    Button
  },
  props: {
    contestId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      headers: [
        {
          text: this.$t('detail.name'),
          align: 'start',
          value: 'name'
        },
        { text: this.$t('detail.score'), value: 'score', align: 'start' },
        { text: this.$t('detail.status'), value: 'status', align: 'start' }
      ],
      itemsPerPage: 8,
      contestants: [] as any
    }
  },
  async mounted () {
    this.$store.dispatch('ui/showMask', {
      text: this.$t('main.retrievingData')
    })
    try {
      const resp: any = await API.contest.getContestsDetail(this.contestId)
      if (resp?.status === 200) {
        let scores = (resp?.data?.participations as any).map((obj: any) => (obj.score)).sort((a: any, b: any) => a - b)
        const vacancies = resp.data.vacancies * -1
        scores = scores.slice(vacancies)
        this.contestants = (resp?.data.participations as any).map((obj: any) => {
          return {
            score: obj.score.toFixed(),
            name: `${obj.user.name} ${obj.user.secondName}`,
            status: obj.score >= scores[0] ? 'Accepted' : 'Rejected'
          }
        })
      } else {
        this.$router.push({
          name: 'Error404',
          params: {
            errorType: 'Error retrieving data'
          }
        }).catch((err) => { return err })
      }
    } catch (err) {
      console.log(err)
      this.$router.push({
        name: 'Error404',
        params: {
          errorType: 'Error retrieving data'
        }
      }).catch((err) => { return err })
    } finally {
      this.$store.dispatch('ui/hideMask')
    }
  },
  methods: {
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.detail')
      })
    },
    toProfile () {
      this.$router.push('/profile').catch((err: string) => { return err })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.detail{
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
  padding: 5em 2em;
}
.detail-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:2em 2em;
  overflow-y: auto;
}
.detail-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.detail-info{
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
::v-deep
.v-data-table{
  background: transparent;
}
::v-deep
.text-start {
  color:$primary-color;
  font-weight: 600;
}
::v-deep
.v-data-table-header{
  text-align: left;
}
::v-deep
.v-data-table-header-mobile,.v-data-table-header{
  display:none;
}
::v-deep
.v-icon.notranslate.v-data-table-header__icon.theme--light {
  overflow: hidden;
}
::v-deep
.v-icon.notranslate.theme--light {
  overflow: hidden;
}
.v-data-table-header-mobile,.v-data-table-header{
  display:none;
}
.button-table{
  height: 30px;
  width:90px;
  font-size: 12px;
}
.detail-button{
  margin: 2em 0em;
  width:100%;
}
@media (min-width: 750px) {
  .detail{
    height: 100vh;
  }
  .detail-button{
  width:160px;
}
}

</style>
