import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnUsCommandsUtility } from "./Utility.js";
import { EnUsCommandsMusic } from "./Music.js";
import { EnUsCommandsConfiguration } from "./Configuration.js";
import { EnUsCommandsPlaylist } from "./Playlist.js";
import { EnUsCommandsPremium } from "./Premium.js";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands"
})

export class EnUsCommands extends LanguagePiece {
    public get utility(): EnUsCommandsUtility {
        return this.container.stores.get("languages").get("en-US/commands/utility") as EnUsCommandsUtility;
    }

    public get music(): EnUsCommandsMusic {
        return this.container.stores.get("languages").get("en-US/commands/music") as EnUsCommandsMusic;
    }

    public get configuration(): EnUsCommandsConfiguration {
        return this.container.stores.get("languages").get("en-US/commands/configuration") as EnUsCommandsConfiguration;
    }

    public get playlist(): EnUsCommandsPlaylist {
        return this.container.stores.get("languages").get("en-US/commands/playlist") as EnUsCommandsPlaylist;
    }

    public get premium(): EnUsCommandsPremium {
        return this.container.stores.get("languages").get("en-US/commands/playlist") as EnUsCommandsPremium;
    }
}
