var chocolateBars = ["snickers" , "hundredgrand"
 , "kitkat", "skittles"];

 addElementToBeginningOfArray(chocolateBars, element){
   return [element, ...chocolateBars]
 }
 destructivelyAddElementToBeginningOfArray(){
   chocolateBars.unshift(element)
   return chocolateBars
 }
 addElementToEndOfArray(chocolateBars, element){
   return [...chocolateBars, element]
 }
 destructivelyAddElementToEndOfArray(chocolateBars, element){
   array.push(element)
   return array
 }
 destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
   array.shift()
   array
 }
 removeElementFromBeginningOfArray(chocolateBars){
   array.slice(1)
 }
 destructivelyRemoveElementFromEndOfArray(){
   array.pop()
   return array
 }
 removeElementFromEndOfArray(chocolateBars){
   return array.slice(0, array.length - 1)
 }
