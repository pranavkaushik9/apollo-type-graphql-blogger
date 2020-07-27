import { FieldReadFunction } from "@apollo/client";

export type FieldDefinitions<T> = { [key: string]: FieldReadFunction<T, any> };
