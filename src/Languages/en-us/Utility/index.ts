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
    public MESSAGE_COMMANDS_NOT_SUPPORTED = (): string => "Message commands are no longer supported.";
    public SUB_COMMAND_NOT_FOUND = (subCommand: string): string => `Sub command \`${subCommand}\` not found.`;
    public CONFIG_LIMIT_REACHED = (limit: number | string): string => `You have reached the limit of ${inlineCode(String(limit))} configuration.`;
    public CONFIG_ENABLED = (config: string): string => `The ${inlineCode(config)} configuration has been ${this.ENABLED()}.`;
    public CONFIG_DISABLED = (config: string): string => `The ${inlineCode(config)} configuration has been ${this.DISABLED()}.`;
    public CONFIG_VIEW = (config: string, enable: boolean): string => `The ${inlineCode(config)} configuration is set to ${enable ? this.ENABLED() : this.DISABLED()}.`;
}
