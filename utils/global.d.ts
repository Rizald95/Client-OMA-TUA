export {}; // Mencegah konflik dengan modul global lain

declare global {
  interface Window {
    google?: typeof google; // Tambahkan tanda tanya untuk opsional
  }
}