let Programmer = function(name="", position="", age=0, favoriteLanguage="", unfavoriteLanguage=""){
    this.name = name;
    this.position = position;
    this.age = age;
    this.favoriteLanguage = favoriteLanguage;
    this.unfavoriteLanguage = unfavoriteLanguage;
}

// Prototype property is an object which has the 
// constructor property by default
// 

Programmer.prototype.codes = function(){
    console.log(`${this.name} codes in ${this.favoriteLanguage}`)
}

Programmer.prototype.printInfo = function(){
    console.log(
        `Name: ${this.name}
        Position: ${this.position}
        Age: ${this.age}
        Favorite Language: ${this.favoriteLanguage}
        Unfavorite Language: ${this.unfavoriteLanguage}
        `  
    );
};

let drew = new Programmer('Drew Hoang', 'teacher', 28, 'Go lang');
console.log(drew)
drew.printInfo();
drew.codes();

