import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/utility"
})

export class EnUsCommandsUtility extends LanguagePiece {
    public PING_SUCCESS = (): string => "Pong!";
    public PING_SUCCRSS_LATENCY = (latency: number): string => `Pong! Took me ${latency}ms to respond.`;
}
