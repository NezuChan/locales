import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";
import { Emoji } from "@nezuchan/constants";
import { stripIndents } from "common-tags";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/configuration"
})

export class EnUsCommandsConfiguration extends LanguagePiece {
    public DJ_ALREADY_ADDED = (): string => "The user or role is already added.";
    public DJ_NOT_USER = (): string => "You must provide a valid user.";
    public LOCALES_CURRENT = (locale: string): string => `The current locale is set to ${inlineCode(locale)}.`;
    public LOCALES_INVALID = (): string => "You must provide a valid locale.";
    public LOCALES_UPDATED = (locale: string): string => `The locale has been updated to ${inlineCode(locale)}.`;
    public VOLUME = (volume: number | string): string => `The default volume configuration has been set to ${inlineCode(String(volume))}.`;
    public VOLUME_VIEW = (volume: number | string): string => `The default volume configuration is set to ${inlineCode(String(volume))}.`;
    public LIMIT_REACHED = (limit: number | string): string => `You have reached the limit of ${inlineCode(String(limit))} configuration.`;
    public ENABLED = (config: string): string => `The ${inlineCode(config)} configuration has been enabled.`;
    public DISABLED = (config: string): string => `The ${inlineCode(config)} configuration has been disabled.`;
    public VIEW = (config: string, state: boolean): string => `The ${inlineCode(config)} configuration is set to ${state ? "enabled" : "disabled"}.`;

    public DJ = (users: string[], roles: string []): string => stripIndents`
        ${Emoji.Ok} | Updated the DJ configuration.

        DJ Users: ${users.length ? users.join(", ") : "none"}
        DJ Roles: ${roles.length ? roles.join(", ") : "none"}
    `;

    public DJ_VIEW = (users: string[], roles: string [], state: boolean): string => stripIndents`
        ${state ? Emoji.Ok : Emoji.No} | The DJ configuration is set to ${state ? "enabled" : "disabled"}.

        DJ Users: ${users.length ? users.join(", ") : "none"}
        DJ Roles: ${roles.length ? roles.join(", ") : "none"}
    `;

    public LIMIT = (limit: number | string): string => `You only allowed to add ${inlineCode(String(limit))} config.`;
    public INVALID = (): string => "You must provide a valid config.";
}
