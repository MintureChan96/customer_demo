<template>
    <div class="customers container">
        <Alert v-if="alertInfo" :message="alertInfo"></Alert>
        <h1 class="page-header">用户管理系统</h1>
        <router-link to="/add" class="btn btn-primary pull-right" style="margin-bottom: 10px">添加</router-link>
       <input type="text"  v-model="search" class="form-control" style="width: 300px" placeholder="根据姓名查询">
        <br/>
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="customer in CustomerFilter(search)">
                <td>{{customer.id}}</td>
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link class="btn btn-default" :to="'/details/'+customer.id">详情</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Alert from "./Alert";

    export default {
        name: "Customers",
        components: {Alert},
        data() {
            return {
                customers: [],
                alertInfo: '',
                search: ''
            }
        },
        watch: {
            alertInfo() {
                setTimeout(() => {
                    this.alertInfo = ''
                }, 3000)
            }
        },
        methods: {
            getCustomerList() {
                this.$http.get('http://localhost:3000/users').then(res => {
                    this.customers = res.body
                })
            },
            CustomerFilter(name) {
                return this.customers.filter(item => {
                    return item.name.match(name.trim())
                })
            }
        },
        created() {
            if (this.$route.query.Alerts) {
                this.alertInfo = this.$route.query.Alerts
            }
            this.getCustomerList()
        },
        updated() {
            /*   this.getCustomerList()*/
        }
    }
</script>

<style scoped>

</style>
