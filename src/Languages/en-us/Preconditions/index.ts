import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnUsPreconditionsMusic } from "./Music.js";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-US/preconditions"
})

export class EnUsPreconditions extends LanguagePiece {
    public get music(): EnUsPreconditionsMusic {
        return this.container.stores.get("languages").get("en-US/preconditions/music") as EnUsPreconditionsMusic;
    }

    public WAIT_FOR_VOTE = (time: number | string): string => `You have ${inlineCode(String(time))} second(s) to vote for the bot https://top.gg/bot/616169470293049344/vote or purchase premium to bypass`;
    public NOT_VOTED = (): string => "To use this command you must vote for the bot https://top.gg/bot/616169470293049344/vote or purchase premium to bypass";
    public NOT_PREMIUM = (): string => "You must purchase premium to use this command";
}
