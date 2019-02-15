<template>
    <div class="row">
        <div class="col-md-8 offset-2 mt-5">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Müşteri adı</th>
                    <th scope="col">Lokasyon</th>
                    <th scope="col">Tarih</th>
                    <th scope="col">Randevu Süresi</th>
                    <th scope="col">İşlemler</th>
                </tr>
                </thead>
                <tbody>
                    <User v-for="index in 10" :key="index" />
                </tbody>
            </table>
            <router-link to='/create' tag='button' class='btn btn-success float-right'>ekle</router-link>
        </div>
    </div>
</template>
<script>
    import User from './User'
    export default {
        components : {
            User
        }
    }
</script>

