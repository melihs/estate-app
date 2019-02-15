<template>
    <div class="row justify-content-sm-center">
        <form class="col-md-4 form-group">
            <fieldset>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Adınız">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Soyadınız">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="E-posta">
                </div>
                <div class="form-group">
                    <textarea name="address" id="address" cols="46" rows="2" placeholder="adres"></textarea>
                </div>
                <div class="form-group">
                    <input type="tel" class="form-control" placeholder="telefon">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Parola">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Parola tekrar">
                </div>
                <button type="submit" class="btn btn-block btn-warning">Güncelle</button>
                <router-link to='/' tag='button' class='btn btn-block btn-danger'>İptal</router-link>
            </fieldset>
        </form>
    </div>
</template>
