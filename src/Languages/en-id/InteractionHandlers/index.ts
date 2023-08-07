import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { User } from "@nezuchan/core";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/interaction-handlers"
})

export class EnIDInteractionHandlers extends LanguagePiece {
    public AUDIO_BACK_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : `<@${author}>`}, Kamu menekan tombol kembali. trek sebelumnya dalam urutan antrean akan diputar`;
    public NO_BACK_TRACK = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : `<@${author}>`}, Tidak ada trek sebelumnya dalam urutan antrian`;
    public AUDIO_PAUSE_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : `<@${author}>`}, Kamu menekan tombol jeda. trek akan dijeda`;
    public AUDIO_RESUME_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : `<@${author}>`}, Kamu menekan tombol lanjut. trek akan dilanjutkan`;
    public AUDIO_NEXT_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : `<@${author}>`}, Kamu menekan tombol berikutnya. trek akan dilewati`;
    public AUDIO_STOP_BUTTON = (author: User | string): string => `${author instanceof User ? `<@${author.id}>` : `<@${author}>`}, Kamu menekan tombol berhenti. trek akan dihentikan dan antrian akan dibersihkan`;
}
