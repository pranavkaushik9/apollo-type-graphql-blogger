import { FieldDefinitions } from "../../types"

export abstract class BaseFieldDefinitions<T> {
    abstract typeName: string;
    abstract fieldDefinitions(): FieldDefinitions<T>;

    get() {
        return {
            [this.typeName]: {
                fields: this.fieldDefinitions()
            }
        }
    }
}
