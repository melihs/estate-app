<template>
    <div class="row">
        <div class="col-md-8 offset-2 mt-5">
            <ul class="list-group mt-4">
                <li class="list-group-item border-top-0 shadow" v-for="user in users">
                    <strong>id : {{ user.id }}</strong>
                    <p><strong>adı :</strong> {{ user.name }}</p>
                    <p><strong>soyadı :</strong> {{ user.surname }}</p>
                    <p><strong>e-posta :</strong> {{ user.email }}</p>
                    <p><strong>adres :</strong> {{ user.address }}</p>
                    <p><strong>telefon :</strong> {{ user.phone }}</p>
                    <p><strong class="text-danger">personel durumu :</strong> {{ user.personel }}</p>
                </li>
            </ul>
            <button v-on:click="get" class="btn btn-primary mr-3">Listele</button>
            <router-link to='/create' tag='button' class='btn btn-success float-right'>ekle</router-link>
        </div>
    </div>
</template>
<script>
    import User from './Users'
    import axios from 'axios'
    export default {
        components: {
            User
        },
        data() {
            return {
                users: []
            }
        },
        methods: {
            get() {
                axios.get('http://estate-app-api.test/api/users', {
                    params: {
                        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lc3RhdGUtYXBwLWFwaS50ZXN0XC9hcGlcL2xvZ2luIiwiaWF0IjoxNTUwMjM2NTY3LCJleHAiOjE1NTAyNDAxNjcsIm5iZiI6MTU1MDIzNjU2NywianRpIjoiSlNnSTVtRGtDNUl0ckRsMSIsInN1YiI6MTEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.s7TbgC4c8cFLLor_jjxYGf_JvDbv6GxefOvK59T0Oq0'
                    }
                }).then(response => {
                    this.users = response.data.data
                })
            }
        }
    }
</script>

