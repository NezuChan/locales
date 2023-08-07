import { LanguageOptions } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";
import { EnUsCommandsUtility } from "../../en-us/Commands/Utility.js";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/commands/utility"
})

export class EnIDCommandsUtility extends EnUsCommandsUtility {
    public PING_SUCCESS = (): string => "Pong!";
    public PING_SUCCRSS_LATENCY = (latency: number): string => `Pong! Butuh waktu ${inlineCode(String(latency))}ms untuk merespons.`;
}
