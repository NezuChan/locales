import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnUsPreconditionsMusic } from "./Music.js";

@ApplyOptions<LanguageOptions>({
    name: "en-us/preconditions"
})

export class EnUsPreconditions extends LanguagePiece {
    public get music(): EnUsPreconditionsMusic {
        return this.container.stores.get("languages").get("en-us/preconditions/music") as EnUsPreconditionsMusic;
    }
}