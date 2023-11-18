// // var age
// // // console.log("Welcome to Javascript!!!")//This prints a simple message on to the console tab

// // //console.log("hii")

// // // =====================
// // // Create variables to store Raju, 20, Bangalore, true

// // // true and false

// // // var username = "Raju"
// // // var age = 20
// // // var city = "Bangalore"
// // // var ismarried = true

// // // console.log(username)
// // // console.log(age)
// // // console.log(city)
// // // console.log(ismarried)

// // // console.log(username, age, city, ismarried)

// // // console.log(`The name is ${username}, his age is ${age}, lives in a city ${city} and his marital status is ${ismarried}.`)

// // // alert(`The name is ${username}, his age is ${age}, lives in a city ${city} and his marital status is ${ismarried}.`)

// // // alert() == display the information inside the popup

// // // prompt() == collect the information from the popup

// // // var username = prompt("Enter your name:-")
// // // var age = prompt("Enter your age:-")
// // // var city = prompt("Enter your city:-")
// // // var isMarried = prompt("Enter your marital status:-")

// // // console.log(username, age, city, isMarried)

// // // =======================DAY 2=========================

// // // var name = "Raju"
// // // name = "Mark"
// // // console.log(name)


// // // let name = "Raju"
// // // name = "Mark"
// // // console.log(name)


// // // const name = "Raju"
// // // name = "Mark"
// // // console.log(name)


// // // Double Quotes or Single Quotes --> String
// // // Number
// // // true and false --> boolean

// // // let username = "Raju"
// // // let age = 30.5
// // // let city = "Bangalore"
// // // let isMarried = true

// // // console.log(typeof(username))
// // // console.log(typeof(age))
// // // console.log(typeof(city))
// // // console.log(typeof(isMarried))

// // // In Javascript, when we create a variable without assigning any value,
// // // then the default value is undefined

// // // let city
// // // console.log(city)

// // // var city
// // // console.log(city)

// // // const city
// // // console.log(city)

// // // Operators
// // // -->Operators are just symbols(+, -, *, <, >, ...) that can be used to 
// // // perform some operations between the data(string, number, boolean)

// // // 1)Arithmetic Operator(+, -, *, /, %(modulus))
// // // We require arithmetic operators to perform some mathematical operations

// // // console.log(40 + 60)
// // // console.log(40 - 60)
// // // console.log(40 * 60)
// // // console.log(40 / 5)
// // // console.log(40 % 5)

// // // 2)Assignment Operator(=, +=, -=, *=, /=, %=)
// // // -->Assignment operators are used to assign/give/provide the data to a variable

// // // let age = 30
// // // age = age - 10
// // // age -= 10
// // // console.log(age)

// // // 3)Comparison Operator(==, ===, <, >, <=, >=, !=(not equal))
// // // -->Comparison operators are used whenever we want to compare the data

// // // console.log(10 == 10)
// // // console.log(10 != 20)
// // // console.log(10 < 20)
// // // console.log(10 > 10)
// // // console.log(10 <= 10)
// // // console.log(10 >= 20)

// // // console.log("Raju" == "Raju")
// // // console.log("Raju" === "Raju")

// // // console.log(10 == "10")
// // // console.log(10 === "10")

// // // 1 = true, 0 = false

// // // console.log(true == "hello")
// // // console.log(true == 30)

// // // console.log(true === "1")
// // // console.log(true === 30)

// // // 4)Logical Operator
// // // -->It is used to evaluate 2 conditions at a time
// // // -->Logical AND(&&)
// // // -->If both the conditions are true, then the output will be true

// // // console.log( (10 == 10) && (40 < 50) )

// // // -->Logical OR(||)
// // // If at least one of the condition is true, then the output will be true
// // // console.log( (10 == 10) || (40 > 50) )

// // // let username = prompt("Enter the username:-")
// // // let password = prompt("Enter the password:-")

// // // (username == "Raju") && (password == "Welcome")


// // // -->Logical NOT(!)
// // // -->It can be used only on one condition
// // // console.log( !(10 > 20) )


// // // Increment Operator(++)
// // // -->Increment operator can be used to increase the value by 1
// // // 2 types
// // // 1)Pre Increment Operator
// // // -->++ comes before the variable
// // // 2)Post Increment Operator
// // // -->++ comes after the variable

// // // Ex:-
// // // age++, ++age

// // // 12 10 12

// // // let a = 10
// // // let b = a++
// // // let c = ++a

// // // console.log(a, b, c)

// // // let a = 10
// // // let b = 20

// // // let c = a++ + ++b
// // // console.log(a, b, c)

// // // =======================DAY 3=========================

// // // Conditional Statements
// // // Executing the statements, based on some condition
// // // 1)if condition
// // // -->if condition will execute the statements only if the condition
// // // is true

// // // let age = prompt("Enter the age:-")

// // // if(age > 18)
// // // {
// // //     console.log("Driving license can be")
// // // }

// // // 2)if else condition

// // // let age = prompt("Enter the age:-")

// // // if(age > 18)
// // // {
// // //     console.log("Driving license can be given!")
// // // }
// // // else
// // // {
// // //     console.log("Driving license cannot be given!")
// // // }

// // // Ternary Operator
// // // -->Ternary operator is used to reduce the length of the program
// // // that is written using if else condition

// // // let age = 30

// // // if(age > 18)
// // // {
// // //     console.log("Driving license can be given!")
// // // }
// // // else
// // // {
// // //     console.log("Driving license cannot be given!")
// // // }

// // // -------------------------------------------------------

