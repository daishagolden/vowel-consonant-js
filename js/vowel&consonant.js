var vow = function(str) {
    var matches1 = str.match(/[aeiou]/gi);
    var matches2 = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    var count1 = matches1 ? matches1.length : 0;
    var count2 = matches2 ? matches2.length : 0;
    alert ("'" + str + "' contains " + count1 + " vowel(s) and " + count2 +  " consonant(s)"  );
    return true;
}

