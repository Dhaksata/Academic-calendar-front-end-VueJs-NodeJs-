<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af40fedd0108bce774f53b94031f318b447d9bb3c684b6fac06ceebc028629d?apiKey=1fe80c79b91b41798e028c7bae775442" alt="Logo" class="logo-img" />
      </div>
    </header>
    <div class="notifications">
      <div class="notification">
        <h3>End Semester Examinations 2023-2024</h3>
        <ul>
          <li>Odd Semester 2023-24 <a href="https://www.bitsathy.ac.in/wp-content/uploads/AY-Calender-2023-2024-ODD.pdf">View PDF</a> </li>
          <li>Even Semester 2023-24 <a href="https://www.bitsathy.ac.in/wp-content/uploads/AY-Calender-2023-2024-EVEN.pdf">View PDF</a></li>
        </ul>
      </div>
      </div>

  </div>
</template>

<script>
export default {
  
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

.notifications {
  margin-top: 20px;
}

.notification {
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.notification h3 {
  margin-bottom: 8px;
  color: #520d6b;
}

.notification ul {
  list-style-type: none;
  padding: 0;
}

.notification li {
  margin-bottom: 4px;
  color: #333;
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
