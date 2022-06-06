function initMap() {
  const position_start = { lat: 48.477325375466485, lng: 35.02026418100401 };
  const position_1 = { lat: 50.444826019089426, lng: 30.493306911891708 };
  const position_2 = { lat: 47.948493497920154, lng: 33.45612804191601 };
  const position_3 = { lat: 47.94845568764719, lng: 33.45620782487013 };
  const position_4 = { lat: 48.43278779451978, lng: 35.002310174623695 };
  const position_5 = { lat: 48.46368794919348, lng: 35.00841517663004 };
  const position_6 = { lat: 48.43872062300389, lng: 35.05157825862289 };
  const position_7 = { lat: 48.46073953611255, lng: 35.05420877515213 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: position_start,
  });

  new google.maps.Marker({
    position: position_1,
    map,
    title: "Yellow - интернет-магазин техники и электроники",
    label: "Yellow"
  });

  new google.maps.Marker({
    position: position_2,
    map,
    title: "Yellow.ua",
    label: "Yellow"
  });
  
  new google.maps.Marker({
    position: position_4,
    map,
    title: "Yellow - магазин техники и электроники",
    label: "Yellow"
  });

  new google.maps.Marker({
    position: position_5,
    map,
    title: "Hello Yellow Хостел",
    label: "Yellow"
  });
  
  new google.maps.Marker({
    position: position_7,
    map,
    title: "Yellow - магазин техники и электроники : телефоны, ноутбуки, телевизоры, часы и т.д",
    label: "Yellow"
  });
  
  new google.maps.Marker({
    position: position_6,
    map,
    title: "Yellow - магазин техники и электроники : телефоны, ноутбуки, компьютеры, часы и т.д",
    label: "Yellow"
  });
  new google.maps.Marker({
    position: position_3,
    map,
    title: "Интернет-магазин Yellow.ua",
    label: "Yellow"
  });

}