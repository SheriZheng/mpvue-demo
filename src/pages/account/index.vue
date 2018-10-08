
<template>
    <div class="container" >
        <div class="pre-login" v-if="!loginSuccess">
            <img class="default-avatar" src="http://img2.imgtn.bdimg.com/it/u=1666256797,972082711&fm=27&gp=0.jpg" background-size="cover"/>
        </div>
        <div class="userinfo" v-if="loginSuccess">
            <img class="userinfo-avatar" src="" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
            <p class="member-name">{{userInfo.nickName}}</p>
        </div>
        <button v-if="!loginSuccess" type="primary" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">点击授权</button>
        <log-on v-if="loginSuccess"></log-on>
    </div>
</template>

<script>
  import LogOn from '@/components/LogOn'
  export default {
    data () {
      return {
        loginSuccess: false,
        userInfo: {}
      }
    },
    components: {
      LogOn
    },

    methods: {
      bindViewTap () {
        const url = '../account/main'
        wx.navigateTo({ url })
      },
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      changeStatus () {
        this.getNumber = true
      },
      bindGetUserInfo (e) {
        console.log(e.mp.detail.userInfo)
        this.loginSuccess = true
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },

    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style scoped>

    .pre-login,
    .userinfo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .default-avatar,
    .userinfo-avatar {
        width: 128px;
        height: 128px;
        margin: 20px;
        border-radius: 50%;
    }

    .member-name {
        text-align: center;
    }


</style>
