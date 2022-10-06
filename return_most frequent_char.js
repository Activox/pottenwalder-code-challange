// given a string s return the most frequent character (and alphabet letter) in string s
let s1 = "helloworld"
let s2 = 'ABBCCCDDDD'

let solution = function(s){
  let chars = []
  for (let char of s){
    // check if the char is already in the array
    let isInChar = chars.find(letter => letter[char])
    //     if not in array added
    if (!isInChar){
      chars.push({[char]: 1})
    } else {
      //       since is in the array +1 to this char
      chars.forEach(letter => {
        if (letter[char]){
          letter[char] += 1
        }
      })
    }    
  }

  //   find the most frequent char in chars array
  let mostFrequentCharCount = 0
  let mostFrequentChar = 0
  for (let char of s){
      chars.forEach(letter=>{
        if (mostFrequentCharCount < letter[char]){
          mostFrequentChar = char
          mostFrequentCharCount = letter[char]
        }
      })
  }

  return mostFrequentChar
}


const output1 = solution(s1)
const output2 = solution(s2)
console.log({
  output1,
  output2
})
