async function loadResults() {
  try {
    const response = await fetch('https://sheetdb.io/api/v1/7y51jqpuo4d4y');
    const data = await response.json();
    
    displayResults(data); // عرض البيانات
  } catch (error) {
    console.error('حدث خطأ في جلب البيانات:', error);
  }
}

function displayResults(results) {
  const container = document.getElementById('resultsContainer');
  container.innerHTML = results.map(result => `
        <div class="result-card">
            <h3>${result.student_name}</h3>
            <div class="result-details">
                <p><span>📚 الحلقة:</span> ${result.class_name}</p>
                <p><span>👳 الجامع:</span> ${result.teacher_name || 'غير محدد'}</p>
                <p><span>📅 التاريخ:</span> ${result.result_date}</p>
                <p class="score"><span>🏆 النتيجة:</span> ${result.score}%</p>
            </div>
        </div>
    `).join('');
}

window.addEventListener('DOMContentLoaded', loadResults);