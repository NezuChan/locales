import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-*ID/commands/playlist"
})

export class EnIDCommandsPlaylist extends LanguagePiece {
    public INVALID_IDENTIFIER = (): string => "Anda harus memberikan daftar putar yang valid.";
    public INVALID_TRACK_IDENTIFIER = (): string => "Anda harus memberikan trek yang valid.";
    public INVALID_NAME = (): string => "Nama daftar putar hanya di izinkan huruf, angka, garis bawah, string. dan tidak boleh lebih dari 15 karakter";
    public NOT_FOUND = (identifier: string): string => `Daftar putar ${inlineCode(identifier)} tidak di temukan.`;
    public TRACK_NOT_FOUND = (identifier: string): string => `Trek ${inlineCode(identifier)} tidak di temukan.`;
    public LIMIT_REACHED = (limit: number | string): string => `Anda telah mencapai batas ${inlineCode(String(limit))} daftar putar.`;
    public TRACKS_LIMIT_REACHED = (limit: number | string): string => `Anda telah mencapai batas ${inlineCode(String(limit))} trek.`;
    public ADDED_TRACKS = (tracks: number | string): string => `Menambahkan ${tracks} trek ke dalam daftar putar.`;
    public TRACKS_SKIPPED = (amount: number | string, limit: number | string): string => `Melewati ${inlineCode(String(amount))} trek karena Anda telah mencapai batas ${inlineCode(String(limit))} trek, pertimbangkan untuk menghapus beberapa trek atau membeli premium untuk meningkatkan batas`;
    public CREATED = (name: string): string => `Daftar putar ${inlineCode(name)} telah di buat.`;
    public DELETED = (name: string): string => `Daftar putar ${inlineCode(name)} telah di hapus.`;
    public DELETED_TRACK = (identifier: string): string => `Trek ${inlineCode(identifier)} telah di hapus.`;
    public EXISTS = (name: string): string => `Daftar putar ${inlineCode(name)} sudah pernah dibuat.`;
    public EXTEND_TRACK_LIMIT = (playlist: string, limit: number | string): string => `Anda telah memperluas daftar putar Anda ${inlineCode(playlist)} batas trek ke ${inlineCode(String(limit))}.`;
    public SUBTRACT_TRACK_LIMIT = (playlist: string, amount: number | string): string => `Anda telah mengurangi ${inlineCode(String(amount))} trek dari batas trek ${inlineCode(playlist)} playlist Anda.`;
    public LOADED_PLAYLIST = (name: string, tracks: number | string): string => `Daftar putar ${inlineCode(name)} dimuat dengan ${inlineCode(String(tracks))} trek.`;
    public EMPTY = (): string => "Daftar putar ini kosong.";
    public HAS_NO_PLAYLIST = (): string => "Anda tidak memiliki daftar putar apa pun.";
}
