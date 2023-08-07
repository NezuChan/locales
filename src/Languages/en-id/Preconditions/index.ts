import { LanguageOptions } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnIDPreconditionsMusic } from "./Music.js";
import { inlineCode } from "@discordjs/builders";
import { EnUsPreconditions } from "../../en-us/Preconditions/index.js";

@ApplyOptions<LanguageOptions>({
    name: "en-ID/preconditions"
})

export class EnIDPreconditions extends EnUsPreconditions {
    public get music(): EnIDPreconditionsMusic {
        return this.container.stores.get("languages").get("en-ID/preconditions/music") as EnIDPreconditionsMusic;
    }

    public WAIT_FOR_VOTE = (time: number | string): string => `Kamu mempunyai waktu ${inlineCode(String(time))} detik untuk vote bot https://top.gg/bot/616169470293049344/vote atau membeli premium untuk melewati ini`;
    public NOT_VOTED = (): string => "Untuk menggunakan perintah ini kamu harus vote untuk bot https://top.gg/bot/616169470293049344/vote atau membeli premium untuk melewati ini";
    public NOT_PREMIUM = (): string => "Untuk menggunakan perintah ini kamu harus premium";
}
