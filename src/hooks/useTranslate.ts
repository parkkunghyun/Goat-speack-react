import { useMutation } from "@tanstack/react-query";

const apiKey = import.meta.env.VITE_GCP_API_KEY; // 환경변수 사용
console.log("API Key:", apiKey);  // 콘솔 확인

const translateText = async ({ inputText, selectedLanguage }: { inputText: string; selectedLanguage: string }) => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            q: inputText,
            target: selectedLanguage,
        }),
    });

    if (!response.ok) {
        throw new Error("번역 요청 실패");
    }
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error.message);
    }

    return data.data.translations[0].translatedText;
}

export const useTranslate = () => {
    return useMutation({
        mutationFn: translateText,
    });
};