const questions = [
    {
        text: "Desen: [■□□■] [■□■□] [□■□□] Sonraki desen nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[□■□■]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[■□□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□■■□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[■□■□]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Üç daire, her birinde bir siyah nokta: Birinci üstte, ikinci solda, üçüncü altta. Dördüncü nerede olmalı?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "easy",
        options: [
          { text: "Sağda", isCorrect: true, weights: { intelligence: 1 } },
          { text: "Ortada", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Üstte", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Solda", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [▲] [▲▲] [▲▲▲] Sonraki nedir?",
        category: "intelligence",
        subCategory: "numerical_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[▲▲▲▲]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[▲▲]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[▲]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[▲▲▲▲▲]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare içinde bir daire, daire içinde bir üçgen. Sonraki adımda ne eklenir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "Üçgen içinde kare", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Kare içinde yıldız", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Daire içinde kare", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Üçgen içinde daire", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [○●○] [●○●] [○●●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[●●○]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[○○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●●●]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir çizgi üstünde iki nokta; sonraki adımda çizgi uzar ve üç nokta olur. Üçüncü adımda ne olur?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "medium",
        options: [
          { text: "Çizgi daha uzun, dört nokta", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Çizgi kısa, iki nokta", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Çizgi aynı, üç nokta", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Çizgi yok, dört nokta", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [■□] [□■] [■□] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[□■]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[■□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[■■]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir daire içinde bir kare döner: İlk konum 0°, ikinci 45°, üçüncü 90°. Dördüncü nedir?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "medium",
        options: [
          { text: "135°", isCorrect: true, weights: { intelligence: 2 } },
          { text: "180°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "45°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "0°", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [●○○] [○●○] [○○●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[●○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○●●]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[●●○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○○○]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir üçgen, bir kareyle çevrelenir; sonra kare bir daireyle çevrelenir. Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "Daire bir üçgenle çevrelenir", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Üçgen bir kareyle çevrelenir", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Kare bir yıldızla çevrelenir", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Daire kaybolur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [○○●] [○●○] [●○○] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[○○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○●●]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[●●○]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare içinde üç yatay çizgi; sonra iki dikey çizgi eklenir. Üçüncü adımda ne olur?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "medium",
        options: [
          { text: "Üç yatay çizgi kaybolur", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Bir daire eklenir", isCorrect: false, weights: { intelligence: 0 } },
          { text: "İki yatay çizgi eklenir", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Dikey çizgiler üçe çıkar", isCorrect: true, weights: { intelligence: 2 } }
        ]
      },
      {
        text: "Desen: [▲□] [□▲] [▲□] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[□▲]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[▲▲]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[▲□]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir daire içinde bir nokta, sonra iki nokta, sonra üç nokta. Dördüncü adımda ne olur?",
        category: "intelligence",
        subCategory: "numerical_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "Dört nokta", isCorrect: true, weights: { intelligence: 1 } },
          { text: "İki nokta", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Nokta kaybolur", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Daire kare olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [■●] [●■] [■●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[●■]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[■□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir üçgen içinde bir daire döner: İlk 0°, ikinci 60°, üçüncü 120°. Dördüncü nedir?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "medium",
        options: [
          { text: "180°", isCorrect: true, weights: { intelligence: 2 } },
          { text: "240°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "0°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "60°", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [○○○] [○○●] [○●●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[●●●]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[●○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●●○]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare, köşelerinde dört nokta; sonra üç nokta; sonra iki nokta. Sonraki nedir?",
        category: "intelligence",
        subCategory: "numerical_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "Bir nokta", isCorrect: true, weights: { intelligence: 1 } },
          { text: "Dört nokta", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Nokta yok", isCorrect: false, weights: { intelligence: 0 } },
          { text: "İki nokta", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [□■□] [■□■] [□■□] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[■□■]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[□■□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[■■■]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir daire içinde bir yıldız, sonra yıldız bir kareyle çevrelenir. Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "Kare bir daireyle çevrelenir", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Yıldız kaybolur", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Daire büyür", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Kare üçgen olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [●●○] [●○●] [○●●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[●●●]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[○○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○●○]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir üçgen içinde iki çizgi, sonra üç çizgi, sonra dört çizgi. Sonraki nedir?",
        category: "intelligence",
        subCategory: "numerical_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "Beş çizgi", isCorrect: true, weights: { intelligence: 1 } },
          { text: "İki çizgi", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Çizgi yok", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Üçgen kaybolur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [○●] [●○] [○●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[●○]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○●]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare içinde bir daire döner: İlk 0°, ikinci 90°, üçüncü 180°. Dördüncü nedir?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "medium",
        options: [
          { text: "270°", isCorrect: true, weights: { intelligence: 2 } },
          { text: "360°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "0°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "90°", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [■□□] [□■□] [□□■] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[■□□]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[□■□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[■■□]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir daire içinde bir nokta sağa kayar: İlk solda, ikinci ortada, üçüncü sağda. Dördüncü nedir?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "easy",
        options: [
          { text: "Solda", isCorrect: true, weights: { intelligence: 1 } },
          { text: "Ortada", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Yok", isCorrect: false, weights: { intelligence: 0 } },
          { text: "İki nokta", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [▲▲□] [▲□▲] [□▲▲] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[▲▲□]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[□▲□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[▲□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□▲]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare içinde bir üçgen, sonra üçgen bir daireyle çevrelenir. Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "Daire bir kareyle çevrelenir", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Üçgen kaybolur", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Kare büyür", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Daire üçgen olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [○○●] [○●●] [●●●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[●○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●●○]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[○●○]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir daire içinde iki nokta, sonra üç nokta, sonra dört nokta. Sonraki nedir?",
        category: "intelligence",
        subCategory: "numerical_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "Beş nokta", isCorrect: true, weights: { intelligence: 1 } },
          { text: "İki nokta", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Nokta yok", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Daire kare olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [■□■] [□■□] [■□■] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[□■□]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[■□■]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[■■■]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir üçgen içinde bir kare döner: İlk 0°, ikinci 45°, üçüncü 90°. Dördüncü nedir?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "medium",
        options: [
          { text: "135°", isCorrect: true, weights: { intelligence: 2 } },
          { text: "180°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "0°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "45°", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [●○○] [○●○] [○○●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[●○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○●●]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[●●○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○○○]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare içinde bir daire, sonra daire bir üçgenle çevrelenir. Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "Üçgen bir kareyle çevrelenir", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Daire kaybolur", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Kare büyür", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Üçgen daire olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [○●●] [●○●] [●●○] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[○○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●○○]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[○●○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●●●]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir daire içinde bir yıldız, sonra iki yıldız, sonra üç yıldız. Sonraki nedir?",
        category: "intelligence",
        subCategory: "numerical_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "Dört yıldız", isCorrect: true, weights: { intelligence: 1 } },
          { text: "Bir yıldız", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Yıldız yok", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Daire kare olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [□■□] [■□■] [□■□] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[■□■]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[□■□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[■■■]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare içinde bir daire döner: İlk 0°, ikinci 90°, üçüncü 180°. Dördüncü nedir?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "medium",
        options: [
          { text: "270°", isCorrect: true, weights: { intelligence: 2 } },
          { text: "360°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "0°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "90°", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [●○●] [○●○] [●○●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[○●○]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[●○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●●●]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir üçgen içinde bir daire, sonra daire bir kareyle çevrelenir. Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "Kare bir üçgenle çevrelenir", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Daire kaybolur", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Üçgen büyür", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Kare daire olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [○○●] [○●○] [●○○] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[○○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○●●]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[●●○]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare içinde iki yatay çizgi, sonra üç yatay çizgi, sonra dört yatay çizgi. Sonraki nedir?",
        category: "intelligence",
        subCategory: "numerical_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "Beş yatay çizgi", isCorrect: true, weights: { intelligence: 1 } },
          { text: "İki yatay çizgi", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Çizgi yok", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Kare daire olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [■□■] [□■□] [■□■] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[□■□]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[■□■]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[■■■]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir daire içinde bir üçgen döner: İlk 0°, ikinci 60°, üçüncü 120°. Dördüncü nedir?",
        category: "intelligence",
        subCategory: "spatial_reasoning",
        difficulty: "medium",
        options: [
          { text: "180°", isCorrect: true, weights: { intelligence: 2 } },
          { text: "240°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "0°", isCorrect: false, weights: { intelligence: 0 } },
          { text: "60°", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [●●○] [●○●] [○●●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[●●●]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[○○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[○●○]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir kare içinde bir daire, sonra daire bir yıldızla çevrelenir. Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "Yıldız bir kareyle çevrelenir", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Daire kaybolur", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Kare büyür", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Yıldız üçgen olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [○●○] [●○●] [○●●] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "[●●○]", isCorrect: true, weights: { intelligence: 2 } },
          { text: "[○○●]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●○○]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[●●●]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir üçgen içinde bir nokta, sonra iki nokta, sonra üç nokta. Sonraki nedir?",
        category: "intelligence",
        subCategory: "numerical_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "Dört nokta", isCorrect: true, weights: { intelligence: 1 } },
          { text: "Bir nokta", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Nokta yok", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Üçgen kare olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: [□■□] [■□■] [□■□] Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "easy",
        options: [
          { text: "[■□■]", isCorrect: true, weights: { intelligence: 1 } },
          { text: "[□■□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[□□□]", isCorrect: false, weights: { intelligence: 0 } },
          { text: "[■■■]", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Desen: Bir daire içinde bir kare, sonra kare bir üçgenle çevrelenir. Sonraki nedir?",
        category: "intelligence",
        subCategory: "abstract_pattern_recognition",
        difficulty: "medium",
        options: [
          { text: "Üçgen bir daireyle çevrelenir", isCorrect: true, weights: { intelligence: 2 } },
          { text: "Kare kaybolur", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Daire büyür", isCorrect: false, weights: { intelligence: 0 } },
          { text: "Üçgen kare olur", isCorrect: false, weights: { intelligence: 0 } }
        ]
      },
      {
        text: "Yeni fikirlere karşı meraklı mısınız? (Açıklık)",
        category: "personality",
        subCategory: "openness",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { openness: 5 } },
          { text: "Katılıyorum", weights: { openness: 4 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { openness: 3 } },
          { text: "Katılmıyorum", weights: { openness: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { openness: 1 } }
        ]
      },
      {
        text: "Kendinizi diğerlerinden daha önemli görüyor musunuz? (Narsisistik)",
        category: "personality",
        subCategory: "narcissism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { narcissism: 5, extraversion: 2 } },
          { text: "Katılıyorum", weights: { narcissism: 4, extraversion: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { narcissism: 3 } },
          { text: "Katılmıyorum", weights: { narcissism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { narcissism: 1 } }
        ]
      },
      {
        text: "Her şeyin mükemmel olmasını ister misiniz? (Mükemmeliyetçilik)",
        category: "personality",
        subCategory: "perfectionism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { perfectionism: 5, conscientiousness: 2 } },
          { text: "Katılıyorum", weights: { perfectionism: 4, conscientiousness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { perfectionism: 3 } },
          { text: "Katılmıyorum", weights: { perfectionism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { perfectionism: 1 } }
        ]
      },
      {
        text: "İnsanlara şüpheyle mi yaklaşıyorsunuz? (Paranoid)",
        category: "personality",
        subCategory: "paranoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { paranoid: 5, neuroticism: 2 } },
          { text: "Katılıyorum", weights: { paranoid: 4, neuroticism: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { paranoid: 3 } },
          { text: "Katılmıyorum", weights: { paranoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { paranoid: 1 } }
        ]
      },
      {
        text: "Yalnız kalmayı mı tercih edersiniz? (Şizoid)",
        category: "personality",
        subCategory: "schizoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { schizoid: 5, extraversion: 1 } },
          { text: "Katılıyorum", weights: { schizoid: 4, extraversion: 2 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { schizoid: 3 } },
          { text: "Katılmıyorum", weights: { schizoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { schizoid: 1 } }
        ]
      },
      {
        text: "Başkalarının duygularına duyarlı mısınız? (Empati)",
        category: "personality",
        subCategory: "empathy",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { empathy: 5, agreeableness: 2 } },
          { text: "Katılıyorum", weights: { empathy: 4, agreeableness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { empathy: 3 } },
          { text: "Katılmıyorum", weights: { empathy: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { empathy: 1 } }
        ]
      },
      {
        text: "Dikkat çekmeyi sever misiniz? (Narsisistik)",
        category: "personality",
        subCategory: "narcissism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { narcissism: 5, extraversion: 2 } },
          { text: "Katılıyorum", weights: { narcissism: 4, extraversion: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { narcissism: 3 } },
          { text: "Katılmıyorum", weights: { narcissism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { narcissism: 1 } }
        ]
      },
      {
        text: "Hatalardan kaçınmak için aşırı çaba sarf eder misiniz? (Mükemmeliyetçilik)",
        category: "personality",
        subCategory: "perfectionism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { perfectionism: 5, conscientiousness: 2 } },
          { text: "Katılıyorum", weights: { perfectionism: 4, conscientiousness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { perfectionism: 3 } },
          { text: "Katılmıyorum", weights: { perfectionism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { perfectionism: 1 } }
        ]
      },
      {
        text: "Başkalarının niyetlerinden şüpheleniyor musunuz? (Paranoid)",
        category: "personality",
        subCategory: "paranoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { paranoid: 5, neuroticism: 2 } },
          { text: "Katılıyorum", weights: { paranoid: 4, neuroticism: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { paranoid: 3 } },
          { text: "Katılmıyorum", weights: { paranoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { paranoid: 1 } }
        ]
      },
      {
        text: "Duygusal bağ kurmakta zorlanıyor musunuz? (Şizoid)",
        category: "personality",
        subCategory: "schizoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { schizoid: 5, extraversion: 1 } },
          { text: "Katılıyorum", weights: { schizoid: 4, extraversion: 2 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { schizoid: 3 } },
          { text: "Katılmıyorum", weights: { schizoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { schizoid: 1 } }
        ]
      },
      {
        text: "Görevlerinizi düzenli bir şekilde tamamlar mısınız? (Sorumluluk)",
        category: "personality",
        subCategory: "conscientiousness",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { conscientiousness: 5 } },
          { text: "Katılıyorum", weights: { conscientiousness: 4 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { conscientiousness: 3 } },
          { text: "Katılmıyorum", weights: { conscientiousness: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { conscientiousness: 1 } }
        ]
      },
      {
        text: "Başarılarınızı sıkça vurgular mısınız? (Narsisistik)",
        category: "personality",
        subCategory: "narcissism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { narcissism: 5, extraversion: 2 } },
          { text: "Katılıyorum", weights: { narcissism: 4, extraversion: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { narcissism: 3 } },
          { text: "Katılmıyorum", weights: { narcissism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { narcissism: 1 } }
        ]
      },
      {
        text: "Küçük detaylara takılır mısınız? (Mükemmeliyetçilik)",
        category: "personality",
        subCategory: "perfectionism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { perfectionism: 5, conscientiousness: 2 } },
          { text: "Katılıyorum", weights: { perfectionism: 4, conscientiousness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { perfectionism: 3 } },
          { text: "Katılmıyorum", weights: { perfectionism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { perfectionism: 1 } }
        ]
      },
      {
        text: "İnsanların sizi kandırdığını düşünüyor musunuz? (Paranoid)",
        category: "personality",
        subCategory: "paranoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { paranoid: 5, neuroticism: 2 } },
          { text: "Katılıyorum", weights: { paranoid: 4, neuroticism: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { paranoid: 3 } },
          { text: "Katılmıyorum", weights: { paranoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { paranoid: 1 } }
        ]
      },
      {
        text: "Sosyal etkinliklere ilgisiz misiniz? (Şizoid)",
        category: "personality",
        subCategory: "schizoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { schizoid: 5, extraversion: 1 } },
          { text: "Katılıyorum", weights: { schizoid: 4, extraversion: 2 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { schizoid: 3 } },
          { text: "Katılmıyorum", weights: { schizoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { schizoid: 1 } }
        ]
      },
      {
        text: "Kolayca strese girer misiniz? (Nevrotiklik)",
        category: "personality",
        subCategory: "neuroticism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { neuroticism: 5 } },
          { text: "Katılıyorum", weights: { neuroticism: 4 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { neuroticism: 3 } },
          { text: "Katılmıyorum", weights: { neuroticism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { neuroticism: 1 } }
        ]
      },
      {
        text: "Eleştirilere karşı savunmacı mısınız? (Narsisistik)",
        category: "personality",
        subCategory: "narcissism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { narcissism: 5, extraversion: 2 } },
          { text: "Katılıyorum", weights: { narcissism: 4, extraversion: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { narcissism: 3 } },
          { text: "Katılmıyorum", weights: { narcissism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { narcissism: 1 } }
        ]
      },
      {
        text: "Esnek olmaktan ziyade katı mısınız? (Mükemmeliyetçilik)",
        category: "personality",
        subCategory: "perfectionism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { perfectionism: 5, conscientiousness: 2 } },
          { text: "Katılıyorum", weights: { perfectionism: 4, conscientiousness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { perfectionism: 3 } },
          { text: "Katılmıyorum", weights: { perfectionism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { perfectionism: 1 } }
        ]
      },
      {
        text: "Başkalarına karşı temkinli misiniz? (Paranoid)",
        category: "personality",
        subCategory: "paranoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { paranoid: 5, neuroticism: 2 } },
          { text: "Katılıyorum", weights: { paranoid: 4, neuroticism: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { paranoid: 3 } },
          { text: "Katılmıyorum", weights: { paranoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { paranoid: 1 } }
        ]
      },
      {
        text: "Duygularınızı gizler misiniz? (Şizoid)",
        category: "personality",
        subCategory: "schizoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { schizoid: 5, extraversion: 1 } },
          { text: "Katılıyorum", weights: { schizoid: 4, extraversion: 2 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { schizoid: 3 } },
          { text: "Katılmıyorum", weights: { schizoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { schizoid: 1 } }
        ]
      },
      {
        text: "Sosyal ortamlarda enerjik misiniz? (Dışadönüklük)",
        category: "personality",
        subCategory: "extraversion",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { extraversion: 5 } },
          { text: "Katılıyorum", weights: { extraversion: 4 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { extraversion: 3 } },
          { text: "Katılmıyorum", weights: { extraversion: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { extraversion: 1 } }
        ]
      },
      {
        text: "İlişkilerde terk edilme korkusu yaşıyor musunuz? (BPD)",
        category: "personality",
        subCategory: "bpd",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { bpd: 5, neuroticism: 2 } },
          { text: "Katılıyorum", weights: { bpd: 4, neuroticism: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { bpd: 3 } },
          { text: "Katılmıyorum", weights: { bpd: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { bpd: 1 } }
        ]
      },
      {
        text: "Ani kararlar almaktan hoşlanır mısınız? (Risk Alma)",
        category: "personality",
        subCategory: "risk_taking",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { risk_taking: 5, openness: 2 } },
          { text: "Katılıyorum", weights: { risk_taking: 4, openness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { risk_taking: 3 } },
          { text: "Katılmıyorum", weights: { risk_taking: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { risk_taking: 1 } }
        ]
      },
      {
        text: "Suçluluk hissettiğinizde aşırı tepki verir misiniz? (Mükemmeliyetçilik)",
        category: "personality",
        subCategory: "perfectionism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { perfectionism: 5, conscientiousness: 2 } },
          { text: "Katılıyorum", weights: { perfectionism: 4, conscientiousness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { perfectionism: 3 } },
          { text: "Katılmıyorum", weights: { perfectionism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { perfectionism: 1 } }
        ]
      },
      {
        text: "İnsanların sizi sömürdüğünü düşünüyor musunuz? (Paranoid)",
        category: "personality",
        subCategory: "paranoid",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { paranoid: 5, neuroticism: 2 } },
          { text: "Katılıyorum", weights: { paranoid: 4, neuroticism: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { paranoid: 3 } },
          { text: "Katılmıyorum", weights: { paranoid: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { paranoid: 1 } }
        ]
      },
      {
        text: "Duygusal dengesizlik yaşıyor musunuz? (BPD)",
        category: "personality",
        subCategory: "bpd",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { bpd: 5, neuroticism: 2 } },
          { text: "Katılıyorum", weights: { bpd: 4, neuroticism: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { bpd: 3 } },
          { text: "Katılmıyorum", weights: { bpd: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { bpd: 1 } }
        ]
      },
      {
        text: "Başkalarına karşı şefkatli misiniz? (Empati)",
        category: "personality",
        subCategory: "empathy",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { empathy: 5, agreeableness: 2 } },
          { text: "Katılıyorum", weights: { empathy: 4, agreeableness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { empathy: 3 } },
          { text: "Katılmıyorum", weights: { empathy: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { empathy: 1 } }
        ]
      },
      {
        text: "Başkalarından onay bekler misiniz? (Narsisistik)",
        category: "personality",
        subCategory: "narcissism",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { narcissism: 5, extraversion: 2 } },
          { text: "Katılıyorum", weights: { narcissism: 4, extraversion: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { narcissism: 3 } },
          { text: "Katılmıyorum", weights: { narcissism: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { narcissism: 1 } }
        ]
      },
      {
        text: "Karar vermeyi başkalarına bırakır mısınız? (Bağımlı KB)",
        category: "personality",
        subCategory: "dependent_personality",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { dependent_personality: 5, agreeableness: 2 } },
          { text: "Katılıyorum", weights: { dependent_personality: 4, agreeableness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { dependent_personality: 3 } },
          { text: "Katılmıyorum", weights: { dependent_personality: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { dependent_personality: 1 } }
        ]
      },
      {
        text: "Olağanüstü düşünceleriniz var mı? (Şizotipal)",
        category: "personality",
        subCategory: "schizotypal",
        options: [
          { text: "Kesinlikle katılıyorum", weights: { schizotypal: 5, openness: 2 } },
          { text: "Katılıyorum", weights: { schizotypal: 4, openness: 1 } },
          { text: "Ne katılıyorum ne katılmıyorum", weights: { schizotypal: 3 } },
          { text: "Katılmıyorum", weights: { schizotypal: 2 } },
          { text: "Kesinlikle katılmıyorum", weights: { schizotypal: 1 } }
        ]
      },
      {
        text: "Son bir ayda odaklanmakta sürekli zorluk çektiniz mi? (DEHB)",
        category: "pathology",
        subCategory: "adhd",
        options: [
          { text: "Her zaman", weights: { adhd: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { adhd: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { adhd: 3 } },
          { text: "Nadiren", weights: { adhd: 2 } },
          { text: "Hiçbir zaman", weights: { adhd: 1 } }
        ]
      },
      {
        text: "İlişkilerinizde ani duygusal iniş çıkışlar yaşıyor musunuz? (BPD)",
        category: "pathology",
        subCategory: "bpd",
        options: [
          { text: "Her zaman", weights: { bpd: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { bpd: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { bpd: 3 } },
          { text: "Nadiren", weights: { bpd: 2 } },
          { text: "Hiçbir zaman", weights: { bpd: 1 } }
        ]
      },
      {
        text: "Geçmiş bir olayı zihninizde tekrar yaşıyor musunuz? (TSSB)",
        category: "pathology",
        subCategory: "ptsd",
        options: [
          { text: "Her zaman", weights: { ptsd: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { ptsd: 4, anxiety: 1 } },
          { text: "Bazen", weights: { ptsd: 3 } },
          { text: "Nadiren", weights: { ptsd: 2 } },
          { text: "Hiçbir zaman", weights: { ptsd: 1 } }
        ]
      },
      {
        text: "Son 2 haftada kendinizi umutsuz hissettiniz mi? (Depresyon)",
        category: "pathology",
        subCategory: "depression",
        options: [
          { text: "Her zaman", weights: { depression: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { depression: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { depression: 3 } },
          { text: "Nadiren", weights: { depression: 2 } },
          { text: "Hiçbir zaman", weights: { depression: 1 } }
        ]
      },
      {
        text: "Sürekli bir gerginlik hali yaşıyor musunuz? (Anksiyete)",
        category: "pathology",
        subCategory: "anxiety",
        options: [
          { text: "Her zaman", weights: { anxiety: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { anxiety: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { anxiety: 3 } },
          { text: "Nadiren", weights: { anxiety: 2 } },
          { text: "Hiçbir zaman", weights: { anxiety: 1 } }
        ]
      },
      {
        text: "Aklınızdan çıkmayan rahatsız edici düşünceleriniz var mı? (OKB)",
        category: "pathology",
        subCategory: "ocd",
        options: [
          { text: "Her zaman", weights: { ocd: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { ocd: 4, anxiety: 1 } },
          { text: "Bazen", weights: { ocd: 3 } },
          { text: "Nadiren", weights: { ocd: 2 } },
          { text: "Hiçbir zaman", weights: { ocd: 1 } }
        ]
      },
      {
        text: "Gerçek olmayan şeyler gördünüz mü? (Şizofreni)",
        category: "pathology",
        subCategory: "schizophrenia",
        options: [
          { text: "Her zaman", weights: { schizophrenia: 5, psychosis: 2 } },
          { text: "Sık sık", weights: { schizophrenia: 4, psychosis: 1 } },
          { text: "Bazen", weights: { schizophrenia: 3 } },
          { text: "Nadiren", weights: { schizophrenia: 2 } },
          { text: "Hiçbir zaman", weights: { schizophrenia: 1 } }
        ]
      },
      {
        text: "Enerjinizde ani ve aşırı yükselmeler oldu mu? (Bipolar)",
        category: "pathology",
        subCategory: "bipolar",
        options: [
          { text: "Her zaman", weights: { bipolar: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { bipolar: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { bipolar: 3 } },
          { text: "Nadiren", weights: { bipolar: 2 } },
          { text: "Hiçbir zaman", weights: { bipolar: 1 } }
        ]
      },
      {
        text: "Kendinizi gerçeklikten kopmuş gibi hissediyor musunuz? (Dissosiyatif)",
        category: "pathology",
        subCategory: "dissociative",
        options: [
          { text: "Her zaman", weights: { dissociative: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { dissociative: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { dissociative: 3 } },
          { text: "Nadiren", weights: { dissociative: 2 } },
          { text: "Hiçbir zaman", weights: { dissociative: 1 } }
        ]
      },
      {
        text: "Başkaları tarafından terk edileceğinizi düşünüyor musunuz? (BPD)",
        category: "pathology",
        subCategory: "bpd",
        options: [
          { text: "Her zaman", weights: { bpd: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { bpd: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { bpd: 3 } },
          { text: "Nadiren", weights: { bpd: 2 } },
          { text: "Hiçbir zaman", weights: { bpd: 1 } }
        ]
      },
      {
        text: "Düşüncelerinizi organize etmekte zorlanıyor musunuz? (DEHB)",
        category: "pathology",
        subCategory: "adhd",
        options: [
          { text: "Her zaman", weights: { adhd: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { adhd: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { adhd: 3 } },
          { text: "Nadiren", weights: { adhd: 2 } },
          { text: "Hiçbir zaman", weights: { adhd: 1 } }
        ]
      },
      {
        text: "Belirli durumlardan kaçınma ihtiyacı hissediyor musunuz? (TSSB)",
        category: "pathology",
        subCategory: "ptsd",
        options: [
          { text: "Her zaman", weights: { ptsd: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { ptsd: 4, anxiety: 1 } },
          { text: "Bazen", weights: { ptsd: 3 } },
          { text: "Nadiren", weights: { ptsd: 2 } },
          { text: "Hiçbir zaman", weights: { ptsd: 1 } }
        ]
      },
      {
        text: "Son bir ayda enerjinizde ciddi bir düşüş oldu mu? (Depresyon)",
        category: "pathology",
        subCategory: "depression",
        options: [
          { text: "Her zaman", weights: { depression: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { depression: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { depression: 3 } },
          { text: "Nadiren", weights: { depression: 2 } },
          { text: "Hiçbir zaman", weights: { depression: 1 } }
        ]
      },
      {
        text: "Ani korku atakları yaşadınız mı? (Panik Bozukluk)",
        category: "pathology",
        subCategory: "panic_disorder",
        options: [
          { text: "Her zaman", weights: { panic_disorder: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { panic_disorder: 4, anxiety: 1 } },
          { text: "Bazen", weights: { panic_disorder: 3 } },
          { text: "Nadiren", weights: { panic_disorder: 2 } },
          { text: "Hiçbir zaman", weights: { panic_disorder: 1 } }
        ]
      },
      {
        text: "Belirli eylemleri tekrar etme ihtiyacı duyuyor musunuz? (OKB)",
        category: "pathology",
        subCategory: "ocd",
        options: [
          { text: "Her zaman", weights: { ocd: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { ocd: 4, anxiety: 1 } },
          { text: "Bazen", weights: { ocd: 3 } },
          { text: "Nadiren", weights: { ocd: 2 } },
          { text: "Hiçbir zaman", weights: { ocd: 1 } }
        ]
      },
      {
        text: "Gerçeklikten şüphe duyuyor musunuz? (Psikoz)",
        category: "pathology",
        subCategory: "psychosis",
        options: [
          { text: "Her zaman", weights: { psychosis: 5, schizophrenia: 2 } },
          { text: "Sık sık", weights: { psychosis: 4, schizophrenia: 1 } },
          { text: "Bazen", weights: { psychosis: 3 } },
          { text: "Nadiren", weights: { psychosis: 2 } },
          { text: "Hiçbir zaman", weights: { psychosis: 1 } }
        ]
      },
      {
        text: "Riskli davranışlara yöneldiniz mi? (Bipolar - Mani)",
        category: "pathology",
        subCategory: "bipolar",
        options: [
          { text: "Her zaman", weights: { bipolar: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { bipolar: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { bipolar: 3 } },
          { text: "Nadiren", weights: { bipolar: 2 } },
          { text: "Hiçbir zaman", weights: { bipolar: 1 } }
        ]
      },
      {
        text: "Kimliğinize dair kafa karışıklığı yaşıyor musunuz? (Dissosiyatif)",
        category: "pathology",
        subCategory: "dissociative",
        options: [
          { text: "Her zaman", weights: { dissociative: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { dissociative: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { dissociative: 3 } },
          { text: "Nadiren", weights: { dissociative: 2 } },
          { text: "Hiçbir zaman", weights: { dissociative: 1 } }
        ]
      },
      {
        text: "Sabit durmakta zorlanıyor musunuz? (DEHB)",
        category: "pathology",
        subCategory: "adhd",
        options: [
          { text: "Her zaman", weights: { adhd: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { adhd: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { adhd: 3 } },
          { text: "Nadiren", weights: { adhd: 2 } },
          { text: "Hiçbir zaman", weights: { adhd: 1 } }
        ]
      },
      {
        text: "İlişkilerde aşırı bağımlılık hissediyor musunuz? (BPD)",
        category: "pathology",
        subCategory: "bpd",
        options: [
          { text: "Her zaman", weights: { bpd: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { bpd: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { bpd: 3 } },
          { text: "Nadiren", weights: { bpd: 2 } },
          { text: "Hiçbir zaman", weights: { bpd: 1 } }
        ]
      },
      {
        text: "Sürekli tetikte misiniz? (TSSB)",
        category: "pathology",
        subCategory: "ptsd",
        options: [
          { text: "Her zaman", weights: { ptsd: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { ptsd: 4, anxiety: 1 } },
          { text: "Bazen", weights: { ptsd: 3 } },
          { text: "Nadiren", weights: { ptsd: 2 } },
          { text: "Hiçbir zaman", weights: { ptsd: 1 } }
        ]
      },
      {
        text: "Son 2 haftada uyku düzeniniz bozuldu mu? (Depresyon)",
        category: "pathology",
        subCategory: "depression",
        options: [
          { text: "Her zaman", weights: { depression: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { depression: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { depression: 3 } },
          { text: "Nadiren", weights: { depression: 2 } },
          { text: "Hiçbir zaman", weights: { depression: 1 } }
        ]
      },
      {
        text: "İnsanlarla etkileşimden kaçınıyor musunuz? (Sosyal Anksiyete)",
        category: "pathology",
        subCategory: "social_anxiety",
        options: [
          { text: "Her zaman", weights: { social_anxiety: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { social_anxiety: 4, anxiety: 1 } },
          { text: "Bazen", weights: { social_anxiety: 3 } },
          { text: "Nadiren", weights: { social_anxiety: 2 } },
          { text: "Hiçbir zaman", weights: { social_anxiety: 1 } }
        ]
      },
      {
        text: "Zihninizi susturamıyor musunuz? (OKB)",
        category: "pathology",
        subCategory: "ocd",
        options: [
          { text: "Her zaman", weights: { ocd: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { ocd: 4, anxiety: 1 } },
          { text: "Bazen", weights: { ocd: 3 } },
          { text: "Nadiren", weights: { ocd: 2 } },
          { text: "Hiçbir zaman", weights: { ocd: 1 } }
        ]
      },
      {
        text: "Başkalarının sizi takip ettiğini düşünüyor musunuz? (Paranoid)",
        category: "pathology",
        subCategory: "paranoid",
        options: [
          { text: "Her zaman", weights: { paranoid: 5, psychosis: 2 } },
          { text: "Sık sık", weights: { paranoid: 4, psychosis: 1 } },
          { text: "Bazen", weights: { paranoid: 3 } },
          { text: "Nadiren", weights: { paranoid: 2 } },
          { text: "Hiçbir zaman", weights: { paranoid: 1 } }
        ]
      },
      {
        text: "Günlük işlere karşı isteksizlik yaşıyor musunuz? (Depresyon)",
        category: "pathology",
        subCategory: "depression",
        options: [
          { text: "Her zaman", weights: { depression: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { depression: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { depression: 3 } },
          { text: "Nadiren", weights: { depression: 2 } },
          { text: "Hiçbir zaman", weights: { depression: 1 } }
        ]
      },
      {
        text: "Beklenmedik hafıza boşlukları yaşıyor musunuz? (Dissosiyatif)",
        category: "pathology",
        subCategory: "dissociative",
        options: [
          { text: "Her zaman", weights: { dissociative: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { dissociative: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { dissociative: 3 } },
          { text: "Nadiren", weights: { dissociative: 2 } },
          { text: "Hiçbir zaman", weights: { dissociative: 1 } }
        ]
      },
      {
        text: "Düşünceleriniz kontrol edilemez şekilde hızlı mı? (DEHB)",
        category: "pathology",
        subCategory: "adhd",
        options: [
          { text: "Her zaman", weights: { adhd: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { adhd: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { adhd: 3 } },
          { text: "Nadiren", weights: { adhd: 2 } },
          { text: "Hiçbir zaman", weights: { adhd: 1 } }
        ]
      },
      {
        text: "Kendinizi yaralama isteği duyuyor musunuz? (BPD)",
        category: "pathology",
        subCategory: "bpd",
        options: [
          { text: "Her zaman", weights: { bpd: 5, neuroticism: 2 } },
          { text: "Sık sık", weights: { bpd: 4, neuroticism: 1 } },
          { text: "Bazen", weights: { bpd: 3 } },
          { text: "Nadiren", weights: { bpd: 2 } },
          { text: "Hiçbir zaman", weights: { bpd: 1 } }
        ]
      },
      {
        text: "Belirli şeylerden irrasyonel korkularınız var mı? (Fobi)",
        category: "pathology",
        subCategory: "phobia",
        options: [
          { text: "Her zaman", weights: { phobia: 5, anxiety: 2 } },
          { text: "Sık sık", weights: { phobia: 4, anxiety: 1 } },
          { text: "Bazen", weights: { phobia: 3 } },
          { text: "Nadiren", weights: { phobia: 2 } },
          { text: "Hiçbir zaman", weights: { phobia: 1 } }
        ]
      },
    ]
    module.exports = questions;

// db/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('../models/Question');
const questions = require('./questions');

dotenv.config();

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB bağlantısı başarılı');
    
    // Mevcut soruları temizle
    return Question.deleteMany({});
  })
  .then(() => {
    // Yeni soruları ekle
    return Question.insertMany(questions);
  })
  .then((result) => {
    console.log(`${result.length} soru başarıyla eklendi`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Seed işlemi hatası:', err);
    mongoose.connection.close();
  });

    
    