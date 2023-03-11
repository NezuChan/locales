import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { User } from "@nezuchan/core";

@ApplyOptions<LanguageOptions>({
    name: "en-US/interaction-handlers"
})

export class EnUsInteractionHandlers extends LanguagePiece {
    public AUDIO_BACK_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : author}, You clicked back button. the previous track in the queue sequence will be played`;
    public NO_BACK_TRACK = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : author}, There is no previous track in the queue sequence`;
    public AUDIO_PAUSE_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : author}, You clicked pause button. track will be paused`;
    public AUDIO_RESUME_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : author}, You clicked resume button. track will be resumed`;
    public AUDIO_NEXT_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : author}, You clicked next button. track will be skipped`;
}
