let addrPayrollList
window.addEventListener('DOMContentLoaded', (event) => {
    
    createInnerHtml();
});


const createInnerHtml = () => {
    if (addrPayrollList.length == 0) return;
    const headerHtml = "<tr><th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
        "<th>Phone No</th><th>Zip Code</th><th>Options</th></tr>";
    let innerHtml = `${headerHtml}`;
    for (const addrPayrollData of addrPayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>Ashish Shivsharan Mashal</td>
                <td>SB Road</td>
                <td>Pune</td>
                <td>Maharashtra</td>
                <td>+91 8380805787</td>
                <td>413 004</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="/assest/icons/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="/assest/icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}