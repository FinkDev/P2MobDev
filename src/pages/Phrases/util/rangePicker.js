export default function rangePicker(min, max) {
  min = Math.ceil(min);   // arredonda pra cima
  max = Math.floor(max);  // arredonda pra baixo
  return Math.floor(Math.random() * (max - min + 1)) + min;
}