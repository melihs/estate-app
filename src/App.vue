<template>
  <div class="container mt-4">
      <h1 class="text-center mb-4">Iceberg Emlak Randevu Uygulaması</h1>
      <router-view></router-view>
  </div>
</template>
<script>
    // import axios from 'axios'
    // export default {
    //     data() {
    //         return {
    //             users : []
    //         }
    //     },
    //     methods : {
    //         get() {
    //             axios.get('http://estate-app-api.test/api/users',{
    //                 params : {
    //                     token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lc3RhdGUtYXBwLWFwaS50ZXN0XC9hcGlcL2xvZ2luIiwiaWF0IjoxNTUwMTY0OTkyLCJleHAiOjE1NTAxNjg1OTIsIm5iZiI6MTU1MDE2NDk5MiwianRpIjoiU1NoVENOd3NTc3ZsNk5MOCIsInN1YiI6MTEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.52WD44qLyBnfDGwAZGGp0vaYNYXpzzzQmOmp3k5G3LE'
    //                 }
    //             }).then(response =>{
    //                 this.users =response.data.data
    //             })
    //         },
    //         save() {
    //             let user = {
    //                 name                    : 'user8',
    //                 surname                 : 'user8 surname',
    //                 email                   : 'user8@gmail.com',
    //                 address                 : 'user8 address',
    //                 phone                   : '5452362727',
    //                 personel                : '0',
    //                 password                : '123456',
    //                 password_confirmation   : '123456',
    //             }
    //             axios.post('http://estate-app-api.test/api/register',user)
    //                 .then(response => {
    //                     console.log(response)
    //                 })
    //         },
    //         update() {
    //             let user = {
    //                 name                    : 'user1',
    //                 surname                 : 'user8 surname',
    //                 email                   : 'user8@gmail.com',
    //                 address                 : 'user8 address',
    //                 phone                   : '123467889',
    //                 personel                : '0',
    //                 password                : '123456',
    //                 password_confirmation   : '123456',
    //                 token                   : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lc3RhdGUtYXBwLWFwaS50ZXN0XC9hcGlcL2xvZ2luIiwiaWF0IjoxNTUwMTUwMDQ2LCJleHAiOjE1NTAxNTM2NDYsIm5iZiI6MTU1MDE1MDA0NiwianRpIjoiTXcwZ3FhRnVHREdWTzNnZSIsInN1YiI6MTEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.Tlsab6tyLUMW7wxWHBg2BroXLMfruoOowrabS8SyBw8'
    //             }
    //             axios.put('http://estate-app-api.test/api/users/14',user)
    //                 .then(response => {
    //                     console.log(response)
    //                 })
    //         },
    //         remove() {
    //             axios.delete('http://estate-app-api.test/api/users/16', {
    //                 data : {
    //                     token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9lc3RhdGUtYXBwLWFwaS50ZXN0XC9hcGlcL2xvZ2luIiwiaWF0IjoxNTUwMTU0MjA0LCJleHAiOjE1NTAxNTc4MDQsIm5iZiI6MTU1MDE1NDIwNCwianRpIjoiYWNTUWREYVo5Mnp5VXg3byIsInN1YiI6MTEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.cmc2apkZ84HRP-jaW8G8hmOXas1ZT7-En-KtE5y0kdc'
    //                 }
    //             })
    //             .then(response => {
    //                 console.log(response)
    //             })
    //         },
    //     }
    // }
</script>
<style>

</style>