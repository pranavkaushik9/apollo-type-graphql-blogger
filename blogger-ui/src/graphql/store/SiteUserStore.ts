import { defaultSiteUser } from "../../constants";
import { User, SiteUser } from "../../types";
import { BaseStore } from "./BaseStore";

class SiteUserStore extends BaseStore<SiteUser> {
    constructor() {
        super('siteUser', defaultSiteUser);
    }

    public setSiteUser(user?: User) {
        if (user) {
            this.set(defaultSiteUser);
        } else {
            this.set({
                isGuest: false,
                info: user
            });
        }
    }
}

export const siteUserSore = new SiteUserStore();
