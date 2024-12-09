import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url'; // Import for handling __dirname in ES modules
import { dirname } from 'path'; // Import to get the directory name
import helloApi from './api/hello/api.js';

const app = express();

// Manually define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*
// "/public" 폴더를 정적 파일 제공을 위해 사용
app.use(express.static(path.join(__dirname, 'public')));
*/
///*
// "/public" 폴더를 정적 파일 제공을 위해 사용
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res) => {
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
  }
}));
//*/

// Middleware 설정
app.use(bodyParser.json());

/*
const api = (req, res) => {
  res.json({ message: 'Hello' });
};
// API 경로
app.get('/api/hello', api);
*/
///*
// API 경로
app.get('/api/hello', helloApi.root);
//*/

// 서버 실행
//const PORT = 8080;
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
