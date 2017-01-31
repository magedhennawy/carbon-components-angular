import { Component, Injector } from "@angular/core";
import { Modal } from "../../..";

@Modal()
@Component({
	selector: "sample-modal",
	template: `
		<cdl-modal size="xl" (overlaySelected)="closeModal()">
			<cdl-modal-header (closeSelect)="closeModal()">Header text</cdl-modal-header>
			<section class="content">
				<h1>sample-modal Works!</h1>
				{{modalText}}
			</section>
			<cdl-modal-footer><button class="cancel-button" (click)="closeModal()">Cancel</button></cdl-modal-footer>
		</cdl-modal>
	`,
	styleUrls: ["./sample-modal.component.scss"]
})
export class SampleModalComponent {
	modalText: string;
	constructor(private injector: Injector) {
		this.modalText = this.injector.get("modalText");
	}
}