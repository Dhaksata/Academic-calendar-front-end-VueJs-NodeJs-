<template>
  <div>
    <!-- Header Section -->
    <header class="header">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af40fedd0108bce774f53b94031f318b447d9bb3c684b6fac06ceebc028629d?apiKey=1fe80c79b91b41798e028c7bae775442" alt="Logo" class="logo-img" />
      </div>
    </header>

    <!-- Main Content Section -->
    <div class="content-container">
      <!-- Left Image Container -->
      <div class="image-container">
        <img alt="Display" :src="require('@/assets/com.png')" />
      </div>

      <!-- About Campus Section -->
      <div class="about-campus">
        <h2 class="campus-title">
          <span class="title-campus">Training & Placement</span>
        </h2>
        <div class="content-columns">
          <p class="content-column">
            The training and placement team believes in the thought, “The outcome of education is apparent when careers sharpen your horizons” and we strive every minute working on it. Students’ skills are molded through multifarious training sessions that include technical, aptitude, verbal, and soft skills. By understanding their level of grasping and delivering, the students are trained individually, based on their needs. To keep pace with the world, multiplicity of career is essential and that drives us to provide training and guidance for those who aspire to crack the competitive exams. The ambiance in Training and Placement department is an inspiration, for its spatial dimensions of Interview cubicles, Group Discussion halls, and Guest Lounge that render students a complete professional environment to learn and equip. A team of passionate staff works with a single motive for upgrading the students to the next phase of life by all possible means.
          </p>
          <p class="content-column">
            "BITians Soliton have gone places with their passion for engineering and commitment to excellence. Today, we see them playing the roles of leaders, star programmers, and raring rookies. As we delve deeper into the latest technology domains, we look forward to many more BITians joining us in this exciting journey, and continue to strengthen our decade-long association with the Bannari Amman Institute of Technology."

            We are extremely delighted to see the consistent quality of students Bannari Amman Institute of Technology produces year on year. The focus is not only on academic excellence but also on all aspects of student's development. With strong alliances and partnerships with industries and best-in-class infrastructure, the institute has a lot to offer to students' growth and enhancement. We wish Bannari Amman Institute of Technology our best wishes to scale new heights in each endeavor.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
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

.content-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  border-radius: 6px;
}

.image-container {
  flex: 1;
  max-width: 50%;
  padding: 20px;
  border-radius: 6px;
}

.image-container img {
  max-width: 100%;
  height: 820px;
  
}

.about-campus {
  flex: 1;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 6px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  font-size: 18px;
  color: #040005;
  margin-left: 20px;
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

.content-columns {
  column-count: 2;
  column-gap: 40px;
}

.content-column {
  break-inside: avoid;
  padding-bottom: 20px;
  line-height: 1.6;
  
}
</style>
