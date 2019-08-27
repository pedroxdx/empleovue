<template>
    <div class="recuperar-password">
        <page-header :title="title" />
        <section class="empleos-buscador">
	        <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-3 col-md-3">
                        &nbsp;
                    </div>
        	        <div class="col-12 col-sm-6 col-md-6">
        		        <div class="the-box rounded">
                            <form id="password-form" @submit.prevent="submit" method="post">
						        <div class="form-group">
                                    <label class="control-label" :class="{ 'text-red': $v.form.email.$error }" for="recuperaremail-email">Email</label>
                                    <input type="text" 
                                        class="form-control"
                                        :class="{ 'is-invalid': $v.form.email.$error }"
                                        v-model="emailInput" 
                                        aria-required="true">
                                    <div class="invalid-feedback" v-if="!$v.form.email.required">El campo Email es Requerido.</div>
                                    <div class="invalid-feedback" v-if="!$v.form.email.email">El campo Email no es válido.</div>
                                </div>						
						        <button type="submit" class="btn btn-primary">Enviar Correo</button>					
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
import { required, email } from 'vuelidate/lib/validators'
import PageHeader from "@/components/PageHeader.vue";

export default {
    name: "recuperar-password",
    components: {
        PageHeader
    },
    data() {
        return {
            title: "Recuperar Contraseña",
            form: {
                email: ""
            }
        }
    },
    validations: {
        form: {
            email: { 
                required, 
                email 
            }
        }
    },
    computed: {
        emailInput: {
            get() {
                return this.form.email;
            },
            set(value) {
                this.$v.form.email.$touch;
                this.form.email = value;
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