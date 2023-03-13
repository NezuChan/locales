import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-US/utility"
})

export class EnUsUtility extends LanguagePiece {
    public ENABLED = (): string => "enabled";
    public DISABLED = (): string => "disabled";
    public INVALID_INDEX = (): string => "You must provide a valid index.";
    public INVALID_RANGE = (min: number | string, max: number | string): string => `You must provide a valid range. between ${inlineCode(String(min))} and ${inlineCode(String(max))}.`;
}
