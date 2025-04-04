import { GiSpeaker } from "react-icons/gi";
import { IoIosCopy } from "react-icons/io";
import useCopy from "../hooks/useCopy";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useTextToSpeech } from "../hooks/useTextToSpeech";

interface Props {
    type: string;
    text: string;
    setText: (t: string) => void;
    setSelectedLanguage: (t: string) => void;
    handleTranslate: (t: string) => void;
    selectedLanguage: string;
}

const Card = ({ type, text, setText, selectedLanguage, setSelectedLanguage, handleTranslate }: Props) => {
    const [speechLanguage, setSpeechLanguage] = useState("en-US");
    const ttsMutation = useTextToSpeech();

    const handleTextToSpeech = () => {
        if (!text.trim()) {
            toast.error("음성으로 변환할 내용을 입력해주세요.");
            return;
        }
        ttsMutation.mutate(
            { inputText: text, ttsLanguage: speechLanguage },
            {
                onSuccess: (audioContent) => {
                    const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
                    audio.play();
                },
                onError: (error) => {
                    toast.error(`음성 변환 오류: ${error.message}`);
                }
            }
        );
    };

    useEffect(() => {
        const languageMap: { [key: string]: string } = {
            ko: "ko-KR",
            en: "en-US",
            zh: "zh-CN",
            ja: "ja-JP",
        };
        setSpeechLanguage(languageMap[selectedLanguage] || "en-US");
    }, [selectedLanguage]);

    const { copyToClipboard } = useCopy();
    
    return (
        <div className="w-[400px] h-[400px] shadow-xl border rounded-md">
            <div className="h-[40px] border-b flex items-center px-4">
                {type === "to" && (
                    <select
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="px-2 outline-none focus:ring-0"
                        name="language"
                        id="lang"
                    >
                        <option value="en">영어</option>
                        <option value="ko">한국어</option>
                        <option value="zh">중국어</option>
                        <option value="ja">일본어</option>
                    </select>
                )}
            </div>

            {/* 본문 영역: 80% */}
            {type === "from" ? (
                <textarea
                    placeholder="번역하고 싶은 단어나 문장을 입력해주세요."
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    className="placeholder:dark:text-gray-400 outline-none 
                    font-bold text-xl focus:ring-0 resize-none px-6 py-4 h-[300px] w-full"
                />
            ) : (
                <p className="m-0 w-full h-[310px] px-6 py-4 text-xl">
                    {text}
                </p>
            )}

            {/* 하단 영역: 10% */}
            <div className="h-[53px] w-full border-t flex justify-between items-center ">
                <div className="flex items-center ml-2 gap-4">
                    <GiSpeaker onClick={handleTextToSpeech} className="text-3xl hover:scale-110" />
                    <IoIosCopy onClick={() => copyToClipboard(text)} className="text-2xl hover:scale-110" />
                </div>

                {type === "from" && <button onClick={() => handleTranslate(text)}>번역하기</button>}
            </div>
        </div>
    );
};

export default Card;
