// js is case senstive
// let department = "cs"
// department = "cs ssection I"   //if u write let department = "cs ssection I"  it woll going to give error because let cannot be re declared but it can be reasign
// console.log(department)

// const year  = "2024"
// const year  = "2025"  //we cannot update and cant reasign the value
// console.log(year)


// const departmentName ="cs"    //  camel case every new word starting with capital letter
// var department_Name ="cs"     // snake case 
// var DepartmentName = "cs"          // pasclale case

// const Value = 4*5   both will work because it is case senstive 
// const value = 4*5


// const collageName="college"
// const student=[
//    { name:"john",
//     dob:"20/03/2002",
//     collageName,
//    },
//    {
//     name : "samplename2",
//     dob:"20/03/2002",
//     collageName,

//    },
// ];
// const dob = "12-12-12"
// const student={
//     name:"john",
//     dob,
//     collageName,
//     ENG:12345,
//     MBBS:6789,
//     currentYear:2345,
//     english:{
//         totalMarks:81,
//         attendence:91,
//     },

// };
// const alice  = "dob";
// const collageAName = "collageName";
// student.name="samplename2"
// // student.dob="12-12-12"
// student.collageName="samplename2"
// console.log(student.school);      // give un defined
// student.school="school" // scholl name is asigning as it is not present in the object then also it will print the the school name
// console.log(school);      

// const studentcopy = student   // it is giving the refference changes in studentcopy will refelect in student also
// const studentcopy2 = {...student}   // it is copying it changes in studentcopy not will refelect in student also
// studentcopy2.name="samplename4"
// console.log(student)
// // console.log(studentcopy2) // samplename4
// const dob='12-13-14'
// const updatekey='dob'
// student[updatekey] = '14-14-14'        // scaure bracet reffers to that location if there is nothing written in stringnjmnj
// console.log(student)
 
// const current1 = student?.[collageAName];
// const current2 = student?.MBBS;
// const current3 = student[ENG];
// const current4 = student["currentYear"];
// const current5 = student["dob"];
// const current6 = student?.[alice];

// const{english}=student          now english will became the first variable so if we use this line we should not have to use the student.enlish.varaiable

// const output = `this is ${student.name} and ia m studying in ${student.collageName} and my english marks is ${student.english.totalMarks}`
// console.log(output)

// console.log(current);

// const students=[
//     {studentname:"john",
//     dob,
//     collageName,
//     currentYear:2345,
//     order:1
// },
//     {studentname:"mohan",
//     dob,
//     collageName,
//     currentYear:2345,
//     order:2
// },
// ];


// students[0].order = students[0].order+1
// students[1].order= students[1].order+1
// students[0].order = students[0].order*5
// students[1].order= students[1].order*5
// console.log(students)
// const student2 = students[0].order+1
// console.log(student2)

// let students=[
//     {
//         order: 1,
//     },
//     {
//         order: 2,
//     },
//     {
//         order: 3,
//     },
//     {
//         order: 4,
//     },
//     {
//         order:5,
//     },
// ];

// students.map((value,index) => {
//     const updateValue = value.order*5;
//     // value.order = updateValue;
//     // return value;
//     students[index].order = updateValue;   // this is also a methd to update the content of theh array
// });

// [] = [].map(value,index =>{
//     return value                   syntax  of map function

// });
// console.log(students)

// num = [5,10,15,20,25]
// // num.map((value,index) => {
// //     // const updatevalue = value-5;
// //     // num[index] = updatevalue;
// //     num[index] = value-5;
// // });
// num.forEach((value,index) => {
//     // const updatevalue = value-5;
//     // num[index] = updatevalue;
//     num[index] = value-5;
// });
// console.log(num);

// if (1!=1) {
//     console.log("if true")
// }

// else if (1==1) {
//     console.log("true")
// }

// else{
//     console.log(" else true")
// }
// const varaiable = "variable"
// switch (varaiable) {
//     case varaiable:
//         console.log(varaiable)
//         break;
//     case varaiable1:
//         console.log(varaiable1);
//         break;

//     default:
//         console.log("default");
//         break;
// }


// --------------------------------CLASS 2 

// function addition(a,b) {
//     return a+b;
// }                                         it is a simple function
// const value = addition(2,4)
// console.log(value)


// addition = () =>{                                  // this is a arrow function
//     console.log("hello")
// }

// addition() // this will print hello in console
// var a =1;
// var b=7;

// addition = (value1,value2) =>{                                    // this is a arrow function
//     return a+b;
// }
// value = addition(2,3);
// console.log(value)          // this will bew going to print 8 beacuse we are ushing global varibale in the function not the parameter


// const student={
//     name:"Rahul",
//     age:20,
//     marks:90,

// }

// addition = (student) =>{                                    // this is a arrow function
//     return student.name.age;
// }
// ans = addition(student);
// console.log(ans)


// doSomething = (value=[]) =>{
//     if (value.length === 0) {
//         return doSomething([1])
//     }
//     if (value.length != 2) {
//         c++
//         if (c===5) {
//             c=0
//             return console.log("max limit exceed")
//         }
//         console.log(`it has run ${c} tymes`)
//         return doSomething([1])
//     }
//     return{
//         'actualvalue':value, 
//         'actuallength':value.length
//     }
// //     return[
// //         {
// //             'actualvalue':value,              // to return the more than one value we can make an object or an array here i had maked an array you can also make an object
// //             'actuallength':value.length
// //         }
// //     ]
// }
// let c=0
// const variable = doSomething([1,2,3,4,5]);
// console.log(variable)

const getData= async () =>{
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const varaiable2  = await response.json();
    console.log(varaiable2);
    return data;
}
// const variable2 = getData();
// console.log(variable2);
getData();

