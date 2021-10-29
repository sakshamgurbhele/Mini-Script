// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Saksham Gurbhele",
    job: "Software Developer",
    img:
      "https://avatars.githubusercontent.com/u/64558515?v=4",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  
];
//import thing
const prevBtn = document.querySelector(".prev-btn");
const nextBtns = document.querySelector(".next-btn");
const randomBtns = document.querySelector(".random-btn");

const info = document.getElementById("info");
const author = document.getElementById("author");
const job = document.getElementById("job");
const img = document.getElementById("person-img");

let currentItem = 1;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showReview(currentItem);
});

//show function because we shall not call it for everybutton
function showReview(person) {
  const item = reviews[person];
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
  img.src = item.img;
}

//button clicks
prevBtn.addEventListener("click", function() { 
  if(currentItem <= 0) {
    currentItem = reviews.length-1;
  }
  currentItem--;
  showReview(currentItem);
});
nextBtns.addEventListener("click", function() {
  currentItem++;
  if(currentItem >= reviews.length) {
    currentItem = 0;
  }
  showReview(currentItem);
});
randomBtns.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  showReview(currentItem);
});






