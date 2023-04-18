import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/playlist"
})

export class EnUsCommandsPlaylist extends LanguagePiece {
    public INVALID_IDENTIFIER = (): string => "You must provide a valid playlist identifier.";
    public INVALID_NAME = (): string => "Playlist name only allows letters, numbers, underscore, string. and must not more than 15 characters";
    public NOT_FOUND = (identifier: string): string => `Playlist ${inlineCode(identifier)} not found.`;
    public LIMIT_REACHED = (limit: number | string): string => `You have reached the limit of ${inlineCode(String(limit))} playlist.`;
    public TRACKS_LIMIT_REACHED = (limit: number | string): string => `You have reached the limit of ${inlineCode(String(limit))} tracks.`;
    public ADDED_TRACKS = (tracks: number | string): string => `Added ${tracks} tracks to the playlist.`;
    public TRACKS_SKIPPED = (amount: number | string, limit: number | string): string => `Skipped ${inlineCode(String(amount))} track(s) because you have reached the limit of ${inlineCode(String(limit))} tracks, considering removing some tracks or purchase premium to increase the limit`;
    public CREATED = (name: string): string => `Playlist ${inlineCode(name)} has been created.`;
    public DELETED = (name: string): string => `Playlist ${inlineCode(name)} has been deleted.`;
    public EXISTS = (name: string): string => `Playlist ${inlineCode(name)} already exists.`;
    public EXTEND_TRACK_LIMIT = (playlist: string, limit: number | string): string => `You have extended your playlist ${inlineCode(playlist)} track limit to ${inlineCode(String(limit))}.`;
    public SUBTRACT_TRACK_LIMIT = (playlist: string, amount: number | string): string => `You have subtracted ${inlineCode(String(amount))} track(s) from your playlist ${inlineCode(playlist)} track limit.`;
}
