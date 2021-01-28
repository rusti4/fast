import { attr, customElement } from "@microsoft/fast-element";
import {
    PeoplePickerTemplate as template,
    PeoplePicker,
} from "@microsoft/fast-foundation";
import { PeoplePickerStyles as styles } from "./people-picker.styles";

/**
 * The FAST Text Field Custom Element. Implements {@link @microsoft/fast-foundation#PeoplePicker},
 * {@link @microsoft/fast-foundation#PeoplePickerTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fast-people-picker\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
@customElement({
    name: "fast-people-picker",
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
})
export class FASTPeoplePicker extends PeoplePicker {}

/**
 * Styles for PeoplePicker
 * @public
 */
export const PeoplePickerStyles = styles;
