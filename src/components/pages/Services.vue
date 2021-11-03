<template>
    <div class="row">

        <div class="col-lg-12 my-5">
            <h2 class="text-center heading" data-aos="fade-up" data-aos-duration="1000">Services</h2>
        </div>
        <div class="col-lg-12 my-5">
           
         <div class="row">
            <div class="col-lg-4 allservices text-center" v-for="services in listservice" :key="services.id" data-aos="fade-up" data-aos-duration="1000">
                <div class="list_services py-5 my-2">
                    <div class="icon">
                        <img :src="services.img"/>
                    </div>
                    <h4 class="my-3 px-4">{{services.title}}</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import dbinfo from '../global/Gdb'
export default{
  name:'Services',
  data(){
      return{
        listservice:dbinfo.listservice 
      }
  }
};
</script>
<style scoped>
.list_services {
  position: relative;
}
.allservices .list_services :before{
  content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    right: 0;
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 0;
    visibility: hidden;
    background-color: #adefd1;
    -webkit-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}
.allservices:hover .list_services ::before {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
}
.list_services{
  border: 1px solid #00203f;
}
</style>