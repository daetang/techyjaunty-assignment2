const students = [
   {name: 'Alice',  age: 20, grade: 'A',},
    {name: 'Dara', age: 30, grade: 'F',},
    {name: 'Queen', age: 25, grade: 'B',},
]
function filterByGrade(students, grade) {
    return students.filter(student => student.grade === grade);
}
function averageAge(students){
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}
filterByGrade(students, 'A');
averageAge(students);