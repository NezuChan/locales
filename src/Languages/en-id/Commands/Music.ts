import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { bold, inlineCode } from "@discordjs/builders";
import { User } from "@nezuchan/core";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/commands/music"
})

export class EnIDCommandsMusic extends LanguagePiece {
    public CURRENT_TRACK = (): string => "Trek saat ini";
    public CLEAR = (): string => "Menghapus antrian.";
    public DISCONNECT = (): string => "Terputus dari saluran suara, terima kasih telah mendengarkan!";
    public JOIN_CHANNEL = (channel: string): string => `Bergabung dengan saluran suara ${channel}`;
    public LOOP = (type: string): string => `Sekarang berputar secara \`${type}\``;
    public NOW_PLAYING_EMPTY = (): string => "Tidak ada yang diputar saat ini.";
    public NOW_PLAYING = (title: string, author: User | string, duration?: number | string): string => `Sekarang Memutar: [${inlineCode(title)}] (${author instanceof User ? `<@${author.id}>` : `<@${author}>`}) ${duration ? `[${duration}]` : ""}`;
    public PAUSE = (): string => "Trek di jeda.";
    public RESUME = (): string => "Trek di lanjutkan.";
    public PLAY_NO_QUERY = (): string => "Anda harus memberikan kueri untuk dicari.";
    public PLAY_NO_RESULTS = (): string => "Tidak ada hasil yang ditemukan.";
    public NON_SUPPORTED_PLATFORMS = (): string => "Ini bukan platform yang didukung, silakan coba yang lain.";
    public QUEUE_TRACK_LIMIT_REACHED = (max: number | string): string => `Anda telah mencapai jumlah trek maksimum dalam antrean. (${bold(String(max))})`;
    public PLAYLIST_LOADED = (title: string, tracks: number | string): string => `Daftar putar dimuat [${inlineCode(title)}] dengan ${tracks} trek.`;
    public TRACK_SKIPPED = (tracks: number | string, max: number | string): string => `Melewati ${bold(String(tracks))} trek. karena terlalu banyak. ${bold(String(max))}`;
    public TRACK_LOADED = (title: string, author: User | string, duration?: number | string): string => `Memuat lagu [${inlineCode(title)}] (${author instanceof User ? `<@${author.id}>` : `<@${author}>`}) ${duration ? `[${duration}]` : ""}`;
    public PREVIOUS_TRACK_NOT_FOUND = (): string => "There is no previous track.";
    public PREVIOUS_TRACK = (title: string, author: User | string, duration?: number | string): string => `Sekarang memutar lagu sebelumnya: [${inlineCode(title)}] (${author instanceof User ? `<@${author.id}>` : `<@${author}>`}) ${duration ? `[${duration}]` : ""}`;
    public REMOVED_TRACK = (title: string, author: User | string, duration?: number | string): string => `Trek dihapus: [${inlineCode(title)}] (${author instanceof User ? `<@${author.id}>` : `<@${author}>`}) ${duration ? `${duration ? `[${duration}]` : ""}` : ""}`;
    public REPLAY = (): string => "Memutar ulang trek.";
    public SHUFFLE = (): string => "Antrian telah di acak.";
    public SKIP = (): string => "Melewati trek.";
    public STOP = (): string => "Menghentikan trek saat ini dan menghapus antrean.";
    public CHANGE_VOLUME = (volume: number | string): string => `Volume diubah menjadi ${volume}%`;
    public VOLUME = (volume: number | string): string => `Volume saat ini adalah ${volume}%`;
    public CHOOSE_TRACK = (): string => "Pilih trek antara 1 dan 25, Anda memiliki 20 detik untuk memilih trek";
    public NO_CHOOSE_INPUT = (): string => "Tidak ada trek yang dipilih, pilihan dibatalkan.";
    public LOADED_TRACKS = (tracks: number | string): string => `Memuat ${tracks} trek.`;
    public CHANGED_FILTERS = (filter: string): string => `Filter diubah menjadi ${inlineCode(filter)}`;
    public DISABLED_FILTERS = (): string => "Filter dinonaktifkan.";
    public MOVE_TRACK = (title: string, from: number | string, to: number | string): string => `Memindahkan ${inlineCode(title)} dari posisi ${inlineCode(String(from))} ke posisi ${inlineCode(String(to))}`;
}
