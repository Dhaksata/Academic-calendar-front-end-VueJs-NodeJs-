<template>
    <div>
      <header class="header">
        <div class="logo-container">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af40fedd0108bce774f53b94031f318b447d9bb3c684b6fac06ceebc028629d?apiKey=1fe80c79b91b41798e028c7bae775442" alt="Logo" class="logo-img" />
        </div>
      </header>
      <div class="date-range-container">
        <label for="startDate">Enter Start Date:</label>
        <input type="date" id="startDate" v-model="startDate" class="date-input" />
        <label for="endDate">Enter End Date:</label>
        <input type="date" id="endDate" v-model="endDate" class="date-input" />
        <button @click="handleDownload" class="download-btn">Download</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        startDate: '',
        endDate: ''
      };
    },
    methods: {
      handleDownload() {
        if (this.startDate && this.endDate) {
          alert('Downloading...');
        } else {
          alert('Please fill in both start and end dates.');
        }
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
    top: 10px;
  }
  
  .logo-container {
    margin-bottom: 20px;
  }
  
  .logo-img {
    width: 500px;
    object-fit: contain;
  }
  
  .date-range-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #520d6b;
  }
  
  .date-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .odd-semester-btn,
  .even-semester-btn {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 4px;
    background-color: #520d6b;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
  
  .odd-semester-btn:hover,
  .even-semester-btn:hover {
    background-color: #6f1d99;
    transform: scale(1.1);
  }
  
  .download-btn {
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    background-color: #520d6b;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
  
  .download-btn:hover {
    background-color: #6f1d99;
    transform: scale(1.1);
  }
  
  a {
    color: rgba(191, 114, 24, 1); /* Change link color to white */
  }
  </style>
  