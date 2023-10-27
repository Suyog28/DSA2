//1.Pallimdrome Number 

function isPalindrome(x) {
    return x<0 ? false : x === +x.toString().split("").reverse().join("");
}

console.log(isPalindrome(12)); 