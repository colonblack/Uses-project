<template>


  <div class="container">

    <table class="table mt-5">
      <thead>
        <tr>
          <th >#</th>
          <th >Title</th>
          <th>Firstame</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>View</th>
    
         
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, i) in getFirstPage(allUsers, this.perPage, this.page)" :key="i">
 
           <td><img v-bind:src="entry.picture"/>  </td>
           <td>{{ entry.title }}</td>
            <td>{{ entry.firstName }}</td>
            <td>{{ entry.lastName }}</td>
            <td>{{ entry.gender}}</td>
            <td>{{ entry.email }}</td> 
            <td >
                <button type="button" class="btn btn-primary" @click="getSingleUser(entry)"
                 >View</button></td>
        </tr>
      </tbody>
    </table>
    <pagination v-model="page" :per-page="perPage" :records="allUsers.length" @paginate="paginationCallBack"/>

  </div>

</template>

<script>
import Pagination from 'vue-pagination-2';
import { mapGetters, mapActions } from 'vuex';
export default {
    name:"users",
    components: {Pagination},
    data(){
        return{
            page:1,
            users:[],
            perPage: 5
        }
        
    },
    methods:{
       getSingleUser: async function( user){
        const user64 = btoa(JSON.stringify(user))
        //debugger;
        this.$router.push({ path: `/detail/${user64}` })
   
    },
        ...mapActions([
            "fetchUsers",
       
        ]),
        paginationCallBack: async function(){
        },
        getFirstPage(allUsers, perPage, page){
            if(this.page == 1 ){
                return allUsers.slice(0, perPage)
            }else{
                return allUsers.slice((this.page*(this.perPage)/2) -1, (page*(this.perPage)/2) + (perPage-1))
            }
        }
    },
    computed:mapGetters(["allUsers"]),
    created(){
        this.fetchUsers();
    },
    mounted(){
        const user= this.$store.getters.fetchUsers;
      this.users.push(user)

    }
}
</script>
<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>