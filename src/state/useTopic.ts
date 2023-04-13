import { create } from "@codescouts/store";
import { Topic } from "../types";

interface QuestionStore {
    topic?: Topic,
    setTopic: (topic: Topic) => void;
}

export const useTopic = create<QuestionStore>((set) => ({
    setTopic: (topic: Topic) => set({ topic })
}))
    .build();