// // // let age = 30

// // // let output = (age > 18)? "Driving license can be given!" : "Driving license cannot be given!"
// // // console.log(output)

// // // React --> Quiz Application --> display a total of 5 questions

// // // 1st question --> continue button
// // // 2nd question --> continue button
// // // 3rd question --> continue button
// // // 4th question --> continue button
// // // 5th question --> submit button

// // // if(questionCount == 5)
// // // {
// // //     <button>submit</button>
// // // }
// // // else
// // // {
// // //     <button>continue</button>
// // // }

// // // (questionCount == 5)? <button>submit</button> : <button>continue</button>

// // // if - else if - else condition
// // // I want to write multiple conditions

// // // let day = "sunday"

// // // if(day == "monday")
// // // {
// // //     console.log("working day!")
// // // }
// // // else if(day == "tuesday")
// // // {
// // //     console.log("working day!")
// // // }
// // // else if(day == "wednesday")
// // // {
// // //     console.log("working day!")
// // // }
// // // else if(day == "thursday")
// // // {
// // //     console.log("working day!")
// // // }
// // // else if(day == "friday")
// // // {
// // //     console.log("working day!")
// // // }
// // // else if(day == "saturday")
// // // {
// // //     console.log("not working day!")
// // // }
// // // else if(day == "sunday")
// // // {
// // //     console.log("not working day!")
// // // }
// // // else
// // // {
// // //     console.log("Invalid Day!!!")
// // // }

// // // switch case
// // // -->Using switch case, we can reduce the length of the program written using 
// // // if-else if-else condition

// // // let day = "monday"

// // // switch(day)
// // // {
// // //     case "monday":
// // //         console.log("Working day!")
// // //         break
    
// // //     case "tuesday":
// // //         console.log("working day!")
// // //         break
    
// // //     case "wednesday":
// // //         console.log("Working day!")
// // //         break
    
// // //     case "thursday":
// // //         console.log("working day!")
// // //         break

// // //     case "friday":
// // //         console.log("Working day!")
// // //         break
        
// // //     case "saturday":
// // //         console.log("not working day!")
// // //         break

// // //     case "sunday":
// // //         console.log("not working day!")
// // //         break

// // //     default:
// // //         console.log("Invalid day")
// // // }

// // // Function
// // // -->A Function is like a container, which stores the main logic of our application 

// // // There are a total of 3 ways to create a function
// // // 1)By using function declaration
// // // 2)By using function expression
// // // 3)By using arrow function
// // // Lets create a function that displays the message "Good Evening"

// // // 1)By using function declaration

// // // function display()
// // // {
// // //     console.log("Good Evening")
// // // }

// // // display()

// // // 2)By using function expression
// // // -->We keep function inside a variable

// // // const display = function()
// // // {
// // //     console.log("Good Evening")
// // // }

// // // display()

// // // 3)By using arrow function
// // // -->This is the modern way of creating the function

// // // const display = ()=>
// // // {
// // //     console.log("Good Evening")
// // // }

// // // display()

// // // Function Decleration

// // // -->It is one of the way to create a function using function keyword

// // // SYNTAX:

// // // function functionName()
// // // {
// //     // Part of this function
// // // }


// // // Create a function that performs addition between 2 numbers

// // // Arguments(values) and Parameters(variable)

// // // function add(num1 = 0, num2 = 0)
// // // {

// // //     let result = num1 + num2 // 100 + undefined --> Invalid Number(NaN)--> Not A Number
// // //     console.log(result)
// // // }

// // // add(100)
// // // add(300)
// // // add(500)

// // // A function can not only print the value, it can also return the value

// // // function multiply(a, b)
// // // {
// // //    return a * b
// // // }

// // // let result = multiply(10, 20)
// // // console.log(result)


// // // function multiply(a, b)
// // // {
// // //    console.log(a * b)
// // // }

// // // multiply(10, 20)



// // // 2)Function Expression

// // // let add = function(num1, num2)
// // // {
// // //     console.log(num1 + num2)
// // // }

// // // add(100, 200)


// // // let add = function(num1, num2)
// // // {
// // //     return num1 + num2
// // // }

// // // let result = add(100, 200)
// // // console.log(result)

// // // Function Decleration
// // // We can call the function after it is created or even before
// // // it is created

// // // This concept is only called as Hoisting

// // // Hoisting is a mechanism where all the function declerations
// // // present in the program will be automatically moved to the top 

// // // wish()

// // // function wish()
// // // {
// // //     console.log("Good Evening")
// // // }

// // // wish()

// // // const wish = function()
// // // {
// // //     console.log("Good Evening")
// // // }


// // // Arrow Function 
// // // -->It is the modern way of creating a function 

// // // const wish = (name)=>`${name} Good Evening`

// // // let output = wish("Raju")
// // // console.log(output)

// // // loops
// // // -->loops helps to execute certain set of statements again and again without repeating the 
// // // code
// // // for loop

// // // for(let i = 1; i < 11; i++)
// // // {
// // //     console.log("Hello")
// // // }

// // // Arrays --> []
// // // Store the names of 10 students 
// // // const names = ["Raju", "Ramu"]

// // // const commentsArray = []
// // // for(let i = 1; i < 6; i++)
// // // {
// // //     let myComment = prompt("Enter your comment!")
// // //     commentsArray.push(myComment)
// // // }

// // // // Access all the comments present in the array one by one and print it 
// // // // for of loop

// // // for(let i of commentsArray)
// // // {
// // //     console.log(i)
// // // }

