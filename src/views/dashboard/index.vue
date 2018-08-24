<template>
  <div>
    <el-row v-for="item in inTheatersList" :key="item.id">
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getInTheaters } from '@/api/dashboard'

export default {
  name: 'Dashboard',
  created () {
    getInTheaters().then(response => {
      const data = response.data;
      
    })
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'roles'
    // ])
    splitInTheatersList () {
      return this.inTheatersList;
    }
  },
  data () {
    return {
      inTheatersList: []
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 4px;
  }
}
</style>
