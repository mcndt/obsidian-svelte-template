import { Plugin, WorkspaceLeaf } from 'obsidian';
import { SvelteDemoView } from 'src/SvelteDemoView';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		// Register the svelte demo view
		this.registerView(
			SvelteDemoView.viewType,
			(leaf: WorkspaceLeaf) =>
				new SvelteDemoView(leaf)
		);

		// Add the view to the right sidebar
		if (this.app.workspace.layoutReady) {
			this.initLeaf();
		} else {
			this.app.workspace.onLayoutReady(this.initLeaf.bind(this));
		}
	}

	async initLeaf() {
		this.app.workspace.detachLeavesOfType(SvelteDemoView.viewType);

    await this.app.workspace.getRightLeaf(true).setViewState({
      type: SvelteDemoView.viewType,
      active: true,
    });

    this.app.workspace.revealLeaf(
      this.app.workspace.getLeavesOfType(SvelteDemoView.viewType)[0]
    );
	}

	onunload() {
		this.app.workspace.detachLeavesOfType(SvelteDemoView.viewType);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

