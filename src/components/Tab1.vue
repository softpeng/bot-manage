<template>
  <div class="tab1">
        <h3>意图列表</h3>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item, index) in intentionList" :key="index">
                <div class="intention" :style="{borderColor: color[index%7]}">
                    <p class="title">{{item.title}}</p>
                    <span class="intro">{{item.intro}}</span>
                    <a><img src="~@/assets/bot_06_more.png" alt=""></a>
                    <el-button size="mini" class="edit" @click="edit(item, index)">编辑</el-button>
                    <el-button size="mini" class="delete" @click="deleteItem(item, index)">删除</el-button>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="add" @click="dialogVisible=true">
                    <img src="~@/assets/bot_07_add.png" alt="">
                    新增意图
                </div>
            </el-col>
        </el-row>
        <h3 class="mgtp20">动态</h3>
        <el-row :gutter="20">
            <el-col :span="24">
                <div class="list">
                    <div v-for="(item, index) in eventList" :key="index" class="listitem">
                        <img :src="item.headImg" alt="">
                        <p>{{item.name}} 在 <b>{{item.place}}</b> 新建 <a>{{item.event}}</a></p>
                        <span>{{item.time}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-dialog
        title="新增意图"
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        width="40%" class="dialog-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
            <el-form-item label="名称" prop="title">
                <el-input v-model="ruleForm.title" class="title" placeholder="请输入意图名称"></el-input>
                <span>18个字以内</span>
            </el-form-item>
                <el-form-item  class="mgtp20" label="描述" prop="intro">
                    <el-input type="textarea" v-model="ruleForm.intro" class="intro"></el-input>
                    <span>{{ruleForm.intro.length}}/24</span>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="mgtp20">保存</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
  </div>
</template>

<script>
export default {
    name: 'tab1',
    data () {
        return {
            dialogVisible: false,
            intentionList:[{
                title:'申请电脑',
                intro:'处理有关电脑申请、审批、回收、上门服务等流程'
            }, {
                title:'请假',
                intro:'关于请假等需求'
            }, {
                title:'设备',
                intro:'关于设备领用等流程'
            }, {
                title:'报销',
                intro:'关于报销流程及入账通知'
            }, {
                title:'SKU',
                intro:'企业产品'
            }, {
                title:'出差',
                intro:'了解出差标准制度'
            }, {
                title:'会议室',
                intro:'会议室查询预定'
            }],
            color:['#2BCCC0', '#FE7156', '#4693FF', '#F9C22D', '#24BEE3', '#5FCC7C', '#FB8421'],
            eventList:[{
                headImg:require('@/assets/headimg.jpg'),
                name:'林东东',
                place:'Vaave',
                event:'3个意图',
                time:'9:53'
            }, {
                headImg:require('@/assets/headimg.jpg'),
                name:'朱老师',
                place:'HR',
                event:'2个意图',
                time:'1月30日'
            }, {
                headImg:require('@/assets/headimg.jpg'),
                name:'附小小',
                place:'设备',
                event:'20条样本',
                time:'1月29日'
            }, {
                headImg:require('@/assets/headimg.jpg'),
                name:'周毛毛',
                place:'出差',
                event:'100条训练样本',
                time:'2018年12月12日'
            }],
            ruleForm: {
                title: '',
                intro: ''
            },
            rules: {
                title: [
                    { required: true, message: '请输入意图名称', trigger: 'blur' },
                    { min: 0, max: 18, message: '长度在18个字以内', trigger: 'blur' }
                ],
                intro: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' },
                    { min: 0, max: 24, message: '长度在24个字以内', trigger: 'blur' }
                ]
            },
            editType:'add',
            editIndex:0
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.editType === 'add') {
                        this.intentionList.push(this.ruleForm)
                    } else {
                        this.intentionList.splice(this.editIndex, 1, this.ruleForm)
                    }
                    this.dialogVisible = false
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        deleteItem(item, index) {
            this.$confirm('确定删除 ' + item.title + '意图')
                .then(_ => {
                    this.intentionList.splice(index, 1)
                })
        },
        edit(item, index) {
            this.editType = 'edit'
            this.ruleForm = {
                title: item.title,
                intro: item.intro
            }
            this.editIndex = index
            this.dialogVisible = true
        },
        handleClose() {
            this.editType = 'add'
            this.ruleForm = {
                title: '',
                intro: ''
            }
            this.dialogVisible = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.el-message-box{
    text-align: center;
    position: relative;

    p{
        font-weight: bold;
        line-height: 100px;
    }

    .el-message-box__btns{
        position: relative;
        height: 45px;
    }
    .el-message-box__btns{
        button{
            width: 160px;
            margin-bottom: 10px;
            position: absolute;
            height: 35px;
            top: -5px;
        }

        .el-button--default.el-button--primary{
            left: 30px;
            background: #4693FF;
        }
        .el-button--default{
            right: 30px;
            border: none;
            background: #FE7156;
            color: #fff;
        }
    }

}
.tab1{
    .dialog-box{
        .el-dialog__header{
            margin: 20px;
            padding: 20px 0;
            border-bottom: 1px solid #eee;

            .el-dialog__title{
                border-left: 3px solid #4693FF;
                padding-left: 10px;
                height: 20px;
                display: block;
                line-height: 20px;
            }
        }
        .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label{
            font-weight: bold;
        }
        .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
            content: '';
        }

        .title .el-input__inner{
            border-color:transparent;
            background: #F1F2F7;
            width: 300px;
        }
        .title+span{
            position: absolute;
            top: 0px;
            left: 315px;
            color: #999999;
        }
        .intro textarea{
            border-color:transparent;
            background: #F1F2F7;
            resize: none;
            height: 200px;
        }
        .intro+span{
            position: absolute;
            top: 160px;
            right: 15px;
            color: #999;
        }
    }

    .add{
        background: #fff;
        margin-bottom: 15px;
        height: 100px;
        padding: 15px;
        border-radius: 5px;
        text-align: center;
        color: #666;
        line-height: 70px;

        img{
            margin-right: 8px;
            position: relative;
            top: 2px;
        }
    }

    .intention{
            background: #fff;
            margin-bottom: 15px;
            height: 100px;
            padding: 15px;
            border-radius: 5px;
            border-left:5px solid #2BCCC0;
            position: relative;

            p{
                font-size: 18px
            }

            .intro{
                font-size: 14px;
                color: #AAAAAA;
                display: block;
                width: 85%;
                margin-top:8px;
            }

            a{
                position: absolute;
                right: 15px;
                top:15px;
            }

            &:hover .el-button--mini{
                display: block;
            }

            .el-button--mini{
                padding: 5px 8px;
                // padding-top: 0;
                border: none;
                box-shadow: 0px 2px 6px 0px rgba(96,144,210,0.15);
                position: absolute;
                right: 5px;
                bottom: 5px;
                font-size: 14px;
                display: none
            }
            .edit{
                right: 5px;
                bottom: 29px;
                color: #4693FF;
                border-bottom: 1px solid #eee;
            }
        }

        .list{
            background: #fff;
            border-radius: 5px;
            .listitem{
                border-bottom: 1px solid #eee;
                line-height: 80px;
                height: 80px;
                position: relative;
                // box-shadow:0px -1px 0px 0px rgba(238,238,238,1);

                &:last-child{
                    border:none;
                }
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    /* margin: 10px; */
                    /* display: inline-block; */
                    position: absolute;
                    top: 20px;
                    left: 15px;
                }

                p{
                    color: #555555;
                    padding-left: 70px;
                }

                a{
                    color:#4693FF;
                }

                span{
                    position: absolute;
                    right: 30px;
                    top: 0;
                    color: #888;
                }
            }
        }
}
</style>
