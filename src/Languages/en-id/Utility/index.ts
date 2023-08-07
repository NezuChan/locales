import { LanguageOptions } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";
import { EnUsUtility } from "../../en-us/Utility/index.js";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/utility"
})

export class EnIDUtility extends EnUsUtility {
    public ENABLED = (): string => "diaktifkan";
    public DISABLED = (): string => "tidak aktif";
    public INVALID_INDEX = (): string => "Kamu harus memberikan urutan yang benar.";
    public INVALID_RANGE = (min: number | string, max: number | string): string => `Kamu harus memberikan urutan yang benar. antara ${inlineCode(String(min))} sampai ${inlineCode(String(max))}.`;
    public MESSAGE_COMMANDS_NOT_SUPPORTED = (): string => "Perintah message belum support saat ini !";
    public SUB_COMMAND_NOT_FOUND = (subCommand: string): string => `Sub perintah \`${subCommand}\` tidak di temukan.`;
    public PREFIX_FOR_THIS_GUILD = (prefix: string): string => `Awalan untuk guild ini adalah \`${prefix}\``;
    public PREFIX_TOO_LONG = (): string => "Awalan tidak bisa lebih dari 10 kata.";
    public PREFIX_TOO_SHORT = (): string => "Awalan tidak bisa kurang dari 1 kata.";
    public PREFIX_CHANGED = (prefix: string): string => `Awalan di ganti ke \`${prefix}\``;
}
