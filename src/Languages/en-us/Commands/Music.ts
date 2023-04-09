import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { bold, inlineCode } from "@discordjs/builders";
import { User } from "@nezuchan/core";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands/music"
})

export class EnUsCommandsMusic extends LanguagePiece {
    public CLEAR = (): string => "Cleared the queue.";
    public DISCONNECT = (): string => "Disconnected from voice channel, thanks for listening !";
    public JOIN_CHANNEL = (channel: string): string => `Joined ${channel} voice channel`;
    public LOOP = (type: string): string => `Now looping \`${type}\``;
    public NOW_PLAYING_EMPTY = (): string => "There is nothing playing right now.";
    public NOW_PLAYING = (title: string, author: User | string, duration?: number | string): string => `Now playing: [${inlineCode(title)}] (${author instanceof User ? `<@${author.id}>` : `<@${author}>`}) ${duration ? `[${duration}]` : ""}`;
    public PAUSE = (): string => "Paused the track.";
    public RESUME = (): string => "Resumed the track.";
    public PLAY_NO_QUERY = (): string => "You must provide a query to search for.";
    public PLAY_NO_RESULTS = (): string => "No results found.";
    public NON_SUPPORTED_PLATFORMS = (): string => "This is not an supported platforms, please try another.";
    public QUEUE_TRACK_LIMIT_REACHED = (max: number | string): string => `You have reached the maximum number of tracks in the queue. (${bold(String(max))})`;
    public PLAYLIST_LOADED = (title: string, tracks: number | string): string => `Loaded playlist [${inlineCode(title)}] with ${tracks} tracks.`;
    public TRACK_SKIPPED = (tracks: number | string, max: number | string): string => `Skipped ${bold(String(tracks))} tracks. due to overload. ${bold(String(max))}`;
    public TRACK_LOADED = (title: string, author: User | string, duration?: number | string): string => `Loaded track [${inlineCode(title)}] (${author instanceof User ? `<@${author.id}>` : `<@${author}>`}) ${duration ? `[${duration}]` : ""}`;
    public PREVIOUS_TRACK_NOT_FOUND = (): string => "There is no previous track.";
    public PREVIOUS_TRACK = (title: string, author: User | string, duration?: number | string): string => `Now playing previous track: [${inlineCode(title)}] (${author instanceof User ? `<@${author.id}>` : `<@${author}>`}) ${duration ? `[${duration}]` : ""}`;
    public REMOVED_TRACK = (title: string, author: User | string, duration?: number | string): string => `Removed track: [${inlineCode(title)}] (${author instanceof User ? `<@${author.id}>` : `<@${author}>`}) ${duration ? `${duration ? `[${duration}]` : ""}` : ""}`;
    public REPLAY = (): string => "Replaying the track.";
    public SHUFFLE = (): string => "Shuffled the queue.";
    public SKIP = (): string => "Skipped the track.";
    public STOP = (): string => "Stopped current track and cleared queue.";
    public CHANGE_VOLUME = (volume: number | string): string => `Changed volume to ${volume}%`;
    public VOLUME = (volume: number | string): string => `Volume is ${volume}%`;
    public CHOOSE_TRACK = (): string => "Select a track between 1 and 25, you have 20 seconds to select a track";
    public NO_CHOOSE_INPUT = (): string => "No track selected, cancelled selection.";
    public LOADED_TRACKS = (tracks: number | string): string => `Loaded ${tracks} tracks.`;
    public CHANGED_FILTERS = (filter: string): string => `Changed filters to ${inlineCode(filter)}`;
    public DISABLED_FILTERS = (): string => "Disabled filters.";
    public SUB_COMMAND_NOT_FOUND = (subCommand: string): string => `Sub command \`${subCommand}\` not found.`;
}
