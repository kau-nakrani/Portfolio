<template>
<div class="loaderback" v-if="showloader">
    <stretch></stretch>
</div>
<div class="container">
    <div class="row">
        <div class="col-lg-12 my-5">
            <router-link to="/" class="ml-2 redir_home"><i class="icon-home mr-1"></i>Home</router-link>
        </div>
        <div class="col-lg-12 my-5">
            <h2 class="text-center heading">Portfolio</h2>
        </div>
        <div class="col-lg-12">
             <ul class="unique_cate p-0 text-center m-auto">
                <li>
                    <a cure_slug="all" :class="active_menu" @click="active_filter">Show All</a>
                </li>
                <li v-for="(viewcat,index) in total_catego" :key="index">
                    <a :cure_slug="viewcat" :class="active_class(viewcat)" @click="active_filter">{{viewcat}}</a>
                </li>
            </ul>
        </div>

        <div v-for="(catrgors,index) in listservice" :key="index" :class="['col-lg-4 grid_item', activeclass == 'all' ?'d-show':''|| hideshow(activeclass,catrgors)]" :cat_name="catrgors.name">

            <div class="psingle_item py-4">
                <a href="javascript:void(0);" @click="proejct_detail(catrgors.id)" data-toggle="modal" data-target="#exampleModalLong">
                    <img :src="catrgors.img" class="img-fluid">
                    <span class="read_more"><i class="icon-eye-open" aria-hidden="true"></i></span>
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">{{project_title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <img :src="project_imag" class="w-100">
                    </div>
                    <div class="col-12 mt-4 text-left">
                        <p v-if="project_type"><i class="icon-file-alt"></i> <label><strong>Project : </strong></label> {{project_type}}</p>
                        <p v-if="project_time"><i class="icon-time"></i> <label><strong>Duration : </strong></label> {{project_time}}</p>
                        <p v-if="project_techn"><i class="icon-code"></i> <label><strong>Technologies : </strong></label> {{project_techn}}</p>
                        <p v-if="project_descr"><i class="icon-file-text-alt"></i> <label class="mb-0"><strong>Description : </strong></label> <span v-html="project_descr"></span></p>
                    </div>
                </div>
            </div>
            <div class="modal-footer"  v-if="showurl">
                <a :href="project_url" target="_blank" class="text-left mr-auto btn review"><i class="icon-external-link"></i> View Site</a>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'
import {Stretch} from 'vue-loading-spinner'

export default {
    name: 'Portfolio',
    data() {
        return {
            activeclass: '',
            active_menu: '',
            listservice: [],
            project_title: '',
            project_type: '',
            project_time: '',
            project_techn: '',
            project_url: '',
            project_descr: '',
            showloader:false,
            showurl:false,
        }
    },
    components: {
      Stretch
    },
    computed: {
        catrgors() {
            return this.listservice.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i);
        },
         total_catego(){
            let catitems =  [];
            const values = this.listservice.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i);
            const length = values.length;
            for (let i = 0; i < length; i++) {
                if(catitems.length == 0){
                   catitems = {
                       'items' : values[i].name.split(","),
                       };
                  
                }else{
                    let namene = values[i].name.split(",");
                    catitems['items'] = [].concat(catitems['items'],namene);
                   
                }
            }

            let ati_tems = [...new Set(catitems['items'])];
           
            return ati_tems;
         }
    },
    created() {
        this.active_menu = 'active';
        this.showloader=true;
        this.getList();
        return this.activeclass = 'all';
    },
    methods: {
        hideshow(activeclass,catrgors){
            let classname = activeclass.split(",").splice(0,1).join("");
            let active_class = catrgors.name.split(",");
            let hide_show_cl = active_class.includes(classname) == true ? 'd-show':'d-none';
            return hide_show_cl;
        },
        active_class(act_catename){
            let activeclass = this.activeclass.split(",").splice(0,1).join("");
            let retclass = act_catename == activeclass ? 'active':''
            return retclass;
        },
        active_filter(event) {
            const value = event.currentTarget.getAttribute('cure_slug');
            this.active_menu = value == 'all' ? 'active' : '';
            return this.activeclass = value;
        },
        proejct_detail(id) {
            let find_data = this.listservice.find(curr_data => curr_data.id == id);
            this.project_imag = find_data.img;
            this.project_type = find_data.Project;
            this.project_time = find_data.duration;
            this.project_techn = find_data.technologies;
            this.project_url = find_data.url;
            this.project_descr = find_data.description
            this.showurl = find_data.url
            return this.project_title = find_data.title;
        },
        async getList() {
            
            await axios.post('/jdata/prod/v1/gprotfoli',{
                'key':'$2y$10$GNl1Oe.YMIQ25ng87VbgMOgFcRGQLq/D6TN1gUpguajuX/iY0Wosy'
            }).then(
                response => {
                    this.listservice = response.data.listservice;
                    this.showloader=false;
                }
            ).catch(
                error => {
                    this.listservice = error.message;
            });
        }
    }
};

</script>

<style scoped>
.psingle_item a {
    position: relative;
    display: block;
}

.psingle_item a:hover:before {
    opacity: .3;
    visibility: visible;
    height: 100%;
}

.psingle_item a::before {
    position: absolute;
    width: 100%;
    height: 0%;
    text-align: center;
    background: #0bc0ba;
    left: 0;
    bottom: 0;
    content: "";
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .3s;
    transition: .3s;
}

.psingle_item a:hover .read_more {
    visibility: visible;
}

.read_more {
    color: #0bc0ba;
    opacity: 1;
    visibility: visible;
    position: absolute;
    left: 43%;
    bottom: 43%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    display: inline-block;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    -webkit-transition: .35s;
    transition: .3s;
    opacity: 1;
    visibility: hidden;
    -webkit-box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
    z-index: 1;
}

.review {
    background: #0bc0ba;
    color: #fff;
}

ul.unique_cate li {
    display: inline-block;
    padding: 10px 19px;
}
.unique_cate li a:hover{
    color: #adefd1; 
}
.unique_cate li a {
    text-decoration: none;
    cursor: pointer;
}

.unique_cate li .active {
    background: #00203f;
    color: #adefd1;
    text-decoration: none;
    padding: 13px;
    border-radius: 5px;
}
.loaderback{
    background: #031a2eb8;
    width: 100%;
    position: absolute;
    z-index: 1111111111;
    height: 100%;
}
.spinner.spinner--stretch{
    position: fixed;
    margin: auto;
    left: 50%;
    top: 50%;
}
@media (min-width: 576px){
    .modal-dialog {
        max-width: 800px;
        margin: 1.75rem auto;
    }
}
.redir_home{
    background: #00203f;
    color: #adefd1;
    text-decoration: none;
    padding: 13px;
    border-radius: 5px;  
}
</style>