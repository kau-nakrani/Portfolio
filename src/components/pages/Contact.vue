<template>
<div class="row">

    <div class="col-lg-12 my-5">
        <h2 class="text-center heading" data-aos="fade-up" data-aos-duration="1000">Contact</h2>
    </div>
    <div class="col-lg-5 text-left">
        <div class="con_inform back_white p-4">
            <h4>Email :</h4>
            <a href="mailto:kaushiknakrani1993@gmail.com">kaushiknakrani1993@gmail.com</a>
        </div>
        <div class="con_inform back_white p-4 my-3">
            <h4>Call Me :</h4>
            <a href="tel:+91 91040 89915">+91 91040 89915</a>
        </div>
        <div class="con_inform back_white p-4">
            <h4>Location :</h4>
            <span>Shubh laxmi soc, Surat, Gujarat, India</span>
        </div>
    </div>
    <div class="col-lg-7 pt-4 pt-sm-0">
        <div class="contact_form">
            <form @submit.prevent="savecontact" method="post" class="row">
                <div class="col-md-6 col-12">
                    <div class="cont_input">
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" v-model="form.cname" required>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="cont_input">
                        <input type="email" name="email" id="email" placeholder="Enter Your Email" v-model="form.cemail" required>
                    </div>
                </div>
                <div class="col-md-12 col-12">
                    <div class="cont_input">
                        <input type="text" name="contactno" id="contactno" placeholder="Enter Your Contact No" v-model="form.cphone" required>
                    </div>
                </div>
                <div class="col-md-12 col-12">
                    <div class="cont_input">
                        <textarea id="Message" name="message" placeholder="Message" v-model="form.cmsg" required/>
                        </div>
                        </div>
                         <div class="col-md-12 col-12">
                            <div class="cont_input text-left">
                                <button class="theme-btn">Submit</button>
                            </div>
                        </div>
                    </form> 
                </div>
              </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Contact',
    data() {
        return {
            form: {
                cname: '',
                cemail: '',
                cmsg: '',
                cphone: ''
            }
        }
    },

    methods: {

        async savecontact() {

            let contac_name = this.form.cname.trim();
            let contac_email = this.form.cemail.trim();
            let contac_msg = this.form.cmsg.trim();
            let contac_no = this.form.cphone.trim();

            if (!contac_name) {
                alert('Please enter your name');
            }
            else if(!contac_email){
                alert('Please enter your email');
            }
            else if(!contac_msg){
                alert('Please enter your message');
            }
            else if(!contac_no){
                alert('Please enter your contact');
            }else{
                await axios.post('/jdata/prod/v1/add_kaushik',{
                    'key':'$2y$10$GNl1Oe.YMIQ25ng87VbgMOgFcRGQLq/D6TN1gUpguajuX/iY0Wosy',            
                    fname: contac_name,
                    femail: contac_email,
                    fmsg: contac_msg,
                    fcontac: contac_no
                }).then(
                    response => {
                        if (response.status == 200) {
                            alert('Thanks for filling out the info. I will contact you soon');
                            location.reload();
                        }
                    }
                ).catch(
                    error => {
                        this.listservice = error.message;
                    }); 
            }
        }
    }
}
</script>

<style scoped>
.serv_heading span {
    font-weight: 600;
    color: #44008f;
    font-size: 18px;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 5px;
}

.back_white {
    background: #fff;
}

.cont_input input[type="text"],
.cont_input input[type="email"] {
    border: 0px;
    height: 60px;
    padding: 0px 20px;
    background: #fff;
    width: 100%;
    display: block;
    margin-bottom: 30px;
    color: #333;
    line-height: 1;

}

.cont_input input[type="text"],
.cont_input input[type="email"],
.cont_input textarea {
    box-shadow: 0px 6px 26px rgb(0 0 0 / 6%);
    -webkit-box-shadow: 0px 6px 26px rgb(0 0 0 / 6%);
}

.cont_input textarea {
    height: 175px;
    padding-top: 20px;
    line-height: 1.3;
    padding: 20px;
    background: #fff;
    width: 100%;
    display: block;
    margin-bottom: 30px;
    color: #333;
    border: none;
}

.theme-btn {
    border: none;
    border-radius: 4px;
    background-color: #adefd1;
    color: #00203f;
    line-height: 1;
    padding: 24px 49px;
}

.theme-btn:hover {
    background-color: #00203f;
    color: #adefd1;
}
</style>
