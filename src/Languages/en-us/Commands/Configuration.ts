import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/configuration"
})

export class EnUsCommandsConfiguration extends LanguagePiece {
    public DJ_ALREADY_ADDED = (): string => "The user or role is already added.";
    public DJ_NOT_USER = (): string => "You must provide a valid user.";
}
