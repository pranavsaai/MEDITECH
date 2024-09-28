document.addEventListener('DOMContentLoaded', () => {
  const dashboardData = [
      { date: "2023-06-01", facility: "City Medical Center", report: "Report1.pdf" },
      { date: "2023-06-15", facility: "Sunshine Clinic", report: "Report2.pdf" },
      { date: "2023-07-02", facility: "Greenwood Hospital", report: "Report3.pdf" }
  ];

  const tableBody = document.getElementById('dashboardTableBody');

  dashboardData.forEach((data) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${data.date}</td>
          <td>${data.facility}</td>
          <td><button onclick="window.open('${data.report}', '_blank')">Open PDF</button></td>
      `;
      tableBody.appendChild(row);
  });
});
