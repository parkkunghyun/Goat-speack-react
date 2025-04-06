# 🐐 Goat Speak

Goat Speak는 텍스트를 실시간으로 다양한 언어로 번역하고 자연스러운 음성으로 전달하는 파파고를 분석해 만든 번역 플랫폼입니다.

## 📎 프로젝트 바로가기  
👉 [https://goat-speack-react.vercel.app/](https://goat-speack-react.vercel.app/)
---

## 📄 프로젝트 소개

Goat Speak는 Google Cloud Platform(GCP)의 다양한 API를 활용해  
실시간 텍스트 번역과 음성 변환 기능을 제공하는 번역 서비스입니다.  
Recoil과 React Query를 적극 활용해 상태 관리와 서버 데이터 관리를 최적화하였습니다.

---

## 🚀 주요 기능 및 특징

### 1. 실시간 다국어 번역 & 음성 변환
- Google Cloud Translate API를 활용한 다양한 언어 번역
- Google Cloud Text-to-Speech API를 통한 음성 변환
- Hook 기반 API 요청 처리 및 관리

### 2. 다크 모드 지원
- Recoil 전역 상태 관리 + LocalStorage 저장
- 사용자 환경에 따라 다크/라이트 모드 자동 적용

### 3. 효율적인 상태 관리 및 데이터 최적화
|기술|설명|
|---|---|
|Recoil|글로벌 상태 관리 (다크 모드 등)|
|React Query|서버 상태 관리, 데이터 캐싱|
|TypeScript|안정적인 타입 기반 설계|
|Tailwind CSS|반응형 스타일링 및 빠른 개발|

---

## 🛠️ 기술 스택

|구분|기술|
|---|---|
|Frontend|React, TypeScript, Vite|
|상태관리|Recoil, React Query|
|API|Google Cloud API (Translate, Text-to-Speech)|
|스타일링|Tailwind CSS|
|배포|Vercel|

---

## 📝 개발 과정 및 설계 방식

1. 프로젝트 초기 세팅 (Recoil, React Query 기반)
2. 다크 모드 전역 상태 관리 설계
3. UI 컴포넌트 설계 및 구현
4. API 별 Custom Hook 설계 및 처리
   - Copy API
   - Translate API
   - Text-to-Speech API
5. 에러 및 예외 상황 UX 처리 (toast 알림 등)

---

