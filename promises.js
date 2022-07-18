var promise;

// Challenge 1

function sayHello() {
  setTimeout(console.log('Hello!'), 1000)
}

//---------------------------------------------------------

// Challenge 2

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  setTimeout(() => resolve('challenge2 Resolved!'), 1000);
});

function display(result) {
  console.log(result);
}

promise.then(display);

//---------------------------------------------------------

// Challenge 3

promise = new Promise(function(resolve, reject) {
  reject("Reject!");
})

promise.then(null, (error)=> console.log(error))


//---------------------------------------------------------

// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve("Promise has been resolved!");
});

promise.then(() => console.log('Promise has been resolved!'));//second log
console.log("I'm not the promise!");//first log

//---------------------------------------------------------

// Challenge 5

function delay(){
  return new Promise(function(resolve, reject){
    setTimeout(resolve, 1000);
  });
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);

//---------------------------------------------------------

// Challenge 6

var secondPromise = new Promise(function(resolve, reject){
  resolve("Second");
});
var firstPromise = new Promise(function(resolve, reject){
  resolve(secondPromise);
});

firstPromise.then(
	function(result){
    console.log(result);
  }
);

//---------------------------------------------------------

// Challenge 7

const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  const promises = [fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)];
  return Promise.all(promises).then(function(result){
    return result;
  });
}

getAllData().then(function(result){
  console.log("challenge7 ", result)
})
