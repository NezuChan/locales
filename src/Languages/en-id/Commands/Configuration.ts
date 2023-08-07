import { LanguageOptions } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";
import { Emoji } from "@nezuchan/constants";
import { stripIndents } from "common-tags";
import { EnUsCommandsConfiguration } from "../../en-us/Commands/Configuration.js";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/commands/configuration"
})

export class EnIDCommandsConfiguration extends EnUsCommandsConfiguration {
    public DJ_ALREADY_ADDED = (): string => "User atau role ini sudah di tambahkan.";
    public DJ_NOT_USER = (): string => "Kamu harus memberi user yang valid.";
    public LOCALES_CURRENT = (locale: string): string => `Lokal saat ini disetel ke ${inlineCode(locale)}.`;
    public LOCALES_INVALID = (): string => "Anda harus memberikan lokal yang valid.";
    public LOCALES_UPDATED = (locale: string): string => `Lokal telah diperbarui ke ${inlineCode(locale)}.`;
    public VOLUME = (volume: number | string): string => `Konfigurasi volume default telah diatur ke ${inlineCode(String(volume))}.`;
    public VOLUME_VIEW = (volume: number | string): string => `Konfigurasi volume default diatur ke ${inlineCode(String(volume))}.`;
    public LIMIT_REACHED = (limit: number | string): string => `Anda telah mencapai batas ${inlineCode(String(limit))} konfigurasi.`;
    public ENABLED = (config: string): string => `Konfigurasi ${inlineCode(config)} telah di aktifkan.`;
    public DISABLED = (config: string): string => `Konfigurasi ${inlineCode(config)} telah di matikan.`;
    public VIEW = (config: string, state: boolean): string => `Konfigurasi ${inlineCode(config)} di ${state ? "aktifkan" : "matikan"}.`;

    public DJ = (users: string[], roles: string []): string => stripIndents`
        ${Emoji.Ok} | Memperbarui konfigurasi DJ.

        DJ Users: ${users.length ? users.join(", ") : "none"}
        DJ Roles: ${roles.length ? roles.join(", ") : "none"}
    `;

    public DJ_VIEW = (users: string[], roles: string [], state: boolean): string => stripIndents`
        ${state ? Emoji.Ok : Emoji.No} | Konfigurasi DJ di ${state ? "aktifkan" : "matikan"}.

        DJ Users: ${users.length ? users.join(", ") : "none"}
        DJ Roles: ${roles.length ? roles.join(", ") : "none"}
    `;

    public LIMIT = (limit: number | string): string => `Anda hanya diizinkan untuk menambahkan ${inlineCode(String(limit))} konfigurasi.`;
    public INVALID = (): string => "Anda harus memberikan konfigurasi yang valid.";
}
