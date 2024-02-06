// Fungsi untuk mengurutkan angka dari kecil ke besar
function sortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Menggunakan destructuring assignment untuk menukar nilai
      }
    }
  }
  return arr;
}

// Fungsi untuk mengurutkan angka dari besar ke kecil
function sortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Menggunakan destructuring assignment untuk menukar nilai
      }
    }
  }
  return arr;
}

module.exports = { sortAsc, sortDesc };
