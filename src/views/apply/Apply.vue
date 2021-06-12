<template>
  <div class="apply">
    <NavMenu route="Apply" />
    <div class="apply-container">
      <div class="apply-titlecard">
        <h1>{{ $t('apply.title') }}</h1>
        <span class="apply-info" @click="openDialog"><i class="fas fa-info-circle"> info</i></span>
      </div>
      <hr>
      <v-data-table
        :headers="headers"
        :items="contests"
        :expanded.sync="expanded"
        :single-expand="true"
        item-key="name"
        show-expand
        sort-by="dueDate"
        :sort-desc="true"
        :items-per-page="itemsPerPage"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <Button
            primary
            class="button-table"
            @click="contestApply(item)"
          >
            {{ $t('buttons.apply') }}
          </Button>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            {{ item.description }}
          </td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'
import Button from '@/components/Button.vue'
import { API } from '@/api'

export default Vue.extend({
  name: 'Apply',
  components: {
    NavMenu,
    Button
  },
  data () {
    return {
      expanded: [],
      headers: [
        {
          text: this.$t('profile.name'),
          align: 'start',
          value: 'name'
        },
        { text: this.$t('profile.field'), value: 'field', align: 'start' },
        { text: this.$t('profile.dueDate'), value: 'dueDate', align: 'start' },
        { value: 'actions', sortable: false, align: 'start' }
      ],
      itemsPerPage: 5,
      contests: [] as any,
      creator: ''
    }
  },
  async mounted () {
    this.$store.dispatch('ui/showMask', {
      text: this.$t('main.retrievingData')
    })
    try {
      const resp = await API.contest.getAllContests()
      if (resp?.status === 200) {
        const aux = (resp.data as any).map(({ dueDate, ...rest }: any) => ({ ...rest, dueDate: dueDate?.slice(0, -14) }))
        this.contests = aux.filter((contest: any) => Date.parse(contest.dueDate) > new Date().getTime())
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
    contestApply (item: any) {
      this.$store.dispatch('session/saveContestItem', { item })
      this.$router.push('/apply/personalData').catch((err: string) => { return err })
    },
    openDialog () {
      this.$store.dispatch('ui/openDialog', {
        text: this.$t('info.apply')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #4974a5;

.apply{
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
.apply-container{
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.0px );
  -webkit-backdrop-filter: blur( 8.0px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding:2em;
  overflow-y: auto;
}
.apply-titlecard{
  display:flex;
  align-items: center;
  margin-bottom:1em;
}
.apply-info{
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
.v-icon.notranslate.v-data-table-header__icon, .v-icon.notranslate.theme--light {
  overflow: hidden;
}
::v-deep
.v-icon.notranslate.theme--light {
  overflow: hidden;
}
::v-deep
.v-data-table-header{
  text-align: left;
}
::v-deep
.v-data-table-header-mobile,.v-data-table-header{
  display:none;
}
.v-data-table-header-mobile,.v-data-table-header{
  display:none;
}
.button-table{
  height: 30px;
  width:90px;
  font-size: 12px;
}
@media (min-width: 750px) {
  .apply{
    height: 100vh;
  }
}

</style>
