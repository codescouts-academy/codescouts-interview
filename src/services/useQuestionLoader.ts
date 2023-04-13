import { useEffect, useState } from "react";
import { useTopic } from "../state/useTopic";
import { useParams } from "react-router-dom";
import { useShuffle } from "./useSuffle";
import { Topic } from "../types";
export const useQuestionsLoader = () => {
  const [loaded, setLoaded] = useState(false);
  const { topic, setTopic } = useTopic();
  const { languageId, topicId } = useParams();
  const { shuffleArray } = useShuffle();

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

      saveShuffle(response.default);
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
