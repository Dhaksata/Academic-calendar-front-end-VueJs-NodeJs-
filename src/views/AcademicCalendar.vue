<template>
  <div class="background-image">
    <header class="header">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af40fedd0108bce774f53b94031f318b447d9bb3c684b6fac06ceebc028629d?apiKey=1fe80c79b91b41798e028c7bae775442" alt="Logo" class="logo-img" />
      </div>
    </header>

    <transition name="fade">
      <!-- Use a div wrapper for styling -->
      <div class="academic-heading">
        <h2>Academic Calendar</h2>
      </div>
    </transition>

    <div class="centered-buttons">
      <div class="button-container">
        <router-link to="/events"><button>2023-2024 -> EVENTS</button></router-link>
        <router-link to="/months" class="nav-link">
          <button>2023-2024 -> HOLIDAYS</button>
        </router-link>
        <router-link to="/select"><button>2023-2024 -> ACADEMICS</button></router-link>
        <router-link to="/about" class="nav-link">
          <button>2023-2024 -> END SEMESTER</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick(buttonNumber) {
      alert(`Button ${buttonNumber} clicked!`);
    }
  }
};
</script>

<style scoped>
/* General styles */
.background-image {
  background-image: url('/src/assets/background-lines-5650116-4718844.gif'); /* Specify the path to your background image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the image */
  height: 110vh;
  animation: fade-in 2s ease-in-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
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

/* Academic heading styles */
.academic-heading {
  text-align: center;
  margin-top: 20px;
  animation: slide-in 1s ease-in-out;

@keyframes slide-in {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
}

.academic-heading h2 {
  color: #fff; /* Text color */
  background-color: #CB893C; /* Background color */
  width: 500px; /* Set the desired width */
  padding: 10px; /* Padding around text */
  border-radius: 5px; /* Rounded corners */
  font-size: 24px; /* Font size */
  margin: 0 auto; /* Center horizontally using margin */
}

/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Centered buttons styles */
.centered-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Adjust the gap between buttons */
}

button {
  padding: 10px 20px;
  background-color: #520d6b;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition effect */
}

button:hover {
  background-color: #CB893C; /* Change button background color on hover */
}

.nav-link {
  text-decoration: none; /* Remove underline from router-link */
  color: inherit; /* Inherit text color */
}

/* Background image styles */

</style>