// // // 1st element --> 0
// // // 2nd element --> 1

// // // const data = [10, 20, 30, 20]

// // // data.push(100)
// // // data.unshift(500)

// // // data.pop()
// // // data.pop()
// // // data.pop()

// // // console.log(data.length)

// // // data.shift()

// // // console.log(data)

// // // const output = data.splice(1, 3, "Raju", "Ramu", "John")

// // // console.log(output)
// // // console.log(data)


// // // console.log(data.includes(40))

// // // console.log(data.indexOf(20))

// // // console.log(data.lastIndexOf(20))

// // // let numbers = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

// // // forEach() = It is a inbuilt function present in javascript.
// // // It can be used on Arrays. We can use this function whenever
// // // we want to performation same operation on every element present
// // // in the array

// // // Multiply each and every element by 2

// // // numbers.forEach(function(a, b, c)
// // // {
// // //     console.log(a * 2, b, c)
// // // })

// // // 99.9999% = SAME

// // // map() = It is a inbuilt function present in javascript.
// // // It can be used on Arrays. We can use this function whenever
// // // we want to performation same operation on every element present
// // // in the array

// // // map() has the capability to print the output even in array format 

// // // RULE:- The count of input array elements and count of output array elements 
// // // should always be the same 


// // // let numbers = [ 10, 20, 30, 40 ]

// // // numbers.forEach(function(a)
// // // {
// // //    console.log(a * 2)
// // // })


// // let output = numbers.map(function(a)
// // {
// //     return a * 2
// // })

// // // console.log(output)

// // // let names = ["Raju", "Ramu", "John", "Mary"]

// // // let result = names.map(function(i)
// // // {
// // //     if(i.startsWith("R"))
// // //     {
// // //         return i
// // //     }
// // // })

// // // console.log(result)// [ "Raju", "Ramu" ]

// // // filter() --> reduce
// // // input array contains 10 elements = output array will be < 10 elements 

// // // let names = ["Raju", "Ramu", "John", "Mary"]

// // // let result = names.filter(function(i)
// // // {
// // //     if(i.startsWith("R"))
// // //     {
// // //         return i
// // //     }
// // // })

// // // console.log(result) // ["Raju", "Ramu"]


// // // let marks = [60, 70, 85, 90]

// // // // print marks > 75

// // // const result = marks.filter(function(i)
// // // {
// // //     if(i > 75)
// // //     {
// // //         return i
// // //     }
// // // })

// // // console.log(result)

// // // map (10 = 10)
// // // filter(10 = <=10)
// // // reduce(10, 100, 1000 = 1)

// // // Write a program to find the sum of all the elements present in the array 

// // // let numbers = [ 10, 20, 30, 40 ]

// // // // a = 100
// // // // b = NOTHING

// // // let result = numbers.reduce(function(accumulator, currentValue)
// // // {
// // //    return accumulator + currentValue
// // // })

// // // console.log(result)

// // // some() = little and every() = complete
// // // --> They will wither give the output as true or false 


// // // let marks = [60, 70, 85, 90]

// // // const result = marks.every(function(i)
// // // {
// // //     if(i > 50)
// // //     {
// // //         return i
// // //     }
// // // })

// // // console.log(result)


// // // let marks = [60, 70, 85, 90]

// // // const result = marks.some(function(i)
// // // {
// // //     if(i > 100)
// // //     {
// // //         return i
// // //     }
// // // })

// // // console.log(result)

// // // sort()
// // // 2 rules:-
// // // 1)if we get a -ve number no swapping
// // // 2)If we get a positive number swapping

// // // let numbers = [1, 10, 5, 50, 500, 200]

// // // 1st cycle

// // // 1, 10, 5, 50, 500, 200

// // // 1, 10, 5, 50, 500, 200

// // // 1, 5, 10, 50, 500, 200

// // // 1, 5, 10, 50, 500, 200

// // // 1, 5, 10, 50, 500, 200

// // // 1, 5, 10, 50, 200, 500

// // // // 2nd cycle

// // // 1, 5, 10, 50, 200, 500

// // // 3rd cycle
// // // 1, 5, 10, 50, 200, 500

// // // 4th cycle 
// // // 1, 5, 10, 50, 200, 500

// // // 5th cycle
// // // 1, 5, 10, 50, 200, 500

// // // const result = numbers.sort(function(a, b)
// // // {
// // //     return b - a
// // // })

// // // console.log(result)

// // // Objects {}
// // // Why?

// // // Fitness Watches

// // // Fitness Data / Info 
// // // steps, calories, bpm, ......  

// // // let fitnessData = [ "stepsTaken", 1000, "caloriesBurned", 4000, "heartRate", 70 ]

// // // Objects store the data in key value pairs 

// // // let fitnessData = { 
// // //     stepsTaken: 1000,
// // //     caloriesBurned: 4000,
// // //     heartRate: 70
// // // }

// // // console.log(fitnessData.stepsTaken)
// // // console.log(fitnessData.caloriesBurned)
// // // console.log(fitnessData.heartRate)

// // // Quiz Application
// // // Where i need to display questions along with options

// // // const info = [
// // // {
// // //     title: "What is Javascript?",
// // //     optionA: "It is a tool",
// // //     optionB: "It is a toy",
// // //     optionC: "It is game",
// // //     optionD: "It is a technology",
// // // },
// // // {
// // //     title: "What is Java?",
// // //     optionA: "It is a tool",
// // //     optionB: "It is a toy",
// // //     optionC: "It is game",
// // //     optionD: "It is a technology",
// // // },
// // // {
// // //     title: "What is Python?",
// // //     optionA: "It is a tool",
// // //     optionB: "It is a toy",
// // //     optionC: "It is game",
// // //     optionD: "It is a technology",
// // // }
// // // ]

