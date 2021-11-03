<template>
<div class="row">
    <nav class="navbar w-100">
        <div class="sitelogo text-left">
            <a v-bind:href="logourl" class="logo-text">{{logo}}</a>
        </div>
        <div class="toggle_menu d-block d-lg-none" @click="mobile_toggle">
            <i class="icon-reorder humber"></i>
        </div>
        <div class="menusbar text-right d-none d-lg-block">
            <ul class="mb-0 nav_menu">
                <li class="nav-item list-inline-item px-2 py-3" v-for="item in menuitems" :key="item.id">
                    <i :class="item.icon + ' d-block d-lg-none'"></i>
                    <router-link class="menu_section nav-link p-lg-1" :to="item.sulg == 'portfolio'? item.sulg:'/'" v-scroll-to="'#'+item.sulg">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            logo: 'Kaushik',
            logourl: '/kn',
            menuitems: [{
                    'name': 'Home',
                    'sulg': 'home',
                    'icon': 'icon-home'
                },
                {
                    'name': 'About',
                    'sulg': 'about',
                    'icon': 'fa fa-user'
                },
                {
                    'name': 'Services',
                    'sulg': 'services',
                    'icon': 'fa fa-briefcase'
                },
                {
                    'name': 'Portfolio',
                    'sulg': 'portfolio',
                    'icon': 'fa fa-file-text-o'
                },
                {
                    'name': 'Testimonials',
                    'sulg': 'testimonials',
                    'icon': 'fa fa-comments'
                },
                {
                    'name': 'Skills',
                    'sulg': 'skills',
                    'icon': 'fa fa-cog'
                },
                {
                    'name': 'Contact',
                    'sulg': 'contact',
                    'icon': 'fa fa-phone'
                }
            ]
        }
    },
    methods: {
        mobile_toggle() {
            let exit_menu = document.getElementsByClassName("toggle_menu").length;
            if (exit_menu == 1) {
                document.getElementsByClassName("toggle_menu")[0].onclick = function () {
                    const addclass = document.getElementsByClassName("menusbar")[0];
                    const existclass = document.querySelectorAll(".menusbar.d-block").length;
                    const menu_icon = document.getElementsByClassName("humber")[0]
                    if (existclass == 0) {
                        addclass.classList.add("d-block");
                        menu_icon.classList.add("icon-remove");
                        menu_icon.classList.remove("icon-reorder");
                    } else {
                        addclass.classList.remove("d-block");
                        menu_icon.classList.remove("icon-remove");
                        menu_icon.classList.add("icon-reorder");
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
a.logo-text:hover {
    color: #00203f;
}

.stick_header a.logo-text:hover {
    color: #adefd1;
}

.list-inline-item {
    text-align: center;
}
</style>
