const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const formattedDate = `${}/${month}/${day}`;

document.getElementById('current-date').textContent = `Bugünün tarihi: ${formattedDate}`;