// // // info.forEach(function(i)
// // // {
// // //     console.log(i.title, i. optionA)
// // // })

// // // Javascript DOM(Document Object Model)
// // // -->Helps to target HTML and CSS Code 

// // // let myH1 = document.querySelector("h1")

// // // myH1.style.color = "orange"
// // // myH1.style.backgroundColor = "magenta"

// // // TODO Application


// // // const AddButton = document.querySelector("#addbutton")
// // // const InputBox = document.querySelector("input")
// // // const MyUl = document.querySelector("ul")

// // //Logic to continuosly check whether something is present in the
// // // input box or not

// // // emptyCheckLogic()

// // // function emptyCheckLogic()
// // // {
// // //     if(InputBox.value === "")
// // //     {
// // //         AddButton.setAttribute("disabled", true)
// // //     }
// // //     else
// // //     {
// // //         AddButton.removeAttribute("disabled")
// // //     }
// // // }

// // // InputBox.addEventListener("input", function()
// // // {
// // //     emptyCheckLogic()
// // // })

// // // AddButton.addEventListener("click", function()
// // // {
// // //         let enteredTask = InputBox.value//Read the task

// // //         let myLi = document.createElement("li")//<li></li>
// // //         myLi.innerHTML = `${enteredTask} <i class="fa-solid fa-trash" id="deletebutton"></i>`
    
// // //         MyUl.appendChild(myLi)
    
// // //         InputBox.value = ""

// // //         emptyCheckLogic()

// // //         const DeleteButton = myLi.querySelector("#deletebutton")
        
// // //         DeleteButton.addEventListener("click", function()
// // //         {
// // //             //Logic to delete the entire li
// // //            myLi.remove()
// // //         })
// // // })

// // {/* <li> Playing <button>Delete</button> </li> */}

// // // Rest(Remaining) Operator(...)


// // // function collect(...b)
// // // {
// // //     console.log(a)
// // //     console.log(b)
// // // }

// // // collect(10, 20, 30, 50, "Raju", true)

// // // Spread Operator(...) --> spreading something

// // // function collect(a, b, c)
// // // {
// // //     console.log(a)
// // //     console.log(b)
// // //     console.log(c)
// // // }

// // // collect(...[10, "Raju", true, 30, false])


// // // Array Destructuring(Removing some structure)

// // // const colors = ["Red", "Orange", "Yellow", "Blue"]

// // // let color1 = colors[0]
// // // let color2 = colors[1]
// // // let color3 = colors[2]
// // // let color4 = colors[3]

// // // const [ color1, color2, color3, color4 ] = colors
// // // const [ , , color ,  ] = colors
// // // const [ color1, ...color ] = colors

// // // Object Destructuring

// // // const studentData = {
// // //     name: "Raju",
// // //     age: 30,
// // //     city: "Bangalore"
// // // }

// // // console.log(studentData.name)
// // // console.log(studentData.age)
// // // console.log(studentData.city)

// // // const { name, age, city } = studentData
// // // const { name, ...data } = studentData
// // // console.log(name)
// // // console.log(data)

// // // Inbuilt Objects 
// // // 1)Math Object 
// // // -->Math object in javascript is used 
// // // basically to perform mathematical operations
// // // 99.99% --> Generating random numbers 

// // // generate a random number between 0 to 1

// // // console.log(Math.random())

// // // const MyButton = document.querySelector("button")
// // // const BodyTag = document.querySelector("body")
// // // const MyH1 = document.querySelector("h1")

// // // MyButton.addEventListener("click", function()
// // // {
// // //     // Logic to change the background color with random colors

// // //     // 0 to 255
// // //     let redColor = Math.ceil(Math.random() * 255)//150
// // //     let greenColor = Math.ceil(Math.random() * 255)//65
// // //     let blueColor = Math.ceil(Math.random() * 255)//97

// // //     BodyTag.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`
// // //     MyH1.textContent = `Your RGB pattern is: rgb(${redColor}, ${greenColor}, ${blueColor})`

// // // })

// // // =============================================

// // // Random OTP generator

// // function generateOTP(length)
// // {
// //     const info = "0123456789"
// //     let otp = "" // "25546"

// //     // length = 5

// //     // i = 1, 2, 3, 4

// //     for(let i = 1; i <= length; i++)
// //     {
// //         // We need to get 5 numbers randomly

// //         // 0 to 5
// //         let randomNumber = Math.ceil(Math.random() * 9)//5

// //         otp = otp + info[randomNumber]
// //     }

// //     return otp

// // }

// // let randomOTP = generateOTP(4)
// // console.log(randomOTP)

// // console.log("Print numbers 0 to 100000000")
// // console.log("Print alphabets from a to z")

// // console.log("Hi")
// // alert("Hello")
// // console.log("Welcome")

// // Synchronus Javascript = Code will be executed line by line in a linear manner. 
// // In case if any of the line consumes more about of time, then the remaining lines
// // present in that program will be completely blocked.To overcome this problem
// // we need to use Asynchronus Javascript

// // Using Asynchronus Javascript we can execute the lines present in the program
// // simulataneously, where no code blocking occurs 

// // Concepts like setTimeout(), setInterval(), callback hell, promises, async, await,
// // fetch == Asynchronous Javascript Program


// // Synchronus Javascript Program 

