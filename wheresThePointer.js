// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const table = document.getElementById('myTable');

    table.addEventListener('click', function(event) {
      const td = event.target;

      if (td.tagName === 'TD') {
        const x = event.clientX;
        const y = event.clientY;
        td.innerHTML = `x: ${x}, y: ${y}`;
      }
    });