var lengthOfLastWord = function(s) {
    s = s.trim();

    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (length > 0) break;
        } else {
            length++;
        }
    }

    return length;
}

// Example usage:
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));