// // function restaurant(name)
// // {
// //     console.log(`${name} has ordered the food!`)
    
// //     for(let i = 0; i < 100; i++)
// //     {
// //         console.log(`${name} your food is ready!`)
// //     }
    
// //     console.log(`${name} has enjoyed the food and left the restaurant!`)
// // }

// // setTimeout(function()
// // {
// //     restaurant("Raju")
// // }, 4000)

// // console.log("Raju is chatting with his friends")


// // console.log("Start")

// // function task1()
// // {
// //     console.log("Task1 started")

// //     for(let i = 0; i < 20000; i++)
// //     {
// //         console.log("Task1 completed")
// //     }
// // }

// // function task2()
// // {
// //     console.log("Task2 started")

// //     for(let i = 0; i < 20000; i++)
// //     {
// //         console.log("Task2 completed")
// //     }
// // }

// // task1()
// // task2()

// // console.log("Stop")


// // task2 doesnt start until task1 is completed ==>Wasteage of Time

// // console.log("Start")

// // "Start"
// // "Task1 started"
// // "Task2 started"
// // "Task2 got completed"
// // "Task1 got completed"


// // function task1()
// // {
// //     console.log("Task1 started")

// //     setTimeout(function()
// //     {
// //         console.log("Task1 got completed")
// //     }, 3000)
// // }

// // function task2()
// // {
// //     console.log("Task2 started")

// //     setTimeout(function()
// //     {
// //         console.log("Task2 got completed")
// //     }, 2000)
// // }

// // task1()
// // task2()

// // First
// // Second
// // Fifth
// // Third
// // Fourth

// // console.log("First")

// // console.log("Second")

// // setTimeout(function()
// // {
// //     console.log("Third")
// // }, 0)

// // setTimeout(function()
// // {
// //     console.log("Fourth")
// // }, 2000)

// // console.log("Fifth")



// // const display = (() => {
// //     console.log("this is the start");
  
// //     setTimeout(() => {
// //       console.log("Callback 1: this is a msg from call back");
// //     }); // has a default time value of 0
  
// //     console.log("this is just a message");
  
// //     setTimeout(() => {
// //       console.log("Callback 2: this is a msg from call back");
// //     }, 0);
  
// //     console.log("this is the end");
// //   });
// // display()

// // info = function()
// // {
// //     serveOrder("Dosa")
// // }

// // info()

// // data = function()
// // {
// //     eatFood("Dosa")
// // }

// // function placeOrder(customerName, itemName, info)
// // {
// //     setTimeout(function()
// //     {
// //         console.log(`${customerName} your ${itemName} is successfully ordered`)
// //         info()
// //     }, 3000)
// // }

// // function serveOrder(itemName, data)
// // {
// //     setTimeout(function()
// //     {
// //         console.log(`your ${itemName} is successfully served`)
// //         data()
// //     }, 3000)
// // }


// // function eatFood(itemName, info)
// // {
// //     setTimeout(function()
// //     {
// //         console.log(`your ${itemName} is successfully eaten`)
// //         info()
// //     }, 3000)
// // }

// // function makePayment(customerName, itemName)
// // {
// //     setTimeout(function()
// //     {
// //         console.log(`${customerName} your ${itemName} is billed at INR 400`)
// //     }, 3000)
// // }

// // // Callback Hell 

// // placeOrder("Mark", "Dosa", function()
// // {
// //     serveOrder("Dosa", function()
// //     {
// //         eatFood("Dosa", function()
// //         {
// //             makePayment("Mark", "Dosa")
// //         })
// //     })
// // })

// // callback function -- inner function


// // Promises --> Write cleaner code
// // Promises are nothing but objects which is used for 2 purposes
// // 1)To write cleaner asynchronous code by removing the problem of callback hell  


// // create a promise ==> new keyword

// // Promise will basically have 3 states / 3 results
// // I am promising to give a chocolate tomorrow
// // Pending
// // Fullfilled == resolve
// // Rejected == reject

// // const resolve = function()
// // {
// //     ///////
//         // Logic to call another function 
// // }

// // resolve(serveOrder("Dosa"))

// // function placeOrder(customerName, itemName)
// // {
// //     const promise1 = new Promise(function(resolve, reject)
// //     {
// //         setTimeout(function()
// //         {
// //             console.log(`${customerName} your ${itemName} is successfully ordered`)
// //             resolve(serveOrder("Dosa"))
// //         }, 3000)
// //     })  
// //     return promise1
// // }

// // function serveOrder(itemName)
// // {
// //     const promise2 = new Promise(function(resolve, reject)
// //     {
// //         setTimeout(function()
// //         {
// //             console.log(`your ${itemName} is successfully served`)
// //             resolve(eatFood("Dosa"))
// //         }, 3000)
// //     })   
// //     return promise2
// // }



// // placeOrder("Raju", "Dosa")
// // .then(function(result)
// // {
// //     console.log(result)
// // })
// // .catch(function(error)
// // {
// //     console.log(error)
// // })



// // new Promise(function(resolve, reject)
// // {
// //     //logic to connect to fakestoreAPI --> fake product details
// //     // 1)Connect to to Fakestore API 
// //     if(output)
// //     {
// //         resolve(displyResults())
// //     }
// //     else
// //     {
// //         reject(displayError())
// //     }
    
// // })

// // function displayResults()
// // {
// //     3)Print it in the webpage --> output
// // }

// // function displayError()
// // {
// //     3)Print it in the webpage --> error
// // }

