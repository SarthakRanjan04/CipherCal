// Caesar Cipher encryption function
function caesarEncrypt(text, shift) {
    return text
        .split('')
        .map(char => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                return char;
            }
        })
        .join('');
}

// Caesar Cipher decryption function
function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, 26 - shift);
}

// Function to handle encryption button click
function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const outputText = caesarEncrypt(inputText, 3); // Example: Caesar Cipher with shift 3
    document.getElementById('outputText').value = outputText;
}

// Function to handle decryption button click
function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const outputText = caesarDecrypt(inputText, 3); // Example: Caesar Cipher with shift 3
    document.getElementById('outputText').value = outputText;
}
