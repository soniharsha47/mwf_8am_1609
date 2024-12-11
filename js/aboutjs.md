# >> What is JS ?
<< Scripting lang
    devel. -> 1
    future
 >>

**>> Installation **
    .. [text](https://nodejs.org/en)

>> # -:  Linux commands :-
        {Microsoft Windows [Version 10.0.22631.4249]
        (c) Microsoft Corporation. All rights reserved.

        C:\Users\Soni Harsha> -> location
        }

        (commands)
       ```Linux
        1. pwd                             -> Present Working Dir
        2. ls/get-childitems               -> list -> Child items
        3. cd                              -> change dir
        4. mkdir/md                        -> make dir
        5. rmdir/rm                        -> remove dir
        6. new-item                        -> create file
        7. clear                           -> TO CLEAR TERMINAL
        8. node                            -> to run js files
       ```

# DOM           -   Document Object Model
# BOM           -   Browser Object Model

# BOM (Browser Object Model)

## How to print in js ?
  - console.log(statement/argument);

## Variables :
    - Container
    - variables | object | parameter | properties

    ### How to define variable ?
        1. var 
            var variableName = value;    
            global | old version | temp

        2. let
            let variableName = value;
            block scope | new version(ES6-2015) | temp

        3. const
            const variableName = value;
            block scope | new version(ES6-2015) | permanent

## Data Types
    1) Number   
                int, float, ... 

    2) String
                '..', "..", `...`
        
    3) Object
        .. when i want to store multiple + multitype of Data
                3.1) array  -> [value1,value2,..]
                3.2) Dict   -> {key:value;key1:value1,..}

    4) Boolean 
                . True (1)
                . False (0)

## typeof(argument)  -> it will return the data type of your argument

## Operators 
    1) Arithmetic           :- + - * /
    2) Assignment           :- = += -= *= /= %= **=
    3) Comparison           :- == != === !== > < >= <=
    4) Logical              :- && || !
    5) Bitwise              :- & | 
    6) String               :-  +

## Condition 
    if(conditions){
        // code to be executed if condition is true
    }
    else if(conditions){
        // code to be executed if condition is true
    }
    else if(conditions){
        // code to be executed if condition is true
    }
    else if(conditions){
        // code to be executed if condition is true
    }
    ...
    else{
        // code to be executed if all conditions are false
        // default value
    }

## Loops 
    1) While
        starting point
        while(conditional endpoint){
            // code to be execute
            increment/decrement
        }

    2) for
        for(startingpoint,endpoin,increment/decrementas)

    3) map -> it will work with array only - end


