<template>
    <header class="header">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af40fedd0108bce774f53b94031f318b447d9bb3c684b6fac06ceebc028629d?apiKey=1fe80c79b91b41798e028c7bae775442" alt="Logo" class="logo-img" />
      </div>
    
    </header>
    <div class="image-containero">
        <img alt="Display" :src="require('@/assets/park.jpg')" />
  
      </div>
   
  
    <div class="content-container">
      <div class="image-container">
        <img alt="Display" :src="require('@/assets/dig.jpg')" />
  
      </div>
      <div class="about-campus">
        <h2 class="campus-title">
          <span class="title-about">SPECIAL </span>
          <span class="title-campus">LABORATORIES</span>
        </h2>
        <p>BIT Special Laboratories provide a platform for students to learn, practice, and innovate on the globally sought after skills, beside product development. BIT Special Laboratories established over-and-over the regular labs mandated by the University / AICTE, trains students to participate in internationally reputed competitions. BIT Special Labs Training helps students master both the theoretical foundations and applications in the identified area and makes them skilled enough to participate in competitions at global levels. Exposure to such competitions is highly beneficial in getting employment opportunities in globally reputed industires

Focus on Industry-defined | Encourages consultancy projects | Exposure to international & High-repute job placements.</p>
      </div>
    </div>
    <div>
   
    </div>
  </template>
  
  <script>
  
  export default {
    
    name: 'HelloWorld',
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #520d6b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
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
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
  .image-containero {
    margin-top: 20px;
    text-align: center;
  }
  
  .image-containero img {
    max-width: 100%; /* Ensure the image does not exceed its container width */
    height: auto; /* Maintain aspect ratio */
  }
  
  
  .content-container {
    display: flex;
   
    margin-top: 30px;
    margin-left: 50px;
  }
  
  .image-container {
    flex:1;
    max-width: 100%;
    margin-top: 10px;
  
    margin-left: 20px;
    
  }
  
  .thumbnail-img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Crop the image to cover the container */
    image-rendering: crisp-edges; /* Improve image rendering quality */
  }
  
  .about-campus {
    flex: 1;
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 6px;
    width: 80%; /* Adjusted width */
    text-align: left;
    box-sizing: border-box;
    font-size: 24px;
    color: #040005;
    margin-right: 90px;
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
  </style>
  