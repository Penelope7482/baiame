<template>
    <div id="login">
        <h1>Connexion</h1>
        <form action="">
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" @click="login()">Se connecter</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                authenticated: false,
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        // this.$emit("authenticated", true);
                        //  this.$emit('Login::loginResult', {loginResult: true})
                        this.$router.replace({ name: "FormStage" });
                    } else {
                        console.log("Le mot de passe et / ou l'identifiant est incorrect");
                        alert("Le mot de passe et / ou l'identifiant est incorrect");
                    }
                } else {
                    console.log("Un mot de passe et un identifiant doivent être présents");
                    alert("Un mot de passe et un identifiant doivent être presents");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>