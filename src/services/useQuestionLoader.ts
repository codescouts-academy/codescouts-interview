import { useEffect, useState } from "react";
import { useTopic } from "../state/useTopic";
import { useParams } from "react-router-dom";
import { useShuffle } from "./useSuffle";
import { Topic } from "../types";

const START_QUESTIONS_IN_FILE = 6;
export const useQuestionsLoader = () => {
  const [loaded, setLoaded] = useState(false);
  const { topic, setTopic } = useTopic();
  const { languageId, topicId } = useParams();
  const { shuffleArray } = useShuffle();

  const processLines = (data: Topic) => {
    let lastLineProcessed = START_QUESTIONS_IN_FILE;

    const topic: Topic = {
      ...data,
      questions: data.questions.map((question) => {
        const from = lastLineProcessed;
        const to = from + 4;

        lastLineProcessed += 5

        return {
          ...question,
          lines: `L${from}-L${to}`
        }
      })
    }

    return topic;
  }

  const saveShuffle = (topic: Topic) => {
    const shuffled = shuffleArray(topic.questions)

    setTopic({
      ...topic,
      questions: shuffled
    })
  }

  const load = async () => {
    if (topic?.id === topicId) {
      setLoaded(true);

      return;
    };

    setLoaded(false);

    const jsonFileName = `${languageId}-${topicId}`;

    try {
      const response = await import(`../data/${jsonFileName}.json`);

      const topic = processLines(response.default)

      saveShuffle(topic);
    } catch (error) {
      throw error;
    }
    finally {
      setLoaded(true)
    }
  };

  const shuffle = () => {
    if (!topic) return;

    saveShuffle(topic);
  }

  useEffect(() => {
    load();
  }, []);

  return { loaded, topic: topic as Topic, shuffle };
};
