<template>
    <div class="editcus container">
        <h1 class="page-header">编辑用户</h1>

        <form @submit="updateCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="form.name">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="form.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="form.email">
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
                <button class="btn btn-primary" type="submit">编辑</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "EditCustomer",
        data() {
            return {
                form: {},
                companies:[]
            }
        },
        methods: {
            getCompanyList() {
                this.$http.get('http://localhost:3000/companies').then(res => {
                    this.companies = res.body
                })
            },
            getCustomerInfo(id) {
                this.$http.get('http://localhost:3000/users/' + id).then(res => {
                    this.form = res.body;
                })
            },
            updateCustomer(e) {
                e.preventDefault()
                let newCustomer = {
                    name:this.form.name,
                    phone: this.form.phone,
                    email: this.form.email,
                    hobby: this.form.hobby,
                    profession: this.form.profession,
                    company: this.form.company,
                    profile: this.form.profile
                }
                this.$http.put('http://localhost:3000/users/' + this.$route.params.id, newCustomer).then(res => {
                    this.$router.push({path: '/', query: {Alerts: '用户编辑成功!'}})
                })
            }
        },
        created() {
            this.getCompanyList();
            this.getCustomerInfo(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>
