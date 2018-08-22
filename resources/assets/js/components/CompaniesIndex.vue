<template>
<div>
   <div class="row">
        <div class="col-md-12 mb-1">
            <router-link v-bind:to="'/create'" class="btn btn-success float-right">Create Companies</router-link>     
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Companies List</div>
                <div class="card-body">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Website</th>
                                <th>Email</th>
                                <th width="100">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="company, index in companies">
                                <td>{{ company.name }}</td>
                                <td>{{ company.address }}</td>
                                <td>{{ company.website }}</td>
                                <td>{{ company.email }}</td>
                                <td>
                                    <router-link v-bind:to="{ name: 'editCompany', params: { id: company.id } }" class="btn btn-info">Edit</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            companies: []
        }
    },
    mounted() {
        var app = this;
        axios.get('/api/v1/companies')
        .then(function (resp) {
            app.companies = resp.data;
        })
        .catch(function (resp) {
            console.log(resp);
            alert('Could not load companies data');
        });
    }
};
</script>

<style scoped>
</style>
