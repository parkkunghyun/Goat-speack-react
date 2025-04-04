# Goat Speak

**Goat Speak**는 텍스트를 실시간으로 다양한 언어로 번역하고 자연스러운 음성으로 전달하는 파파고를 분석해서 만든 번역 플랫폼입니다.

[링크 바로가기](https://lingualens-266457465664.us-central1.run.app/)

## 📄 프로젝트 설명
LinguaLens는 **Google Cloud Translate API**를 활용하여 다양한 언어로 번역을 지원합니다. 또한 **TTS (Text-to-Speech)** 기술로 번역된 텍스트를 자연스러운 음성으로 변환해줍니다.

## 🚀 주요 기능 및 특징

- **다국어 번역 및 음성 변환**  
  - **Google Cloud Vision API**로 이미지 내 텍스트 추출
  - **Translate API**로 다양한 언어로 번역 지원
  - **Text-to-Speech API**로 자연스러운 음성 변환

- **CI/CD 자동화**  
  - **GitHub Actions**를 활용한 프론트엔드 자동 빌드 및 Cloud Run 배포
  - 지속적인 배포 환경으로 개발 효율성 향상

- **프론트엔드 기능 개선**  
  - **React의 useEffect 훅**으로 번역된 텍스트 실시간 출력 및 자동 음성 재생
  - **React Toastify**로 실시간 알림 제공하여 인터랙티브한 UI 구현

- **효율적인 데이터 관리**  
  - **Tanstack Query**로 번역 API 호출을 효율적으로 관리하고 에러 처리 간소화
  - 서버사이드에서 **Google Translate API** 호출로 클라이언트와 분리된 구조 유지, 보안 강화 및 API 호출 최적화

## ⚙️ 기술 스택

- **Frontend:** React, recoil, Tanstack Query, React Toastify
- **GCP API:** Translate API, Text-to-Speech API
- **Deployment:** GitHub Actions, Vercel

