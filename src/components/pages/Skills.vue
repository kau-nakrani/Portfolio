<template>
<div class="row">
    <div class="col-lg-12 my-5">
        <h2 class="text-center heading">Skills & Experience</h2>
    </div>

    <div class="col-lg-5">
        <div class="skills back_white cp-3 text-left">
            <h3>Expertise</h3>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-frontend-tab" data-toggle="pill" href="#pills-frontend" role="tab" aria-controls="pills-frontend" aria-selected="true">Frontend</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-backend-tab" data-toggle="pill" href="#pills-backend" role="tab" aria-controls="pills-backend" aria-selected="false">Backend</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-design-tab" data-toggle="pill" href="#pills-design" role="tab" aria-controls="pills-design" aria-selected="false">Design</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-frontend" role="tabpanel" aria-labelledby="pills-frontend-tab">
                    <div class="mb-3" v-for="fro_skill in froskill" :key="fro_skill.id">
                        <div class="skill-name">{{fro_skill.name}}</div>
                        <div class="chart">
                            <div class="bar skill-per" :per="fro_skill.pern"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-backend" role="tabpanel" aria-labelledby="pills-backend-tab">
                    <div class="mb-3" v-for="back_skill in backskill" :key="back_skill.id">
                        <div class="skill-name">{{back_skill.name}}</div>
                        <div class="chart">
                            <div class="bar skill-per" :per="back_skill.pern"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                    <div class="mb-3" v-for="des_skill in desskill" :key="des_skill.id">
                        <div class="skill-name">{{des_skill.name}}</div>
                        <div class="chart">
                            <div class="bar skill-per" :per="des_skill.pern"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-2">
        <div class="nav d-block" id="nav-tab">
            <a v-for="(obskill, index) in edu_expri" :key="obskill" :class="['list_skill',index == 0 ? 'active':'']" data-toggle="tab" :id="'#'+obskill.name" :href="'#'+obskill.name" :aria-controls="obskill.name" aria-selected="false">
                {{obskill.name}}
            </a>
        </div>
    </div>
    <div class="col-lg-5">
        <div class="tabe_contain">
            <div v-for="(obskill, index) in edu_expri" :key="obskill" :class="['tab-pane fade',index == 0 ? 'active  show':'']" :id="obskill.name" :aria-labelledby="'#'+obskill.name">
                <div class="single-detail-item text-left" v-for="obsk in obskill.details" :key="obsk">
                    <div class="year"><span>{{obsk.year}}</span></div>
                    <h5>{{obsk.scholl_name}}</h5>
                    <p class="mt-4">{{obsk.description}}</p>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import dbinfo from '../global/Gdb'
export default {
    name: 'Skills',
    data() {
        return {
           froskill:dbinfo.skills.frontend,
           backskill:dbinfo.skills.backend,
           desskill:dbinfo.skills.design,
           edu_expri:dbinfo.skills.eduction
        }
    }
};
</script>

<style>
/*Eduction and EXPERIENCE*/
.back_white {
    padding: 45px;
}
ul.nav .nav-link{
   margin-top: 12px;   
}
.nav.nav-pills li{
    margin: auto;
}
ul.nav .nav-link.active{
    background: #00203f;
    color: #adefd1;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 12px;
}
.single-detail-item {
    display: block;
    margin-bottom: 30px;
    background-color: #fff;
    position: relative;
    padding: 30px;
    padding-bottom: 20px;
    padding-right: 40px;
}

a.list_skill {
    position: relative;
    background-color: #fff;
    display: block;
    color: #333;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    line-height: 1;
    padding: 40px 10px;
    border-radius: 0px;
    margin-bottom: 30px;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in;
    cursor: pointer;
    text-decoration: none;
}

.single-detail-item .year {
    margin-bottom: 20px;
    display: inline-block;
    padding: 10px 20px;
    color: #00203f;
    background-color: #adefd1;
    font-weight: 500;
    font-size: 17px;
    line-height: 1;
    border-radius: 3px;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in;
}

a.list_skill:hover,
.list_skill.active,
.year:hover {
    background-color: #adefd1;
    color: #00203f;
    text-decoration: none;
}

a.list_skill:hover:before,
.list_skill.active:before {
    visibility: visible;
    opacity: 1;
}

a.list_skill:before {
    position: absolute;
    left: 100%;
    content: "";
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid #adefd1;
    border-bottom: 10px solid transparent;
    visibility: hidden;
    opacity: 0;
    margin-left: -1px;
}

.tab-pane.fade {
    display: none;
}

.tab-pane.fade.active {
    display: block;
}

/*skill*/
.skill-name {
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0;
}

.skill-per {
    height: 20px;
    background-color: #adefd1;
    width: 0;
    transition: 1s linear;
    position: relative;
}

.bar::before {
    content: attr(per);
    position: absolute;
    padding: 4px 6px;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    top: -35px;
    right: 0;
    transform: translateX(50%);
}

.bar::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #000;
    top: -16px;
    right: 0;
    transform: translateX(50%) rotate(45deg);
    border-radius: 2px;
}

.chart {
    background-color: #DADADA;
    height: 15px;
    position: relative;
}

.chart .bar {
    height: 100%;
    -moz-animation: animate-bar 1.25s 1 linear;
    -webkit-animation: animate-bar 1.25s 1 linear;
    -ms-animation: animate-bar 1.25s 1 linear;
    -o-animation: animate-bar 1.25s 1 linear;
    animation: animate-bar 1.25s 1 linear;
}
</style>
