import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";
import { stripIndents } from "common-tags";

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
    public CONFIG_VIEW = (config: string, state: boolean): string => `The ${inlineCode(config)} configuration is set to ${state ? this.ENABLED() : this.DISABLED()}.`;
    public CONFIG_VOLUME = (volume: number | string): string => `The default volume configuration has been set to ${inlineCode(String(volume))}.`;
    public CONFIG_VOLUME_VIEW = (volume: number | string): string => `The default volume configuration is set to ${inlineCode(String(volume))}.`;
    public CONFIG_DJ = (users: string[], roles: string []): string => stripIndents`
        Set the DJ role configuration to ${roles.length ? roles.map(role => inlineCode(role)).join(", ") : "none"}.
        Set the DJ user configuration to ${users.length ? users.map(user => inlineCode(user)).join(", ") : "none"}.
    `;

    public CONFIG_DJ_VIEW = (users: string[], roles: string [], state: boolean): string => stripIndents`
        The DJ role configuration is set to ${roles.length ? roles.map(role => inlineCode(role)).join(", ") : "none"}.
        The DJ user configuration is set to ${users.length ? users.map(user => inlineCode(user)).join(", ") : "none"}.
        The DJ configuration is set to ${state ? this.ENABLED() : this.DISABLED()}.
    `;

    public CONFIG_LIMIT = (limit: number | string): string => `You only allowed to add ${inlineCode(String(limit))} config.`;
}
