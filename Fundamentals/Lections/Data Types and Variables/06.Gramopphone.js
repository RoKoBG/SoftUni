function gramophone(name, album, song) {
  let time = album.length * name.length * (song.length / 2);
  let rot = Math.ceil(time / 2.5);
  console.log(`The plate was rotated ${rot} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
