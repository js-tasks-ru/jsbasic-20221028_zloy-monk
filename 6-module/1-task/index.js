/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.tableHtml();
    this.deleteRow()
  }

  tableHtml() {
    this.elem = document.createElement('TABLE');

    this.elem.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.rows.map(obj => 
          `<tr>
            <td>${obj.name}</td>
            <td>${obj.age}</td>
            <td>${obj.salary}</td>
            <td>${obj.city}</td>
            <td><button>X</button></td>
          </tr>`).join('')}
      </tbody>`;
  }

  deleteRow() {
    for (let button of this.elem.querySelectorAll('button'))
      button.addEventListener('click', (ev) =>
        ev.target.closest("tr").remove()
      );
  }
}
