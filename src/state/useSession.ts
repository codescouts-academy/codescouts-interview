import { create } from "@codescouts/store";

interface QuestionStore {
    session?: {
        seconds: number;
        isPlaying: boolean
    },
    start: () => void;
    stop: () => void;
    pause: () => void;
}

export const useSession = create<QuestionStore>((set) => {
    let intervalId: number | undefined = undefined;

    const update = () => set((state) => ({ session: { isPlaying: true, seconds: state.session ? state.session.seconds + 1 : 0 } }));

    return {
        start: () => {
            set((state) => ({ session: { isPlaying: true, seconds: state.session?.seconds ?? 0 } }))

            clearInterval(intervalId);

            intervalId = setInterval(update, 1000);
        },
        pause: () => {
            set((state) => ({ session: { isPlaying: false, seconds: state.session?.seconds ?? 0 } }))

            clearInterval(intervalId);
        },
        stop: () => {
            clearInterval(intervalId);

            set({ session: undefined })
        },
    }
})
    .withPersist("Session", (state) => {
        return {
            ...state,
            isPlaying: false
        }
    })
    .build()