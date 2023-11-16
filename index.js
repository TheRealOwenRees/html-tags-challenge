function tags(str) {
    const regex = /<.*?>/g
    const tagsArr = str.match(regex)
    console.log(tagsArr);
    return str
}

module.exports = tags