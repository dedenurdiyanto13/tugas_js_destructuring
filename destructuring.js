// array
const animalList = ["lion", "tiger", "fox", "cow", "ant"];
const [satu, dua, tiga, ...animalOther] = animalList;
console.log(satu, dua, tiga, animalOther);

// object
const biodata = {
  nip: 0897009800,
  name: "Dede Nurdiyanto",
  hobby: "Playing Football",
  job: "Web Developer",
  address: {
    province: "West Java",
    country: "Indonesia",
  },
};

const {
  nip,
  name,
  hobby,
  job,
  address: { country },
} = biodata;

console.log(nip, name, hobby, job, country);

// function
function printBiodataInfo({ nip, name, hobby }) {
  console.log(nip, name, hobby);
}
printBiodataInfo(biodata);

// default value
function printBiodataInfo({ nip, name, hobby, phone = "081081081081" }) {
  console.log(nip, name, hobby, phone);
}
printBiodataInfo(biodata);

// alias
function printBiodataInfo({ nip, name: fullname, hobby }) {
  console.log(nip, fullname, hobby);
}
printBiodataInfo(biodata);
