

function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetUser) {
        targetUser.life += 1;
        console.log(this.name + " gave 1 life to: " + targetUser.name);
    }
}

// Create new Users objects
var Guy = new User();
var Revital = new User();

// Set A name for each
Guy.name = "Guy";
Revital.name = "Revital";

// Call to Guy.giveLife()
Guy.giveLife(Revital);

console.log("Guy: " + Guy.life);
console.log("Revital: " + Revital.life);

//------------------------Prototype----------------
//You can add functions to all objects

User.prototype.uppercut = function uppercut(targetUser) {
    targetUser.life -= 3;
    console.log(this.name + " just uppercuted 3 life's to: " + targetUser.name);
}
Revital.uppercut(Guy)
console.log("Guy Life: " + Guy.life);
console.log("Revital Life: " + Revital.life);

//You can add properties to all objects
User.prototype.magic = 60;
console.log("Guy Magic: " + Guy.magic);
console.log("Revital Magic: " + Revital.magic);