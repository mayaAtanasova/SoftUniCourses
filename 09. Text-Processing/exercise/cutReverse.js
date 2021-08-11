function cutReverse(str) {
    let str1 = str.substring(0, str.length / 2);
    let str2 = str.substring(str.length / 2)

        console.log(reverse(str1));
        console.log(reverse(str2));

    function reverse(string) {
        let result = '';
        for (let i = string.length - 1; i >= 0; i--) {
            result += string[i];
        }
        return result;
    }
}
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')