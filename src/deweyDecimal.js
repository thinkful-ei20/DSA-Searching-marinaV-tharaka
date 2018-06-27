//Dewey Decimal number structure
//This is an ordered list
//0-99
//100-199
//200-299
//300-399
//400-499
//500-599
//600-699
//700-799
//800-899
//900-999

/*Assuming that we don't know where each section is at and the books are in order, we should binary search for the number (O(log(n))). If we know what section the book is,
 then we are looking for a number in starting with a certain digit, so we should only search through the the range which includes that digit (O(log(n))/10). 
 e.g. if we are looking for 302, we should search through 300-399 range. */

