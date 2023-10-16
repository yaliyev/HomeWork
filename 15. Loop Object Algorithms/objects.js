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

if (allow) { // bilirem fikirlese bilersiniz onsuzda true olanda bura kece bilecek umumiyyetle :D amma qarantilemek ucun yazdim
    let employees = [];
    for (let i = 0; i < employeeQuantity; i++) {
        let fullname = prompt(`enter name of employee #${i + 1}`);
        let age = prompt(`enter age of employee #${i + 1}`);

        while (age < 18) {
            alert("Under 18 years is prohibited")
            age = prompt(`enter age of employee #${i + 1}`);
        }

        let isMarried = prompt(`is employee married?(true or false)`);

        let isMale = prompt(`is employee male?(true or false)`);

        let salary = Number(prompt(`enter salary of employee #${i + 1}`));

        let department = prompt(`enter department of employee #${i + 1}`);

        let employee = {
            fullname: fullname,
            age: Number(age), // rahat olsun deyene bir basa numbere cevirme emeliyyati
            isMarried: isMarried,
            isMale: isMale,
            salary: salary,
            department: department
        }

        employees.push(employee);

    }

    
    // 21.1
    let averageAgeNumber = 0;

    let sumOfAges = 0;

    for (let i = 0; i < employees1.length; i++) {
        sumOfAges += employees1[i].age;
    }
    averageAgeNumber = sumOfAges / employees1.length; // Yas ortalamasi

    console.log(`Average Age number is ${averageAgeNumber}`);

    //  21.2

    for (let i = 0; i < employees1.length; i++) {
        let employee = employees1[i];
        if (employee.salary < 1000) {
            employee.salary += 500;
        }
    }

   //  21.3

    for (let i = 0; i < employees1.length; i++) {
        if (employees1[i].age > 60) {
            employees1.splice(i, 1); // konkret indeks ve 1 dene element silinmesi
        }
    }
    // 21.4

    let ITEmployees = [];

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department == 'IT') {
            ITEmployees.push(employees[i]);
        }
    }
    // 21.5

    let maxSalary = 0;
    let maxSalaryFullName = "";

    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        if (employee.department == 'Finance') {
            if (employee.salary > maxSalary) {
                maxSalary = employee.salary;
                maxSalaryFullName = employee.fullname;
            }
        }
    }
    // 21.6

    let minimalSalary = Number.MAX_VALUE;
    let employeeWhoHasMinimalSalaryIndex;

    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        if(employee.salary < minimalSalary ){
            minimalSalary = employee.salary;
            employeeWhoHasMinimalSalaryIndex = i;
        }
    }
    employees[employeeWhoHasMinimalSalaryIndex].salary += 3000;

    // 21.7
    // artan sira ile sort etmek deyende fikrimce massivde nezerde tutulur
    
    

    employees.sort(function (a, b) {
        return a.salary - b.salary;
    });


    // 21.8

    let marriedEmployeesCount = 0;

    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        if(employee.isMarried == 'true'){
            marriedEmployeesCount++;
        }
    }

    // 21.9

    let maleEmployeesCount = 0;

    for(let i = 0;i< employees.length;i++){
        let employee = employees[i];
        if(employee.isMale == 'true'){
            maleEmployeesCount++;
        }
    }
}



