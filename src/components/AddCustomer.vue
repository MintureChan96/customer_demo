<template>
    <div class="addcus container">
        <h1 class="page-header">添加用户</h1>
        <form @submit="addCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="form.name">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="phone" class="form-control" placeholder="phone" v-model="form.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="email" class="form-control" placeholder="email" v-model="form.email">
                </div>
                <div class="form-group">
                    <label>爱好</label>
                    <input type="text" class="form-control" placeholder="hobby" v-model="form.hobby">
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input type="text" class="form-control" placeholder="profession" v-model="form.profession">
                </div>
                <div class="form-group">
                    <label>公司</label>
                    <select v-model="form.company" class="form-control">
                        <option v-for="company in companies">{{company.name}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <textarea rows="10" class="form-control" v-model="form.profile"></textarea>
                </div>
                <button class="btn btn-primary" type="submit">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddCustomer",
        data() {
            return {
                form: {},
                companies: []
            }
        },
        methods: {
            addCustomer(e) {
                e.preventDefault()
               /* let str=/^[a-zA-Z0-9_-]{4,16}$/;
                if(!str.test(this.form.name)){
                    console.log('请输入合适的用户名')
                    return
                }*/
                if (!this.form.name || !this.form.phone || !this.form.email) {
                    console.log('请添加对应的信息')
                } else {
                    let newCustomer = {
                        name: this.form.name,
                        phone: this.form.phone,
                        email: this.form.email,
                        hobby: this.form.hobby,
                        profession: this.form.profession,
                        company: this.form.company,
                        profile: this.form.profile
                    }
                    this.$http.post('http://localhost:3000/users', newCustomer).then(res => {
                        this.$router.push({path: "/", query: {Alerts: '用户信息添加成功！'}})
                    })
                }

            },
            getCompanyList() {
                this.$http.get('http://localhost:3000/companies').then(res => {
                    this.companies = res.body
                })
            }
        },
        created() {
            this.getCompanyList()
        }
    }
</script>

<style scoped>

</style>
