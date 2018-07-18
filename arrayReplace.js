function arrayReplace(inputArray, elemToReplace, substitutionElem) {

    inputArray.forEach((value, index)=>{
       if (value === elemToReplace){
           inputArray[index] = substitutionElem;
       }
    });
    return inputArray;
}
//problem description: https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm
