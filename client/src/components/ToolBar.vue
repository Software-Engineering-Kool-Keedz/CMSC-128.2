<!-- SAMPLE ONLY -->
<template>
    <nav class = "navbar navbar-inverse">
    <div class='toolbar-card'>
        
        <button @click="$router.push('/')" class='btn' type='click'>
            Home
        </button>
        <input class='searchBar' placeholder="Search">
        <button class='btn'>
            Search
        </button>
        <button class='btn' id='leftBtn' @click="showShopCart">
                Cart
        </button>

        <button @click="$router.push('Seller')" class ='btn' id ='leftBtn'>
            Profile
        </button>
        
        <!--Shorthand for router-link-->
        <button @click="$router.push('login')" class='btn' id='leftBtn'> 
            Sign in
        </button>
    </div>
    </nav>

        <!-- Banner Starts Here -->
    <div class = "slideshow-container">
      <div id="frame">
        <input type="radio" name="frame" id="frame1" checked />
        <input type="radio" name="frame" id="frame2" />
        <input type="radio" name="frame" id="frame3" />
        <input type="radio" name="frame" id="frame4" />
        <div id="slides">
            <div id="overflow">
                <div class="inner">
                    <div class="frame frame_1">
                        <div class="frame-content">
                            <h2></h2>
                        </div>
                    </div>
                    <div class="frame frame_2">
                        <div class="frame-content">
                            <h2></h2>
                        </div>
                    </div>
                    <div class="frame frame_3">
                        <div class="frame-content">
                            <h2></h2>
                        </div>
                    </div>
                    <div class="frame frame_4">
                        <div class="frame-content">
                            <h2></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="controls">
            <label for="frame1"></label>
            <label for="frame2"></label>
            <label for="frame3"></label>
            <label for="frame4"></label>
        </div>
        <div id="bullets">
            <label for="frame1"></label>
            <label for="frame2"></label>
            <label for="frame3"></label>
            <label for="frame4"></label>
        </div>
    </div>
  </div>
    <!-- Banner Ends Here -->
</template>
<script src>
export default {
    name: 'ToolBar',
    methods:{
        showShopCart(){
            this.$emit('showShopCart')
        }
    }
}
</script>
<style>
    
    .input{
        height: 10px;
    }
    .button{
        border: none;
    }
    .toolbar-card{
        top: -1px;
        position: sticky;
        margin-top: -10px;
        z-index: 99999;
        height: 100px;
        width: auto;
        border: 4px solid rgb(44,44,84);
        background-color: rgba(44,44,84);
    }
    .searchBar{
        margin: 2px;
    }
    .links:link{
        color:black;
        text-decoration: none;
    }
    .links:visited{
        color:black;
    }
    .btn{
        background-color: rgb(115, 164, 216);
        font-family: Arial, Helvetica, sans-serif;
        height: 50px;
        outline: none;
        border: none;
        text-align: center;
        width: 75px;
        transition: all 0.3s ease;
        margin: 1px 10px;
        border-radius: 4px;
    }
    .btn:hover{
        box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001;
    }
    .btn-container{
        padding: 12.5px;
    }
    #leftBtn{
        left: 5px;
        position: relative;
        -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
    }
    @media screen and (max-width: 700px) {
        .toolbar-card{
            top: 0;
            position: -webkit-sticky;
            position: sticky;
            width: 100%;
            display: block;
        }
        .btn{
            text-size-adjust: 80%;
            width: 15%;
        }
        #leftBtn{
            left: 0%;
        }
        input{
            width:30%;
        }
    }
    /** BANNER */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
#frame {
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  margin: auto;
  text-align: center;
  }
  
  #frame input[type=radio] {
    display: none;
    }
  
  #frame label {
    cursor: pointer;
    text-decoration: none;
  }
  
  #slides {
    padding: 10px;
    position: relative;
    z-index: 1;
  }
  
        #overflow {
            width: 100%;
            overflow: hidden;
        }
  
        #frame1:checked~#slides .inner {
            margin-left: 0;
        }
  
        #frame2:checked~#slides .inner {
            margin-left: -100%;
        }
  
        #frame3:checked~#slides .inner {
            margin-left: -200%;
        }
  
        #frame4:checked~#slides .inner {
            margin-left: -300%;
        }
  
        #slides .inner {
            transition: margin-left 800ms 
                cubic-bezier(0.770, 0.000, 0.175, 1.000);
            width: 400%;
            line-height: 0;
            height: 300px;
        }
  
        #slides .frame {
            width: 25%;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            color: #FFF;
        }
  
        #slides .frame_1 {
          background-image: url(https://images.pexels.com/photos/73526/scene-desk-pencil-notepad-73526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940https://images.pexels.com/photos/73526/scene-desk-pencil-notepad-73526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940);
           background-size: 100%;   
        }
  
        #slides .frame_2 {
          background: url(https://images.pexels.com/photos/6219067/pexels-photo-6219067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
          background-size: 100%;   
        }
  
        #slides .frame_3 {
          background: url(https://images.pexels.com/photos/6193083/pexels-photo-6193083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);
          background-size: 100%;   
        }
  
        #slides .frame_4 {
          background: url(https://images.pexels.com/photos/1469902/pexels-photo-1469902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat;
          background-size: 100%;   
        }
  
        #controls {
            margin: -180px 0 0 0;
            width: 100%;
            height: 50px;
            z-index: 3;
            position: relative;
        }
  
        #controls label {
            transition: opacity 0.2s ease-out;
            display: none;
            width: 50px;
            height: 50px;
            opacity: .4;
        }
  
        #controls label:hover {
            opacity: 1;
        }
  
        #frame1:checked~#controls label:nth-child(2),
        #frame2:checked~#controls label:nth-child(3),
        #frame3:checked~#controls label:nth-child(4),
        #frame4:checked~#controls label:nth-child(1) {
            background: url(https://image.flaticon.com/icons/svg/130/130884.svg) no-repeat;
            float: right;
            margin: 0 -50px 0 0;
            display: block;
        }
  
        #frame1:checked~#controls label:nth-last-child(2),
        #frame2:checked~#controls label:nth-last-child(3),
        #frame3:checked~#controls label:nth-last-child(4),
        #frame4:checked~#controls label:nth-last-child(1) {
            background: url(https://image.flaticon.com/icons/svg/130/130882.svg) no-repeat;
            float: left;
            margin: 0 0 0 -50px;
            display: block;
        }
  
        #bullets {
            margin: 150px 0 0;
            text-align: center;
        }
  
        #bullets label {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #ccc;
            margin: 0 10px;
        }
  
        #frame1:checked~#bullets label:nth-child(1),
        #frame2:checked~#bullets label:nth-child(2),
        #frame3:checked~#bullets label:nth-child(3),
        #frame4:checked~#bullets label:nth-child(4) {
            background: #444;
        }
  
        @media screen and (max-width: 900px) {
  
            #frame1:checked~#controls label:nth-child(2),
            #frame2:checked~#controls label:nth-child(3),
            #frame3:checked~#controls label:nth-child(4),
            #frame4:checked~#controls label:nth-child(1),
            #frame1:checked~#controls label:nth-last-child(2),
            #frame2:checked~#controls label:nth-last-child(3),
            #frame3:checked~#controls label:nth-last-child(4),
            #frame4:checked~#controls label:nth-last-child(1) {
                margin: 0;
            }
  
            #slides {
                max-width: 1000px;
                margin: 10px;
            }
        }
</style>