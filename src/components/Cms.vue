<template>
    <div class="d-flex justify-content-center mt-5 border border-0 p-5 shadow">
        <router-link to='/' tag='button' class='btn btn-primary mr-3'>Kullanıcılar</router-link>
        <router-link to='/create' tag='button' class='btn btn-success mr-3'>Müşteri Ekle</router-link>
        <router-link to='/update' tag='button' class='btn btn-warning mr-3'>Müşteri Düzenle</router-link>
        <button v-on:click="remove" class="btn btn-danger mr-3">Müşteri Sil</button>
    </div>
</template>