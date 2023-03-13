import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnUsCommandsUtility } from "./Utility.js";
import { EnUsCommandsMusic } from "./Music.js";

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
}
