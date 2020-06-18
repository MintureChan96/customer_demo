<template>
    <div class="container ">
        <router-link to="/" class="btn btn-default">返回</router-link>
        <h1 class="page-header">
            {{form.name}}
            <span class="pull-right">
                <router-link class="btn btn-primary" :to="'/edit/'+form.id">编辑</router-link>
                    <button class="btn btn-danger" @click="deleteCustomer(form.id)">删除</button>
                </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class=" glyphicon glyphicon-user">电话:{{form.phone}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope">邮箱:{{form.email}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-leaf">爱好:{{form.hobby}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-blackboard">职业:{{form.profession}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-heart-empty">公司:{{form.company}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-education">个人简介{{form.profile}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CustomerDetails",
        data() {
            return {
                form: {}
            }
        },
        methods: {
            getCustomerInfo(id) {
                this.$http.get('http://localhost:3000/users/' + id).then(res => {
                    this.form = res.body;
                })
            },
            deleteCustomer(id) {
                this.$http.delete('http://localhost:3000/users/' + this.$route.params.id).then(res => {
                    this.$router.push({path: '/', query: {Alerts: '用户删除成功!'}})
                })
            }
        },
        created() {
            this.getCustomerInfo(this.$route.params.id)
        }
    }
</script>


<style scoped>
    ul > li{
        margin: 20px 0;
    }
</style>
