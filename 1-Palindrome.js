//1.Pallimdrome Number 

function isPalindrome(num) {
    return num === +num.toString().split("").reverse().join("");
}

console.log(isPalindrome(12)); 