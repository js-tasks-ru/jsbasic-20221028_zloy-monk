function highlight(table) {
  // ваш код...
  for (let i = 1; i < table.rows.length; i++) {
    let ageCells = table.rows[i].cells[1];
    let genderCells = table.rows[i].cells[2];
    let statusCells = table.rows[i].cells[3];
    let age = ageCells.innerHTML;
    let gender = genderCells.innerHTML;
    let status = statusCells.dataset.available;
    
    if (age < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }
    if (gender === 'm') {
      table.rows[i].classList.add('male');
    } else {
      table.rows[i].classList.add('female');
    }
    if (status === 'true') {
       table.rows[i].classList.add('available');
    } else if (status === 'false') {
       table.rows[i].classList.add('unavailable');
    } else {
       table.rows[i].hidden = true;
    }
  }
}
