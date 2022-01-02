function GetAfterHashTag(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '#') {
            return str.substring(i+1)
        }
    }
}

export default GetAfterHashTag;