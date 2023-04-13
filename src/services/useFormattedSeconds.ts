import { useMemo } from "react";
export const useFormattedSeconds = () => {
    const format = useMemo(() => {
        return (_seconds: number = 0) => {
            let hours = Math.floor(_seconds / 3600);
            let minutes = Math.floor((_seconds - hours * 3600) / 60);
            let seconds = _seconds - hours * 3600 - minutes * 60;

            const formattedSecond = seconds < 10 ? "0" + seconds : seconds;
            const formattedMinute = minutes < 10 ? "0" + minutes : minutes;
            const formattedHour = hours < 10 ? "0" + hours : hours;

            if (hours === 0) {
                return formattedMinute + ":" + formattedSecond;
            }

            return formattedHour + ":" + formattedMinute + ":" + formattedSecond;
        };
    }, []);
    return format;
};