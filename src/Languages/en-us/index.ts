import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnUsUtility } from "./Utility/index.js";
import { EnUsInteractionHandlers } from "./InteractionHandlers/index.js";
import { EnUsCommands } from "./Commands/index.js";
import { EnUsPreconditions } from "./Preconditions/index.js";
import { EnUsPlayer } from "./Player/index.js";

@ApplyOptions<LanguageOptions>({
    name: "en-US"
})

export class EnUs extends LanguagePiece {
    public get utility(): EnUsUtility {
        return this.container.stores.get("languages").get("en-US/utility") as EnUsUtility;
    }

    public get interactionHandlers(): EnUsInteractionHandlers {
        return this.container.stores.get("languages").get("en-US/interaction-handlers") as EnUsInteractionHandlers;
    }

    public get commands(): EnUsCommands {
        return this.container.stores.get("languages").get("en-US/commands") as EnUsCommands;
    }

    public get preconditions(): EnUsPreconditions {
        return this.container.stores.get("languages").get("en-US/preconditions") as EnUsPreconditions;
    }

    public get player(): EnUsPlayer {
        return this.container.stores.get("languages").get("en-US/player") as EnUsPlayer;
    }
}
