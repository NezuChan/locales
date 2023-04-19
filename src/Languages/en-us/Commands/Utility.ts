import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/utility"
})

export class EnUsCommandsUtility extends LanguagePiece {
    public PING_SUCCESS = (): string => "Pong!";
    public PING_SUCCRSS_LATENCY = (latency: number): string => `Pong! Took me ${inlineCode(String(latency))}ms to respond.`;
}
