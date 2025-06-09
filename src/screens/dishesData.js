// ✅ 1. Cria o arquivo dishesData.js em src/data/dishesData.js

const dishes = [
  {
    id: "barszcz-z-falka",
    title: "Barszcz z fasola",
    description:
      "Barszcz z fasolą, or beetroot soup with beans, is a cherished dish in traditional Polish cuisine, especially beloved in the southeastern regions of Poland. It is a rustic and hearty variation of the classic barszcz czerwony (clear beetroot soup), enriched with white beans that add depth, texture, and a satisfying earthiness. With its deep ruby-red color and rich, comforting aroma, Barszcz z fasolą is more than just a soup — it’s a warm embrace in a bowl. Rooted in Poland’s rural culinary traditions, it reflects the spirit of a cuisine built on simple ingredients that come together to create something truly soulful and nourishing. Typically enjoyed during the colder months, this soup is a staple on autumn and winter tables, offering warmth and sustenance. The sweetness of the beetroot is balanced by a hint of acidity from vinegar or lemon juice, while the beans provide a creamy contrast and satisfying bite. Aromatics like garlic, carrots, bay leaves, and black pepper round out the flavor profile, making every spoonful a tribute to the cozy kitchens of Polish grandmothers. Barszcz z fasolą can be served as a starter or a main course, often accompanied by a slice of rye bread or boiled potatoes. It’s a dish that tells a story — of heritage, simplicity, and the kind of comfort that only traditional home-cooked food can offer",
    image: "barszcz.png",
    ingredients: [
      "BeterrabaFresh beetroots White beans (e.g., 'Piękny Jaś' or other large white beans) Carrot Onion Garlic Bay leaf Black pepper Salt Vinegar or lemon juice (for acidity) Water or vegetable broth (Optional) Fresh parsley or dill for garnish",
      
    ]
  },
  {
    id: "ciasto-z-fasoli",
    title: "Ciasto z fasoli",
    description: "Ciasto z fasoli, or bean cake, is a modern twist in Polish home baking — a surprising and delightful dessert that showcases the creativity and innovation of contemporary Polish cuisine. Though not a centuries-old traditional dish, this cake has gained popularity across Poland in recent years, especially among those seeking healthier, gluten-free, or protein-rich alternatives to classic desserts. At the heart of Ciasto z fasoli is a simple, wholesome ingredient: white beans. Cooked and blended until smooth, the beans replace flour to create a rich, moist cake base that is naturally creamy and subtly sweet. You might never guess that a legume is the star of this dessert — the beans provide texture and nutrition, but their flavor virtually disappears, allowing ingredients like cocoa, vanilla, coconut, or nuts to shine. The result is a soft, slightly dense cake that feels indulgent yet light — often compared to a brownie or sponge cake. It’s commonly enjoyed plain, dusted with powdered sugar, or topped with chocolate glaze and fresh fruit. Perfect for coffee breaks, afternoon treats, or guilt-free dessert tables. Whether you're gluten-intolerant, health-conscious, or simply curious, Ciasto z fasoli is a wonderful example of how traditional ingredients can be reimagined in exciting, modern ways.",
    image: "ciasto.png",
    ingredients: [
      "Cooked white beans (e.g., fasola Piękny Jaś) Eggs Sugar or natural sweetener (e.g., honey, xylitol) Cocoa powder or vanilla extract Baking powder Oil (sunflower, coconut, or olive oil) A pinch of salt (Optional) Shredded coconut, ground nuts, cinnamon (Optional toppings): Chocolate glaze, powdered sugar, fruit",
      
    ]
  },
  {
    id: "zurek",
    title: "Zurek",
    description: "Żurek is one of Poland’s most iconic and beloved traditional soups — a true symbol of the country’s rustic, heartwarming cuisine. Made from a fermented rye flour base, Żurek boasts a unique sour flavor that sets it apart from any other soup in the world. It’s deeply comforting, surprisingly complex, and steeped in centuries of culinary tradition. This soup originates from the rural kitchens of Poland, where resourcefulness and preservation techniques shaped much of the national gastronomy. The key to Żurek’s characteristic tangy taste is a natural rye starter called zakwas, which is prepared by fermenting rye flour and water over several days — similar in spirit to sourdough. Once the base is ready, the soup is typically enriched with ingredients like smoked sausage (kiełbasa), hard-boiled eggs, potatoes, garlic, and marjoram. The result is a rich, creamy, slightly sour soup with deep umami from the sausage and a satisfying, rustic texture. Żurek is traditionally enjoyed during Easter, especially in the southern and central regions of Poland, often served in an edible bowl made of crusty bread. However, its hearty and nourishing character makes it a favorite year-round. Each region — and even each family — has its own twist on Żurek, making it a dish full of stories and personality. Whether you're tasting it for the first time or reliving a cherished memory, Żurek offers an unforgettable flavor experience — one that captures the soul of Poland in every spoonful.",
    image: "zurek.png",
    ingredients: [
      "Zakwas (fermented rye flour starter) Smoked Polish sausage (kiełbasa) Hard-boiled eggs Potatoes Garlic Onion Marjoram Bay leaf Black pepper Salt Water or broth (vegetable or meat-based)(Optional) Sour cream for garnish (Optional) Crusty bread (or served in a bread bowl)",

    ]
  },
  {
    id: "fasolka-po-bretonsku",
    title: "Fasolka po bretońsku",
    description: "Fasolka po bretońsku, often translated as 'Breton-style beans', is a beloved Polish comfort dish that combines tender white beans with smoky sausage in a rich, savory tomato sauce. Despite its name, the dish is purely Polish — inspired perhaps by French cuisine in name only — and has become a hearty staple in Polish homes, especially during the colder months. This dish is all about simplicity, warmth, and flavor. At its core are large white beans (often Piękny Jaś, a traditional Polish variety), simmered slowly until creamy and soft. These are paired with slices of kielbasa (smoked Polish sausage), sometimes accompanied by bacon or ham, and all simmered in a flavorful tomato-based sauce seasoned with garlic, marjoram, bay leaves, and black pepper. Fasolka po bretońsku is the kind of meal that tastes like home. It’s commonly served as a main course for lunch or dinner, usually with a slice of crusty bread to soak up the rich sauce. It’s filling, satisfying, and full of rustic, smoky flavors that are central to Polish cuisine. It’s also a favorite for meal prepping or reheating — the flavor only improves the next day, making it a go-to for family gatherings, school meals, or cozy nights in.",
    image: "flazoka.png",
    ingredients: [
      "Dried or canned white beans (e.g., Piękny Jaś) Smoked Polish sausage (kielbasa) Bacon or smoked pork (optional) Onion Garlic Tomato paste or crushed tomatoes Bay leafMarjoram Salt and black pepper Oil or lard for frying Water or broth for cooking",
    ]
  },
  {
    id: "makowiec",
    title: "Makowiec",
    description: "Makowiec is one of Poland’s most cherished traditional desserts — a sweet, yeasted pastry roll generously filled with a rich, aromatic poppy seed mixture. Deeply rooted in Polish culture and holiday traditions, Makowiec is especially popular during Christmas and Easter, though it is loved and enjoyed all year round. The name comes from the word mak, meaning poppy seed in Polish. These tiny seeds play the starring role: they are ground and blended with honey, sugar, butter, dried fruits, and nuts to create a sweet, nutty, and slightly crunchy filling that’s both indulgent and comforting. The dough is a soft, slightly sweet yeast dough — tender yet sturdy enough to be rolled around the filling. Once baked, the roll reveals beautiful spirals of dark poppy filling contrasting with golden pastry. It’s often topped with a thin layer of icing and sprinkled with orange zest, chopped nuts, or candied peel for extra flavor and festive flair. Makowiec is more than just a dessert — it’s a symbol of family, tradition, and celebration. In Polish folklore, poppy seeds symbolize prosperity and peace, making this cake especially meaningful during holiday feasts. Whether served with tea, coffee, or as part of a festive meal, Makowiec is a sweet slice of Poland’s culinary heritage.",
    image: "makowiec.png",
    ingredients: [
      "Dough: Wheat flour Fresh or dry yeast Warm milk Eggs Sugar Butter A pinch of salt Vanilla or citrus zest (optional)",
      "Filling: Ground poppy seeds Honey Sugar Butter Raisins or currants Chopped nuts (e.g., walnuts, almonds) Orange or lemon zest Optional: a splash of rum or almond extract",
      "Topping: Glaze (made from powdered sugar and lemon juice or milk) Candied orange peel or chopped nuts (optional)",
    ]
  },
  {
    id: "pierogi",
    title: "Pierogi",
    description: "Pierogi are perhaps the most beloved and internationally recognized dish of Polish cuisine — delicious, handmade dumplings that reflect the heart, history, and hospitality of Poland. With their delicate dough and wide variety of savory or sweet fillings, pierogi are a perfect example of comfort food that transcends generations. Traditionally shaped like small half-moons, pierogi are typically boiled and often pan-fried in butter until golden and slightly crispy. Their charm lies in the diversity of fillings, which vary regionally and seasonally. The most classic version is pierogi ruskie — filled with mashed potatoes, farmer’s cheese, and onions — a humble yet deeply satisfying combination. Other popular fillings include sauerkraut and mushrooms, minced meat, lentils, spinach, or sweet options like blueberries, strawberries, or sweet cheese. Pierogi are traditionally served with toppings like caramelized onions, crispy bacon bits, sour cream, or melted butter, depending on the filling. They are especially prominent during holidays like Christmas Eve (Wigilia) or family gatherings, but are loved year-round, whether as a snack, appetizer, or main dish. Handmade with care and often tied to cherished family traditions, pierogi are more than just food — they are a symbol of Polish culture, nostalgia, and togetherness. Whether savory or sweet, every bite tells a story.",
    image: "pierogi.png",
    ingredients: [
      "Dough:Wheat flour Warm water Egg (optional) Salt A bit of oil or melted butter (optional)",
      "Popular Fillings: Ruskie: Mashed potatoes, twaróg (Polish farmer’s cheese), sautéed onions Sauerkraut and wild mushroomsMinced meat (pork, beef, or a mix) Spinach and cheese Sweet cheese with sugar and vanilla Seasonal fruits: blueberries, strawberries, cherries",
      "Typical Toppings: Sour cream Fried onions Crispy bacon or lardons Melted butter",
    ]
  }
];

export default dishes;
