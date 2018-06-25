$(document).ready(function(){


var dogJSONObject = {
    "status": "success",
    "message": {
        "affenpinscher": [],
        "african": [],
        "airedale": [],
        "akita": [],
        "appenzeller": [],
        "basenji": [],
        "beagle": [],
        "bluetick": [],
        "borzoi": [],
        "bouvier": [],
        "boxer": [],
        "brabancon": [],
        "briard": [],
        "bulldog": [
            "boston",
            "french"
        ],
        "bullterrier": [
            "staffordshire"
        ],
        "cairn": [],
        "chihuahua": [],
        "chow": [],
        "clumber": [],
        "collie": [
            "border"
        ],
        "coonhound": [],
        "corgi": [
            "cardigan"
        ],
        "dachshund": [],
        "dane": [
            "great"
        ],
        "deerhound": [
            "scottish"
        ],
        "dhole": [],
        "dingo": [],
        "doberman": [],
        "elkhound": [
            "norwegian"
        ],
        "entlebucher": [],
        "eskimo": [],
        "germanshepherd": [],
        "greyhound": [
            "italian"
        ],
        "groenendael": [],
        "hound": [
            "Ibizan",
            "afghan",
            "basset",
            "blood",
            "english",
            "walker"
        ],
        "husky": [],
        "keeshond": [],
        "kelpie": [],
        "komondor": [],
        "kuvasz": [],
        "labrador": [],
        "leonberg": [],
        "lhasa": [],
        "malamute": [],
        "malinois": [],
        "maltese": [],
        "mastiff": [
            "bull",
            "tibetan"
        ],
        "mexicanhairless": [],
        "mountain": [
            "bernese",
            "swiss"
        ],
        "newfoundland": [],
        "otterhound": [],
        "papillon": [],
        "pekinese": [],
        "pembroke": [],
        "pinscher": [
            "miniature"
        ],
        "pointer": [
            "german"
        ],
        "pomeranian": [],
        "poodle": [
            "miniature",
            "standard",
            "toy"
        ],
        "pug": [],
        "pyrenees": [],
        "redbone": [],
        "retriever": [
            "chesapeake",
            "curly",
            "flatcoated",
            "golden"
        ],
        "ridgeback": [
            "rhodesian"
        ],
        "rottweiler": [],
        "saluki": [],
        "samoyed": [],
        "schipperke": [],
        "schnauzer": [
            "giant",
            "miniature"
        ],
        "setter": [
            "english",
            "gordon",
            "irish"
        ],
        "sheepdog": [
            "english",
            "shetland"
        ],
        "shiba": [],
        "shihtzu": [],
        "spaniel": [
            "blenheim",
            "brittany",
            "cocker",
            "irish",
            "japanese",
            "sussex",
            "welsh"
        ],
        "springer": [
            "english"
        ],
        "stbernard": [],
        "terrier": [
            "american",
            "australian",
            "bedlington",
            "border",
            "dandie",
            "fox",
            "irish",
            "kerryblue",
            "lakeland",
            "norfolk",
            "norwich",
            "patterdale",
            "scottish",
            "sealyham",
            "silky",
            "tibetan",
            "toy",
            "westhighland",
            "wheaten",
            "yorkshire"
        ],
        "vizsla": [],
        "weimaraner": [],
        "whippet": [],
        "wolfhound": [
            "irish"
        ]
    }
};


// console.log(dogJSONObject.status);

// checking to make sure response was properly received
//if (dogJSONObject.status === "success") {
//console.log(dogJSONObject.message);
// }

// Breed List API
$.ajax({
  type: 'GET',
  dataType: 'json',
  url: 'https://dog.ceo/api/breeds/list/all',

  success: function(results){
    console.log(results);
    console.log(Object.keys(dogJSONObject.message));
    var breedList = Object.keys(dogJSONObject.message);
    // $('.main-dog-breeds').append(breedList);


    for (var n=0; n<breedList.length; n++){
      // console.log('loop hit');
      // $('.main-dog-breeds').append('<li class="main-dog-breeds-list"><a href="#">'+ breedList[n]+ '</a></li>');

      $('.main-dog-breeds').append('<li class="main-dog-breeds-list"><a href="http://www.akc.org/dog-breeds/' + breedList[n] + '">' + breedList[n] + '</a></li>');
      console.log(breedList[n].charAt(0).toUpperCase());
    }
  }
});

// test is getting right alphabet nav
var test = document.querySelectorAll(".letter");
var alphabetArray = Array.from(test);
// console.log(alphabetArray);

document.getElementById(".letter")

  if (document.querySelectorAll("breed-alphabet-container") === n.charAt[0]) {
      for (var x=0; x++;){
              $('li.breed-alphabet-container').click(function(){
                  $('li.breed-alphabet-container').attr(n.charAt[x]);
                })
              }
            };

};
