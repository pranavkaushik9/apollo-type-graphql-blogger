import { FieldDefinitions, User } from "../../types";

import { BaseFieldDefinitions } from "./BaseFieldDefinitions";

class UserFieldDefinitions extends BaseFieldDefinitions<User> {
    typeName = 'User';

    fieldDefinitions(): FieldDefinitions<User> {
        return {
            fullName: (_, { readField }) => `${readField<string>('firstName')} ${readField<string>('lastName')}`
        };
    }
}

export const userFieldDefinitons = new UserFieldDefinitions();
