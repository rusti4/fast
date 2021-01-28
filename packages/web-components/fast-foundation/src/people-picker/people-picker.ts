import { attr, DOM, observable } from "@microsoft/fast-element";
import { ARIAGlobalStatesAndProperties, StartEnd } from "../patterns/index";
import { applyMixins } from "../utilities/index";
import { FormAssociatedPeoplePicker } from "./people-picker.form-associated";

/**
 * A People Picker Custom HTML Element.
 *
 * @public
 */
export class PeoplePicker extends FormAssociatedPeoplePicker {
    /**
     * When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    @attr({ attribute: "readonly", mode: "boolean" })
    public readOnly: boolean;
    private readOnlyChanged(): void {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.readOnly = this.readOnly;
            this.validate();
        }
    }

    /**
     * Indicates that this element should get focus after the page finishes loading. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    @attr({ mode: "boolean" })
    public autofocus: boolean;
    private autofocusChanged(): void {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.autofocus = this.autofocus;
            this.validate();
        }
    }

    /**
     * Sets the placeholder value of the element, generally used to provide a hint to the user.
     * @public
     * @remarks
     * HTML Attribute: placeholder
     * Using this attribute does is not a valid substitute for a labeling element.
     */
    @attr
    public placeholder: string;
    private placeholderChanged(): void {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.placeholder = this.placeholder;
        }
    }

    // /**
    //  * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist} to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id}.
    //  * @public
    //  * @remarks
    //  * HTML Attribute: list
    //  */
    // @attr
    // public list: string;
    // private listChanged(): void {
    //     if (this.proxy instanceof HTMLElement) {
    //         this.proxy.setAttribute("list", this.list);
    //         this.validate();
    //     }
    // }

    // /**
    //  * A regular expression that the value must match to pass validation.
    //  * @public
    //  * @remarks
    //  * HTMLAttribute: pattern
    //  */
    // @attr
    // public pattern: string;
    // private patternChanged(): void {
    //     if (this.proxy instanceof HTMLElement) {
    //         this.proxy.pattern = this.pattern;
    //         this.validate();
    //     }
    // }

    // /**
    //  * Sets the width of the element to a specified number of characters.
    //  * @public
    //  * @remarks
    //  * HTMLAttribute: size
    //  */
    // @attr({ mode: "boolean" })
    // public spellcheck: boolean;
    // private spellcheckChanged(): void {
    //     if (this.proxy instanceof HTMLElement) {
    //         this.proxy.spellcheck = this.spellcheck;
    //     }
    // }

    // /**
    //  * @internal
    //  */
    // @observable
    // public defaultSlottedNodes: Node[];

    /**
     * A reference to the internal input element
     * @internal
     */
    public control: HTMLInputElement;

    /**
     * @internal
     */
    public connectedCallback(): void {
        super.connectedCallback();

        this.proxy.setAttribute("type", "text");
        this.validate();

        if (this.autofocus) {
            DOM.queueUpdate(() => {
                this.focus();
            });
        }
    }

    /**
     * Handles the internal control's `input` event
     * @internal
     */
    public handleTextInput(): void {
        this.value = this.control.value;
    }

    /**
     * Change event handler for inner control.
     * @remarks
     * "Change" events are not `composable` so they will not
     * permeate the shadow DOM boundary. This fn effectively proxies
     * the change event, emitting a `change` event whenever the internal
     * control emits a `change` event
     * @internal
     */
    public handleChange(): void {
        this.$emit("change");
    }
}

/**
 * Includes ARIA states and properties
 *
 * @public
 */
export class DelegatesARIAPeoplePicker {}

/**
 * Mark internal because exporting class and interface of the same name
 * confuses API documenter.
 * TODO: https://github.com/microsoft/fast/issues/3317
 * @internal
 */
/* eslint-disable-next-line */
export interface DelegatesARIAPeoplePicker extends ARIAGlobalStatesAndProperties {}
applyMixins(DelegatesARIAPeoplePicker, ARIAGlobalStatesAndProperties);

/**
 * Mark internal because exporting class and interface of the same name
 * confuses API documenter.
 * TODO: https://github.com/microsoft/fast/issues/3317
 * @internal
 */
export interface PeoplePicker extends DelegatesARIAPeoplePicker {}
applyMixins(PeoplePicker, DelegatesARIAPeoplePicker);
