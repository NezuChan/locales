import { LanguageOptions } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnUsCommandsPremium } from "../../en-us/Commands/Premium.js";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/commands/premium"
})

export class EnIDCommandsPremium extends EnUsCommandsPremium {
    public HAS_NO_ACTIVATED_SERVER = (): string => "Anda tidak memiliki server yang diaktifkan.";
    public DEACTIVATED = (guild: string): string => `Premium dinonaktifkan di ${guild}.`;
    public ACTIVATED = (guild: string, tier: string): string => `Premium diaktifkan di ${guild}. Tingkat: ${tier}`;
    public ALREADY_ACTIVATED = (guild: string): string => `Premium sudah diaktifkan di ${guild}.`;
    public ALREADY_DEACTIVATED = (guild: string): string => `Premium sudah dinonaktifkan di ${guild}.`;
    public DOESNT_MEET_REQUIREMENT = (): string => "Anda tidak memiliki persyaratan yang dipenuhi untuk mengaktifkan guild ini.";
}
