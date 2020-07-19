import { ReactiveVar, makeVar, TypePolicy } from "@apollo/client";

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

    public getFieldReadDefinition(): Exclude<TypePolicy["fields"], void> {
        return {
            [this.name]: {
                read: () => {
                    return this.localReactiveVar()
                }
            }
        }
    }
}
