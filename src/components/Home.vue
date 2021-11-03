<template>
<header class="primarry py-2" id="top">
    <div class="container">
        <Header />
    </div>
</header>
<div class="home_section py-lg-5" id="home">
    <div class="container">
        <Slider />
    </div>
</div>
<div class="about_section py-lg-5" id="about">
    <div class="container">
        <About />
    </div>
</div>
<div class="services_section py-lg-5" id="services">
    <div class="container">
        <Services />
    </div>
</div>

<div class="testimonials_section py-lg-5" id="testimonials">
    <div class="container">
        <Testimonials />
    </div>
</div>
<div class="skills_section py-lg-5" id="skills">
    <div class="container">
        <Skill />
    </div>
</div>
<div class="contact_section py-lg-5 py-3" id="contact">
    <div class="container">
        <Contact />
    </div>
</div>
<footer class="primarry py-4 text-center" id="footer">
    <div class="container">
        <Footer />
    </div>
</footer>
<div class="scroll_arrow">
   <router-link  class="menu_section scrollup" to="/" v-scroll-to="'#home'">
    <i class="icon-arrow-up"></i>
   </router-link>

</div>
</template>

<script>
import Header from './global/Header'
import Slider from './pages/Slider'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/ClientReview'
import Skill from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './global/Footer'

export default {
    name: 'Home',
    components: {
        Header,
        Slider,
        About,
        Services,
        Testimonials,
        Skill,
        Contact,
        Footer
    }
}
</script>

<style scoped>
.scrollup{
    position: fixed;
    right: 1rem;
    bottom: -20%;
    background-color: #adefd1;
    padding: 8px 12px;
    border-radius: 3px;
    z-index: var(--z-tooltip);
    transition: .5s;    
}
.scrollup.scrollhome:hover{
    text-decoration: none;
    color: #00203f;
}
.scrollhome{
   bottom: 8%;
}
</style>
