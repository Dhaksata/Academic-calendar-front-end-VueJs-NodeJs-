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
    <div class="notifications">
      <div class="notification">
        <h3>Notification</h3>
        <ul>
          <li>SEE Apr 2024 - Time Table- S1 to S8 (Arrear) - R 2015 <a href="https://www.bitsathy.ac.in/wp-content/uploads/Time-table-S1-to-S8-Arrear-R-2015.pdf">Time table</a> </li>
          <li>SEE APR 2024 -Time Table - B.E. / B.Tech. - S8 (Regular & Arrear) & (S7, S6, S5 Arrear) - R 2018  <a href="https://www.bitsathy.ac.in/wp-content/uploads/Time-table-S8-Regular-Arrear-S7-S6-S5-Arrear-R-2018.pdf">Time table</a></li>
          <li>SEE APR 2024 - Time Table - M.B.A. - S4 Regular - R2021 <a href="https://www.bitsathy.ac.in/wp-content/uploads/Time-table-M.B.A.-S4-Regular.pdf">Time table</a></li>
          <li>SEE APR / MAY 2024 - B.E. / B.Tech. Arrear Exam -  (2017-2021, 2018-2022 & 2019-2023 Batches) <a href="https://www.bitsathy.ac.in/wp-content/uploads/Arrear-Students-Fees-Details-2017-21-2018-22-and-2019-23-Batches.pdf">Fees Details</a> | <a href="https://www.bitsathy.ac.in/wp-content/uploads/Account-Details-COE.pdf">Bank Account Details</a></li>
        </ul>
      </div>
    </div>
    <div class="notifications">
      <div class="notification">
        <h3>Downloads</h3>
        <ul>
          <li>Application for Revaluation of Answer Script <a href="https://www.bitsathy.ac.in/wp-content/uploads/Application-for-Revaluation-of-answer-script.pdf">View PDF</a> </li>
          <li>Application Form for Issuing Transcripts - Offline <a href="https://www.bitsathy.ac.in/wp-content/uploads/Application-form-for-issuing-transcripts-Offline.pdf">View PDF</a></li>
          <li>Procedure for Applying Transcripts - Offline <a href="https://www.bitsathy.ac.in/wp-content/uploads/Procedure-for-Applying-Transcripts-Offline.pdf">View PDF</a></li>
        </ul>
      </div>
    </div>
    <div class="buttons">
      <button class="odd-semester-btn"><a href="https://www.bitsathy.ac.in/wp-content/uploads/AY-Calender-2023-2024-ODD.pdf" class="nav-link">Odd Semester 2023-24</a></button>
      <button class="even-semester-btn"><a href="https://www.bitsathy.ac.in/wp-content/uploads/AY-Calender-2023-2024-EVEN.pdf" class="nav-link">Even Semester 2023-24</a></button>
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
  background-image: url('@/assets/back.gif'); /* Adjust the path to your GIF file */
  background-size: cover; /* Ensure the background covers the entire header */
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
