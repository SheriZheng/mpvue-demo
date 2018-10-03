<template>
    <div class="login-wrapper">
        <button type="primary" open-type="getPhoneNumber" @getphonenumber="getPhone">手机号验证</button>
    </div>
</template>

<script>
    import {showModal} from '@/util'
    export default {
      methods: {
        getPhone (e) {
          console.log(e)
          if (e.mp.detail.encryptedData) {
            this.$emit('changeStatus', true)
          } else {
            showModal('失败', '授权之后才能成为会员')
          }
        }
      }
    }
</script>
<style>
    .login-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
</style>