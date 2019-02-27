<template>
    <div class="login">
        <div class="bg">
            <img src="~@/assets/bot_00_login01_bac.png" alt="">
            <h3>博彦以太机器人管理平台</h3>
            <div class="log">
                <p>登录</p>
                <el-input placeholder="输入用户名" class="mg30" v-model="name">
                    <template slot="prepend"><img src="~@/assets/bot_00_login01.png" alt=""></template>
                </el-input>
                <el-input placeholder="输入密码" v-model="password">
                    <template slot="prepend"><img src="~@/assets/bot_00_login02.png" alt=""></template>
                </el-input>
                <el-checkbox class="remember" v-model="checked">记住我</el-checkbox>
                <el-button type="primary" class="next" @click="next">登 录</el-button>
                <transition name="fade">
                    <div v-if="showToast && txtToast" class="loginToast">{{txtToast}}</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login',
    data () {
        return {
            showToast:false,
            txtToast:'',
            name:'',
            password:'',
            checked:false
        }
    },
    watch: {
        txtToast(val) {
            this.showToast = true
            setTimeout(() => {
                this.showToast = false
                this.txtToast = ''
            }, 1000)
        }
    },
    created() {
    },
    methods:{
        next() {
            if (this.name === 'admin' && this.password === 'admin') {
                sessionStorage.setItem('name', 'admin')
                this.$router.push('/')
            } else {
                this.txtToast = '请输入正确的用户名和密码'
            }
        }
    }
}
</script>

<style lang="scss">
.login{
    position: absolute;
    background: #fff;
    height: 100%;

    .loginToast{
        position: absolute;
        left: 50%;
        top: 50%;
        background: rgba(0, 0, 0, 0.50);
        color: #fff;
        font-size: 14px;
        padding: 2px 8px;
        border-radius: 5px;
        transform: translateX(-50%);
    }
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
    .bg{
        position: relative;

        img{
            display: block;
            width: 100%;
        }

        h3{
            color: #fff;
            position: absolute;
            top: 120px;
            z-index: 1;
            width: 100%;
            text-align: center;
            font-size: 45px;
            font-weight: 100;
        }

        .log{
            width: 380px;
            height: 300px;
            background: rgba(255,255,255,1);
            box-shadow: 0px 10px 15px 0px rgba(70,147,255,0.15);
            border-radius: 5px;
            position: absolute;
            z-index: 2;
            left: 50%;
            margin-left: -200px;
            bottom: -150px;

            p{
                line-height: 60px;
                border-bottom: 1px dashed #D9D9D9;
                text-align: center;
            }
        }

        .loginput{
            display: block;
            width: 280px;
            height: 45px;
            margin: 10px auto;
            border-radius: 5px;
            border: 1px solid #D9D9D9;
            background-size: 23px 23px;
            background-repeat: no-repeat;
            background-position: 10px;
            padding-left: 50px;
        }

        .el-input{
            width: 280px;
            margin: 15px 50px 0;
            text-align: center;
        }
        .remember{
            width: 280px;
            margin: 15px auto;
            color: #BBBBBB;
            display: block;
        }
        .next{
            width: 280px;
            display: block;
            margin: auto;
        }
        .mg30{
            margin-top:30px;
        }
        .el-input__inner{
            border-left:none;
        }
        .el-input.is-active .el-input__inner, .el-input__inner:focus{
            border-color: #dcdfe6;
        }

        .el-input-group__prepend {
            background-color: #fff;
            padding: 0 15px;

            img{
                width: 20px;
            }

            &:after{
                content: '';
                display: block;
                width: 1px;
                height: 20px;
                background-color: #dcdfe6;
                position: absolute;
                right: 0;
                top: 10px;
            }
        }

        &:after{
            content: '';
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            background: #4693FF;
            opacity: 0.66;
            top:0;
        }
    }
}
</style>
