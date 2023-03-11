import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";

@ApplyOptions<LanguageOptions>({
    name: "en-us/preconditions/music"
})

export class EnUsPreconditionsMusic extends LanguagePiece {
    public NOT_ON_SAME_VOICE = (): string => "You must on same voice channel with me, in order to execute this action.";
    public NOT_ON_VOICE = (): string => "You must on voice channel, in order to execute this action.";
    public QUEUE_NOT_AVAILABLE = (): string => "You have not enqueue a track.";
}
