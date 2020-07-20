import { useQuery } from '@apollo/client';

import { defaultSiteUser } from '../constants';
import { getSiteUser } from '../graphql';
import { SiteUserResponse, SiteUser } from '../types';

export const useSiteUser = (): SiteUser => {
    const {
        data: {
            siteUser: {
                isGuest,
                info
            }
        } = { siteUser: defaultSiteUser}
    } = useQuery<SiteUserResponse>(getSiteUser);

    return {
        isGuest,
        info
    }
};
