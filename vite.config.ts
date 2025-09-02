import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // .env 파일을 불러옵니다.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 1. React 플러그인을 추가해야 합니다. (필수)
    plugins: [react()],

    // 2. GitHub Pages 배포를 위한 base 경로를 추가합니다. (흰 화면 문제 해결)
    base: "/digitalbook01/",

    // 3. .env 파일의 환경 변수를 앱에서 사용할 수 있도록 설정합니다.
    // (기존 코드에서 중복된 부분을 하나로 합쳤습니다.)
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    // 4. 경로 별칭 설정 (기존 코드 유지)
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  }
})

