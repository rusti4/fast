export interface ExampleComponent {
    schema: any;
}

import TextareaSchema from "../../../src/__tests__/schemas/textarea.schema.json";

export const textField: ExampleComponent = {
    schema: TextareaSchema,
};

import NumberFieldSchema from "../../../src/__tests__/schemas/number-field.schema.json";

export const numberField: ExampleComponent = {
    schema: NumberFieldSchema,
};

import CheckboxSchema from "../../../src/__tests__/schemas/checkbox.schema.json";

export const checkbox: ExampleComponent = {
    schema: CheckboxSchema,
};

import AnyOfSchema from "../../../src/__tests__/schemas/any-of.schema.json";

export const anyOf: ExampleComponent = {
    schema: AnyOfSchema,
};

import OneOfSchema from "../../../src/__tests__/schemas/one-of.schema.json";

export const oneOf: ExampleComponent = {
    schema: OneOfSchema,
};

import ObjectsSchema from "../../../src/__tests__/schemas/objects.schema.json";

export const objects: ExampleComponent = {
    schema: ObjectsSchema,
};

import ArraysSchema from "../../../src/__tests__/schemas/arrays.schema.json";

export const arrays: ExampleComponent = {
    schema: ArraysSchema,
};

import ChildrenSchema from "../../../src/__tests__/schemas/children.schema.json";

export const children: ExampleComponent = {
    schema: ChildrenSchema,
};

import GeneralSchema from "../../../src/__tests__/schemas/general.schema.json";

export const generalExample: ExampleComponent = {
    schema: GeneralSchema,
};

import PluginSchema from "../../../src/__tests__/schemas/plugin.schema.json";

export const plugin: ExampleComponent = {
    schema: PluginSchema,
};
