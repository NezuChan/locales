import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/premium"
})

export class EnUsCommandsPremium extends LanguagePiece {
    public HAS_NO_ACTIVATED_SERVER = (): string => "You don't have any activated server.";
    public DEACTIVATED = (guild: string): string => `Deactivated premium on ${guild}.`;
    public ACTIVATED = (guild: string, tier: string): string => `Activated premium on ${guild}. Tier: ${tier}`;
    public ALREADY_ACTIVATED = (guild: string): string => `Premium is already activated on ${guild}.`;
    public ALREADY_DEACTIVATED = (guild: string): string => `Premium is already deactivated on ${guild}.`;
    public DOESNT_MEET_REQUIREMENT = (): string => "You doesnt have requirement met to activate this guild.";
}
