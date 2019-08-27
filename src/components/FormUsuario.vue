<template>
    <form id="register-form" @submit.prevent="submit" method="post">								
		<div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.name.$error }" for="registerform-nombre">Nombre</label>
            <input type="text" 
                class="form-control"
                :class="{ 'is-invalid': $v.form.name.$error }"
                v-model="nameInput" 
                aria-required="true" />
            <div class="invalid-feedback" v-if="!$v.form.name.required">El campo Nombre es Requerido.</div>
            <div class="invalid-feedback" v-if="!$v.form.name.minLength">El campo requiere un mínimo de 6 caracteres.</div>
        </div>
        <div class="form-group">
            <label class="control-label" for="registerform-apellido_paterno">Apellido Paterno</label>
            <input type="text" class="form-control" v-model="form.lastName" aria-required="true">
        </div>                    		   		
        <div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.email.$error }" for="registerform-email">Email</label>
            <input type="text" 
                class="form-control"
                :class="{ 'is-invalid': $v.form.email.$error }"
                v-model="emailInput" 
                aria-required="true">
            <div class="invalid-feedback" v-if="!$v.form.email.required">El campo Email es Requerido.</div>
            <div class="invalid-feedback" v-if="!$v.form.email.email">El campo Email no es válido.</div>
        </div>								
		<div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.user.$error }" for="registerform-username">Usuario</label>
            <input type="text" 
                class="form-control"
                :class="{ 'is-invalid': $v.form.user.$error }"
                v-model="userInput" 
                aria-required="true">
            <div class="invalid-feedback" v-if="!$v.form.user.required">El campo Usuario es Requerido.</div>
            <div class="invalid-feedback" v-if="!$v.form.user.minLength">El campo requiere un mínimo de 6 caracteres.</div>
        </div>								  	
		<div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.password.$error }" for="registerform-password">Contraseña</label>
            <input type="password" 
                class="form-control"
                :class="{ 'is-invalid': $v.form.password.$error }"
                v-model="passwordInput" 
                aria-required="true">
            <div class="invalid-feedback" v-if="!$v.form.password.required">El campo Contraseña es Requerido.</div>
            <div class="invalid-feedback" v-if="!$v.form.password.minLength">El campo requiere un mínimo de 6 caracteres.</div>
        </div>								  	
		<div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.repeatPassword.$error }" for="registerform-password_repeat">Reescribir Contraseña</label>
            <input type="password" 
                class="form-control"
                :class="{ 'is-invalid': $v.form.repeatPassword.$error }"
                v-model="repeatPasswordInput" 
                aria-required="true">
            <div class="invalid-feedback" v-if="!$v.form.repeatPassword.sameAsPassword">El campo Contraseña y Reescribir Contraseña no son iguales.</div>
        </div>								  									 
		<button type="submit" class="btn btn-primary">Registrar</button>								
	</form>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
    name: "FormUsuario",
    data() {
        return {
            form: {
                name: "",
                lastName: "",
                email: "",
                user: "",
                password: "",
                repeatPassword: ""
            }
        }
    },
    validations: {
        form: {
            name: { 
                required, 
                minLength: minLength(6) 
            },
            email: { 
                required, 
                email 
            },
            user: { 
                required, 
                minLength: minLength(6) 
            },
            password: {
                required,
                minLength: minLength(6)
            },
            repeatPassword: {
                sameAsPassword: sameAs('password')
            }
        }
    },
    computed: {
        nameInput: {
            get() {
                return this.form.name;
            },
            set(value) {
                this.$v.form.name.$touch;
                this.form.name = value;
            }
        },
        emailInput: {
            get() {
                return this.form.email;
            },
            set(value) {
                this.$v.form.email.$touch;
                this.form.email = value;
            }
        },
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
        },
        repeatPasswordInput: {
            get() {
                return this.form.repeatPassword;
            },
            set(value) {
                this.$v.form.repeatPassword.$touch;
                this.form.repeatPassword = value;
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