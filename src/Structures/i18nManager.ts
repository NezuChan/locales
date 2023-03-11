import { i18nManager as Oi18nManager, ManagerOptions, LanguageStore } from "@nezuchan/i18n";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { container } from "@sapphire/pieces";

import { EnUs } from "../Languages/en-us/index.js";
import { EnUsUtility } from "../Languages/en-us/Utility/index.js";
import { EnUsInteractionHandlers } from "../Languages/en-us/InteractionHandlers/index.js";
import { EnUsCommands } from "../Languages/en-us/Commands/index.js";
import { EnUsPreconditions } from "../Languages/en-us/Preconditions/index.js";

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
}

declare module "@sapphire/pieces" {
    interface Container {
        i18nManager: i18nManager;
    }

    interface StoreRegistryEntries {
        languages: LanguageStore;
    }
}
