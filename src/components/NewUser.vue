<template>
    <div class="row justify-content-sm-center">
        <form class="col-md-4 form-group">
            <fieldset>
                <div class="form-group">
                    <input v-model="user.name" type="text" class="form-control" placeholder="Adınız">
                </div>
                <div class="form-group">
                    <input v-model="user.surname" type="text" class="form-control" placeholder="Soyadınız">
                </div>
                <div class="form-group">
                    <input v-model="user.email" type="email" class="form-control" placeholder="E-posta">
                </div>
                <div class="form-group">
                    <textarea v-model="user.address" id="address" cols="46" rows="2" placeholder="adres"></textarea>
                </div>
                <div class="form-group">
                    <input v-model="user.phone" type="tel" class="form-control" placeholder="telefon">
                </div>
                <div class="form-group">
                    <input v-model="user.password" type="password" class="form-control" placeholder="Parola">
                </div>
                <div class="form-group">
                    <input v-model="user.password_confirmation" type="password" class="form-control" placeholder="Parola tekrar">
                </div>
                <button type="submit" class="btn btn-block btn-success">Kayıt</button>
                <router-link to='/cms' tag='button' class='btn btn-block btn-danger'>İptal</router-link>
            </fieldset>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                user : {
                    name : '',
                    surname : '',
                    email : '',
                    address : '',
                    phone : '',
                    password : '',
                    password_confirmation : '',
                }
            }
        },
        save() {
             axios.post('http://estate-app-api.test/api/register',this.user)
                 .then(response => {
                     console.log(response)
                 })
        },
    }
</script>
