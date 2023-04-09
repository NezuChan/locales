import { i18nManager as Oi18nManager, ManagerOptions } from "@nezuchan/i18n";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { container } from "@sapphire/pieces";

import { EnUs } from "../Languages/en-us/index.js";
import { EnUsUtility } from "../Languages/en-us/Utility/index.js";
import { EnUsInteractionHandlers } from "../Languages/en-us/InteractionHandlers/index.js";
import { EnUsCommands } from "../Languages/en-us/Commands/index.js";
import { EnUsPreconditions } from "../Languages/en-us/Preconditions/index.js";
import { EnUsPlayer } from "../Languages/en-us/Player/index.js";

export class i18nManager extends Oi18nManager {
    public constructor(options: ManagerOptions) {
        super(options);
        container.i18nManager = this;
        this.stores.get("languages").registerPath(resolve(dirname(fileURLToPath(import.meta.url)), "..", "Languages"));
    }

    public getUtility(language: string): EnUsUtility {
        return (this.stores.get("languages").get(language) as EnUs).utility;
    }

    public getInteractionHandlers(language: string): EnUsInteractionHandlers {
        return (this.stores.get("languages").get(language) as EnUs).interactionHandlers;
    }

    public getCommands(language: string): EnUsCommands {
        return (this.stores.get("languages").get(language) as EnUs).commands;
    }

    public getPreconditions(language: string): EnUsPreconditions {
        return (this.stores.get("languages").get(language) as EnUs).preconditions;
    }

    public getPlayer(language: string): EnUsPlayer {
        return (this.stores.get("languages").get(language) as EnUs).player;
    }

    public get(locale?: string): TranslateResult {
        return {
            commands: this.getCommands(locale ?? "en-US"),
            preconditions: this.getPreconditions(locale ?? "en-US"),
            interactionHandlers: this.getInteractionHandlers(locale ?? "en-US"),
            utility: this.getUtility(locale ?? "en-US"),
            player: this.getPlayer(locale ?? "en-US")
        };
    }
}

export interface TranslateResult {
    commands: EnUsCommands;
    preconditions: EnUsPreconditions;
    interactionHandlers: EnUsInteractionHandlers;
    utility: EnUsUtility;
    player: EnUsPlayer;
}