// // 1)Connect to to Fakestore API 
// // 2)2 results (output / error)
// // 3)Print it in the webpage --> output || Print a meaning error mesage --> error

// // fetch() --> always created and returns a promise 
// // json() --> always always created and return a promise 

// // const myDivContainer = document.querySelector(".container")

// // const url =  "https://fakestoreapi.com/products"

// // function fetchProductData()
// // {
// //     fetch(url).then(function(result)
// //     {
// //         return result.json()
// //     })
// //     .then(function(output)
// //     {
// //         output.map(function(i)
// //         {
// //             const MyDiv = document.createElement("div")
// //             MyDiv.classList.add("item")
            
// //             const MyImage = document.createElement("img")
// //             MyImage.src = i.image
            
// //             const MyH1 = document.createElement("h1")
// //             MyH1.textContent = i.title
            
// //             const MyPara = document.createElement("p")
// //             MyPara.textContent = i.description

// //             const MyH4 = document.createElement("h4")
// //             MyH4.textContent = i.price

// //             MyDiv.append(MyImage)
// //             MyDiv.append(MyH1)
// //             MyDiv.append(MyH4)
// //             MyDiv.append(MyPara)

// //             myDivContainer.append(MyDiv)
            
// //         })
// //     })
// //     .catch(function(error)
// //     {
// //         console.log(error)
// //     })
    
   
// // }

// // fetchProductData()

// // Javascript Object --> key(We will not keep in single quotes or double quotes) value pairs 
// // JSON --> key(Be kept always in double quotes) value pairs

// const QuoteButton = document.querySelector("#button")
// const MyDiv = document.querySelector("div")
// const CopyIcon = document.querySelector("#copy")
// // async and await --> makes the length of the program to look smaller
// // if a function is made as async, that functions returns a promise 

// QuoteButton.addEventListener("click", async function()
// {
//     // fetch("https://api.quotable.io/random")
//     // .then(function(output)
//     // {
//     //     return output.json()
//     // })
//     // .then(function(result)
//     // {
//     //     console.log(result.author)
//     //     console.log(result.content)
//     // })
//     // .catch(function(error)
//     // {
//     //     console.log(error)
//     // })

//     // Fullfilled --> quote message(JSON) --> quote message(Javascript Object)
//     // Rejected --> error message 

//     // result = pending state 
//     const result = await fetch("https://api.quotable.io/random")
//     const output = await result.json()

//     const MyH3 = document.createElement("h3")
//     MyH3.textContent = output.author

//     const MyParagraph = document.createElement("p")
//     MyParagraph.textContent = output.content
    
//     MyDiv.append(MyH3)
//     MyDiv.append(MyParagraph) 
// })




// CopyIcon.addEventListener("click", async function()
// {
//     const QuoteData = document.querySelector("p")    
//     // Logic to copy the quote
//     let copiedData = await navigator.clipboard.writeText(QuoteData.textContent)
//     console.log(copiedData)
// })

// // const navigator = {
// //     clipboard: {
// //         writeText: function()
// //         {
// //             //etdgfesfgdf
// //         }
// //     }
// // }

// // var, let, const 

// // 1)Variables created using var keyword can be re-created again and again, but same
// // is not possible with let keyword

// // var age = 20
// // console.log(age)//20
// // var age = 40
// // console.log(age)//40


// // var age = 20
// // console.log(age)//20
// // age = 40
// // console.log(age)//40

// // let age = 20
// // console.log(age)//20
// // age = 40
// // console.log(age)//40

// // let age = 20
// // console.log(age)//20
// // let age = 40
// // console.log(age)//40

// // 2)var keyword is not block scoped but always function scoped, whereas let keyword is always block scoped
// // block in javascript --> { }

// // function display()
// // {
// //     if(true)
// //     {
// //         let passstatus = "Driving license can be given"
// //         console.log(passstatus)
// //     }

// //     console.log(passstatus)
// // }

// // // console.log(passstatus)

// // display()

// // 3)var keyword supports hoisting, whereas let keyword doesnt support hoisting

// // wish()

// // function wish()
// // {
// //     console.log("Good Night")
// // }

// // console.log(age)
// // let age = 20



// Objects in javascript

// In javascript, there will be a global object --> window object = {dfs: sfd, ....}

// var age = 50

// function wish()
// {
//     console.log("Good Evening")
// }

// this keyword will always point / refer the window object
// console.log(this)


// const studentDetails = {
//     username: "Raju",
//     age: 30,
//     displayData: function()
//     {
//         console.log(this.username)
//         console.log(this.age)
//     }
// }

// studentDetails.displayData()

// call(), apply() and bind()
// --> Will work with this keyword only 

// call() and apply() are 99.99% same 

// const employeeData1 = {
//     username: "Mark",
//     age: 30,
// }

// let displayEmployeeData = function(city, isMarried)
//     {
//         console.log(`The employee name is ${this.username} and his age is ${this.age} lives in a city ${city}
//         and his marital status is ${isMarried}`)
//     }


// const employeeData2 = {
//     username: "Cook",
//     age: 32,
    
// }

// I will write the logic in such a way that, employeeData2 object will borrow
// the function from employeeData1 --> call()

// employeeData1.displayEmployeeData()
// employeeData1.displayEmployeeData.call(employeeData2)

// |||||||||||||||||||||||||||||||||||||||

// displayEmployeeData.call(employeeData1, "Bangalore", true)
// displayEmployeeData.call(employeeData2, "Mumbai", false)

// employeeData1.username = "AAA"
// employeeData2.username = "BBB"

