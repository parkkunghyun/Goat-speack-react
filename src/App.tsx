
import { useEffect, useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import { toast, ToastContainer } from 'react-toastify';
import { useTranslate } from './hooks/useTranslate';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const translateMutation = useTranslate();

  const handleTranslate = () => {
    if (!inputText.trim()) {
      toast.error("번역할 내용을 입력해주세요!");
      return;
    }

    translateMutation.mutate(
      {inputText, selectedLanguage},
      {
        onSuccess: (translatedText) => {
          setResultText(translatedText);
        },
        onError: (error) => {
          toast.error(`번역 오류: ${error.message}`);
        }
      }
    )
  }

  useEffect(() => {
    if (!inputText.trim()) {
      setResultText("");
      return;
    }
  
    translateMutation.mutate(
      { inputText, selectedLanguage },
      {
        onSuccess: (translatedText) => {
          setResultText(translatedText);
        },
        onError: (error) => {
          toast.error(`번역 오류: ${error.message}`);
        }
      }
    );
  }, [inputText, selectedLanguage]);  // selectedLanguage가 변경될 때마다 실행

  return (
    <>
      <ToastContainer theme="auto"/>
      <div className='flex flex-col items-center pt-20'>
      <Header/>
      <span className='text-sm mb-10'><span className='font-bold text-[#f67216]'>염소</span>를 누르면 배경이 변경됩니다.</span>
    
      <div className='flex flex-col lg:flex-row items-center gap-8 '>
        <Card type='from'
          text={inputText}
          setText={setInputText}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          handleTranslate={handleTranslate}
        />
        <Card type='to'
          text={resultText}
          setText={setResultText}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          handleTranslate={handleTranslate}
        />
      </div>
    </div>
    </>
  )
}

export default App