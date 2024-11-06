<template>
  <div>
    <Card>
      <div class="person">
        <template v-for="item in personList">
          <div class="item" :class="item.type" ghost>
            {{ item.name }}
          </div>
        </template>
      </div>
    </Card>
    <Card class="card-cont">
      <div class="wrap">
        <div class="left">
          <template v-for="item in personLeft">
            <div class="item">
              <div class="img"> <Avatar :size="50" :src="item.img" /> </div>
              <div class="txt">
                {{ item.name }}
              </div>
            </div>
          </template>
        </div>
        <div class="center">
          <div class="icon" @click="reset">
            <UndoOutlined />
          </div>
          <Button class="btn" block size="large" @click="goBallot">抽签</Button>
        </div>
        <div class="right">
          <template v-for="item in personRight">
            <div class="item">
              <div class="img"> <Avatar :size="50" :src="item.img" /> </div>
              <div class="txt">
                {{ item.name }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
  import { Card, Button, Avatar } from 'ant-design-vue'
  import { ref, onMounted } from 'vue'
  import { shuffle, cloneDeep } from 'lodash-es'
  import { UndoOutlined } from '@ant-design/icons-vue'
  import { groupData } from './data'
  import { UserListApi } from '/@/api/sys/base'

  const clonePerson = cloneDeep(groupData.personList)

  const personList = ref(clonePerson)

  const personLeft = ref(groupData.person)
  const personRight = ref(groupData.person)

  //开始抽签
  function goBallot() {
    let sort = shuffle(personList.value)
    sort.filter((item, index) => {
      if (index <= 4) {
        item.type = 'blue'
      } else {
        item.type = 'red'
      }
    })
    // left
    personLeft.value = sort.slice(0, 5)
    //right
    personRight.value = sort.slice(5, 10)
    console.log(personList.value)
  }
  //重置
  function reset() {
    personList.value = groupData.personList
    personLeft.value = groupData.person
    personRight.value = groupData.person
  }

  const getList = () => {
    UserListApi().then((res) => {
      console.log(res)
    })
  }

  onMounted(() => {
    // getList()
  })
</script>
<style lang="less" scoped>
  .person {
    display: flex;
    justify-content: center;
    align-items: center;

    .blue {
      border-color: #4c4cff !important;
      color: #4c4cff;
    }

    .red {
      border-color: #f14040 !important;
      color: #f14040;
    }

    .item {
      width: 10%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
      margin: 0 10px;
      border: 1px solid #eee;
      cursor: pointer;
    }
  }

  .wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 500px;

    .left {
      width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border: 3px solid #4c4cff;

      .item {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    .center {
      width: 10%;
      display: flex;
      align-items: center;
      position: relative;

      .icon {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0px;
        cursor: pointer;
      }
    }

    .right {
      width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border: 3px solid #f14040;

      .item {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .card-cont {
    margin-top: 40px;
  }

  .btn {
    background-image: linear-gradient(45deg, #4c4cff 0%, #f14040 100%);
    color: #fff;
    border: none;
    border-radius: 5px;
  }
</style>