// displayEmployeeData.call(employeeData1, "Bangalore", true)
// displayEmployeeData.call(employeeData2, "Mumbai", false)

// displayEmployeeData.apply(employeeData1, [ "Bangalore", true ])
// displayEmployeeData.apply(employeeData2, [ "Mumbai", false ])

// bind() will always return a copy of that function which is currently called 

// let copy1 = displayEmployeeData.bind(employeeData1, "Bangalore", true)
// let copy2 = displayEmployeeData.bind(employeeData2, "Mumbai", false)

// copy1()
// copy2()

// employeeData1.username = "AAA"
// employeeData2.username = "BBB"

// copy1()
// copy2()


// strings 
// --> Any data kept in double quotes or single quotes is called as a string 

// Methods we can use on a string 

// let data = "Bangalore is a city"

// let finalOutput = ""

// let output = data.split(" ")
// output.map(function(i)
// {
//     finalOutput = finalOutput + i[0].toUpperCase() + i.slice(1, i.length)
// })

// console.log(finalOutput)

// console.log(data)
// console.log(data[0])
// console.log(data.substring(0, 9))
// console.log(data.startsWith("B"))
// console.log(data.endsWith("y"))
// console.log(data.indexOf("a"))
// console.log(data.lastIndexOf("a"))
// console.log(data.includes("city"))
// let output = data.split("a")//seperator
// console.log(output)
// console.log(data.slice(0, 9))
// console.log(data.length)
// data.replace("Bangalore", "Hyderabad")
// console.log(data)
// console.log(data.toLowerCase())
// console.log(data.toUpperCase())
// console.log(data.trimStart())
// console.log(data.trimEnd())
// console.log(data.trim())



// const studentData = {
//     username: "Raju",
//     age: 20,
//     city: "Bangalore"
// }

// const myJsonData = JSON.stringify(studentData)
// const myJavascriptObject = JSON.parse(myJsonData)

// console.log(myJsonData)
// console.log(myJavascriptObject)

// const studentData = '{"username": "Raju", "age": 20, "city": "Bangalore"}'
// console.log(studentData)

//OBJECT ORIENTATION

// let student1 = {
//     name: "Raju",
//     age: 10,
//     city: "Bangalore",
//     displayData: function()
//     {
//         console.log(this.name, this.age, this.city)
//     }
// }

// let student2 = {
//     name: "Mary",
//     age: 7,
//     city: "Mumbai",
//     displayData: function()
//     {
//         console.log(this.name, this.age, this.city)
//     }
// }

// let student3 = {
//     name: "Sam",
//     age: 14,
//     city: "Delhi",
//     displayData: function()
//     {
//         console.log(this.name, this.age, this.city)
//     }
// }

// 1)Constructor Function 

// new = is a keyword that is used to created any no of objecs based on the blueprint(Constructor Function)


// const Student = function(myName, myAge, myCity)
// {
//     this.name = myName
//     this.age = myAge
//     this.city = myCity
// }

// Student.prototype.displayData = function()
//     {
//         console.log(this.name, this.age, this.city)
//     }

// let student1 = new Student("Raju", 10, "Bangalore") //name
// let student2 = new Student("Mary", 7, "Mumbai") //name

// console.log(student1)
// console.log(student2)

// student1.displayData()
// student2.displayData()

// totally how many name variables will be created 
// totally how many age variables will be created 
// totally how many city variables will be created 
// totally how many displayData() will be created 

// 2)Using a class 

// class Student
// {
//     name
//     age
//     city

//     constructor(myName, myAge, myCity)
//     {
//         this.name = myName
//         this.age = myAge
//         this.city = myCity
//     }

//     displayData()
//     {
//         console.log(this.name, this.age, this.city)
//     }
// }

// let student1 = new Student("Raju", 15, "Bangalore")
// // student1.displayData()

// let student2 = new Student("John", 10, "Mumbai")
// // student2.displayData()

// console.log(student1)
// console.log(student2)

// Encapsulation

// Providing security to the most important component is only called as Encapsulation
// # symbol -- private

// Problems:-
// 1)accountBalance can be directly accessed by a outsider
// 2)Outsider also has the power to modify the balance 

// NOTE:-
// TO provide security we use # symbol so that invalid person cannot access it but even a valid person
// also cannot access it

// SOLUTION:-
// Only valid person should be able to access and invalid person should b=not be able to access 

// help of 2 things
// getters = function that will help to get the data
// setters = function that will help to set the data

// class BankAccount
// {
//     name
//     accountNumber
//     #accountBalance

//     constructor(myName, myAccountNumber, myAccountBalance)
//     {
//         this.name = myName
//         this.accountNumber = myAccountNumber
//         this.#accountBalance = myAccountBalance
//     }

//     set updateBalance(balance)//48000
//     {
//         //Logic to check whether that balance is a number or not and > 0
//         if(balance > 0)
//         {
//             this.#accountBalance = balance
//         }
//         else
//         {
//             alert("Pleae enter valid amount")
//         }
//     }

//     get getBalance()
//     {
//         console.log(this.#accountBalance)
//     }

// }

// const account = new BankAccount("Raju", 1234, 50000)
// // account.updateBalance(48000)
// account.updateBalance = 40000
// account.getBalance()



// Polymorphism
// poly --> many 
// morph --> forms

// If something is existed or available in multiple forms ==> polymorphism

// If a variable or a function is existed in multiple forms ==> polymorphism

// Yourself --> Home(Behaviour), Friends(another), village(another)

// add function --> 2 numbers, 3 numbers, 4 numbers

