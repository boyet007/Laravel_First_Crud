<template>
<div>
    <div class="row">
        <div class="col-md-12 mb-1">
            <router-link v-bind:to="'/'" class="btn btn-success float-right">Back</router-link>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Create New Company</div>
                <div class="card-body">
                    <form method="post" v-on:submit.prevent="saveForm()">
                        <div class="form-group row">
                            <label for="" class="offset-sm-2 col-sm-2">Name</label>
                            <input type="text" name="name" id="" v-model="company.name" placeholder="input name" class="form-control col-sm-5">
                        </div>
                        <div class="form-group row">
                            <label for="" class="offset-sm-2 col-sm-2">Address</label>
                            <input type="text" name="address" id="" v-model="company.address" placeholder="input address" class="form-control col-sm-5">
                        </div>      
                        <div class="form-group row">
                            <label for="" class="offset-sm-2 col-sm-2">Website</label>
                            <input type="text" name="website" v-model="company.website" id="" placeholder="input website" class="form-control col-sm-5">
                        </div>   
                        <div class="form-group row">
                            <label for="" class="offset-sm-2 col-sm-2">Email</label>
                            <input type="text" name="email" id="" v-model="company.email" placeholder="input email" class="form-control col-sm-5">
                        </div>  
                        <div class="form-group row">
                            <div class="offset-sm-2 col-sm-2">
                                
                            </div>
                            <button class="btn btn-success">Create</button>
                        </div>    
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            company: {
                name: '',
                address: '',
                website: '',
                email: ''
            }
        }
    },
    methods: {
        saveForm() {
            var app = this;
            var newCompany = app.company;
            axios.post('/api/v1/companies', newCompany)
            .then(function (resp) {
                app.$router.push( {path: '/'} );
            })
            .catch(function (resp){
                alert('Could not create your company');
            });
        }
    }
}
</script>

<style scoped>

</style>
