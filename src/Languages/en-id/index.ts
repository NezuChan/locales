import { LanguageOptions, LanguagePiece } from "@nezuchan/i18n";
import { ApplyOptions } from "@nezuchan/decorators";
import { EnUsCommands } from "../en-us/Commands";
import { EnUsInteractionHandlers } from "../en-us/InteractionHandlers";
import { EnUsPlayer } from "../en-us/Player";
import { EnUsPreconditions } from "../en-us/Preconditions";
import { EnUsUtility } from "../en-us/Utility";

@ApplyOptions<LanguageOptions>({
    name: "en-ID"
})

export class EnID extends LanguagePiece {
    public get utility(): EnUsUtility {
        return this.container.stores.get("languages").get("en-ID/utility") as EnUsUtility;
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
