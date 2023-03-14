<!-- SAMPLE ONLY -->
<template>
    <div>
        <tool-bar/>
        <div class = 'loginRows'>
            <div class='loginColumns'>
                <div class='loginCard cards'>
                    <h3>Login</h3>
                    <input id = 'field' v-model="form['usercred']" placeholder="Username or Email">
                    <input id = 'field' v-model="form['pass']" placeholder="Password" type='password' name="loginpass">
                    <br>
                    <button class='btn' id='loginButtons' @click="signed()"> Log In </button>
                </div>
            </div>
            <div class='loginColumns'>
                <div class='loginCard' id='signup'>
                    <h3>Signup</h3>
                    
                    
                    <input id="field" v-model="form['email']" placeholder="Email">
                    <input id="field" v-model="form['username']" placeholder="Username">
                    <input id="field" v-model="form['password']" placeholder="Password" type='password'>
                    <br>
                    <div>
                        <input v-model="form['role']" type='radio' value="seller" id="seller" name="role" @change="onChange($event)">
                        <label for="seller">Seller</label>
                    </div>
                    <div>
                        <input v-model="form['role']" type="radio" value="buyer" id="buyer" name="role" @change="onChange($event)">
                        <label for="buyer">Buyer</label>
                    </div>
                    <button class='btn' id='loginButtons' @click="signed()"> Log In </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue'
export default{
  components: { ToolBar 
  },
    name: 'LogIn',
     data(){
        return{
        form:{}   
        }
    },
    methods:{
        onChange(event){
            console.log(event.target.value)
        },
        signed(){
            console.info(this.form)
        }
    },
   
}
</script>
<style>
    h3{
        margin: 0 0 10px 0;
    }
    .loginCard{
        margin: 0 10px;
        height: 135px;
        bottom: 40px;
        padding: 15px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        width: 300px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border: solid 3px darkblue;
        border-radius: 4px;
    }
    .loginColumns{
        float: left;
        width: 15%;
        margin: 0 10px;
    }
    .loginRows{
        margin: -10px 0 0 -10px;
    }
    .loginRows:after{
        content: "";
        display: table;
        clear: both;
    }
    #field{
        width: 255px;
        margin-bottom: 5px;
    }
    #loginButtons{
        position: relative;
        height: 25px;
        left: 185px;
    }
    #signup{
        margin-left: 100px;
        height: 100%;
    }
    @media screen and (max-width: 700px){
        .loginCard{
            width: 300px;
            margin: 10px;
        }
        #field{
            width: 85%;
        }
        #loginButtons{
            height: 30px;
            width: 30%;
            left: 59%;
        }
        .loginRows{
            width: 100;;
            padding: 0;
            margin: auto;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
        }
        .loginColumns{
            justify-content: space-between;
            flex-direction: column;
            margin: 0;
            display: flex;
            flex-grow: 1;
            flex-basis: 300px;
        }
    }
</style>