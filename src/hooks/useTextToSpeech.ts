import { useMutation } from "@tanstack/react-query";

const apiKey = import.meta.env.VITE_GCP_API_KEY; // 환경변수 사용
console.log("API Key:", apiKey);  // 콘솔 확인

const synthesizeSpeech = async ({ inputText, ttsLanguage }: { inputText: string; ttsLanguage: string }) => {
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
    
    const requestBody = {
        input: { text: inputText },
        voice: { languageCode: ttsLanguage },
        audioConfig: { audioEncoding: "MP3", speakingRate: 1.0 },
    };
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API 호출 실패: ${response.statusText}, ${errorText}`);
    }
    
    const data = await response.json();
    
    if (data.error) {
        throw new Error(data.error.message);
    }
    
    return data.audioContent; // 음성 데이터 반환
};

export const useTextToSpeech = () => {
    return useMutation({
        mutationFn: synthesizeSpeech,
    });
};