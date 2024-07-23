<template>
  <div>
    <div class="background-image">


    <header class="header">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af40fedd0108bce774f53b94031f318b447d9bb3c684b6fac06ceebc028629d?apiKey=1fe80c79b91b41798e028c7bae775442" alt="Logo" class="logo-img" />
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item" v-for="(link, index) in navLinks" :key="index" :style="{ transitionDelay: `${index * 0.1}s` }"> <router-link :to="link.path">{{ link.text }}</router-link></li>
        </ul>
      </nav>
    </header>
    
    <transition name="fade">
      <div class="image-containero">
        <img alt="Display" :src="require('@/assets/park.jpg')" />
      </div>
    </transition>

    <div class="content-container">
      <transition name="fade">
        <div class="image-container">
          <img alt="Display" :src="require('@/assets/no.jpg')" />
        </div>
      </transition>
      
      <div class="about-campus">
        <h2 class="campus-title">
          <span class="title-about">About the </span>
          <span class="title-campus">Campus</span>
        </h2>
        <p>
          Bannari Amman Institute of Technology is an Autonomous, Self-financing Engineering College, Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai. Nestled on the banks of The River Bhavani, BIT campus provides an environment for learning in harmony with nature, away from the odds of city life. The spacious buildings punctuated with landscaped courtyards and pathways are designed to emphasize the business ethics and characteristics of an excellent center for learning.
        </p>
      </div>
    </div>

    <transition name="fade">
      <footer class="footer">
        <div class="contact-info">
          <div class="contact-item1">
            <strong>Phone:</strong><a href="+91 4295 226000" target="_blank">+91 4295226000</a>
          </div>
          <div class="contact-item2">
            <strong>Email:</strong> <a href="stayahead@bitsathy.ac.in" target="_blank">stayahead@bitsathy.ac.in</a>
          </div>
          <div class="contact-item3">
            <strong>Instagram:</strong> <a href="https://www.instagram.com/lifeatbit/?hl=en" target="_blank">Instagram</a>
          </div>
          <div class="contact-item4">
            <strong>Facebook:</strong> <a href="https://www.facebook.com/bitsathyindia/" target="_blank">Facebook</a>
          </div>
        </div>
      </footer>
    </transition>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { text: 'Home', path: '/' },
        { text: 'About BIT', path: '/' },
        { text: 'Academic Calendar', path: '/academic' },
        { text: 'Career Development', path: '/aboutbit' },
        { text: 'Special Lab', path: '/special' }
      ]
    };
  }
}
</script>

<style scoped>
.background-image {
  background-image: url('/src/assets/background-lines-5650116-4718844.gif'); /* Specify the path to your background image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the image */
  
}

.header {
  background-color: #520d6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  transition: background-color 0.3s ease;

}

.logo-container {
  margin-bottom: 20px;
}

.logo-img {
  width: 500px;
  object-fit: contain;
}

.nav {
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  font-family: 'Inter', sans-serif;
}

.nav-link {
  color: #f5f5f5;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease; /* Add transition effect */
}

.nav-link:hover {
  text-decoration: underline;
  color: #ff6b00; /* Change color on hover */
}

.image-containero {
  margin-top: 20px;
  text-align: center;
}

.image-containero img {
  max-width: 100%;
  height: auto;
  border-radius: 10px; /* Add border radius for a softer look */
  transition: transform 0.3s ease; /* Add transition effect */
}

.image-containero img:hover {
  transform: scale(1.05); /* Scale up on hover */
  border-radius: 50%;
  transition: border-radius 0.3s ease;
}

.content-container {
  display: flex;
  margin-top: 30px;
  margin-left: 50px;
}

.image-container {
  flex: 1;
  max-width: 100%;
  margin-top: 10px;
  margin-left: 20px;
}

.about-campus {
  flex: 1;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 6px;
  width: 80%;
  text-align: left;
  box-sizing: border-box;
  font-size: 24px;
  color: #040005;
  margin-right: 90px;
  transition: transform 0.3s ease; /* Add transition effect */
  transition: background-color 0.3s ease;

}

.about-campus:hover {
  transform: scale(1.02); /* Scale up on hover */
  background-color: #f0f0f0;
}

.campus-title {
  font-weight: 700;
  font-size: 24px;
  color: #520d6b;
  margin-bottom: 10px;
}

.title-about {
  color: rgba(191, 114, 24, 1);
}

.title-campus {
  color: rgba(82, 13, 107, 1);
}

.about-campus p {
  font-size: 18px;
  line-height: 1.6;
}

.about-campus h2 {
  font-size: 24px;
  font-weight: bold;
}

footer {
  background-color: #520d6b;
  color: #f5f5f5;
  padding: 30px;
  text-align: center;
  margin-top: 30px;
  transition: background-color 0.3s ease;
}
footer:hover {
  background-color: #66107b;
}
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-item {
  margin-bottom: 10px;
}

.contact-item strong {
  font-weight: bold;
}

a {
  color: white;
}

a:hover {
  color: #ff6b00;
  background-color: #66107b;

}
</style>
