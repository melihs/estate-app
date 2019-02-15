<template>
    <div class="d-flex justify-content-center mt-5 border border-0 p-5 shadow">
        <button v-on:click="get" class="btn btn-primary mr-3">show</button>
        <button v-on:click="save" class="btn btn-success mr-3">save</button>
        <button v-on:click="update" class="btn btn-warning mr-3">update</button>
        <button v-on:click="remove" class="btn btn-danger mr-3">delete</button>
    </div>
    <!--<ul class="list-group mt-4">-->
        <!--<li class="list-group-item border-top-0 shadow" v-for="user in users">-->
            <!--<strong>id : {{ user.id }}</strong>-->
            <!--<p><strong>adı :</strong> {{ user.name }}</p>-->
            <!--<p><strong>soyadı :</strong> {{ user.surname }}</p>-->
            <!--<p><strong>e-posta :</strong> {{ user.email }}</p>-->
            <!--<p><strong>adres :</strong> {{ user.address }}</p>-->
            <!--<p><strong>telefon :</strong> {{ user.phone }}</p>-->
            <!--<p><strong class="text-danger">personel durumu :</strong> {{ user.personel }}</p>-->
        <!--</li>-->
    <!--</ul>-->
</template>