<template>
    <div class="index">
        <div class="topbar">
            <el-row>
                <el-col :span="4"><img src="~@/assets/bot_01_logo.png" alt=""></el-col>
                <el-col :span="8">
                    <el-input placeholder="请输入搜索内容" v-model="search" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search">
                    </el-button>
                </el-input>
                </el-col>
                <el-col :span="4" :offset="8" class="time">{{time}}</el-col>
            </el-row>
        </div>
        <el-row>
            <el-col :span="4" class="left-menu">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo">
                <div class="user">
                    <img :src="userinfo.headImg" alt="">
                    <label>{{userinfo.name}}</label>
                    <span>{{userinfo.position}}</span>
                </div>
                <el-menu-item index="1" @click="currenttab = 1 ">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2" @click="currenttab = 2 ">
                    <i class="el-icon-document"></i>
                    <span slot="title">样本列表</span>
                </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20" class="right-cont">
                <div class="tab1" v-if="currenttab === 1">
                    <tab1></tab1>
                </div>
                <div class="tab2" v-if="currenttab === 2">
                    <tab2></tab2>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Tab1 from '@/components/Tab1'
import Tab2 from '@/components/Tab2'
export default {
    name: 'index',
    components: {
        Tab1, Tab2
    },
    data () {
        return {
            search:'',
            time:'',
            dialogVisible:false,
            userinfo:{
                name: 'Leo Wang',
                headImg: require('@/assets/headimg.jpg'),
                position: '架构师'
            },
            currenttab: 1
        }
    },
    created() {
        this.getTime()
    },
    methods:{
        getTime() {
            let today = new Date()
            let myddy = today.getDay()
            let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            this.time = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate() + ' ' +
                        weekday[myddy]
        }
    }
}
</script>

<style lang="scss">
    .index {

        .mgtp20{
            margin-top:20px;
        }
        .topbar {
            height:60px;
            margin-bottom: 15px;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 6px 0px rgba(96,144,210,0.15);

            img {
                margin-left: 30px;
                margin-top: 15px;
            }
            .time {
                line-height: 60px;
                text-align: right;
                padding-right: 15px;
                font-weight: bold;
            }

            .input-with-select{
                margin-top:10px;
                margin-left:10px;

                input{
                    border: none;
                    background: rgba(241,242,247,1);
                }
                .el-input-group__append{
                    background:#4693FF;
                    margin-left:0;
                    border:none;
                    width: 80px;
                    text-align:center;
                }
                .el-icon-search:before{
                    content:'';
                    width:20px;
                    height: 20px;
                    background-image:url(~@/assets/bot_02_search.png);
                    display: block;
                    background-size: contain;
                    background-repeat: no-repeat;
                    margin: 0 auto;
                }
            }
        }

        .left-menu {
            padding: 0 15px;

            .el-menu{
                border: none;
                border-radius: 5px;
                height: 600px;
            }

            .el-icon-menu:before {
                content: '';
                display: block;
                width: 20px;
                height: 20px;
                background-image:url(~@/assets/bot_04_home01.png);
            }
            .el-icon-document:before {
                content: '';
                display: block;
                width: 20px;
                height: 20px;
                background-image:url(~@/assets/bot_05_list01.png);
            }

            .el-menu-item{
                border-left: 2px solid #fff;
            }
            .el-menu-item.is-active{
                background: #E3EFFF;
                color: #4693FF;
                border-left: 2px solid #4693FF;

                .el-icon-menu:before{
                    background-image:url(~@/assets/bot_04_home02.png);
                }
                .el-icon-document:before{
                    background-image:url(~@/assets/bot_05_list02.png);
                }
            }

            .user{
                position: relative;

                img{
                    width: 60px;
                    height: 60px;
                    margin: 15px;
                    border-radius: 50%;
                }

                label{
                    position: absolute;
                    top: 25px;
                    left: 85px;
                    font-weight: bold;
                }

                span{
                    color: #BBBBBB;
                    position: absolute;
                    top: 50px;
                    font-size: 14px;
                    left: 85px;
                }

                &:after{
                    width: 8px;
                    height: 14px;
                    content: '';
                    display: block;
                    background-image:url(~@/assets/bot_03_enter.png);
                    position: absolute;
                    right: 15px;
                    top: 40px;
                }
            }
        }

        .right-cont{
            padding: 10px;
            padding-right: 20px;

            h3{
                font-size: 18px;
                margin-bottom: 15px;
            }
        }
    }
</style>
