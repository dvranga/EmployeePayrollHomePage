window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml=()=>{
    const headerHtml=
    `<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>`;
    let innerHtml=`${headerHtml}`;
    let empPayrollList=createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
    <tr>
        <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)"
             alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img name="${empPayrollData._id}" alt="edit" onclick="update(this)"
            src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}

const getDeptHtml=(deptList)=>{
    let deptHtml='';
    for(const dept of deptList){
        deptHtml=`${deptHtml} <div class="dept-label">${dept}</div>`
    } 
    return deptHtml;
}



const createEmployeePayrollJSON=()=>{
    let empPayrollListLocal=[
        {
            _name:'Ranganath Devangm',
            _gender:'male',
            _department:[
                'Engineering',
                'Finance'
            ],
            _salary:'500000',
            _startDate:'29 Oct 2019',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -2.png',
        },
        {
            _name:'Harinath Devangm',
            _gender:'male',
            _department:[
                'Engineering',
                'Sales'
            ],
            _salary:'500000',
            _startDate:'29 Oct 2019',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'../assets/profile-images/Ellipse -3.png',
        }
    ];
    return empPayrollListLocal;
}