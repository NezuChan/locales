import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/preconditions/music"
})

export class EnIDPreconditionsMusic extends LanguagePiece {
    public NOT_ON_SAME_VOICE = (): string => "Kamu harus berada di kanal yang sama dengan ku, untuk melanjutkan aksi ini.";
    public NOT_ON_VOICE = (): string => "Kamu harus berada di kanal, untuk melanjutkan aksi ini.";
    public QUEUE_NOT_AVAILABLE = (): string => "Kamu belum memasukan antrian.";
    public NOT_DJ = (): string => "Kamu harus seorang DJ, untuk melanjutkan aksi ini.";
    public CANT_CONNECT_VOICE = (permissions: string[]): string => `Aku tidak bisa terhubung dengan kanal audio mu karena tidak mempunyain ijin ${permissions.join(", ")}`;
}
