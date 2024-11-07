let countWordOccurrences = (paragraph: string, key: string)=>{
    let allStrings = paragraph.split(' ');
    let count = 0;
    allStrings.forEach(each=> {
        if(each.toLowerCase() === key.toLowerCase()) count++;
    })
    // console.log(allStrings);
    return count;
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript", "typescript"));