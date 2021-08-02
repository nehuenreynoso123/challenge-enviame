const isPalindrome = (str) => {
    const strReverse = str.toLowerCase().split("").reverse().join("");
    const normalStr = str.toLowerCase();
    return normalStr === strReverse;
  };
  
  const getTextPalindromes = (str) => {
    let palindromes = [];
    for (let idx = 0; idx < str.length - 1; idx++) {
      let init_substring = idx;
      let end_substring_2_letters = init_substring + 2;
      let end_substring_3_letters = init_substring + 3;
  
      const text_2_letters = str.substring(
        init_substring,
        end_substring_2_letters
      );
      const text_3_letters = str.substring(
        init_substring,
        end_substring_3_letters
      );
  
      if (isPalindrome(text_2_letters)) {
        palindromes.push(text_2_letters);
      } else if (isPalindrome(text_3_letters)) {
        let text = "";
        while (true) {
          const text_aux = str.substring(init_substring, end_substring_3_letters);
          if (!isPalindrome(text_aux)) {
            break;
          }
          text = text_aux;
          init_substring--;
          end_substring_3_letters++;
        }
        palindromes.push(text);
      }
    }
    return palindromes;
  };
  
  module.exports = {
    isPalindrome,
    getTextPalindromes,
  };