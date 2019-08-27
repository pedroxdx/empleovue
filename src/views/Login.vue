<template>
    <div class="login">
        <page-header :title="title" />
        <section class="empleos-buscador">
	        <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-3 col-md-3">
                        &nbsp;
                    </div>
        	        <div class="col-12 col-sm-6 col-md-6">
        		        <div class="the-box rounded">
                            <form id="login-form" @submit.prevent="submit" method="post">
                                <div class="form-group">
                                    <label class="control-label" :class="{ 'text-red': $v.form.user.$error }" for="loginvacante-username">Usuario</label>
                                    <input type="text" 
                                        class="form-control"
                                        :class="{ 'is-invalid': $v.form.user.$error }"
                                        v-model="userInput" 
                                        aria-required="true">
                                    <div class="invalid-feedback" v-if="!$v.form.user.required">El campo Usuario es Requerido.</div>
                                    <div class="invalid-feedback" v-if="!$v.form.user.minLength">El campo requiere un mínimo de 6 caracteres.</div>
                                </div>								  	
								<div class="form-group">
                                    <label class="control-label" :class="{ 'text-red': $v.form.password.$error }" for="loginvacante-password">Contraseña</label>
                                    <input type="password" 
                                        class="form-control"
                                        :class="{ 'is-invalid': $v.form.password.$error }"
                                        v-model="passwordInput" 
                                        aria-required="true">
                                    <div class="invalid-feedback" v-if="!$v.form.password.required">El campo Contraseña es Requerido.</div>
                                    <div class="invalid-feedback" v-if="!$v.form.password.minLength">El campo requiere un mínimo de 6 caracteres.</div>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input type="checkbox" v-model="form.remember" class="form-check-input" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                        Recordarme
                                        </label>
                                    </div>
                                </div>
                                <ul class="list-inline">								 
                                    <li class="list-inline-item"><button type="submit" class="btn btn-primary">Login</button></li>								  	
                                    <li class="list-inline-item"><a class="btn btn-success" href="#">Forgot your password</a></li>
                                </ul>								
						    </form>
                        </div>
                    </div>
                    <div class="col-12 col-sm-3 col-md-3">
				        &nbsp;
			        </div>
    	        </div>
            </div>
        </section>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import PageHeader from "@/components/PageHeader.vue";

export default {
    name: "login",
    components: {
        PageHeader
    },
    data() {
        return {
            title: "Usuario",
            form: {
                user: "",
                password: "",
                remember: false
            }
        }
    },
    validations: {
        form: {
            user: { 
                required, 
                minLength: minLength(6) 
            },
            password: {
                required,
                minLength: minLength(6)
            }
        }
    },
    computed: {
        userInput: {
            get() {
                return this.form.user;
            },
            set(value) {
                this.$v.form.user.$touch;
                this.form.user = value;
            }
        },
        passwordInput: {
            get() {
                return this.form.password;
            },
            set(value) {
                this.$v.form.password.$touch;
                this.form.password = value;
            }
        }
    },
    methods: {
        submit() {
            this.$v.form.$touch();
            if(this.$v.form.$error) return
            // to form submit after this
            alert('Form submitted')
        }
    }
}
</script>

<style scoped>
label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
}
</style>