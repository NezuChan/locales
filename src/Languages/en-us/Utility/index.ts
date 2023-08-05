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
    public MESSAGE_COMMANDS_NOT_SUPPORTED = (): string => "Message commands are no supported for this command !";
    public SUB_COMMAND_NOT_FOUND = (subCommand: string): string => `Sub command \`${subCommand}\` not found.`;
    public PREFIX_FOR_THIS_GUILD = (prefix: string): string => `Prefix for this guild is \`${prefix}\``;
    public PREFIX_TOO_LONG = (): string => "Prefix can't be longer than 10 characters.";
    public PREFIX_TOO_SHORT = (): string => "Prefix can't be shorter than 1 character.";
    public PREFIX_CHANGED = (prefix: string): string => `Prefix changed to \`${prefix}\``;
}
