function encodeAndDecodeMessages() {
    const inputArea = document.querySelectorAll('textarea')[0];
    const outputArea = document.querySelectorAll('textarea')[1];
    const encodeBtn = document.querySelectorAll('button')[0];
    const decodeBtn = document.querySelectorAll('button')[1];

    encodeBtn.addEventListener('click', onEncode);
    decodeBtn.addEventListener('click', onDecode);

    function onEncode(){
        let message = inputArea.value;
        message = message.split('').map(x => String.fromCharCode(x.charCodeAt(0) + 1)).join('');
        inputArea.value = '';
        outputArea.value = message;
    }
    function onDecode(){
        let message = outputArea.value;
        message = message.split('').map(x => String.fromCharCode(x.charCodeAt(0) - 1)).join('');
        outputArea.value = message;
    }
}