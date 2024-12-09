Node.js에서 `require` 대신 `import`를 사용하려면, JavaScript ES 모듈 방식을 도입해야 합니다. 이를 위해서는 몇 가지 단계가 필요합니다.

### 1. **`package.json`에 `type` 설정 추가**

`package.json`에 `"type": "module"`을 추가해야 합니다. 이를 통해 Node.js가 CommonJS 대신 ES 모듈 방식을 사용할 수 있게 됩니다.

#### `package.json` 수정

```json
{
  "name": "express-static-example",
  "version": "1.0.0",
  "description": "A simple Express static file server",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "@supabase/supabase-js": "^2.39.3"
  },
  "engines": {
    "node": ">=14.x"
  },
  "type": "module"  // 이 줄을 추가합니다.
}
```

### 2. **`require` 대신 `import` 사용**

ES 모듈 방식에서는 `require` 대신 `import`를 사용합니다. 아래는 각 파일에서 `require`를 `import`로 대체한 예시입니다.

#### `index.js` 수정

```javascript
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helloApi from './api/hello/api.js';

const app = express();
const __dirname = path.resolve();  // __dirname을 ES 모듈에서 사용하기 위한 방법

// "/public" 폴더를 정적 파일 제공을 위해 사용
app.use(express.static(path.join(__dirname, 'public')));

// Middleware 설정
app.use(bodyParser.json());

// API 경로를 사용
app.use('/api/hello', helloApi);

// 서버 실행
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

#### `api.js` 수정

```javascript
// GET /api/hello
const api = (req, res) => {
  res.json({ message: 'Hello' });
};

export default api;
```

### 3. **주의 사항**

1. **ES 모듈과 CommonJS의 차이점**:
   - `require`는 CommonJS 모듈 시스템에서 사용되며, `import`는 ES 모듈 시스템에서 사용됩니다.
   - `module.exports = ...`는 CommonJS 방식이고, `export default ...`는 ES 모듈 방식입니다.
   - ES 모듈을 사용하면 `__dirname`과 `__filename`이 기본적으로 지원되지 않기 때문에, `path.resolve()`를 사용해 수동으로 설정해야 합니다.

2. **Node.js 버전 확인**:
   - Node.js는 **14.x** 이상에서 **ES 모듈**을 기본적으로 지원하므로, **Node.js 14.x 이상**을 사용해야 합니다.

3. **파일 확장자**:
   - `import` 문을 사용할 때는 **`.js`** 확장자를 꼭 명시해야 합니다. CommonJS에서는 확장자를 생략할 수 있었지만, ES 모듈에서는 생략할 수 없습니다.

### 4. **실행 방법**

1. **의존성 설치**:
   ```bash
   npm install
   ```

2. **앱 실행**:
   ```bash
   npm start
   ```

이렇게 하면 Node.js에서 `require` 대신 `import`를 사용하는 ES 모듈 방식으로 코드를 변경할 수 있습니다.
