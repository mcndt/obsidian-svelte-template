import { ItemView, WorkspaceLeaf } from "obsidian";
import SvelteDemoViewComponent from "./SvelteDemoView.svelte";
export class SvelteDemoView extends ItemView {
	static viewType = "SVELTE_DEMO_VIEW";

	private component: SvelteDemoViewComponent;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	/* Obsidian event lifecycle */

	async onOpen(): Promise<void> {
		this.component = new SvelteDemoViewComponent({
			target: this.contentEl,
			props: {
				title: "Anything you want!",
			},
		});
	}

	async onClose() {
		this.component.$destroy();
	}

	/* View abstract method implementations */

	getViewType(): string {
		return "SVELTE_DEMO_VIEW";
	}

	getDisplayText(): string {
		return "Svelte Demo View";
	}

	getIcon(): string {
		return "star";
	}
}
