import { customElement } from "@microsoft/fast-element";
import { expect, assert } from "chai";
import { fixture } from "../fixture";
import { PeoplePicker, PeoplePickerTemplate as template } from "./index";

@customElement({
    name: "fast-people-picker",
    template,
})
class FASTPeoplePicker extends PeoplePicker {}

async function setup() {
    const { element, connect, disconnect, parent } = await fixture<FASTPeoplePicker>(
        "fast-people-picker"
    );

    return { element, connect, disconnect, parent };
}

describe("PeoplePicker", () => {
});
