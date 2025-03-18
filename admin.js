async function addResult(newResult) {
  try {
    const response = await fetch('https://sheetdb.io/api/v1/7y51jqpuo4d4y', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: [newResult] })
    });
    
    const result = await response.json();
    if (result.created > 0) {
      alert('تمت إضافة النتيجة بنجاح!');
    } else {
      alert('حدث خطأ أثناء الإضافة.');
    }
  } catch (error) {
    console.error('حدث خطأ:', error);
  }
}

document.getElementById('resultForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const newResult = {
    student_name: document.getElementById('studentName').value,
    class_name: document.getElementById('className').value,
    teacher_name: document.getElementById('teacherName').value || null,
    score: document.getElementById('score').value,
    result_date: new Date().toISOString().split('T')[0] // تاريخ اليوم
  };
  
  await addResult(newResult);
  document.getElementById('resultForm').reset();
});