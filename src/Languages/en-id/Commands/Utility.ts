import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/commands/utility"
})

export class EnIDCommandsUtility extends LanguagePiece {
    public PING_SUCCESS = (): string => "Pong!";
    public PING_SUCCRSS_LATENCY = (latency: number): string => `Pong! Butuh waktu ${inlineCode(String(latency))}ms untuk merespons.`;
}
