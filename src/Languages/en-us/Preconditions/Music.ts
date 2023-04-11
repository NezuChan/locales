import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";

@ApplyOptions<LanguageOptions>({
    name: "en-US/preconditions/music"
})

export class EnUsPreconditionsMusic extends LanguagePiece {
    public NOT_ON_SAME_VOICE = (): string => "You must on same voice channel with me, in order to execute this action.";
    public NOT_ON_VOICE = (): string => "You must on voice channel, in order to execute this action.";
    public QUEUE_NOT_AVAILABLE = (): string => "You have not enqueue a track.";
    public NOT_DJ = (): string => "You must be DJ, in order to execute this action.";
    public CANT_CONNECT_VOICE = (permissions: string[]): string => `Cant connect to your voice channel due to missing ${permissions.join(", ")} permission${permissions.length > 1 ? "s" : ""}`;
}
