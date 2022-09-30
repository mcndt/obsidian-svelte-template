import { ButtonComponent, ItemView, WorkspaceLeaf } from "obsidian";

export class SvelteDemoView extends ItemView {
	static viewType = "SVELTE_DEMO_VIEW";

	private data = [];

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	/* Obsidian event lifecycle */

	async onOpen(): Promise<void> {
		this.renderView();
	}

	private renderView() {
		this.contentEl.createEl("h3", { text: "Svelte Demo View" });
		this.contentEl.createEl("p", {
			text: "This is a demo view that uses the native Obsidian API.",
		});

		this.contentEl.createEl("hr");

		// Create buttons
		const buttonDiv = this.contentEl.createDiv({ cls: "button-div" });
		new ButtonComponent(buttonDiv).setButtonText("Add item");
		new ButtonComponent(buttonDiv).setButtonText("Remove item");
		buttonDiv.style.display = "flex";
		buttonDiv.style.flexDirection = "row";
		buttonDiv.style.columnGap = "5px";

		// Create container for item list
		const listDiv = this.contentEl.createDiv();
		listDiv.style.display = "flex";
		listDiv.style.flexDirection = "column";
		listDiv.style.rowGap = "5px";
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
