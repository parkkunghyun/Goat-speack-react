import { useCallback } from "react";
import {toast} from  'react-toastify';

const useCopy = () => {
    const copyToClipboard = useCallback((text: string) => {
        if (!text) {
            return toast.warn("글자가 존재하지 않습니다", {
                position: "top-right",
                autoClose: 2000,
                theme: "light", // 밝은 테마 설정
            });
        }

        navigator.clipboard.writeText(text).then(() => {
            toast.success("복사되었습니다!", {
                position: "top-right",
                autoClose: 2000,
                theme: "light", // 밝은 테마 설정
            });
        }).catch(() => {
            toast.error("복사에 실패했습니다.", {
                theme: "light", // 밝은 테마 설정
            });
        });
    }, []);

    return {copyToClipboard};
}

export default useCopy;