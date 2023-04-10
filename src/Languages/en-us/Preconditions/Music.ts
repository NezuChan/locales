import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-US/preconditions/music"
})

export class EnUsPreconditionsMusic extends LanguagePiece {
    public NOT_ON_SAME_VOICE = (): string => "You must on same voice channel with me, in order to execute this action.";
    public NOT_ON_VOICE = (): string => "You must on voice channel, in order to execute this action.";
    public QUEUE_NOT_AVAILABLE = (): string => "You have not enqueue a track.";
    public NOT_DJ = (): string => "You must be DJ, in order to execute this action.";
    public WAIT_FOR_VOTE = (time: number | string): string => `You have ${inlineCode(String(time))} second(s) to vote for the bot https://top.gg/bot/616169470293049344/vote or purchase premium to bypass`;
    public NOT_VOTED = (): string => "To use this command you must vote for the bot https://top.gg/bot/616169470293049344/vote or purchase premium to bypass";
    public NOT_PREMIUM = (): string => "You must purchase premium to use this command";
    public CANT_CONNECT_VOICE = (permissions: string[]): string => `Cant connect to your voice channel due to missing ${permissions.join(", ")} permission${permissions.length > 1 ? "s" : ""}`;
}
