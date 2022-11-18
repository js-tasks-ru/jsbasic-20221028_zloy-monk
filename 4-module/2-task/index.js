function makeDiagonalRed(table) {
  // ваш код...
  for (let i = 0; i < table.rows.length; i++) {
    let rowsColor = table.rows[i].cells[i];
    rowsColor.style.backgroundColor = 'red';
  }
}
