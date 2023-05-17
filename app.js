var randomSentence; 

function touch() {
    var a = document.getElementById("type_1");
    var c = a.value;
    var bbb = document.getElementById("word");
    var randomSentence = bbb.textContent;
  
    if (randomSentence === c) {
      alert("correct");
    } else if (randomSentence.includes(c)) {
      alert("please input again");
    } else {
      alert("please input again");
    }
  }

function add() {
    var sentences = [
      "I love to read books.",
      "The sun shines brightly in the sky.",
      "Cats are playful and curious animals.",
      "Cooking is my favorite hobby.",
      "The flowers bloom in springtime.",
      "Time flies when you're having fun.",
      "The ocean waves crash against the shore.",
      "Laughter is the best medicine.",
      "Music soothes the soul.",
      "Dreams have the power to inspire."
    ];
  
    var a = document.getElementById("type");
    var randomIndex = Math.floor(Math.random() * sentences.length);
    var randomSentence = sentences[randomIndex];
  
    var bbb = document.getElementById("word");
    bbb.textContent = randomSentence;
  
    var a = document.getElementById("type_1");
    a.value = "";
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      var a = document.getElementById("type_1");
    var c = a.value;
    var bbb = document.getElementById("word");
    var randomSentence = bbb.textContent;
  
    if (randomSentence === c) {
      alert("correct");
    } else if (randomSentence.includes(c)) {
      alert("please input again");
    } else {
      alert("please input again");
    }
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "/") {
      event.preventDefault();
      document.getElementById("type_1").focus();
    }
  });
 
  document.addEventListener("keydown", function(event) {
    if (event.key === "]") {
      event.preventDefault();
      var sentences = [
        "I love to read books.",
        "The sun shines brightly in the sky.",
        "Cats are playful and curious animals.",
        "Cooking is my favorite hobby.",
        "The flowers bloom in springtime.",
        "Time flies when you're having fun.",
        "The ocean waves crash against the shore.",
        "Laughter is the best medicine.",
        "Music soothes the soul.",
        "Dreams have the power to inspire."
      ];
    
      var a = document.getElementById("type");
      var randomIndex = Math.floor(Math.random() * sentences.length);
      var randomSentence = sentences[randomIndex];
    
      var bbb = document.getElementById("word");
      bbb.textContent = randomSentence;
    
      var a = document.getElementById("type_1");
      a.value = "";
    }
  });
  
