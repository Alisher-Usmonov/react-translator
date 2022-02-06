export default function getLangCode(data, lang) {
    let keys = Object.keys(data);
    let vals = Object.values(data);
    let index = vals.findIndex(l => l == lang);
    return keys[index];
}