<template>
        <header class="header">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af40fedd0108bce774f53b94031f318b447d9bb3c684b6fac06ceebc028629d?apiKey=1fe80c79b91b41798e028c7bae775442" alt="Logo" class="logo-img" />
      </div>
    </header>

    <transition name="fade">
      
      <div class="academic-heading">
        <h2>Academic Calendar</h2>
      </div>
    </transition>
    <div class="month-buttons">
      <transition-group name="fade" tag="div" class="button-container">
        <div v-for="(row, rowIndex) in monthRows" :key="rowIndex" class="month-row">
          <button
            v-for="(month, monthIndex) in row"
            :key="monthIndex"
            @click="handleMonthClick(month)"
            class="month-button"
          >
            {{ month }}
          </button>
        </div>
      </transition-group>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        months: [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ],
        monthsPerRow: 4 // Number of months to display per row
      };
    },
    computed: {
      monthRows() {
        const rows = [];
        const totalMonths = this.months.length;
        let currentIndex = 0;
  
        while (currentIndex < totalMonths) {
          rows.push(this.months.slice(currentIndex, currentIndex + this.monthsPerRow));
          currentIndex += this.monthsPerRow;
        }
  
        return rows;
      }
    },
    methods: {
      handleMonthClick(month) {
        alert(`Selected month: ${month}`);
      }
    }
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

/* Academic heading styles */
.academic-heading {
  text-align: center;
  margin-top: 20px;
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
.academic-heading {
  text-align: center;
  margin-top: 20px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.academic-heading:hover {
  transform: translateY(-5px);
  background-color: #66107b;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
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
  .month-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  

  .month-row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  transition-delay: 0.1s;
}

.month-row:nth-child(2) {
  transition-delay: 0.2s;
}

.month-row:nth-child(3) {
  transition-delay: 0.3s;
}
  .month-button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #520d6b;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.month-button:hover {
  transform: scale(1.1);
}

.month-button:active {
  transform: scale(0.9);
  background-color: #CB893C;
}
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>