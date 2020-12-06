window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
    output.textContent=salary.value;
    })

    const day=document.querySelector('#day');
    const month=document.querySelector('#month');
    const year=document.querySelector('#year');
    const startdateError=document.querySelector('.startdate-error');
    day.addEventListener('input',function(){
        try{
            (new EmployeePayrollData()).startDate=day.value+"-"+month.value+"-"+year.value;;
            startdateError.textContent="";
        }catch(e){
            startdateError.textContent=e;
        }
    })
    month.addEventListener('input',function(){
        try{
            (new EmployeePayrollData()).startDate=day.value+"-"+month.value+"-"+year.value;;
            startdateError.textContent="";
        }catch(e){
            startdateError.textContent=e;
        }
    })
    year.addEventListener('input',function(){
        try{
            (new EmployeePayrollData()).startDate=day.value+"-"+month.value+"-"+year.value;;
            startdateError.textContent="";
        }catch(e){
            startdateError.textContent=e;
        }
    })

})


const save=()=>{
    try {
        let employeePayrollData=createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (error) {
        return;
    }
}

const createEmployeePayroll=()=>{
    let employeePayrollData=new EmployeePayrollData();
    try {
        employeePayrollData.name=getInputValueById('#name');
    } catch (error) {
        setTextValue('.text-error',e);
        throw e;
    }

    employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary=getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    let date=getInputValueById('#day')+"-"+getInputValueById('#month')+"-"+
            getInputValueById('#year');
    employeePayrollData.date=Date.parse(date);
    // employeePayrollData.date=new Date(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues=(propertyValue)=>{
    let allItmes=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItmes.forEach(item =>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById=(id)=>{
    let value=document.querySelector(id).value;
    return value;
}    

const getInputElementValue=(id)=>{
    let value=document.getElementById(id).value;
    return value;
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList=[employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}

const resetForm=()=>{
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues=(propertyValue)=>{
    let allItmes=document.querySelectorAll(propertyValue);
    allItmes.forEach(item=>{
        item.checked=false;
    });
}

const setTextValue=(id,value)=>{
    const element=document.querySelector(id);
    element.textContent=value;
}

const setValue=(id,value)=>{
    const element=document.querySelector(id);
    element.value=value;
}