## Functions 
    . to ease our code
    . user define function
    . how to define functions ?
        1) normal function :
                function functionName(parameter){
                    // code to be executed
                }
        2) Arrow Function :
                l/v/c functionName = (paramters) =>{
                    // code to be executed
                }
        3) call back :
            .it will run when parent function function will call
                 (parameter) => { // code to be executed }


##  Function of String:
   string.function('arguments')
    String length
    String slice()
    String replace()
    String replaceAll()
    String toUpperCase()
    String toLowerCase()
    String concat()
    String trim()
    String trimStart()
    String trimEnd()
    String padStart()
    String padEnd()
    String charAt()
    String charCodeAt()
    String split()

## Function of array : 
    concat()	Joins arrays and returns an array with the joined arrays
    constructor	Returns the function that created the Array object's prototype
    copyWithin()	Copies array elements within the array, to and from specified positions
    entries()	Returns a key/value pair Array Iteration Object
    every()	Checks if every element in an array pass a test
    fill()	Fill the elements in an array with a static value
    filter()	Creates a new array with every element in an array that pass a test
    find()	Returns the value of the first element in an array that pass a test
    findIndex()	Returns the index of the first element in an array that pass a test
    forEach()	Calls a function for each array element
    from()	Creates an array from an object
    includes()	Check if an array contains the specified element
    indexOf()	Search the array for an element and returns its position
    isArray()	Checks whether an object is an array
    join()	Joins all elements of an array into a string
    keys()	Returns a Array Iteration Object, containing the keys of the original array
    lastIndexOf()	Search the array for an element, starting at the end, and returns its position
    length	Sets or returns the number of elements in an array
    map()	Creates a new array with the reasult of calling a function for each array element
    pop()	Removes the last element of an array, and returns that element
    prototype	Allows you to add properties and methods to an Array object
    push()	Adds new elements to the end of an array, and returns the new length
    reduce()	Reduce the values of an array to a single value (going left-to-right)
    reduceRight()	Reduce the values of an array to a single value (going right-to-left)
    reverse()	Reverses the order of the elements in an array
    shift()	Removes the first element of an array, and returns that element
    slice()	Selects a part of an array, and returns the new array
    some()	Checks if any of the elements in an array pass a test
    sort()	Sorts the elements of an array
    splice()	Adds/Removes elements from an array
    toString()	Converts an array to a string, and returns the result
    unshift()	Adds new elements to the beginning of an array, and returns the new length
    valueOf()	Returns the primitive value of an array

## Date Methods : 
    new Date()
        new Date(date string)
        new Date(year,month)
        new Date(year,month,day)
        new Date(year,month,day,hours)
        new Date(year,mohnt,day,hours,minutes)
        new Date(year,month,day,hours,minutes,seconds)
        new Date(year,month,day,hours,minutes,seconds,ms)
        new Date(milliseconds)

## Math :
        floor(x)	Returns x, rounded downwards to the nearest integer
        max(x, y, z, ..., n)	Returns the number with the highest value
        min(x, y, z, ..., n)	Returns the number with the lowest value
        pow(x, y)	Returns the value of x to the power of y
        random()	Returns a random number between 0 and 1
    round(x)	Rounds x to the nearest integer

    abs(x)	Returns the absolute value of x 
    acos(x)	Returns the arccosine of x, in radians
    acosh(x)	Returns the hyperbolic arccosine of x
    asin(x)	Returns the arcsine of x, in radians
    asinh(x)	Returns the hyperbolic arcsine of x
    atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
    atan2(y, x)	Returns the arctangent of the quotient of its arguments
    atanh(x)	Returns the hyperbolic arctangent of x
    cbrt(x)	Returns the cubic root of x
    ceil(x)	Returns x, rounded upwards to the nearest integer
    cos(x)	Returns the cosine of x (x is in radians)
    cosh(x)	Returns the hyperbolic cosine of x
    exp(x)	Returns the value of Ex
    log(x)	Returns the natural logarithm (base E) of x
    sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
    sin(x)	Returns the sine of x (x is in radians)
    sinh(x)	Returns the hyperbolic sine of x
    sqrt(x)	Returns the square root of x
    tan(x)	Returns the tangent of an angle
    tanh(x)	Returns the hyperbolic tangent of a number
    trunc(x)	Returns the integer part of a number (x)


------------------------------------------------------------------------------------------
# DOM -> Document Object Model 
HTML + CSS + JS = DOM

# how to print in html using js :
    -> document.write(statement);

# to print on specific location : 
    -> document.getElementById(id)

# Console 
    . log       -> msg print
    . warn      -> warning msg
    . error     -> error msg
    . table     -> table structure
    . clear     -> to erase all msg/error/warn

# Pattern 
    : to build your logics
    : how to fetch data from specific location
    : how to put data on specefic location
    : how to handle errors
    : how to handle exceptions
    : hwo to apply logic
    : logic - Jugad

    ****
    ****
    ****
    ****

    *
    **
    ***
    ****

        *
       **
      ***
     ****

    *****
    *   *
    *****
    *   *
    *   *

    *****
    *   *
    *****
    *   *
    *****

# To get data from Form :
    .. document.forms[formName]['fieldName'].value;
    
# RegEx -> Regular Expression
    . global object
    . /character/ - /characters/g
    . [a-z]  [A-Z]  [0-9] -> as pr ASCII codes

    # How to apply -> match & search

-------------------------------------------------------------------------------------------------

# Events 
    .. onSubmit -> call that function when u press submit button
    .. onClick  -> 
    .. ondblclick -> 
    .. onChange -> input -> fill  -> react js
    .. onMouse.. -> it on mouse effect
    .. onOffline -> When connection gone/disconnect
    .. onOnline  -> When u reconnect connection

# Popus :
    .. alert()      -> box  -> okay
    .. confirm()    -> it ask a question   -> okay/cancel
    .. prompt()     -> it ask a question and get dynamic answer 

# This -> When u want to apply changes on the event element

# API -> Application Programming Interface
    -> to get data from 3rd party 
    -> Use Fetch() -> query
    -> It's URL Only

# SeTimeOut -> When u want to delay some object
