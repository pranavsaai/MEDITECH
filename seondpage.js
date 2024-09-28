document.addEventListener('DOMContentLoaded', () => {
  const policyData = [
      { name: "Health Insurance", status: "Approved" },
      { name: "Life Insurance", status: "Denied" },
      { name: "Auto Insurance", status: "Approved" },
      { name: "Home Insurance", status: "Approved" },
      { name: "Travel Insurance", status: "Denied" },
  ];

  const tableBody = document.getElementById('policyTableBody');

  function updateRowStatus(row, status) {
      const statusCell = row.querySelector('.status');
      statusCell.innerHTML = `
          <span class="status-icon ${status === 'Approved' ? 'status-approved' : 'status-denied'}">
              ${status === 'Approved' ? '✔️' : '❌'}
          </span>
          ${status}
      `;
  }

  policyData.forEach((policy, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${policy.name}</td>
          <td class="status">
              <span class="status-icon ${policy.status === 'Approved' ? 'status-approved' : 'status-denied'}">
                  ${policy.status === 'Approved' ? '✔️' : '❌'}
              </span>
              ${policy.status}
          </td>
          <td>
              <button class="action-btn approve-btn" ${policy.status === 'Approved' ? 'disabled' : ''} onclick="changeStatus(event, '${index}', 'Approved')">Approve</button>
              <button class="action-btn deny-btn" ${policy.status === 'Denied' ? 'disabled' : ''} onclick="changeStatus(event, '${index}', 'Denied')">Deny</button>
          </td>
      `;
      tableBody.appendChild(row);
  });
});

function changeStatus(event, index, newStatus) {
  const row = event.target.closest('tr');
  const statusCell = row.querySelector('.status');

  // Update policy status (in a real application, you'd update this in a backend or state)
  const policy = policyData[index];
  policy.status = newStatus;

  updateRowStatus(row, newStatus);

  // Update button states
  row.querySelector('.approve-btn').disabled = newStatus === 'Approved';
  row.querySelector('.deny-btn').disabled = newStatus === 'Denied';
}

function updateRowStatus(row, status) {
  const statusCell = row.querySelector('.status');
  statusCell.innerHTML = `
      <span class="status-icon ${status === 'Approved' ? 'status-approved' : 'status-denied'}">
          ${status === 'Approved' ? '✔️' : '❌'}
      </span>
      ${status}
  `;
}

