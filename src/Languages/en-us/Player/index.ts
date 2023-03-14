import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { User } from "@nezuchan/core";
import { inlineCode } from "@discordjs/builders";

@ApplyOptions<LanguageOptions>({
    name: "en-US/player"
})

export class EnUsPlayer extends LanguagePiece {
    public TRACK_START = (title: string, author: User | string): string => `Now Playing: ${inlineCode(title)} [${author instanceof User ? `<@${author.id}>` : `<@${author}>`}]`;
    public QUEUE_END = (): string => "The queue has ended, please request for a track to be played";
    public TRACK_EXCEPTION = (): string => "An error ocurred when playing track, stopping queue. too much error hit in a row";
    public PLAYER_TIMEOUT = (): string => "I've been inactive for 3 minutes, the player will be destroyed.";
}