// Method Overloading --> A single method/function is loaded with multiple jobs/tasks --> overloaded method

// Method Overloading is the best example for Polymorphism but it is not possible in javascript and python

// function add(a, b)
// {
//     console.log(a + b)
// }

// function add(a, b, c)
// {
//     console.log(a + b + c)
// }

// function add(a, b, c, d)
// {
//     console.log(a + b + c + d)
// }

// add(3, 4, 5, 6)

// Inheritance
// --> It is the ability of one class to access the methods from another class(CODE REUSABILITY and CODE EXTENDABILITY)

// DEV 1

// class PersonalLoan
// {
//     // 50 methods
// }

// class GoldLoan
// {
//     // 100 methods
// }

// class CarLoan
// {
//     // 80 methods
// }

// // 30 - 30 - 30
// //230 methods


// // DEV 2

// class Loan
// {
//     // 30 methods
// }

// class PersonalLoan(CHILD CLASS) extends Loan(PARENT CLASS)

// class PersonalLoan extends Loan
// {
//     // 20 methods 
// }

// class GoldLoan extends Loan
// {
//     // 70 methods
// }

// class CarLoan extends Loan
// {
//     // 50 methods
// }

// 170 methods



// class Person 
// {
//     constructor(myName, myAge, myCity)
//     {
//         this.name = myName
//         this.age = myAge
//         this.city = myCity
//     }

//     displayData()
//     {
//         console.log(this.name, this.age, this.city)
//     }
// }

// Employee = CHILD 
// Person = PARENT

// class Employee extends Person
// {
//     constructor(myName, myAge, myCity, myJobRole, mySalary)
//     {
//         // Logic will connect to the parent class(Person), then access the constructor
//         super(myName, myAge, myCity)
//         this.jobRole = myJobRole
//         this.salary = mySalary
//     }

//     displayData()
//     {
//         super.displayData()
//         console.log(this.jobRole, this.salary)
//     }
// }

// let e = new Employee("Raju", 30, "Bangalore", "Developer", 40000)
// e.displayData()

// 1)Single Inheritance

// class A 
// {
//     age = 20

//     displayAge()
//     {
//         console.log("The age is ",this.age)
//     }
// }

// class B extends A 
// {

// }

// let b = new B()
// console.log(b.age)
// b.displayAge()


// 2)Multilevel Inheritance

// class A 
// {
//     age = 20

//     displayAge()
//     {
//         console.log("The age is ",this.age)
//     }
// }

// class B extends A 
// {
//     name = "Raju"

//     displayName()
//     {
//         console.log("The name is ",this.name)
//     }
// }

// class C extends B
// {

// }


// Heirarchial Inheritance
// --> Only one parent class and multiple child classes 

// class A
// {
//     displayData()
//     {
//         console.log("Hi")
//     }
// }

// class B extends A
// {

// }

// class C extends A
// {

// }

// class D extends A
// {

// }


//Multiple Inheritance

// -->Single child class and multiple parents 

// class A 
// {
//     displayData()
//     {
//         console.log("I am from A class")
//     }
// }

// class B
// {
//     displayData()
//     {
//         console.log("I am from B class")
//     }
// }

// class C extends A, B//VALID
// {

// }

// Method Overiding
// If a child class is not happy with the information present in a method which is coming from the 
// parent class 

// class Shape
// {
//     displayShape()
//     {
//         console.log("I am from Shape class")
//     }
// }

// class Square extends Shape
// {
//     displayShape()
//     {
//         console.log("I have a shape of square")
//     }
// }

// class Circle extends Shape
// {
//     displayShape()
//     {
//         console.log("I have a shape of Circle")
//     }
// }

// let s = new Shape()
// s.displayShape()

// s = new Square()
// s.displayShape()

// s = new Circle()
// s.displayShape()

// class Student
// {
   
//     constructor(name, city)
//     {
//         this.name = name
//         this.city = city
//     }

//     displayData()
//     {
//         console.log(this.name, this.age, this.city)
//     }
// }


// let s1 = new Student("Raju", "Delhi")
// let s2 = new Student("John", "Mumbai")
// let s3 = new Student("Mary", "Pune")

// static keyword in javascript

// variables created without static keyword --> instance variables
// Instance variables will be created seperately for every object 

// Static variables
// -->Whenever we want to access any other variables we need to use this keyword
// But if we want to access a static variable, compulsorly we need to use class name 

// Static variables will be created commonly for the objects 

// class Person
// {
//     static age = 0

//     displayAge()
//     {
//         console.log(Person.age)
//         Person.age++
//     }
// }

// const p1 = new Person()
// p1.displayAge()//0
// p1.displayAge()//1
// p1.displayAge()//2
// p1.displayAge()//3

// const p2 = new Person()
// p2.displayAge()//0

// class A
// {
//     static x = 100
//     y = 200
// }

// class B extends A 
// {

// }

// let b = new B()
// console.log(B.x)
// console.log(A.x)
// console.log(b.y)

// Postman --> It is a tool that is used for testing API Endpoints

// for loop 

// for of loop(Used to access elements from an Array)

// const names = ["Raju", "Ramu", "Mary", "Sam"]

// for(let i of names)
// {
//  console.log(i)   
// }

// for in loop(Used to access information(Key and Value) from the Object)

const data = {
    name: "Raju",
    age: 20
}

// for(let i in data)
// {
//     console.log(i)
//     console.log(data[i])
// }


// for(let i of Object.entries(data))
// {
//     console.log(i)
// }

