import { ReactiveVar, makeVar, FieldReadFunction } from "@apollo/client";

export class LocalEntity<T> {
    constructor(
        public name: string,
        public initialValue: T,
        private localReactiveVar: ReactiveVar<T> = makeVar<T>(initialValue)
    ) {
    }

    get fieldName(): string {
        return this.name;
    }

    public set(state: T) {
        this.localReactiveVar(state);
    }

    public get() {
        return this.localReactiveVar();
    }

    public getFieldReadDefinition(): {
        [key: string]: { read: FieldReadFunction<any, any> }
    } {
        return {
            [this.name]: {
                read: () => {
                    console.log('retrieving', this.localReactiveVar());
                    return this.localReactiveVar()
                }
            }
        }
    }
}
