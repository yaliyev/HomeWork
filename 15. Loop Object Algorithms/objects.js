let allow = false;
while (allow != true) {

    var employeeQuantity = prompt("How many workers are there?");
    if (employeeQuantity == Number(employeeQuantity) && employeeQuantity.toString().length === Number(employeeQuantity).toString().length) {
        employeeQuantity = Number(employeeQuantity);
        allow = true;
    }

    if (typeof employeeQuantity == 'string' || employeeQuantity.toString().includes(' ') || Number(employeeQuantity) < 0 || employeeQuantity == ' ') {
        alert("wrong alert");
        allow = false;
    }

}

if(allow){
    let employees = [];
    for(let i = 0;i<employeeQuantity;i++){
        let fullname = prompt(`enter name of employee #${i + 1}`);
        let age = prompt(`enter age of employee #${i + 1}`);

        while(age < 18){
            alert("Under 18 years is prohibited")
            age = prompt(`enter age of employee #${i + 1}`);
        }

        let isMarried = prompt(`is employee married?(true or false)`);

        let isMale = prompt(`is employee male?(true or false)`);

        let salary = prompt(`enter salary of employee #${i + 1}`);

        let department = prompt(`enter department of employee #${i + 1}`);

        let employee = {
            fullname: fullname,
            age: Number(age),
            isMarried: isMarried,
            isMale: isMale,
            salary: salary,
            department: department
        }

        employees.push(employee);
          
    }
    
    
}



