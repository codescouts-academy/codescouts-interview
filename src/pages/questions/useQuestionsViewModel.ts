import { useState, useLayoutEffect } from "react";
import { useQuestionsLoader } from "../../services/useQuestionLoader";
import { useShuffle } from "../../services/useSuffle";
import { Question } from "../../types";

export const useQuestionsViewModel = () => {
    const { loaded, topic } = useQuestionsLoader();
    const { shuffleArray } = useShuffle();
    const [questionShowing, setQuestionShowing] = useState<Question[]>([]);

    const difficulties = [...new Set(topic?.questions.map((q) => q.difficulty))].sort();

    const shuffle = () => {
        setQuestionShowing(shuffleArray(questionShowing));
    };

    const filterByDifficulty = (difficulty: string) => {
        setQuestionShowing(
            topic.questions.filter(
                (question) => difficulty === "*" || question.difficulty === difficulty
            )
        );
    };

    useLayoutEffect(() => {
        if (loaded) setQuestionShowing(topic?.questions);
    }, [loaded]);

    return {
        loaded,
        questionShowing,
        topic,
        filterByDifficulty,
        shuffle,
        difficulties
    }
}