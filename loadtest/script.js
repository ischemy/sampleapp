import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 2, // 2 user virtual
  duration: '5s', // tes selama 5 detik
};

export default function () {
  // Karena k6 jalan di GitHub Actions, kita tes ke localhost 
  // atau endpoint publik jika sudah di-deploy.
  http.get('http://localhost:8080'); 
  sleep(1);
}
