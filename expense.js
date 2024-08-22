const expForm = document.getElementById("expenseForm");
const expList = document.getElementById("expenseList");

expForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    if (description && category && !isNaN(amount) && amount !== '') {
        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `<td>${description}</td>
                            <td>${category}</td>
                            <td>${amount}</td>`;

        expList.appendChild(newRow);
        
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Fill Valid Data');
    }
});
