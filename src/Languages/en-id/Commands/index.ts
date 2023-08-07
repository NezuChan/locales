import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnIDCommandsConfiguration } from "./Configuration.js";
import { EnIDCommandsPlaylist } from "./Playlist.js";
import { EnIDCommandsPremium } from "./Premium.js";
import { EnIDCommandsUtility } from "./Utility.js";
import { EnIDCommandsMusic } from "./Music.js";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/commands"
})

export class EnIDCommands extends LanguagePiece {
    public get utility(): EnIDCommandsUtility {
        return this.container.stores.get("languages").get("en-ID/commands/utility") as EnIDCommandsUtility;
    }

    public get mIDic(): EnIDCommandsMusic {
        return this.container.stores.get("languages").get("en-ID/commands/music") as EnIDCommandsMusic;
    }

    public get configuration(): EnIDCommandsConfiguration {
        return this.container.stores.get("languages").get("en-ID/commands/configuration") as EnIDCommandsConfiguration;
    }

    public get playlist(): EnIDCommandsPlaylist {
        return this.container.stores.get("languages").get("en-ID/commands/playlist") as EnIDCommandsPlaylist;
    }

    public get premium(): EnIDCommandsPremium {
        return this.container.stores.get("languages").get("en-ID/commands/premium") as EnIDCommandsPremium;
    }
}
