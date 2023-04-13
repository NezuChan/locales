import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/configuration"
})

export class EnUsCommandsConfiguration extends LanguagePiece {
    public DJ_ALREADY_ADDED = (): string => "The user or role is already added.";
    public DJ_NOT_USER = (): string => "You must provide a valid user.";
    public LOCALES_CURRENT = (locale: string): string => `The current locale is set to ${inlineCode(locale)}.`;
    public LOCALES_INVALID = (): string => "You must provide a valid locale.";
}
