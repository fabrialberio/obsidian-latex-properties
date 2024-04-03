import { Plugin } from 'obsidian';

const FRONTMATTER_KEYS: Record<string, string> = {
    'latex-commands': 'multitext'
}

export default class LatexPropertiesPlugin extends Plugin {
    async onload() {
        this.setPropertyTypes();
    }

    onunload() {

    }
    
    private setPropertyTypes() {
        const app = this.app; 
        this.app.workspace.onLayoutReady(() => {
            Object.keys(FRONTMATTER_KEYS).forEach((key) => {
                // @ts-ignore
                app.metadataTypeManager.setType(key, FRONTMATTER_KEYS[key]);
            });
        });
    }
}
