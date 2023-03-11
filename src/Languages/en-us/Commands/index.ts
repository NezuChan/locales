import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnUsCommandsUtility } from "./Utility.js";

@ApplyOptions<LanguageOptions>({
    name: "en-US/commands"
})

export class EnUsCommands extends LanguagePiece {
    public get utility(): EnUsCommandsUtility {
        return this.container.stores.get("languages").get("en-US/commands/utility") as EnUsCommandsUtility;
    }
}
