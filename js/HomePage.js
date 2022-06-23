let addrPayrollList
window.addEventListener('DOMContentLoaded', (event) => {
    addrPayrollList =   getEmployeePayrollDataFromStorage();
    document.querySelector(".per-count").textContent = addrPayrollList.length;
    createInnerHtml();
});
getEmployeePayrollDataFromStorage= () => {
    return localStorage.getItem('AddressBookList') ? 
                    JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    if (addrPayrollList.length == 0) return;
    const headerHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
        "<th>Phone No</th><th>Zip Code</th><th>Options</th></tr>";
    let innerHtml = `${headerHtml}`;
    for (const addrPayrollData of addrPayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>${addrPayrollData.name}</td>
                <td>${addrPayrollData.address}</td>
                <td>${addrPayrollData.city}</td>
                <td>${addrPayrollData.state}</td>
                <td>${addrPayrollData.phone}</td>
                <td>${addrPayrollData.zipcode}</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="/assest/icons/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="/assest/icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}