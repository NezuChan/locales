import { LanguageOptions } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { User } from "@nezuchan/core";
import { inlineCode } from "@discordjs/builders";
import { EnUsPlayer } from "../../en-us/Player/index.js";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/player"
})

export class EnIDPlayer extends EnUsPlayer {
    public TRACK_START = (title: string, author: User | string): string => `Sekarang Memutar: ${inlineCode(title)} [${author instanceof User ? `<@${author.id}>` : `<@${author}>`}]`;
    public QUEUE_END = (): string => "Antrian telah selesai, Tolong mengajukan lagu untuk diputar";
    public TRACK_EXCEPTION = (): string => "Terjadi kesalahan saat memutar trek, menghentikan antrean. terlalu banyak kesalahan yang terjadi berturut-turut";
    public PLAYER_TIMEOUT = (): string => "Aky sudah tidak aktif selama 3 menit, pemutar musik akan dimatikan.";
}
