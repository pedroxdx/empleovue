<template>
    <form id="contact-form" @submit.prevent="submit" method="post">
        <div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.name.$error }" for="contactform-name">Nombre</label>
            <input type="text" 
                class="form-control"
                :class="{ 'is-invalid': $v.form.name.$error }" 
                v-model="nameInput" 
                aria-required="true" />
            <div class="invalid-feedback" v-if="!$v.form.name.required">El campo Nombre es Requerido.</div>
            <div class="invalid-feedback" v-if="!$v.form.name.minLength">El campo requiere un mínimo de 4 caracteres.</div>
        </div>
        <div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.email.$error }" for="contactform-email">Email</label>
            <input type="text" 
                class="form-control" 
                :class="{ 'is-invalid': $v.form.email.$error }"
                v-model="emailInput" 
                aria-required="true" />
            <div class="invalid-feedback" v-if="!$v.form.email.required">El campo Email es Requerido.</div>
            <div class="invalid-feedback" v-if="!$v.form.email.email">El campo Email no es válido.</div>
        </div>
        <div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.subject.$error }" for="contactform-subject">Asunto</label>
            <input type="text" 
                class="form-control"
                :class="{ 'is-invalid': $v.form.subject.$error }"
                v-model="subjectInput"
                aria-required="true" />
            <div class="invalid-feedback" v-if="!$v.form.subject.required">El campo Asunto es Requerido.</div>
            <div class="invalid-feedback" v-if="!$v.form.subject.minLength">El campo requiere un mínimo de 4 caracteres.</div>
        </div>
        <div class="form-group">
            <label class="control-label" :class="{ 'text-red': $v.form.message.$error }" for="contactform-body">Mensaje</label>
            <textarea 
                class="form-control"
                :class="{ 'is-invalid': $v.form.message.$error }"
                v-model="messageInput" 
                rows="6" 
                aria-required="true"></textarea>
            <div class="invalid-feedback" v-if="!$v.form.message.required">El campo Mensaje es Requerido.</div>
            <div class="invalid-feedback" v-if="!$v.form.message.minLength">El campo requiere un mínimo de 4 caracteres.</div>
        </div>
        <div class="form-group text-center">
            <button type="submit" class="btn btn-primary">Enviar</button>                    
        </div>
    </form>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
    name: "FormContacto",
    data () {
        return {
            form: {
                name: "",
                email: "",
                subject: "",
                message: ""
            }
        }
    },
    validations: {
        form: {
            name: { 
                required, 
                minLength: minLength(4) 
            },
            email: { 
                required, 
                email 
            },
            subject: { 
                required, 
                minLength: minLength(4) 
            },
            message: { 
                required, 
                minLength: minLength(4) 
            },
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
        subjectInput: {
            get() {
                return this.form.subject;
            },
            set(value) {
                this.$v.form.subject.$touch;
                this.form.subject = value;
            }
        },
        messageInput: {
            get() {
                return this.form.message;
            },
            set(value) {
                this.$v.form.message.$touch;
                this.form.message = value;
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
.btn {
    width: 100px;
}
</style>